import { UserInterface } from '@/components/Login/login.interface';
import { useAuthStore } from '../../stores/auth.store';
import jwtDecode from 'jwt-decode';

const sessionExpire = async (auth) => {

    const fechaExpiracion = new Date(auth.expire_in);

    const fechaActual = new Date();

    return fechaExpiracion < fechaActual || auth.expire_in == null;
}

const pathLoginValidation = async (type) => {

    return type == 'external' ? '/login-external' : '/login'
}

const pathPublicValidation = async (type) => {

    return type == 'external' ? '/seguimiento/clientes' : '/';
}

const roleValidation = async (auth, roles) => {

    let canAccess = true;

    let rol = 'Usuario';

    if (auth.access_token != undefined) {
        const decoded: UserInterface = jwtDecode(auth.access_token);

        rol = decoded.rol;
    }

    if (roles != undefined) {

        canAccess = roles.filter(f => {
            return f.rol.toString() == rol;
        }).length > 0;
    }

    return canAccess;
}

const isAuthenticatedGuard = async (to) => {

    const { meta, path } = to;
    const { tipo, roles } = meta;

    const publicPages = ['/login', '/login-external'];
    const authRequired = !publicPages.includes(path);
    const auth = useAuthStore();

    if (authRequired) {

        if (await sessionExpire(auth)) {
            return await pathLoginValidation(tipo);
        }

        const canAccess = await roleValidation(auth, roles);

        if (!canAccess) {
            return '/access';
        }
    }
    else if (!await sessionExpire(auth)) {
        return await pathPublicValidation(auth.type);
    }
}

export default isAuthenticatedGuard
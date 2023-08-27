import { defineStore } from 'pinia';
import authApi from '../authentication/interceptors/api/axios';
import jwtDecode from 'jwt-decode';
import router from '@/router';
import { UserInterface } from '@/components/Login/login.interface';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        access_token: localStorage.getItem('access_token'),
        expire_in: localStorage.getItem('expire_in'),
        type: localStorage.getItem('type'),
        external_email: localStorage.getItem('external_email'),
        external_cliente: localStorage.getItem('external_cliente'),
        external_pais: localStorage.getItem('external_pais'),
        external_pa8: localStorage.getItem('external_pa8'),
        returnUrl: localStorage.getItem('returnUrl'),  
    }),
    actions: {
        async login(user) {

            const { email, password } = user

            try {

                const dataLogin = JSON.parse('{"username": "' + email + '", "password": "' + password + '"}');

                const { data } = await authApi.post(`/Authenticate/`, dataLogin);

                const { access_token, expireIn } = data

                this.access_token = access_token;
                this.expire_in = expireIn;
                this.type = 'internal';

                localStorage.setItem('access_token', access_token);
                localStorage.setItem('expire_in', expireIn);
                localStorage.setItem('type', 'internal');

                return { ok: true }

            } catch (error) {
                return { ok: false, message: 'Credenciales incorrectas' }
            }
        },
        async loginExternal(user) {

            const { email } = user;

            try {

                const { data } = await authApi.get(`/AuthenticateExternal/${email}`);

                const { expireIn, cliente, entidad, pa8 } = data

                this.access_token = null;
                this.expire_in = expireIn;
                this.type = 'external';
                this.external_email = email;
                this.external_cliente = cliente;
                this.external_pais = entidad;
                this.external_pa8 = pa8;

                localStorage.removeItem('access_token');
                localStorage.setItem('expire_in', expireIn);
                localStorage.setItem('type', 'external');
                localStorage.setItem('external_email', email);
                localStorage.setItem('external_cliente', cliente);
                localStorage.setItem('external_pais', entidad);
                localStorage.setItem('external_pa8', pa8);

                return { ok: true }

            } catch (error) {
                return { ok: false, message: 'Credenciales incorrectas' }
            }

        },
        logout(path) {

            this.access_token = null;
            this.expire_in = null;
            this.type = null;
            this.external_email = null;
            this.external_cliente = null;
            this.external_pais = null;
            this.external_pa8 = null;

            localStorage.removeItem('access_token');
            localStorage.removeItem('expire_in');
            localStorage.removeItem('type');
            localStorage.removeItem('external_email');
            localStorage.removeItem('external_cliente');
            localStorage.removeItem('external_pais');
            localStorage.removeItem('external_pa8');

            router.push(path);
        },
        userInfo() {

            if (this.access_token != null) {
                const decoded: UserInterface = jwtDecode(this.access_token);

                return decoded;
            }
        }
    }
});
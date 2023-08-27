export interface UserInterface {   
  idUsuario: string;
  rol: string;
  username: string;
  nombre: string;
  idEntidad: string;
  idOperacion: string;
  idCentro: string;
  idrol: string;
  sub: string;
  pais: string;
  }

export interface TMSMenuInterface {
  idmenu: string;
  label: string;
  icon: string;
  items: TMSMenuDetInterface[]
  roles: TMSMenuRolInterface[]
}

export interface TMSMenuDetInterface {
  id: string;
  idmenu: string;
  label: string;
  icon: string;
  to: string;
  import: string;
}

export interface TMSMenuRolInterface {
  id: string;
  idmenu: string;
  idrol: string;
}
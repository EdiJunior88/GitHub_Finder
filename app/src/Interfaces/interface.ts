export interface InterfaceUsuario {
  login: string;
  avatar_url: string;
  location: string;
  bio: string;
  followers: number;
  following: number;
}

export interface InterfaceRepositorio {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number
}


export interface InterfaceCarregando {
  intervalo: number,
}
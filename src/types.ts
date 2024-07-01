// src/types.ts
export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface UserLogin {
  uuid: string;
}

export interface User {
  gender: string;
  name: UserName;
  email: string;
  nat: string;
  picture: UserPicture;
  login: UserLogin;
}

export interface ApiResponse {
  results: User[];
}

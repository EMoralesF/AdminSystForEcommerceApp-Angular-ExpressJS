import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpService) {
    
   }

  public async obtenerUsuarios() {
    return await this.http.get("/users");
  }

  public async eliminarUsuario(username) {
    return await this.http.delete("/user?username=".concat(username));
  }  

  public async agregarUsuario(usuario: User) {
    return await this.http.post("/user", usuario);
  }
}

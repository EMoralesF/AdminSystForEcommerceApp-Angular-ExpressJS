import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { UsersService } from 'src/app/users.service';
import {User} from 'src/app/user';

@Component({
  selector: 'app-agregar-user',
  templateUrl: './agregar-user.component.html',
  styleUrls: ['./agregar-user.component.css']
})
export class AgregarUserComponent implements OnInit {
  //Variables
  usuarioModel = new User("","","",);

  constructor(private userService: UsersService, private snackBar: MatSnackBar) { }
  public cargando=false;

  async guardar() {
    if (!this.usuarioModel.username) {
      return alert("Escribe un nombre de usuario");
    }
    if (!this.usuarioModel.email) {
      return alert("Escribe la descripción");
    }
    if (!this.usuarioModel.password) {
      return alert("Escribe el precio");
    }
    if (!this.usuarioModel.id) {
      return alert("Escribe el precio");
    }
    this.cargando = true;
    //Guardamos producto:
    this.userService.agregarUsuario(this.usuarioModel);
    
    this.cargando = false;
    this.usuarioModel = new User("","","");
  }

  ngOnInit(): void {
  }
}

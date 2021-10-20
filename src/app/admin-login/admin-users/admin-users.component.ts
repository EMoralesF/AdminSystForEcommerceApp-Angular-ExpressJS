import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  //Variables:
  public listaUsuarios = [];
  public columnas = ['id', 'username', 'email', 'password', 'borrar'];
  constructor(private router: Router, private usersService: UsersService) { }

  async ngOnInit() {
    await this.obtenerProductos();
    console.log(this.listaUsuarios);
  }

  async obtenerProductos() {
    this.listaUsuarios = await this.usersService.obtenerUsuarios();
  }

  async eliminar(usuario) {
    if (!confirm("¿Realmente lo quieres eliminar<?")) {
      return;
    }
    await this.usersService.eliminarUsuario(usuario.username);
    await this.obtenerProductos();
  }

  navegarAFormulario() {
    this.router.navigateByUrl("adminLogin/agregarUser");
  }
}

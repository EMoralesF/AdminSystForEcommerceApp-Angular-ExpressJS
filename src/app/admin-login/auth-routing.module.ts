import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AdminLoginComponent } from './admin-login.component';
//Child routes:
import { AdminProductosComponent } from './admin-productos/admin-productos.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminVentasComponent } from './admin-ventas/admin-ventas.component';
import { AgregarComponent } from './admin-productos/agregar/agregar.component';
import { DetallesComponent } from './admin-ventas/detalles/detalles.component';
import { AgregarUserComponent } from './admin-users/agregar-user/agregar-user.component';

const routes: Routes = [
  {path: '', component: AdminLoginComponent, children: [
    {path: 'products', component: AdminProductosComponent},
    {path: 'users', component: AdminUsersComponent},
    {path: 'ventas', component: AdminVentasComponent},
    {path: 'agregar', component: AgregarComponent},
    {path: 'detalles/:id', component: DetallesComponent},
    {path: 'agregarUser', component: AgregarUserComponent},
    {path: '', component: AdminProductosComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
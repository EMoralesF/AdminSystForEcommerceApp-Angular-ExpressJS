import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login.component';
import { FormsModule } from '@angular/forms'; //Se debe importar para poder usar formularios.
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminProductosComponent } from './admin-productos/admin-productos.component';
import { AdminVentasComponent } from './admin-ventas/admin-ventas.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AgregarComponent } from './admin-productos/agregar/agregar.component';
import { DetallesComponent } from './admin-ventas/detalles/detalles.component';
import { AgregarUserComponent } from './admin-users/agregar-user/agregar-user.component';
import { MatCardModule } from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AdminLoginComponent,
    AdminMenuComponent,
    AdminProductosComponent,
    AdminVentasComponent,
    AdminUsersComponent,
    AgregarComponent,
    DetallesComponent,
    AgregarUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatBadgeModule,
    MatMenuModule,
  ],
  exports : [
    AdminLoginComponent,
    RouterModule
  ]
})
export class AuthModule { }


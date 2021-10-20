import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TiendaComponent} from './tienda/tienda.component';
import {DetalleDeProductoComponent} from "./detalle-de-producto/detalle-de-producto.component";
import {TerminarCompraComponent} from "./terminar-compra/terminar-compra.component";

const routes: Routes = [
  {path: 'tienda', component: TiendaComponent},
  {path: 'producto/detalle/:id', component: DetalleDeProductoComponent},
  {path: 'terminar_compra', component: TerminarCompraComponent},
  {path: 'adminLogin', loadChildren: () => import('./admin-login/auth.module').then(m => m.AuthModule)},
  {path: '', redirectTo: "/tienda", pathMatch: "full"},
  {path: '**', redirectTo: "/tienda"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing:false,
    useHash: true, // <- Indicar que se use el hash
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

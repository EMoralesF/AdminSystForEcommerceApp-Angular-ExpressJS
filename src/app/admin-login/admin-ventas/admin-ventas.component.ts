import { Component, OnInit } from '@angular/core';
import {VentasService} from "src/app/ventas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-ventas',
  templateUrl: './admin-ventas.component.html',
  styleUrls: ['./admin-ventas.component.css']
})
export class AdminVentasComponent implements OnInit {

  constructor(private ventasService: VentasService, private router:Router) {

  }
  
  public ventas = [];
  public columnas = ['cliente', 'direccion', 'total', 'detalles'];

  async ngOnInit() {
    this.ventas = await this.ventasService.obtenerVentas();
    console.log(this.ventas);
  }

  public verDetalle(id) {
    console.log({id})
    this.router.navigate(["adminLogin/detalles", id])
  }
  
}

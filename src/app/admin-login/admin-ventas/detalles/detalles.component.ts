import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/ventas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(private ventasService: VentasService, private activatedRoute: ActivatedRoute) { }

  public venta = {
    total: 0,
    nombre: "",
    direccion: "",
    productos: [],
  };

  public columnas = ['nombre', 'precio'];

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    this.venta = await this.ventasService.obtenerDetalleDeVenta(id);
  }

}

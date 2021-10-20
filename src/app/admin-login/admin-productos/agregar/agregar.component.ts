import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import { ProductosService } from 'src/app/productos.service';
import {Producto} from 'src/app/producto';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  productoModel = new Producto("", "",);
  @ViewChild("foto", {
    read: ElementRef
  }) foto: ElementRef;

  constructor(private productosService: ProductosService, private snackBar: MatSnackBar) { }

  public cargando = false;

  async guardar() {
    if (!this.productoModel.nombre) {
      return alert("Escribe un nombre");
    }
    if (!this.productoModel.descripcion) {
      return alert("Escribe la descripción");
    }
    if (!this.productoModel.precio) {
      return alert("Escribe el precio");
    }
    let archivos = this.foto.nativeElement.files;
    if (!archivos.length) {
      return alert("Selecciona al menos una foto");
    }
    this.cargando = true;
    // Guardamos producto
    const idProductoGuardado = await this.productosService.agregarProducto(this.productoModel);
    // Y luego las fotos
    const fd = new FormData();
    for (let x = 0; x < archivos.length; x++) {
      fd.append(`foto_${x}`, archivos[x])
    }
    fd.append("idProducto", idProductoGuardado);
    const respuesta = await this.productosService.agregarFotosDeProducto(fd);
    this.snackBar.open("Producto guardado", "", {
      duration: 1500,
      horizontalPosition: "start",
      verticalPosition: "top",
    });

    this.cargando = false;
    this.productoModel = new Producto("", "");
    this.foto.nativeElement.value = "";
  }
  
  ngOnInit(): void {
  }

}

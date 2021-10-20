import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  opciones=[
    {
      ruta: '/adminLogin/products',
      texto: 'Productos'
    },
    {
      ruta: '/adminLogin/users',
      texto: 'Administradores'
    },
    {
      ruta: '/adminLogin/ventas',
      texto: 'Clientes y ventas'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

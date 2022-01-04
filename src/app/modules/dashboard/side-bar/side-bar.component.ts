import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {
  pages = [
    { title: 'Zapatos', subPages: [
      { title: 'Lista', url: '/dashboard/shoes/shoes-list', icon: 'bi bi-list-ol' },
      { title: 'Crear', url: '/dashboard/shoes/create', icon: "bi bi-plus-square"},
    ] },
    { title: 'Tiendas', subPages: [
      { title: 'Lista', url: '/dashboard/stores/list', icon: 'bi bi-list-ol' },
    ] },
    { title: 'Proveedores', subPages: [
      { title: 'Lista', url: '/dashboard/suppliers/list', icon: 'bi bi-list-ol' },
    ] },
    { title: 'Vendedores', subPages: [
      { title: 'Lista', url: '/dashboard/sellers/list', icon: 'bi bi-list-ol' },
    ] },
  ]
  constructor(
    private auth:AuthService
  ) { }

  ngOnInit() {
  }

  logOut(){
    this.auth.logOut()
  }

}

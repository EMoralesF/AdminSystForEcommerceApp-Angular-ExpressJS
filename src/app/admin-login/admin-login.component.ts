import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  isLogin : boolean = false; //Por defecto es false y aparece el div, cuando pasa a true desaparece.
  //Usuario:
  usuarioAdmin = new User( "","", "");
  constructor(//Aquí ponemos las variables que vamos a pedir al servidor
    //private _api: HttpService,
    private _auth: AuthService,
    private _router:Router,
    private tokenStorage: TokenStorageService
    ) {

   }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLogin = true;
    }
  }

  
  public async logIn(){
    console.log(this.usuarioAdmin);
    const estaRegistrado = await this._auth.singin(this.usuarioAdmin);
    if(estaRegistrado.length==0){
      console.log("No registrado.");
    } else{
      this.isLogin=true;
      this.tokenStorage.saveToken(estaRegistrado.accessToken);
      this.tokenStorage.saveUser(estaRegistrado);
      this._router.navigateByUrl("/adminLogin/products");
    }
    

  }
  
  logOut(){
    this.isLogin=false;
    this.tokenStorage.signOut();
    this._router.navigateByUrl("/adminLogin");
  }

}
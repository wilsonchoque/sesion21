import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermisoGuard implements CanActivate {
  
  localLg!:string;


  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
    if(this.verificar()){
      return true;
    }else{
      swal.fire({
        icon: 'error',
        title: 'Tiene que Loguearse',
        text: 'Es necesario para poder ingresar',
      })
      return false;
    }


  }


  verificar():boolean{
    this.localLg = String(localStorage.getItem('logeado'));

    if(this.localLg == 'true'){
      return true;
    }
    else{
      return false;
    }

  }
  
}

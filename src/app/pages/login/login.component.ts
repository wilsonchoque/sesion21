import { Component } from '@angular/core';
import swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = "admin";
  password = "123456";
  condicion = 'false';
  mensaje!: String;
  aceptado = false;
  rechazado = false;

  verificar(usuarioInput: String, passwordInput: String) {

    if (usuarioInput == this.usuario && passwordInput == this.password) {

      swal.fire({
        icon: 'success',
        title: 'Usuario Correcto',
        showConfirmButton: false,
        timer: 1500
      })

      this.condicion = 'true';

      localStorage.setItem('usuario', this.usuario);
      localStorage.setItem('contraseña', this.password);
      localStorage.setItem('logeado', this.condicion);

    } else {

      swal.fire({
        icon: 'error',
        title: 'Usuario Incorrecto',
        text: 'Ingrese otra vez',
      })

      this.condicion = 'false';
    }

    

  }


}

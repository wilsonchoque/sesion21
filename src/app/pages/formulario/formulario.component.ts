import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public form!:FormGroup;

  persona={};

  constructor(private formulario:FormBuilder){}

  

  registrar(){
    
    if(this.form.valid){
      this.persona = this.form.value;
      localStorage.setItem('lleno', 'true');
    }else{
      localStorage.setItem('lleno', 'false');
    }

  }

  ngOnInit(): void {

    localStorage.setItem('lleno', 'false');
    
    this.form = this.formulario.group({
      nombre:[
        '',
        [
          Validators.required,
          Validators.minLength(4),
        ]
      ],
      
      apellido:[
        '',
        [
          Validators.required,
          Validators.minLength(4),
        ]
      ],

      usuario:[
        '',
        [
          Validators.required,
        ]
      ],

      email:[
        '',
        [
          Validators.email,
          Validators.required,
        ]
      ],

      asunto:[
        '',
        [
          Validators.required,
          Validators.minLength(5),
        ]
      ],

      mensaje:[
        '',
        [
          Validators.required,
          Validators.minLength(5),
        ]
      ],

    })
  }


}

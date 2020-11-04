import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ClientesService} from './../../../core/services/clientes/clientes.service'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private clientesService : ClientesService ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct (event: Event){
    event.preventDefault()
    console.log(this.form.value);
  }

  // saveProduct (event: Event){
  //   event.preventDefault()
  //   if(this.form.valid){
  //     const cliente = this.form.value;
  //     this.clientesService.createCliente(cliente)
  //     .subscribe((newCliente) =>{
  //       console.log(newCliente);
  //     })
  //   }
  //   console.log(this.form.value);
  // }
  


  private buildForm (){
    this.form = this.formBuilder.group({
      nombre:['', [Validators.required]],
      apellido_p: ['', [Validators.required]],
      apellido_m: ['', [Validators.required]],
      email: ['',[Validators.required]],
      empresa: ['', [Validators.required]],
      trabajo: ['',[Validators.required]],
      cuidad: ['', [Validators.required]]
      
    })
  }

}

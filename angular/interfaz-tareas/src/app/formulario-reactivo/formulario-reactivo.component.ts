import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Contenidos } from '../contenidos';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css'
})
export class FormularioReactivoComponent {

  //variables formulario
  contenido: Contenidos[] = [];
  hiddenAlert: boolean = true;
  hiddenContent: boolean = true;
  idTarea = 0;

  //metodo para nuevas tareas
  nuevaTarea(){
    this.idTarea = this.idTarea +1;
    this.contenido.push({id: this.idTarea,titulo:'', desc:''});
  }

  //metodo para eliminar tarea
  eliminarTarea(id: number){
    const nuevoArray = this.contenido.splice(id,1)
    this.contenido = nuevoArray;
  }

  //validaciones de los inputs
  tarea = new FormControl('', Validators.required);
  descripcion = new FormControl('', [Validators.required, Validators.maxLength(500)]);

}

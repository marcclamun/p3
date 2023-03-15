import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit,  ElementRef, ViewChild } from '@angular/core';
import { loginServices } from '../services/loginServices';
import { FormComponent } from '../form/form/form.component';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ClientesComponent implements OnInit{
  clientes: Clientes[] = [ ];
  firstname2: any = "";
  secondname2: any = "";
  thirdname2: any = "";
  phone2: any = ""
  birthdate2: any = "";
  email2: any = "";
  password2: any = "";
  check2:any="";

  constructor(private loginServices: loginServices) {
  }
  ngOnInit(): void {

    this.loginServices.sendLogin(this.firstname2, this.secondname2, this.thirdname2, this.phone2, this.birthdate2, this.email2, this.password2, this.check2).subscribe((clientes: Clientes[])=>{
      this.clientes = clientes;
    })
  }

}
export interface Clientes {
  firstname2: string;
  secondname2: string;
  thirdname2: string;
  phone2: string;
  birthdate2: string;
  email2: string;
  password2: string;
  check2:string;
}


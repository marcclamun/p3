import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginServices } from '../../services/loginServices';
import { ClientesComponent } from '../../clientes/clientes.component';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  selectedOption = '1';


  firstname: FormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), this.checkName.bind(this)]);
  secondname: FormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
  thirdname: FormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
  phone: FormControl = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(9), Validators.maxLength(9)]);
  birthdate: FormControl = new FormControl('', Validators.required);
  email: FormControl = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
  password: FormControl = new FormControl('', [Validators.minLength(6), Validators.maxLength(15)]);
  check: FormControl = new FormControl('', [Validators.required]);

  MyNewForm = new FormGroup({
    firstname2: this.firstname,
    secondname2: this.secondname,
    thirdname2: this.thirdname,
    phone2: this.phone,
    birthdate2: this.birthdate,
    email2: this.email,
    password2: this.password,
    check2: this.check,
  });
  // ngOnInit() { }
  // Clic(datos: FormGroup) { console.log(datos); }
  clientes: Clientes[] = [];
  firstname2: string = "";
  secondname2: string = "";
  thirdname2: string = "";
  phone2: string = ""
  birthdate2: string = "";
  email2: string = "";
  password2: string = "";
  check2: string = "";

  @ViewChild("it1") myNameElem!: ElementRef;
  @ViewChild("it2") myNameElem2!: ElementRef;
  @ViewChild("it3") myNameElem3!: ElementRef;
  @ViewChild("it4") myNameElem4!: ElementRef;
  @ViewChild("it5") myNameElem5!: ElementRef;
  @ViewChild("it6") myNameElem6!: ElementRef;
  @ViewChild("it7") myNameElem7!: ElementRef;
  @ViewChild("it8") myNameElem8!: ElementRef;


  constructor(private loginServices: loginServices) {
    // this.productService.broadCastProductName(this.productName, this.productPrice);
  }
  public addProduct() {
    this.loginServices.sendLogin(this.myNameElem.nativeElement.value,
      this.myNameElem2.nativeElement.value, this.myNameElem3.nativeElement.value,
      this.myNameElem4.nativeElement.value, this.myNameElem5.nativeElement.value,
      this.myNameElem6.nativeElement.value, this.myNameElem7.nativeElement.value, this.myNameElem8.nativeElement.value
    );
  }
  checkName(control: FormControl) {
    this.firstname2 = control.value.toLowerCase(); 
    if (this.firstname2 === 'hitler' || this.firstname2 === 'mussolini' || this.firstname2 === 'franco' || this.firstname2 === 'putin') {
      return  { inappropriateName: true }; }
       return null; }

}
export interface Clientes {
  firstname2: string;
  secondname2: string;
  thirdname2: string;
  phone2: string;
  birthdate2: string;
  email2: string;
  password2: string;
  check2: string;
}


import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { Observable } from "rxjs";

@Injectable()
export class loginServices {
    constructor() { }

    clientes: Clientes[] = [];
    public sendLogin(firstname2: string, secondname2: string, thirdname2: string, phone2: string, birthdate2: string, email2:string, password2:string,  check2:string): Observable<Clientes[]> {
        if (email2 != "" && password2 != "") {
            this.clientes.push({firstname2 : firstname2, secondname2 : secondname2, thirdname2 : thirdname2, phone2 : phone2, birthdate2 : birthdate2, email2 : email2, password2 : password2, check2 : check2});
        }
        return of(this.clientes);
    }
}
export interface Clientes { firstname2: string; secondname2: string; thirdname2: string; phone2: string; birthdate2: string; email2:string; password2:string; check2 : string}
   
import { FormGroup } from '@angular/forms';

export class User {
    public email:string;
    public password:string;

    constructor(form:FormGroup) {
       this.email = form.controls.email.value;
       this.password = form.controls.password.value;

    }
}
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRegisterService } from './login-register.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    public formGroup = new FormGroup({

        displayName: new FormControl('', [

            Validators.required

        ]),

        email: new FormControl('', [

            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(255),
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')

        ]),

        password: new FormControl('', [

            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(255)

        ])

    });

    public constructor(private loginRegisterService: LoginRegisterService) {

    }

    public register(obj: any): void {


    }

}

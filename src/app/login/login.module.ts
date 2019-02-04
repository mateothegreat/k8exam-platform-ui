import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';

@NgModule({

    imports: [

        CommonModule,
        RouterModule.forChild([

            {

                path: 'login',
                component: LoginComponent

            }

        ]),

        SharedModule,

    ],

    declarations: [

        LoginComponent,

        RegisterComponent

    ],

    providers: [

        LoginService

    ],

    entryComponents: [

        LoginComponent,

    ]

})
export class LoginModule {
}

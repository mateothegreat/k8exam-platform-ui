import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';
import { NgProgressModule }        from '@ngx-progressbar/core';
import { NgProgressHttpModule }    from '@ngx-progressbar/http';
import { TeximateModule }          from 'ngx-teximate';
import { ToastrModule }            from 'ngx-toastr';
import { AutofocusDirective }      from './_lib/AutofocusDirective';

import { AppComponent }     from './app.component';
import { FooterComponent }  from './footer/footer.component';
import { HeaderComponent }  from './header/header.component';
import { HomeComponent }    from './home/home.component';
import { SharedModule }     from './shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({

    declarations: [

        AppComponent,
        AutofocusDirective,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        SidenavComponent,

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        NgProgressModule,
        NgProgressHttpModule,
        SharedModule,
        TeximateModule,

        RouterModule.forRoot([

            {

                path: 'home',
                component: HomeComponent,

            }

        ]),

        ToastrModule.forRoot({

            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            progressBar: true,
            enableHtml: true,
            closeButton: true

        }),

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}

import { Component }     from '@angular/core';
import { bounceInRight } from 'ng-animate';
import { TextAnimation } from 'ngx-teximate';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

    public enterAnimation: TextAnimation = {

        animation: bounceInRight,
        delay: 50,
        type: 'letter'

    };

    public constructor() {

    }

}

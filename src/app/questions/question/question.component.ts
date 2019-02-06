import { Component, Input } from '@angular/core';
import { Question }         from '../_lib/Question';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: [ './question.component.scss' ]
})
export class QuestionComponent {

    public answersVisible: boolean;

    @Input() public question: Question;

}

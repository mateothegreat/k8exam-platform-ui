import { Component, OnInit } from '@angular/core';
import { Pageable }          from '@ngxux/datatable/lib/Pageable';
import { Question }          from '../_lib/Question';
import { QuestionsService }  from '../questions.service';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: [ './questions.component.scss' ]
})
export class QuestionsComponent implements OnInit {

    public questions: Array<Question>;

    public constructor(private questionsService: QuestionsService) {

        questionsService.getPageable().subscribe((pageable: Pageable<Question>) => {

            console.log(pageable.content);

            this.questions = pageable.content;

        });

    }

    public ngOnInit() {

    }

}

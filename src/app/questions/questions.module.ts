import { CommonModule }       from '@angular/common';
import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { FontAwesomeModule }  from '@fortawesome/angular-fontawesome';
import { QuestionComponent }  from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({

    declarations: [

        QuestionComponent,

        QuestionsComponent

    ],

    imports: [

        CommonModule,
        FontAwesomeModule,

        RouterModule.forChild([

                {

                    path: 'questions',
                    component: QuestionsComponent

                }

            ]
        )

    ]

})
export class QuestionsModule {
}

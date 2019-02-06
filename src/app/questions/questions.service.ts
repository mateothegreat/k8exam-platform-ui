import { Injectable }    from '@angular/core';
import { DataTablePage } from '@ngxux/datatable';
import { Pageable }      from '@ngxux/datatable/lib/Pageable';
import { Observable }    from 'rxjs';
import { APIClient }     from '../_lib/APIClient';
import { Question }      from './_lib/Question';

@Injectable({
    providedIn: 'root'
})
export class QuestionsService extends APIClient<Question> {

    public getPageable(page?: DataTablePage): Observable<Pageable<Question>> {

        return this._getPageable('questions/list', page);

    }

    public getByUUID(uuid: string): Observable<Question> {

        return this.get(`questions/${ uuid }`);

    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginRegisterService {

    public constructor(private httpClient: HttpClient) {

    }

    public register(obj: any): Observable<any> {

        return this.httpClient.post(`${environment.API_BASE}/users`, obj);

    }

}

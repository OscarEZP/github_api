import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  url = environment.API_URL;
  constructor(private http: HttpClient) { }

  getSearchUser(user: string): Observable<any> {
    const url = `${this.url}users/${user}`;
    return this.http.get(url);
  }
}

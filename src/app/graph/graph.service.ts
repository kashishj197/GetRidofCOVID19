import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable(({
  providedIn: 'root'
}))
export class GraphService {

  constructor(private _http: HttpClient) { }

  dailyCases() {
    return this._http.get("http://localhost:3000/api/stats")
    .pipe(
      map(result => result)
    );
  }
}

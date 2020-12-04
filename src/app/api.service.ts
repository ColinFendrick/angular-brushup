import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	private SERVER_URL = 'http://localhost:3000/products';
	constructor (private httpClient: HttpClient) { }

	public get (): Observable<any> {
		return this.httpClient.get(this.SERVER_URL);
	}
}

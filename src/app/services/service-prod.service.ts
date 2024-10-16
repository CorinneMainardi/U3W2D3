import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { iResponse } from '../interface/i-product';

@Injectable({
  providedIn: 'root',
})
export class ServiceProdService {
  apiUrl: string = 'https://dummyson.com/products';
  constructor(private http: HttpClient) {}

  getProduct(): Observable<iResponse> {
    return this.http.get<iResponse>(this.apiUrl);
  }

  // products$ = new BehaviorSubject<
}

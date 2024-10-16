import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceProdService {
  apiUrl: string = 'https://dummyson.com/products';
  constructor(private http: HttpClient) {}

  // products$ = new BehaviorSubject<
}

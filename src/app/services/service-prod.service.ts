import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { iProduct, iResponse } from '../interface/i-product';

@Injectable({
  providedIn: 'root',
})
export class ServiceProdService {
  apiUrl: string = 'https://dummyjson.com/products';
  cart$ = new Subject<iProduct>();
  favoritesArray: iProduct[] = [];
  favorites$ = new Subject<iProduct>();

  favoriteObj$ = this.favorites$.asObservable().pipe(
    map((product) => {
      this.favoritesArray.push(product);
    })
  );

  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http
      .get<iResponse>(this.apiUrl)
      .pipe(map((res) => res.products));
  }

  addToCart(product: iProduct) {
    this.cart$.next(product);
  }
  addToFavorites(product: iProduct) {
    this.favorites$.next(product);
  }
}

import {Injectable, signal} from '@angular/core';
import {catchError, finalize, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../interfaces/product-location.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  loading$ = signal<boolean>(true);
  error!: string;

  constructor(
    private http: HttpClient
  ) {
  }

  getProduct(): Observable<Product> {
    return this.http.get<Product>('assets/data/product-details.json').pipe(
      catchError(() => {
        this.error = 'Помилка при завантаженні продукту';
        alert('Помилка при завантаженні продукт')
        return of(null as any);
      }),
      finalize(() => {
        //template if else
        this.loading$.set(false);
      })
    )
  }
}

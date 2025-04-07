import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product.model'; // Ensure correct path

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Fetch mobiles specifically
  getMobiles(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/category/mobiles`);
  }

  // Fetch products by category dynamically
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/category/${category}`);
  }

  // Fetch all products (if needed)
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  

  addProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Product>(this.baseUrl, product, { headers });
  }
}

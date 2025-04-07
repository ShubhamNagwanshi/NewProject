import { Injectable } from '@angular/core';
import { ProductService } from './productservice.service';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    public productService: ProductService,
   
  ) {}
}

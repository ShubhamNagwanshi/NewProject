import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  laptops: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductsByCategory('laptop').subscribe((data: Product[]) => {
      this.laptops = data;
    });
  }
}
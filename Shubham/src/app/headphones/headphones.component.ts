import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice.service'; // Ensure the correct path
import { Product } from '../models/product.model'; // Ensure the correct path

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css']
})
export class HeadphonesComponent implements OnInit {
  headphones: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchHeadphones();
  }

  fetchHeadphones(): void {
    this.productService.getProductsByCategory('headphone').subscribe({
      next: (data: Product[]) => {
        this.headphones = data;
      },
      error: (err) => {
        console.error('Error fetching headphones:', err);
      }
    });
  }
}

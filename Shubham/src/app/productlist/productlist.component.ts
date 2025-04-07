import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../productservice.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {
  category: string = '';
  products: Product[] = [];
  noProducts: boolean = false; // Flag to check if products exist

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || 'mobiles'; // Default category
      this.fetchProducts();
    });
  }

  fetchProducts(): void {
    this.productService.getProductsByCategory(this.category).subscribe(data => {
      if (Array.isArray(data) && data.length > 0) {
        this.products = data;
        this.noProducts = false;
      } else {
        this.products = [];
        this.noProducts = true;
      }
    });
  }
}
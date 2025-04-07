import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model'; // Import Product Model
import { ProductService } from '../productservice.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  isMobileListVisible = false;
  mobiles: Product[] = []; // Use Product model

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchMobiles();
  }

  fetchMobiles() {
    this.productService.getMobiles().subscribe(data => {
      this.mobiles = data;
    });
  }

  showMobiles() {
    this.isMobileListVisible = !this.isMobileListVisible;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  cartItemCount = 0; // Default cart count

  constructor() {}

  addToCart() {
    this.cartItemCount++; // Simulates adding items to the cart
  }

  currentBackground: string = 'assets/electromart.webp'; // Default background

  // Object containing category-specific background images
  private backgroundImages: { [key: string]: string } = {
    mobiles: 'assets/cellphone2.jpg',
    laptops: 'assets/laptopImage3.jpg',
    headphones: 'assets/headphone2.jpg'
  };

  // Function to change background dynamically
  changeBackground(category: string) {
    console.log('Hovered category:', category); // Debugging: check category value
    if (this.backgroundImages[category]) {
      this.currentBackground = this.backgroundImages[category];
    } else {
      this.currentBackground = 'assets/electromart.webp'; // Fallback to default
    }
  }

  // Function to reset background on mouse leave
  resetBackground() {
    this.currentBackground = 'assets/electromart.webp';
  }
}

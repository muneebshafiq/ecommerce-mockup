import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ecommerce-app-v16';

  constructor(private router: Router) { }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
}

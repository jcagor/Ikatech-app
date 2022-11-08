import { Component, OnInit } from '@angular/core';
import { Products } from './interfaces/productos';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  listProducts: Products;

  constructor(
    private _productsService: ProductsService
  ) { }

  async ngOnInit() {
    await this.getProducts();
  }

  async getProducts () {
    await this._productsService.getProducts().subscribe(data => {
      this.listProducts = data;
    });
  }

}

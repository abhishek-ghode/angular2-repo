import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ProductService} from './products.service'

@Component({
    selector: 'pm-products',
    moduleId:module.id,
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
        console.log(value);
    }

    filteredProducts: IProduct[];

    constructor(
        private _productService:ProductService){
            this.filteredProducts = this.products;
            this.listFilter = 'cart';
    }

    products: IProduct[]= this._productService.getProducts();


/*    constructor() {
    }*/

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }
}

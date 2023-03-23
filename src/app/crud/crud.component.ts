import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  constructor(public commonService: CommonService) {}
  productList = [];
  productApiError: any = null;
  filterOptions = {
    ProductId: 0,
    ProductName: 0,
    Category: 0,
    Price: 0,
  };
  loaderFlag: boolean = false;
  ngOnInit(): void {
    this.loaderFlag = true;
    this.getProductData();
  }

  getProductData() {
    let productsData = [];
    this.commonService.apiCall('get', `/v1/products`).subscribe(
      (data) => {
        console.log(data);
        this.productList = data['products'];
        this.loaderFlag = false;
        for (let eachFilter of Object.keys(this.filterOptions)) {
          console.log(this.filterOptions[eachFilter]);
          if (this.filterOptions[eachFilter]) {
            if (eachFilter == 'ProductId') {
              this.productList.sort((a, b) =>
                a.ProductId > b.ProductId ? -1 : 1
              );
            }
            if (eachFilter == 'Price') {
              this.productList.sort((a, b) => (a.Price > b.Price ? -1 : 1));
            }
          }
        }
      },
      (error) => {
        this.productApiError = error['error']['message'];
      }
    );
  }

  addFilter(filterKey, order) {
    this.filterOptions = {
      ProductId: 0,
      ProductName: 0,
      Category: 0,
      Price: 0,
    };
    this.filterOptions[filterKey] = order;
    this.loaderFlag = true;
    this.productList = [];
    setTimeout(() => {
      this.getProductData();
    }, 1000);
  }
}

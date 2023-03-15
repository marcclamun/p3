import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/body/services/productServices';
import { ShowProductsComponent } from '../../showProducts/show-products/show-products.component';
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent {
  products:Product[] = [ ];
  productName:string = "";
  productPrice:string = "";
  @ViewChild("it1") myNameElem!: ElementRef;
  @ViewChild("it2") myNameElem2!: ElementRef;
  constructor(private productService:ProductsService){
    // this.productService.broadCastProductName(this.productName, this.productPrice);
  }
  public addProduct(){
    this.productService.sendProducts(this.myNameElem.nativeElement.value,
                                      this.myNameElem2.nativeElement.value);
    // this.products.push({name:this.myNameElem.nativeElement.value,
    //                     price:this.myNameElem2.nativeElement.value});
    // this.productService.broadCastProductName(this.myNameElem.nativeElement.value, 
    //                                          this.myNameElem2.nativeElement.value);
    //   //console.log(this.products);
    // this.showProductsComponent.sendProduct();
  }
  // public sendProduct(){
  //   this.productService.castProduct.subscribe(productName => this.productName = productName);
  //   this.productService.castPrice.subscribe(productPrice => this.productPrice = productPrice);
  //   this.products.push({name:this.myNameElem.nativeElement.value,
  //                      price:this.myNameElem2.nativeElement.value});
  //   // this.changeDetection.detectChanges();
  //   this.productService.broadCastProductName(this.myNameElem.nativeElement.value, 
  //     this.myNameElem2.nativeElement.value);
  //   console.log(this.products);
  // }
}
export interface Product {name: string; 
                          price: string; }
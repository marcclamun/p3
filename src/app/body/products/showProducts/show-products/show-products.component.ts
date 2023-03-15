import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit,  ElementRef, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/body/services/productServices';
import { AddproductsComponent } from '../../addproducts/addproducts/addproducts.component';
@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ShowProductsComponent implements OnInit {
  products:Product[] = [ ];
  productName:any = "";
  productPrice:any = "";
  // @ViewChild("it1") myNameElem!: ElementRef;
  // @ViewChild("it2") myNameElem2!: ElementRef;
   constructor(private productService:ProductsService){
    //  this.productService.broadCastProductName(this.productName, this.productPrice);
   }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    // zip(this.productService.castProduct, this.productService.castPrice)
    // .subscribe(([this.productName, this.productPrice]) =>{
    //   this.products.push(product);
    // });
    this.productService.sendProducts(this.productName, this.productPrice).subscribe((products:Product[])=>{
      this.products = products;
    })
  }
  // public sendProduct(){
  //   this.productService.castProduct.subscribe(productName => this.productName = productName);
  //   this.productService.castPrice.subscribe(productPrice => this.productPrice = productPrice);
  //   this.products.push({name:this.myNameElem.nativeElement.value,
  //                      price:this.myNameElem2.nativeElement.value});
  //   this.changeDetection.detectChanges();
  //   this.productService.broadCastProductName(this.myNameElem.nativeElement.value, 
  //     this.myNameElem2.nativeElement.value);
  //   console.log(this.products);
  // }
}
export interface Product {name: string; 
                          price: string; }
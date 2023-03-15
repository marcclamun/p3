import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductsComponent } from './body/products/addproducts/addproducts/addproducts.component';
import { ShowProductsComponent } from './body/products/showProducts/show-products/show-products.component';
import { HomeComponent } from './body/home/home/home.component';
import { FormComponent } from './body/form/form/form.component';
import { ProductsComponent } from './body/products/products.component';
import { ProductsService } from './body/services/productServices';
import { FooterComponent } from './body/footer/footer.component';
import { ClientesComponent } from './body/clientes/clientes.component';
import { loginServices } from './body/services/loginServices';


@NgModule({
  declarations: [
    AppComponent,
    AddproductsComponent,
    ShowProductsComponent,
    HomeComponent,
    FormComponent,
    ProductsComponent,
    FooterComponent,
    ClientesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService, ShowProductsComponent, loginServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

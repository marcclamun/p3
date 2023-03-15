import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './body/products/products.component';
import { HomeComponent } from './body/home/home/home.component';;
import { AppComponent } from './app.component';
import { FormComponent } from './body/form/form/form.component';
import { ClientesComponent } from './body/clientes/clientes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home" }, 
  { path: 'products', component: ProductsComponent, title: "Products"},
  { path: 'form', component: FormComponent, title: "Formulario"},
  { path: 'clientes', component: ClientesComponent, title: "Clientes"},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

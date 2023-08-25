
import { HttpClientModule } from '@angular/common/http';
import {NgModule } from '@angular/core'
import { FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { HomeComponent } from './app/home/home.component';
import { SellerAuthComponent } from './app/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './app/seller-home/seller-home.component';
import { SellerAddProductComponent } from './app/seller-add-product/seller-add-product.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellerUpdateProductComponent } from './app/seller-update-product/seller-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './app/footer/footer.component';
import { SearchComponent } from './app/search/search.component';
import { ProductDetailsComponent } from './app/product-details/product-details.component';
import { UserAuthComponent } from './app/user-auth/user-auth.component';
import { CartPageComponent } from './app/cart-page/cart-page.component';
import { CheckoutComponent } from './app/checkout/checkout.component';
import { MyOrdersComponent } from './app/my-orders/my-orders.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerAddProductComponent,
    SellerHomeComponent,
    SellerUpdateProductComponent,
    FooterComponent,
    SearchComponent,
    ProductDetailsComponent,
    UserAuthComponent,
    CartPageComponent,
    CheckoutComponent,
    MyOrdersComponent,

    
   
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   FormsModule,
   HttpClientModule,
   NgbModule,
   FontAwesomeModule
   
  
  
  
  ],
 
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

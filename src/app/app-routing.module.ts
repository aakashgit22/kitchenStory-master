import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartPageComponent } from './app/cart-page/cart-page.component'
import { CheckoutComponent } from './app/checkout/checkout.component';
import { HomeComponent } from './app/home/home.component';
import { MyOrdersComponent } from './app/my-orders/my-orders.component';
import { ProductDetailsComponent } from './app/product-details/product-details.component';
import { SearchComponent } from './app/search/search.component';
import { SellerAddProductComponent } from './app/seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './app/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './app/seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './app/seller-update-product/seller-update-product.component';
import { UserAuthComponent } from './app/user-auth/user-auth.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: SellerAuthComponent,
    path: 'seller-auth',
  },
  {
    component:SellerHomeComponent,
    path:'seller-home',
      canActivate:[AuthGuard]
  },{
    component:SellerAddProductComponent,
    path:'seller-add-product',
     canActivate:[AuthGuard]
  },{
    component:SellerUpdateProductComponent,
    path:'seller-update-product/:id',
     canActivate:[AuthGuard]
  },
  {
    component: SearchComponent,
    path:'search/:query'
  },{
    component:ProductDetailsComponent,
    path:'details/:productId'
  },{
    component:UserAuthComponent,
    path:'user-auth'
  },{
    component:CartPageComponent,
    path:'cart-page'
  },{
    component:CheckoutComponent,
    path:'checkout'
  },{
    component:MyOrdersComponent,
    path:'my-orders'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

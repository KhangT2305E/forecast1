import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './pages/features/features.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './pages/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';

const appRoute: Routes = [
  {path: "", component: HomeComponent},
  {path: "features", component: FeaturesComponent},
  {path: "pricing", component: PricingComponent},
  {path: "cart", component: CartComponent},
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, FeaturesComponent, PricingComponent, CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

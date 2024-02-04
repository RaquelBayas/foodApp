import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path:'search/:searchTerm', component:ProductsComponent
    },
    {
        path:'tag/:tag', component:ProductsComponent
    },
    {
        path:'food/:id', component:FoodPageComponent
    },
    {
        path:'cart', component:CartPageComponent
    },
    {
        path:'products', component:ProductsComponent
    },
    {
        path:'login', component: LoginComponent
    }
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';
import { AccountComponent } from '../account/account.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'accounts', component: AccountComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: PagenotfoundComponent }
  { path: 'products/ ' }

];

@NgModule({
  declarations: [HomeComponent,
    ProductComponent,
    AccountComponent, RouterModule],
  imports: [
    CommonModule, [RouterModule.forRoot(appRoutes)]
  ],
  exports: [RouterModule],
})
export class RoutingModuleModule { }

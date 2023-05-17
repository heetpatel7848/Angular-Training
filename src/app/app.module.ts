import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BooklistComponent } from './core/booklist/booklist.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentTaskModule } from './component-task/component-task.module';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DemoComponent } from './demo/demo.component'
import { HttpClientModule } from '@angular/common/http';
import { PipeComponent } from './pipe/pipe.component';
import { CustompipePipe } from './custompipe.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Comp1Component } from './comp1/comp1.component';
import { DataService } from './data.service';
import { Comp2Component } from './comp2/comp2.component';
import { ShomeComponent } from './shome/shome.component';
import { SheaderComponent } from './sheader/sheader.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'accounts', component: AccountComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: PagenotfoundComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BooklistComponent,
    FooterComponent,
    UserComponent,
    HomeComponent,
    AccountComponent,
    ProductComponent,
    ReactiveformComponent,
    DemoComponent,
    PipeComponent,
    CustompipePipe,
    Comp1Component,
    Comp2Component,
    ShomeComponent,
    SheaderComponent

  ],
  imports: [BrowserModule, Ng2SearchPipeModule, HttpClientModule, ComponentTaskModule, FormsModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

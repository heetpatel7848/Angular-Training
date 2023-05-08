import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BooklistComponent } from './core/booklist/booklist.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { ComponentTaskModule } from './component-task/component-task.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AccountComponent } from './account/account.component';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BooklistComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    AccountComponent,
    UserComponent,
  ],
  imports: [BrowserModule, ComponentTaskModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

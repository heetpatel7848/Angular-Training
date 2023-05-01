import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BooklistComponent } from './core/booklist/booklist.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ComponentTaskModule } from './component-task/component-task.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BooklistComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, ComponentTaskModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

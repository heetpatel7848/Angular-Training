import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooklistComponent } from './booklist/booklist.component';
import { AppComponent } from '../app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BooklistComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BooklistComponent,
    FooterComponent,
  ],
})
export class CoreModule {}

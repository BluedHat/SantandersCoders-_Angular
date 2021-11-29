import { SaveitemService } from './service/saveitem.service';
import { BookapiService } from './service/bookapi.service';
import { CartService } from './service/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookshelfComponent } from './library/bookshelf/bookshelf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './library/cart/cart.component';
import { HeaderComponent } from './library/header/header.component';
import { AddBookComponent } from './library/manager/add-book/add-book.component';
import { EditBookComponent } from './library/manager/edit-book/edit-book.component';
import { DeleteBookComponent } from './library/manager/delete-book/delete-book.component';
import { SearchBookComponent } from './library/manager/search-book/search-book.component';
import { SearchPipe } from './library/shared/search.pipe';
import { ManagerInterfaceComponent } from './library/manager/manager-interface/manager-interface.component';


@NgModule({
  declarations: [
    AppComponent,
    BookshelfComponent,
    CartComponent,
    HeaderComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    SearchBookComponent,
    SearchPipe,
    ManagerInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    CartService,
    BookapiService,
    SaveitemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

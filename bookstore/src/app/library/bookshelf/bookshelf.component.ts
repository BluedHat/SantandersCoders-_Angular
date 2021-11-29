import { CartService } from './../../service/cart.service';
import { CartComponent } from './../cart/cart.component';
import { Book } from './../manager/model/book';
import { Component, OnInit } from '@angular/core';
import { BookapiService } from 'src/app/service/bookapi.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

public bookList : any = [];
searchKey:string = '';
shopperSearch = '';

  constructor(private bookApi:BookapiService, private cartApi: CartService) {
    this.bookApi.listBooks()
    .subscribe(livro =>this.bookList = livro)
   }

  ngOnInit(): void {    
      this.bookApi.listBooks()
      .subscribe(response=>{
        this.bookList = response;
      })

      // Todo Ajustar a exibição do search
      this.cartApi.shopperSearch.subscribe((valor:any)=>{
        this.searchKey = valor;
      })
  }

  addtocart(book : any){
      this.cartApi.addToCart(book) 
  }

}

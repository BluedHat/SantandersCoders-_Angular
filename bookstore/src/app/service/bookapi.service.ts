import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../library/manager/model/book';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookapiService {

  constructor(private httpClient: HttpClient) { }
    
  // Adicionar Livro
  addBook(book:Book){
    return this.httpClient.post<Book>(
      'http://localhost:3001/books',book
    )
  }

  //Editar Livro
  editBook(book:Book){
    return this.httpClient.put<Book>(
      `http://localhost:3001/books/${book.id}`
      ,book)
    }

    //Remover livro
  removeBook(id:string) {
    return this.httpClient.delete<Book>(
      `http://localhost:3001/books/${id}`
    )
  }
  
  //Listar livros na pagina principal
  listBooks(){
     return this.httpClient.get<any>(
       'http://localhost:3001/books'
     )
     .pipe(map((response:any)=>{
          return response;
     }))
  }

  //Recuperar um especifico por ID
  getBook(id: string) {
    return this.httpClient.get<Book>(
      `http://localhost:3001/books/${id}`
    )
  }

  //pesquisar livro por texto livre

  searchBook(text:any) {
    return this.httpClient.get<Book>(
      `http://localhost:3001/books`
    )
  }

  //modificar livro vendido
  selledBook(id:string,quantity:number){
    return this.httpClient.put<Book>(
      `http://localhost:3001/books/${id}`
      ,quantity
    )
  }
}

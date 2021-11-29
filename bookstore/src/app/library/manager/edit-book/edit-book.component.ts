import { Component, OnInit } from '@angular/core';
import { BookapiService } from 'src/app/service/bookapi.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Book } from './../model/book';



@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book: Book = new Book('','','','',0,0,'','');
  showAdd: boolean = true;
  formEditBook:FormGroup;

  constructor(private route: ActivatedRoute, private bookApi:BookapiService) {
    const bookID = this.route.snapshot.params['id'];
    this.bookApi.getBook(bookID)
    .subscribe((livro) =>(this.book = livro))

    this.formEditBook = new FormGroup({
         'id': new    FormControl(this.book.id),
         'title':new  FormControl(this.book.title),
         'genre':new  FormControl(this.book.genre),
         'author':new FormControl(this.book.author),
         'price':new  FormControl(this.book.price),
         'qtt':new    FormControl(this.book.quantity),
         'img':new    FormControl(this.book.urlImg),
         'rsme':new   FormControl(this.book.resume),
     })
   }
   
   get id() {return this.formEditBook.get('id')}
   get title() {return this.formEditBook.get('title')}
   get author(){return this.formEditBook.get('author')}
   get genre() {return this.formEditBook.get('genre')}
   get price() {return this.formEditBook.get('price')}
   get qtty()  {return this.formEditBook.get('qtt')}
   get img()   {return this.formEditBook.get('img')}
   get rsme()  {return this.formEditBook.get('rsme')}

   
   editBook(){
    const id     = this.formEditBook.get('id')?.value;
    const title  = this.formEditBook.get('title')?.value;
    const author = this.formEditBook.get('author')?.value;
    const genre  = this.formEditBook.get('genre')?.value;
    const price  = this.formEditBook.get('price')?.value;
    const qtty   = this.formEditBook.get('qtt')?.value;
    const img    = this.formEditBook.get('img')?.value;
    const rsme   = this.formEditBook.get('rsme')?.value;
    
    const edition = new Book(id,title,author
                             ,genre,price,qtty,img
                             ,rsme)

    this.bookApi.editBook(edition).subscribe(
      register => console.log("Registro atualizado."))
  }

  ngOnInit(): void {
  }



}

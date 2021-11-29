import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { BookapiService } from 'src/app/service/bookapi.service';
import { Book } from './../model/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = new Book('','','','',0,0,'','');
  showAdd: boolean = true;  
  formCreateBook!: FormGroup;

  constructor(private route: ActivatedRoute, private bookApi:BookapiService) {

   }
  ngOnInit(): void {
    this.formCreateBook = new FormGroup({
      'title':new  FormControl(this.book.title,    [Validators.required, Validators.minLength(3)]),
      'author':new FormControl(this.book.author,   [Validators.required]),
      'genre':new  FormControl(this.book.genre,    [Validators.required, Validators.maxLength(10)]),
      'price':new  FormControl(this.book.price,    [Validators.required]),
      'qtt':new    FormControl(this.book.quantity, [Validators.required]),
      'img':new    FormControl(this.book.urlImg,   [Validators.required]),
      'rsme':new   FormControl(this.book.resume,   [Validators.required, Validators.maxLength(100)]),
  })
  }

   get title() {return this.formCreateBook.get('title')}
   get author(){return this.formCreateBook.get('author')}
   get genre() {return this.formCreateBook.get('genre')}
   get price() {return this.formCreateBook.get('price')}
   get qtty()  {return this.formCreateBook.get('qtt')}
   get img()   {return this.formCreateBook.get('img')}
   get rsme()  {return this.formCreateBook.get('rsme')}
   
   addBook(){
    const title  = this.formCreateBook.get('title')?.value;
    const author = this.formCreateBook.get('author')?.value;
    const genre  = this.formCreateBook.get('genre')?.value;
    const price  = this.formCreateBook.get('price')?.value;
    const qtty   = this.formCreateBook.get('qtt')?.value;
    const img    = this.formCreateBook.get('img')?.value;
    const rsme   = this.formCreateBook.get('rsme')?.value;
 
    
    const created = new Book(uuidv4(),title,author
                            ,genre,price,qtty,img,rsme)

    this.bookApi.addBook(created).subscribe(
      newData => {        
                 console.log("Novo título incluso.")
                 })
  }
}



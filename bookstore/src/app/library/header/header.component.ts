import { CartService } from './../../service/cart.service';
import { Component, OnInit} from '@angular/core';
import { BookshelfComponent } from '../bookshelf/bookshelf.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalShopper : number = 0;
  public searchWord : string = '';

  constructor(private cartApi:CartService) { }

  ngOnInit(): void {
    this.cartApi.getProduct()
        .subscribe(response =>{
             this.totalShopper = response.length;
        })
    }

    search(event:any){
      this.searchWord = (event.target as HTMLInputElement).value;
      console.log(this.searchWord);
      this.cartApi.shopperSearch.next(this.searchWord);
    }

}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { log } from 'console';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {
  constructor(private _ProductsService:ProductsService){}
  products:IProduct[]=[]
ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next:(res)=>{
this.products=res;
console.log(this.products);

      },
      error:(err)=>{
        console.log(err);
        

      }
    })
}

}

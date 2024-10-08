import { Component,EventEmitter,input,Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.models';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import {ReversePipe} from '@shared/pipes/reverse.pipe';
import {TimeAgoPipe} from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 @Input({required: true}) product!: Product;


 @Output() addToCart = new EventEmitter();

 addToCartHandler(){
  this.addToCart.emit(this.product);
 }
}

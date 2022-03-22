import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {

  @Input() product: Product = { //Componente hijo y significa que la propiedad puede recibir su valor del Padre Conecta de padre a hijo
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id : '',
      name:'',
    },
    description: ''
  };
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();//solo necesitamos el id del producto

  constructor() { }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  onShowDetail(){
    this.showProduct.emit(this.product.id)
  }

}

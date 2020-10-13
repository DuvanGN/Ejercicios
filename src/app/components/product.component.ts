import { from } from 'rxjs';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MisProductos } from '../product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})



export class ProductComponent {
    @Input() product: MisProductos;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    addCart(){
        console.log('añador al carrito');
        this.productClicked.emit(this.product.id);
    }
}

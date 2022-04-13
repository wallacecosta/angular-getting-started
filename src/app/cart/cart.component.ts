import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  carrinhoForm = this.formBuilder.group({
    nome: '',
    endereco: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Seu pedido foi enviado', this.carrinhoForm.value);
    this.carrinhoForm.reset();
  }

}

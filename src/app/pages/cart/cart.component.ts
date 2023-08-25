import {  Component, Input } from "@angular/core";

@Component( {
    selector: 'app-cart',
    templateUrl: 'cart.component.html'
})

export class CartComponent {
    data = [
        {
            "id": 1,
            "title": "iPhone 9",
            "quantity": 3,
            "price": 549,
            "total": 0,
        },
        {
            "id": 2,
            "title": "iPhone X",
            "quantity": 1,
            "price": 899,
            "total": 0,
        },
        {
            "id": 3,
            "title": "Samsung Galaxy 9",
            "quantity": 1,
            "price": 1249,
            "total": 0,
        },
        {
            "id": 4,
            "title": "OPPO F19",
            "quantity": 1,
            "price": 280,
            "total": 0,
        }
    ];

    totalSum = 0;

    constructor() {
        this.calculateTotals();
        this.calculateTotalSum();
    }

    calculateTotals() {
        this.data.forEach(item => {
            item.total = item.quantity * item.price;
        });
    }

    calculateTotalSum() {
        this.totalSum = this.data.reduce((sum, item) => sum + item.total, 0);
    }
}
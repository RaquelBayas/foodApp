import { Component, OnInit } from '@angular/core';
import { Food } from '../models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';
import { TagsComponent } from '../tags/tags.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart/cart.service';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [StarRatingModule, TagsComponent, CommonModule, NotFoundComponent],
  
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
  providers: [StarRatingConfigService]
})
export class FoodPageComponent implements OnInit{
  food!: Food;

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private foodService: FoodService, private cartService:CartService) {
    activatedRoute.params.subscribe((params)=> {
      if(params['id']) {
       foodService.getFoodById(params['id']).subscribe(food => 
        {console.log(food);
        this.food = food;})
      }
    })
  }
  
  ngOnInit(): void {
  }

  onRatingChange(event: any) {
    console.log('Nueva calificación:', event);
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }
  

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Food } from '../models/Food';
import { FoodService } from '../services/food/food.service';
import { NotFoundComponent } from '../not-found/not-found.component';
import { TagsComponent } from '../tags/tags.component';
import { SearchComponent } from '../search/search.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, CommonModule, SearchComponent, TagsComponent, NotFoundComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService, private route:ActivatedRoute){
    let foodObservable: Observable<Food[]>;
    this.route.params.subscribe(params => {
      if(params['searchTerm']) {
        foodObservable = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
        
      }else if(params['tag']) {
        foodObservable = this.foodService.getAllFoodByTag(params['tag'])
      }  else {
        foodObservable = this.foodService.getAll();
        
      }
      foodObservable.subscribe((serverFood) => {
        this.foods = serverFood;          
      })
    })
  }

  ngOnInit(): void {
    
  }

  
  
}

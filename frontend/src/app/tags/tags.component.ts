import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../models/Tag';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  tags!: Tag[];
  @Input()
  foodPageTags?: string[];

  constructor(private foodService: FoodService) {
    if(!this.foodPageTags) this.foodService.getAllTags().subscribe(tags => this.tags = tags);

  }

  ngOnInit(): void {
      }

}

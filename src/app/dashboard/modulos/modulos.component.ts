import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/entity/category.entity';
import { Module } from 'src/app/shared/entity/module.entity';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { ModuleService } from 'src/app/shared/services/module/module.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {
  modulesResponse!: Module[];
  modules!: Module[];
  category!: Category[];
  filter!: number;

  constructor(private moduleService: ModuleService,
              private categoryService: CategoryService
              ) { }


  ngOnInit(): void {
    this.getModules();
    this.getCategory();
    
  }

  getModules(){
    this.moduleService.getAllModules().then(response => {
      this.modulesResponse = response
      this.modules = this.modulesResponse;
    });
  }

  getCategory(){
    this.categoryService.getAllModules().then(response => this.category = response);
  }

  async filterModules(categoryId: number){
    if(this.filter === categoryId){
      this.filter = 0;
      this.modules = this.modulesResponse
    }
    else{
      this.filter = categoryId
      this.modules = this.modulesResponse.filter(module => module.category.id == this.filter)
    }
  }
}

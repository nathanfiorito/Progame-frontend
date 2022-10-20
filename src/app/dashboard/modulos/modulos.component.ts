import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/entity/category.entity';
import { CompletedModules } from 'src/app/shared/entity/completedModules.entity';
import { Module } from 'src/app/shared/entity/module.entity';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { CompletedModulesService } from 'src/app/shared/services/completedModules/CompletedModules.services';
import { ModuleService } from 'src/app/shared/services/module/module.service';
import { QuestionService } from 'src/app/shared/services/question/question.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {
  modulesResponse!: Module[];
  modules!: Module[];
  completedModules!: CompletedModules[];
  category!: Category[];
  filter!: number;

  constructor(private moduleService: ModuleService,
              private categoryService: CategoryService,
              private completedModulesService: CompletedModulesService,
              private router: Router,
              private questionService: QuestionService
              ) { }


  ngOnInit(): void {
    this.getModules();
    this.getCategory();
    this.getCompletedModules();
  }

  async getModules(){
    await this.moduleService.getAllModules().then(response => {
      this.modulesResponse = response.Data
      this.modules = this.modulesResponse;
    });
  }

  async getCompletedModules(){
    await this.completedModulesService.getCompleteModules().then(response => {
      this.completedModules = response.Data
    })
  }

  async getCategory(){
    await this.categoryService.getAllModules().then(response => {
      this.category = response.Data
    });
  }

  startModule(event:any){
    this.moduleService.getModuleWithQuestion(event.target.value).then(response => {
      console.log(response.Data)
      this.questionService.moduleWQuestion = response.Data
      this.router.navigate(['lesson'])
    })
  }

  isModuleCompleted(moduleNumber: number){
    if(this.completedModules === undefined){
      return false;
    }else{
      var result = this.completedModules.find(item => item.ModuleId == Number(moduleNumber))
      if(result === undefined)
        return false
      else
        return true
    }
  }
  
  async filterModules(categoryId: number){
    if(this.filter === categoryId){
      this.filter = 0;
      this.modules = this.modulesResponse
    }
    else{
      this.filter = categoryId
      this.modules = this.modulesResponse.filter(module => module.CategoryId == this.filter)
    }
  }
}

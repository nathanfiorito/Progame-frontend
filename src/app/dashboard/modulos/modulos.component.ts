import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/shared/entity/module.entity';
import { ModuleService } from 'src/app/shared/services/module/module.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {
  modules!: Module[];

  constructor(private moduleService: ModuleService) { }


  ngOnInit(): void {
    this.moduleService.getAllModules().then(response => this.modules = response);
  }



}

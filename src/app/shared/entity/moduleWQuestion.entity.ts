import { Module } from "./module.entity";
import { Question } from "./question.entity";

export class ModuleWQuestion{
    Module!: Module
    Questions!: Question[];
}
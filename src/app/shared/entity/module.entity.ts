import { Category } from "./category.entity";

export class Module{
    id!: number;
    title!: string;
    supportingText!: string;
    image!: string;
    resume!: string;
    category!: Category;
}
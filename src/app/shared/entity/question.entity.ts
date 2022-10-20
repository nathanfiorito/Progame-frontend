export class Question{
    Id!: number;
    QuestionText!: string;
    ModuleId!: number;
    CorrectAnswerId!: number;
    QuestionTypeId!: number;
    CreatedAt!: Date;
    UpdatedAt!: Date;
}
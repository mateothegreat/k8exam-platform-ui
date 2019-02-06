import { Category } from './Category';

export class Question {

    public uuid?: string;
    public type: string;
    public name: string;
    public description: string;
    public status: string;
    public categories: Array<Category>;
    public answers: Array<any>;

}

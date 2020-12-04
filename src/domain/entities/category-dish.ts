import { Dish } from './dish';

export class CategoryDish {
  public readonly dishes: Dish[] = [];

  constructor(readonly name: string) {}

  addDish(dish: Dish) {
    this.dishes.push(dish);
  }

  hasDishes(): boolean {
    return this.dishes.length > 0;
  }
}

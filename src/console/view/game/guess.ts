import { Dish } from '@/domain/entities/dish';
import { BaseView } from '../../core/base-view';
import { CategoryDish } from '@/domain/entities/category-dish';

export class Guess extends BaseView {
  async render(dish: CategoryDish | Dish): Promise<boolean> {
    return await this.input.confirm(`O prato que você pensou é ${dish.name}`);
  }
}

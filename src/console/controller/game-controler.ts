import { Guess } from '../view/game/guess';
import { Welcome } from '../view/game/welcome';
import { categoriesDish } from '@/data';
import { CategoryDish } from '@/domain/entities/category-dish';
import { Dish } from '@/domain/entities/dish';
import { Sucess } from '../view/game/success';
import { CreateDish } from '../view/game/create-dish';
import { CreateCategoryDish } from '../view/game/create-category-dish';

export class GameController {
  public async start(): Promise<void> {
    await (new Welcome()).render();

    if (await this.guess(categoriesDish)) {
      await this.success();
    } else {
      await this.createDishCategory();
    }

    this.start();
  }

  private async guess(dishes: CategoryDish[] | Dish[]) {
    const view = new Guess();

    for (const dish of dishes) {
      const userResponse = await view.render(dish);

      if (userResponse) {
        if (dish instanceof CategoryDish && dish.hasDishes()) {
          return await this.guess(dish.dishes);
        }

        return true;
      }
    }

    return false;
  }

  private async success(): Promise<void> {
    await (new Sucess()).render();
  }

  private async createDishCategory() {
    const dish = await this.createDish();

    const lastDish = categoriesDish[categoriesDish.length - 1];

    const category = new CategoryDish(
      await (new CreateCategoryDish())
        .render({
          newDishName: dish.name,
          lastDishName: lastDish.name
        })
    );
    category.addDish(dish);

    categoriesDish.splice(-1, 0, category);
  }

  private async createDish(): Promise<Dish> {
    return new Dish(await (new CreateDish()).render());
  }
}

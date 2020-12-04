import { BaseView } from '../../core/base-view';

interface CreateCategoryDishDto {
  newDishName: string;
  lastDishName: string;
}

export class CreateCategoryDish extends BaseView {
  async render(data: CreateCategoryDishDto): Promise<string> {
    return await this.input.input(
      `${data.newDishName} é ______ mas ${data.lastDishName} não.`,
      (input: string) => {
        if (input) {
          return true;
        }

        return 'Nome da categoria do prato não pode ser vazio'
      }
    );
  }
}

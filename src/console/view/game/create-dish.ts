import { BaseView } from '../../core/base-view';

export class CreateDish extends BaseView {
  async render(): Promise<string> {
    return await this.input.input(
      'Qual prato você pensou?',
      (input: string) => {
        if (input) {
          return true;
        }

        return 'Nome do prato não pode ser vazio'
      }
    );
  }
}

import { BaseView } from '../../core/base-view';

export class Sucess extends BaseView {
  async render() {
    await this.input.select('Acertei de Novo!', ['OK']);
  }
}

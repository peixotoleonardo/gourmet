import { BaseView } from '../../core/base-view';

export class Welcome extends BaseView {
  async render() {
    await this.input.select('Pense em um prato que gosta.', ['OK']);
  }
}

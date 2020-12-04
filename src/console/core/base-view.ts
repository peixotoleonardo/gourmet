import { Input } from './input';

export abstract class BaseView {
  protected readonly input: Input;

  constructor() {
    this.input = new Input();
  }

  abstract render(data: any): any;
}

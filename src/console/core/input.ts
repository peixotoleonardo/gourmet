import inquirer, { ConfirmQuestion, InputQuestion, ListQuestion } from 'inquirer';

const name = 'question';

interface ValidateFunc {
  (input: any, answers?: any): boolean | string | Promise<boolean | string>;
}

export class Input {
  async input(message: string, validate?: ValidateFunc): Promise<string> {
    const response = await inquirer.prompt<InputQuestion>({
      type: 'input',
      message,
      name,
      validate
    });

    return response[name]
  }

  async confirm(message: string): Promise<boolean> {
    const response = await inquirer.prompt<ConfirmQuestion>({
      type: 'confirm',
      message,
      name
    });

    return response[name];
  }

  async select(message: string, choices: string[]) {
    return await inquirer.prompt<ListQuestion>({
      type: 'list',
      name,
      message,
      choices
    });
  }
}

import { CalcController } from './calculatorController';

export class calcView {
  controller: CalcController;
  root: HTMLElement;
  wrapper: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
    this.controller = new CalcController();

    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');

    this.createDisplay();
    this.createButtons();
  }

  handleAction(action: string) {
    console.log(action);
    // this.controller.handleAction(action);
  }

  createDisplay(): void {
    const div = document.createElement('div');
    div.classList.add('display');
    div.textContent = '0';

    this.wrapper.appendChild(div);
  }

  createButtons(): void {
    const div = document.createElement('div');
    div.classList.add('buttons');
    const btns = [
      '7',
      '8',
      '9',
      'del',
      '4',
      '5',
      '6',
      '+',
      '1',
      '2',
      '3',
      '-',
      '.',
      '0',
      '/',
      'x',
      'reset',
      '=',
    ];

    btns.forEach(b => {
      const btn = document.createElement('button');
      btn.classList.add('btn');
      btn.classList.add(`btn-${b}`);
      btn.textContent = b;

      if (Number.isNaN(parseFloat(b))) {
        btn.setAttribute('data-action', b);
      }

      btn.addEventListener('click', () => this.handleAction(b));

      div.appendChild(btn);
    });

    this.wrapper.appendChild(div);
  }

  init(): void {
    this.root.append(this.wrapper);
  }
}

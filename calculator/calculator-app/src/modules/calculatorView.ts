import { CalcController } from './calculatorController';

export class calcView {
  controller: CalcController;
  root: HTMLElement;
  wrapper: HTMLElement;
  display: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
    this.controller = new CalcController();

    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');

    this.display = document.createElement('div');
    this.display.classList.add('display');
    this.display.textContent = '0';

    this.createHeader();

    this.wrapper.appendChild(this.display);

    this.createButtons();

    const [savedTheme, index] = this.controller.getTheme();
    const numOfThemes = this.controller.getNumOfThemes();

    this.toggleThemeColors(savedTheme);
    this.toggleThemeDot(index, numOfThemes);
  }

  handleAction(action: string) {
    const res = this.controller.handleAction(action);
    this.display.textContent = res || '';
  }

  toggleTheme = () => {
    const [theme, index] = this.controller.handleTheme();
    const numOfThemes = this.controller.getNumOfThemes();

    this.toggleThemeColors(theme);
    this.toggleThemeDot(index, numOfThemes);
  };

  toggleThemeColors = (theme: string) => {
    const body = document.querySelector('body')!;
    body.className = theme;
  };

  toggleThemeDot = (index: number, numOfThemes: number) => {
    const togglerDot = this.wrapper.querySelector<HTMLElement>('.toggle-dot')!;

    const dotPos = ((70 - 20) / numOfThemes) * index;

    togglerDot.setAttribute('style', `transform: translateX(${dotPos}px)`);
  };

  createHeader(): void {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'calc';
    header.append(h1);

    const themeToggle = this.createThemeToggle();

    header.append(themeToggle);
    this.wrapper.append(header);
  }

  createThemeToggle(): HTMLElement {
    const wrap = document.createElement('div');
    wrap.classList.add('theme-toggle');
    const text = document.createElement('p');
    text.textContent = 'THEME';
    wrap.append(text);

    const numOfThemes = this.controller.getNumOfThemes();

    const toggler = document.createElement('div');
    const themes = document.createElement('div');
    const dot = document.createElement('span');
    toggler.classList.add('toggle-button');
    dot.classList.add('toggle-dot');
    themes.classList.add('toggle-themes');

    for (let i = 1; i <= numOfThemes; i++) {
      const span = document.createElement('span');
      span.textContent = i.toString();
      themes.append(span);
    }

    toggler.append(dot, themes);

    toggler.addEventListener('click', this.toggleTheme);

    wrap.append(toggler);

    return wrap;
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

import { CalcModel } from './calculatorModel';

export class CalcController {
  model: CalcModel;
  constructor() {
    this.model = new CalcModel();
  }

  handleAction(action: string) {
    const actionType = this.getActionString(action);

    if (actionType === 'operator') {
      return this.model.handleOperator(action);
    }

    if (actionType === 'calculate') {
      return this.model.handleCalculate();
    }

    if (actionType === 'decimal') {
      return this.model.handleDecimal();
    }

    if (actionType === 'del') {
      return this.model.handleDel();
    }

    if (actionType === 'reset') {
      return this.model.handleReset();
    }

    return this.model.handleNumber(action);
  }

  getActionString(action: string): string {
    if (!Number.isNaN(parseFloat(action))) return 'number';

    if (action === '+' || action === '/' || action === 'x' || action === '-') {
      return 'operator';
    }

    if (action === '.') return 'decimal';

    if (action === '=') return 'calculate';

    return action;
  }

  handleTheme(): [string, number] {
    this.model.handleTheme();

    const index = this.model.activeThemeIndex;
    const theme = this.model.themes[index];

    return [theme, index];
  }

  getNumOfThemes(): number {
    return this.model.themes.length;
  }

  getTheme(): [string, number] {
    const index = this.model.activeThemeIndex;
    const theme = this.model.themes[index];

    return [theme, index];
  }
}

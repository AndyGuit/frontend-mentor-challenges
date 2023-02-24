import { CalcModel } from './calculatorModel';

export class CalcController {
  model: CalcModel;
  constructor() {
    this.model = new CalcModel();
  }

  handleAction(action: string) {
    const actionType = this.getActionString(action);

    if (actionType === 'number') {
      return this.model.handleNumber(action);
    }

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
}

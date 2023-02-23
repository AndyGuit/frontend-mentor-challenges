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

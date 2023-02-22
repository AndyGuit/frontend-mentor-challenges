import { CalcModel } from './calculatorModel';

export class CalcController {
  model: CalcModel;
  constructor() {
    this.model = new CalcModel();
  }

  handleAction(action: string) {
    return action;
  }
}

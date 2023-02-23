interface Model {
  n1: string;
  n2: string;
  operator: string;
  calculate: (n1: string, operator: string, n2: string) => string;
}

export class CalcModel implements Model {
  n1 = '0';
  n2 = '';
  operator = '';

  constructor() {}

  calculate(n1: string, operator: string, n2: string): string {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    switch (operator) {
      case '+':
        return (num1 + num2).toString();
      case '-':
        return (num1 - num2).toString();
      case 'x':
        return (num1 * num2).toString();
      case '/':
        return (num1 / num2).toString();
      default:
        return 'Wrong Operator';
    }
  }

  handleNumber(value: string): string {
    console.log('model');
    console.log(value);
    if (this.n1 === '0') {
      this.n1 = value;

      return this.n1;
    } else if (this.operator === '') {
      this.n1 += value;

      return this.n1;
    } else if (this.operator) {
      if (this.n2 === '0') {
        this.n2 = value;
      } else {
        this.n2 += value;
      }
    }

    return this.n2;
  }
}

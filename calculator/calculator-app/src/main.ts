import './scss/style.scss';

import { calcView } from './modules/calculatorView';

const calculator = new calcView(document.getElementById('app')!);

calculator.init();

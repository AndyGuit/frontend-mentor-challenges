const localStorageItem = 'todo-frontendmentor';

const todosOnInit = [
  { id: '0', isCompleted: true, text: 'Complete online JavaScript course' },
  { id: '1', isCompleted: false, text: 'Jog around the park 3x' },
  { id: '2', isCompleted: false, text: '10 minutes meditation' },
  { id: '3', isCompleted: false, text: 'Read for 1 hour' },
  { id: '4', isCompleted: false, text: 'Pick up groceries' },
  { id: '5', isCompleted: false, text: 'Complete Todo App on Frontend Mentor' },
];

export const loadState = () => {
  try {
    const state = localStorage.getItem(localStorageItem);
    if (!state) {
      return todosOnInit;
    }
    return JSON.parse(state);
  } catch (err) {
    return null;
  }
};

export const saveState = state => {
  try {
    const items = JSON.stringify(state);
    localStorage.setItem(localStorageItem, items);
  } catch (err) {
    console.log(err);
  }
};

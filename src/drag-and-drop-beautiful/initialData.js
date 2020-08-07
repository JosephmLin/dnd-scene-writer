const initialData = {
  tasks: {
    task1: { id: 'task1', content: 'Take out garbage' },
    task2: { id: 'task2', content: 'Take out garbage2' },
    task3: { id: 'task3', content: 'Take out garbage3' },
    task4: { id: 'task4', content: 'Take out garbage4' },
    task5: { id: 'task5', content: 'Take out garbage5' },
  },
  columns: {
    column1: {
      id: 'column1',
      title: 'TO DO LIST',
      taskIds: ['task1', 'task2', 'task3'],
    },
    column2: {
      id: 'column2',
      title: 'DONE LIST',
      taskIds: ['task4', 'task5'],
    },
  },
  columnOrder: ['column1', 'column2'],
};

export default initialData;

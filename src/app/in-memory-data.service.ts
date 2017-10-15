import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 0,  name: 'Get Job', status:'overdue' },
      { id: 11, name: 'clean room' , status:'complete'},
      { id: 12, name: 'Wake up', status:'complete' },
      { id: 13, name: 'Read' , status:'pending'},
      { id: 14, name: 'Brush teeth' , status:'pending'},
      { id: 15, name: 'Shower' , status:'overdue'},
      { id: 16, name: 'Take a Nap', status:'complete' },
      { id: 17, name: 'Hoop', status:'pending' },
      { id: 18, name: 'Disc Golf', status:'pending' },
      { id: 19, name: 'Meeting', status:'overdue' },
      { id: 20, name: 'Code review', status:'overdue' }
    ];
    return {tasks};
  }
}

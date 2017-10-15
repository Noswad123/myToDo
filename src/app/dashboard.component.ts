import { Component, OnInit } from '@angular/core';

import { Task }        from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './pages/dashboard.component.html',
  styleUrls: [ './css/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
      .then(tasks => this.tasks = tasks.slice(1, 5));
  }
}

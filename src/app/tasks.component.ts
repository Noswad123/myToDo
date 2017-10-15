import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'my-tasks',
  templateUrl: './pages/tasks.component.html',
  styleUrls: ['./css/tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  selectedTask: Task;
  statusView='all'

  constructor(
    private taskService: TaskService,
    private router: Router) { }

  getTasks(): void {
    this.taskService
      .getTasks()
      .then(tasks => this.tasks = tasks);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.taskService.create(name)
      .then(task => {
        this.tasks.push(task);
        this.selectedTask = null;
      });
  }

  delete(task: Task): void {
    this.taskService
      .delete(task.id)
      .then(() => {
        this.tasks = this.tasks.filter(h => h !== task);
        if (this.selectedTask === task) { this.selectedTask = null; }
      });
  }
  sortTasks(status: string): void {
    var myList = [];
    var test = document.getElementById("sort");
    test.innerHTML = " ";
    var display='none';

    if (status == 'all') {
      myList = this.tasks;
      display="initial";
    } else {

      for (var i = 0; i < this.tasks.length; i++) {

        if(status == this.tasks[i].status) {
          myList.push(this.tasks[i]);
        }
      }
      for (var x = 0; x < myList.length; x++) {
        // if/else just to avoid commas in the front
          test.innerHTML = test.innerHTML + '<li>'+ myList[x].name+'</li>';

      }
    }
    document.getElementById('tasksList').style.display=display;
  }

  ngOnInit(): void {
    this.getTasks();
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTask.id]);
  }
}

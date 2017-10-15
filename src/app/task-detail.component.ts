import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Task }        from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'task-detail',
  templateUrl: './pages/task-detail.component.html',
  styleUrls: [ './css/task-detail.component.css' ]
})
export class TaskDetailComponent implements OnInit {
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.taskService.getTask(+params.get('id')))
      .subscribe(task => this.task = task);
  }

  save(): void {
    this.taskService.update(this.task)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

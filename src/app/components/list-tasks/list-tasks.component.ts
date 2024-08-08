import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.css'
})

export class ListTasksComponent implements OnInit {

  @Output() sendPositions = new EventEmitter;

  myTasks: Task[] = [];

  constructor(private listServ: TaskService) { }

  ngOnInit(): void {

    this.myTasks = this.listServ.getTask();
    console.log("My Tasks: ", this.myTasks);
  }

  deleteTask(_id: number) {
    this.listServ.deleteTask(_id)
  }

  getPositions(_id: number) {
    this.sendPositions.emit(_id)
  }
}

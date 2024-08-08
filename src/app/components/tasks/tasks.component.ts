import { Component, OnInit } from '@angular/core';
import { ListTasksComponent } from "../list-tasks/list-tasks.component";
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [ListTasksComponent, CommonModule, FormsModule]
})
export class TasksComponent implements OnInit{

  myTask: any;
  taskFound: any;

  constructor(private listServ: TaskService){ }

  ngOnInit(): void { }

  getPositions($event: number){
    this.myTask = this.listServ.getOneTask($event);
    this.taskFound = this.myTask;
  }

  editTask(){
    this.listServ.editTask(this.taskFound);
  }

}

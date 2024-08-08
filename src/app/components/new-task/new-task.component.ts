import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  myId = 4;

  newTask = {
    id: this.myId,
    title: '',
    ruc: 0,
    modulo:'',
    description: '',
    date: ''
  }

  constructor(private listServ: TaskService) {

  }

  addTask(){
    console.log("we'll send the data", this.newTask);
    this.listServ.addTask(this.newTask);
    this.myId ++;

    this.newTask = {
      id: 0,
      title: '',
      ruc: 0,
      modulo:'',
      date: '',
      description: ''
    }
  }
}

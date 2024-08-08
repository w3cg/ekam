import { Injectable } from '@angular/core';
import { Task } from '../models/task';

const TaskList = [
  {
    "id": 1,
    "title": "do my homework",
    "ruc": 1070899734,
    "modulo": "Modulo de Contabilidad",
    "description": "it is boring",
    "date": "2024-05-24"
  }
]

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(){
    return TaskList;
  }

  getOneTask(_id: number){
    return TaskList.find(task => task.id === _id);
  }

  addTask(task: Task){
    TaskList.push(task);
  }

  editTask( newTaskEdit: Task ){
    const index = TaskList.findIndex(task => task.id === newTaskEdit.id)

    TaskList[index] = newTaskEdit;
  }

  deleteTask(_id: number){
    TaskList.splice(_id, 1)
  }
}

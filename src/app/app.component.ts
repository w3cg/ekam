import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewTaskComponent } from "./components/new-task/new-task.component";
import { TasksComponent } from "./components/tasks/tasks.component";

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NewTaskComponent, TasksComponent, FormsModule]
})
export class AppComponent {
  title = 'ekam-project';
}

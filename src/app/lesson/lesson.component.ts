import { Component, OnInit } from '@angular/core';
import { TodoListClass } from '../todoListClass';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  name: string;
  editTask: boolean;
  taskOnEdit: boolean;
  taskIsDone: boolean;
  toDos: any[];
  completeTasks: any[];
    constructor()   {
    this.name = '';
    this.toDos = [];
    this.editTask = false;
    this.taskOnEdit = true;
    this.taskIsDone = false;
    this.completeTasks = [];
  }
    addTask(name, editTask, taskOnEdit, taskIsDone) {

      if (name !== '') {
          const obj = new TodoListClass(name, editTask, taskOnEdit, taskIsDone);
          this.toDos.push(obj);
          this.name = '';
      }
    }
    editThisTask(task) {
        task.editTask = true;
        task.taskOnEdit = false;
    }
    saveTask(task) {
        task.editTask = false;
        task.taskOnEdit = true  ;
    }
    deleteThisTask(i) {
      this.toDos.splice(i, 1);
    }
    doneTask(task, i) {
        task.taskOnEdit = false;
        this.toDos.splice(i, 1);
        this.completeTasks.push(task);
      }
  ngOnInit() {
  }

}

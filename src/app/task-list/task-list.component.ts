import { Component, OnInit } from '@angular/core';
import { ITask } from '../itask';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  list_task: ITask[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<ITask[]>('http://localhost:3000/task').subscribe(
      (data) => {
        this.list_task = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  suaTask(id: number): void {
    this.router.navigate([`/task/sua/${id}`]);
  }

  xoaTask(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa task này không?')) {
      this.http.delete(`http://localhost:3000/task/${id}`).subscribe(
        () => {
          // Remove the deleted task from the list
          this.list_task = this.list_task.filter((task) => task.id !== id);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}

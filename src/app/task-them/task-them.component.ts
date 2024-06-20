import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DulieuService } from '../dulieu.service';
import { ITask } from '../itask';
import { INhanVien } from '../inhan-vien';
import { IDuan } from '../iduan';

@Component({
  selector: 'app-task-them',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-them.component.html',
  styleUrl: './task-them.component.css',
})
export class TaskThemComponent {
  listNhanVien: INhanVien[] = [];
  listDuAn: IDuan[] = [];
  constructor(private d: DulieuService) {}
  ngOnInit(): void {
    this.d.layNhanVien().subscribe((data) => {
      this.listNhanVien = data as INhanVien[];
    });
    this.d.layDuAn().subscribe((data) => {
      this.listDuAn = data as IDuan[];
    });
  }
  xuly(ta: ITask) {
    this.d.themTask(ta).subscribe((result) => {
      console.log(ta, result);
      alert('Thêm Thành Công');
    });
  }
}

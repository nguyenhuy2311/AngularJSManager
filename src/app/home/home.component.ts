import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DulieuService } from '../dulieu.service';
import { ITask } from '../itask';
import { INhanVien } from '../inhan-vien';
import { IDuan } from '../iduan';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  id: number = 0;
  data: ITask = {} as ITask;
  listNhanVien: INhanVien[] = [];
  listDuAn: IDuan[] = [];
  list_task: ITask[] = [];
  constructor(private d: DulieuService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.d.lay1Task(this.id).subscribe((ta) => {
      this.data = ta as ITask; // Explicit type assertion
    });
    this.d.layNhanVien().subscribe((data) => {
      this.listNhanVien = data as INhanVien[]; // Explicit type assertion
    });
    this.d.layDuAn().subscribe((data) => {
      this.listDuAn = data as IDuan[]; // Explicit type assertion
    });
  }

  getTotalProjectCost(): number {
    return this.listDuAn.reduce((total, duAn) => total + duAn.tien, 0);
  }

  getActiveTasksCount(): number {
    return this.list_task.filter(
      (task) => task.status.toString() === 'dang xu ly'
    ).length;
  }

  getClients(): string[] {
    return ['Vin Group', 'FPT Software', 'Fpoly'];
  }

  getYears(): number[] {
    return [2024, 2023, 2022];
  }

  getMemberCount(region: string): number {
    return this.listNhanVien.filter((nv) => nv.khu_vuc === region).length;
  }
  getMembersByRegion(region: string): INhanVien[] {
    return this.listNhanVien.filter((nv) => nv.khu_vuc === region);
  }
  getInactiveMemberCount(region: string): number {
    return this.listNhanVien.filter(
      (nv) => nv.khu_vuc === region && nv.trangThai === 'tam nghi'
    ).length;
  }
}

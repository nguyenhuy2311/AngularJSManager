import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'du_an',
    component: DuanListComponent,
    title: 'Danh sách dự án',
    data: { breadcrumb: 'Dự Án' },
  },
  {
    path: 'du_an/them',
    component: DuanThemComponent,
    title: 'Thêm dự án',
    data: { breadcrumb: 'Thêm' },
  },
  {
    path: 'du_an/sua/:id',
    component: DuanSuaComponent,
    title: 'Sửa dự án',
    data: { breadcrumb: 'Sửa' },
  },
  {
    path: 'nhan_vien',
    component: NvListComponent,
    title: 'Danh sách nhân viên',
  },
  {
    path: 'nhan_vien/them',
    component: NvThemComponent,
    title: 'Thêm nhân viên',
  },
  {
    path: 'nhan_vien/sua/:id',
    component: NvSuaComponent,
    title: 'Sửa nhân viên',
  },
  { path: 'task', component: TaskListComponent, title: 'Danh sách Task' },
  { path: 'task/them', component: TaskThemComponent, title: 'Thêm Task' },
  { path: 'task/sua/:id', component: TaskSuaComponent, title: 'Sửa Task' },
  { path: 'dang_nhap', component: DangNhapComponent, title: 'Đăng nhập' },
  { path: 'dang_ky', component: DangKyComponent, title: 'Đăng Ký' },
  { path: '**', component: NotFoundComponent, title: 'Không tìm thấy' },
];

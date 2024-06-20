import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DulieuService } from '../dulieu.service';
import { IUser } from '../iuser';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dang-nhap',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './dang-nhap.component.html',
  styleUrl: './dang-nhap.component.css',
})
export class DangNhapComponent {
  constructor(private d: DulieuService) {}

  loginUser(user: IUser): void {
    this.d.loginUser(user).subscribe(
      (data) => {
        console.log(data);
        alert('Đăng nhập thành công');
      },
      (error) => {
        console.error('Đăng nhập thất bại', error);
        alert('Đăng nhập thất bại');
      }
    );
  }
}

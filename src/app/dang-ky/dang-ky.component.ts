import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from '../iuser';
import { INhanVien } from '../inhan-vien'; // Import the INhanVien interface
import { DulieuService } from '../dulieu.service';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dang-ky',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet, RouterModule],
  templateUrl: './dang-ky.component.html',
  styleUrl: './dang-ky.component.css',
})
export class DangKyComponent {
  register: IUser[] = [];

  constructor(private d: DulieuService) {}

  ngOnInit(): void {
    this.d.layNhanVien().subscribe((data: INhanVien[]) => {
      this.register = data.map(this.mapNhanVienToUser);
    });
  }

  xuly(rg: IUser): void {
    this.d.themUser(rg).subscribe(
      (data) => {
        console.log(rg, data);
        alert('Đăng ký thành công');
        // Chuyển đến trang khác sau khi đăng ký thành công
        // this.router.navigate(['/some_route']);
      },
      (error) => {
        console.error('Đăng ký thất bại', error);
        alert('Đăng ký thất bại');
      }
    );
  }

  // Define the mapping function here or import it if it's in another file
  mapNhanVienToUser(nhanVien: INhanVien): IUser {
    return {
      id: nhanVien.id,
      ten: nhanVien.ten,
      gmail: nhanVien.gmail,
      password: nhanVien.password,
      // Map other properties if needed
    };
  }
}

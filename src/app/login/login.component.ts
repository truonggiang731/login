import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*_=+-]{6,}$/)
      ]
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Đã kiểm tra xác nhận rằng biểu mẫu là hợp lệ, bạn có thể thực hiện hành động sau đây, chẳng hạn như gửi dữ liệu đăng nhập lên máy chủ.
    }
  }
}

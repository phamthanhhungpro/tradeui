import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthUserService } from 'app/services/auth-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatButtonModule],
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  securityForm: UntypedFormGroup;

  /**
   * Constructor
   */
  constructor(
      private _formBuilder: UntypedFormBuilder,
      private _userService: AuthUserService,
      private _snackBar: MatSnackBar,
      private _router: Router
  )
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      // Create the form
      this.securityForm = this._formBuilder.group({
          currentPassword  : ['', Validators.required],
          newPassword      : ['', Validators.required],
      });
  }

  cancel(): void {
    this.securityForm.reset();
  }

  save(): void {
    this.securityForm.value.userId = AuthUtils.getUserIdFromToken(localStorage.getItem('accessToken'));
    this._userService.changePassword(this.securityForm.value).subscribe(res => {
      if (res.isSucceeded) {
        this.openSnackBar('Thao tác thành công', 'Đóng');
        this.securityForm.reset();
        this._router.navigate(['/sign-in']);
      } else {
        this.openSnackBar(`Thao tác thất bại: ${res.message}`, 'Đóng');
      }
    });
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}

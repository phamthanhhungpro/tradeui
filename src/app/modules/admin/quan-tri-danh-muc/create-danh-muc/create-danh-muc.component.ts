import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DanhMucService } from 'app/services/danh-muc.service';


@Component({
  selector: 'app-create-danh-muc',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, NgIf, NgFor, MatDividerModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule,
  ],
  templateUrl: './create-danh-muc.component.html'
})
export class CreateDanhMucComponent {
  @Output() onClosed = new EventEmitter<any>();

  addDataForm: UntypedFormGroup;

  /**
   *
   */
  constructor(private _formBuilder: UntypedFormBuilder,
    private _danhMucService: DanhMucService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CreateDanhMucComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addDataForm = this._formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  // clear form when close drawer
  clearForm(): void {
    this.addDataForm.reset();
  }

  // close drawer and reset form
  cancelAdd(): void {
    this.dialogRef.close();
    this.clearForm();
  }

  // save data
  save(): void {
    this.addDataForm.value.duAnNvChuyenMonId = this.data.id;
    this._danhMucService.createDanhMuc(this.addDataForm.value).subscribe(res => {
      if (res.isSucceeded) {
        this.openSnackBar('Thao tác thành công', 'Đóng');
        this.onClosed.emit();
        this.dialogRef.close();
        this.clearForm();
      } else {
        this.openSnackBar(`Thao tác thất bại: ${res.message}`, 'Đóng');
      }
    });
  }

  // snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }
}

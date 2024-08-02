import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { AsyncPipe, CommonModule, CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import { AuthUserService } from 'app/services/auth-user.service';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { FuseDrawerComponent } from '@fuse/components/drawer';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { map } from 'rxjs';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FuseConfirmationService } from '@fuse/services/confirmation';

@Component({
  selector: 'app-quan-tri-nguoi-dung',
  standalone: true,
  imports: [MatIconModule, RouterLink, MatButtonModule, CdkScrollable, NgIf,
    AsyncPipe, NgForOf, CurrencyPipe, MatButtonModule, MatMenuModule,
    FuseDrawerComponent, MatDividerModule, MatTooltipModule, MatIconModule, MatPaginatorModule],
  templateUrl: './quan-tri-nguoi-dung.component.html',
})
export class QuanTriNguoiDungComponent {
  @ViewChild('paginator') paginator: MatPaginator;
  configForm: UntypedFormGroup;

  public query$;

  pageSize = 25; // Initial page size
  pageIndex = 0; // Initial page index
  totalItems = 0; // Total items


  /**
   * Constructor
   */
  constructor(private _authUserService: AuthUserService,
    private _changeDetectorRef: ChangeDetectorRef,
    private _formBuilder: UntypedFormBuilder,
    private _fuseConfirmationService: FuseConfirmationService,
  ) {
    this.configForm = this._formBuilder.group({
      title: 'Xóa dữ liệu',
      message: 'Xóa dữ liệu này khỏi hệ thống? <span class="font-medium">Thao tác này không thể hoàn tác!</span>',
      icon: this._formBuilder.group({
        show: true,
        name: 'heroicons_outline:exclamation-triangle',
        color: 'warn',
      }),
      actions: this._formBuilder.group({
        confirm: this._formBuilder.group({
          show: true,
          label: 'Remove',
          color: 'warn',
        }),
        cancel: this._formBuilder.group({
          show: true,
          label: 'Cancel',
        }),
      }),
      dismissible: true,
    });
  }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    const query = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    };
    this.query$ = this._authUserService.getPagingUser(query).pipe(
      map((data: any) => {
        const items: any[] = data.items.map((item, index: number) => ({
          ...item,
          stt: index + 1
        }));
        this.totalItems = data.count;
        return { items };
      })
    );
  }

  onPageChange(event): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getTableData();
  }

  deleteData(id: any) {
    const dialogRef = this._fuseConfirmationService.open(this.configForm.value);
    // Subscribe to afterClosed from the dialog reference
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirmed') {
        this._authUserService.deleteUser(id).subscribe(() => {
          this.getTableData();
        });
      }
    });
  }
}

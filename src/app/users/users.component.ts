import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialog} from '@angular/material';
import { Router } from '@angular/router';

// services
import { UserOperationService } from '../../common/user-operation.service';
import { GlobalFunctionsService } from '../../common/global-functions.service';

export interface UserData {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}

export interface DialogData {
  id: 0;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'age', 'isActive', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  deleteRowData: any;
  users: any[] = [];

  constructor(public dialog: MatDialog,
              public userService: UserOperationService,
              public globalFunc: GlobalFunctionsService,
              public router: Router
            ) { }

  ngOnInit() {
    // get all users
    this.globalFunc.getData('getUsers')
      .then((data: any) => {
        this.users = data;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  // redirect to update page
  updateUser(id) {
    this.router.navigate(['/create', id]);
  }

  // redirect to print page
  printUser(id) {
    this.router.navigate(['/print', id]);
  }

  // search filter
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // pagination
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // open delete modal
  openDialog(row) {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '350px',
      data: {id: row.id}
    });
  }
}

@Component({
  selector: 'app-dialog-content',
  templateUrl: 'dialog-content.html',
})
export class DialogContentComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public globalFunc: GlobalFunctionsService
  ) { }

  // confirm delete
  deleteUser() {
    // deleteUser
    this.globalFunc.getData('deleteUser', this.data.id)
      .then((data: any) => {
        window.location.reload();
      });
  }
}

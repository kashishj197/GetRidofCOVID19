import {Component} from '@angular/core';
import { HelpdeskComponent } from '../helpdesk/helpdesk.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarAppComponent{
  constructor(private dialog: MatDialog) {}

  openDialog() {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      this.dialog.open(HelpdeskComponent, dialogConfig);
  } 
}
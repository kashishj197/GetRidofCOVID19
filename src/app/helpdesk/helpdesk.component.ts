import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.css']
})
export class HelpdeskComponent{
  title = "Patient Details";

  form: FormGroup;
  name:string;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<HelpdeskComponent>,
      @Inject(MAT_DIALOG_DATA) data) {
        this.form = fb.group({
          name: [name, []],
      });
      this.name = data.name;
  }

  ngOnInit() {

  }

  save() {
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }
}

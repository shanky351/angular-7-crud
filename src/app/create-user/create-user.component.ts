import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { GlobalFunctionsService } from '../../common/global-functions.service';
import { REGEX } from '../../common/static-data';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;
  defaultId;
  defaultIsActive = true;
  defaultUserData: any;

  constructor(public fb: FormBuilder,
              public route: ActivatedRoute,
              public router: Router,
              public globalFunc: GlobalFunctionsService) { }

  ngOnInit() {
    this.defaultId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    if (this.defaultId !== 0) {
      this.getUserData();
    }
    this.validationCheck();
  }

  // get user data
  getUserData() {
    this.globalFunc.getData('getUser', this.defaultId)
      .then((data: any) => {
        this.defaultUserData = data;
        this.defaultIsActive = this.defaultUserData.isActive;
        this.validationCheck();
      });
  }

  // check for validation
  validationCheck() {
    let defaultName, defaultAge;
    if (this.defaultUserData) { // if user Data exist
      defaultName = this.defaultUserData.name;
      defaultAge = this.defaultUserData.age;
    } else { // if no user data
      defaultName = '';
      defaultAge = '';
    }
    this.userForm = this.fb.group({
      name: [defaultName, [Validators.required, Validators.minLength(4), Validators.pattern(REGEX.str)]],
      age: [defaultAge, [Validators.required, this.globalFunc.minValue(18), this.globalFunc.maxValue(60)]]
    });
  }

  // submit user form
  submitForm(val) {

    val.isActive = this.defaultIsActive;

    if ((this.defaultId) && (this.defaultId !== 0)) { // update user
      val.id = parseInt(this.defaultId, 10); // base added in second parameter to avoid radix parameter warning
      this.globalFunc.getDataCreateUpdate('updateUser', val.id, val.name, val.age, val.isActive)
      .then((data: any) => {
        this.router.navigate(['users']);
      });
    } else { // create user
      // get all user data
      this.globalFunc.getData('getUsers')
      .then((data: any) => {
        const ids = [];
        // get all id's
        for (const obj of data) {
          ids.push(obj.id);
        }

        val.id = ids[ids.length - 1] + 1; // increment last id
        // create user
        this.globalFunc.getDataCreateUpdate('createUser', val.id, val.name, val.age, val.isActive)
        .then((response: any) => {
          this.router.navigate(['users']);
        });

      });

    }
  }

}



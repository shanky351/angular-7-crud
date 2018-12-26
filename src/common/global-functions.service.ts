import { Injectable } from '@angular/core';
import {ValidatorFn, AbstractControl} from '@angular/forms';
import { UserOperationService } from './user-operation.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {

  constructor(public userService: UserOperationService) { }

  maxValue(max: Number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const input = control.value,
      isValid = input > max;
      if ( isValid ) {
        return { 'maxValue': {max} };
      } else {
        return null;
      }
    };
  }

  minValue(min: Number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
    const input = control.value,
    isValid = input < min;
      if ( isValid ) {
        return { 'minValue': {min} };
      } else {
        return null;
      }
    };
  }

  // get api data
  async getData(funcName, val?) {
    const req: any = val ? val : '';
    const promise = new Promise((resolve , reject) => {
      this.userService[funcName](req)
      .subscribe((data: any) => {
        if (data) {
          resolve(data);
        } else {
          reject('some error occured');
        }
      });
    });
    return await promise;
  }

  // get api data
  async getDataCreateUpdate(funcName, id, name, age, isActive) {
    console.log('funcName', funcName);
    const promise = new Promise((resolve , reject) => {
      this.userService[funcName](id, name, age, isActive)
      .subscribe((data: any) => {
        if (data) {
          resolve(data);
        } else {
          reject('some error occured');
        }
      });
    });
    return await promise;
  }

}

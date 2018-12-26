import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalFunctionsService } from '../../common/global-functions.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  defaultId: number;
  defaultUserData: any;

  constructor(public route: ActivatedRoute, public globalFunc: GlobalFunctionsService) { }

  ngOnInit() {
    this.defaultId = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    // get user data
    this.globalFunc.getData('getUser', this.defaultId)
      .then((data: any) => {
        this.defaultUserData = data;
      });
  }

  // print page
  print() {
    window.print();
  }

}

import {Component} from '@angular/core';

@Component({
  selector: 'app-not-romach',
  templateUrl: './not-romach.component.html',
  styleUrls: ['./not-romach.component.less']
})
export class NotRomachComponent {
  notificationToggle: boolean;

  constructor() {
    this.notificationToggle = false;
  }

  openNotificationCenter() {
    this.notificationToggle = !this.notificationToggle;
  }
}

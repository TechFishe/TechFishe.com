//Copyright (c) TechFishe 2022

import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'TechFishe.com';

  IsMobile: boolean = false;
  IsDesktop: boolean = true;

  constructor(private DeviceService: DeviceDetectorService){
    this.IsMobile = this.DeviceService.isMobile();
    this.IsDesktop = this.DeviceService.isDesktop();
  }
}

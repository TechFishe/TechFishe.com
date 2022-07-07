//Copyright (c) TechFishe 2022

import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-about-me',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent{
  IsMobile: boolean = false;
  IsDesktop: boolean = true;

  constructor(private DeviceService: DeviceDetectorService){
    this.IsMobile = this.DeviceService.isMobile();
    this.IsDesktop = this.DeviceService.isDesktop();
  }
}

import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { IDevice } from 'src/app/interfaces';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-dev',
  templateUrl: './show-dev.component.html',
  styleUrls: ['./show-dev.component.css']
})
export class ShowDevComponent implements OnInit {


  constructor( private service: SharedService) { }

  DeviceList  : IDevice[] = [] ;
  ngOnInit(): void {
    this.getDeviceList();
  }

  getDeviceList(){
  this.service.getDevices().subscribe(result=>{
    this.DeviceList = result;
      });
    }

    addClick(){
      //this.ActivateModal = true;
      this.getDeviceList();
    }

    assignDeviceClick(device){

      this.service.assignedDevice(device).subscribe(res=>{
        if(res == true)
        {
          alert("Sent request for processing. Kindly refresh to check latest the device status.");
        }
        else
        {
          alert("Something went wrong.");
        }
      }),
      error => {console.log("Error:",error)}
    }

    //Note - Implement confirmation pop up for assigning device
}

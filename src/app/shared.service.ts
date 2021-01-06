import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {IDevice} from 'src/app/interfaces'
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  
// before db call - hardcoded
  //  devices : IDevice[] = [
  //    {deviceId : "Device-1", status : "Assign"},
  //    {deviceId : "Device-2", status : "Assign"},
  //    {deviceId : "Device-3", status : "Assign"},
  //    {deviceId : "Device-4", status : "Assign"},
  //    {deviceId : "Device-5", status : "Assign"}
  //  ];

readonly APIUrl = "http://localhost:49167/api/";
  constructor(private http:HttpClient) { }
 
assignedDevice(val: IDevice): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>(this.APIUrl+'Device/AssignedDevice', val,httpOptions);
  }
  
  getDevices():Observable<IDevice[]>{
    
    return this.http.get<any>(this.APIUrl+'Device/All');
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClientService } from '../services/httpClient.service';
import { IntercomService } from '../services/intercom.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  _jobList = [];
  _searchData = [];
  _advFields : any  = [
    {"caption":"Job Title","value":"jobTitle","type":"string","between":false,"text1":"","text2":"","condition":"stw","sorting":""},
    {"caption":"Gender","value":"gender","type":"string","between":false,"text1":"","text2":"","condition":"stw","sorting":""},
    {"caption":"Salary","value":"salary","type":"numeric","between":false,"text1":"","text2":"","condition":"gte","sorting":""}
  ]
   
  constructor(private http: HttpClientService,private ics: IntercomService) { 
    
  }

  ngOnInit() {
    this.getAllJobData();
  }

  preparedData(){
    let url = "";
    for(let i=0;i<this._searchData.length;i++){
      url += this._searchData[i].value +"="+ JSON.stringify(this._searchData[i]);
      if(i != this._searchData.length-1){
        url += "&";
      }
    }
    return url;
  }

  getAllJobData(){
    let url = "http://localhost:8080/job_data";
    this.http.doGet(url).subscribe(
      data => {
        this._jobList = data.jobList;
      }
    );
  }

  showloading(type) {
    if (type === true) {this.ics.sendBean({t1: 'custom-loading'}); }
    if (type === false) {this.ics.sendBean({t1: 'custom-loading-off'}); }
  }

  showCustomMsg(msg, type) {
    if ( type === true) {this.ics.sendBean({t1: 'custom-msg', t2: msg, t3: 'Information' }); }
    if ( type === false) {this.ics.sendBean({t1: 'custom-msg', t2: msg, t3: 'Error' }); }
    if ( type === undefined) {this.ics.sendBean({t1: 'custom-msg', t2: msg, t3: 'Warning' }); }
    if ( type === null) {this.ics.sendBean({t1: 'custom-msg', t2: msg, t3: 'Success' }); }
  }

  changeAdvSearch(event){
    this._searchData = event;
    //https://stackoverflow.com/questions/4614255/rest-url-design-for-greater-than-less-than-operations
    let url = this.ics.apiurl+"/job_search?"+this.preparedData();
    this._jobList = [];
    this.showloading(true);
    this.http.doGet(url).subscribe(
      data => {
        this.showloading(false)
        if(data.jobList.length != 0){
          this._jobList = data.jobList;
        }else {
          this.showCustomMsg(data.responseMessage,true);
        }
      }
    );
  }

}

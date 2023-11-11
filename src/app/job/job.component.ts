import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Job } from '../modal/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  _job = Job;
  _searchData = [];
  _advFields : any  = [
    {"caption":"Job Title","value":"jobTitle","type":"string","isBetween":false,"text1":"","text2":"","condition":"stw","sorting":""},
    {"caption":"Gender","value":"gender","type":"string","isBetween":false,"text1":"","text2":"","condition":"stw","sorting":""},
    {"caption":"Salary","value":"salary","type":"numeric","isBetween":false,"text1":"","text2":"","condition":"gte","sorting":""}
  ]
  constructor() { }

  ngOnInit() {

  }



  changeAdvSearch(event){
    //https://stackoverflow.com/questions/4614255/rest-url-design-for-greater-than-less-than-operations
    console.log(event);
  }

}

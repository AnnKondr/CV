import { Component, OnInit } from '@angular/core';

export interface Education {
  label: string;
  faculty: string;
  speciality: string;
  year: string;
}


@Component({
  selector: 'app-right-section',
  templateUrl: './app-right-section.component.html',
  styleUrls: ['./app-right-section.component.css']
})

export class RightSectionComponent implements OnInit {
  public name = "Hanna Kondratovets";
  public prof = "Frontend Developer | UI Designer";

  public habits = [];
  public educations: Education[] = [
    {
      label: 'Zhytomyr State Technological University',
      faculty: 'Faculty of Information and Computer Technologies',
      speciality: 'Biotechnical and Medical Devices and Systems',
      year: "09.2007 to 05.2012"
    },  
     {
      label: 'Zhytomyr State Technological University',
      faculty: 'Faculty of retraining',
      speciality: 'Accounting and Auditing',
      year: "09.2010 to 02.2013"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

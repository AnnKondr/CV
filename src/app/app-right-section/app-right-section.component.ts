import { Component, OnInit } from '@angular/core';

export interface Education {
  label: string;
  faculty: string;
  speciality: string;
  year: string;
}

export interface Experience {
  profesion: string;
  firm: string;
  year: string;
  details: string;
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
  public experiences: Experience[] = [
    {
      profesion: "Printing designer",
      firm: "Art Design && Bloom Ink",
      year: " 2013-2016 ",
      details: "Design of signs, lightboxes, indexes, logos, corporate style, printing products (business cards, flyers, calendars)"
    },
    {
      profesion: "Web designer",
      firm: "Goodwin",
      year: " 2016-2018 ",
      details: "Website design "
    }, 
    {
      profesion: "UI Designer && Front-end developer",
      firm: "Speremall",
      year: " 2020-now ",
      details: "Strong Junior Frontend developer with experiance in Design"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

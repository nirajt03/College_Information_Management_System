import { Component, OnInit } from '@angular/core';
import { FacultyServiceService } from '../faculty-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-news',
  templateUrl: './my-news.component.html',
  styleUrls: ['./my-news.component.css']
})
export class MyNewsComponent implements OnInit {

  newsDetails = []

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private FacultyServiceService: FacultyServiceService 
    ) { }

  ngOnInit(): void {
    this.loadNewsDetails()
  }

  loadNewsDetails(){
      this.FacultyServiceService.getNewsDetails().subscribe(response => {
      if (response['status'] == 'success') {
        this.newsDetails = response['data']
        console.log(this.newsDetails)
      } else {
        console.log(response['error'])
      }
    })
  }

}



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrincipalServiceService } from '../principal-service.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {
  announcements = []

  constructor(
    private router: Router,
    private principalServiceService : PrincipalServiceService ) { }

  ngOnInit(): void {
    this.loadAnnouncements()
  }

  loadAnnouncements() {
    this.principalServiceService
      .getAnnouncements()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.announcements = response['data']
          console.log(this.announcements)
        } else {
          console.log(response['error'])
        }
      })
  }


  onEdit(announcement) {
    this.router.navigate(['/principalHome/principal/add-news'], {queryParams: {id: announcement['id']}})
  }

  addAnnouncement() {
    this.router.navigate(['/principalHome/principal/add-news'])
  }

}

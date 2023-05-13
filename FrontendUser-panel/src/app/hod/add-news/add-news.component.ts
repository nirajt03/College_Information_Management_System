import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HodServiceService} from '../hod-service.service'

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private hodServiceService: HodServiceService
  ) { }

  id = 0
  notice = ''
  description = ''
  announcements = null
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.queryParams['id']
    if (id) {
      // edit product
      this.hodServiceService
        .getAnnouncementDetails(id)
        .subscribe(response => {
          if (response['status'] == 'success') {
            const infoannouncements = response['data']
            if (infoannouncements.length > 0) {
              this.announcements = infoannouncements[0]
              this.id = infoannouncements['id']
              this.notice = infoannouncements['notice']
              this.description = infoannouncements['description']
            }
          }
        })
    }
  }

   onUpdate() {

    if (this.announcements) {
      // edit
      this.hodServiceService
        .updateAnnouncement(this.id, this.notice, this.description )
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.router.navigate(['/hodHome/hod/list-news'])
          }
        })
    } else {
      // insert
      this.hodServiceService
        .insertAnnouncement(this.notice, this.description)
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.router.navigate(['/hodHome/hod/list-news'])
          }
        })
    }

  }


 

}

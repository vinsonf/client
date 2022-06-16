import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap, takeUntil } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent implements OnInit {
  id$ = this.route.paramMap.pipe(
    map(params => params.get('id')));
  user$ = this.usersService.getUser(this.id$);
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {

  }



}

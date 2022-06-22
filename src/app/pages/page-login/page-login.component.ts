import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit {
  public form;
  loggedInUser$;
  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      username: 'Bret',
      password: 'Leanne Graham',
    });
    this.loggedInUser$ = this.usersService.loggedInUser$;
   }

  ngOnInit(): void {

  }

  login() {
    const credential = this.form.value;
    this.loggedInUser$ = this.usersService.login(credential.username, credential.password);
  }

}

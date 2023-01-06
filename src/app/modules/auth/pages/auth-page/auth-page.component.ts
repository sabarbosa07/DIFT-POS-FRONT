import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

import { Subject } from 'rxjs';
import { ToastService } from 'src/app/common/toast/services/toast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],

})
export class AuthPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  submitted: Boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public router: Router, private authService: AuthService, private toastService: ToastService, private cookieService: CookieService) { }

  ngOnInit(): void {    
    this.formLogin = new FormGroup({
      loginname: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });    
  }

  login() {
    this.submitted = true;
    if (this.formLogin.status === "VALID") {
      this.authService.login$(this.formLogin.value).subscribe(
        {
          next: data => {
            const expireDate: Date = new Date();
            expireDate.setHours( expireDate.getMinutes() + environment.jwt_expires);
            //this.cooki
            this.cookieService.set('token', data.token, expireDate)
            this.router.navigate(['/']);
          }
          ,
          // error: err => {
          //   if (err.status == 409) {
          //     this.toastService.add({ severity: 'error', summary: 'Error', detail: err.error.message });
          //   } else {
          //     console.log(err);
          //     // this.router.navigate(['error']);
          //     // this.router.navigate(['/','error']);
          //   }
          // }
        }
      );
    }
  }

}

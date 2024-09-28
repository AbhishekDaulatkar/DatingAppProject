import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_modals/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}; //data from [(ngModel)]
                   //loggedIn = false;
  // currentUser$ : Observable<User | null> = of(null);

  constructor(public accountService : AccountService, private router : Router,private toastr : ToastrService) {} //private to public -> able to use in comp.html

  ngOnInit(): void {
    // this.currentUser$ = this.accountService.currentUser$;
    //this.getCurrentUser();
 }

//  getCurrentUser() {
//   this.accountService.currentUser$.subscribe({

//     next: user => this.loggedIn = !!user, // !! converts the string into boolean value
//     error: error => console.log(error),
//   })
  
  //return alert("Login Persisted");
 //}

login(){
  this.accountService.login(this.model).subscribe({ //object "model" will be send as JSON to api
    next : _ => this.router.navigateByUrl('/members'),
      //this.loggedIn = true;
    error : error => this.toastr.error(error.error)
  })
}
logout(){
  this.accountService.logout()
  this.router.navigateByUrl('/');
  //this.loggedIn = false;
}

}

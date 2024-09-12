import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_modals/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}; //data from [(ngModel)]
                   //loggedIn = false;
  // currentUser$ : Observable<User | null> = of(null);

  constructor(public accountService : AccountService) {} //private to public -> able to use in comp.html

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
    next : response => {
      console.log(response);
      //this.loggedIn = true;
    },
    error : error => console.log(error)
    
  })
}
logout(){
  this.accountService.logout()
  //this.loggedIn = false;
}

}

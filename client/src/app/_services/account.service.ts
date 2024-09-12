import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { User } from '../_modals/user';

@Injectable({
  providedIn: 'root' //singleton service, only destroyed when app ends
})
export class AccountService {

  baseUrl = 'https://localhost:5001/api/';

  private currentUserSource = new BehaviorSubject<User | null>(null); // can also use <any> 
  currentUser$ = this.currentUserSource.asObservable(); //public used for other components  //..from AppComponent

  constructor(private http : HttpClient) { }

  login(model: any){ // model which is OBJECT will be send as JSON to api using the post method
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      //tap(response => console.log('raw', response)), //used for logging,debugging
      map((response: User) => {
        const user = response;
        if (user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        //return user; // was used coz in nav.comp we were not receiving console.log output as undefined
      })
    )
  }

  register(model: any){
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map( user => {
        if (user){
        localStorage.setItem('user',JSON.stringify(user));
        this.currentUserSource.next(user);
        }
        //return user;
      })
    )
  }

  setCurrentUser(user : User) { 
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}

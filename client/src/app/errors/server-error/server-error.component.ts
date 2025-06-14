import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
  
  error: any;

  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.['error']; // Accessing the error from the navigation state
    if (!this.error) {
      this.error = { message: 'No error information available.' }; // Fallback message if no error is provided
    }
  }


  ngOnInit(): void {
   
  }
}

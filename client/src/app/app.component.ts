import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dating app';
  users: any;
  constructor(private httpClient: HttpClient) {
  }

  public ngOnInit(): void {
      this.httpClient.get('https://localhost:44348/api/users').subscribe({
        next: response => this.users = response,
        error: error => console.log(error),
        complete: () => console.log('Request has completed')
      })
  }
}

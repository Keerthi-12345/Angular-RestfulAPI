import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiStatus } from '../api.status';
import { ApiService } from '../api.service';
import { timer } from 'rxjs';
import { switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css']
})
export class ApiListComponent implements OnInit {

  backendResponse!: ApiStatus[];
  id!: number;
  apiStatus: ApiStatus = new ApiStatus();


  color = 'primary';
  mode = 'determinate';
  value = 50;
  displayedColumns = ['url', 'status', 'date', 'duration'];

  constructor(private apiService: ApiService, private router: Router,) { }

  ngOnInit() {

    timer(0, 10000)
    .pipe(
      switchMap(() => this.apiService.getApiStatus())
    ).subscribe(res => this.backendResponse=res)
    
  }

}

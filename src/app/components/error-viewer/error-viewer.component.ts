import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-error-viewer',
  templateUrl: './error-viewer.component.html',
  styleUrls: ['./error-viewer.component.scss']
})
export class ErrorViewerComponent implements OnInit {
  error: string = '';
  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.errorService.errorSubject.subscribe(error => {
      this.error = error;
    })
  }

  removeError(): void {
    this.error = '';
  }

}

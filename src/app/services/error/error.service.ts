import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errorSubject: Subject<string> = new Subject<string>();

  constructor() { }

  showError(errorMessage: string): void {
    this.errorSubject.next(errorMessage);
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading = new Subject<boolean>();
    show() {
      console.log('loader service show');
      this.isLoading.next(true);
    }
    hide() {
      console.log('loader service hide');
      this.isLoading.next(false);
    }


  constructor() {
    console.log('loader service constructor');
  }
}

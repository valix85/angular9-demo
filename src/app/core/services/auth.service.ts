import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getAuth(): boolean {
    return Math.random() > 0.8;
  }

  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  getProp(name: string) {
    return localStorage.getItem(name);
  }

  saveProp(name: string, value) {
      localStorage.setItem(name, JSON.stringify(value));
  }

  constructor() { }
}

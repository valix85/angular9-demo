import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RandomGuard implements CanActivate {

  constructor(private authService: AuthService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('RandomGuard Active ');
      // alert('PAGARE!!! You are not allowed to view this page');
      const ris = this.authService.getAuth();
      if (!ris) {
        alert('Test RandomGuard, entri col 20% delle possibilità');
        return false;
      }
      return true;
  }

}

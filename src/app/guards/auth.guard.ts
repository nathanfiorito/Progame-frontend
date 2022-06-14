import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private cookieService: CookieService
    ){}

  async canActivate(): Promise<boolean | UrlTree> {
    const isAuthenticated = this.cookieService.get('accessToken') !== ''? true : false
    if(!isAuthenticated){
      alert('Você deve estar logada para continuar!');
      this.router.navigate(['/signin']);
    }
    return isAuthenticated;
  }
}

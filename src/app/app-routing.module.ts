import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RankingComponent } from './dashboard/ranking/ranking.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { PasswordRecoveryComponent } from './login/password-recovery/password-recovery/password-recovery.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo:'' },
  { path: 'signin', component: SigninComponent, pathMatch: 'full'},
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'recovery', component: PasswordRecoveryComponent, pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full',canActivate: [AuthGuard] },
  { path: 'ranking', component: RankingComponent, pathMatch: 'full',canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppRoutingModule {}

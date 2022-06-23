import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressBarModule } from 'angular-progress-bar';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPopupComponent } from './components/error-popup/error-popup.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DailyComponent } from './dashboard/daily/daily.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulosComponent } from './dashboard/modulos/modulos.component';
import { SocialComponent } from './dashboard/social/social.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationComponent } from './login/password-recovery/confirmation/confirmation.component';
import { NewPasswordComponent } from './login/password-recovery/new-password/new-password.component';
import { PasswordRecoveryComponent } from './login/password-recovery/password-recovery/password-recovery.component';
import { RecoveryComponent } from './login/password-recovery/recovery/recovery.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { RankingComponent } from './dashboard/ranking/ranking.component';
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { BackgroundComponent } from './components/background/background.component';
import { PasswordInputComponent } from './components/inputs/password-input/password-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RecoveryComponent,
    ConfirmationComponent,
    NewPasswordComponent,
    DashboardComponent,
    PasswordRecoveryComponent,
    ModulosComponent,
    SocialComponent,
    DailyComponent,
    ErrorPopupComponent,
    RankingComponent,
    ButtonComponent,
    TextInputComponent,
    PasswordInputComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ProgressBarModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { TestComponent } from './test/test.component';
import { ResourcesComponent } from './resources/resources.component';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { StuDashboardComponent } from './stu-dashboard/stu-dashboard.component';
import { SetTestComponent } from './set-test/set-test.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    DashboardComponent,
    AuthComponent,
    TestComponent,
    ResourcesComponent,
    LeftNavbarComponent,
    GuidelinesComponent,
    StuDashboardComponent,
    SetTestComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '121406676463-pmur4ehrulbefogebsrnivv5lj0vquov.apps.googleusercontent.com'
            )
            }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

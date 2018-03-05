import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatGridListModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule} from '@angular/material';
import { MatInputModule, MatSnackBarModule, MatTableModule, MatProgressSpinnerModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

import { LandingComponent } from './landing/landing.component';
import { AllBlogsComponent } from './blog/all-blogs/all-blogs.component';

const appRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'blog', component: AllBlogsComponent },
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  { path: '**', component: LandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AllBlogsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

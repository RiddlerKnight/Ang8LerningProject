import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule, MatSliderModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DatabaseTestingComponent } from './database-testing/database-testing.component';
import { BasicTestingComponent } from './basic-testing/basic-testing.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'database-testing', component: DatabaseTestingComponent},
  {path: 'basic-testing', component: BasicTestingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatabaseTestingComponent,
    BasicTestingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule,
    MatGridListModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

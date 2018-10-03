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
import { ShowGetParamComponent } from './show-get-param/show-get-param.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'database-testing', component: DatabaseTestingComponent},
  {path: 'basic-testing', component: BasicTestingComponent},
  {path: 'param-testing', component: ShowGetParamComponent},
  {path: 'param-testing/:id/:name', component: ShowGetParamComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatabaseTestingComponent,
    BasicTestingComponent,
    ShowGetParamComponent
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

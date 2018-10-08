import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule, MatSliderModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonToggleModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DatabaseTestingComponent } from './database-testing/database-testing.component';
import { BasicTestingComponent } from './basic-testing/basic-testing.component';
import { ShowGetParamComponent } from './show-get-param/show-get-param.component';
import { ComponentDeepdiveComponent } from './component-deepdive/component-deepdive.component';
import { AddItemControlComponent } from './component-deepdive/add-item-control/add-item-control.component';
import { ItemModelComponent } from './component-deepdive/item-model/item-model.component';
import { DirectiveTestingComponent } from './directive-testing/directive-testing.component';
import { GreenHighlighterDirective } from './directive-testing/green-highlighter.directive';
import { UnlessDirective } from './directive-testing/unless.directive';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'database-testing', component: DatabaseTestingComponent},
  {path: 'basic-testing', component: BasicTestingComponent},
  {path: 'param-testing', component: ShowGetParamComponent},
  {path: 'param-testing/:id/:name', component: ShowGetParamComponent},
  {path: 'component-deepdive', component: ComponentDeepdiveComponent},
  {path: 'directive-testing', component: DirectiveTestingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatabaseTestingComponent,
    BasicTestingComponent,
    ShowGetParamComponent,
    ComponentDeepdiveComponent,
    AddItemControlComponent,
    ItemModelComponent,
    DirectiveTestingComponent,
    GreenHighlighterDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatSliderModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonToggleModule, MatListModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { AccountService } from './services/accounts.service';
import { SimpleLogService } from './services/simple-log.service';
import { AppRoutingModule } from './app-routing.module';
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
import { AccountLoginComponent } from './account-manager/account-login/account-login.component';
import { UserMenuPanelComponent } from './user-menu-panel/user-menu-panel.component';
import { AccountEditComponent } from './account-manager/account-edit/account-edit.component';
import { AccountOverviewComponent } from './account-manager/account-overview/account-overview.component';
import { AuhthGuard } from './services/auth-guard.service';
import { AnotherAccountEditComponent } from './account-manager/another-account-edit/another-account-edit.component';
import { AccountListComponent } from './account-manager/another-account-edit/account-list/account-list.component';
import { AccountListItemComponent } from './account-manager/another-account-edit/account-list/account-list-item/account-list-item.component';


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
    UnlessDirective,
    AccountLoginComponent,
    UserMenuPanelComponent,
    AccountEditComponent,
    AccountOverviewComponent,
    AnotherAccountEditComponent,
    AccountListComponent,
    AccountListItemComponent
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
    AppRoutingModule,
    MatListModule
  ],
  providers: [AccountService, AuhthGuard, SimpleLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

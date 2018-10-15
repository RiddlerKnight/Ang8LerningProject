import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DatabaseTestingComponent } from './database-testing/database-testing.component';
import { BasicTestingComponent } from './basic-testing/basic-testing.component';
import { ShowGetParamComponent } from './show-get-param/show-get-param.component';
import { ComponentDeepdiveComponent } from './component-deepdive/component-deepdive.component';
import { DirectiveTestingComponent } from './directive-testing/directive-testing.component';
import { AccountLoginComponent } from './account-manager/account-login/account-login.component';
import { AccountEditComponent } from './account-manager/account-edit/account-edit.component';
import { AccountOverviewComponent } from './account-manager/account-overview/account-overview.component';
import { AuhthGuard } from './services/auth-guard.service';
import { AnotherAccountEditComponent } from './account-manager/another-account-edit/another-account-edit.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'database-testing', component: DatabaseTestingComponent},
    {path: 'basic-testing', component: BasicTestingComponent},
    {path: 'param-testing', component: ShowGetParamComponent},
    {path: 'param-testing/:id/:name', component: ShowGetParamComponent},
    {path: 'component-deepdive', component: ComponentDeepdiveComponent},
    {path: 'directive-testing', component: DirectiveTestingComponent},
    {path: 'account-overview', canActivate:[AuhthGuard], component: AccountOverviewComponent, children:[
      {path: 'edit', component:AccountEditComponent},
        
    ]},
    {path: 'account-login', component:AccountLoginComponent},
    {path:'another-edit', component:AnotherAccountEditComponent}
  ];
  
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}
    

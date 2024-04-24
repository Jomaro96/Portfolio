//Imports needed for routing
import { ModuleWithProviders } from "@angular/core";
import { Route,Routes, RouterModule } from "@angular/router";

//My components for navigation

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from './components/signup/signup.component';
import { GetFileComponent } from './components/get-file/get-file.component';
import { CreateFileComponent } from './components/create-file/create-file.component';
import { UpdateFileComponent } from './components/update-file/update-file.component';
import { UserComponent } from './components/user/user.component';
import { AdminPannelComponent } from './components/admin-pannel/admin-pannel.component';
import { ErrorComponent } from './components/error/error.component';

//Guard service
import { LoginGuard } from "./services/login.guard";
import { UserGuard } from "./services/user.guard";

//Creating my routes
const appRoutes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent,canActivate:[LoginGuard]},
    {path: 'signup', component: SignupComponent,canActivate:[LoginGuard]},
    {path: 'content/:id', component:GetFileComponent,canActivate:[UserGuard]},
    {path: 'create', component:CreateFileComponent},
    {path: 'update/:id',component:UpdateFileComponent},
    {path: 'user/:id',component:UserComponent},
    {path: 'admin',component:AdminPannelComponent},
    {path: '**', component:ErrorComponent}
];
//Export routing
export const appRoutingProvider: any[] = [];
export const routing:ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes)
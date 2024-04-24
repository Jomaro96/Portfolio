import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

//import routing
import { routing, appRoutingProvider } from './app.routing';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { GetFileComponent } from './components/get-file/get-file.component';
import { CreateFileComponent } from './components/create-file/create-file.component';
import { UpdateFileComponent } from './components/update-file/update-file.component';
import { UserComponent } from './components/user/user.component';
import { AdminPannelComponent } from './components/admin-pannel/admin-pannel.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    GetFileComponent,
    CreateFileComponent,
    UpdateFileComponent,
    UserComponent,
    AdminPannelComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    appRoutingProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

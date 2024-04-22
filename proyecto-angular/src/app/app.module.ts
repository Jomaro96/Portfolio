import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

//Imports
//Routing
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { appRoutingProvider,routing } from './app.routing';


//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    UpdateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    appRoutingProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

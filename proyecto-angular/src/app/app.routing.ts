//Imports necesarios para el routing
import { ModuleWithProviders } from "@angular/core";
import { Route,Routes, RouterModule } from "@angular/router";

//imports necesarios para mis modulos
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from "./components/detail/detail.component";
import { UpdateProjectComponent } from "./components/update-project/update-project.component";

//Creando objeto(array) de tipo routes
const appRoutes:Routes = [
    {path: '', component: AboutComponent},
    {path: 'about', component: AboutComponent},
    {path: 'create', component: CreateComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'project/:id', component:DetailComponent},
    {path: 'update/:id',component:UpdateProjectComponent},
    {path: '**', component:ErrorComponent}
];

//Exportar routing
export const appRoutingProvider: any[] = [];
export const routing:ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes)
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers:[ProjectService]
})
export class ProjectsComponent implements OnInit{
  public projects:Project[];
  public url:string;
  constructor(
    private _projectService:ProjectService
  ){
    this.projects = []
    this.url = global.url;
  }
  ngOnInit(): void {
    this.getProjects()
  }
  getProjects(){
    this._projectService.getProjects().subscribe({
      next: (response) => {
        console.log(response);

        if(response.projects){
          this.projects = response.projects;
        }
      },
      error: (err) => {console.log(err);}
    })
  }
}

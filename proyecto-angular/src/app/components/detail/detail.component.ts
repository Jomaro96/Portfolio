import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { global } from '../../services/global';
import { ActivatedRoute,Router,Params } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  providers: [ProjectService]
})
export class DetailComponent implements OnInit{
  public url:string;
  public project: Project;

  constructor(
    private _projectService: ProjectService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.url = global.url;
    this.project = new Project('','','','','',0,'');
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
        let id = params.id;
        this.getProject(id)
    });
  }
  getProject(id:string){
    this._projectService.getProject(id).subscribe({
      next: (response) => {
        console.log(response);
        this.project = response.projectFind;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  deleteProject(id:string){
    if(confirm('Are you sure you want to delete this project?')) {
      this._projectService.deleteProject(id).subscribe({
        next: (response) => {
          
          if(response.projectDeleted){
            alert('Project Deleted!');
            this._router.navigate(['/projects']);
          }
          
        },
        error: (err) => {
          console.log(err)
        }
      })
    } else{
      alert('Deletion Canceled');
    }
  }
  updateProject(id:string){
    this._router.navigate(['/update/'+id])
  }
}

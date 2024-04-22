import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { global } from '../../services/global';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { response } from 'express';
import { Console } from 'console';
import { UploadedService } from '../../services/upload.service'; //Servicio para subir archivos

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrl: './update-project.component.css',
  providers: [ProjectService,UploadedService]
})
export class UpdateProjectComponent implements OnInit{

  public project: Project   //modelo de projecto
  public url:string //url de la pagina
  public title:string //titulo custom de la pagina
  public filesToUpload: Array<File> //Archivos para subir
  //router para navegar a otras paginas
  //route para hacer referencia a la ruta en la que estamos
  //project service es nuestro servicio
  constructor(
    private _router:Router,
    private _project:ProjectService,
    private _route:ActivatedRoute,
    private _uploadedService:UploadedService
  ){
    this.url = global.url;
    this.project = new Project('','','','','',0,'');
    this.title = "Update Project";
  }
  ngOnInit(): void {
    this._route.params.subscribe(params => {
        let id = params.id
        this.getProject(id)
      })
  }
  getProject(id:string){
    this._project.getProject(id).subscribe({
      next:(response) => {

        this.project = response.projectFind;
      },
      error:(err) => {
        console.log(err);
      }
    });
  }
  //actually updating the data
  onSubmit(form:any){
    if(confirm('Are you sure you want to update this project?')) {
      this._project.updateProject(this.project).subscribe({
        next:(response) => {
          if(response.projectUpdate)
            {
              if(this.filesToUpload){
              this._uploadedService.makeFileRequest(global.url+"/upload_image/"+response.projectUpdate._id,[],this.filesToUpload,'image')
              .then((result:any)=>{
                alert("Project Updated");
                this._router.navigate(['/project/'+response.projectUpdate._id]);
              });
              } else {
                alert("Project Updated");
                this._router.navigate(['/project/'+response.projectUpdate._id]);
              }

              
            }
        },
        error:(err) => {
          console.log(err);
        }
      })
    }else{
      alert('Update Canceled');
    }
  }


  fileChangeEvent(fileInput:any){
    //console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  

}

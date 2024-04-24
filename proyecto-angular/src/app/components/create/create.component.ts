import { Component,OnInit } from '@angular/core';
import { Project } from '../../models/project'; //Modelo
import { ProjectService } from '../../services/project.service'; //Servicio para hacer insert
import { Router } from '@angular/router'; //Redireccionar
import { UploadedService } from '../../services/upload.service'; //Servicio para subir archivos
import { global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ProjectService,UploadedService]
})
export class CreateComponent implements OnInit{
  public title:string;
  public project:Project;
  public filesToUpload: Array<File>
  public thumbToUpload: Array<File>

  constructor(
    private _projectService:ProjectService,
    private _uploadedService:UploadedService,
    private router:Router
  ){
    this.title = "Create project";
    this.project = new Project('','','','','',0,'');
    this.filesToUpload = [];
    this.thumbToUpload = [];
  }

  onSubmit(form:any){
    //console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
            //Subir imagen
            if(this.filesToUpload){
            this._uploadedService.makeFileRequest(global.url+"/upload_image/"+response.project._id,[],this.filesToUpload,'image')
            .then((result:any)=>{
              alert("Project uploaded!!!");
              this.router.navigate(['/project/'+response.project._id]);
            });
            }else{
              alert("Project uploaded!!!");
              this.router.navigate(['/project/'+response.project._id]);
            }
        }else{
          
          alert("Error uploading, try later");
        }
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    )
  }
  
  ngOnInit(): void {
    
  }

  fileChangeEvent(fileInput:any){
    //console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}

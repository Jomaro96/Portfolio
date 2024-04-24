import { Component } from '@angular/core';
import { Document } from '../../models/document';
import { UploadedService } from '../../services/upload.service';
import { DocumentService } from '../../services/documents.service';
import { Router } from '@angular/router';
import { global } from '../../services/global';
@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrl: './create-file.component.css',
  providers:[UploadedService,DocumentService]
})
export class CreateFileComponent {
  public title:string;
  public document:Document;
  public filesToUpload: Array<File>
  public thumbToUpload: Array<File>

  constructor(
    private _documentService:DocumentService,
    private _uploadedService:UploadedService,
    private router:Router
  ){
    this.title = "Create project";
    this.document = new Document('','',new Date(""),"","","john.doe","","");
    this.filesToUpload = [];
    this.thumbToUpload = [];
  }

  onSubmit(form:any){
    //console.log(this.project);
    this._documentService.addDocument(this.document).subscribe(
      response => {
        if(response.document){
            //Subir imagen
            if(this.filesToUpload){
            this._uploadedService.makeFileRequest(global.url+"/upload_file/"+response.document._id,[],this.filesToUpload,'image')
            .then((result:any)=>{
              alert("Project uploaded!!!");
              //this.router.navigate(['/project/'+response.project._id]);
            });
              
            }else{
              alert("Project uploaded!!!");
              //this.router.navigate(['/project/'+response.project._id]);
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
    console.log(global.url);
  }

  fileChangeEvent(fileInput:any){
    //console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  thumbnailChangeEvent(fileInput:any){
    //console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}

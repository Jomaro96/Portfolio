import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Theme and Document classes and services
import { ThemeService } from '../../services/theme.service';
import { Theme } from '../../models/theme';
//document service
import { DocumentService } from '../../services/documents.service';
import { Document } from '../../models/document';
//forkjoin to preload data
import { forkJoin } from 'rxjs';
//url
import { global } from '../../services/global';
//importing my auth
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ThemeService, DocumentService,AuthService]
})
export class HomeComponent implements OnInit {
  public themes: Theme[];
  public documentsMap: Map<string, Document[]> = new Map<string, Document[]>();
  public allDocumentsLoaded: boolean = false;
  public url:string;
  private authSubscription: Subscription;

  constructor(
    private _themeService: ThemeService,
    private _documentService: DocumentService,
    private _authService: AuthService,
  ) {
    this.url = global.url;
    
  }

  ngOnInit(): void {
    this.getThemes();
  }

  getThemes() {
    this._themeService.getThemes().subscribe({
      next: (response) => {
        if (response.themes) {
          this.themes = response.themes;
          this.loadDocumentsForThemes();
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  loadDocumentsForThemes() {
    let requests:any = [];
    this.themes.forEach((theme) => {
      theme.categories.forEach((category) => {
        requests.push(this.getDocuments(theme.name, category));
      });
    });

    
    forkJoin(requests).subscribe((responses:any) => {
      responses.forEach((response:any, index:any) => {
        const [theme, category] = this.getThemeAndCategoryByIndex(index);
        this.documentsMap.set(`${theme}_${category}`, response.documents);
      });
      this.allDocumentsLoaded = true; // Set flag to indicate all documents are loaded
    });
  }

  getDocuments(theme: string, category: string) {
    return this._documentService.getDocuments(theme, category);
  }

  getThemeAndCategoryByIndex(index: number): [string, string] {
    let currentIndex = 0;
    for (let theme of this.themes) {
      for (let category of theme.categories) {
        if (currentIndex === index) {
          return [theme.name, category];
        }
        currentIndex++;
      }
    }
    return ['', ''];
  }

  getDocumentsForCategory(theme: string, category: string): Document[] {
    const key = `${theme}_${category}`;
    return this.documentsMap.get(key) || [];
  }

 
  
}

  


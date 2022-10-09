import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
// import { map } from 'rxjs/operators';
// import { Data } from 'popper.js';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  urlPrefix: string = 'http://localhost:9090';

  constructor(private httpClient: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.urlPrefix + '/api/projects', {
      responseType: 'json',
    });

    // The arrow function below executes once for one response
    // and the "data" parameter represents the actual response,
    // which is received from the server. e.g: "projects array"
    // .pipe(
    //   map((data: Project[]) => {
    //     for (let i = 0; i < data.length, i++; ) {
    //       data[i].teamSize = data[i].teamSize * 100;
    //     }
    //     return data;
    //   })
    // )
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>(
      this.urlPrefix + '/api/projects',
      newProject,
      {
        responseType: 'json',
      }
    );
  }

  updateProject(existingProject: Project): Observable<Project> {
    return this.httpClient.put<Project>(
      this.urlPrefix + '/api/projects',
      existingProject,
      {
        responseType: 'json',
      }
    );
  }

  deleteProject(ProjectID: number): Observable<string> {
    return this.httpClient.delete<string>(
      this.urlPrefix + '/api/projects?ProjectID=' + ProjectID
    );
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(
      this.urlPrefix + '/api/projects/search/' + searchBy + '/' + searchText,
      { responseType: 'json' }
    );
  }
}

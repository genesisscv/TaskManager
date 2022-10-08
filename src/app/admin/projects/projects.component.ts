import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: any = null;
  deleteIndex: any = null;
  deleteProject: Project = new Project();
  searchBy: string = 'ProjectName';
  searchText: string = '';

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getAllProjects().subscribe((response: Project[]) => {
      this.projects = response;
    });
  }

  onSaveClick() {
    this.projectsService.insertProject(this.newProject).subscribe(
      (response) => {
        //Add Project to Grid
        var p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects.push(p);

        // Clear New Project Dialog - TextBoxes
        this.newProject.projectID = null;
        this.newProject.projectName = null;
        this.newProject.dateOfStart = null;
        this.newProject.teamSize = null;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onEditClick(event: any, index: number) {
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }

  // Using subscribe below to create an observer in which the first function will
  // be created to handle error function which executes after receiving the
  // response successfully and the second function executes in case of an exception
  // raised at the server side

  onUpdateClick() {
    this.projectsService.updateProject(this.editProject).subscribe(
      (response: Project) => {
        var p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;

        // Assign a project to a specific index
        this.projects[this.editIndex] = p;

        // Clear New Project Dialog - TextBoxes
        this.editProject.projectID = null;
        this.editProject.projectName = null;
        this.editProject.dateOfStart = null;
        this.editProject.teamSize = null;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onDeleteClick(event: any, index: number) {
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;
    // this.deleteIndex = index;
  }
  onDeleteConfirmClick() {
    this.projectsService.deleteProject(this.deleteProject.projectID).subscribe(
      (response) => {
        // Delete a singular project from a specific ID
        this.projects.splice(this.deleteIndex, 1);

        // Clear New Project Dialog - TextBoxes
        this.deleteProject.projectID = null;
        this.deleteProject.projectName = null;
        this.deleteProject.dateOfStart = null;
        this.deleteProject.teamSize = null;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSearchClick() {
    this.projectsService
      .SearchProjects(this.searchBy, this.searchText)
      .subscribe(
        (response: Project[]) => {
          this.projects = response;
        },

        (error) => {
          console.log(error);
        }
      );
  }
}

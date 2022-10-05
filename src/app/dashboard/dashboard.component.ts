import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Designation: string = '';
  Username: string = '';
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  ngOnInit() {
    this.Designation = 'Team Leader';
    this.Username = 'John Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Clients = [
      'ABC Infotech Ltd.',
      'DEF Software Solutions',
      'GHI Industries',
    ];

    this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];

    this.Years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

    this.TeamMembersSummary = [
      {
        Region: 'East',
        TeamMembersCount: 20,
        TemporarilyUnavailableMembers: 4,
      },
      {
        Region: 'West',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 8,
      },
      {
        Region: 'South',
        TeamMembersCount: 17,
        TemporarilyUnavailableMembers: 1,
      },
      {
        Region: 'North',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 6,
      },
    ];

    this.TeamMembers = [
      {
        Region: 'East',
        Members: [
          { Id: 1, Name: 'Ford', Status: 'Available' },
          { Id: 2, Name: 'Miller', Status: 'Available' },
          { Id: 3, Name: 'Jones', Status: 'Busy' },
          { Id: 4, Name: 'James', Status: 'Busy' },
        ],
      },
      {
        Region: 'West',
        Members: [
          { Id: 5, Name: 'Anna', Status: 'Available' },
          { Id: 6, Name: 'Adan', Status: 'Available' },
          { Id: 7, Name: 'Valentine', Status: 'Busy' },
          { Id: 8, Name: 'Jasmine', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { Id: 9, Name: 'Kristine', Status: 'Available' },
          { Id: 10, Name: 'Mardi', Status: 'Available' },
          { Id: 11, Name: 'Bree', Status: 'Busy' },
          { Id: 12, Name: 'Rebecca', Status: 'Busy' },
        ],
      },
      {
        Region: 'North',
        Members: [
          { Id: 13, Name: 'Jackson', Status: 'Available' },
          { Id: 14, Name: 'Sandra', Status: 'Available' },
          { Id: 15, Name: 'Roxy', Status: 'Busy' },
          { Id: 16, Name: 'James', Status: 'Busy' },
        ],
      },
    ];
  }
}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginService } from '../../auth/login/login.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Section } from './section';
import { SectionService } from './section.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

 @ViewChild(MatSort) sort: MatSort = <MatSort>{};
  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  userLoginOn:boolean=false;

  sections:Section[]=[];
  dataSource = new MatTableDataSource<Section>(this.sections);

  displayedColumns: string[] = ['id', 'description', 'journey', 'quater', 'actions'];

  constructor(
    private loginService:LoginService,
    private sectionService:SectionService) { }
  
  ngOnInit(): void {

    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });

    this.sectionService.getAll().subscribe(
      response => {
        this.sections = response;
        this.dataSource.data = this.sections;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    });
  }

  delete(Section:Section):void {
    this.sectionService.delete(Section.id).subscribe(
      result => this.sectionService.getAll().subscribe(
        response => this.sections = response
      )
    );
  }
}

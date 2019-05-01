import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Model } from '../Interfaces/Model';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  displayedColumns: string[] = ['make', 'modell', 'year'];
  makes: Observable<string[]>;
  years: Observable<number[]>;
  models: Observable<Model[]>;
  selectedMake = '';
  selectedYear = 0;
  unfiltered = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Model>();

  constructor(private http: HttpClient) {
    this.makes = this.loadMakes();
    this.years = this.loadYears();
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadMakes() {
    return this.http.get<string[]>('https://vehicle-data.azurewebsites.net/api/makes');
  }
  loadYears() {
    return this.http.get<number[]>('https://vehicle-data.azurewebsites.net/api/years');
  }

  change() {
    this.dataSource.paginator = this.paginator;
    console.log('paginator: ' + this.dataSource.paginator);
    if (this.unfiltered === false) {
      this.models = this.http.get<Model[]>('https://vehicle-data.azurewebsites.net/api/models?fetch=100');
    }
    if (this.unfiltered === true) {
      this.selectedMake = '';
      this.selectedYear = 0;
      this.models = null;
      this.dataSource = new MatTableDataSource();
      this.dataSource.paginator = null;
    }
    if (this.selectedMake.length <= 0 && this.selectedYear > 0) {
      this.models = this.http.get<Model[]>('https://vehicle-data.azurewebsites.net/api/models?year=' + this.selectedYear + '&fetch=100');
    } else if (this.selectedMake.length > 0 && this.selectedYear <= 0) {
      this.models = this.http.get<Model[]>('https://vehicle-data.azurewebsites.net/api/models?make=' + this.selectedMake);
    } else if (this.selectedMake.length > 0 && this.selectedYear > 0) {
      this.models = this.http.get<Model[]>('https://vehicle-data.azurewebsites.net/api/models?make='
        + this.selectedMake
        + '&year='
        + this.selectedYear
        + '&fetch=100');
    }
    if (this.models != null) {
      this.models.subscribe(modelsArray => {
        this.dataSource.data = modelsArray;
        this.dataSource.paginator = this.paginator;
      });
    }
  }


}

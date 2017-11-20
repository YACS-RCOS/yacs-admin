import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import {FakeYacsService} from '../../fake-yacs.service';

@Component({
  selector: 'school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schools: School[];
  constructor(private yacsService: FakeYacsService) { }

  getSchools(): void{
    this.yacsService.getSchools()
      .subscribe(schools => this.schools = schools);
  }

  ngOnInit() {
    this.getSchools();
  }

}

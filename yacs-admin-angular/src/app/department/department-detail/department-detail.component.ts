import { Component, OnInit, Input } from '@angular/core';
import {Department} from '../department';
import {ActivatedRoute} from '@angular/router';
import {School} from '../../school/school';
import {FakeYacsService} from '../../fake-yacs.service';
@Component({
  selector: 'department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  @Input() dept: Department;
  schools: School[];
  constructor(private yacsService: FakeYacsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.yacsService.getSchools()
      .subscribe(schools => this.schools = schools);
    const id = +this.route.snapshot.paramMap.get('id');
    this.yacsService.getDeptByID(id)
      .subscribe(dept => this.dept = dept);
  }
  
  saveDept(){
    this.yacsService.updateDepartment(this.dept)
      .subscribe(()=> console.log('done'));
  }

  save(code, name, id){
    console.log('saving!');
    this.yacsService.updateDepartment(this.dept)
      .subscribe(()=>{
        console.log('done');
      }); 
  }

}

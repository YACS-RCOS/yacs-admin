import { Component, OnInit, Input } from '@angular/core';
import {Department} from '../department';
import {ActivatedRoute, Router} from '@angular/router';
import {School} from '../../school/school';
import {FakeYacsService} from '../../fake-yacs.service';
import {Location} from '@angular/common';

@Component({
  selector: 'department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  @Input() dept: Department;
  schools: School[];
  constructor(private yacsService: FakeYacsService, private route: ActivatedRoute, private router: Router, private location: Location) {}

  ngOnInit() {
    let id: number;
    this.yacsService.getSchools()
      .subscribe(schools => this.schools = schools);
    this.route.params.subscribe(params=>{id=+params['id']});
    this.yacsService.getDeptByID(id)
      .subscribe(dept => this.dept = dept);
    console.log(this.dept);
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
        this.router.navigate(['/departments']);
      }); 
  }

  goBack(){
    this.location.back();
  }

  confirmUnsavedChanges(dept){

    let cancelAction = false;
        if(this.dept.code != dept.code || 
           this.dept.name != dept.name ||
           this.dept.school_id != dept.school_id){
          cancelAction = confirm('You have unsaved changes. Are you sure you want to cancel?');
          
        }
        else{
          cancelAction=true;
        }
   if(cancelAction){
      this.location.back();
    } 
  }

  cancel(code,name,id){
    
    //Retrieve the current state of the object
    this.yacsService.getDeptByID(this.dept.id)
      .subscribe(dept => {
        this.confirmUnsavedChanges(dept); 
        
        
      });
    console.log(this.dept);
    console.log(this.dept.code);
    console.log(code);
    
  }
}

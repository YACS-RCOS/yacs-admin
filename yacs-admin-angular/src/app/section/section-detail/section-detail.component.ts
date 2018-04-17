import {Component, OnInit, Input} from '@angular/core';
import {Section} from '../section';
import {YacsService} from '../../services/yacs.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrls: ['./section-detail.component.css']
})
export class SectionDetailComponent implements OnInit {

  @Input () section: Section;
  constructor(private yacsService: YacsService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  getSection(id: number){
    this.yacsService.getSectionByID(id)
      .subscribe(section=>this.section = section);
  }

  ngOnInit() {
    let id: number;
    this.route.params.subscribe(params=>{id=+params['id']});
    this.getSection(id);
  }

  saveSection(name){
    this.yacsService.updateSection(this.section)
      .subscribe(()=>{
        this.router.navigate(['/sections']);
      });
  }

  cancel(name){
    this.goBack();
  }
  goBack(){
    this.location.back();
  }

}

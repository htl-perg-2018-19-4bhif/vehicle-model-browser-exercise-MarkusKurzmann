import { Component, OnInit } from '@angular/core';
import { NgxLoremIpsumService } from 'ngx-lorem-ipsum';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {

  constructor(private service: NgxLoremIpsumService) {
  }

  ngOnInit() {
  }

}

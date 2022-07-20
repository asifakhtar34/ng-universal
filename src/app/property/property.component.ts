import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor(private metaService: Meta) { }

  ngOnInit() {
    this.metaService.updateTag({ property: "og:description", content: "Leadrat Microsite"})
    this.metaService.updateTag({property: 'og:image', content: 'http://leadrat.com/wp-content/uploads/2022/06/Properties.png'})
  }

}

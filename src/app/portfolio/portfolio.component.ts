import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private metaService: Meta) { }

  ngOnInit(): void {
    this.metaService.updateTag({ property: "og:description", content: "Leadrat Portfolio"})
    this.metaService.updateTag({property: 'og:image', content: 'http://leadrat.com/wp-content/uploads/2022/07/Untitled-2-03.png'})
  }

}

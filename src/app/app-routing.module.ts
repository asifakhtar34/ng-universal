import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from 'src/app/portfolio/portfolio.component';
import { PropertyComponent } from 'src/app/property/property.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'property', component: PropertyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

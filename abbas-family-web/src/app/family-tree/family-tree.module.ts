import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyTreeRoutingModule} from './family-tree-routing.module'
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [DashboardComponent, ProfileComponent],
  imports: [
    FamilyTreeRoutingModule,
    CommonModule
  ]
})
export class FamilyTreeModule { }

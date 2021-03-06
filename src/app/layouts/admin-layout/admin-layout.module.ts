import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ChartsModule } from 'ng2-charts';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatCardModule,
  MatRadioModule
} from '@angular/material';

import { InterventionformComponent } from './interventionform/interventionform.component';
import { InterventionlistComponent } from './interventionlist/interventionlist.component';
import { MarqueModelformComponent } from './marque-modelform/marque-modelform.component';
import { MarqueModellistComponent } from './marque-modellist/marque-modellist.component';
import { EtatslistComponent } from './etatslist/etatslist.component';
import { GestionetatsComponent } from './gestionetats/gestionetats.component';
import { PiecelistComponent } from './piecelist/piecelist.component';
import { StockpieceComponent } from './stockpiece/stockpiece.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatCardModule,
    DragDropModule,
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    InterventionlistComponent,
    InterventionformComponent,
    MarqueModelformComponent,
    MarqueModellistComponent,
    EtatslistComponent,
    GestionetatsComponent,
    PiecelistComponent,
    StockpieceComponent,
    
  ]
  
})

export class AdminLayoutModule {}

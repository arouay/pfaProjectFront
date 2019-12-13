import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { InterventionlistComponent } from './interventionlist/interventionlist.component';
import { MarqueModellistComponent } from './marque-modellist/marque-modellist.component';
import { EtatslistComponent } from './etatslist/etatslist.component';
import { InterventionformComponent } from './interventionform/interventionform.component';
import { GestionetatsComponent } from './gestionetats/gestionetats.component';
import { PiecelistComponent } from './piecelist/piecelist.component';
import { StockpieceComponent } from './stockpiece/stockpiece.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'interventionlist',        component: InterventionlistComponent },
    { path: 'marque-modellist',        component: MarqueModellistComponent },
    { path: 'etatslist',        component: EtatslistComponent },
    { path: 'interventionform',        component: InterventionformComponent },
    { path: 'gestionetats',        component: GestionetatsComponent },
    { path: 'pieceslist',        component: PiecelistComponent },
    { path: 'stockpiece', component:StockpieceComponent}

];

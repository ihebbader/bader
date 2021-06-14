import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './UI-ELEMENTS/tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { HrDashboardComponent } from './HRMS/hr-dashboard/hr-dashboard.component';
import { HrEmployeeComponent } from './hrms/GestionGroupe/hr-employee.component';
import { HRMSComponent } from './hrms/hrms.component';
import { PrProjectlistComponent } from './project/ExecuteEntity/pr-projectlist.component';
import { PrTaskboardComponent } from './project/GestionWorkflowEntity/pr-taskboard.component';
import { ProjectComponent } from './project/project.component';
import { IconFontawesomeComponent } from './UI-ELEMENTS/icons/icon-fontawesome/icon-fontawesome.component';
import { IconFeatherComponent } from './UI-ELEMENTS/icons/icon-feather/icon-feather.component';
import { IconLinesComponent } from './UI-ELEMENTS/icons/icon-lines/icon-lines.component';
import { IconFlagsComponent } from './UI-ELEMENTS/icons/icon-flags/icon-flags.component';
import { IconPaymentsComponent } from './UI-ELEMENTS/icons/icon-payments/icon-payments.component';
import { GalleryComponent } from './ui-elements/gallery/gallery.component';
import {TestComponent} from './test/test.component';
import {StepperComponent} from './test/stepper/stepper.component';
import {RequestComponent} from './request/request.component';
import {SupeperVisorIHMComponent} from './supeper-visor-ihm/supeper-visor-ihm.component';
import {HrUsersComponent} from './hrms/GestionUtilisateur/hr-users.component';
import {ProfileDetailsComponent} from './hrms/GestionUtilisateur/profile-details/profile-details.component';



const routes: Routes = [
  {
    path: 'hr',
    component: HRMSComponent,
    data: { title: ':: Epic :: Home' }
  },
  {
    path: 'Dashboard-Admin',
    component: HrDashboardComponent,
    data: { title: 'Page daccueil' }
  },
  {
    path: 'test',
    component: StepperComponent,
    data: { title: 'Page daccueil' }
  },
  {
    path: 'SuperVisor',
    component: SupeperVisorIHMComponent,
    data: { title: 'Page daccueil' }
  },
  {
    path: 'user-management',
    component: HrUsersComponent,
    data: { title: 'gestion des utilisateur' }
  },

  {
    path: 'GestionGroupe',
    component: HrEmployeeComponent,
    data: { title: ':: Epic :: HR Employee' }
  },

  {
    path: 'project',
    component: ProjectComponent,
    data: { title: ':: Epic :: Project' }
  },

  {
    path: 'project-list',
    component: PrProjectlistComponent,
    data: { title: ':: Epic :: Project List' }
  },
  {
    path: 'entity',
    component: TestComponent,
    data: { title: 'Editer une entités workflow' }
  },
  {
    path: 'workflow',
    component: PrTaskboardComponent,
    data: { title: 'Flux de travail' }
  },

  {
    path: 'icon-fontawesome',
    component: IconFontawesomeComponent,
    data: { title: ':: Epic :: Icon Fontawesome' }
  },
  {
    path: 'icon-feather',
    component: IconFeatherComponent,
    data: { title: ':: Epic :: Icon Feather' }
  },
  {
    path: 'icon-lines',
    component: IconLinesComponent,
    data: { title: ':: Epic :: Icon Lines' }
  },
  {
    path: 'icon-flags',
    component: IconFlagsComponent,
    data: { title: ':: Epic :: Icon Flags' }
  },
  {
    path: 'icon-payments',
    component: IconPaymentsComponent,
    data: { title: ':: Epic :: Icon Payments' }
  },
  {
    path: 'table',
    component: TablesComponent,
    data: { title: ':: Epic :: Tables' }
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    data: { title: ':: Epic :: Gallery' }
  },
  {
    path: 'charts',
    component: ChartsComponent,
    data: { title: ':: Epic :: Charts' }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: ':: Epic :: Settings' }
  },
  {
    path: 'userDetails',
    component:ProfileDetailsComponent,
    data: { title: 'userdetails' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'Mon Profile' }
  },


  {
    path: 'Request',
    component: RequestComponent,
    data: { title: 'Request' }
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
  static components = [
  ];

}

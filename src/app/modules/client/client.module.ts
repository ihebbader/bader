import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSliderModule } from '@angular/material/slider';
import { TablesComponent } from './UI-ELEMENTS/tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ColumnChartComponent } from './charts/column-chart/column-chart.component';
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { RadialbarChartComponent } from './charts/radialbar-chart/radialbar-chart.component';
import { HeatmapChartComponent } from './charts/heatmap-chart/heatmap-chart.component';
import { CandlestickChartComponent } from './charts/candlestick-chart/candlestick-chart.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SparklinesComponent } from './charts/sparklines/sparklines.component';
import { SettingsComponent } from './settings/settings.component';
import { MinbarchartComponent } from './charts/minbarchart/minbarchart.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import { AgmCoreModule } from '@agm/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HRMSComponent } from './hrms/hrms.component';
import { HrDashboardComponent } from './HRMS/hr-dashboard/hr-dashboard.component';
import { HrEmployeeComponent } from './hrms/GestionGroupe/hr-employee.component';
import { ProjectComponent } from './project/project.component';
import { PrProjectlistComponent } from './project/ExecuteEntity/pr-projectlist.component';
import { PrTaskboardComponent } from './project/GestionWorkflowEntity/pr-taskboard.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { UIELEMENTSComponent } from './ui-elements/ui-elements.component';
import { IconsComponent } from './UI-ELEMENTS/icons/icons.component';
import { IconFontawesomeComponent } from './UI-ELEMENTS/icons/icon-fontawesome/icon-fontawesome.component';
import { IconFeatherComponent } from './UI-ELEMENTS/icons/icon-feather/icon-feather.component';
import { IconLinesComponent } from './UI-ELEMENTS/icons/icon-lines/icon-lines.component';
import { IconFlagsComponent } from './UI-ELEMENTS/icons/icon-flags/icon-flags.component';
import { IconPaymentsComponent } from './UI-ELEMENTS/icons/icon-payments/icon-payments.component';
import { GalleryComponent } from './ui-elements/gallery/gallery.component';
import { BasicradarChartComponent } from './charts/basicradar-chart/basicradar-chart.component';
import { ColumnLineChartComponent } from './charts/column-line-chart/column-line-chart.component';
import { ProfileComponent } from './profile/profile.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CountToModule } from 'angular-count-to';
import { FooterComponent } from './footer/footer.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TestComponent } from './test/test.component';
import {FormioModule} from '@formio/angular';
import { StepperComponent } from './test/stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RequestComponent } from './request/request.component';
import { SupeperVisorIHMComponent } from './supeper-visor-ihm/supeper-visor-ihm.component';
import {HrUsersComponent} from './hrms/GestionUtilisateur/hr-users.component';
import {ProfileDetailsComponent} from './hrms/GestionUtilisateur/profile-details/profile-details.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    CarouselModule.forRoot(),
    DragDropModule,
    MatSliderModule,
    NgApexchartsModule,
    NgMultiSelectDropDownModule.forRoot(),
    CountToModule,
    ToastrModule.forRoot({}),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AgmCoreModule.forRoot({
      apiKey: 'GOOGLE_API_KEY'
    }),
    FullCalendarModule,
    CKEditorModule,
    MatDialogModule,
    FormioModule,
    MatStepperModule,
    MatFormFieldModule,
  ],
  declarations: [
    ClientRoutingModule.components,
    HeaderComponent,
    LeftmenuComponent,
    TablesComponent,
    ChartsComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    ColumnChartComponent,
    AreaChartComponent,
    RadarChartComponent,
    RadialbarChartComponent,
    HeatmapChartComponent,
    CandlestickChartComponent,
    SparklinesComponent,
    SettingsComponent,
    MinbarchartComponent,

    HRMSComponent,
    HrUsersComponent,
    HrDashboardComponent,
    HrEmployeeComponent,
    ProjectComponent,
    PrProjectlistComponent,
    PrTaskboardComponent,
    UIELEMENTSComponent,
    IconsComponent,
    IconFontawesomeComponent,
    IconFeatherComponent,
    IconLinesComponent,
    IconFlagsComponent,
    IconPaymentsComponent,
    GalleryComponent,
    BasicradarChartComponent,
    ColumnLineChartComponent,
    ProfileComponent,
    FooterComponent,
    ProfileDetailsComponent,
    ChangePasswordComponent,
    TestComponent,
    StepperComponent,
    RequestComponent,
    SupeperVisorIHMComponent,
  ],
  providers: [BsDatepickerModule]
})
export class ClientModule { }

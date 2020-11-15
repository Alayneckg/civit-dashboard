import { ProgressComponent } from './../_components/progress/progress.component'
import { DragndropComponent } from './../_components/dragndrop/dragndrop.component'
import { MaterialModule } from './../material.module'
import { DashboardRoutes } from './dashboard.routing'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavComponent } from './nav/nav.component'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { CreateReportComponent } from './create-report/create-report.component'
import { ReportFeedComponent } from './report-feed/report-feed.component'
import { FaqComponent } from './faq/faq.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    CreateReportComponent,
    ReportFeedComponent,
    FaqComponent,
    DragndropComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
})
export class DashboardModule {}

import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';

//modulos
import { SahredModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';





@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports:[

        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports:[
        PAGES_ROUTES,
        SahredModule
    ]
})
export class PagesModule { } 
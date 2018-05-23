import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';

//modulos
import { SahredModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

//ng2-charts
import { ChartsModule } from 'ng2-charts';

//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GafricoDonaComponent } from '../components/gafricoDona/gafrico-dona.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GafricoDonaComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports:[
        PAGES_ROUTES,
        SahredModule,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule { } 
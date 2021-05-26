import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ReportsModule } from './pages/reports/reports.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    ReportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

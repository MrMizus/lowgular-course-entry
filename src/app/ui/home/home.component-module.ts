import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        RouterModule
    ],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeComponentModule {
}

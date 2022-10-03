import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        RouterModule
    ],
  declarations: [NavbarComponent],
  providers: [],
  exports: [NavbarComponent]
})
export class NavbarComponentModule {
}

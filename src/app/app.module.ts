import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeesServiceModule} from "./services/employees.service-module";
import {EmployeeListComponentModule} from "./ui/employee-list/employee-list.component-module";
import {EmployeeFormComponentModule} from "./ui/employee-form/employee-form.component-module";
import {NavbarComponentModule} from "./ui/navbar/navbar.component-module";
import {FooterComponentModule} from "./ui/footer/footer.component-module";

@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        EmployeesServiceModule,
        EmployeeListComponentModule,
        EmployeeFormComponentModule,
        NavbarComponentModule,
        FooterComponentModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

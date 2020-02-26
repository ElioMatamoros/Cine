import { NgModule } from '@angular/core';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LoginServiceService} from '../servicios/login-service.service';


@NgModule({
  declarations: [ShellComponent, HeaderComponent, FooterComponent],
  imports: [
    RouterModule, CommonModule
  ],
  providers: [LoginServiceService],
  exports: [ShellComponent, HeaderComponent, FooterComponent]
})
export class CoreModule { }

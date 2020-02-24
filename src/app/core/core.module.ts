import { NgModule } from '@angular/core';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [ShellComponent, HeaderComponent, FooterComponent],
  imports: [
    RouterModule, CommonModule
  ],
  exports: [ShellComponent, HeaderComponent, FooterComponent]
})
export class CoreModule { }

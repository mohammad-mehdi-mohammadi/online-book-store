import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {NzBadgeModule} from "ng-zorro-antd/badge";



@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        NzIconModule,
        NzDropDownModule,
        NzPopoverModule,
        NzBadgeModule
    ]
})
export class HeaderModule { }

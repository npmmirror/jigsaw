/**
 * Created by 10177553 on 2017/3/29.
 */

import {NgModule} from '@angular/core';

import {RdkTab} from './tab';
import {RdkPane} from "./tab-pane";
import {CommonModule} from "@angular/common";
import {RdkTabContent, RdkTabLabel} from "./tab-item";

@NgModule({
    imports: [CommonModule],
    exports: [RdkTab, RdkPane],
    declarations: [RdkTab, RdkPane, RdkTabLabel, RdkTabContent],
    providers: [],
})
export class RdkTabsModule { }

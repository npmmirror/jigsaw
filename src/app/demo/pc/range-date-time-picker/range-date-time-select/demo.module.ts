import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {JigsawButtonBarModule, JigsawRadioModule, JigsawRangeDateTimeSelectModule, JigsawSelectModule} from "jigsaw/public_api";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {RangeDateTimeSelectComponent} from "./demo.component";

import {JigsawHeaderModule} from "jigsaw/public_api";

@NgModule({
    declarations: [RangeDateTimeSelectComponent],
    exports: [RangeDateTimeSelectComponent],
    imports: [CommonModule, JigsawDemoDescriptionModule, JigsawButtonBarModule, JigsawRangeDateTimeSelectModule, JigsawRadioModule, JigsawSelectModule, JigsawHeaderModule]
})
export class RangeDateTimeSelectModule {

}

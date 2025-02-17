import { NgModule } from "@angular/core";
import { JigsawButtonModule, JigsawNotificationModule, PopupService, JigsawHeaderModule, JigsawInputModule, JigsawSliderModule } from "jigsaw/public_api";
import { JigsawDemoDescriptionModule } from "app/demo-description/demo-description";
import { ToastFullDemoComponent } from "./demo.component";

@NgModule({
    declarations: [ToastFullDemoComponent],
    imports: [
        JigsawNotificationModule, JigsawDemoDescriptionModule, JigsawButtonModule, JigsawHeaderModule, JigsawInputModule, JigsawSliderModule
    ],
    providers: [PopupService],
    exports: [ToastFullDemoComponent]
})
export class ToastFullDemoModule {
}

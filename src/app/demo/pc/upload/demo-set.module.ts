import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {UploadBasicDemoComponent} from "./basic/demo.component";
import {UploadBasicDemoModule} from "./basic/demo.module";
import { UploadResultDemoComponent } from './upload-result/demo.component';
import { UploadResultDemoModule } from './upload-result/demo.module';
import { UploadContentFieldDemoComponent } from './content-field/demo.component';
import { UploadContentFieldDemoModule } from './content-field/demo.module';
import { UploadAutoUploadDemoModule } from './toggle-auto-upload/demo.module';
import { UploadAutoUploadDemoComponent } from './toggle-auto-upload/demo.component';


export const routerConfig = [
    {
        path: 'basic', component: UploadBasicDemoComponent
    },
    {
        path: 'content-field', component: UploadContentFieldDemoComponent
    },
    {
        path: 'upload-result', component: UploadResultDemoComponent
    },
    {
        path: 'toggle-auto-upload', component: UploadAutoUploadDemoComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routerConfig),
        UploadBasicDemoModule, UploadResultDemoModule, UploadContentFieldDemoModule, UploadAutoUploadDemoModule
    ]
})
export class UploadDemoModule {
}

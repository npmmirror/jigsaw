import {AfterViewInit, Component, TemplateRef, ViewChild} from "@angular/core";
import {TableData} from "jigsaw/core/data/table-data";
import {ColumnDefine, TableCellRenderer} from "jigsaw/component/table/table-api";
import {Http} from "@angular/http";
/*
 * 自定义表头渲染组件
 * */


@Component({
    templateUrl: 'setCellRender.html'
})
export class TableSetCellRenderDemoComponent implements AfterViewInit {

    @ViewChild("jobCellRender") jobCellRender: TemplateRef<any>;

    tableData: TableData;

    constructor(http: Http) {
        this.tableData = new TableData();
        this.tableData.http = http;
        this.tableData.fromAjax('mock-data/table/data.json');
    }

     _columns: ColumnDefine[];

    ngAfterViewInit() {
        this._columns = [
            {
                target: 'position',
                cell: {
                    renderer: this.jobCellRender //通过ViewChild获取的TemplateRef,必须在AfterViewInit中才能拿到
                }
            }
        ];
    }
}




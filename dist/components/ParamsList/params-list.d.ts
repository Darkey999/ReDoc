import { OnInit } from '@angular/core';
import { BaseComponent, SpecManager } from '../base';
export declare class ParamsList extends BaseComponent implements OnInit {
    pointer: string;
    params: Array<any>;
    empty: boolean;
    bodyParam: any;
    constructor(specMgr: SpecManager);
    init(): void;
    orderParams(params: any): any;
    ngOnInit(): void;
}

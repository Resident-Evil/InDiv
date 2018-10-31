export declare type TInjectTokenProvider = {
    [props: string]: any | Function;
    provide: any;
    useClass?: Function;
    useValue?: any;
};
export declare type TUseClassProvider = {
    provide: any;
    useClass: Function;
};
export declare type TuseValueProvider = {
    provide: any;
    useValue: any;
};
export interface INvModule {
    $imports?: Function[];
    $components?: Function[];
    $providers?: (Function | TUseClassProvider | TuseValueProvider)[];
    $exports?: Function[];
    $exportsList?: Function[];
    $providerList?: Map<Function | string, Function | any>;
    $providerInstances?: Map<Function | string, any>;
    $bootstrap?: Function;
}

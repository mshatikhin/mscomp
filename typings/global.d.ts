declare module "add-event-listener" {
    var addEventListener: any;
    export default addEventListener;
}

interface IReactAutocompleteProps<T> extends React.Props<any> {
    ref: string;
    items: T;
    getItemValue: (value: any, item: any) => void;
    onSelect: (value: any, item: any) => void;
    onChange: (event: any, item: any) => void;
    renderItem: (item: any, isHighlighted: boolean) => any;
    renderMenu?: (items: any[], value: any, style: Object) => any;
    initialValue?: string;
    shouldItemRender?: Function;
    menuStyle?: Object;
    inputProps?: Object;
}

interface IReactAutocompleteClass<T> extends React.ComponentClass<IReactAutocompleteProps<T>> {
}

declare module "react-autocomplete" {
    var Autocomplete: IReactAutocompleteClass<any>;
    export default Autocomplete;
}

interface IReactTabProps extends React.Props<any> {
}

interface IReactTabsProps extends React.Props<any> {
    onSelect: Function;
    selectedIndex: number;
    forceRenderTabPanel?: boolean;
}

interface IReactTabClass extends React.ComponentClass<IReactTabProps> {
}

interface IReactTabsClass extends React.ComponentClass<IReactTabsProps> {
}

interface IReactBaseTabsClass extends React.ComponentClass<IReactTabProps> {
    Tab: IReactTabClass;
    Tabs: IReactTabsClass;
    TabList: IReactTabListClass;
    TabPanel: IReactTabPanelClass;
}

interface IReactTabListClass extends React.ComponentClass<IReactTabProps> {
}
interface IReactTabPanelClass extends React.ComponentClass<IReactTabProps> {
}

declare module "react-tabs" {
    var Tab: IReactTabClass;
    var Tabs: IReactTabsClass;
    var TabList: IReactTabListClass;
    var TabPanel: IReactTabPanelClass;
    var ReactTabs: IReactBaseTabsClass;

    export {
    Tab,
    Tabs,
    TabList,
    TabPanel
    }
    export default ReactTabs;
}

declare module "react-custom-scrollbars" {
    var Scrollbars: any;
}

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

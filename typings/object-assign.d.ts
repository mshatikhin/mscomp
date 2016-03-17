declare module "object-assign" {
    function assign<T, TU>(target: TU, source: T, ...args: TU[]): T;

    export default assign;
}
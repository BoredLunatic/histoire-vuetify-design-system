import { VariantClass } from '../contracts/variants';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    variants: VariantClass[];
    text: string;
    classes: string;
    inline: boolean;
    state: object;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    variants: VariantClass[];
    text: string;
    classes: string;
    inline: boolean;
    state: object;
}>>>, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
//# sourceMappingURL=ClassVariantLoader.vue.d.ts.map
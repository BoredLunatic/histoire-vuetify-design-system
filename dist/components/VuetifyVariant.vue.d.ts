import { VariantControl, VariantClass, VariantColors, VariantDisplay, VariantComponent, VariantDescription as VariantDescriptionType, TemplateTitle } from '../contracts/variants';
import type { VariantDiscriminator } from '../contracts/variants';
import { PlaygroundOptions } from '../contracts/vuetifyDesignSystemOptions';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    discriminator: VariantDiscriminator;
    title: TemplateTitle;
    classes: string;
    text: string;
    inline: boolean;
    state: object;
    playground: PlaygroundOptions;
    description?: VariantDescriptionType;
    controls?: VariantControl[];
    variants?: VariantClass[] | VariantColors[] | VariantDisplay[] | VariantComponent[] | undefined;
    containerized?: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    discriminator: VariantDiscriminator;
    title: TemplateTitle;
    classes: string;
    text: string;
    inline: boolean;
    state: object;
    playground: PlaygroundOptions;
    description?: VariantDescriptionType;
    controls?: VariantControl[];
    variants?: VariantClass[] | VariantColors[] | VariantDisplay[] | VariantComponent[] | undefined;
    containerized?: boolean;
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
//# sourceMappingURL=VuetifyVariant.vue.d.ts.map
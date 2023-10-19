import { VariantControl, VariantClass, VariantColors, VariantDisplay, VariantComponent, VariantDescription as VariantDescriptionType, TemplateTitle } from '../contracts/variants';
import type { VariantDiscriminator } from '../contracts/variants';
import { PlaygroundOptions } from '../contracts/vuetifyDesignSystemOptions';
declare const _default: import("vue").DefineComponent<{
    discriminator: {
        type: import("vue").PropType<VariantDiscriminator>;
        required: true;
    };
    title: {
        type: import("vue").PropType<TemplateTitle>;
        required: true;
    };
    classes: {
        type: import("vue").PropType<string>;
        required: true;
    };
    text: {
        type: import("vue").PropType<string>;
        required: true;
    };
    inline: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    state: {
        type: import("vue").PropType<object>;
        required: true;
    };
    playground: {
        type: import("vue").PropType<PlaygroundOptions>;
        required: true;
    };
    description: {
        type: import("vue").PropType<VariantDescriptionType>;
    };
    controls: {
        type: import("vue").PropType<VariantControl[]>;
    };
    variants: {
        type: import("vue").PropType<VariantComponent[] | VariantClass[] | VariantColors[] | VariantDisplay[]>;
    };
    containerized: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    discriminator: {
        type: import("vue").PropType<VariantDiscriminator>;
        required: true;
    };
    title: {
        type: import("vue").PropType<TemplateTitle>;
        required: true;
    };
    classes: {
        type: import("vue").PropType<string>;
        required: true;
    };
    text: {
        type: import("vue").PropType<string>;
        required: true;
    };
    inline: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    state: {
        type: import("vue").PropType<object>;
        required: true;
    };
    playground: {
        type: import("vue").PropType<PlaygroundOptions>;
        required: true;
    };
    description: {
        type: import("vue").PropType<VariantDescriptionType>;
    };
    controls: {
        type: import("vue").PropType<VariantControl[]>;
    };
    variants: {
        type: import("vue").PropType<VariantComponent[] | VariantClass[] | VariantColors[] | VariantDisplay[]>;
    };
    containerized: {
        type: import("vue").PropType<boolean>;
    };
}>>, {}, {}>;
export default _default;
//# sourceMappingURL=VuetifyVariant.vue.d.ts.map
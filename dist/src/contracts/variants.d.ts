export type VariantDiscriminator = 'class' | 'display' | 'color' | 'component';
export interface VariantLink {
    url: string;
    text: string;
    classes?: string;
    blank?: boolean;
}
export interface DisplayVariants {
    title: string;
    value: string;
}
export interface VariantComponent {
    title: string;
    component: string;
    classes?: string;
    states?: string[];
    builder?: BuilderFunction;
    content?: string;
    children?: VariantComponent[];
}
export interface VariantClass {
    title: string;
    classes: string;
    duplicate?: number;
    content?: string;
}
export interface BuilderFunction {
    args: string[];
    body: string;
}
export interface VariantDisplay {
    title: string;
    name?: string;
    link?: VariantLink;
    variants?: DisplayVariants[];
}
export interface VariantColors {
    name: string;
    darken: number | boolean;
    lighten: number | boolean;
    accent: number | boolean;
}
export interface VariantDivider {
    classes?: string;
    show?: boolean;
}
export interface VariantDescription {
    text?: string;
    link?: VariantLink;
    classes?: string;
    divider?: VariantDivider;
}
export interface VariantControlPlayground {
    type: string;
    sample?: string;
    classes?: string;
}
export interface VariantControl {
    component: string;
    model: string;
    label: string;
    items?: string;
    itemsTitle?: string;
    itemsValue?: string;
    playground?: VariantControlPlayground;
}
export interface TemplateTitle {
    classes: string;
    text: string;
}
interface BaseTemplate {
    discriminator: VariantDiscriminator;
    show: boolean;
    order: number;
    state: string[] | object;
    title: TemplateTitle;
    icon: string;
    text?: string;
    classes?: string;
    imports?: string[];
    variables?: string[];
    controls?: VariantControl[];
    description?: VariantDescription;
    inline?: boolean;
    autoPropsDisabled?: boolean;
    variants?: VariantClass[] | VariantColors[] | VariantDisplay[] | VariantComponent[];
}
export interface ComponentTemplate extends BaseTemplate {
    containerized?: boolean;
    variants?: VariantComponent[];
}
export interface ClassTemplate extends BaseTemplate {
    variants?: VariantClass[];
}
export interface ColorTemplate extends BaseTemplate {
    variants?: VariantColors[];
}
export interface DisplayTemplate extends BaseTemplate {
    variants?: VariantDisplay[];
    variable: string;
    link?: VariantLink;
}
export {};
//# sourceMappingURL=variants.d.ts.map
import { StoryLayout } from 'histoire';
import { VuetifyTemplates } from './templates';
import { VariantDivider } from './variants';
interface DisplayOptions {
    group?: string;
    icon?: string;
    layout?: StoryLayout;
    responsiveDisabled?: boolean;
    title?: string;
}
export interface PlaygroundOptions {
    classes?: string;
    divider?: VariantDivider;
    title?: string;
}
export interface VuetifyDesignSystemOptions {
    configFile?: string;
    display?: DisplayOptions;
    playground?: PlaygroundOptions;
    sample?: string;
    templates?: VuetifyTemplates;
}
declare const defaultOptions: VuetifyDesignSystemOptions;
export { defaultOptions };
//# sourceMappingURL=vuetifyDesignSystemOptions.d.ts.map
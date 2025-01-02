import * as _stylix_core from '@stylix/core';
import { Property } from 'csstype';

declare module '@stylix/core' {
    interface StylixPropsExtensions {
        /**
         * Shorthand for display="inline"
         */
        inline: boolean;
        /**
         * Shorthand for display="block"
         */
        block: boolean;
        /**
         * Shorthand for display="inline-block"
         */
        inlineBlock: boolean;
        /**
         * Shorthand for position="absolute"
         */
        absolute: boolean;
        /**
         * Shorthand for position="absolute" transform="translate(-50%, -50%)"
         */
        'abs-center': boolean;
        /**
         * Shorthand for
         * position: absolute;
         * left: 0;
         * top: 0;
         * width: 100%;
         * height: 100%;
         */
        'abs-fill': boolean;
        /**
         * Shorthand for position="relative"
         */
        relative: boolean;
        /**
         * Shorthand for display="flex"
         */
        flexbox: boolean;
        /**
         * Shorthand for display="inline-flex"
         */
        inlineFlex: boolean;
        /**
         * Shorthand for flex="..." on all children (i.e. { "& > *": { flex: "..." } })
         */
        'flex-children': Property.Flex<string | number>;
        /**
         * Shorthand for display="flex" flex-direction="column"
         */
        'flex-column': boolean;
        /**
         * Shorthand for display="flex" align-items="center" justify-content="center"
         */
        'flex-center': boolean;
        /**
         * Shorthand for background
         */
        bg: Property.Background;
        /**
         * Shorthand for background-color
         */
        'bg-color': Property.BackgroundColor;
        /**
         * Shorthand for margin
         */
        m: Property.Margin<string | number>;
        /**
         * Shorthand for margin-top
         */
        mt: Property.MarginTop<string | number>;
        /**
         * Shorthand for margin-right
         */
        mr: Property.MarginRight<string | number>;
        /**
         * Shorthand for margin-bottom
         */
        mb: Property.MarginBottom<string | number>;
        /**
         * Shorthand for margin-left
         */
        ml: Property.MarginLeft<string | number>;
        /**
         * Shorthand for margin-left and margin-right
         */
        mh: Property.MarginTop<string | number>;
        /**
         * Shorthand for margin-top and margin-bottom
         */
        mv: Property.MarginRight<string | number>;
        /**
         * Shorthand for padding
         */
        p: Property.Padding<string | number>;
        /**
         * Shorthand for padding-top
         */
        pt: Property.PaddingTop<string | number>;
        /**
         * Shorthand for padding-right
         */
        pr: Property.PaddingRight<string | number>;
        /**
         * Shorthand for padding-bottom
         */
        pb: Property.PaddingBottom<string | number>;
        /**
         * Shorthand for padding-left
         */
        pl: Property.PaddingLeft<string | number>;
        /**
         * Shorthand for padding-left and padding-right
         */
        ph: Property.PaddingTop<string | number>;
        /**
         * Shorthand for padding-top and padding-bottom
         */
        pv: Property.PaddingRight<string | number>;
        /**
         * Shorthand for font-weight="bold"
         */
        bold: boolean;
        /**
         * Shorthand for font-stylix="italic"
         */
        italic: boolean;
        /**
         * Shorthand for text-align="center"
         */
        'text-center': boolean;
        /**
         * Shorthand for text-align="right"
         */
        'text-right': boolean;
        /**
         * Shorthand for text-align="left"
         */
        'text-left': boolean;
        /**
         * Shorthand for flex-wrap="nowrap" white-space="nowrap"
         */
        nowrap: boolean;
        /**
         * Shorthand for text-overflow="ellipsis" overflow="hidden" white-space="nowrap"
         */
        ellipsis: boolean;
    }
}
declare const tinyProps: _stylix_core.StylixPlugin[];

export { tinyProps as default };

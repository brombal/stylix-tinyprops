import { customProps } from '@stylix/core';
import type { Property } from 'csstype';

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
    'inline-block': boolean;
    inlineBlock: boolean;
    /**
     * Shorthand for position="absolute"
     */
    absolute: boolean;
    /**
     * Shorthand for position="absolute" transform="translate(-50%, -50%)"
     */
    'abs-center': boolean;
    absCenter: boolean;
    /**
     * Shorthand for
     * position: absolute;
     * left: 0;
     * top: 0;
     * width: 100%;
     * height: 100%;
     */
    'abs-fill': boolean;
    absFill: boolean;
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
    'inline-flex': boolean;
    inlineFlex: boolean;
    /**
     * Shorthand for flex="..." on all children (i.e. { "& > *": { flex: "..." } })
     */
    'flex-children': Property.Flex<string | number>;
    flexChildren: Property.Flex<string | number>;
    /**
     * Shorthand for display="flex" flex-direction="column"
     */
    'flex-column': boolean;
    flexColumn: boolean;
    /**
     * Shorthand for display="flex" align-items="center" justify-content="center"
     */
    'flex-center': boolean;
    flexCenter: boolean;

    /**
     * Shorthand for background
     */
    bg: Property.Background;
    /**
     * Shorthand for background-color
     */
    'bg-color': Property.BackgroundColor;
    bgColor: Property.BackgroundColor;

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
    textCenter: boolean;
    /**
     * Shorthand for text-align="right"
     */
    textRight: boolean;
    /**
     * Shorthand for text-align="left"
     */
    'text-left': boolean;
    textLeft: boolean;

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

const tinyProps = customProps({
  inline: { display: 'inline' },
  block: { display: 'block' },
  'inline-block': { display: 'inline-block' },
  absolute: { position: 'absolute' },
  'abs-center': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  'abs-fill': { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },

  relative: { position: 'relative' },

  flexbox: { display: 'flex' },
  inlineFlex: { display: 'inline-flex' },
  'flex-children': (val: any) => ({ '& > *': { flex: val } }),
  'flex-column': { display: 'flex', 'flex-direction': 'column' },
  'flex-center': { display: 'flex', alignItems: 'center', justifyContent: 'center' },

  bg: (val: any) => ({ background: val }),
  'bg-color': (val: any) => ({ backgroundColor: val }),

  m: 'margin',
  mt: 'margin-top',
  mr: 'margin-right',
  mb: 'margin-bottom',
  ml: 'margin-left',
  mh: (val: any) => ({ marginLeft: val, marginRight: val }),
  mv: (val: any) => ({ marginTop: val, marginBottom: val }),

  p: 'padding',
  pt: 'padding-top',
  pr: 'padding-right',
  pb: 'padding-bottom',
  pl: 'padding-left',
  ph: (val: any) => ({ paddingLeft: val, paddingRight: val }),
  pv: (val: any) => ({ paddingTop: val, paddingBottom: val }),

  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },

  'text-center': { textAlign: 'center' },
  'text-right': { textAlign: 'right' },
  'text-left': { textAlign: 'left' },

  nowrap: { flexWrap: 'nowrap', whiteSpace: 'nowrap' },
  ellipsis: { textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' },
});

export default tinyProps;

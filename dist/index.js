import { customProps } from '@stylix/core';

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
    'flex-children': (val) => ({ '& > *': { flex: val } }),
    'flex-column': { display: 'flex', 'flex-direction': 'column' },
    'flex-center': { display: 'flex', alignItems: 'center', justifyContent: 'center' },
    bg: (val) => ({ background: val }),
    'bg-color': (val) => ({ backgroundColor: val }),
    m: 'margin',
    mt: 'margin-top',
    mr: 'margin-right',
    mb: 'margin-bottom',
    ml: 'margin-left',
    mh: (val) => ({ marginLeft: val, marginRight: val }),
    mv: (val) => ({ marginTop: val, marginBottom: val }),
    p: 'padding',
    pt: 'padding-top',
    pr: 'padding-right',
    pb: 'padding-bottom',
    pl: 'padding-left',
    ph: (val) => ({ paddingLeft: val, paddingRight: val }),
    pv: (val) => ({ paddingTop: val, paddingBottom: val }),
    bold: { fontWeight: 'bold' },
    italic: { fontStyle: 'italic' },
    'text-center': { textAlign: 'center' },
    'text-right': { textAlign: 'right' },
    'text-left': { textAlign: 'left' },
    nowrap: { flexWrap: 'nowrap', whiteSpace: 'nowrap' },
    ellipsis: { textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' },
});
// export = tinyProps;

export { tinyProps as default };
//# sourceMappingURL=index.js.map

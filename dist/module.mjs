import {customProps as $hgUW1$customProps} from "@stylix/core";


const $149c1bd638913645$var$tinyProps = (0, $hgUW1$customProps)({
    inline: {
        display: "inline"
    },
    block: {
        display: "block"
    },
    "inline-block": {
        display: "inline-block"
    },
    absolute: {
        position: "absolute"
    },
    "abs-center": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    "abs-fill": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    },
    relative: {
        position: "relative"
    },
    flexbox: {
        display: "flex"
    },
    inlineFlex: {
        display: "inline-flex"
    },
    "flex-children": (val)=>({
            "&> *": {
                flex: val
            }
        }),
    "flex-column": {
        display: "flex",
        "flex-direction": "column"
    },
    "flex-center": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    bg: (val)=>({
            background: val
        }),
    "bg-color": (val)=>({
            backgroundColor: val
        }),
    m: "margin",
    mt: "margin-top",
    mr: "margin-right",
    mb: "margin-bottom",
    ml: "margin-left",
    mh: (val)=>({
            marginLeft: val,
            marginRight: val
        }),
    mv: (val)=>({
            marginTop: val,
            marginBottom: val
        }),
    p: "padding",
    pt: "padding-top",
    pr: "padding-right",
    pb: "padding-bottom",
    pl: "padding-left",
    ph: (val)=>({
            paddingLeft: val,
            paddingRight: val
        }),
    pv: (val)=>({
            paddingTop: val,
            paddingBottom: val
        }),
    bold: {
        fontWeight: "bold"
    },
    italic: {
        fontStyle: "italic"
    },
    "text-center": {
        textAlign: "center"
    },
    "text-right": {
        textAlign: "right"
    },
    "text-left": {
        textAlign: "left"
    },
    nowrap: {
        flexWrap: "nowrap",
        whiteSpace: "nowrap"
    },
    ellipsis: {
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap"
    }
});
var $149c1bd638913645$export$2e2bcd8739ae039 = $149c1bd638913645$var$tinyProps;


export {$149c1bd638913645$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.mjs.map

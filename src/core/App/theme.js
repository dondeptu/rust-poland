export const palette = {
    woodsmoke: "#161718",
    shark: "#202125",
    abbeyDarker: "#414243",
    abbey: "#5B5C5D",
    manatee: "#8F9095",
    alto: "#D9D9D9",
    zircon: "#FCFDFF",
    japaneseMaple: "#760202",
    redBerry: "#8b0202",
    brightRed: "#A60303",
};

export const theme = {
    breakpoints: {
        mobile: 776
    },
    fonts: {
        headers: "'Space Mono', monospace",
        text: "'Roboto', sans-serif",
        logo: "'Pixelify Sans', sans-serif",
    },
    page: {
        background: palette.shark,
        text: palette.zircon,
    },
    headerParagraph: palette.manatee,
    buttons: {
        button: palette.brightRed,
        hover: palette.redBerry,
        active: palette.japaneseMaple,
    },
    navigation: {
        active: palette.brightRed,
    },
};
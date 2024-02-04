import Color from 'colorjs.io';
export declare class ColorSwatch {
    name?: string;
    h: number;
    c: number;
    l: number;
    model: Color;
    constructor(h: number, c: number, l: number, name?: string);
    setHCL(h: number, c: number, l: number): void;
    checkGamut(color_constant: Color): boolean;
    getName(): string | undefined;
    getRGB(): [number, number, number];
    a98rgb(): import("colorjs.io/types/src/color.js").Coords;
    a98rgb_linear(): import("colorjs.io/types/src/color.js").Coords;
    acescg(): import("colorjs.io/types/src/color.js").Coords;
    hsl(): import("colorjs.io/types/src/color.js").Coords;
    hsv(): import("colorjs.io/types/src/color.js").Coords;
    hwb(): import("colorjs.io/types/src/color.js").Coords;
    ictcp(): import("colorjs.io/types/src/color.js").Coords;
    jzczhz(): import("colorjs.io/types/src/color.js").Coords;
    jzazbz(): import("colorjs.io/types/src/color.js").Coords;
    lab(): import("colorjs.io/types/src/color.js").Coords;
    lab_d65(): import("colorjs.io/types/src/color.js").Coords;
    lch(): import("colorjs.io/types/src/color.js").Coords;
    oklch(): import("colorjs.io/types/src/color.js").Coords;
    oklab(): import("colorjs.io/types/src/color.js").Coords;
    p3(): import("colorjs.io/types/src/color.js").Coords;
    p3_linear(): import("colorjs.io/types/src/color.js").Coords;
    prophoto(): import("colorjs.io/types/src/color.js").Coords;
    prophoto_linear(): import("colorjs.io/types/src/color.js").Coords;
    rec2020(): import("colorjs.io/types/src/color.js").Coords;
    rec2020_linear(): import("colorjs.io/types/src/color.js").Coords;
    rec2100hlg(): import("colorjs.io/types/src/color.js").Coords;
    rec2100pq(): import("colorjs.io/types/src/color.js").Coords;
    xyz_abs_d65(): import("colorjs.io/types/src/color.js").Coords;
    xyz_d50(): import("colorjs.io/types/src/color.js").Coords;
    xyz_d65(): import("colorjs.io/types/src/color.js").Coords;
    xyz(): import("colorjs.io/types/src/color.js").Coords;
    srgb(): Color;
    srgb_linear(): import("colorjs.io/types/src/color.js").Coords;
    hex(): string;
    hcl(): {
        h: number;
        c: number;
        l: number;
    };
    rgb(): {
        r: number;
        g: number;
        b: number;
    };
    toString(): string;
    toDict(): Record<string, any>;
}

import { CSS } from "@stitches/react";

export function circleStyle(size: number, color?: string): CSS {
    return {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        width: size + "px",
        height: size + "px",
        background: (color ?? "$primary"),
        color: "#fff"
    };
}
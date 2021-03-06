import { createStitches, PropertyValue } from "@stitches/react";

export const { css, styled, globalCss, keyframes, getCssText, createTheme } =
  createStitches({
    theme: {
      colors: {
        active: "$success",
        foreground: "#000",
        background: "#fff",
        selection: "$cyan-light",
        success: "#0070f3",
        "success-dark": "#0761d1",
        "success-light": "#3291ff",
        "success-lighter": "#d3e5ff",
        error: "#e00",
        "error-dark": "#c50000",
        "error-light": "#ff1a1a",
        "error-lighter": "#f7d4d6",
        warning: "#f5a623",
        "warning-dark": "#ab570a",
        "warning-lighter": "#ffefcf",
        "warning-light": "#f7b955",
        violet: "#7928ca",
        "violet-dark": "#4c2889",
        "violet-light": "#8a63d2",
        "violet-lighter": "#e3d7fc",
        cyan: "#50e3c2",
        "cyan-dark": "#29bc9b",
        "cyan-light": "#79ffe1",
        "cyan-lighter": "#aaffec",
        "highlight-purple": "#f81ce5",
        "highlight-magenta": "#eb367f",
        "highlight-pink": "#ff0080",
        "highlight-yellow": "#fff500",
        "accents-1": "#fafafa",
        "accents-2": "#eaeaea",
        "accents-3": "#999",
        "accents-4": "#888",
        "accents-5": "#666",
        "accents-6": "#444",
        "accents-7": "#333",
        "accents-8": "#111",
      },
      fonts: {
        sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      },
      fontSizes: {
        1: "12px",
        2: "16px",
        3: "20px",
        4: "24px",
        5: "32px",
      },
      radii: {
        1: "4px",
        2: "5px",
      },
      space: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "24px",
        6: "32px",
        7: "40px",
      },
    },
    utils: {
      p: (value: PropertyValue<"paddingTop">) => ({
        paddingTop: value,
        paddingBottom: value,
        paddingLeft: value,
        paddingRight: value,
      }),
      pt: (value: PropertyValue<"paddingTop">) => ({
        paddingTop: value,
      }),
      pr: (value: PropertyValue<"paddingTop">) => ({
        paddingRight: value,
      }),
      pb: (value: PropertyValue<"paddingTop">) => ({
        paddingBottom: value,
      }),
      pl: (value: PropertyValue<"paddingTop">) => ({
        paddingLeft: value,
      }),
      px: (value: PropertyValue<"paddingTop">) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: PropertyValue<"paddingTop">) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      m: (value: PropertyValue<"marginTop">) => ({
        marginTop: value,
        marginBottom: value,
        marginLeft: value,
        marginRight: value,
      }),
      mt: (value: PropertyValue<"marginTop">) => ({
        marginTop: value,
      }),
      mr: (value: PropertyValue<"marginTop">) => ({
        marginRight: value,
      }),
      mb: (value: PropertyValue<"marginTop">) => ({
        marginBottom: value,
      }),
      ml: (value: PropertyValue<"marginTop">) => ({
        marginLeft: value,
      }),
      mx: (value: PropertyValue<"marginTop">) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: PropertyValue<"marginTop">) => ({
        marginTop: value,
        marginBottom: value,
      }),
      size: (value: PropertyValue<"width">) => ({
        width: value,
        height: value,
      }),
      bc: (value: PropertyValue<"backgroundColor">) => ({
        backgroundColor: value,
      }),
    },
  });

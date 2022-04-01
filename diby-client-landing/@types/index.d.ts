import React from "react"
import '@mui/material/styles';
import '../lib/stripe-gradient.js';
import '../lib/supah-scroll.js';

declare function setGradient(canvasId: HTMLCanvasElement): void;

declare class SupahScroll {};

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette["primary"];
    blue: Palette["primary"];
    green: Palette["primary"];
    cyan: Palette["primary"];
  }
  interface PaletteOptions {
    white: PaletteOptions["primary"];
    blue: PaletteOptions["primary"];
    green: PaletteOptions["primary"];
    cyan: PaletteOptions["primary"];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
    blue: true;
    green: true;
    cyan: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    white: true;
    blue: true;
    green: true;
    cyan: true;
  }
}
// File for all of the colors for different GB Palletes

// Our default colors
class DefaultColor {
  // Obj 0
  static readonly obj0White: i32 = 0xf2f2f2;
  static readonly obj0LightGrey: i32 = 0xa0a0a0;
  static readonly obj0DarkGrey: i32 = 0x585858;
  static readonly obj0Black: i32 = 0x080808;

  // Obj1
  static readonly obj1White: i32 = 0xf2f2f2;
  static readonly obj1LightGrey: i32 = 0xa0a0a0;
  static readonly obj1DarkGrey: i32 = 0x585858;
  static readonly obj1Black: i32 = 0x080808;

  //Bg
  static readonly bgWhite: i32 = 0xf2f2f2;
  static readonly bgLightGrey: i32 = 0xa0a0a0;
  static readonly bgDarkGrey: i32 = 0x585858;
  static readonly bglack: i32 = 0x080808;
}

// Current / exported color
export class Color {
  // Obj 0
  static readonly obj0White: i32 = DefaultColor.obj0White;
  static readonly obj0LightGrey: i32 = DefaultColor.obj0LightGrey;
  static readonly obj0DarkGrey: i32 = DefaultColor.obj0DarkGrey;
  static readonly obj0Black: i32 = DefaultColor.obj0Black;

  // Obj1
  static readonly obj1White: i32 = DefaultColor.obj1White;
  static readonly obj1LightGrey: i32 = DefaultColor.obj1LightGrey;
  static readonly obj1DarkGrey: i32 = DefaultColor.obj1DarkGrey;
  static readonly obj1Black: i32 = DefaultColor.obj1Black;

  //Bg
  static readonly bgWhite: i32 = DefaultColor.bgWhite;
  static readonly bgLightGrey: i32 = DefaultColor.bgLightGrey;
  static readonly bgDarkGrey: i32 = DefaultColor.bgDarkGrey;
  static readonly bglack: i32 = DefaultColor.bgBlack;
}

export function initializeColors(): void {}

export function getRedFromColor(): i32 {}

export function getGreenFromColor(): i32 {}

export function getBlueFromColor(): i32 {}

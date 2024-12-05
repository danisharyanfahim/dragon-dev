import { Url } from "next/dist/shared/lib/router/router";

type Enumerate<
  N extends number, //Upper limit number, must be a number, this is also exclusive, so the number will not be part of the array
  Acc extends number[] = [] //Array of numbers, starts as an empty array
> = Acc["length"] extends N //If the length of the numbers array is equal to the value of N
  ? Acc[number] //Return the elements of the array as a union of numbers, will result in  0 | 1 | ... N - 2 | N -1
  : Enumerate<N, [...Acc, Acc["length"]]>; //Else add the value of the numbers array length to it's elements, and recurse through the function

type IntRange<Initial extends number, Final extends number> = Exclude<
  //Sets the type to be the range of numbers from number 'Initial' to number 'Final - 1'
  Enumerate<Final>, //List of numbers for the range from 0 to Final - 1
  Enumerate<Initial> //List of numbers to exclude, from 0 to Initial - 1
>;

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

//Text

export type TextColor =
  | RGBA
  | RGBA
  | HEX
  | "transparent"
  | "inherit"
  | undefined;

export type Directions =
  | "vertical"
  | "horizontal"
  | "forward"
  | "reverse"
  | "left"
  | "right";

export type BtnInfo = {
  name: string;
  url: Url;
};

export type TitleSizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TextTypes = TitleSizes | "p" | "small" | "blockquote" | undefined; //HTML text tag types

export type WritingMode =
  | "horizontal-tb"
  | "vertical-lr"
  | "vertical-rl"
  | undefined;

export type TextWrap =
  | "wrap"
  | "nowrap"
  | "balance"
  | "pretty"
  | "stable"
  | undefined;

export type TextTransform =
  | "capitalize"
  | "uppercase"
  | "lowercase"
  | "none"
  | undefined;

export type TextOrientation = "mixed" | "upright" | "sideways" | undefined;

type TextDecorationStyle = "dotted" | "double" | "solid" | "dashed" | "wavy";

type TextDecorationLine =
  | "none"
  | "underline"
  | "overline"
  | "line-through"
  | "blink"
  | undefined;

type TextDecorationLines =
  | `${TextDecorationLine} ${TextDecorationLine} ${TextDecorationLine})`
  | `${TextDecorationLine} ${TextDecorationLine})`
  | TextDecorationLine;

export type TextDecoration = {
  line: TextDecorationLines; // A tuple of at least one TextDecorationLine value.
  style?: TextDecorationStyle; // 'style' is optional.
  color?: TextColor; // 'color' is optional.
};

export type FontStyle = "normal" | "italic" | "oblique" | undefined;

export type XAlignment = "left" | "center" | "right" | "justify" | undefined;

export type YAlignment = "top" | "middle" | "bottom" | undefined;

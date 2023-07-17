export interface ILengthofAxisX {
  get axisPositiveXLength(): number;
  set axisPositiveXLength(value: number);
  get axisNegativeXLength(): number;
  set axisNegativeXLength(value: number);
}

export interface ILengthofAxisY {
  get  axisPositiveYLength(): number;
  set  axisPositiveYLength(value: number);
  get  axisNegativeYLength(): number;
  set  axisNegativeYLength(value: number);
}

export interface ISystemDirection {
  get axisXDirection(): "left" | "right";
  get axisYDirection(): "top" | "bottom";
  set axisXDirection(value: "left" | "right");
  set axisYDirection(value: "top" | "bottom");
}

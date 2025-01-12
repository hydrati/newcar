import { interpolator } from "../interpolator";
import type { Carobj } from "../objects";
import type { TimingFunction } from "../timing-functions";
import type { Animate } from "./animate";

export const scale: Animate = (
  object: Carobj,
  process: number,
  by: TimingFunction,
  params: {
    from?: number;
    fromX?: number;
    fromY?: number;
    to?: number;
    toX?: number;
    toY?: number;
  },
): void => {
  params.fromX ??= params.from ?? object.scaleX;
  params.fromY ??= params.from ?? object.scaleY;
  params.toX ??= params.to ?? object.scaleX;
  params.toY ??= params.to ?? object.scaleY;
  object.scaleX = interpolator(params.fromX, params.toX, by)(process);
  object.scaleY = interpolator(params.fromY, params.toY, by)(process);
};

import type { FigureOption } from "./figure";
import { Figure } from "./figure";

/**
 * The circle options.
 * @param startAngle The start angle of the circle.
 * @param endAngle The end angle of the circle.
 * @see FigureOption
 * @see Circle
 */
export interface CircleOption extends FigureOption {
  startAngle?: number;
  endAngle?: number;
}

/**
 * The circle object.
 */
export class Circle extends Figure implements CircleOption {
  radius: number;
  startAngle: number;
  endAngle: number;

  /**
   * @param radius The radius of the circle.
   * @param options The options of the object.
   * @see CircleOption
   */
  constructor(radius: number, options?: CircleOption) {
    super((options ??= {}));
    this.radius = radius;
    this.startAngle = options.startAngle ?? 0;
    this.endAngle = options.endAngle ?? 2 * Math.PI;
  }

  override draw(context: CanvasRenderingContext2D): void {
    context.lineWidth = this.borderWidth;
    context.beginPath();
    context.arc(0, 0, this.radius, this.startAngle, this.endAngle);
    if (this.fillColor) {
      context.fillStyle = this.fillColor.toString();
      context.fill();
    }
    context.strokeStyle = this.borderColor.toString();
    context.stroke();
  }
}

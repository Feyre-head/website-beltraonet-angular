import {
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf
} from "./chunk-SE2FGOL3.js";
import {
  Component,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵattributeInterpolate2,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6QNI6B3L.js";
import "./chunk-PEBH6BBU.js";
import "./chunk-WPM5VTLQ.js";
import {
  timer
} from "./chunk-4S3KYZTJ.js";
import "./chunk-3OV72XIM.js";

// node_modules/ng-circle-progress/fesm2020/ng-circle-progress.mjs
function CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "linearGradient");
    ɵɵelement(1, "stop", 5)(2, "stop", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("id", ctx_r1.svg.outerLinearGradient.id);
    ɵɵadvance();
    ɵɵattribute("stop-color", ctx_r1.svg.outerLinearGradient.colorStop1)("stop-opacity", 1);
    ɵɵadvance();
    ɵɵattribute("stop-color", ctx_r1.svg.outerLinearGradient.colorStop2)("stop-opacity", 1);
  }
}
function CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "radialGradient");
    ɵɵelement(1, "stop", 5)(2, "stop", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("id", ctx_r1.svg.radialGradient.id);
    ɵɵadvance();
    ɵɵattribute("stop-color", ctx_r1.svg.radialGradient.colorStop1)("stop-opacity", 1);
    ɵɵadvance();
    ɵɵattribute("stop-color", ctx_r1.svg.radialGradient.colorStop2)("stop-opacity", 1);
  }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "circle");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattribute("cx", ctx_r1.svg.backgroundCircle.cx)("cy", ctx_r1.svg.backgroundCircle.cy)("r", ctx_r1.svg.backgroundCircle.r)("fill", ctx_r1.svg.backgroundCircle.fill)("fill-opacity", ctx_r1.svg.backgroundCircle.fillOpacity)("stroke", ctx_r1.svg.backgroundCircle.stroke)("stroke-width", ctx_r1.svg.backgroundCircle.strokeWidth);
  }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "circle");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattributeInterpolate2("fill", "url(", ctx_r1.window.location.href, "#", ctx_r1.svg.radialGradient.id, ")");
    ɵɵattribute("cx", ctx_r1.svg.backgroundCircle.cx)("cy", ctx_r1.svg.backgroundCircle.cy)("r", ctx_r1.svg.backgroundCircle.r)("fill-opacity", ctx_r1.svg.backgroundCircle.fillOpacity)("stroke", ctx_r1.svg.backgroundCircle.stroke)("stroke-width", ctx_r1.svg.backgroundCircle.strokeWidth);
  }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template, 1, 7, "circle", 2)(2, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template, 1, 9, "circle", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.options.backgroundGradient);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.options.backgroundGradient);
  }
}
function CircleProgressComponent__svg_svg_0__svg_circle_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "circle");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("cx", ctx_r1.svg.circle.cx)("cy", ctx_r1.svg.circle.cy)("r", ctx_r1.svg.circle.r)("fill", ctx_r1.svg.circle.fill)("stroke", ctx_r1.svg.circle.stroke)("stroke-width", ctx_r1.svg.circle.strokeWidth);
  }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "path");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattribute("d", ctx_r1.svg.path.d)("stroke", ctx_r1.svg.path.stroke)("stroke-width", ctx_r1.svg.path.strokeWidth)("stroke-linecap", ctx_r1.svg.path.strokeLinecap)("fill", ctx_r1.svg.path.fill);
  }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "path");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattributeInterpolate2("stroke", "url(", ctx_r1.window.location.href, "#", ctx_r1.svg.outerLinearGradient.id, ")");
    ɵɵattribute("d", ctx_r1.svg.path.d)("stroke-width", ctx_r1.svg.path.strokeWidth)("stroke-linecap", ctx_r1.svg.path.strokeLinecap)("fill", ctx_r1.svg.path.fill);
  }
}
function CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template, 1, 5, "path", 2)(2, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template, 1, 7, "path", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.options.outerStrokeGradient);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.options.outerStrokeGradient);
  }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "tspan");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tspan_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵattribute("x", ctx_r1.svg.title.x)("y", ctx_r1.svg.title.y)("dy", tspan_r3.dy)("font-size", ctx_r1.svg.title.fontSize)("font-weight", ctx_r1.svg.title.fontWeight)("fill", ctx_r1.svg.title.color);
    ɵɵadvance();
    ɵɵtextInterpolate(tspan_r3.span);
  }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template, 2, 7, "tspan", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.svg.title.tspans);
  }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "tspan");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattribute("font-size", ctx_r1.svg.units.fontSize)("font-weight", ctx_r1.svg.units.fontWeight)("fill", ctx_r1.svg.units.color);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.svg.units.text);
  }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "tspan");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tspan_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵattribute("x", ctx_r1.svg.subtitle.x)("y", ctx_r1.svg.subtitle.y)("dy", tspan_r4.dy)("font-size", ctx_r1.svg.subtitle.fontSize)("font-weight", ctx_r1.svg.subtitle.fontWeight)("fill", ctx_r1.svg.subtitle.color);
    ɵɵadvance();
    ɵɵtextInterpolate(tspan_r4.span);
  }
}
function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template, 2, 7, "tspan", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.svg.subtitle.tspans);
  }
}
function CircleProgressComponent__svg_svg_0__svg_text_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "text", 7);
    ɵɵtemplate(1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template, 2, 1, "ng-container", 2)(2, CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template, 2, 4, "tspan", 2)(3, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("x", ctx_r1.svg.circle.cx)("y", ctx_r1.svg.circle.cy)("text-anchor", ctx_r1.svg.title.textAnchor);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.options.showTitle);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.options.showUnits);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.options.showSubtitle);
  }
}
function CircleProgressComponent__svg_svg_0__svg_image_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "image", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("height", ctx_r1.svg.image.height)("width", ctx_r1.svg.image.width)("href", ctx_r1.svg.image.src, null, "xlink")("x", ctx_r1.svg.image.x)("y", ctx_r1.svg.image.y);
  }
}
function CircleProgressComponent__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 1);
    ɵɵlistener("click", function CircleProgressComponent__svg_svg_0_Template_svg_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.emitClickEvent($event));
    });
    ɵɵelementStart(1, "defs");
    ɵɵtemplate(2, CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template, 3, 5, "linearGradient", 2)(3, CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template, 3, 5, "radialGradient", 2);
    ɵɵelementEnd();
    ɵɵtemplate(4, CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template, 3, 2, "ng-container", 2)(5, CircleProgressComponent__svg_svg_0__svg_circle_5_Template, 1, 6, "circle", 2)(6, CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template, 3, 2, "ng-container", 2)(7, CircleProgressComponent__svg_svg_0__svg_text_7_Template, 4, 6, "text", 3)(8, CircleProgressComponent__svg_svg_0__svg_image_8_Template, 1, 5, "image", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("viewBox", ctx_r1.svg.viewBox)("height", ctx_r1.svg.height)("width", ctx_r1.svg.width)("class", ctx_r1.options.class);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.options.outerStrokeGradient);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.options.backgroundGradient);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.options.showBackground);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.options.showInnerStroke);
    ɵɵadvance();
    ɵɵproperty("ngIf", +ctx_r1.options.percent !== 0 || ctx_r1.options.showZeroOuterStroke);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.options.showImage && (ctx_r1.options.showTitle || ctx_r1.options.showUnits || ctx_r1.options.showSubtitle));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.options.showImage);
  }
}
var CircleProgressOptions = class {
  constructor() {
    this.class = "";
    this.backgroundGradient = false;
    this.backgroundColor = "transparent";
    this.backgroundGradientStopColor = "transparent";
    this.backgroundOpacity = 1;
    this.backgroundStroke = "transparent";
    this.backgroundStrokeWidth = 0;
    this.backgroundPadding = 5;
    this.percent = 0;
    this.radius = 90;
    this.space = 4;
    this.toFixed = 0;
    this.maxPercent = 1e3;
    this.renderOnClick = true;
    this.units = "%";
    this.unitsFontSize = "10";
    this.unitsFontWeight = "normal";
    this.unitsColor = "#444444";
    this.outerStrokeGradient = false;
    this.outerStrokeWidth = 8;
    this.outerStrokeColor = "#78C000";
    this.outerStrokeGradientStopColor = "transparent";
    this.outerStrokeLinecap = "round";
    this.innerStrokeColor = "#C7E596";
    this.innerStrokeWidth = 4;
    this.titleFormat = void 0;
    this.title = "auto";
    this.titleColor = "#444444";
    this.titleFontSize = "20";
    this.titleFontWeight = "normal";
    this.subtitleFormat = void 0;
    this.subtitle = "progress";
    this.subtitleColor = "#A9A9A9";
    this.subtitleFontSize = "10";
    this.subtitleFontWeight = "normal";
    this.imageSrc = void 0;
    this.imageHeight = 0;
    this.imageWidth = 0;
    this.animation = true;
    this.animateTitle = true;
    this.animateSubtitle = false;
    this.animationDuration = 500;
    this.showTitle = true;
    this.showSubtitle = true;
    this.showUnits = true;
    this.showImage = false;
    this.showBackground = true;
    this.showInnerStroke = true;
    this.clockwise = true;
    this.responsive = false;
    this.startFromZero = true;
    this.showZeroOuterStroke = true;
    this.lazy = false;
  }
};
var CircleProgressComponent = class {
  constructor(defaultOptions, ngZone, elRef, injector) {
    this.ngZone = ngZone;
    this.elRef = elRef;
    this.onClick = new EventEmitter();
    this.svgElement = null;
    this.isInViewport = false;
    this.onViewportChanged = new EventEmitter();
    this._viewportChangedSubscriber = null;
    this.options = new CircleProgressOptions();
    this.defaultOptions = new CircleProgressOptions();
    this._lastPercent = 0;
    this._gradientUUID = null;
    this.render = () => {
      this.applyOptions();
      if (this.options.lazy) {
        this.svgElement === null && this.draw(this._lastPercent);
        if (this.isInViewport) {
          if (this.options.animation && this.options.animationDuration > 0) {
            this.animate(this._lastPercent, this.options.percent);
          } else {
            this.draw(this.options.percent);
          }
          this._lastPercent = this.options.percent;
        }
      } else {
        if (this.options.animation && this.options.animationDuration > 0) {
          this.animate(this._lastPercent, this.options.percent);
        } else {
          this.draw(this.options.percent);
        }
        this._lastPercent = this.options.percent;
      }
    };
    this.polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
      let angleInRadius = angleInDegrees * Math.PI / 180;
      let x = centerX + Math.sin(angleInRadius) * radius;
      let y = centerY - Math.cos(angleInRadius) * radius;
      return {
        x,
        y
      };
    };
    this.draw = (percent) => {
      percent = percent === void 0 ? this.options.percent : Math.abs(percent);
      let circlePercent = percent > 100 ? 100 : percent;
      let boxSize = this.options.radius * 2 + this.options.outerStrokeWidth * 2;
      if (this.options.showBackground) {
        boxSize += this.options.backgroundStrokeWidth * 2 + this.max(0, this.options.backgroundPadding * 2);
      }
      let centre = {
        x: boxSize / 2,
        y: boxSize / 2
      };
      let startPoint = {
        x: centre.x,
        y: centre.y - this.options.radius
      };
      let endPoint = this.polarToCartesian(centre.x, centre.y, this.options.radius, 360 * (this.options.clockwise ? circlePercent : 100 - circlePercent) / 100);
      if (circlePercent === 100) {
        endPoint.x = endPoint.x + (this.options.clockwise ? -0.01 : 0.01);
      }
      let largeArcFlag, sweepFlag;
      if (circlePercent > 50) {
        [largeArcFlag, sweepFlag] = this.options.clockwise ? [1, 1] : [1, 0];
      } else {
        [largeArcFlag, sweepFlag] = this.options.clockwise ? [0, 1] : [0, 0];
      }
      let titlePercent = this.options.animateTitle ? percent : this.options.percent;
      let titleTextPercent = titlePercent > this.options.maxPercent ? `${this.options.maxPercent.toFixed(this.options.toFixed)}+` : titlePercent.toFixed(this.options.toFixed);
      let subtitlePercent = this.options.animateSubtitle ? percent : this.options.percent;
      let title = {
        x: centre.x,
        y: centre.y,
        textAnchor: "middle",
        color: this.options.titleColor,
        fontSize: this.options.titleFontSize,
        fontWeight: this.options.titleFontWeight,
        texts: [],
        tspans: []
      };
      if (this.options.titleFormat !== void 0 && this.options.titleFormat.constructor.name === "Function") {
        let formatted = this.options.titleFormat(titlePercent);
        if (formatted instanceof Array) {
          title.texts = [...formatted];
        } else {
          title.texts.push(formatted.toString());
        }
      } else {
        if (this.options.title === "auto") {
          title.texts.push(titleTextPercent);
        } else {
          if (this.options.title instanceof Array) {
            title.texts = [...this.options.title];
          } else {
            title.texts.push(this.options.title.toString());
          }
        }
      }
      let subtitle = {
        x: centre.x,
        y: centre.y,
        textAnchor: "middle",
        color: this.options.subtitleColor,
        fontSize: this.options.subtitleFontSize,
        fontWeight: this.options.subtitleFontWeight,
        texts: [],
        tspans: []
      };
      if (this.options.subtitleFormat !== void 0 && this.options.subtitleFormat.constructor.name === "Function") {
        let formatted = this.options.subtitleFormat(subtitlePercent);
        if (formatted instanceof Array) {
          subtitle.texts = [...formatted];
        } else {
          subtitle.texts.push(formatted.toString());
        }
      } else {
        if (this.options.subtitle instanceof Array) {
          subtitle.texts = [...this.options.subtitle];
        } else {
          subtitle.texts.push(this.options.subtitle.toString());
        }
      }
      let units = {
        text: `${this.options.units}`,
        fontSize: this.options.unitsFontSize,
        fontWeight: this.options.unitsFontWeight,
        color: this.options.unitsColor
      };
      let rowCount = 0, rowNum = 1;
      this.options.showTitle && (rowCount += title.texts.length);
      this.options.showSubtitle && (rowCount += subtitle.texts.length);
      if (this.options.showTitle) {
        for (let span of title.texts) {
          title.tspans.push({
            span,
            dy: this.getRelativeY(rowNum, rowCount)
          });
          rowNum++;
        }
      }
      if (this.options.showSubtitle) {
        for (let span of subtitle.texts) {
          subtitle.tspans.push({
            span,
            dy: this.getRelativeY(rowNum, rowCount)
          });
          rowNum++;
        }
      }
      if (null === this._gradientUUID) {
        this._gradientUUID = this.uuid();
      }
      this.svg = {
        viewBox: `0 0 ${boxSize} ${boxSize}`,
        // Set both width and height to '100%' if it's responsive
        width: this.options.responsive ? "100%" : boxSize,
        height: this.options.responsive ? "100%" : boxSize,
        backgroundCircle: {
          cx: centre.x,
          cy: centre.y,
          r: this.options.radius + this.options.outerStrokeWidth / 2 + this.options.backgroundPadding,
          fill: this.options.backgroundColor,
          fillOpacity: this.options.backgroundOpacity,
          stroke: this.options.backgroundStroke,
          strokeWidth: this.options.backgroundStrokeWidth
        },
        path: {
          // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
          d: `M ${startPoint.x} ${startPoint.y}
        A ${this.options.radius} ${this.options.radius} 0 ${largeArcFlag} ${sweepFlag} ${endPoint.x} ${endPoint.y}`,
          stroke: this.options.outerStrokeColor,
          strokeWidth: this.options.outerStrokeWidth,
          strokeLinecap: this.options.outerStrokeLinecap,
          fill: "none"
        },
        circle: {
          cx: centre.x,
          cy: centre.y,
          r: this.options.radius - this.options.space - this.options.outerStrokeWidth / 2 - this.options.innerStrokeWidth / 2,
          fill: "none",
          stroke: this.options.innerStrokeColor,
          strokeWidth: this.options.innerStrokeWidth
        },
        title,
        units,
        subtitle,
        image: {
          x: centre.x - this.options.imageWidth / 2,
          y: centre.y - this.options.imageHeight / 2,
          src: this.options.imageSrc,
          width: this.options.imageWidth,
          height: this.options.imageHeight
        },
        outerLinearGradient: {
          id: "outer-linear-" + this._gradientUUID,
          colorStop1: this.options.outerStrokeColor,
          colorStop2: this.options.outerStrokeGradientStopColor === "transparent" ? "#FFF" : this.options.outerStrokeGradientStopColor
        },
        radialGradient: {
          id: "radial-" + this._gradientUUID,
          colorStop1: this.options.backgroundColor,
          colorStop2: this.options.backgroundGradientStopColor === "transparent" ? "#FFF" : this.options.backgroundGradientStopColor
        }
      };
    };
    this.getAnimationParameters = (previousPercent, currentPercent) => {
      const MIN_INTERVAL = 10;
      let times, step, interval;
      let fromPercent = this.options.startFromZero ? 0 : previousPercent < 0 ? 0 : previousPercent;
      let toPercent = currentPercent < 0 ? 0 : this.min(currentPercent, this.options.maxPercent);
      let delta = Math.abs(Math.round(toPercent - fromPercent));
      if (delta >= 100) {
        times = 100;
        if (!this.options.animateTitle && !this.options.animateSubtitle) {
          step = 1;
        } else {
          step = Math.round(delta / times);
        }
      } else {
        times = delta;
        step = 1;
      }
      interval = Math.round(this.options.animationDuration / times);
      if (interval < MIN_INTERVAL) {
        interval = MIN_INTERVAL;
        times = this.options.animationDuration / interval;
        if (!this.options.animateTitle && !this.options.animateSubtitle && delta > 100) {
          step = Math.round(100 / times);
        } else {
          step = Math.round(delta / times);
        }
      }
      if (step < 1) {
        step = 1;
      }
      return {
        times,
        step,
        interval
      };
    };
    this.animate = (previousPercent, currentPercent) => {
      if (this._timerSubscription && !this._timerSubscription.closed) {
        this._timerSubscription.unsubscribe();
      }
      let fromPercent = this.options.startFromZero ? 0 : previousPercent;
      let toPercent = currentPercent;
      let {
        step,
        interval
      } = this.getAnimationParameters(fromPercent, toPercent);
      let count = fromPercent;
      if (fromPercent < toPercent) {
        this._timerSubscription = timer(0, interval).subscribe(() => {
          count += step;
          if (count <= toPercent) {
            if (!this.options.animateTitle && !this.options.animateSubtitle && count >= 100) {
              this.draw(toPercent);
              this._timerSubscription.unsubscribe();
            } else {
              this.draw(count);
            }
          } else {
            this.draw(toPercent);
            this._timerSubscription.unsubscribe();
          }
        });
      } else {
        this._timerSubscription = timer(0, interval).subscribe(() => {
          count -= step;
          if (count >= toPercent) {
            if (!this.options.animateTitle && !this.options.animateSubtitle && toPercent >= 100) {
              this.draw(toPercent);
              this._timerSubscription.unsubscribe();
            } else {
              this.draw(count);
            }
          } else {
            this.draw(toPercent);
            this._timerSubscription.unsubscribe();
          }
        });
      }
    };
    this.applyOptions = () => {
      for (let name of Object.keys(this.options)) {
        if (this.hasOwnProperty(name) && this[name] !== void 0) {
          this.options[name] = this[name];
        } else if (this.templateOptions && this.templateOptions[name] !== void 0) {
          this.options[name] = this.templateOptions[name];
        }
      }
      this.options.radius = Math.abs(+this.options.radius);
      this.options.space = +this.options.space;
      this.options.percent = +this.options.percent > 0 ? +this.options.percent : 0;
      this.options.maxPercent = Math.abs(+this.options.maxPercent);
      this.options.animationDuration = Math.abs(this.options.animationDuration);
      this.options.outerStrokeWidth = Math.abs(+this.options.outerStrokeWidth);
      this.options.innerStrokeWidth = Math.abs(+this.options.innerStrokeWidth);
      this.options.backgroundPadding = +this.options.backgroundPadding;
    };
    this.getRelativeY = (rowNum, rowCount) => {
      let initialOffset = -0.18, offset = 1;
      return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + "em";
    };
    this.min = (a, b) => {
      return a < b ? a : b;
    };
    this.max = (a, b) => {
      return a > b ? a : b;
    };
    this.uuid = () => {
      var dt = (/* @__PURE__ */ new Date()).getTime();
      var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : r & 3 | 8).toString(16);
      });
      return uuid;
    };
    this.checkViewport = () => {
      this.findSvgElement();
      let previousValue = this.isInViewport;
      this.isInViewport = this.isElementInViewport(this.svgElement);
      if (previousValue !== this.isInViewport && this.onViewportChanged.observers.length > 0) {
        this.ngZone.run(() => {
          this.onViewportChanged.emit({
            oldValue: previousValue,
            newValue: this.isInViewport
          });
        });
      }
    };
    this.onScroll = (event) => {
      this.checkViewport();
    };
    this.loadEventsForLazyMode = () => {
      if (this.options.lazy) {
        this.ngZone.runOutsideAngular(() => {
          this.document.addEventListener("scroll", this.onScroll, true);
          this.window.addEventListener("resize", this.onScroll, true);
        });
        if (this._viewportChangedSubscriber === null) {
          this._viewportChangedSubscriber = this.onViewportChanged.subscribe(({
            oldValue,
            newValue
          }) => {
            newValue ? this.render() : null;
          });
        }
        let _timer = timer(0, 50).subscribe(() => {
          this.svgElement === null ? this.checkViewport() : _timer.unsubscribe();
        });
      }
    };
    this.unloadEventsForLazyMode = () => {
      this.document.removeEventListener("scroll", this.onScroll, true);
      this.window.removeEventListener("resize", this.onScroll, true);
      if (this._viewportChangedSubscriber !== null) {
        this._viewportChangedSubscriber.unsubscribe();
        this._viewportChangedSubscriber = null;
      }
    };
    this.document = injector.get(DOCUMENT);
    this.window = this.document.defaultView;
    Object.assign(this.options, defaultOptions);
    Object.assign(this.defaultOptions, defaultOptions);
  }
  emitClickEvent(event) {
    if (this.options.renderOnClick) {
      this.animate(0, this.options.percent);
    }
    if (this.onClick.observers.length > 0) {
      this.onClick.emit(event);
    }
  }
  isDrawing() {
    return this._timerSubscription && !this._timerSubscription.closed;
  }
  findSvgElement() {
    if (this.svgElement === null) {
      let tags = this.elRef.nativeElement.getElementsByTagName("svg");
      if (tags.length > 0) {
        this.svgElement = tags[0];
      }
    }
  }
  isElementInViewport(el) {
    if (el === null || el === void 0) return false;
    let rect = el.getBoundingClientRect(), parent = el.parentNode, parentRect;
    do {
      parentRect = parent.getBoundingClientRect();
      if (rect.top >= parentRect.bottom) return false;
      if (rect.bottom <= parentRect.top) return false;
      if (rect.left >= parentRect.right) return false;
      if (rect.right <= parentRect.left) return false;
      parent = parent.parentNode;
    } while (parent != this.document.body);
    if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight)) return false;
    if (rect.bottom <= 0) return false;
    if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth)) return false;
    if (rect.right <= 0) return false;
    return true;
  }
  ngOnInit() {
    this.loadEventsForLazyMode();
  }
  ngOnDestroy() {
    this.unloadEventsForLazyMode();
  }
  ngOnChanges(changes) {
    this.render();
    if ("lazy" in changes) {
      changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
    }
  }
};
CircleProgressComponent.ɵfac = function CircleProgressComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CircleProgressComponent)(ɵɵdirectiveInject(CircleProgressOptions), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Injector));
};
CircleProgressComponent.ɵcmp = ɵɵdefineComponent({
  type: CircleProgressComponent,
  selectors: [["circle-progress"]],
  inputs: {
    name: "name",
    class: "class",
    backgroundGradient: "backgroundGradient",
    backgroundColor: "backgroundColor",
    backgroundGradientStopColor: "backgroundGradientStopColor",
    backgroundOpacity: "backgroundOpacity",
    backgroundStroke: "backgroundStroke",
    backgroundStrokeWidth: "backgroundStrokeWidth",
    backgroundPadding: "backgroundPadding",
    radius: "radius",
    space: "space",
    percent: "percent",
    toFixed: "toFixed",
    maxPercent: "maxPercent",
    renderOnClick: "renderOnClick",
    units: "units",
    unitsFontSize: "unitsFontSize",
    unitsFontWeight: "unitsFontWeight",
    unitsColor: "unitsColor",
    outerStrokeGradient: "outerStrokeGradient",
    outerStrokeWidth: "outerStrokeWidth",
    outerStrokeColor: "outerStrokeColor",
    outerStrokeGradientStopColor: "outerStrokeGradientStopColor",
    outerStrokeLinecap: "outerStrokeLinecap",
    innerStrokeColor: "innerStrokeColor",
    innerStrokeWidth: "innerStrokeWidth",
    titleFormat: "titleFormat",
    title: "title",
    titleColor: "titleColor",
    titleFontSize: "titleFontSize",
    titleFontWeight: "titleFontWeight",
    subtitleFormat: "subtitleFormat",
    subtitle: "subtitle",
    subtitleColor: "subtitleColor",
    subtitleFontSize: "subtitleFontSize",
    subtitleFontWeight: "subtitleFontWeight",
    imageSrc: "imageSrc",
    imageHeight: "imageHeight",
    imageWidth: "imageWidth",
    animation: "animation",
    animateTitle: "animateTitle",
    animateSubtitle: "animateSubtitle",
    animationDuration: "animationDuration",
    showTitle: "showTitle",
    showSubtitle: "showSubtitle",
    showUnits: "showUnits",
    showImage: "showImage",
    showBackground: "showBackground",
    showInnerStroke: "showInnerStroke",
    clockwise: "clockwise",
    responsive: "responsive",
    startFromZero: "startFromZero",
    showZeroOuterStroke: "showZeroOuterStroke",
    lazy: "lazy",
    templateOptions: [0, "options", "templateOptions"]
  },
  outputs: {
    onClick: "onClick"
  },
  standalone: false,
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click"], [4, "ngIf"], ["alignment-baseline", "baseline", 4, "ngIf"], ["preserveAspectRatio", "none", 4, "ngIf"], ["offset", "5%"], ["offset", "95%"], ["alignment-baseline", "baseline"], [4, "ngFor", "ngForOf"], ["preserveAspectRatio", "none"]],
  template: function CircleProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CircleProgressComponent__svg_svg_0_Template, 9, 11, "svg", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.svg);
    }
  },
  dependencies: [NgForOf, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircleProgressComponent, [{
    type: Component,
    args: [{
      selector: "circle-progress",
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" *ngIf="svg"
             [attr.viewBox]="svg.viewBox" preserveAspectRatio="xMidYMid meet"
             [attr.height]="svg.height" [attr.width]="svg.width" (click)="emitClickEvent($event)" [attr.class]="options.class">
            <defs>
                <linearGradient *ngIf="options.outerStrokeGradient" [attr.id]="svg.outerLinearGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.outerLinearGradient.colorStop1"  [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.outerLinearGradient.colorStop2" [attr.stop-opacity]="1"/>
                </linearGradient>
                <radialGradient *ngIf="options.backgroundGradient" [attr.id]="svg.radialGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.radialGradient.colorStop1" [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.radialGradient.colorStop2" [attr.stop-opacity]="1"/>
                </radialGradient>
            </defs>
            <ng-container *ngIf="options.showBackground">
                <circle *ngIf="!options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        [attr.fill]="svg.backgroundCircle.fill"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
                <circle *ngIf="options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        attr.fill="url({{window.location.href}}#{{svg.radialGradient.id}})"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
            </ng-container>            
            <circle *ngIf="options.showInnerStroke"
                    [attr.cx]="svg.circle.cx"
                    [attr.cy]="svg.circle.cy"
                    [attr.r]="svg.circle.r"
                    [attr.fill]="svg.circle.fill"
                    [attr.stroke]="svg.circle.stroke"
                    [attr.stroke-width]="svg.circle.strokeWidth"/>
            <ng-container *ngIf="+options.percent!==0 || options.showZeroOuterStroke">
                <path *ngIf="!options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        [attr.stroke]="svg.path.stroke"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
                <path *ngIf="options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        attr.stroke="url({{window.location.href}}#{{svg.outerLinearGradient.id}})"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
            </ng-container>
            <text *ngIf="!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)"
                  alignment-baseline="baseline"
                  [attr.x]="svg.circle.cx"
                  [attr.y]="svg.circle.cy"
                  [attr.text-anchor]="svg.title.textAnchor">
                <ng-container *ngIf="options.showTitle">
                    <tspan *ngFor="let tspan of svg.title.tspans"
                           [attr.x]="svg.title.x"
                           [attr.y]="svg.title.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.title.fontSize"
                           [attr.font-weight]="svg.title.fontWeight"
                           [attr.fill]="svg.title.color">{{tspan.span}}</tspan>
                </ng-container>
                <tspan *ngIf="options.showUnits"
                       [attr.font-size]="svg.units.fontSize"
                       [attr.font-weight]="svg.units.fontWeight"
                       [attr.fill]="svg.units.color">{{svg.units.text}}</tspan>
                <ng-container *ngIf="options.showSubtitle">
                    <tspan *ngFor="let tspan of svg.subtitle.tspans"
                           [attr.x]="svg.subtitle.x"
                           [attr.y]="svg.subtitle.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.subtitle.fontSize"
                           [attr.font-weight]="svg.subtitle.fontWeight"
                           [attr.fill]="svg.subtitle.color">{{tspan.span}}</tspan>
                </ng-container>
            </text>
            <image *ngIf="options.showImage" preserveAspectRatio="none" 
                [attr.height]="svg.image.height"
                [attr.width]="svg.image.width"
                [attr.xlink:href]="svg.image.src"
                [attr.x]="svg.image.x"
                [attr.y]="svg.image.y"
            />
        </svg>
    `
    }]
  }], function() {
    return [{
      type: CircleProgressOptions
    }, {
      type: NgZone
    }, {
      type: ElementRef
    }, {
      type: Injector
    }];
  }, {
    onClick: [{
      type: Output
    }],
    name: [{
      type: Input
    }],
    class: [{
      type: Input
    }],
    backgroundGradient: [{
      type: Input
    }],
    backgroundColor: [{
      type: Input
    }],
    backgroundGradientStopColor: [{
      type: Input
    }],
    backgroundOpacity: [{
      type: Input
    }],
    backgroundStroke: [{
      type: Input
    }],
    backgroundStrokeWidth: [{
      type: Input
    }],
    backgroundPadding: [{
      type: Input
    }],
    radius: [{
      type: Input
    }],
    space: [{
      type: Input
    }],
    percent: [{
      type: Input
    }],
    toFixed: [{
      type: Input
    }],
    maxPercent: [{
      type: Input
    }],
    renderOnClick: [{
      type: Input
    }],
    units: [{
      type: Input
    }],
    unitsFontSize: [{
      type: Input
    }],
    unitsFontWeight: [{
      type: Input
    }],
    unitsColor: [{
      type: Input
    }],
    outerStrokeGradient: [{
      type: Input
    }],
    outerStrokeWidth: [{
      type: Input
    }],
    outerStrokeColor: [{
      type: Input
    }],
    outerStrokeGradientStopColor: [{
      type: Input
    }],
    outerStrokeLinecap: [{
      type: Input
    }],
    innerStrokeColor: [{
      type: Input
    }],
    innerStrokeWidth: [{
      type: Input
    }],
    titleFormat: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    titleColor: [{
      type: Input
    }],
    titleFontSize: [{
      type: Input
    }],
    titleFontWeight: [{
      type: Input
    }],
    subtitleFormat: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    subtitleColor: [{
      type: Input
    }],
    subtitleFontSize: [{
      type: Input
    }],
    subtitleFontWeight: [{
      type: Input
    }],
    imageSrc: [{
      type: Input
    }],
    imageHeight: [{
      type: Input
    }],
    imageWidth: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    animateTitle: [{
      type: Input
    }],
    animateSubtitle: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    showTitle: [{
      type: Input
    }],
    showSubtitle: [{
      type: Input
    }],
    showUnits: [{
      type: Input
    }],
    showImage: [{
      type: Input
    }],
    showBackground: [{
      type: Input
    }],
    showInnerStroke: [{
      type: Input
    }],
    clockwise: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    startFromZero: [{
      type: Input
    }],
    showZeroOuterStroke: [{
      type: Input
    }],
    lazy: [{
      type: Input
    }],
    templateOptions: [{
      type: Input,
      args: ["options"]
    }]
  });
})();
var NgCircleProgressModule = class _NgCircleProgressModule {
  static forRoot(options = {}) {
    return {
      ngModule: _NgCircleProgressModule,
      providers: [{
        provide: CircleProgressOptions,
        useValue: options
      }]
    };
  }
};
NgCircleProgressModule.ɵfac = function NgCircleProgressModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgCircleProgressModule)();
};
NgCircleProgressModule.ɵmod = ɵɵdefineNgModule({
  type: NgCircleProgressModule,
  declarations: [CircleProgressComponent],
  imports: [CommonModule],
  exports: [CircleProgressComponent]
});
NgCircleProgressModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgCircleProgressModule, [{
    type: NgModule,
    args: [{
      declarations: [CircleProgressComponent],
      imports: [CommonModule],
      exports: [CircleProgressComponent]
    }]
  }], null, null);
})();
export {
  CircleProgressComponent,
  CircleProgressOptions,
  NgCircleProgressModule
};
//# sourceMappingURL=ng-circle-progress.js.map

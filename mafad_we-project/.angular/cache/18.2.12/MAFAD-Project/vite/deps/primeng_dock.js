import {
  Tooltip,
  TooltipModule
} from "./chunk-LHUAFTDY.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-PKYUL2GU.js";
import "./chunk-T4TJKANX.js";
import "./chunk-L7ENVBLC.js";
import {
  Ripple,
  RippleModule
} from "./chunk-JOALZTAZ.js";
import {
  DomHandler
} from "./chunk-BUGEQH7Q.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-WZELA4DU.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-33O5SD7Y.js";
import {
  ObjectUtils,
  UniqueComponentId
} from "./chunk-BCJBDT74.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-BI25GCU2.js";
import "./chunk-55JKKNGN.js";
import "./chunk-TXDUYLVM.js";

// node_modules/primeng/fesm2022/primeng-dock.mjs
var _c0 = ["list"];
var _c1 = (a0) => ({
  "p-disabled": a0
});
var _c2 = () => ({
  exact: false
});
var _c3 = (a0) => ({
  $implicit: a0
});
function Dock_li_4_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngClass", item_r3.icon)("ngStyle", item_r3.iconStyle);
  }
}
function Dock_li_4_a_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dock_li_4_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 9);
    ɵɵtemplate(1, Dock_li_4_a_2_span_1_Template, 1, 2, "span", 10)(2, Dock_li_4_a_2_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("routerLink", item_r3.routerLink)("queryParams", item_r3.queryParams)("ngClass", ɵɵpureFunction1(16, _c1, item_r3.disabled))("routerLinkActiveOptions", item_r3.routerLinkActiveOptions || ɵɵpureFunction0(18, _c2))("target", item_r3.target)("tooltipOptions", item_r3.tooltipOptions)("fragment", item_r3.fragment)("queryParamsHandling", item_r3.queryParamsHandling)("preserveFragment", item_r3.preserveFragment)("skipLocationChange", item_r3.skipLocationChange)("replaceUrl", item_r3.replaceUrl)("state", item_r3.state);
    ɵɵattribute("tabindex", item_r3.disabled || ctx_r3.readonly ? null : item_r3.tabindex ? item_r3.tabindex : "-1");
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3.icon && !ctx_r3.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(19, _c3, item_r3));
  }
}
function Dock_li_4_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngClass", item_r3.icon)("ngStyle", item_r3.iconStyle);
  }
}
function Dock_li_4_ng_template_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dock_li_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 13);
    ɵɵtemplate(1, Dock_li_4_ng_template_3_span_1_Template, 1, 2, "span", 10)(2, Dock_li_4_ng_template_3_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    const item_r3 = ctx_r5.$implicit;
    const i_r5 = ctx_r5.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("tooltipPosition", item_r3.tooltipPosition)("tooltipOptions", item_r3.tooltipOptions)("ngClass", ɵɵpureFunction1(9, _c1, item_r3.disabled))("target", item_r3.target);
    ɵɵattribute("href", item_r3.url || null, ɵɵsanitizeUrl)("tabindex", item_r3.disabled || i_r5 !== ctx_r3.activeIndex && ctx_r3.readonly ? null : item_r3.tabindex ? item_r3.tabindex : "-1");
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3.icon && !ctx_r3.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c3, item_r3));
  }
}
function Dock_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 6);
    ɵɵlistener("click", function Dock_li_4_Template_li_click_0_listener($event) {
      const item_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onItemClick($event, item_r3));
    })("mouseenter", function Dock_li_4_Template_li_mouseenter_0_listener() {
      const i_r5 = ɵɵrestoreView(_r2).index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onItemMouseEnter(i_r5));
    });
    ɵɵelementStart(1, "div", 7);
    ɵɵtemplate(2, Dock_li_4_a_2_Template, 3, 21, "a", 8)(3, Dock_li_4_ng_template_3_Template, 3, 13, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const elseBlock_r7 = ɵɵreference(4);
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r3.itemClass(item_r3, i_r5));
    ɵɵattribute("id", ctx_r3.getItemId(item_r3, i_r5))("aria-label", item_r3.label)("aria-disabled", ctx_r3.disabled(item_r3))("data-pc-section", "menuitem")("data-p-focused", ctx_r3.isItemActive(ctx_r3.getItemId(item_r3, i_r5)))("data-p-disabled", ctx_r3.disabled(item_r3) || false);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.isClickableRouterLink(item_r3))("ngIfElse", elseBlock_r7);
  }
}
var Dock = class _Dock {
  el;
  cd;
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * MenuModel instance to define the action items.
   * @group Props
   */
  model = null;
  /**
   * Position of element.
   * @group Props
   */
  position = "bottom";
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Defines a string that labels the dropdown button for accessibility.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Callback to execute when button is focused.
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  templates;
  listViewChild;
  itemTemplate;
  currentIndex;
  tabindex = 0;
  focused = false;
  focusedOptionIndex = -1;
  get focusedOptionId() {
    return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
  }
  constructor(el, cd) {
    this.el = el;
    this.cd = cd;
    this.currentIndex = -3;
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  getItemId(item, index) {
    return item && item?.id ? item.id : `${index}`;
  }
  getItemProp(processedItem, name) {
    return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name]) : void 0;
  }
  disabled(item) {
    return typeof item.disabled === "function" ? item.disabled() : item.disabled;
  }
  isItemActive(id) {
    return id === this.focusedOptionIndex;
  }
  onListMouseLeave() {
    this.currentIndex = -3;
    this.cd.markForCheck();
  }
  onItemMouseEnter(index) {
    this.currentIndex = index;
    if (index === 1) {
    }
    this.cd.markForCheck();
  }
  onItemClick(e, item) {
    if (item.command) {
      item.command({
        originalEvent: e,
        item
      });
    }
  }
  onListFocus(event) {
    this.focused = true;
    this.changeFocusedOptionIndex(0);
    this.onFocus.emit(event);
  }
  onListBlur(event) {
    this.focused = false;
    this.focusedOptionIndex = -1;
    this.onBlur.emit(event);
  }
  onListKeyDown(event) {
    switch (event.code) {
      case "ArrowDown": {
        if (this.position === "left" || this.position === "right") this.onArrowDownKey();
        event.preventDefault();
        break;
      }
      case "ArrowUp": {
        if (this.position === "left" || this.position === "right") this.onArrowUpKey();
        event.preventDefault();
        break;
      }
      case "ArrowRight": {
        if (this.position === "top" || this.position === "bottom") this.onArrowDownKey();
        event.preventDefault();
        break;
      }
      case "ArrowLeft": {
        if (this.position === "top" || this.position === "bottom") this.onArrowUpKey();
        event.preventDefault();
        break;
      }
      case "Home": {
        this.onHomeKey();
        event.preventDefault();
        break;
      }
      case "End": {
        this.onEndKey();
        event.preventDefault();
        break;
      }
      case "Enter":
      case "Space": {
        this.onSpaceKey();
        event.preventDefault();
        break;
      }
      default:
        break;
    }
  }
  onArrowDownKey() {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex);
    this.changeFocusedOptionIndex(optionIndex);
  }
  onArrowUpKey() {
    const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex);
    this.changeFocusedOptionIndex(optionIndex);
  }
  onHomeKey() {
    this.changeFocusedOptionIndex(0);
  }
  onEndKey() {
    this.changeFocusedOptionIndex(DomHandler.find(this.listViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
  }
  onSpaceKey() {
    const element = DomHandler.findSingle(this.listViewChild.nativeElement, `li[id="${`${this.focusedOptionIndex}`}"]`);
    const anchorElement = element && DomHandler.findSingle(element, '[data-pc-section="action"]');
    anchorElement ? anchorElement.click() : element && element.click();
  }
  findNextOptionIndex(index) {
    const menuitems = DomHandler.find(this.listViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...menuitems].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  }
  changeFocusedOptionIndex(index) {
    const menuitems = DomHandler.find(this.listViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    let order = index >= menuitems.length ? menuitems.length - 1 : index < 0 ? 0 : index;
    this.focusedOptionIndex = menuitems[order].getAttribute("id");
  }
  findPrevOptionIndex(index) {
    const menuitems = DomHandler.find(this.listViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...menuitems].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  }
  get containerClass() {
    return {
      [`p-dock p-component  p-dock-${this.position}`]: true
    };
  }
  isClickableRouterLink(item) {
    return item.routerLink && !item.disabled;
  }
  itemClass(item, index) {
    return {
      "p-dock-item": true,
      "p-dock-item-second-prev": this.currentIndex - 2 === index,
      "p-dock-item-prev": this.currentIndex - 1 === index,
      "p-dock-item-current": this.currentIndex === index,
      "p-dock-item-next": this.currentIndex + 1 === index,
      "p-dock-item-second-next": this.currentIndex + 2 === index,
      "p-focus": this.isItemActive(this.getItemId(item, index))
    };
  }
  static ɵfac = function Dock_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dock)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Dock,
    selectors: [["p-dock"]],
    contentQueries: function Dock_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Dock_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      style: "style",
      styleClass: "styleClass",
      model: "model",
      position: "position",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    decls: 5,
    vars: 13,
    consts: [["list", ""], ["elseBlock", ""], [3, "ngClass", "ngStyle"], [1, "p-dock-list-container"], ["role", "menu", 1, "p-dock-list", 3, "focus", "blur", "keydown", "mouseleave", "tabindex"], ["role", "menuitem", 3, "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["role", "menuitem", 3, "click", "mouseenter", "ngClass"], [1, "p-menuitem-content"], ["pRipple", "", "class", "p-dock-link", "pTooltip", "", 3, "routerLink", "queryParams", "ngClass", "routerLinkActiveOptions", "target", "tooltipOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf", "ngIfElse"], ["pRipple", "", "pTooltip", "", 1, "p-dock-link", 3, "routerLink", "queryParams", "ngClass", "routerLinkActiveOptions", "target", "tooltipOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["class", "p-dock-action-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-dock-action-icon", 3, "ngClass", "ngStyle"], ["pRipple", "", "pTooltip", "", 1, "p-dock-link", 3, "tooltipPosition", "tooltipOptions", "ngClass", "target"]],
    template: function Dock_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "ul", 4, 0);
        ɵɵlistener("focus", function Dock_Template_ul_focus_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListFocus($event));
        })("blur", function Dock_Template_ul_blur_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListBlur($event));
        })("keydown", function Dock_Template_ul_keydown_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListKeyDown($event));
        })("mouseleave", function Dock_Template_ul_mouseleave_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListMouseLeave());
        });
        ɵɵtemplate(4, Dock_li_4_Template, 5, 10, "li", 5);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.containerClass)("ngStyle", ctx.style);
        ɵɵattribute("data-pc-name", "dock");
        ɵɵadvance(2);
        ɵɵproperty("tabindex", ctx.tabindex);
        ɵɵattribute("id", ctx.id)("aria-orientation", ctx.position === "bottom" || ctx.position === "top" ? "horizontal" : "vertical")("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : void 0)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("data-pc-section", "menu");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.model);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, Ripple, Tooltip],
    styles: ["@layer primeng{.p-dock{position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dock-list-container{display:flex;pointer-events:auto}.p-dock-list{margin:0;padding:0;list-style:none;display:flex;align-items:center;justify-content:center}.p-dock-item{transition:all .2s cubic-bezier(.4,0,.2,1);will-change:transform}.p-dock-link{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;cursor:default}.p-dock-item-second-prev,.p-dock-item-second-next{transform:scale(1.2)}.p-dock-item-prev,.p-dock-item-next{transform:scale(1.4)}.p-dock-item-current{transform:scale(1.6);z-index:1}.p-dock-top{left:0;top:0;width:100%}.p-dock-top .p-dock-item{transform-origin:center top}.p-dock-bottom{left:0;bottom:0;width:100%}.p-dock-bottom .p-dock-item{transform-origin:center bottom}.p-dock-right{right:0;top:0;height:100%}.p-dock-right .p-dock-item{transform-origin:center right}.p-dock-right .p-dock-list{flex-direction:column}.p-dock-left{left:0;top:0;height:100%}.p-dock-left .p-dock-item{transform-origin:center left}.p-dock-left .p-dock-list{flex-direction:column}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dock, [{
    type: Component,
    args: [{
      selector: "p-dock",
      template: `
        <div [ngClass]="containerClass" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'dock'">
            <div class="p-dock-list-container">
                <ul
                    #list
                    [attr.id]="id"
                    class="p-dock-list"
                    role="menu"
                    [attr.aria-orientation]="position === 'bottom' || position === 'top' ? 'horizontal' : 'vertical'"
                    [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                    [tabindex]="tabindex"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.data-pc-section]="'menu'"
                    (focus)="onListFocus($event)"
                    (blur)="onListBlur($event)"
                    (keydown)="onListKeyDown($event)"
                    (mouseleave)="onListMouseLeave()"
                >
                    <li
                        *ngFor="let item of model; let i = index"
                        [attr.id]="getItemId(item, i)"
                        [ngClass]="itemClass(item, i)"
                        role="menuitem"
                        [attr.aria-label]="item.label"
                        [attr.aria-disabled]="disabled(item)"
                        (click)="onItemClick($event, item)"
                        (mouseenter)="onItemMouseEnter(i)"
                        [attr.data-pc-section]="'menuitem'"
                        [attr.data-p-focused]="isItemActive(getItemId(item, i))"
                        [attr.data-p-disabled]="disabled(item) || false"
                    >
                        <div class="p-menuitem-content" [attr.data-pc-section]="'content'">
                            <a
                                *ngIf="isClickableRouterLink(item); else elseBlock"
                                pRipple
                                [routerLink]="item.routerLink"
                                [queryParams]="item.queryParams"
                                [ngClass]="{ 'p-disabled': item.disabled }"
                                class="p-dock-link"
                                [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                                [target]="item.target"
                                [attr.tabindex]="item.disabled || readonly ? null : item.tabindex ? item.tabindex : '-1'"
                                pTooltip
                                [tooltipOptions]="item.tooltipOptions"
                                [fragment]="item.fragment"
                                [queryParamsHandling]="item.queryParamsHandling"
                                [preserveFragment]="item.preserveFragment"
                                [skipLocationChange]="item.skipLocationChange"
                                [replaceUrl]="item.replaceUrl"
                                [state]="item.state"
                            >
                                <span class="p-dock-action-icon" *ngIf="item.icon && !itemTemplate" [ngClass]="item.icon" [ngStyle]="item.iconStyle"></span>
                                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
                            </a>
                            <ng-template #elseBlock>
                                <a
                                    [tooltipPosition]="item.tooltipPosition"
                                    [attr.href]="item.url || null"
                                    class="p-dock-link"
                                    pRipple
                                    pTooltip
                                    [tooltipOptions]="item.tooltipOptions"
                                    [ngClass]="{ 'p-disabled': item.disabled }"
                                    [target]="item.target"
                                    [attr.tabindex]="item.disabled || (i !== activeIndex && readonly) ? null : item.tabindex ? item.tabindex : '-1'"
                                >
                                    <span class="p-dock-action-icon" *ngIf="item.icon && !itemTemplate" [ngClass]="item.icon" [ngStyle]="item.iconStyle"></span>
                                    <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
                                </a>
                            </ng-template>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-dock{position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dock-list-container{display:flex;pointer-events:auto}.p-dock-list{margin:0;padding:0;list-style:none;display:flex;align-items:center;justify-content:center}.p-dock-item{transition:all .2s cubic-bezier(.4,0,.2,1);will-change:transform}.p-dock-link{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;cursor:default}.p-dock-item-second-prev,.p-dock-item-second-next{transform:scale(1.2)}.p-dock-item-prev,.p-dock-item-next{transform:scale(1.4)}.p-dock-item-current{transform:scale(1.6);z-index:1}.p-dock-top{left:0;top:0;width:100%}.p-dock-top .p-dock-item{transform-origin:center top}.p-dock-bottom{left:0;bottom:0;width:100%}.p-dock-bottom .p-dock-item{transform-origin:center bottom}.p-dock-right{right:0;top:0;height:100%}.p-dock-right .p-dock-item{transform-origin:center right}.p-dock-right .p-dock-list{flex-direction:column}.p-dock-left{left:0;top:0;height:100%}.p-dock-left .p-dock-item{transform-origin:center left}.p-dock-left .p-dock-list{flex-direction:column}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    id: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list", {
        static: false
      }]
    }]
  });
})();
var DockModule = class _DockModule {
  static ɵfac = function DockModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DockModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DockModule,
    declarations: [Dock],
    imports: [CommonModule, RouterModule, RippleModule, TooltipModule],
    exports: [Dock, SharedModule, TooltipModule, RouterModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RouterModule, RippleModule, TooltipModule, SharedModule, TooltipModule, RouterModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DockModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, RippleModule, TooltipModule],
      exports: [Dock, SharedModule, TooltipModule, RouterModule],
      declarations: [Dock]
    }]
  }], null, null);
})();
export {
  Dock,
  DockModule
};
//# sourceMappingURL=primeng_dock.js.map

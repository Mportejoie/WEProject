import {
  ChevronLeftIcon
} from "./chunk-MYY2QGXU.js";
import {
  ChevronRightIcon
} from "./chunk-XLJDVGTI.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-LHUAFTDY.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-PKYUL2GU.js";
import "./chunk-T4TJKANX.js";
import "./chunk-L7ENVBLC.js";
import "./chunk-3AOFNPNV.js";
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
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-WZELA4DU.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-33O5SD7Y.js";
import {
  ObjectUtils
} from "./chunk-BCJBDT74.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
  booleanAttribute,
  setClassMetadata,
  signal,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-BI25GCU2.js";
import {
  filter
} from "./chunk-55JKKNGN.js";
import "./chunk-TXDUYLVM.js";

// node_modules/primeng/fesm2022/primeng-tabmenu.mjs
var _c0 = ["content"];
var _c1 = ["navbar"];
var _c2 = ["inkbar"];
var _c3 = ["prevBtn"];
var _c4 = ["nextBtn"];
var _c5 = ["tabLink"];
var _c6 = ["tab"];
var _c7 = (a0) => ({
  "p-tabmenu p-component": true,
  "p-tabmenu-scrollable": a0
});
var _c8 = (a0, a1, a2) => ({
  "p-tabmenuitem": true,
  "p-disabled": a0,
  "p-highlight": a1,
  "p-hidden": a2
});
var _c9 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
var _c10 = () => ({
  exact: false
});
function TabMenu_button_2_ChevronLeftIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronLeftIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true);
  }
}
function TabMenu_button_2_3_ng_template_0_Template(rf, ctx) {
}
function TabMenu_button_2_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabMenu_button_2_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabMenu_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17, 3);
    ɵɵlistener("click", function TabMenu_button_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navBackward());
    });
    ɵɵtemplate(2, TabMenu_button_2_ChevronLeftIcon_2_Template, 1, 1, "ChevronLeftIcon", 18)(3, TabMenu_button_2_3_Template, 1, 0, null, 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.previousIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.previousIconTemplate);
  }
}
function TabMenu_li_7_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 28);
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngClass", item_r5.icon)("ngStyle", item_r5.iconStyle);
  }
}
function TabMenu_li_7_a_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(item_r5, "label"));
  }
}
function TabMenu_li_7_a_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 30);
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r2.getItemProp(item_r5, "label"), ɵɵsanitizeHtml);
  }
}
function TabMenu_li_7_a_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", item_r5.badgeStyleClass);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(item_r5, "badge"));
  }
}
function TabMenu_li_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 24, 5);
    ɵɵelementContainerStart(2);
    ɵɵtemplate(3, TabMenu_li_7_a_2_span_3_Template, 1, 2, "span", 25)(4, TabMenu_li_7_a_2_span_4_Template, 2, 1, "span", 26)(5, TabMenu_li_7_a_2_ng_template_5_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor)(7, TabMenu_li_7_a_2_span_7_Template, 2, 2, "span", 27);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r8 = ɵɵreference(6);
    const item_r5 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("target", ctx_r2.getItemProp(item_r5, "target"));
    ɵɵattribute("href", ctx_r2.getItemProp(item_r5, "url"), ɵɵsanitizeUrl)("id", ctx_r2.getItemProp(item_r5, "id"))("aria-disabled", ctx_r2.disabled(item_r5))("aria-label", ctx_r2.getItemProp(item_r5, "label"))("tabindex", ctx_r2.disabled(item_r5) ? -1 : 0);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", item_r5.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r5.escape !== false)("ngIfElse", htmlLabel_r8);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", item_r5.badge);
  }
}
function TabMenu_li_7_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 28);
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngClass", item_r5.icon)("ngStyle", item_r5.iconStyle);
    ɵɵattribute("aria-hidden", true);
  }
}
function TabMenu_li_7_a_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(item_r5, "label"));
  }
}
function TabMenu_li_7_a_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 30);
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r2.getItemProp(item_r5, "label"), ɵɵsanitizeHtml);
  }
}
function TabMenu_li_7_a_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", item_r5.badgeStyleClass);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemProp(item_r5, "badge"));
  }
}
function TabMenu_li_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 32, 5);
    ɵɵelementContainerStart(2);
    ɵɵtemplate(3, TabMenu_li_7_a_3_span_3_Template, 1, 3, "span", 25)(4, TabMenu_li_7_a_3_span_4_Template, 2, 1, "span", 26)(5, TabMenu_li_7_a_3_ng_template_5_Template, 1, 1, "ng-template", null, 7, ɵɵtemplateRefExtractor)(7, TabMenu_li_7_a_3_span_7_Template, 2, 2, "span", 27);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r9 = ɵɵreference(6);
    const item_r5 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("routerLink", item_r5.routerLink)("queryParams", item_r5.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r5.routerLinkActiveOptions || ɵɵpureFunction0(19, _c10))("target", item_r5.target)("fragment", item_r5.fragment)("queryParamsHandling", item_r5.queryParamsHandling)("preserveFragment", item_r5.preserveFragment)("skipLocationChange", item_r5.skipLocationChange)("replaceUrl", item_r5.replaceUrl)("state", item_r5.state);
    ɵɵattribute("id", ctx_r2.getItemProp(item_r5, "id"))("aria-disabled", ctx_r2.disabled(item_r5))("aria-label", ctx_r2.getItemProp(item_r5, "label"))("tabindex", ctx_r2.disabled(item_r5) ? -1 : 0);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", item_r5.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r5.escape !== false)("ngIfElse", htmlRouteLabel_r9);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", item_r5.badge);
  }
}
function TabMenu_li_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabMenu_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 20, 4);
    ɵɵlistener("click", function TabMenu_li_7_Template_li_click_0_listener($event) {
      const item_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.itemClick($event, item_r5));
    })("keydown", function TabMenu_li_7_Template_li_keydown_0_listener($event) {
      const ctx_r5 = ɵɵrestoreView(_r4);
      const item_r5 = ctx_r5.$implicit;
      const i_r7 = ctx_r5.index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onKeydownItem($event, i_r7, item_r5));
    })("focus", function TabMenu_li_7_Template_li_focus_0_listener() {
      const item_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMenuItemFocus(item_r5));
    });
    ɵɵtemplate(2, TabMenu_li_7_a_2_Template, 8, 10, "a", 21)(3, TabMenu_li_7_a_3_Template, 8, 20, "a", 22)(4, TabMenu_li_7_ng_container_4_Template, 1, 0, "ng-container", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(item_r5.styleClass);
    ɵɵproperty("ngStyle", item_r5.style)("ngClass", ɵɵpureFunction3(11, _c8, ctx_r2.getItemProp(item_r5, "disabled"), ctx_r2.isActive(item_r5), item_r5.visible === false))("tooltipOptions", item_r5.tooltipOptions);
    ɵɵattribute("data-p-disabled", ctx_r2.disabled(item_r5))("data-p-highlight", ctx_r2.focusedItemInfo() === item_r5);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !item_r5.routerLink && !ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r5.routerLink && !ctx_r2.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(15, _c9, item_r5, i_r7));
  }
}
function TabMenu_button_10_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true);
  }
}
function TabMenu_button_10_3_ng_template_0_Template(rf, ctx) {
}
function TabMenu_button_10_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabMenu_button_10_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabMenu_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 33, 8);
    ɵɵlistener("click", function TabMenu_button_10_Template_button_click_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navForward());
    });
    ɵɵtemplate(2, TabMenu_button_10_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 18)(3, TabMenu_button_10_3_Template, 1, 0, null, 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.previousIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.nextIconTemplate);
  }
}
var TabMenu = class _TabMenu {
  platformId;
  router;
  route;
  cd;
  /**
   * An array of menuitems.
   * @group Props
   */
  set model(value) {
    this._model = value;
    this._focusableItems = (this._model || []).reduce((result, item) => {
      result.push(item);
      return result;
    }, []);
  }
  get model() {
    return this._model;
  }
  /**
   * Defines the default active menuitem
   * @group Props
   */
  set activeItem(value) {
    this._activeItem = value;
    this.activeItemChange.emit(value);
    this.tabChanged = true;
  }
  get activeItem() {
    return this._activeItem;
  }
  /**
   * When enabled displays buttons at each side of the tab headers to scroll the tab list.
   * @group Props
   */
  scrollable;
  /**
   * Defines if popup mode enabled.
   */
  popup;
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
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Event fired when a tab is selected.
   * @param {MenuItem} item - Menu item.
   * @group Emits
   */
  activeItemChange = new EventEmitter();
  content;
  navbar;
  inkbar;
  prevBtn;
  nextBtn;
  tabLink;
  tab;
  templates;
  itemTemplate;
  previousIconTemplate;
  nextIconTemplate;
  tabChanged;
  backwardIsDisabled = true;
  forwardIsDisabled = false;
  timerIdForAutoScroll = null;
  _focusableItems;
  _model;
  _activeItem;
  focusedItemInfo = signal(null);
  get focusableItems() {
    if (!this._focusableItems || !this._focusableItems.length) {
      this._focusableItems = (this.model || []).reduce((result, item) => {
        result.push(item);
        return result;
      }, []);
    }
    return this._focusableItems;
  }
  constructor(platformId, router, route, cd) {
    this.platformId = platformId;
    this.router = router;
    this.route = route;
    this.cd = cd;
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.cd.markForCheck();
    });
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.activeItem) {
      this.autoScrollForActiveItem();
    }
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "nexticon":
          this.nextIconTemplate = item.template;
          break;
        case "previousicon":
          this.previousIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateInkBar();
      this.autoScrollForActiveItem();
      this.initButtonState();
    }
  }
  ngAfterViewChecked() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateInkBar();
      this.tabChanged = false;
    }
  }
  ngOnDestroy() {
    this.clearAutoScrollHandler();
  }
  isActive(item) {
    if (item.routerLink) {
      const routerLink = Array.isArray(item.routerLink) ? item.routerLink : [item.routerLink];
      return this.router.isActive(this.router.createUrlTree(routerLink, {
        relativeTo: this.route
      }).toString(), item.routerLinkActiveOptions?.exact ?? item.routerLinkActiveOptions ?? false);
    }
    return item === this.activeItem;
  }
  getItemProp(item, name) {
    return item ? ObjectUtils.getItemValue(item[name]) : void 0;
  }
  visible(item) {
    return typeof item.visible === "function" ? item.visible() : item.visible !== false;
  }
  disabled(item) {
    return typeof item.disabled === "function" ? item.disabled() : item.disabled;
  }
  onMenuItemFocus(item) {
    this.focusedItemInfo.set(item);
  }
  itemClick(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    this.activeItem = item;
    this.tabChanged = true;
    this.cd.markForCheck();
  }
  onKeydownItem(event, index, item) {
    let i = index;
    let foundElement = {};
    const tabLinks = this.tabLink.toArray();
    const tabs = this.tab.toArray();
    switch (event.code) {
      case "ArrowRight":
        foundElement = this.findNextItem(tabs, i);
        i = foundElement["i"];
        break;
      case "ArrowLeft":
        foundElement = this.findPrevItem(tabs, i);
        i = foundElement["i"];
        break;
      case "End":
        foundElement = this.findPrevItem(tabs, this.model.length);
        i = foundElement["i"];
        event.preventDefault();
        break;
      case "Home":
        foundElement = this.findNextItem(tabs, -1);
        i = foundElement["i"];
        event.preventDefault();
        break;
      case "Space":
      case "Enter":
        this.itemClick(event, item);
        break;
      case "Tab":
        this.onTabKeyDown(tabLinks);
        break;
      default:
        break;
    }
    if (tabLinks[i] && tabLinks[index]) {
      tabLinks[index].nativeElement.tabIndex = "-1";
      tabLinks[i].nativeElement.tabIndex = "0";
      tabLinks[i].nativeElement.focus();
    }
    this.cd.markForCheck();
  }
  onTabKeyDown(tabLinks) {
    tabLinks.forEach((item) => {
      item.nativeElement.tabIndex = DomHandler.getAttribute(item.nativeElement.parentElement, "data-p-highlight") ? "0" : "-1";
    });
  }
  findNextItem(items, index) {
    let i = index + 1;
    if (i >= items.length) {
      return {
        nextItem: items[items.length],
        i: items.length
      };
    }
    let nextItem = items[i];
    if (nextItem) return DomHandler.getAttribute(nextItem.nativeElement, "data-p-disabled") ? this.findNextItem(items, i) : {
      nextItem: nextItem.nativeElement,
      i
    };
    else return null;
  }
  findPrevItem(items, index) {
    let i = index - 1;
    if (i < 0) {
      return {
        prevItem: items[0],
        i: 0
      };
    }
    let prevItem = items[i];
    if (prevItem) return DomHandler.getAttribute(prevItem.nativeElement, "data-p-disabled") ? this.findPrevItem(items, i) : {
      prevItem: prevItem.nativeElement,
      i
    };
    else return null;
  }
  updateInkBar() {
    const tabHeader = DomHandler.findSingle(this.navbar?.nativeElement, "li.p-highlight");
    if (tabHeader) {
      this.inkbar.nativeElement.style.width = DomHandler.getWidth(tabHeader) + "px";
      this.inkbar.nativeElement.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.navbar?.nativeElement).left + "px";
    }
  }
  getVisibleButtonWidths() {
    return [this.prevBtn?.nativeElement, this.nextBtn?.nativeElement].reduce((acc, el) => el ? acc + DomHandler.getWidth(el) : acc, 0);
  }
  updateButtonState() {
    const content = this.content?.nativeElement;
    const {
      scrollLeft,
      scrollWidth
    } = content;
    const width = DomHandler.getWidth(content);
    this.backwardIsDisabled = scrollLeft === 0;
    this.forwardIsDisabled = parseInt(scrollLeft) === scrollWidth - width;
  }
  updateScrollBar(index) {
    const tabHeader = this.navbar?.nativeElement.children[index];
    if (!tabHeader) {
      return;
    }
    if (tabHeader && typeof tabHeader.scrollIntoView === "function") {
      tabHeader.scrollIntoView({
        block: "nearest",
        inline: "center"
      });
    }
  }
  onScroll(event) {
    this.scrollable && this.updateButtonState();
    event.preventDefault();
  }
  navBackward() {
    const content = this.content?.nativeElement;
    const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
    const pos = content.scrollLeft - width;
    content.scrollLeft = pos <= 0 ? 0 : pos;
  }
  navForward() {
    const content = this.content?.nativeElement;
    const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
    const pos = content.scrollLeft + width;
    const lastPos = content.scrollWidth - width;
    content.scrollLeft = pos >= lastPos ? lastPos : pos;
  }
  autoScrollForActiveItem() {
    if (!this.scrollable) {
      return;
    }
    this.clearAutoScrollHandler();
    this.timerIdForAutoScroll = setTimeout(() => {
      const activeItem = this.model.findIndex((menuItem) => this.isActive(menuItem));
      if (activeItem !== -1) {
        this.updateScrollBar(activeItem);
      }
    });
  }
  clearAutoScrollHandler() {
    if (this.timerIdForAutoScroll) {
      clearTimeout(this.timerIdForAutoScroll);
      this.timerIdForAutoScroll = null;
    }
  }
  initButtonState() {
    if (this.scrollable) {
      Promise.resolve().then(() => {
        this.updateButtonState();
        this.cd.markForCheck();
      });
    }
  }
  static ɵfac = function TabMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabMenu)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TabMenu,
    selectors: [["p-tabMenu"]],
    contentQueries: function TabMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TabMenu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
        ɵɵviewQuery(_c3, 5);
        ɵɵviewQuery(_c4, 5);
        ɵɵviewQuery(_c5, 5);
        ɵɵviewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navbar = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inkbar = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prevBtn = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nextBtn = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabLink = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tab = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      model: "model",
      activeItem: "activeItem",
      scrollable: [2, "scrollable", "scrollable", booleanAttribute],
      popup: [2, "popup", "popup", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      activeItemChange: "activeItemChange"
    },
    features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
    decls: 11,
    vars: 11,
    consts: [["content", ""], ["navbar", ""], ["inkbar", ""], ["prevBtn", ""], ["tab", ""], ["tabLink", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], ["nextBtn", ""], [3, "ngClass", "ngStyle"], [1, "p-tabmenu-nav-container"], ["class", "p-tabmenu-nav-prev p-tabmenu-nav-btn p-link", "type", "button", "role", "navigation", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-tabmenu-nav-content", 3, "scroll"], ["role", "menubar", 1, "p-tabmenu-nav", "p-reset"], ["role", "presentation", "pTooltip", "", 3, "ngStyle", "class", "ngClass", "tooltipOptions", "click", "keydown", "focus", 4, "ngFor", "ngForOf"], ["role", "none", 1, "p-tabmenu-ink-bar"], ["class", "p-tabmenu-nav-next p-tabmenu-nav-btn p-link", "type", "button", "role", "navigation", "pRipple", "", 3, "click", 4, "ngIf"], ["type", "button", "role", "navigation", "pRipple", "", 1, "p-tabmenu-nav-prev", "p-tabmenu-nav-btn", "p-link", 3, "click"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["role", "presentation", "pTooltip", "", 3, "click", "keydown", "focus", "ngStyle", "ngClass", "tooltipOptions"], ["class", "p-menuitem-link", "role", "menuitem", "pRipple", "", 3, "target", 4, "ngIf"], ["role", "menuitem", "class", "p-menuitem-link", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "menuitem", "pRipple", "", 1, "p-menuitem-link", 3, "target"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], ["role", "menuitem", "pRipple", "", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["type", "button", "role", "navigation", "pRipple", "", 1, "p-tabmenu-nav-next", "p-tabmenu-nav-btn", "p-link", 3, "click"]],
    template: function TabMenu_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 9)(1, "div", 10);
        ɵɵtemplate(2, TabMenu_button_2_Template, 4, 2, "button", 11);
        ɵɵelementStart(3, "div", 12, 0);
        ɵɵlistener("scroll", function TabMenu_Template_div_scroll_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onScroll($event));
        });
        ɵɵelementStart(5, "ul", 13, 1);
        ɵɵtemplate(7, TabMenu_li_7_Template, 5, 18, "li", 14);
        ɵɵelement(8, "li", 15, 2);
        ɵɵelementEnd()();
        ɵɵtemplate(10, TabMenu_button_10_Template, 4, 2, "button", 16);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c7, ctx.scrollable))("ngStyle", ctx.style);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.scrollable && !ctx.backwardIsDisabled);
        ɵɵadvance(3);
        ɵɵattribute("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.focusableItems);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.scrollable && !ctx.forwardIsDisabled);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Ripple, Tooltip, ChevronLeftIcon, ChevronRightIcon],
    styles: ["@layer primeng{.p-tabmenu-nav-container{position:relative}.p-tabmenu-scrollable .p-tabmenu-nav-container{overflow:hidden}.p-tabmenu-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabmenu-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabmenu-nav-prev{left:0}.p-tabmenu-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabmenu-nav{display:flex;margin:0;padding:0;list-style-type:none;flex-wrap:nowrap}.p-tabmenu-nav a{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabmenu-nav a:focus{z-index:1}.p-tabmenu-nav .p-menuitem-text{line-height:1;white-space:nowrap}.p-tabmenu-ink-bar{display:none;z-index:1}.p-tabmenu-nav-content::-webkit-scrollbar{display:none}.p-tabmenuitem:not(.p-hidden){display:flex}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabMenu, [{
    type: Component,
    args: [{
      selector: "p-tabMenu",
      template: `
        <div [ngClass]="{ 'p-tabmenu p-component': true, 'p-tabmenu-scrollable': scrollable }" [ngStyle]="style" [class]="styleClass">
            <div class="p-tabmenu-nav-container">
                <button *ngIf="scrollable && !backwardIsDisabled" #prevBtn class="p-tabmenu-nav-prev p-tabmenu-nav-btn p-link" (click)="navBackward()" type="button" role="navigation" pRipple>
                    <ChevronLeftIcon *ngIf="!previousIconTemplate" [attr.aria-hidden]="true" />
                    <ng-template *ngTemplateOutlet="previousIconTemplate"></ng-template>
                </button>
                <div #content class="p-tabmenu-nav-content" (scroll)="onScroll($event)">
                    <ul #navbar class="p-tabmenu-nav p-reset" role="menubar" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-label]="ariaLabel">
                        <li
                            #tab
                            *ngFor="let item of focusableItems; let i = index"
                            role="presentation"
                            [ngStyle]="item.style"
                            [class]="item.styleClass"
                            [attr.data-p-disabled]="disabled(item)"
                            [attr.data-p-highlight]="focusedItemInfo() === item"
                            (click)="itemClick($event, item)"
                            (keydown)="onKeydownItem($event, i, item)"
                            (focus)="onMenuItemFocus(item)"
                            [ngClass]="{ 'p-tabmenuitem': true, 'p-disabled': getItemProp(item, 'disabled'), 'p-highlight': isActive(item), 'p-hidden': item.visible === false }"
                            pTooltip
                            [tooltipOptions]="item.tooltipOptions"
                        >
                            <a
                                #tabLink
                                *ngIf="!item.routerLink && !itemTemplate"
                                class="p-menuitem-link"
                                role="menuitem"
                                [attr.href]="getItemProp(item, 'url')"
                                [attr.id]="getItemProp(item, 'id')"
                                [attr.aria-disabled]="disabled(item)"
                                [attr.aria-label]="getItemProp(item, 'label')"
                                [attr.tabindex]="disabled(item) ? -1 : 0"
                                [target]="getItemProp(item, 'target')"
                                pRipple
                            >
                                <ng-container>
                                    <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="item.iconStyle"></span>
                                    <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlLabel">{{ getItemProp(item, 'label') }}</span>
                                    <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(item, 'label')"></span></ng-template>
                                    <span class="p-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{ getItemProp(item, 'badge') }}</span>
                                </ng-container>
                            </a>
                            <a
                                #tabLink
                                *ngIf="item.routerLink && !itemTemplate"
                                [routerLink]="item.routerLink"
                                [queryParams]="item.queryParams"
                                [routerLinkActive]="'p-menuitem-link-active'"
                                [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                                role="menuitem"
                                class="p-menuitem-link"
                                [target]="item.target"
                                [attr.id]="getItemProp(item, 'id')"
                                [attr.aria-disabled]="disabled(item)"
                                [attr.aria-label]="getItemProp(item, 'label')"
                                [attr.tabindex]="disabled(item) ? -1 : 0"
                                [fragment]="item.fragment"
                                [queryParamsHandling]="item.queryParamsHandling"
                                [preserveFragment]="item.preserveFragment"
                                [skipLocationChange]="item.skipLocationChange"
                                [replaceUrl]="item.replaceUrl"
                                [state]="item.state"
                                pRipple
                            >
                                <ng-container>
                                    <span class="p-menuitem-icon" [attr.aria-hidden]="true" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="item.iconStyle"></span>
                                    <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlRouteLabel">{{ getItemProp(item, 'label') }}</span>
                                    <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(item, 'label')"></span></ng-template>
                                    <span class="p-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{ getItemProp(item, 'badge') }}</span>
                                </ng-container>
                            </a>
                            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, index: i }"></ng-container>
                        </li>
                        <li #inkbar class="p-tabmenu-ink-bar" role="none"></li>
                    </ul>
                </div>
                <button *ngIf="scrollable && !forwardIsDisabled" #nextBtn class="p-tabmenu-nav-next p-tabmenu-nav-btn p-link" (click)="navForward()" type="button" role="navigation" pRipple>
                    <ChevronRightIcon *ngIf="!previousIconTemplate" [attr.aria-hidden]="true" />
                    <ng-template *ngTemplateOutlet="nextIconTemplate"></ng-template>
                </button>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-tabmenu-nav-container{position:relative}.p-tabmenu-scrollable .p-tabmenu-nav-container{overflow:hidden}.p-tabmenu-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabmenu-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabmenu-nav-prev{left:0}.p-tabmenu-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabmenu-nav{display:flex;margin:0;padding:0;list-style-type:none;flex-wrap:nowrap}.p-tabmenu-nav a{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabmenu-nav a:focus{z-index:1}.p-tabmenu-nav .p-menuitem-text{line-height:1;white-space:nowrap}.p-tabmenu-ink-bar{display:none;z-index:1}.p-tabmenu-nav-content::-webkit-scrollbar{display:none}.p-tabmenuitem:not(.p-hidden){display:flex}}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: ChangeDetectorRef
  }], {
    model: [{
      type: Input
    }],
    activeItem: [{
      type: Input
    }],
    scrollable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    activeItemChange: [{
      type: Output
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    navbar: [{
      type: ViewChild,
      args: ["navbar"]
    }],
    inkbar: [{
      type: ViewChild,
      args: ["inkbar"]
    }],
    prevBtn: [{
      type: ViewChild,
      args: ["prevBtn"]
    }],
    nextBtn: [{
      type: ViewChild,
      args: ["nextBtn"]
    }],
    tabLink: [{
      type: ViewChildren,
      args: ["tabLink"]
    }],
    tab: [{
      type: ViewChildren,
      args: ["tab"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TabMenuModule = class _TabMenuModule {
  static ɵfac = function TabMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabMenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TabMenuModule,
    declarations: [TabMenu],
    imports: [CommonModule, RouterModule, SharedModule, RippleModule, TooltipModule, ChevronLeftIcon, ChevronRightIcon],
    exports: [TabMenu, RouterModule, SharedModule, TooltipModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RouterModule, SharedModule, RippleModule, TooltipModule, ChevronLeftIcon, ChevronRightIcon, RouterModule, SharedModule, TooltipModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, SharedModule, RippleModule, TooltipModule, ChevronLeftIcon, ChevronRightIcon],
      exports: [TabMenu, RouterModule, SharedModule, TooltipModule],
      declarations: [TabMenu]
    }]
  }], null, null);
})();
export {
  TabMenu,
  TabMenuModule
};
//# sourceMappingURL=primeng_tabmenu.js.map

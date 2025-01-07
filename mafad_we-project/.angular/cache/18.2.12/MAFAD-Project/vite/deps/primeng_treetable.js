import {
  MinusIcon
} from "./chunk-6TY3UI7X.js";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Paginator,
  PaginatorModule,
  SortAltIcon,
  SortAmountDownIcon,
  SortAmountUpAltIcon
} from "./chunk-PDSSQNXG.js";
import {
  ChevronDownIcon,
  Scroller,
  ScrollerModule
} from "./chunk-LUGZ5UVD.js";
import {
  ChevronRightIcon
} from "./chunk-XLJDVGTI.js";
import {
  CheckIcon
} from "./chunk-RRJNPNKP.js";
import "./chunk-6USXAIMA.js";
import "./chunk-LHUAFTDY.js";
import "./chunk-YNFJTJUD.js";
import "./chunk-MDK3SDFZ.js";
import "./chunk-G7NW3NKG.js";
import "./chunk-VOSDBS4L.js";
import {
  SpinnerIcon
} from "./chunk-OVC5Y4MW.js";
import "./chunk-3AOFNPNV.js";
import "./chunk-SXGWULMC.js";
import {
  Ripple,
  RippleModule
} from "./chunk-JOALZTAZ.js";
import {
  DomHandler
} from "./chunk-BUGEQH7Q.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-WZELA4DU.js";
import {
  FilterService,
  PrimeNGConfig,
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
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
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
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-BI25GCU2.js";
import {
  Subject
} from "./chunk-55JKKNGN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/primeng/fesm2022/primeng-treetable.mjs
var _c0 = ["container"];
var _c1 = ["resizeHelper"];
var _c2 = ["reorderIndicatorUp"];
var _c3 = ["reorderIndicatorDown"];
var _c4 = ["table"];
var _c5 = ["scrollableView"];
var _c6 = ["scrollableFrozenView"];
var _c7 = (a0, a1, a2, a3, a4) => ({
  "p-treetable p-component": true,
  "p-treetable-hoverable-rows": a0,
  "p-treetable-auto-layout": a1,
  "p-treetable-resizable": a2,
  "p-treetable-resizable-fit": a3,
  "p-treetable-flex-scrollable": a4
});
var _c8 = (a0) => ({
  $implicit: a0
});
var _c9 = (a0, a1) => ({
  left: a0,
  width: a1
});
var _c10 = (a0) => ({
  width: a0
});
var _c11 = () => ({
  display: "none"
});
function TreeTable_div_2_i_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap("p-treetable-loading-icon pi-spin " + ctx_r0.loadingIcon);
  }
}
function TreeTable_div_2_ng_container_3_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SpinnerIcon", 24);
  }
  if (rf & 2) {
    ɵɵproperty("spin", true)("styleClass", "p-treetable-loading-icon");
  }
}
function TreeTable_div_2_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {
}
function TreeTable_div_2_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_div_2_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeTable_div_2_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 25);
    ɵɵtemplate(1, TreeTable_div_2_ng_container_3_span_2_1_Template, 1, 0, null, 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingIconTemplate);
  }
}
function TreeTable_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TreeTable_div_2_ng_container_3_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 22)(2, TreeTable_div_2_ng_container_3_span_2_Template, 2, 1, "span", 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.loadingIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.loadingIconTemplate);
  }
}
function TreeTable_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18)(1, "div", 19);
    ɵɵtemplate(2, TreeTable_div_2_i_2_Template, 1, 2, "i", 20)(3, TreeTable_div_2_ng_container_3_Template, 3, 2, "ng-container", 21);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.loadingIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.loadingIcon);
  }
}
function TreeTable_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTable_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtemplate(1, TreeTable_div_3_ng_container_1_Template, 1, 0, "ng-container", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.captionTemplate);
  }
}
function TreeTable_p_paginator_4_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTable_p_paginator_4_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_4_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorFirstPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_4_1_ng_template_0_Template, 1, 1, "ng-template", 29);
  }
}
function TreeTable_p_paginator_4_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTable_p_paginator_4_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_4_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorPreviousPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_4_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_4_2_ng_template_0_Template, 1, 1, "ng-template", 30);
  }
}
function TreeTable_p_paginator_4_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTable_p_paginator_4_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_4_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorLastPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_4_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_4_3_ng_template_0_Template, 1, 1, "ng-template", 31);
  }
}
function TreeTable_p_paginator_4_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTable_p_paginator_4_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_4_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorNextPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_4_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_4_4_ng_template_0_Template, 1, 1, "ng-template", 32);
  }
}
function TreeTable_p_paginator_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-paginator", 28);
    ɵɵlistener("onPageChange", function TreeTable_p_paginator_4_Template_p_paginator_onPageChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onPageChange($event));
    });
    ɵɵtemplate(1, TreeTable_p_paginator_4_1_Template, 1, 0, null, 21)(2, TreeTable_p_paginator_4_2_Template, 1, 0, null, 21)(3, TreeTable_p_paginator_4_3_Template, 1, 0, null, 21)(4, TreeTable_p_paginator_4_4_Template, 1, 0, null, 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("templateLeft", ctx_r0.paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.paginatorStyleClass)("locale", ctx_r0.paginatorLocale);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorFirstPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorPreviousPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorLastPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorNextPageLinkIconTemplate);
  }
}
function TreeTable_div_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTable_div_5_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTable_div_5_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTable_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 33)(1, "table", 34, 1);
    ɵɵtemplate(3, TreeTable_div_5_ng_container_3_Template, 1, 0, "ng-container", 35);
    ɵɵelementStart(4, "thead", 36);
    ɵɵtemplate(5, TreeTable_div_5_ng_container_5_Template, 1, 0, "ng-container", 35);
    ɵɵelementEnd();
    ɵɵelement(6, "tbody", 37);
    ɵɵelementStart(7, "tfoot", 38);
    ɵɵtemplate(8, TreeTable_div_5_ng_container_8_Template, 1, 0, "ng-container", 35);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.tableStyleClass)("ngStyle", ctx_r0.tableStyle);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.colGroupTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c8, ctx_r0.columns));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(12, _c8, ctx_r0.columns));
    ɵɵadvance();
    ɵɵproperty("pTreeTableBody", ctx_r0.columns)("pTreeTableBodyTemplate", ctx_r0.bodyTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(14, _c8, ctx_r0.columns));
  }
}
function TreeTable_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 42, 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ttScrollableView", ctx_r0.frozenColumns)("frozen", true)("ngStyle", ɵɵpureFunction1(4, _c10, ctx_r0.frozenWidth))("scrollHeight", ctx_r0.scrollHeight);
  }
}
function TreeTable_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 39);
    ɵɵtemplate(1, TreeTable_div_6_div_1_Template, 2, 6, "div", 40);
    ɵɵelement(2, "div", 41, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.frozenColumns || ctx_r0.frozenBodyTemplate);
    ɵɵadvance();
    ɵɵproperty("ttScrollableView", ctx_r0.columns)("frozen", false)("scrollHeight", ctx_r0.scrollHeight)("ngStyle", ɵɵpureFunction2(5, _c9, ctx_r0.frozenWidth, "calc(100% - " + ctx_r0.frozenWidth + ")"));
  }
}
function TreeTable_p_paginator_7_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTable_p_paginator_7_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_7_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorFirstPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_7_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_7_1_ng_template_0_Template, 1, 1, "ng-template", 29);
  }
}
function TreeTable_p_paginator_7_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTable_p_paginator_7_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_7_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorPreviousPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_7_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_7_2_ng_template_0_Template, 1, 1, "ng-template", 30);
  }
}
function TreeTable_p_paginator_7_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTable_p_paginator_7_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_7_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorLastPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_7_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_7_3_ng_template_0_Template, 1, 1, "ng-template", 31);
  }
}
function TreeTable_p_paginator_7_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTable_p_paginator_7_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_7_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorNextPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_7_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_p_paginator_7_4_ng_template_0_Template, 1, 1, "ng-template", 32);
  }
}
function TreeTable_p_paginator_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-paginator", 43);
    ɵɵlistener("onPageChange", function TreeTable_p_paginator_7_Template_p_paginator_onPageChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onPageChange($event));
    });
    ɵɵtemplate(1, TreeTable_p_paginator_7_1_Template, 1, 0, null, 21)(2, TreeTable_p_paginator_7_2_Template, 1, 0, null, 21)(3, TreeTable_p_paginator_7_3_Template, 1, 0, null, 21)(4, TreeTable_p_paginator_7_4_Template, 1, 0, null, 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("templateLeft", ctx_r0.paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.paginatorStyleClass)("locale", ctx_r0.paginatorLocale);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorFirstPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorPreviousPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorLastPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorNextPageLinkIconTemplate);
  }
}
function TreeTable_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTable_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 44);
    ɵɵtemplate(1, TreeTable_div_8_ng_container_1_Template, 1, 0, "ng-container", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.summaryTemplate);
  }
}
function TreeTable_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 45, 4);
  }
  if (rf & 2) {
    ɵɵproperty("ngStyle", ɵɵpureFunction0(1, _c11));
  }
}
function TreeTable_span_10_ArrowDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ArrowDownIcon");
  }
}
function TreeTable_span_10_3_ng_template_0_Template(rf, ctx) {
}
function TreeTable_span_10_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_span_10_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeTable_span_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 46, 5);
    ɵɵtemplate(2, TreeTable_span_10_ArrowDownIcon_2_Template, 1, 0, "ArrowDownIcon", 21)(3, TreeTable_span_10_3_Template, 1, 0, null, 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction0(3, _c11));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.reorderIndicatorUpIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.reorderIndicatorUpIconTemplate);
  }
}
function TreeTable_span_11_ArrowUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ArrowUpIcon");
  }
}
function TreeTable_span_11_3_ng_template_0_Template(rf, ctx) {
}
function TreeTable_span_11_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTable_span_11_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeTable_span_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 47, 6);
    ɵɵtemplate(2, TreeTable_span_11_ArrowUpIcon_2_Template, 1, 0, "ArrowUpIcon", 21)(3, TreeTable_span_11_3_Template, 1, 0, null, 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction0(3, _c11));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.reorderIndicatorDownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.reorderIndicatorDownIconTemplate);
  }
}
var _c12 = ["pTreeTableBody", ""];
var _c13 = (a0, a1, a2, a3) => ({
  $implicit: a0,
  node: a1,
  rowData: a2,
  columns: a3
});
var _c14 = (a0, a1) => ({
  $implicit: a0,
  frozen: a1
});
function TTBody_ng_template_0_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TTBody_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TTBody_ng_template_0_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const serializedNode_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.template)("ngTemplateOutletContext", ɵɵpureFunction4(2, _c13, serializedNode_r1, serializedNode_r1.node, serializedNode_r1.node.data, ctx_r1.columns));
  }
}
function TTBody_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TTBody_ng_template_0_ng_container_0_Template, 2, 7, "ng-container", 1);
  }
  if (rf & 2) {
    const serializedNode_r1 = ctx.$implicit;
    ɵɵproperty("ngIf", serializedNode_r1.visible);
  }
}
function TTBody_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TTBody_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TTBody_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.tt.emptyMessageTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c14, ctx_r1.columns, ctx_r1.frozen));
  }
}
var _c15 = ["scrollHeader"];
var _c16 = ["scrollHeaderBox"];
var _c17 = ["scrollBody"];
var _c18 = ["scrollTable"];
var _c19 = ["loadingTable"];
var _c20 = ["scrollFooter"];
var _c21 = ["scrollFooterBox"];
var _c22 = ["scrollableAligner"];
var _c23 = ["scroller"];
var _c24 = ["ttScrollableView", ""];
var _c25 = (a0) => ({
  height: a0
});
var _c26 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c27 = (a0) => ({
  options: a0
});
var _c28 = (a0, a1) => ({
  "max-height": a0,
  "overflow-y": a1
});
var _c29 = () => ({});
var _c30 = () => ({
  "background-color": "transparent"
});
function TTScrollableView_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TTScrollableView_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TTScrollableView_p_scroller_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TTScrollableView_p_scroller_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TTScrollableView_p_scroller_8_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const items_r3 = ctx.$implicit;
    const scrollerOptions_r4 = ctx.options;
    ɵɵnextContext(2);
    const buildInItems_r5 = ɵɵreference(11);
    ɵɵproperty("ngTemplateOutlet", buildInItems_r5)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c26, items_r3, scrollerOptions_r4));
  }
}
function TTScrollableView_p_scroller_8_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TTScrollableView_p_scroller_8_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TTScrollableView_p_scroller_8_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const scrollerOptions_r6 = ctx.options;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.loaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c27, scrollerOptions_r6));
  }
}
function TTScrollableView_p_scroller_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TTScrollableView_p_scroller_8_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 19);
    ɵɵelementContainerEnd();
  }
}
function TTScrollableView_p_scroller_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-scroller", 17, 3);
    ɵɵlistener("onLazyLoad", function TTScrollableView_p_scroller_8_Template_p_scroller_onLazyLoad_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.tt.onLazyItemLoad($event));
    });
    ɵɵtemplate(2, TTScrollableView_p_scroller_8_ng_template_2_Template, 1, 5, "ng-template", 18)(3, TTScrollableView_p_scroller_8_ng_container_3_Template, 2, 0, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction1(8, _c25, ctx_r1.tt.scrollHeight !== "flex" ? ctx_r1.tt.scrollHeight : void 0));
    ɵɵproperty("items", ctx_r1.tt.serializedValue)("scrollHeight", ctx_r1.scrollHeight !== "flex" ? void 0 : "100%")("itemSize", ctx_r1.tt.virtualScrollItemSize || ctx_r1.tt._virtualRowHeight)("lazy", ctx_r1.tt.lazy)("options", ctx_r1.tt.virtualScrollOptions);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.loaderTemplate);
  }
}
function TTScrollableView_ng_container_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TTScrollableView_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 20, 4);
    ɵɵtemplate(3, TTScrollableView_ng_container_9_ng_container_3_Template, 1, 0, "ng-container", 12);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const buildInItems_r5 = ɵɵreference(11);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction2(3, _c28, ctx_r1.tt.scrollHeight !== "flex" ? ctx_r1.scrollHeight : void 0, !ctx_r1.frozen && ctx_r1.tt.scrollHeight ? "scroll" : void 0));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", buildInItems_r5)("ngTemplateOutletContext", ɵɵpureFunction2(7, _c26, ctx_r1.serializedValue, ɵɵpureFunction0(6, _c29)));
  }
}
function TTScrollableView_ng_template_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TTScrollableView_ng_template_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 24, 6);
  }
  if (rf & 2) {
    ɵɵproperty("ngStyle", ɵɵpureFunction0(1, _c30));
  }
}
function TTScrollableView_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "table", 21, 5);
    ɵɵtemplate(2, TTScrollableView_ng_template_10_ng_container_2_Template, 1, 0, "ng-container", 12);
    ɵɵelement(3, "tbody", 22);
    ɵɵelementEnd();
    ɵɵtemplate(4, TTScrollableView_ng_template_10_div_4_Template, 2, 2, "div", 23);
  }
  if (rf & 2) {
    const items_r7 = ctx.$implicit;
    const scrollerOptions_r8 = ctx.options;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.tt.tableStyleClass);
    ɵɵproperty("ngClass", scrollerOptions_r8.contentStyleClass)("ngStyle", ctx_r1.getMergedTableStyles(scrollerOptions_r8.contentStyle));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.frozen ? ctx_r1.tt.frozenColGroupTemplate || ctx_r1.tt.colGroupTemplate : ctx_r1.tt.colGroupTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c8, ctx_r1.columns));
    ɵɵadvance();
    ɵɵproperty("pTreeTableBody", ctx_r1.columns)("pTreeTableBodyTemplate", ctx_r1.frozen ? ctx_r1.tt.frozenBodyTemplate || ctx_r1.tt.bodyTemplate : ctx_r1.tt.bodyTemplate)("serializedNodes", items_r7)("frozen", ctx_r1.frozen);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.frozen);
  }
}
function TTScrollableView_div_12_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TTScrollableView_div_12_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TTScrollableView_div_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 25, 7)(2, "div", 26, 8)(4, "table", 27);
    ɵɵtemplate(5, TTScrollableView_div_12_ng_container_5_Template, 1, 0, "ng-container", 12);
    ɵɵelementStart(6, "tfoot", 28);
    ɵɵtemplate(7, TTScrollableView_div_12_ng_container_7_Template, 1, 0, "ng-container", 12);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("ngClass", ctx_r1.tt.tableStyleClass)("ngStyle", ctx_r1.tt.tableStyle);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.frozen ? ctx_r1.tt.frozenColGroupTemplate || ctx_r1.tt.colGroupTemplate : ctx_r1.tt.colGroupTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c8, ctx_r1.columns));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.frozen ? ctx_r1.tt.frozenFooterTemplate || ctx_r1.tt.footerTemplate : ctx_r1.tt.footerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(8, _c8, ctx_r1.columns));
  }
}
function TTSortIcon_ng_container_0_SortAltIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SortAltIcon", 3);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-sortable-column-icon");
  }
}
function TTSortIcon_ng_container_0_SortAmountUpAltIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SortAmountUpAltIcon", 3);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-sortable-column-icon");
  }
}
function TTSortIcon_ng_container_0_SortAmountDownIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SortAmountDownIcon", 3);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-sortable-column-icon");
  }
}
function TTSortIcon_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TTSortIcon_ng_container_0_SortAltIcon_1_Template, 1, 1, "SortAltIcon", 2)(2, TTSortIcon_ng_container_0_SortAmountUpAltIcon_2_Template, 1, 1, "SortAmountUpAltIcon", 2)(3, TTSortIcon_ng_container_0_SortAmountDownIcon_3_Template, 1, 1, "SortAmountDownIcon", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.sortOrder === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.sortOrder === 1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.sortOrder === -1);
  }
}
function TTSortIcon_span_1_1_ng_template_0_Template(rf, ctx) {
}
function TTSortIcon_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TTSortIcon_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TTSortIcon_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, TTSortIcon_span_1_1_Template, 1, 0, null, 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.tt.sortIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c8, ctx_r0.sortOrder));
  }
}
var _c31 = (a0, a1) => ({
  "p-checkbox-focused": a0,
  "p-variant-filled": a1
});
var _c32 = (a0, a1, a2, a3) => ({
  "p-checkbox-box": true,
  "p-highlight": a0,
  "p-focus": a1,
  "p-indeterminate": a2,
  "p-disabled": a3
});
var _c33 = (a0, a1) => ({
  $implicit: a0,
  partialSelected: a1
});
function TTCheckbox_ng_container_5_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon", 7);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
  }
}
function TTCheckbox_ng_container_5_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "MinusIcon", 7);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
  }
}
function TTCheckbox_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TTCheckbox_ng_container_5_CheckIcon_1_Template, 1, 1, "CheckIcon", 6)(2, TTCheckbox_ng_container_5_MinusIcon_2_Template, 1, 1, "MinusIcon", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.checked);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.partialChecked);
  }
}
function TTCheckbox_span_6_1_ng_template_0_Template(rf, ctx) {
}
function TTCheckbox_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TTCheckbox_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TTCheckbox_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, TTCheckbox_span_6_1_Template, 1, 0, null, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.tt.checkboxIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c33, ctx_r1.checked, ctx_r1.partialChecked));
  }
}
var _c34 = ["box"];
var _c35 = (a0) => ({
  "p-checkbox-focused": a0
});
var _c36 = (a0, a1, a2) => ({
  "p-checkbox-box": true,
  "p-highlight": a0,
  "p-focus": a1,
  "p-disabled": a2
});
function TTHeaderCheckbox_ng_container_6_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon", 9);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
  }
}
function TTHeaderCheckbox_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TTHeaderCheckbox_ng_container_6_CheckIcon_1_Template, 1, 1, "CheckIcon", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.checked);
  }
}
function TTHeaderCheckbox_span_7_1_ng_template_0_Template(rf, ctx) {
}
function TTHeaderCheckbox_span_7_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TTHeaderCheckbox_span_7_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TTHeaderCheckbox_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtemplate(1, TTHeaderCheckbox_span_7_1_Template, 1, 0, null, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.tt.headerCheckboxIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c8, ctx_r2.checked));
  }
}
function TreeTableCellEditor_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTableCellEditor_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TreeTableCellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.inputTemplate);
  }
}
function TreeTableCellEditor_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TreeTableCellEditor_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TreeTableCellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.outputTemplate);
  }
}
var _c37 = (a0, a1) => ({
  visibility: a0,
  "margin-left": a1
});
function TreeTableToggler_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true);
  }
}
function TreeTableToggler_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true);
  }
}
function TreeTableToggler_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TreeTableToggler_ng_container_1_ChevronDownIcon_1_Template, 1, 1, "ChevronDownIcon", 1)(2, TreeTableToggler_ng_container_1_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.rowNode.node.expanded);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.rowNode.node.expanded);
  }
}
function TreeTableToggler_2_ng_template_0_Template(rf, ctx) {
}
function TreeTableToggler_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TreeTableToggler_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var TreeTableService = class _TreeTableService {
  sortSource = new Subject();
  selectionSource = new Subject();
  contextMenuSource = new Subject();
  uiUpdateSource = new Subject();
  totalRecordsSource = new Subject();
  sortSource$ = this.sortSource.asObservable();
  selectionSource$ = this.selectionSource.asObservable();
  contextMenuSource$ = this.contextMenuSource.asObservable();
  uiUpdateSource$ = this.uiUpdateSource.asObservable();
  totalRecordsSource$ = this.totalRecordsSource.asObservable();
  onSort(sortMeta) {
    this.sortSource.next(sortMeta);
  }
  onSelectionChange() {
    this.selectionSource.next(null);
  }
  onContextMenu(node) {
    this.contextMenuSource.next(node);
  }
  onUIUpdate(value) {
    this.uiUpdateSource.next(value);
  }
  onTotalRecordsChange(value) {
    this.totalRecordsSource.next(value);
  }
  static ɵfac = function TreeTableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeTableService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TreeTableService,
    factory: _TreeTableService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeTableService, [{
    type: Injectable
  }], null, null);
})();
var TreeTable = class _TreeTable {
  document;
  renderer;
  el;
  cd;
  zone;
  tableService;
  filterService;
  config;
  /**
   * An array of objects to represent dynamic columns.
   * @group Props
   */
  columns;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the table.
   * @group Props
   */
  tableStyle;
  /**
   * Style class of the table.
   * @group Props
   */
  tableStyleClass;
  /**
   * Whether the cell widths scale according to their content or not.
   * @group Props
   */
  autoLayout;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether to call lazy loading on initialization.
   * @group Props
   */
  lazyLoadOnInit = true;
  /**
   * When specified as true, enables the pagination.
   * @group Props
   */
  paginator;
  /**
   * Number of rows to display per page.
   * @group Props
   */
  rows;
  /**
   * Index of the first row to be displayed.
   * @group Props
   */
  first = 0;
  /**
   * Number of page links to display in paginator.
   * @group Props
   */
  pageLinks = 5;
  /**
   * Array of integer/object values to display inside rows per page dropdown of paginator
   * @group Props
   */
  rowsPerPageOptions;
  /**
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShowPaginator = true;
  /**
   * Position of the paginator.
   * @group Props
   */
  paginatorPosition = "bottom";
  /**
   * Custom style class for paginator
   * @group Props
   */
  paginatorStyleClass;
  /**
   * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  paginatorDropdownAppendTo;
  /**
   * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   * @group Props
   */
  currentPageReportTemplate = "{currentPage} of {totalPages}";
  /**
   * Whether to display current page report.
   * @group Props
   */
  showCurrentPageReport;
  /**
   * Whether to display a dropdown to navigate to any page.
   * @group Props
   */
  showJumpToPageDropdown;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   * @group Props
   */
  showFirstLastIcon = true;
  /**
   * Whether to show page links.
   * @group Props
   */
  showPageLinks = true;
  /**
   * Sort order to use when an unsorted column gets sorted by user interaction.
   * @group Props
   */
  defaultSortOrder = 1;
  /**
   * Defines whether sorting works on single column or on multiple columns.
   * @group Props
   */
  sortMode = "single";
  /**
   * When true, resets paginator to first page after sorting.
   * @group Props
   */
  resetPageOnSort = true;
  /**
   * Whether to use the default sorting or a custom one using sortFunction.
   * @group Props
   */
  customSort;
  /**
   * Specifies the selection mode, valid values are "single" and "multiple".
   * @group Props
   */
  selectionMode;
  /**
   * Selected row with a context menu.
   * @group Props
   */
  contextMenuSelection;
  /**
   * Mode of the contet menu selection.
   * @group Props
   */
  contextMenuSelectionMode = "separate";
  /**
   * A property to uniquely identify a record in data.
   * @group Props
   */
  dataKey;
  /**
   * Defines whether metaKey is should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.
   * @group Props
   */
  compareSelectionBy = "deepEquals";
  /**
   * Adds hover effect to rows without the need for selectionMode.
   * @group Props
   */
  rowHover;
  /**
   * Displays a loader to indicate data load is in progress.
   * @group Props
   */
  loading;
  /**
   * The icon to show while indicating data load is in progress.
   * @group Props
   */
  loadingIcon;
  /**
   * Whether to show the loading mask when loading property is true.
   * @group Props
   */
  showLoader = true;
  /**
   * When specifies, enables horizontal and/or vertical scrolling.
   * @group Props
   */
  scrollable;
  /**
   * Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.
   * @group Props
   */
  scrollHeight;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of a row to use in calculations of virtual scrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * The delay (in milliseconds) before triggering the virtual scroll. This determines the time gap between the user's scroll action and the actual rendering of the next set of items in the virtual scroll.
   * @group Props
   */
  virtualScrollDelay = 150;
  /**
   * Width of the frozen columns container.
   * @group Props
   */
  frozenWidth;
  /**
   * An array of objects to represent dynamic columns that are frozen.
   * @group Props
   */
  frozenColumns;
  /**
   * When enabled, columns can be resized using drag and drop.
   * @group Props
   */
  resizableColumns;
  /**
   * Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".
   * @group Props
   */
  columnResizeMode = "fit";
  /**
   * When enabled, columns can be reordered using drag and drop.
   * @group Props
   */
  reorderableColumns;
  /**
   * Local ng-template varilable of a ContextMenu.
   * @group Props
   */
  contextMenu;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
   * @group Props
   */
  rowTrackBy = (index, item) => item;
  /**
   * An array of FilterMetadata objects to provide external filters.
   * @group Props
   */
  filters = {};
  /**
   * An array of fields as string to use in global filtering.
   * @group Props
   */
  globalFilterFields;
  /**
   * Delay in milliseconds before filtering the data.
   * @group Props
   */
  filterDelay = 300;
  /**
   * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
   * @group Props
   */
  filterMode = "lenient";
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Locale to be used in paginator formatting.
   * @group Props
   */
  paginatorLocale;
  /**
   * Number of total records, defaults to length of value when not defined.
   * @group Props
   */
  get totalRecords() {
    return this._totalRecords;
  }
  set totalRecords(val) {
    this._totalRecords = val;
    this.tableService.onTotalRecordsChange(this._totalRecords);
  }
  /**
   * Name of the field to sort data by default.
   * @group Props
   */
  get sortField() {
    return this._sortField;
  }
  set sortField(val) {
    this._sortField = val;
  }
  /**
   * Order to sort when default sorting is enabled.
   * @defaultValue 1
   * @group Props
   */
  get sortOrder() {
    return this._sortOrder;
  }
  set sortOrder(val) {
    this._sortOrder = val;
  }
  /**
   * An array of SortMeta objects to sort the data by default in multiple sort mode.
   * @defaultValue null
   * @group Props
   */
  get multiSortMeta() {
    return this._multiSortMeta;
  }
  set multiSortMeta(val) {
    this._multiSortMeta = val;
  }
  /**
   * Selected row in single mode or an array of values in multiple mode.
   * @defaultValue null
   * @group Props
   */
  get selection() {
    return this._selection;
  }
  set selection(val) {
    this._selection = val;
  }
  /**
   * An array of objects to display.
   * @defaultValue null
   * @group Props
   */
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
  }
  /**
   * Indicates the height of rows to be scrolled.
   * @defaultValue 28
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get virtualRowHeight() {
    return this._virtualRowHeight;
  }
  set virtualRowHeight(val) {
    this._virtualRowHeight = val;
    console.warn("The virtualRowHeight property is deprecated, use virtualScrollItemSize property instead.");
  }
  /**
   * A map of keys to control the selection state.
   * @group Props
   */
  get selectionKeys() {
    return this._selectionKeys;
  }
  set selectionKeys(value) {
    this._selectionKeys = value;
    this.selectionKeysChange.emit(this._selectionKeys);
  }
  /**
   * Callback to invoke on selected node change.
   * @param {TreeTableNode} object - Node instance.
   * @group Emits
   */
  selectionChange = new EventEmitter();
  /**
   * Callback to invoke on context menu selection change.
   * @param {TreeTableNode} object - Node instance.
   * @group Emits
   */
  contextMenuSelectionChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {TreeTableFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when a node is expanded.
   * @param {TreeTableNodeExpandEvent} event - Node expand event.
   * @group Emits
   */
  onNodeExpand = new EventEmitter();
  /**
   * Callback to invoke when a node is collapsed.
   * @param {TreeTableNodeCollapseEvent} event - Node collapse event.
   * @group Emits
   */
  onNodeCollapse = new EventEmitter();
  /**
   * Callback to invoke when pagination occurs.
   * @param {TreeTablePaginatorState} object - Paginator state.
   * @group Emits
   */
  onPage = new EventEmitter();
  /**
   * Callback to invoke when a column gets sorted.
   * @param {Object} Object - Sort data.
   * @group Emits
   */
  onSort = new EventEmitter();
  /**
   * Callback to invoke when paging, sorting or filtering happens in lazy mode.
   * @param {TreeTableLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * An event emitter to invoke on custom sorting, refer to sorting section for details.
   * @param {TreeTableSortEvent} event - Custom sort event.
   * @group Emits
   */
  sortFunction = new EventEmitter();
  /**
   * Callback to invoke when a column is resized.
   * @param {TreeTableColResizeEvent} event - Custom column resize event.
   * @group Emits
   */
  onColResize = new EventEmitter();
  /**
   * Callback to invoke when a column is reordered.
   * @param {TreeTableColumnReorderEvent} event - Custom column reorder.
   * @group Emits
   */
  onColReorder = new EventEmitter();
  /**
   * Callback to invoke when a node is selected.
   * @param {TreeTableNode} object - Node instance.
   * @group Emits
   */
  onNodeSelect = new EventEmitter();
  /**
   * Callback to invoke when a node is unselected.
   * @param {TreeTableNodeUnSelectEvent} event - Custom node unselect event.
   * @group Emits
   */
  onNodeUnselect = new EventEmitter();
  /**
   * Callback to invoke when a node is selected with right click.
   * @param {TreeTableContextMenuSelectEvent} event - Custom context menu select event.
   * @group Emits
   */
  onContextMenuSelect = new EventEmitter();
  /**
   * Callback to invoke when state of header checkbox changes.
   * @param {TreeTableHeaderCheckboxToggleEvent} event - Custom checkbox toggle event.
   * @group Emits
   */
  onHeaderCheckboxToggle = new EventEmitter();
  /**
   * Callback to invoke when a cell switches to edit mode.
   * @param {TreeTableEditEvent} event - Custom edit event.
   * @group Emits
   */
  onEditInit = new EventEmitter();
  /**
   * Callback to invoke when cell edit is completed.
   * @param {TreeTableEditEvent} event - Custom edit event.
   * @group Emits
   */
  onEditComplete = new EventEmitter();
  /**
   * Callback to invoke when cell edit is cancelled with escape key.
   * @param {TreeTableEditEvent} event - Custom edit event.
   * @group Emits
   */
  onEditCancel = new EventEmitter();
  /**
   * Callback to invoke when selectionKeys are changed.
   * @param {Object} object - updated value of the selectionKeys.
   * @group Emits
   */
  selectionKeysChange = new EventEmitter();
  containerViewChild;
  resizeHelperViewChild;
  reorderIndicatorUpViewChild;
  reorderIndicatorDownViewChild;
  tableViewChild;
  scrollableViewChild;
  scrollableFrozenViewChild;
  templates;
  _value = [];
  _virtualRowHeight = 28;
  _selectionKeys;
  serializedValue;
  _totalRecords = 0;
  _multiSortMeta;
  _sortField;
  _sortOrder = 1;
  filteredNodes;
  filterTimeout;
  colGroupTemplate;
  captionTemplate;
  headerTemplate;
  bodyTemplate;
  footerTemplate;
  summaryTemplate;
  emptyMessageTemplate;
  paginatorLeftTemplate;
  paginatorRightTemplate;
  paginatorDropdownItemTemplate;
  frozenHeaderTemplate;
  frozenBodyTemplate;
  frozenFooterTemplate;
  frozenColGroupTemplate;
  loadingIconTemplate;
  reorderIndicatorUpIconTemplate;
  reorderIndicatorDownIconTemplate;
  sortIconTemplate;
  checkboxIconTemplate;
  headerCheckboxIconTemplate;
  togglerIconTemplate;
  paginatorFirstPageLinkIconTemplate;
  paginatorLastPageLinkIconTemplate;
  paginatorPreviousPageLinkIconTemplate;
  paginatorNextPageLinkIconTemplate;
  lastResizerHelperX;
  reorderIconWidth;
  reorderIconHeight;
  draggedColumn;
  dropPosition;
  preventSelectionSetterPropagation;
  _selection;
  selectedKeys = {};
  rowTouched;
  editingCell;
  editingCellData;
  editingCellField;
  editingCellClick;
  documentEditListener;
  initialized;
  toggleRowIndex;
  ngOnInit() {
    if (this.lazy && this.lazyLoadOnInit && !this.virtualScroll) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.initialized = true;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "caption":
          this.captionTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "body":
          this.bodyTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "summary":
          this.summaryTemplate = item.template;
          break;
        case "colgroup":
          this.colGroupTemplate = item.template;
          break;
        case "emptymessage":
          this.emptyMessageTemplate = item.template;
          break;
        case "paginatorleft":
          this.paginatorLeftTemplate = item.template;
          break;
        case "paginatorright":
          this.paginatorRightTemplate = item.template;
          break;
        case "paginatordropdownitem":
          this.paginatorDropdownItemTemplate = item.template;
          break;
        case "frozenheader":
          this.frozenHeaderTemplate = item.template;
          break;
        case "frozenbody":
          this.frozenBodyTemplate = item.template;
          break;
        case "frozenfooter":
          this.frozenFooterTemplate = item.template;
          break;
        case "frozencolgroup":
          this.frozenColGroupTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "reorderindicatorupicon":
          this.reorderIndicatorUpIconTemplate = item.template;
          break;
        case "reorderindicatordownicon":
          this.reorderIndicatorDownIconTemplate = item.template;
          break;
        case "sorticon":
          this.sortIconTemplate = item.template;
          break;
        case "checkboxicon":
          this.checkboxIconTemplate = item.template;
          break;
        case "headercheckboxicon":
          this.headerCheckboxIconTemplate = item.template;
          break;
        case "togglericon":
          this.togglerIconTemplate = item.template;
          break;
        case "paginatorfirstpagelinkicon":
          this.paginatorFirstPageLinkIconTemplate = item.template;
          break;
        case "paginatorlastpagelinkicon":
          this.paginatorLastPageLinkIconTemplate = item.template;
          break;
        case "paginatorpreviouspagelinkicon":
          this.paginatorPreviousPageLinkIconTemplate = item.template;
          break;
        case "paginatornextpagelinkicon":
          this.paginatorNextPageLinkIconTemplate = item.template;
          break;
      }
    });
  }
  constructor(document, renderer, el, cd, zone, tableService, filterService, config) {
    this.document = document;
    this.renderer = renderer;
    this.el = el;
    this.cd = cd;
    this.zone = zone;
    this.tableService = tableService;
    this.filterService = filterService;
    this.config = config;
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.value) {
      this._value = simpleChange.value.currentValue;
      if (!this.lazy) {
        this.totalRecords = this._value ? this._value.length : 0;
        if (this.sortMode == "single" && this.sortField) this.sortSingle();
        else if (this.sortMode == "multiple" && this.multiSortMeta) this.sortMultiple();
        else if (this.hasFilter())
          this._filter();
      }
      this.updateSerializedValue();
      this.tableService.onUIUpdate(this.value);
    }
    if (simpleChange.sortField) {
      this._sortField = simpleChange.sortField.currentValue;
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.sortOrder) {
      this._sortOrder = simpleChange.sortOrder.currentValue;
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.multiSortMeta) {
      this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
      if (this.sortMode === "multiple") {
        this.sortMultiple();
      }
    }
    if (simpleChange.selection) {
      this._selection = simpleChange.selection.currentValue;
      if (!this.preventSelectionSetterPropagation) {
        this.updateselectedKeys();
        this.tableService.onSelectionChange();
      }
      this.preventSelectionSetterPropagation = false;
    }
  }
  updateSerializedValue() {
    this.serializedValue = [];
    if (this.paginator) this.serializePageNodes();
    else this.serializeNodes(null, this.filteredNodes || this.value, 0, true);
  }
  serializeNodes(parent, nodes, level, visible) {
    if (nodes && nodes.length) {
      for (let node of nodes) {
        node.parent = parent;
        const rowNode = {
          node,
          parent,
          level,
          visible: visible && (parent ? parent.expanded : true)
        };
        this.serializedValue.push(rowNode);
        if (rowNode.visible && node.expanded) {
          this.serializeNodes(node, node.children, level + 1, rowNode.visible);
        }
      }
    }
  }
  serializePageNodes() {
    let data = this.filteredNodes || this.value;
    this.serializedValue = [];
    if (data && data.length) {
      const first = this.lazy ? 0 : this.first;
      for (let i = first; i < first + this.rows; i++) {
        let node = data[i];
        if (node) {
          this.serializedValue.push({
            node,
            parent: null,
            level: 0,
            visible: true
          });
          this.serializeNodes(node, node.children, 1, true);
        }
      }
    }
  }
  updateselectedKeys() {
    if (this.dataKey && this._selection) {
      this.selectedKeys = {};
      if (Array.isArray(this._selection)) {
        for (let node of this._selection) {
          this.selectedKeys[String(ObjectUtils.resolveFieldData(node.data, this.dataKey))] = 1;
        }
      } else {
        this.selectedKeys[String(ObjectUtils.resolveFieldData(this._selection.data, this.dataKey))] = 1;
      }
    }
  }
  onPageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
    if (this.lazy) this.onLazyLoad.emit(this.createLazyLoadMetadata());
    else this.serializePageNodes();
    this.onPage.emit({
      first: this.first,
      rows: this.rows
    });
    this.tableService.onUIUpdate(this.value);
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  sort(event) {
    let originalEvent = event.originalEvent;
    if (this.sortMode === "single") {
      this._sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder;
      this._sortField = event.field;
      this.sortSingle();
      if (this.resetPageOnSort && this.scrollable) {
        this.resetScrollTop();
      }
    }
    if (this.sortMode === "multiple") {
      let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      let sortMeta = this.getSortMeta(event.field);
      if (sortMeta) {
        if (!metaKey) {
          this._multiSortMeta = [{
            field: event.field,
            order: sortMeta.order * -1
          }];
          if (this.resetPageOnSort && this.scrollable) {
            this.resetScrollTop();
          }
        } else {
          sortMeta.order = sortMeta.order * -1;
        }
      } else {
        if (!metaKey || !this.multiSortMeta) {
          this._multiSortMeta = [];
          if (this.resetPageOnSort && this.scrollable) {
            this.resetScrollTop();
          }
        }
        this.multiSortMeta.push({
          field: event.field,
          order: this.defaultSortOrder
        });
      }
      this.sortMultiple();
    }
  }
  sortSingle() {
    if (this.sortField && this.sortOrder) {
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        this.sortNodes(this.value);
        if (this.hasFilter()) {
          this._filter();
        }
      }
      let sortMeta = {
        field: this.sortField,
        order: this.sortOrder
      };
      this.onSort.emit(sortMeta);
      this.tableService.onSort(sortMeta);
      this.updateSerializedValue();
    }
  }
  sortNodes(nodes) {
    if (!nodes || nodes.length === 0) {
      return;
    }
    if (this.customSort) {
      this.sortFunction.emit({
        data: nodes,
        mode: this.sortMode,
        field: this.sortField,
        order: this.sortOrder
      });
    } else {
      nodes.sort((node1, node2) => {
        let value1 = ObjectUtils.resolveFieldData(node1.data, this.sortField);
        let value2 = ObjectUtils.resolveFieldData(node2.data, this.sortField);
        let result = null;
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2, void 0, {
          numeric: true
        });
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return this.sortOrder * result;
      });
    }
    for (let node of nodes) {
      this.sortNodes(node.children);
    }
  }
  sortMultiple() {
    if (this.multiSortMeta) {
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        this.sortMultipleNodes(this.value);
        if (this.hasFilter()) {
          this._filter();
        }
      }
      this.onSort.emit({
        multisortmeta: this.multiSortMeta
      });
      this.updateSerializedValue();
      this.tableService.onSort(this.multiSortMeta);
    }
  }
  sortMultipleNodes(nodes) {
    if (!nodes || nodes.length === 0) {
      return;
    }
    if (this.customSort) {
      this.sortFunction.emit({
        data: this.value,
        mode: this.sortMode,
        multiSortMeta: this.multiSortMeta
      });
    } else {
      nodes.sort((node1, node2) => {
        return this.multisortField(node1, node2, this.multiSortMeta, 0);
      });
    }
    for (let node of nodes) {
      this.sortMultipleNodes(node.children);
    }
  }
  multisortField(node1, node2, multiSortMeta, index) {
    if (ObjectUtils.isEmpty(this.multiSortMeta) || ObjectUtils.isEmpty(multiSortMeta[index])) {
      return 0;
    }
    let value1 = ObjectUtils.resolveFieldData(node1.data, multiSortMeta[index].field);
    let value2 = ObjectUtils.resolveFieldData(node2.data, multiSortMeta[index].field);
    let result = null;
    if (value1 == null && value2 != null) result = -1;
    else if (value1 != null && value2 == null) result = 1;
    else if (value1 == null && value2 == null) result = 0;
    if (typeof value1 == "string" || value1 instanceof String) {
      if (value1.localeCompare && value1 != value2) {
        return multiSortMeta[index].order * value1.localeCompare(value2, void 0, {
          numeric: true
        });
      }
    } else {
      result = value1 < value2 ? -1 : 1;
    }
    if (value1 == value2) {
      return multiSortMeta.length - 1 > index ? this.multisortField(node1, node2, multiSortMeta, index + 1) : 0;
    }
    return multiSortMeta[index].order * result;
  }
  getSortMeta(field) {
    if (this.multiSortMeta && this.multiSortMeta.length) {
      for (let i = 0; i < this.multiSortMeta.length; i++) {
        if (this.multiSortMeta[i].field === field) {
          return this.multiSortMeta[i];
        }
      }
    }
    return null;
  }
  isSorted(field) {
    if (this.sortMode === "single") {
      return this.sortField && this.sortField === field;
    } else if (this.sortMode === "multiple") {
      let sorted = false;
      if (this.multiSortMeta) {
        for (let i = 0; i < this.multiSortMeta.length; i++) {
          if (this.multiSortMeta[i].field == field) {
            sorted = true;
            break;
          }
        }
      }
      return sorted;
    }
  }
  createLazyLoadMetadata() {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder,
      filters: this.filters,
      globalFilter: this.filters && this.filters["global"] ? this.filters["global"].value : null,
      multiSortMeta: this.multiSortMeta,
      forceUpdate: () => this.cd.detectChanges()
    };
  }
  onLazyItemLoad(event) {
    this.onLazyLoad.emit(__spreadProps(__spreadValues(__spreadValues({}, this.createLazyLoadMetadata()), event), {
      rows: event.last - event.first
    }));
  }
  /**
   * Resets scroll to top.
   * @group Method
   */
  resetScrollTop() {
    if (this.virtualScroll) this.scrollToVirtualIndex(0);
    else this.scrollTo({
      top: 0
    });
  }
  /**
   * Scrolls to given index when using virtual scroll.
   * @param {number} index - index of the element.
   * @group Method
   */
  scrollToVirtualIndex(index) {
    if (this.scrollableViewChild) {
      this.scrollableViewChild.scrollToVirtualIndex(index);
    }
    if (this.scrollableFrozenViewChild) {
      this.scrollableViewChild.scrollToVirtualIndex(index);
    }
  }
  /**
   * Scrolls to given index.
   * @param {ScrollToOptions} options - Scroll options.
   * @group Method
   */
  scrollTo(options) {
    if (this.scrollableViewChild) {
      this.scrollableViewChild.scrollTo(options);
    }
    if (this.scrollableFrozenViewChild) {
      this.scrollableViewChild.scrollTo(options);
    }
  }
  isEmpty() {
    let data = this.filteredNodes || this.value;
    return data == null || data.length == 0;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  onColumnResizeBegin(event) {
    let containerLeft = DomHandler.getOffset(this.containerViewChild?.nativeElement).left;
    this.lastResizerHelperX = event.pageX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft;
    event.preventDefault();
  }
  onColumnResize(event) {
    let containerLeft = DomHandler.getOffset(this.containerViewChild?.nativeElement).left;
    DomHandler.addClass(this.containerViewChild?.nativeElement, "p-unselectable-text");
    this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild?.nativeElement.offsetHeight + "px";
    this.resizeHelperViewChild.nativeElement.style.top = "0px";
    this.resizeHelperViewChild.nativeElement.style.left = event.pageX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft + "px";
    this.resizeHelperViewChild.nativeElement.style.display = "block";
  }
  onColumnResizeEnd(event, column) {
    let delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
    let columnWidth = column.offsetWidth;
    let newColumnWidth = columnWidth + delta;
    let minWidth = column.style.minWidth || 15;
    if (columnWidth + delta > parseInt(minWidth)) {
      if (this.columnResizeMode === "fit") {
        let nextColumn = column.nextElementSibling;
        while (!nextColumn.offsetParent) {
          nextColumn = nextColumn.nextElementSibling;
        }
        if (nextColumn) {
          let nextColumnWidth = nextColumn.offsetWidth - delta;
          let nextColumnMinWidth = nextColumn.style.minWidth || 15;
          if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
            if (this.scrollable) {
              let scrollableView = this.findParentScrollableView(column);
              let scrollableBodyTable = DomHandler.findSingle(scrollableView, ".p-treetable-scrollable-body table") || DomHandler.findSingle(scrollableView, ".p-scroller-viewport table");
              let scrollableHeaderTable = DomHandler.findSingle(scrollableView, "table.p-treetable-scrollable-header-table");
              let scrollableFooterTable = DomHandler.findSingle(scrollableView, "table.p-treetable-scrollable-footer-table");
              let resizeColumnIndex = DomHandler.index(column);
              this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
              this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
              this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
            } else {
              column.style.width = newColumnWidth + "px";
              if (nextColumn) {
                nextColumn.style.width = nextColumnWidth + "px";
              }
            }
          }
        }
      } else if (this.columnResizeMode === "expand") {
        if (this.scrollable) {
          let scrollableView = this.findParentScrollableView(column);
          let scrollableBody = DomHandler.findSingle(scrollableView, ".p-treetable-scrollable-body") || DomHandler.findSingle(scrollableView, ".p-scroller-viewport");
          let scrollableHeader = DomHandler.findSingle(scrollableView, ".p-treetable-scrollable-header");
          let scrollableFooter = DomHandler.findSingle(scrollableView, ".p-treetable-scrollable-footer");
          let scrollableBodyTable = DomHandler.findSingle(scrollableView, ".p-treetable-scrollable-body table") || DomHandler.findSingle(scrollableView, ".p-scroller-viewport table");
          let scrollableHeaderTable = DomHandler.findSingle(scrollableView, "table.p-treetable-scrollable-header-table");
          let scrollableFooterTable = DomHandler.findSingle(scrollableView, "table.p-treetable-scrollable-footer-table");
          let resizeColumnIndex = DomHandler.index(column);
          const scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
          const scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
          const isContainerInViewport = this.containerViewChild?.nativeElement.offsetWidth >= scrollableBodyTableWidth;
          let setWidth = (container, table, width, isContainerInViewport2) => {
            if (container && table) {
              container.style.width = isContainerInViewport2 ? width + DomHandler.calculateScrollbarWidth(scrollableBody) + "px" : "auto";
              table.style.width = width + "px";
            }
          };
          setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
          setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
          setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);
          this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
          this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
          this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
        } else {
          this.tableViewChild.nativeElement.style.width = this.tableViewChild?.nativeElement.offsetWidth + delta + "px";
          column.style.width = newColumnWidth + "px";
          let containerWidth = this.tableViewChild?.nativeElement.style.width;
          this.containerViewChild.nativeElement.style.width = containerWidth + "px";
        }
      }
      this.onColResize.emit({
        element: column,
        delta
      });
    }
    this.resizeHelperViewChild.nativeElement.style.display = "none";
    DomHandler.removeClass(this.containerViewChild?.nativeElement, "p-unselectable-text");
  }
  findParentScrollableView(column) {
    if (column) {
      let parent = column.parentElement;
      while (parent && !DomHandler.hasClass(parent, "p-treetable-scrollable-view")) {
        parent = parent.parentElement;
      }
      return parent;
    } else {
      return null;
    }
  }
  resizeColGroup(table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
    if (table) {
      let colGroup = table.children[0].nodeName === "COLGROUP" ? table.children[0] : null;
      if (colGroup) {
        let col = colGroup.children[resizeColumnIndex];
        let nextCol = col.nextElementSibling;
        col.style.width = newColumnWidth + "px";
        if (nextCol && nextColumnWidth) {
          nextCol.style.width = nextColumnWidth + "px";
        }
      } else {
        throw "Scrollable tables require a colgroup to support resizable columns";
      }
    }
  }
  onColumnDragStart(event, columnElement) {
    this.reorderIconWidth = DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild?.nativeElement);
    this.reorderIconHeight = DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild?.nativeElement);
    this.draggedColumn = columnElement;
    event.dataTransfer.setData("text", "b");
  }
  onColumnDragEnter(event, dropHeader) {
    if (this.reorderableColumns && this.draggedColumn && dropHeader) {
      event.preventDefault();
      let containerOffset = DomHandler.getOffset(this.containerViewChild?.nativeElement);
      let dropHeaderOffset = DomHandler.getOffset(dropHeader);
      if (this.draggedColumn != dropHeader) {
        let targetLeft = dropHeaderOffset.left - containerOffset.left;
        let targetTop = containerOffset.top - dropHeaderOffset.top;
        let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
        this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + "px";
        this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + "px";
        if (event.pageX > columnCenter) {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.dropPosition = 1;
        } else {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.dropPosition = -1;
        }
        this.reorderIndicatorUpViewChild.nativeElement.style.display = "block";
        this.reorderIndicatorDownViewChild.nativeElement.style.display = "block";
      } else {
        event.dataTransfer.dropEffect = "none";
      }
    }
  }
  onColumnDragLeave(event) {
    if (this.reorderableColumns && this.draggedColumn) {
      event.preventDefault();
      this.reorderIndicatorUpViewChild.nativeElement.style.display = "none";
      this.reorderIndicatorDownViewChild.nativeElement.style.display = "none";
    }
  }
  onColumnDrop(event, dropColumn) {
    event.preventDefault();
    if (this.draggedColumn) {
      let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, "ttreorderablecolumn");
      let dropIndex = DomHandler.indexWithinGroup(dropColumn, "ttreorderablecolumn");
      let allowDrop = dragIndex != dropIndex;
      if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) {
        allowDrop = false;
      }
      if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
        dropIndex = dropIndex + 1;
      }
      if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
        dropIndex = dropIndex - 1;
      }
      if (allowDrop) {
        ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
        this.onColReorder.emit({
          dragIndex,
          dropIndex,
          columns: this.columns
        });
      }
      this.reorderIndicatorUpViewChild.nativeElement.style.display = "none";
      this.reorderIndicatorDownViewChild.nativeElement.style.display = "none";
      this.draggedColumn.draggable = false;
      this.draggedColumn = null;
      this.dropPosition = null;
    }
  }
  handleRowClick(event) {
    let targetNode = event.originalEvent.target.nodeName;
    if (targetNode == "INPUT" || targetNode == "BUTTON" || targetNode == "A" || DomHandler.hasClass(event.originalEvent.target, "p-clickable")) {
      return;
    }
    if (this.selectionMode) {
      this.preventSelectionSetterPropagation = true;
      let rowNode = event.rowNode;
      let selected = this.isSelected(rowNode.node);
      let metaSelection = this.rowTouched ? false : this.metaKeySelection;
      let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowNode.node.data, this.dataKey)) : null;
      if (metaSelection) {
        let keyboardEvent = event.originalEvent;
        let metaKey = keyboardEvent.metaKey || keyboardEvent.ctrlKey;
        if (selected && metaKey) {
          if (this.isSingleSelectionMode()) {
            this._selection = null;
            this.selectedKeys = {};
            this.selectionChange.emit(null);
          } else {
            let selectionIndex = this.findIndexInSelection(rowNode.node);
            this._selection = this.selection.filter((val, i) => i != selectionIndex);
            this.selectionChange.emit(this.selection);
            if (dataKeyValue) {
              delete this.selectedKeys[dataKeyValue];
            }
          }
          this.onNodeUnselect.emit({
            originalEvent: event.originalEvent,
            node: rowNode.node,
            type: "row"
          });
        } else {
          if (this.isSingleSelectionMode()) {
            this._selection = rowNode.node;
            this.selectionChange.emit(rowNode.node);
            if (dataKeyValue) {
              this.selectedKeys = {};
              this.selectedKeys[dataKeyValue] = 1;
            }
          } else if (this.isMultipleSelectionMode()) {
            if (metaKey) {
              this._selection = this.selection || [];
            } else {
              this._selection = [];
              this.selectedKeys = {};
            }
            this._selection = [...this.selection, rowNode.node];
            this.selectionChange.emit(this.selection);
            if (dataKeyValue) {
              this.selectedKeys[dataKeyValue] = 1;
            }
          }
          this.onNodeSelect.emit({
            originalEvent: event.originalEvent,
            node: rowNode.node,
            type: "row",
            index: event.rowIndex
          });
        }
      } else {
        if (this.selectionMode === "single") {
          if (selected) {
            this._selection = null;
            this.selectedKeys = {};
            this.selectionChange.emit(this.selection);
            this.onNodeUnselect.emit({
              originalEvent: event.originalEvent,
              node: rowNode.node,
              type: "row"
            });
          } else {
            this._selection = rowNode.node;
            this.selectionChange.emit(this.selection);
            this.onNodeSelect.emit({
              originalEvent: event.originalEvent,
              node: rowNode.node,
              type: "row",
              index: event.rowIndex
            });
            if (dataKeyValue) {
              this.selectedKeys = {};
              this.selectedKeys[dataKeyValue] = 1;
            }
          }
        } else if (this.selectionMode === "multiple") {
          if (selected) {
            let selectionIndex = this.findIndexInSelection(rowNode.node);
            this._selection = this.selection.filter((val, i) => i != selectionIndex);
            this.selectionChange.emit(this.selection);
            this.onNodeUnselect.emit({
              originalEvent: event.originalEvent,
              node: rowNode.node,
              type: "row"
            });
            if (dataKeyValue) {
              delete this.selectedKeys[dataKeyValue];
            }
          } else {
            this._selection = this.selection ? [...this.selection, rowNode.node] : [rowNode.node];
            this.selectionChange.emit(this.selection);
            this.onNodeSelect.emit({
              originalEvent: event.originalEvent,
              node: rowNode.node,
              type: "row",
              index: event.rowIndex
            });
            if (dataKeyValue) {
              this.selectedKeys[dataKeyValue] = 1;
            }
          }
        }
      }
      this.tableService.onSelectionChange();
    }
    this.rowTouched = false;
  }
  handleRowTouchEnd(event) {
    this.rowTouched = true;
  }
  handleRowRightClick(event) {
    if (this.contextMenu) {
      const node = event.rowNode.node;
      if (this.contextMenuSelectionMode === "separate") {
        this.contextMenuSelection = node;
        this.contextMenuSelectionChange.emit(node);
        this.onContextMenuSelect.emit({
          originalEvent: event.originalEvent,
          node
        });
        this.contextMenu.show(event.originalEvent);
        this.tableService.onContextMenu(node);
      } else if (this.contextMenuSelectionMode === "joint") {
        this.preventSelectionSetterPropagation = true;
        let selected = this.isSelected(node);
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
        if (!selected) {
          if (this.isSingleSelectionMode()) {
            this.selection = node;
            this.selectionChange.emit(node);
          } else if (this.isMultipleSelectionMode()) {
            this.selection = [node];
            this.selectionChange.emit(this.selection);
          }
          if (dataKeyValue) {
            this.selectedKeys[dataKeyValue] = 1;
          }
        }
        this.contextMenu.show(event.originalEvent);
        this.onContextMenuSelect.emit({
          originalEvent: event.originalEvent,
          node
        });
      }
    }
  }
  toggleNodeWithCheckbox(event) {
    this.selection = this.selection || [];
    this.preventSelectionSetterPropagation = true;
    let node = event.rowNode.node;
    let selected = this.isSelected(node);
    if (selected) {
      this.propagateSelectionDown(node, false);
      if (event.rowNode.parent) {
        this.propagateSelectionUp(node.parent, false);
      }
      this.selectionChange.emit(this.selection);
      this.onNodeUnselect.emit({
        originalEvent: event,
        node
      });
    } else {
      this.propagateSelectionDown(node, true);
      if (event.rowNode.parent) {
        this.propagateSelectionUp(node.parent, true);
      }
      this.selectionChange.emit(this.selection);
      this.onNodeSelect.emit({
        originalEvent: event,
        node
      });
    }
    this.tableService.onSelectionChange();
  }
  toggleNodesWithCheckbox(event, check) {
    let data = this.filteredNodes || this.value;
    this._selection = check && data ? data.slice() : [];
    this.toggleAll(check);
    if (!check) {
      this._selection = [];
      this.selectedKeys = {};
    }
    this.preventSelectionSetterPropagation = true;
    this.selectionChange.emit(this._selection);
    this.tableService.onSelectionChange();
    this.onHeaderCheckboxToggle.emit({
      originalEvent: event,
      checked: check
    });
  }
  toggleAll(checked) {
    let data = this.filteredNodes || this.value;
    if (!this.selectionKeys) {
      if (data && data.length) {
        for (let node of data) {
          this.propagateSelectionDown(node, checked);
        }
      }
    } else {
      if (data && data.length) {
        for (let node of data) {
          this.propagateDown(node, checked);
        }
        this.selectionKeysChange.emit(this.selectionKeys);
      }
    }
  }
  propagateSelectionUp(node, select) {
    if (node.children && node.children.length) {
      let selectedChildCount = 0;
      let childPartialSelected = false;
      let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
      for (let child of node.children) {
        if (this.isSelected(child)) selectedChildCount++;
        else if (child.partialSelected) childPartialSelected = true;
      }
      if (select && selectedChildCount == node.children.length) {
        this._selection = [...this.selection || [], node];
        node.partialSelected = false;
        if (dataKeyValue) {
          this.selectedKeys[dataKeyValue] = 1;
        }
      } else {
        if (!select) {
          let index = this.findIndexInSelection(node);
          if (index >= 0) {
            this._selection = this.selection.filter((val, i) => i != index);
            if (dataKeyValue) {
              delete this.selectedKeys[dataKeyValue];
            }
          }
        }
        if (childPartialSelected || selectedChildCount > 0 && selectedChildCount != node.children.length) node.partialSelected = true;
        else node.partialSelected = false;
      }
    }
    let parent = node.parent;
    node.checked = select;
    if (parent) {
      this.propagateSelectionUp(parent, select);
    }
  }
  propagateSelectionDown(node, select) {
    let index = this.findIndexInSelection(node);
    let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
    if (select && index == -1) {
      this._selection = [...this.selection || [], node];
      if (dataKeyValue) {
        this.selectedKeys[dataKeyValue] = 1;
      }
    } else if (!select && index > -1) {
      this._selection = this.selection.filter((val, i) => i != index);
      if (dataKeyValue) {
        delete this.selectedKeys[dataKeyValue];
      }
    }
    node.partialSelected = false;
    node.checked = select;
    if (node.children && node.children.length) {
      for (let child of node.children) {
        this.propagateSelectionDown(child, select);
      }
    }
  }
  isSelected(node) {
    if (node && this.selection) {
      if (this.dataKey) {
        if (node.hasOwnProperty("checked")) {
          return node["checked"];
        } else {
          return this.selectedKeys[ObjectUtils.resolveFieldData(node.data, this.dataKey)] !== void 0;
        }
      } else {
        if (Array.isArray(this.selection)) return this.findIndexInSelection(node) > -1;
        else return this.equals(node, this.selection);
      }
    }
    return false;
  }
  isNodeSelected(node) {
    return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.nodeKey(node)]?.checked === true : false;
  }
  isNodePartialSelected(node) {
    return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.nodeKey(node)]?.partialChecked === true : false;
  }
  nodeKey(node) {
    return ObjectUtils.resolveFieldData(node, this.dataKey) || ObjectUtils.resolveFieldData(node?.data, this.dataKey);
  }
  toggleCheckbox(event) {
    let {
      rowNode,
      check,
      originalEvent
    } = event;
    let node = rowNode.node;
    if (this.selectionKeys) {
      this.propagateDown(node, check);
      if (node.parent) {
        this.propagateUp(node.parent, check);
      }
      this.selectionKeysChange.emit(this.selectionKeys);
    } else {
      this.toggleNodeWithCheckbox({
        originalEvent,
        rowNode
      });
    }
    this.tableService.onSelectionChange();
  }
  propagateDown(node, check) {
    if (check) {
      this.selectionKeys[this.nodeKey(node)] = {
        checked: true,
        partialChecked: false
      };
    } else {
      delete this.selectionKeys[this.nodeKey(node)];
    }
    if (node.children && node.children.length) {
      for (let child of node.children) {
        this.propagateDown(child, check);
      }
    }
  }
  propagateUp(node, check) {
    let checkedChildCount = 0;
    let childPartialSelected = false;
    for (let child of node.children) {
      if (this.selectionKeys[this.nodeKey(child)] && this.selectionKeys[this.nodeKey(child)].checked) checkedChildCount++;
      else if (this.selectionKeys[this.nodeKey(child)] && this.selectionKeys[this.nodeKey(child)].partialChecked) childPartialSelected = true;
    }
    if (check && checkedChildCount === node.children.length) {
      this.selectionKeys[this.nodeKey(node)] = {
        checked: true,
        partialChecked: false
      };
    } else {
      if (!check) {
        delete this.selectionKeys[this.nodeKey(node)];
      }
      if (childPartialSelected || checkedChildCount > 0 && checkedChildCount !== node.children.length) this.selectionKeys[this.nodeKey(node)] = {
        checked: false,
        partialChecked: true
      };
      else this.selectionKeys[this.nodeKey(node)] = {
        checked: false,
        partialChecked: false
      };
    }
    let parent = node.parent;
    if (parent) {
      this.propagateUp(parent, check);
    }
  }
  findIndexInSelection(node) {
    let index = -1;
    if (this.selection && this.selection.length) {
      for (let i = 0; i < this.selection.length; i++) {
        if (this.equals(node, this.selection[i])) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  isSingleSelectionMode() {
    return this.selectionMode === "single";
  }
  isMultipleSelectionMode() {
    return this.selectionMode === "multiple";
  }
  equals(node1, node2) {
    return this.compareSelectionBy === "equals" ? ObjectUtils.equals(node1, node2) : ObjectUtils.equals(node1.data, node2.data, this.dataKey);
  }
  filter(value, field, matchMode) {
    if (this.filterTimeout) {
      clearTimeout(this.filterTimeout);
    }
    if (!this.isFilterBlank(value)) {
      this.filters[field] = {
        value,
        matchMode
      };
    } else if (this.filters[field]) {
      delete this.filters[field];
    }
    this.filterTimeout = setTimeout(() => {
      this._filter();
      this.filterTimeout = null;
    }, this.filterDelay);
  }
  filterGlobal(value, matchMode) {
    this.filter(value, "global", matchMode);
  }
  isFilterBlank(filter) {
    if (filter !== null && filter !== void 0) {
      if (typeof filter === "string" && filter.trim().length == 0 || Array.isArray(filter) && filter.length == 0) return true;
      else return false;
    }
    return true;
  }
  _filter() {
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      if (!this.value) {
        return;
      }
      if (!this.hasFilter()) {
        this.filteredNodes = null;
        if (this.paginator) {
          this.totalRecords = this.value ? this.value.length : 0;
        }
      } else {
        let globalFilterFieldsArray;
        if (this.filters["global"]) {
          if (!this.columns && !this.globalFilterFields) throw new Error("Global filtering requires dynamic columns or globalFilterFields to be defined.");
          else globalFilterFieldsArray = this.globalFilterFields || this.columns;
        }
        this.filteredNodes = [];
        const isStrictMode = this.filterMode === "strict";
        let isValueChanged = false;
        for (let node of this.value) {
          let copyNode = __spreadValues({}, node);
          let localMatch = true;
          let globalMatch = false;
          let paramsWithoutNode;
          for (let prop in this.filters) {
            if (this.filters.hasOwnProperty(prop) && prop !== "global") {
              let filterMeta = this.filters[prop];
              let filterField = prop;
              let filterValue = filterMeta.value;
              let filterMatchMode = filterMeta.matchMode || "startsWith";
              let filterConstraint = this.filterService.filters[filterMatchMode];
              paramsWithoutNode = {
                filterField,
                filterValue,
                filterConstraint,
                isStrictMode
              };
              if (isStrictMode && !(this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && !(this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
                localMatch = false;
              }
              if (!localMatch) {
                break;
              }
            }
          }
          if (this.filters["global"] && !globalMatch && globalFilterFieldsArray) {
            let copyNodeForGlobal = __spreadValues({}, copyNode);
            let filterField = void 0;
            let filterValue = this.filters["global"].value;
            let filterConstraint = this.filterService.filters[this.filters["global"].matchMode];
            paramsWithoutNode = {
              filterField,
              filterValue,
              filterConstraint,
              isStrictMode,
              globalFilterFieldsArray
            };
            if (isStrictMode && (this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode) || this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode)) || !isStrictMode && (this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode) || this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode))) {
              globalMatch = true;
              copyNode = copyNodeForGlobal;
            }
          }
          let matches = localMatch;
          if (this.filters["global"]) {
            matches = localMatch && globalMatch;
          }
          if (matches) {
            this.filteredNodes.push(copyNode);
          }
          isValueChanged = isValueChanged || !localMatch || globalMatch || localMatch && this.filteredNodes.length > 0 || !globalMatch && this.filteredNodes.length === 0;
        }
        if (!isValueChanged) {
          this.filteredNodes = null;
        }
        if (this.paginator) {
          this.totalRecords = this.filteredNodes ? this.filteredNodes.length : this.value ? this.value.length : 0;
        }
      }
      this.cd.markForCheck();
    }
    this.first = 0;
    const filteredValue = this.filteredNodes || this.value;
    this.onFilter.emit({
      filters: this.filters,
      filteredValue
    });
    this.tableService.onUIUpdate(filteredValue);
    this.updateSerializedValue();
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  findFilteredNodes(node, paramsWithoutNode) {
    if (node) {
      let matched = false;
      if (node.children) {
        let childNodes = [...node.children];
        node.children = [];
        for (let childNode of childNodes) {
          let copyChildNode = __spreadValues({}, childNode);
          if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
            matched = true;
            node.children.push(copyChildNode);
          }
        }
      }
      if (matched) {
        return true;
      }
    }
  }
  isFilterMatched(node, filterOptions) {
    let {
      filterField,
      filterValue,
      filterConstraint,
      isStrictMode,
      globalFilterFieldsArray
    } = filterOptions;
    let matched = false;
    const isMatched = (field) => filterConstraint(ObjectUtils.resolveFieldData(node.data, field), filterValue, this.filterLocale);
    matched = globalFilterFieldsArray?.length ? globalFilterFieldsArray.some((globalFilterField) => isMatched(globalFilterField.field || globalFilterField)) : isMatched(filterField);
    if (!matched || isStrictMode && !this.isNodeLeaf(node)) {
      matched = this.findFilteredNodes(node, {
        filterField,
        filterValue,
        filterConstraint,
        isStrictMode,
        globalFilterFieldsArray
      }) || matched;
    }
    return matched;
  }
  isNodeLeaf(node) {
    return node.leaf === false ? false : !(node.children && node.children.length);
  }
  hasFilter() {
    let empty = true;
    for (let prop in this.filters) {
      if (this.filters.hasOwnProperty(prop)) {
        empty = false;
        break;
      }
    }
    return !empty;
  }
  /**
   * Clears the sort and paginator state.
   * @group Method
   */
  reset() {
    this._sortField = null;
    this._sortOrder = 1;
    this._multiSortMeta = null;
    this.tableService.onSort(null);
    this.filteredNodes = null;
    this.filters = {};
    this.first = 0;
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      this.totalRecords = this._value ? this._value.length : 0;
    }
  }
  updateEditingCell(cell, data, field) {
    this.editingCell = cell;
    this.editingCellData = data;
    this.editingCellField = field;
    this.bindDocumentEditListener();
  }
  isEditingCellValid() {
    return this.editingCell && DomHandler.find(this.editingCell, ".ng-invalid.ng-dirty").length === 0;
  }
  bindDocumentEditListener() {
    if (!this.documentEditListener) {
      this.documentEditListener = this.renderer.listen(this.document, "click", (event) => {
        if (this.editingCell && !this.editingCellClick && this.isEditingCellValid()) {
          DomHandler.removeClass(this.editingCell, "p-cell-editing");
          this.editingCell = null;
          this.onEditComplete.emit({
            field: this.editingCellField,
            data: this.editingCellData
          });
          this.editingCellField = null;
          this.editingCellData = null;
          this.unbindDocumentEditListener();
        }
        this.editingCellClick = false;
      });
    }
  }
  unbindDocumentEditListener() {
    if (this.documentEditListener) {
      this.documentEditListener();
      this.documentEditListener = null;
    }
  }
  ngOnDestroy() {
    this.unbindDocumentEditListener();
    this.editingCell = null;
    this.editingCellField = null;
    this.editingCellData = null;
    this.initialized = null;
  }
  static ɵfac = function TreeTable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeTable)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(TreeTableService), ɵɵdirectiveInject(FilterService), ɵɵdirectiveInject(PrimeNGConfig));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TreeTable,
    selectors: [["p-treeTable"]],
    contentQueries: function TreeTable_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TreeTable_Query(rf, ctx) {
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
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeHelperViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.reorderIndicatorUpViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.reorderIndicatorDownViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollableViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollableFrozenViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      columns: "columns",
      style: "style",
      styleClass: "styleClass",
      tableStyle: "tableStyle",
      tableStyleClass: "tableStyleClass",
      autoLayout: [2, "autoLayout", "autoLayout", booleanAttribute],
      lazy: [2, "lazy", "lazy", booleanAttribute],
      lazyLoadOnInit: [2, "lazyLoadOnInit", "lazyLoadOnInit", booleanAttribute],
      paginator: [2, "paginator", "paginator", booleanAttribute],
      rows: [2, "rows", "rows", numberAttribute],
      first: [2, "first", "first", numberAttribute],
      pageLinks: [2, "pageLinks", "pageLinks", numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      alwaysShowPaginator: [2, "alwaysShowPaginator", "alwaysShowPaginator", booleanAttribute],
      paginatorPosition: "paginatorPosition",
      paginatorStyleClass: "paginatorStyleClass",
      paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", booleanAttribute],
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", booleanAttribute],
      showPageLinks: [2, "showPageLinks", "showPageLinks", booleanAttribute],
      defaultSortOrder: [2, "defaultSortOrder", "defaultSortOrder", numberAttribute],
      sortMode: "sortMode",
      resetPageOnSort: [2, "resetPageOnSort", "resetPageOnSort", booleanAttribute],
      customSort: [2, "customSort", "customSort", booleanAttribute],
      selectionMode: "selectionMode",
      contextMenuSelection: "contextMenuSelection",
      contextMenuSelectionMode: "contextMenuSelectionMode",
      dataKey: "dataKey",
      metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
      compareSelectionBy: "compareSelectionBy",
      rowHover: [2, "rowHover", "rowHover", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      showLoader: [2, "showLoader", "showLoader", booleanAttribute],
      scrollable: [2, "scrollable", "scrollable", booleanAttribute],
      scrollHeight: "scrollHeight",
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      virtualScrollDelay: [2, "virtualScrollDelay", "virtualScrollDelay", numberAttribute],
      frozenWidth: "frozenWidth",
      frozenColumns: "frozenColumns",
      resizableColumns: [2, "resizableColumns", "resizableColumns", booleanAttribute],
      columnResizeMode: "columnResizeMode",
      reorderableColumns: [2, "reorderableColumns", "reorderableColumns", booleanAttribute],
      contextMenu: "contextMenu",
      rowTrackBy: "rowTrackBy",
      filters: "filters",
      globalFilterFields: "globalFilterFields",
      filterDelay: [2, "filterDelay", "filterDelay", numberAttribute],
      filterMode: "filterMode",
      filterLocale: "filterLocale",
      paginatorLocale: "paginatorLocale",
      totalRecords: "totalRecords",
      sortField: "sortField",
      sortOrder: "sortOrder",
      multiSortMeta: "multiSortMeta",
      selection: "selection",
      value: "value",
      virtualRowHeight: "virtualRowHeight",
      selectionKeys: "selectionKeys"
    },
    outputs: {
      selectionChange: "selectionChange",
      contextMenuSelectionChange: "contextMenuSelectionChange",
      onFilter: "onFilter",
      onNodeExpand: "onNodeExpand",
      onNodeCollapse: "onNodeCollapse",
      onPage: "onPage",
      onSort: "onSort",
      onLazyLoad: "onLazyLoad",
      sortFunction: "sortFunction",
      onColResize: "onColResize",
      onColReorder: "onColReorder",
      onNodeSelect: "onNodeSelect",
      onNodeUnselect: "onNodeUnselect",
      onContextMenuSelect: "onContextMenuSelect",
      onHeaderCheckboxToggle: "onHeaderCheckboxToggle",
      onEditInit: "onEditInit",
      onEditComplete: "onEditComplete",
      onEditCancel: "onEditCancel",
      selectionKeysChange: "selectionKeysChange"
    },
    features: [ɵɵProvidersFeature([TreeTableService]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
    decls: 12,
    vars: 20,
    consts: [["container", ""], ["table", ""], ["scrollableView", ""], ["scrollableFrozenView", ""], ["resizeHelper", ""], ["reorderIndicatorUp", ""], ["reorderIndicatorDown", ""], ["data-scrollselectors", ".p-treetable-scrollable-body", 3, "ngStyle", "ngClass"], ["class", "p-treetable-loading", 4, "ngIf"], ["class", "p-treetable-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "locale", "onPageChange", 4, "ngIf"], ["class", "p-treetable-wrapper", 4, "ngIf"], ["class", "p-treetable-scrollable-wrapper", 4, "ngIf"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "locale", "onPageChange", 4, "ngIf"], ["class", "p-treetable-footer", 4, "ngIf"], ["class", "p-column-resizer-helper", 3, "ngStyle", 4, "ngIf"], ["class", "p-treetable-reorder-indicator-up", 3, "ngStyle", 4, "ngIf"], ["class", "p-treetable-reorder-indicator-down", 3, "ngStyle", 4, "ngIf"], [1, "p-treetable-loading"], [1, "p-treetable-loading-overlay", "p-component-overlay"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], ["class", "p-treetable-loading-icon", 4, "ngIf"], [3, "spin", "styleClass"], [1, "p-treetable-loading-icon"], [4, "ngTemplateOutlet"], [1, "p-treetable-header"], ["styleClass", "p-paginator-top", 3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "locale"], ["pTemplate", "firstpagelinkicon"], ["pTemplate", "previouspagelinkicon"], ["pTemplate", "lastpagelinkicon"], ["pTemplate", "nextpagelinkicon"], [1, "p-treetable-wrapper"], ["role", "table", 3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "rowgroup", 1, "p-treetable-thead"], ["role", "rowgroup", 1, "p-treetable-tbody", 3, "pTreeTableBody", "pTreeTableBodyTemplate"], ["role", "rowgroup", 1, "p-treetable-tfoot"], [1, "p-treetable-scrollable-wrapper"], ["class", "p-treetable-scrollable-view p-treetable-frozen-view", 3, "ttScrollableView", "frozen", "ngStyle", "scrollHeight", 4, "ngIf"], [1, "p-treetable-scrollable-view", 3, "ttScrollableView", "frozen", "scrollHeight", "ngStyle"], [1, "p-treetable-scrollable-view", "p-treetable-frozen-view", 3, "ttScrollableView", "frozen", "ngStyle", "scrollHeight"], ["styleClass", "p-paginator-bottom", 3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "locale"], [1, "p-treetable-footer"], [1, "p-column-resizer-helper", 3, "ngStyle"], [1, "p-treetable-reorder-indicator-up", 3, "ngStyle"], [1, "p-treetable-reorder-indicator-down", 3, "ngStyle"]],
    template: function TreeTable_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 7, 0);
        ɵɵtemplate(2, TreeTable_div_2_Template, 4, 2, "div", 8)(3, TreeTable_div_3_Template, 2, 1, "div", 9)(4, TreeTable_p_paginator_4_Template, 5, 21, "p-paginator", 10)(5, TreeTable_div_5_Template, 9, 16, "div", 11)(6, TreeTable_div_6_Template, 4, 8, "div", 12)(7, TreeTable_p_paginator_7_Template, 5, 21, "p-paginator", 13)(8, TreeTable_div_8_Template, 2, 1, "div", 14)(9, TreeTable_div_9_Template, 2, 2, "div", 15)(10, TreeTable_span_10_Template, 4, 4, "span", 16)(11, TreeTable_span_11_Template, 4, 4, "span", 17);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction5(14, _c7, ctx.rowHover || ctx.selectionMode === "single" || ctx.selectionMode === "multiple", ctx.autoLayout, ctx.resizableColumns, ctx.resizableColumns && ctx.columnResizeMode === "fit", ctx.scrollable && ctx.scrollHeight === "flex"));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.loading && ctx.showLoader);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.captionTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.scrollable);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.scrollable);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.summaryTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.resizableColumns);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.reorderableColumns);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.reorderableColumns);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Paginator, PrimeTemplate, SpinnerIcon, ArrowDownIcon, ArrowUpIcon, TTScrollableView, TTBody],
    styles: ["@layer primeng{.p-treetable{position:relative}.p-treetable table{border-collapse:collapse;width:100%;table-layout:fixed}.p-treetable .p-sortable-column{cursor:pointer;-webkit-user-select:none;user-select:none}.p-treetable .p-sortable-column .p-column-title,.p-treetable .p-sortable-column .p-sortable-column-icon,.p-treetable .p-sortable-column .p-sortable-column-badge{vertical-align:middle}.p-treetable .p-sortable-column .p-sortable-column-badge{display:inline-flex;align-items:center;justify-content:center}.p-treetable-auto-layout>.p-treetable-wrapper{overflow-x:auto}.p-treetable-auto-layout>.p-treetable-wrapper>table{table-layout:auto}.p-treetable-hoverable-rows .p-treetable-tbody>tr{cursor:pointer}.p-treetable-toggler{cursor:pointer;-webkit-user-select:none;user-select:none;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;overflow:hidden;position:relative}p-treetabletoggler+p-treetablecheckbox .p-checkbox{vertical-align:middle}p-treetabletoggler+p-treetablecheckbox+span{vertical-align:middle}.p-treetable-scrollable-wrapper{position:relative}.p-treetable-scrollable-header,.p-treetable-scrollable-footer{overflow:hidden;flex-shrink:0}.p-treetable-scrollable-body{overflow:auto;position:relative}.p-treetable-scrollable-body>table>.p-treetable-tbody>tr:first-child>td{border-top:0 none}.p-treetable-virtual-table{position:absolute}.p-treetable-frozen-view .p-treetable-scrollable-body{overflow:hidden}.p-treetable-frozen-view>.p-treetable-scrollable-body>table>.p-treetable-tbody>tr>td:last-child{border-right:0 none}.p-treetable-unfrozen-view{position:absolute;top:0}.p-treetable-flex-scrollable,.p-treetable-flex-scrollable .p-treetable-scrollable-wrapper,.p-treetable-flex-scrollable .p-treetable-scrollable-view{display:flex;flex-direction:column;flex:1;height:100%}.p-treetable-flex-scrollable .p-treetable-virtual-scrollable-body{flex:1}.p-treetable-resizable>.p-treetable-wrapper{overflow-x:auto}.p-treetable-resizable .p-treetable-thead>tr>th,.p-treetable-resizable .p-treetable-tfoot>tr>td,.p-treetable-resizable .p-treetable-tbody>tr>td{overflow:hidden}.p-treetable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-treetable .p-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5rem;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.p-treetable .p-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.p-treetable .p-row-editor-init,.p-treetable .p-row-editor-save,.p-treetable .p-row-editor-cancel,.p-treetable .p-row-toggler{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-treetable-reorder-indicator-up,.p-treetable-reorder-indicator-down{position:absolute;display:none}[ttReorderableColumn]{cursor:move}.p-treetable .p-treetable-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-treetable .p-scroller-loading{transform:none!important;min-height:0;position:sticky;top:0;left:0}}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeTable, [{
    type: Component,
    args: [{
      selector: "p-treeTable",
      template: `
        <div
            #container
            [ngStyle]="style"
            [class]="styleClass"
            data-scrollselectors=".p-treetable-scrollable-body"
            [ngClass]="{
                'p-treetable p-component': true,
                'p-treetable-hoverable-rows': rowHover || selectionMode === 'single' || selectionMode === 'multiple',
                'p-treetable-auto-layout': autoLayout,
                'p-treetable-resizable': resizableColumns,
                'p-treetable-resizable-fit': resizableColumns && columnResizeMode === 'fit',
                'p-treetable-flex-scrollable': scrollable && scrollHeight === 'flex'
            }"
        >
            <div class="p-treetable-loading" *ngIf="loading && showLoader">
                <div class="p-treetable-loading-overlay p-component-overlay">
                    <i *ngIf="loadingIcon" [class]="'p-treetable-loading-icon pi-spin ' + loadingIcon"></i>
                    <ng-container *ngIf="!loadingIcon">
                        <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-treetable-loading-icon'" />
                        <span *ngIf="loadingIconTemplate" class="p-treetable-loading-icon">
                            <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </div>
            </div>
            <div *ngIf="captionTemplate" class="p-treetable-header">
                <ng-container *ngTemplateOutlet="captionTemplate"></ng-container>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                styleClass="p-paginator-top"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
                [locale]="paginatorLocale"
            >
                <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate"></ng-container>
                </ng-template>
            </p-paginator>

            <div class="p-treetable-wrapper" *ngIf="!scrollable">
                <table role="table" #table [ngClass]="tableStyleClass" [ngStyle]="tableStyle">
                    <ng-container *ngTemplateOutlet="colGroupTemplate; context: { $implicit: columns }"></ng-container>
                    <thead role="rowgroup" class="p-treetable-thead">
                        <ng-container *ngTemplateOutlet="headerTemplate; context: { $implicit: columns }"></ng-container>
                    </thead>
                    <tbody class="p-treetable-tbody" role="rowgroup" [pTreeTableBody]="columns" [pTreeTableBodyTemplate]="bodyTemplate"></tbody>
                    <tfoot class="p-treetable-tfoot" role="rowgroup">
                        <ng-container *ngTemplateOutlet="footerTemplate; context: { $implicit: columns }"></ng-container>
                    </tfoot>
                </table>
            </div>

            <div class="p-treetable-scrollable-wrapper" *ngIf="scrollable">
                <div
                    class="p-treetable-scrollable-view p-treetable-frozen-view"
                    *ngIf="frozenColumns || frozenBodyTemplate"
                    #scrollableFrozenView
                    [ttScrollableView]="frozenColumns"
                    [frozen]="true"
                    [ngStyle]="{ width: frozenWidth }"
                    [scrollHeight]="scrollHeight"
                ></div>
                <div class="p-treetable-scrollable-view" #scrollableView [ttScrollableView]="columns" [frozen]="false" [scrollHeight]="scrollHeight" [ngStyle]="{ left: frozenWidth, width: 'calc(100% - ' + frozenWidth + ')' }"></div>
            </div>

            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                styleClass="p-paginator-bottom"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="paginatorStyleClass"
                [locale]="paginatorLocale"
            >
                <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate"></ng-container>
                </ng-template>
            </p-paginator>
            <div *ngIf="summaryTemplate" class="p-treetable-footer">
                <ng-container *ngTemplateOutlet="summaryTemplate"></ng-container>
            </div>

            <div #resizeHelper class="p-column-resizer-helper" [ngStyle]="{ display: 'none' }" *ngIf="resizableColumns"></div>
            <span #reorderIndicatorUp class="p-treetable-reorder-indicator-up" [ngStyle]="{ display: 'none' }" *ngIf="reorderableColumns">
                <ArrowDownIcon *ngIf="!reorderIndicatorUpIconTemplate" />
                <ng-template *ngTemplateOutlet="reorderIndicatorUpIconTemplate"></ng-template>
            </span>
            <span #reorderIndicatorDown class="p-treetable-reorder-indicator-down" [ngStyle]="{ display: 'none' }" *ngIf="reorderableColumns">
                <ArrowUpIcon *ngIf="!reorderIndicatorDownIconTemplate" />
                <ng-template *ngTemplateOutlet="reorderIndicatorDownIconTemplate"></ng-template>
            </span>
        </div>
    `,
      providers: [TreeTableService],
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-treetable{position:relative}.p-treetable table{border-collapse:collapse;width:100%;table-layout:fixed}.p-treetable .p-sortable-column{cursor:pointer;-webkit-user-select:none;user-select:none}.p-treetable .p-sortable-column .p-column-title,.p-treetable .p-sortable-column .p-sortable-column-icon,.p-treetable .p-sortable-column .p-sortable-column-badge{vertical-align:middle}.p-treetable .p-sortable-column .p-sortable-column-badge{display:inline-flex;align-items:center;justify-content:center}.p-treetable-auto-layout>.p-treetable-wrapper{overflow-x:auto}.p-treetable-auto-layout>.p-treetable-wrapper>table{table-layout:auto}.p-treetable-hoverable-rows .p-treetable-tbody>tr{cursor:pointer}.p-treetable-toggler{cursor:pointer;-webkit-user-select:none;user-select:none;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;overflow:hidden;position:relative}p-treetabletoggler+p-treetablecheckbox .p-checkbox{vertical-align:middle}p-treetabletoggler+p-treetablecheckbox+span{vertical-align:middle}.p-treetable-scrollable-wrapper{position:relative}.p-treetable-scrollable-header,.p-treetable-scrollable-footer{overflow:hidden;flex-shrink:0}.p-treetable-scrollable-body{overflow:auto;position:relative}.p-treetable-scrollable-body>table>.p-treetable-tbody>tr:first-child>td{border-top:0 none}.p-treetable-virtual-table{position:absolute}.p-treetable-frozen-view .p-treetable-scrollable-body{overflow:hidden}.p-treetable-frozen-view>.p-treetable-scrollable-body>table>.p-treetable-tbody>tr>td:last-child{border-right:0 none}.p-treetable-unfrozen-view{position:absolute;top:0}.p-treetable-flex-scrollable,.p-treetable-flex-scrollable .p-treetable-scrollable-wrapper,.p-treetable-flex-scrollable .p-treetable-scrollable-view{display:flex;flex-direction:column;flex:1;height:100%}.p-treetable-flex-scrollable .p-treetable-virtual-scrollable-body{flex:1}.p-treetable-resizable>.p-treetable-wrapper{overflow-x:auto}.p-treetable-resizable .p-treetable-thead>tr>th,.p-treetable-resizable .p-treetable-tfoot>tr>td,.p-treetable-resizable .p-treetable-tbody>tr>td{overflow:hidden}.p-treetable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-treetable .p-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5rem;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.p-treetable .p-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.p-treetable .p-row-editor-init,.p-treetable .p-row-editor-save,.p-treetable .p-row-editor-cancel,.p-treetable .p-row-toggler{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-treetable-reorder-indicator-up,.p-treetable-reorder-indicator-down{position:absolute;display:none}[ttReorderableColumn]{cursor:move}.p-treetable .p-treetable-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-treetable .p-scroller-loading{transform:none!important;min-height:0;position:sticky;top:0;left:0}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: TreeTableService
  }, {
    type: FilterService
  }, {
    type: PrimeNGConfig
  }], {
    columns: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tableStyle: [{
      type: Input
    }],
    tableStyleClass: [{
      type: Input
    }],
    autoLayout: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    lazyLoadOnInit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    paginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rows: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    first: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageLinks: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: Input
    }],
    alwaysShowPaginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    paginatorPosition: [{
      type: Input
    }],
    paginatorStyleClass: [{
      type: Input
    }],
    paginatorDropdownAppendTo: [{
      type: Input
    }],
    currentPageReportTemplate: [{
      type: Input
    }],
    showCurrentPageReport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showJumpToPageDropdown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showPageLinks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    defaultSortOrder: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    sortMode: [{
      type: Input
    }],
    resetPageOnSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    customSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectionMode: [{
      type: Input
    }],
    contextMenuSelection: [{
      type: Input
    }],
    contextMenuSelectionMode: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    metaKeySelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareSelectionBy: [{
      type: Input
    }],
    rowHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    showLoader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollHeight: [{
      type: Input
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    virtualScrollDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    frozenWidth: [{
      type: Input
    }],
    frozenColumns: [{
      type: Input
    }],
    resizableColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    columnResizeMode: [{
      type: Input
    }],
    reorderableColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contextMenu: [{
      type: Input
    }],
    rowTrackBy: [{
      type: Input
    }],
    filters: [{
      type: Input
    }],
    globalFilterFields: [{
      type: Input
    }],
    filterDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    filterMode: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    paginatorLocale: [{
      type: Input
    }],
    totalRecords: [{
      type: Input
    }],
    sortField: [{
      type: Input
    }],
    sortOrder: [{
      type: Input
    }],
    multiSortMeta: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    virtualRowHeight: [{
      type: Input
    }],
    selectionKeys: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    contextMenuSelectionChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onNodeExpand: [{
      type: Output
    }],
    onNodeCollapse: [{
      type: Output
    }],
    onPage: [{
      type: Output
    }],
    onSort: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    sortFunction: [{
      type: Output
    }],
    onColResize: [{
      type: Output
    }],
    onColReorder: [{
      type: Output
    }],
    onNodeSelect: [{
      type: Output
    }],
    onNodeUnselect: [{
      type: Output
    }],
    onContextMenuSelect: [{
      type: Output
    }],
    onHeaderCheckboxToggle: [{
      type: Output
    }],
    onEditInit: [{
      type: Output
    }],
    onEditComplete: [{
      type: Output
    }],
    onEditCancel: [{
      type: Output
    }],
    selectionKeysChange: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    resizeHelperViewChild: [{
      type: ViewChild,
      args: ["resizeHelper"]
    }],
    reorderIndicatorUpViewChild: [{
      type: ViewChild,
      args: ["reorderIndicatorUp"]
    }],
    reorderIndicatorDownViewChild: [{
      type: ViewChild,
      args: ["reorderIndicatorDown"]
    }],
    tableViewChild: [{
      type: ViewChild,
      args: ["table"]
    }],
    scrollableViewChild: [{
      type: ViewChild,
      args: ["scrollableView"]
    }],
    scrollableFrozenViewChild: [{
      type: ViewChild,
      args: ["scrollableFrozenView"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TTBody = class _TTBody {
  tt;
  treeTableService;
  cd;
  columns;
  template;
  frozen;
  serializedNodes;
  scrollerOptions;
  subscription;
  constructor(tt, treeTableService, cd) {
    this.tt = tt;
    this.treeTableService = treeTableService;
    this.cd = cd;
    this.subscription = this.tt.tableService.uiUpdateSource$.subscribe(() => {
      if (this.tt.virtualScroll) {
        this.cd.detectChanges();
      }
    });
  }
  getScrollerOption(option, options) {
    if (this.tt.virtualScroll) {
      options = options || this.scrollerOptions;
      return options ? options[option] : null;
    }
    return null;
  }
  getRowIndex(rowIndex) {
    const getItemOptions = this.getScrollerOption("getItemOptions");
    return getItemOptions ? getItemOptions(rowIndex).index : rowIndex;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function TTBody_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTBody)(ɵɵdirectiveInject(TreeTable), ɵɵdirectiveInject(TreeTableService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TTBody,
    selectors: [["", "pTreeTableBody", ""]],
    hostAttrs: [1, "p-element"],
    inputs: {
      columns: [0, "pTreeTableBody", "columns"],
      template: [0, "pTreeTableBodyTemplate", "template"],
      frozen: [2, "frozen", "frozen", booleanAttribute],
      serializedNodes: "serializedNodes",
      scrollerOptions: "scrollerOptions"
    },
    features: [ɵɵInputTransformsFeature],
    attrs: _c12,
    decls: 2,
    vars: 3,
    consts: [["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TTBody_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, TTBody_ng_template_0_Template, 1, 1, "ng-template", 0)(1, TTBody_ng_container_1_Template, 2, 5, "ng-container", 1);
      }
      if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.serializedNodes || ctx.tt.serializedValue)("ngForTrackBy", ctx.tt.rowTrackBy);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.tt.isEmpty());
      }
    },
    dependencies: [NgForOf, NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTBody, [{
    type: Component,
    args: [{
      selector: "[pTreeTableBody]",
      template: `
        <ng-template ngFor let-serializedNode let-rowIndex="index" [ngForOf]="serializedNodes || tt.serializedValue" [ngForTrackBy]="tt.rowTrackBy">
            <ng-container *ngIf="serializedNode.visible">
                <ng-container *ngTemplateOutlet="template; context: { $implicit: serializedNode, node: serializedNode.node, rowData: serializedNode.node.data, columns: columns }"></ng-container>
            </ng-container>
        </ng-template>
        <ng-container *ngIf="tt.isEmpty()">
            <ng-container *ngTemplateOutlet="tt.emptyMessageTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
    `,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: TreeTableService
  }, {
    type: ChangeDetectorRef
  }], {
    columns: [{
      type: Input,
      args: ["pTreeTableBody"]
    }],
    template: [{
      type: Input,
      args: ["pTreeTableBodyTemplate"]
    }],
    frozen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    serializedNodes: [{
      type: Input
    }],
    scrollerOptions: [{
      type: Input
    }]
  });
})();
var TTScrollableView = class _TTScrollableView {
  platformId;
  renderer;
  tt;
  el;
  zone;
  columns;
  frozen;
  scrollHeaderViewChild;
  scrollHeaderBoxViewChild;
  scrollBodyViewChild;
  scrollTableViewChild;
  scrollLoadingTableViewChild;
  scrollFooterViewChild;
  scrollFooterBoxViewChild;
  scrollableAlignerViewChild;
  scroller;
  headerScrollListener;
  bodyScrollListener;
  footerScrollListener;
  frozenSiblingBody;
  totalRecordsSubscription;
  _scrollHeight;
  preventBodyScrollPropagation;
  getMergedTableStyles(contentStyle) {
    return __spreadValues(__spreadValues({}, this.tt.tableStyle), contentStyle);
  }
  get scrollHeight() {
    return this._scrollHeight;
  }
  set scrollHeight(val) {
    this._scrollHeight = val;
    if (val != null && (val.includes("%") || val.includes("calc"))) {
      console.log('Percentage scroll height calculation is removed in favor of the more performant CSS based flex mode, use scrollHeight="flex" instead.');
    }
  }
  constructor(platformId, renderer, tt, el, zone) {
    this.platformId = platformId;
    this.renderer = renderer;
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.frozen) {
        if (this.tt.frozenColumns || this.tt.frozenBodyTemplate) {
          DomHandler.addClass(this.el.nativeElement, "p-treetable-unfrozen-view");
        }
        let frozenView = this.el.nativeElement.previousElementSibling;
        if (frozenView) {
          if (this.tt.virtualScroll) this.frozenSiblingBody = DomHandler.findSingle(frozenView, ".p-scroller-viewport");
          else this.frozenSiblingBody = DomHandler.findSingle(frozenView, ".p-treetable-scrollable-body");
        }
        let scrollBarWidth = DomHandler.calculateScrollbarWidth();
        this.scrollHeaderBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + "px";
        if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
          this.scrollFooterBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + "px";
        }
      } else {
        if (this.scrollableAlignerViewChild && this.scrollableAlignerViewChild.nativeElement) {
          this.scrollableAlignerViewChild.nativeElement.style.height = DomHandler.calculateScrollbarHeight() + "px";
        }
      }
      this.bindEvents();
    }
  }
  bindEvents() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
          this.headerScrollListener = this.renderer.listen(this.scrollHeaderBoxViewChild?.nativeElement, "scroll", this.onHeaderScroll.bind(this));
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
          this.footerScrollListener = this.renderer.listen(this.scrollFooterViewChild.nativeElement, "scroll", this.onFooterScroll.bind(this));
        }
        if (!this.frozen) {
          if (this.tt.virtualScroll) {
            this.bodyScrollListener = this.renderer.listen((this.scroller?.getElementRef()).nativeElement, "scroll", this.onBodyScroll.bind(this));
          } else {
            this.bodyScrollListener = this.renderer.listen(this.scrollBodyViewChild?.nativeElement, "scroll", this.onBodyScroll.bind(this));
          }
        }
      });
    }
  }
  unbindEvents() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
        if (this.headerScrollListener) {
          this.headerScrollListener();
          this.headerScrollListener = null;
        }
      }
      if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
        if (this.footerScrollListener) {
          this.footerScrollListener();
          this.footerScrollListener = null;
        }
      }
      if (this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
        if (this.bodyScrollListener) {
          this.bodyScrollListener();
          this.bodyScrollListener = null;
        }
      }
      if (this.scroller && this.scroller.getElementRef()) {
        if (this.bodyScrollListener) {
          this.bodyScrollListener();
          this.bodyScrollListener = null;
        }
      }
    }
  }
  onHeaderScroll() {
    const scrollLeft = this.scrollHeaderViewChild?.nativeElement.scrollLeft;
    this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
    if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
      this.scrollFooterViewChild.nativeElement.scrollLeft = scrollLeft;
    }
    this.preventBodyScrollPropagation = true;
  }
  onFooterScroll() {
    const scrollLeft = this.scrollFooterViewChild?.nativeElement.scrollLeft;
    this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
    if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
      this.scrollHeaderViewChild.nativeElement.scrollLeft = scrollLeft;
    }
    this.preventBodyScrollPropagation = true;
  }
  onBodyScroll(event) {
    if (this.preventBodyScrollPropagation) {
      this.preventBodyScrollPropagation = false;
      return;
    }
    if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
      this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + "px";
    }
    if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
      this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + "px";
    }
    if (this.frozenSiblingBody) {
      this.frozenSiblingBody.scrollTop = event.target.scrollTop;
    }
  }
  scrollToVirtualIndex(index) {
    if (this.scroller) {
      this.scroller.scrollToIndex(index);
    }
  }
  scrollTo(options) {
    if (this.scroller) {
      this.scroller.scrollTo(options);
    } else {
      if (this.scrollBodyViewChild?.nativeElement.scrollTo) {
        this.scrollBodyViewChild.nativeElement.scrollTo(options);
      } else {
        this.scrollBodyViewChild.nativeElement.scrollLeft = options.left;
        this.scrollBodyViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }
  ngOnDestroy() {
    this.unbindEvents();
    this.frozenSiblingBody = null;
  }
  static ɵfac = function TTScrollableView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTScrollableView)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(TreeTable), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TTScrollableView,
    selectors: [["", "ttScrollableView", ""]],
    viewQuery: function TTScrollableView_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c15, 5);
        ɵɵviewQuery(_c16, 5);
        ɵɵviewQuery(_c17, 5);
        ɵɵviewQuery(_c18, 5);
        ɵɵviewQuery(_c19, 5);
        ɵɵviewQuery(_c20, 5);
        ɵɵviewQuery(_c21, 5);
        ɵɵviewQuery(_c22, 5);
        ɵɵviewQuery(_c23, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollHeaderViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollHeaderBoxViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollBodyViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollTableViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollLoadingTableViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollFooterViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollFooterBoxViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollableAlignerViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroller = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      columns: [0, "ttScrollableView", "columns"],
      frozen: [2, "frozen", "frozen", booleanAttribute],
      scrollHeight: "scrollHeight"
    },
    features: [ɵɵInputTransformsFeature],
    attrs: _c24,
    decls: 13,
    vars: 13,
    consts: [["scrollHeader", ""], ["scrollHeaderBox", ""], ["buildInItems", ""], ["scroller", ""], ["scrollBody", ""], ["scrollTable", ""], ["scrollableAligner", ""], ["scrollFooter", ""], ["scrollFooterBox", ""], [1, "p-treetable-scrollable-header"], [1, "p-treetable-scrollable-header-box"], [1, "p-treetable-scrollable-header-table", 3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "rowgroup", 1, "p-treetable-thead"], ["styleClass", "p-treetable-scrollable-body", 3, "items", "style", "scrollHeight", "itemSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], ["class", "p-treetable-scrollable-footer", 4, "ngIf"], ["styleClass", "p-treetable-scrollable-body", 3, "onLazyLoad", "items", "scrollHeight", "itemSize", "lazy", "options"], ["pTemplate", "content"], ["pTemplate", "loader"], [1, "p-treetable-scrollable-body", 3, "ngStyle"], ["role", "table", 3, "ngClass", "ngStyle"], ["role", "rowgroup", 1, "p-treetable-tbody", 3, "pTreeTableBody", "pTreeTableBodyTemplate", "serializedNodes", "frozen"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [1, "p-treetable-scrollable-footer"], [1, "p-treetable-scrollable-footer-box"], [1, "p-treetable-scrollable-footer-table", 3, "ngClass", "ngStyle"], ["role", "rowgroup", 1, "p-treetable-tfoot"]],
    template: function TTScrollableView_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 9, 0)(2, "div", 10, 1)(4, "table", 11);
        ɵɵtemplate(5, TTScrollableView_ng_container_5_Template, 1, 0, "ng-container", 12);
        ɵɵelementStart(6, "thead", 13);
        ɵɵtemplate(7, TTScrollableView_ng_container_7_Template, 1, 0, "ng-container", 12);
        ɵɵelementEnd()()()();
        ɵɵtemplate(8, TTScrollableView_p_scroller_8_Template, 4, 10, "p-scroller", 14)(9, TTScrollableView_ng_container_9_Template, 4, 10, "ng-container", 15)(10, TTScrollableView_ng_template_10_Template, 5, 13, "ng-template", null, 2, ɵɵtemplateRefExtractor)(12, TTScrollableView_div_12_Template, 8, 10, "div", 16);
      }
      if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ngClass", ctx.tt.tableStyleClass)("ngStyle", ctx.tt.tableStyle);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.frozen ? ctx.tt.frozenColGroupTemplate || ctx.tt.colGroupTemplate : ctx.tt.colGroupTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c8, ctx.columns));
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", ctx.frozen ? ctx.tt.frozenHeaderTemplate || ctx.tt.headerTemplate : ctx.tt.headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c8, ctx.columns));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.tt.virtualScroll);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.tt.virtualScroll);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.tt.footerTemplate);
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle, PrimeTemplate, Scroller, TTBody],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTScrollableView, [{
    type: Component,
    args: [{
      selector: "[ttScrollableView]",
      template: `
        <div #scrollHeader class="p-treetable-scrollable-header">
            <div #scrollHeaderBox class="p-treetable-scrollable-header-box">
                <table class="p-treetable-scrollable-header-table" [ngClass]="tt.tableStyleClass" [ngStyle]="tt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt.colGroupTemplate : tt.colGroupTemplate; context: { $implicit: columns }"></ng-container>
                    <thead role="rowgroup" class="p-treetable-thead">
                        <ng-container *ngTemplateOutlet="frozen ? tt.frozenHeaderTemplate || tt.headerTemplate : tt.headerTemplate; context: { $implicit: columns }"></ng-container>
                    </thead>
                </table>
            </div>
        </div>

        <p-scroller
            *ngIf="tt.virtualScroll"
            #scroller
            [items]="tt.serializedValue"
            styleClass="p-treetable-scrollable-body"
            [style]="{ height: tt.scrollHeight !== 'flex' ? tt.scrollHeight : undefined }"
            [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
            [itemSize]="tt.virtualScrollItemSize || tt._virtualRowHeight"
            [lazy]="tt.lazy"
            (onLazyLoad)="tt.onLazyItemLoad($event)"
            [options]="tt.virtualScrollOptions"
        >
            <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
            </ng-template>
            <ng-container *ngIf="loaderTemplate">
                <ng-template pTemplate="loader" let-scrollerOptions="options">
                    <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                </ng-template>
            </ng-container>
        </p-scroller>
        <ng-container *ngIf="!tt.virtualScroll">
            <div #scrollBody class="p-treetable-scrollable-body" [ngStyle]="{ 'max-height': tt.scrollHeight !== 'flex' ? scrollHeight : undefined, 'overflow-y': !frozen && tt.scrollHeight ? 'scroll' : undefined }">
                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: serializedValue, options: {} }"></ng-container>
            </div>
        </ng-container>

        <ng-template #buildInItems let-items let-scrollerOptions="options">
            <table role="table" #scrollTable [class]="tt.tableStyleClass" [ngClass]="scrollerOptions.contentStyleClass" [ngStyle]="getMergedTableStyles(scrollerOptions.contentStyle)">
                <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt.colGroupTemplate : tt.colGroupTemplate; context: { $implicit: columns }"></ng-container>
                <tbody role="rowgroup" class="p-treetable-tbody" [pTreeTableBody]="columns" [pTreeTableBodyTemplate]="frozen ? tt.frozenBodyTemplate || tt.bodyTemplate : tt.bodyTemplate" [serializedNodes]="items" [frozen]="frozen"></tbody>
            </table>
            <div #scrollableAligner [ngStyle]="{ 'background-color': 'transparent' }" *ngIf="frozen"></div>
        </ng-template>

        <div #scrollFooter *ngIf="tt.footerTemplate" class="p-treetable-scrollable-footer">
            <div #scrollFooterBox class="p-treetable-scrollable-footer-box">
                <table class="p-treetable-scrollable-footer-table" [ngClass]="tt.tableStyleClass" [ngStyle]="tt.tableStyle">
                    <ng-container *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt.colGroupTemplate : tt.colGroupTemplate; context: { $implicit: columns }"></ng-container>
                    <tfoot role="rowgroup" class="p-treetable-tfoot">
                        <ng-container *ngTemplateOutlet="frozen ? tt.frozenFooterTemplate || tt.footerTemplate : tt.footerTemplate; context: { $implicit: columns }"></ng-container>
                    </tfoot>
                </table>
            </div>
        </div>
    `,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: TreeTable
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    columns: [{
      type: Input,
      args: ["ttScrollableView"]
    }],
    frozen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollHeaderViewChild: [{
      type: ViewChild,
      args: ["scrollHeader"]
    }],
    scrollHeaderBoxViewChild: [{
      type: ViewChild,
      args: ["scrollHeaderBox"]
    }],
    scrollBodyViewChild: [{
      type: ViewChild,
      args: ["scrollBody"]
    }],
    scrollTableViewChild: [{
      type: ViewChild,
      args: ["scrollTable"]
    }],
    scrollLoadingTableViewChild: [{
      type: ViewChild,
      args: ["loadingTable"]
    }],
    scrollFooterViewChild: [{
      type: ViewChild,
      args: ["scrollFooter"]
    }],
    scrollFooterBoxViewChild: [{
      type: ViewChild,
      args: ["scrollFooterBox"]
    }],
    scrollableAlignerViewChild: [{
      type: ViewChild,
      args: ["scrollableAligner"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    scrollHeight: [{
      type: Input
    }]
  });
})();
var TTSortableColumn = class _TTSortableColumn {
  tt;
  field;
  ttSortableColumnDisabled;
  sorted;
  subscription;
  get ariaSorted() {
    if (this.sorted && this.tt.sortOrder < 0) return "descending";
    else if (this.sorted && this.tt.sortOrder > 0) return "ascending";
    else return "none";
  }
  constructor(tt) {
    this.tt = tt;
    if (this.isEnabled()) {
      this.subscription = this.tt.tableService.sortSource$.subscribe((sortMeta) => {
        this.updateSortState();
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.updateSortState();
    }
  }
  updateSortState() {
    this.sorted = this.tt.isSorted(this.field);
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.updateSortState();
      this.tt.sort({
        originalEvent: event,
        field: this.field
      });
      DomHandler.clearSelection();
    }
  }
  onEnterKey(event) {
    this.onClick(event);
  }
  isEnabled() {
    return this.ttSortableColumnDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function TTSortableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTSortableColumn)(ɵɵdirectiveInject(TreeTable));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TTSortableColumn,
    selectors: [["", "ttSortableColumn", ""]],
    hostAttrs: [1, "p-element"],
    hostVars: 7,
    hostBindings: function TTSortableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function TTSortableColumn_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown.enter", function TTSortableColumn_keydown_enter_HostBindingHandler($event) {
          return ctx.onEnterKey($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("tabindex", ctx.isEnabled() ? "0" : null)("role", "columnheader")("aria-sort", ctx.ariaSorted);
        ɵɵclassProp("p-sortable-column", ctx.isEnabled())("p-highlight", ctx.sorted);
      }
    },
    inputs: {
      field: [0, "ttSortableColumn", "field"],
      ttSortableColumnDisabled: [2, "ttSortableColumnDisabled", "ttSortableColumnDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTSortableColumn, [{
    type: Directive,
    args: [{
      selector: "[ttSortableColumn]",
      host: {
        class: "p-element",
        "[class.p-sortable-column]": "isEnabled()",
        "[class.p-highlight]": "sorted",
        "[attr.tabindex]": 'isEnabled() ? "0" : null',
        "[attr.role]": '"columnheader"',
        "[attr.aria-sort]": "ariaSorted"
      }
    }]
  }], () => [{
    type: TreeTable
  }], {
    field: [{
      type: Input,
      args: ["ttSortableColumn"]
    }],
    ttSortableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onEnterKey: [{
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }]
  });
})();
var TTSortIcon = class _TTSortIcon {
  tt;
  cd;
  field;
  ariaLabelDesc;
  ariaLabelAsc;
  subscription;
  sortOrder;
  constructor(tt, cd) {
    this.tt = tt;
    this.cd = cd;
    this.subscription = this.tt.tableService.sortSource$.subscribe((sortMeta) => {
      this.updateSortState();
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    this.updateSortState();
  }
  onClick(event) {
    event.preventDefault();
  }
  updateSortState() {
    if (this.tt.sortMode === "single") {
      this.sortOrder = this.tt.isSorted(this.field) ? this.tt.sortOrder : 0;
    } else if (this.tt.sortMode === "multiple") {
      let sortMeta = this.tt.getSortMeta(this.field);
      this.sortOrder = sortMeta ? sortMeta.order : 0;
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function TTSortIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTSortIcon)(ɵɵdirectiveInject(TreeTable), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TTSortIcon,
    selectors: [["p-treeTableSortIcon"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      field: "field",
      ariaLabelDesc: "ariaLabelDesc",
      ariaLabelAsc: "ariaLabelAsc"
    },
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], ["class", "p-sortable-column-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-sortable-column-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TTSortIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, TTSortIcon_ng_container_0_Template, 4, 3, "ng-container", 0)(1, TTSortIcon_span_1_Template, 2, 4, "span", 1);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.tt.sortIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.tt.sortIconTemplate);
      }
    },
    dependencies: () => [NgIf, NgTemplateOutlet, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTSortIcon, [{
    type: Component,
    args: [{
      selector: "p-treeTableSortIcon",
      template: ` <ng-container *ngIf="!tt.sortIconTemplate">
            <SortAltIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === 0" />
            <SortAmountUpAltIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === 1" />
            <SortAmountDownIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === -1" />
        </ng-container>
        <span *ngIf="tt.sortIconTemplate" class="p-sortable-column-icon">
            <ng-template *ngTemplateOutlet="tt.sortIconTemplate; context: { $implicit: sortOrder }"></ng-template>
        </span>`,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: ChangeDetectorRef
  }], {
    field: [{
      type: Input
    }],
    ariaLabelDesc: [{
      type: Input
    }],
    ariaLabelAsc: [{
      type: Input
    }]
  });
})();
var TTResizableColumn = class _TTResizableColumn {
  document;
  platformId;
  renderer;
  tt;
  el;
  zone;
  ttResizableColumnDisabled;
  resizer;
  resizerMouseDownListener;
  documentMouseMoveListener;
  documentMouseUpListener;
  constructor(document, platformId, renderer, tt, el, zone) {
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isEnabled()) {
        DomHandler.addClass(this.el.nativeElement, "p-resizable-column");
        this.resizer = this.renderer.createElement("span");
        this.renderer.addClass(this.resizer, "p-column-resizer");
        this.renderer.appendChild(this.el.nativeElement, this.resizer);
        this.zone.runOutsideAngular(() => {
          this.resizerMouseDownListener = this.renderer.listen(this.resizer, "mousedown", this.onMouseDown.bind(this));
        });
      }
    }
  }
  bindDocumentEvents() {
    this.zone.runOutsideAngular(() => {
      this.documentMouseMoveListener = this.renderer.listen(this.document, "mousemove", this.onDocumentMouseMove.bind(this));
      this.documentMouseUpListener = this.renderer.listen(this.document, "mouseup", this.onDocumentMouseUp.bind(this));
    });
  }
  unbindDocumentEvents() {
    if (this.documentMouseMoveListener) {
      this.documentMouseMoveListener();
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      this.documentMouseUpListener();
      this.documentMouseUpListener = null;
    }
  }
  onMouseDown(event) {
    this.tt.onColumnResizeBegin(event);
    this.bindDocumentEvents();
  }
  onDocumentMouseMove(event) {
    this.tt.onColumnResize(event);
  }
  onDocumentMouseUp(event) {
    this.tt.onColumnResizeEnd(event, this.el.nativeElement);
    this.unbindDocumentEvents();
  }
  isEnabled() {
    return this.ttResizableColumnDisabled !== true;
  }
  ngOnDestroy() {
    if (this.resizerMouseDownListener) {
      this.resizerMouseDownListener();
      this.resizerMouseDownListener = null;
    }
    this.unbindDocumentEvents();
  }
  static ɵfac = function TTResizableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTResizableColumn)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(TreeTable), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TTResizableColumn,
    selectors: [["", "ttResizableColumn", ""]],
    hostAttrs: [1, "p-element"],
    inputs: {
      ttResizableColumnDisabled: [2, "ttResizableColumnDisabled", "ttResizableColumnDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTResizableColumn, [{
    type: Directive,
    args: [{
      selector: "[ttResizableColumn]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: TreeTable
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ttResizableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var TTReorderableColumn = class _TTReorderableColumn {
  document;
  platformId;
  renderer;
  tt;
  el;
  zone;
  ttReorderableColumnDisabled;
  dragStartListener;
  dragOverListener;
  dragEnterListener;
  dragLeaveListener;
  mouseDownListener;
  constructor(document, platformId, renderer, tt, el, zone) {
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      this.bindEvents();
    }
  }
  bindEvents() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
        this.dragStartListener = this.renderer.listen(this.el.nativeElement, "dragstart", this.onDragStart.bind(this));
        this.dragOverListener = this.renderer.listen(this.el.nativeElement, "dragover", this.onDragEnter.bind(this));
        this.dragEnterListener = this.renderer.listen(this.el.nativeElement, "dragenter", this.onDragEnter.bind(this));
        this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, "dragleave", this.onDragLeave.bind(this));
      });
    }
  }
  unbindEvents() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.mouseDownListener) {
        this.mouseDownListener();
        this.mouseDownListener = null;
      }
      if (this.dragOverListener) {
        this.dragOverListener();
        this.dragOverListener = null;
      }
      if (this.dragEnterListener) {
        this.dragEnterListener();
        this.dragEnterListener = null;
      }
      if (this.dragLeaveListener) {
        this.dragLeaveListener();
        this.dragLeaveListener = null;
      }
    }
  }
  onMouseDown(event) {
    if (event.target.nodeName === "INPUT" || event.target.nodeName === "TEXTAREA" || DomHandler.hasClass(event.target, "p-column-resizer")) this.el.nativeElement.draggable = false;
    else this.el.nativeElement.draggable = true;
  }
  onDragStart(event) {
    this.tt.onColumnDragStart(event, this.el.nativeElement);
  }
  onDragOver(event) {
    event.preventDefault();
  }
  onDragEnter(event) {
    this.tt.onColumnDragEnter(event, this.el.nativeElement);
  }
  onDragLeave(event) {
    this.tt.onColumnDragLeave(event);
  }
  onDrop(event) {
    if (this.isEnabled()) {
      this.tt.onColumnDrop(event, this.el.nativeElement);
    }
  }
  isEnabled() {
    return this.ttReorderableColumnDisabled !== true;
  }
  ngOnDestroy() {
    this.unbindEvents();
  }
  static ɵfac = function TTReorderableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTReorderableColumn)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(TreeTable), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TTReorderableColumn,
    selectors: [["", "ttReorderableColumn", ""]],
    hostAttrs: [1, "p-element"],
    hostBindings: function TTReorderableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("drop", function TTReorderableColumn_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        });
      }
    },
    inputs: {
      ttReorderableColumnDisabled: [2, "ttReorderableColumnDisabled", "ttReorderableColumnDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTReorderableColumn, [{
    type: Directive,
    args: [{
      selector: "[ttReorderableColumn]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: TreeTable
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ttReorderableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var TTSelectableRow = class _TTSelectableRow {
  tt;
  tableService;
  rowNode;
  ttSelectableRowDisabled;
  selected;
  subscription;
  constructor(tt, tableService) {
    this.tt = tt;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.tt.isSelected(this.rowNode.node);
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.tt.isSelected(this.rowNode.node);
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.tt.handleRowClick({
        originalEvent: event,
        rowNode: this.rowNode
      });
    }
  }
  onKeyDown(event) {
    switch (event.code) {
      case "Enter":
      case "Space":
        this.onEnterKey(event);
        break;
      default:
        break;
    }
  }
  onTouchEnd(event) {
    if (this.isEnabled()) {
      this.tt.handleRowTouchEnd(event);
    }
  }
  onEnterKey(event) {
    if (this.tt.selectionMode === "checkbox") {
      this.tt.toggleNodeWithCheckbox({
        originalEvent: event,
        rowNode: this.rowNode
      });
    } else {
      this.onClick(event);
    }
    event.preventDefault();
  }
  isEnabled() {
    return this.ttSelectableRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function TTSelectableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTSelectableRow)(ɵɵdirectiveInject(TreeTable), ɵɵdirectiveInject(TreeTableService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TTSelectableRow,
    selectors: [["", "ttSelectableRow", ""]],
    hostAttrs: [1, "p-element"],
    hostVars: 4,
    hostBindings: function TTSelectableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function TTSelectableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown", function TTSelectableRow_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        })("touchend", function TTSelectableRow_touchend_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("data-p-highlight", ctx.selected)("aria-checked", ctx.selected);
        ɵɵclassProp("p-highlight", ctx.selected);
      }
    },
    inputs: {
      rowNode: [0, "ttSelectableRow", "rowNode"],
      ttSelectableRowDisabled: [2, "ttSelectableRowDisabled", "ttSelectableRowDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTSelectableRow, [{
    type: Directive,
    args: [{
      selector: "[ttSelectableRow]",
      host: {
        class: "p-element",
        "[class.p-highlight]": "selected",
        "[attr.data-p-highlight]": "selected",
        "[attr.aria-checked]": "selected"
      }
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: TreeTableService
  }], {
    rowNode: [{
      type: Input,
      args: ["ttSelectableRow"]
    }],
    ttSelectableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    onTouchEnd: [{
      type: HostListener,
      args: ["touchend", ["$event"]]
    }]
  });
})();
var TTSelectableRowDblClick = class _TTSelectableRowDblClick {
  tt;
  tableService;
  rowNode;
  ttSelectableRowDisabled;
  selected;
  subscription;
  constructor(tt, tableService) {
    this.tt = tt;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.tt.isSelected(this.rowNode.node);
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.tt.isSelected(this.rowNode.node);
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.tt.handleRowClick({
        originalEvent: event,
        rowNode: this.rowNode
      });
    }
  }
  isEnabled() {
    return this.ttSelectableRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function TTSelectableRowDblClick_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTSelectableRowDblClick)(ɵɵdirectiveInject(TreeTable), ɵɵdirectiveInject(TreeTableService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TTSelectableRowDblClick,
    selectors: [["", "ttSelectableRowDblClick", ""]],
    hostAttrs: [1, "p-element"],
    hostVars: 2,
    hostBindings: function TTSelectableRowDblClick_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("dblclick", function TTSelectableRowDblClick_dblclick_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
      if (rf & 2) {
        ɵɵclassProp("p-highlight", ctx.selected);
      }
    },
    inputs: {
      rowNode: [0, "ttSelectableRowDblClick", "rowNode"],
      ttSelectableRowDisabled: [2, "ttSelectableRowDisabled", "ttSelectableRowDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTSelectableRowDblClick, [{
    type: Directive,
    args: [{
      selector: "[ttSelectableRowDblClick]",
      host: {
        class: "p-element",
        "[class.p-highlight]": "selected"
      }
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: TreeTableService
  }], {
    rowNode: [{
      type: Input,
      args: ["ttSelectableRowDblClick"]
    }],
    ttSelectableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["dblclick", ["$event"]]
    }]
  });
})();
var TTContextMenuRow = class _TTContextMenuRow {
  tt;
  tableService;
  el;
  rowNode;
  ttContextMenuRowDisabled;
  selected;
  subscription;
  constructor(tt, tableService, el) {
    this.tt = tt;
    this.tableService = tableService;
    this.el = el;
    if (this.isEnabled()) {
      this.subscription = this.tt.tableService.contextMenuSource$.subscribe((node) => {
        this.selected = this.tt.equals(this.rowNode.node, node);
      });
    }
  }
  onContextMenu(event) {
    if (this.isEnabled()) {
      this.tt.handleRowRightClick({
        originalEvent: event,
        rowNode: this.rowNode
      });
      this.el.nativeElement.focus();
      event.preventDefault();
    }
  }
  isEnabled() {
    return this.ttContextMenuRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function TTContextMenuRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTContextMenuRow)(ɵɵdirectiveInject(TreeTable), ɵɵdirectiveInject(TreeTableService), ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TTContextMenuRow,
    selectors: [["", "ttContextMenuRow", ""]],
    hostAttrs: [1, "p-element"],
    hostVars: 3,
    hostBindings: function TTContextMenuRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("contextmenu", function TTContextMenuRow_contextmenu_HostBindingHandler($event) {
          return ctx.onContextMenu($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("tabindex", ctx.isEnabled() ? 0 : void 0);
        ɵɵclassProp("p-highlight-contextmenu", ctx.selected);
      }
    },
    inputs: {
      rowNode: [0, "ttContextMenuRow", "rowNode"],
      ttContextMenuRowDisabled: [2, "ttContextMenuRowDisabled", "ttContextMenuRowDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTContextMenuRow, [{
    type: Directive,
    args: [{
      selector: "[ttContextMenuRow]",
      host: {
        class: "p-element",
        "[class.p-highlight-contextmenu]": "selected",
        "[attr.tabindex]": "isEnabled() ? 0 : undefined"
      }
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: TreeTableService
  }, {
    type: ElementRef
  }], {
    rowNode: [{
      type: Input,
      args: ["ttContextMenuRow"]
    }],
    ttContextMenuRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onContextMenu: [{
      type: HostListener,
      args: ["contextmenu", ["$event"]]
    }]
  });
})();
var TTCheckbox = class _TTCheckbox {
  tt;
  tableService;
  cd;
  disabled;
  rowNode;
  checked;
  partialChecked;
  focused;
  subscription;
  constructor(tt, tableService, cd) {
    this.tt = tt;
    this.tableService = tableService;
    this.cd = cd;
    this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
      if (this.tt.selectionKeys) {
        this.checked = this.tt.isNodeSelected(this.rowNode.node);
        this.partialChecked = this.tt.isNodePartialSelected(this.rowNode.node);
      } else {
        this.checked = this.tt.isSelected(this.rowNode.node);
        this.partialChecked = this.rowNode.node.partialSelected;
      }
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    if (this.tt.selectionKeys) {
      this.checked = this.tt.isNodeSelected(this.rowNode.node);
      this.partialChecked = this.tt.isNodePartialSelected(this.rowNode.node);
    } else {
      this.checked = this.tt.isSelected(this.rowNode.node);
      this.partialChecked = this.rowNode.node.partialSelected;
    }
  }
  onClick(event) {
    if (!this.disabled) {
      if (this.tt.selectionKeys) {
        const _check = !this.checked;
        this.tt.toggleCheckbox({
          originalEvent: event,
          check: _check,
          rowNode: this.rowNode
        });
      } else {
        this.tt.toggleNodeWithCheckbox({
          originalEvent: event,
          rowNode: this.rowNode
        });
      }
    }
    DomHandler.clearSelection();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function TTCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTCheckbox)(ɵɵdirectiveInject(TreeTable), ɵɵdirectiveInject(TreeTableService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TTCheckbox,
    selectors: [["p-treeTableCheckbox"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      rowNode: [0, "value", "rowNode"]
    },
    features: [ɵɵInputTransformsFeature],
    decls: 7,
    vars: 14,
    consts: [["box", ""], [1, "p-checkbox", "p-component", 3, "click", "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", "tabindex", "-1", 3, "focus", "blur", "checked"], ["role", "checkbox", 3, "ngClass"], [4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TTCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 1);
        ɵɵlistener("click", function TTCheckbox_Template_div_click_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onClick($event));
        });
        ɵɵelementStart(1, "div", 2)(2, "input", 3);
        ɵɵlistener("focus", function TTCheckbox_Template_input_focus_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFocus());
        })("blur", function TTCheckbox_Template_input_blur_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onBlur());
        });
        ɵɵelementEnd()();
        ɵɵelementStart(3, "div", 4, 0);
        ɵɵtemplate(5, TTCheckbox_ng_container_5_Template, 3, 2, "ng-container", 5)(6, TTCheckbox_span_6_Template, 2, 5, "span", 5);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction2(6, _c31, ctx.focused, ctx.tt.config.inputStyle() === "filled"));
        ɵɵadvance(2);
        ɵɵproperty("checked", ctx.checked);
        ɵɵadvance();
        ɵɵproperty("ngClass", ɵɵpureFunction4(9, _c32, ctx.checked, ctx.focused, ctx.partialChecked, ctx.disabled));
        ɵɵattribute("aria-checked", ctx.checked);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.tt.checkboxIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.tt.checkboxIconTemplate);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, CheckIcon, MinusIcon],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTCheckbox, [{
    type: Component,
    args: [{
      selector: "p-treeTableCheckbox",
      template: `
        <div class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-focused': focused, 'p-variant-filled': tt.config.inputStyle() === 'filled' }" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input type="checkbox" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" tabindex="-1" />
            </div>
            <div #box [ngClass]="{ 'p-checkbox-box': true, 'p-highlight': checked, 'p-focus': focused, 'p-indeterminate': partialChecked, 'p-disabled': disabled }" role="checkbox" [attr.aria-checked]="checked">
                <ng-container *ngIf="!tt.checkboxIconTemplate">
                    <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="checked" />
                    <MinusIcon [styleClass]="'p-checkbox-icon'" *ngIf="partialChecked" />
                </ng-container>
                <span *ngIf="tt.checkboxIconTemplate">
                    <ng-template *ngTemplateOutlet="tt.checkboxIconTemplate; context: { $implicit: checked, partialSelected: partialChecked }"></ng-template>
                </span>
            </div>
        </div>
    `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: TreeTableService
  }, {
    type: ChangeDetectorRef
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowNode: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var TTHeaderCheckbox = class _TTHeaderCheckbox {
  tt;
  tableService;
  cd;
  boxViewChild;
  checked;
  focused;
  disabled;
  selectionChangeSubscription;
  valueChangeSubscription;
  constructor(tt, tableService, cd) {
    this.tt = tt;
    this.tableService = tableService;
    this.cd = cd;
    this.valueChangeSubscription = this.tt.tableService.uiUpdateSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
    this.selectionChangeSubscription = this.tt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
  }
  ngOnInit() {
    this.checked = this.updateCheckedState();
  }
  onClick(event, checked) {
    if ((this.tt.value || this.tt.filteredNodes) && (this.tt.value.length > 0 || this.tt.filteredNodes.length > 0)) {
      this.tt.toggleNodesWithCheckbox(event, !checked);
    }
    DomHandler.clearSelection();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  ngOnDestroy() {
    if (this.selectionChangeSubscription) {
      this.selectionChangeSubscription.unsubscribe();
    }
    if (this.valueChangeSubscription) {
      this.valueChangeSubscription.unsubscribe();
    }
  }
  updateCheckedState() {
    this.cd.markForCheck();
    let checked;
    const data = this.tt.filteredNodes || this.tt.value;
    if (data) {
      if (this.tt.selectionKeys) {
        for (let node of data) {
          if (this.tt.isNodeSelected(node)) {
            checked = true;
          } else {
            checked = false;
            break;
          }
        }
      }
      if (!this.tt.selectionKeys) {
        for (let node of data) {
          if (this.tt.isSelected(node)) {
            checked = true;
          } else {
            checked = false;
            break;
          }
        }
      }
    } else {
      checked = false;
    }
    return checked;
  }
  static ɵfac = function TTHeaderCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTHeaderCheckbox)(ɵɵdirectiveInject(TreeTable), ɵɵdirectiveInject(TreeTableService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TTHeaderCheckbox,
    selectors: [["p-treeTableHeaderCheckbox"]],
    viewQuery: function TTHeaderCheckbox_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c34, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.boxViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    decls: 8,
    vars: 13,
    consts: [["cb", ""], ["box", ""], [1, "p-checkbox", "p-component", 3, "click", "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "focus", "blur", "checked", "disabled"], ["role", "checkbox", 3, "ngClass"], [4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TTHeaderCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 2);
        ɵɵlistener("click", function TTHeaderCheckbox_Template_div_click_0_listener($event) {
          ɵɵrestoreView(_r1);
          const cb_r2 = ɵɵreference(3);
          return ɵɵresetView(ctx.onClick($event, cb_r2.checked));
        });
        ɵɵelementStart(1, "div", 3)(2, "input", 4, 0);
        ɵɵlistener("focus", function TTHeaderCheckbox_Template_input_focus_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFocus());
        })("blur", function TTHeaderCheckbox_Template_input_blur_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onBlur());
        });
        ɵɵelementEnd()();
        ɵɵelementStart(4, "div", 5, 1);
        ɵɵtemplate(6, TTHeaderCheckbox_ng_container_6_Template, 2, 1, "ng-container", 6)(7, TTHeaderCheckbox_span_7_Template, 2, 4, "span", 7);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c35, ctx.focused));
        ɵɵadvance(2);
        ɵɵproperty("checked", ctx.checked)("disabled", !ctx.tt.value || ctx.tt.value.length === 0);
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ɵɵpureFunction3(9, _c36, ctx.checked, ctx.focused, !ctx.tt.value || ctx.tt.value.length === 0));
        ɵɵattribute("aria-checked", ctx.checked);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.tt.headerCheckboxIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.tt.headerCheckboxIconTemplate);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, CheckIcon],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTHeaderCheckbox, [{
    type: Component,
    args: [{
      selector: "p-treeTableHeaderCheckbox",
      template: `
        <div class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-focused': focused }" (click)="onClick($event, cb.checked)">
            <div class="p-hidden-accessible">
                <input #cb type="checkbox" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="!tt.value || tt.value.length === 0" />
            </div>
            <div #box [ngClass]="{ 'p-checkbox-box': true, 'p-highlight': checked, 'p-focus': focused, 'p-disabled': !tt.value || tt.value.length === 0 }" role="checkbox" [attr.aria-checked]="checked">
                <ng-container *ngIf="!tt.headerCheckboxIconTemplate">
                    <CheckIcon *ngIf="checked" [styleClass]="'p-checkbox-icon'" />
                </ng-container>
                <span class="p-checkbox-icon" *ngIf="tt.headerCheckboxIconTemplate">
                    <ng-template *ngTemplateOutlet="tt.headerCheckboxIconTemplate; context: { $implicit: checked }"></ng-template>
                </span>
            </div>
        </div>
    `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: TreeTableService
  }, {
    type: ChangeDetectorRef
  }], {
    boxViewChild: [{
      type: ViewChild,
      args: ["box"]
    }]
  });
})();
var TTEditableColumn = class _TTEditableColumn {
  tt;
  el;
  zone;
  data;
  field;
  ttEditableColumnDisabled;
  constructor(tt, el, zone) {
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      DomHandler.addClass(this.el.nativeElement, "p-editable-column");
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.tt.editingCellClick = true;
      if (this.tt.editingCell) {
        if (this.tt.editingCell !== this.el.nativeElement) {
          if (!this.tt.isEditingCellValid()) {
            return;
          }
          DomHandler.removeClass(this.tt.editingCell, "p-cell-editing");
          this.openCell();
        }
      } else {
        this.openCell();
      }
    }
  }
  openCell() {
    this.tt.updateEditingCell(this.el.nativeElement, this.data, this.field);
    DomHandler.addClass(this.el.nativeElement, "p-cell-editing");
    this.tt.onEditInit.emit({
      field: this.field,
      data: this.data
    });
    this.tt.editingCellClick = true;
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        let focusable = DomHandler.findSingle(this.el.nativeElement, "input, textarea");
        if (focusable) {
          focusable.focus();
        }
      }, 50);
    });
  }
  closeEditingCell() {
    DomHandler.removeClass(this.tt.editingCell, "p-checkbox-icon");
    this.tt.editingCell = null;
    this.tt.unbindDocumentEditListener();
  }
  onKeyDown(event) {
    if (this.isEnabled()) {
      if (event.code == "Enter" && !event.shiftKey) {
        if (this.tt.isEditingCellValid()) {
          DomHandler.removeClass(this.tt.editingCell, "p-cell-editing");
          this.closeEditingCell();
          this.tt.onEditComplete.emit({
            field: this.field,
            data: this.data
          });
        }
        event.preventDefault();
      } else if (event.code == "Escape") {
        if (this.tt.isEditingCellValid()) {
          DomHandler.removeClass(this.tt.editingCell, "p-cell-editing");
          this.closeEditingCell();
          this.tt.onEditCancel.emit({
            field: this.field,
            data: this.data
          });
        }
        event.preventDefault();
      } else if (event.code == "Tab") {
        this.tt.onEditComplete.emit({
          field: this.field,
          data: this.data
        });
        if (event.shiftKey) this.moveToPreviousCell(event);
        else this.moveToNextCell(event);
      }
    }
  }
  findCell(element) {
    if (element) {
      let cell = element;
      while (cell && !DomHandler.hasClass(cell, "p-cell-editing")) {
        cell = cell.parentElement;
      }
      return cell;
    } else {
      return null;
    }
  }
  moveToPreviousCell(event) {
    let currentCell = this.findCell(event.target);
    let row = currentCell.parentElement;
    let targetCell = this.findPreviousEditableColumn(currentCell);
    if (targetCell) {
      DomHandler.invokeElementMethod(targetCell, "click");
      event.preventDefault();
    }
  }
  moveToNextCell(event) {
    let currentCell = this.findCell(event.target);
    let row = currentCell.parentElement;
    let targetCell = this.findNextEditableColumn(currentCell);
    if (targetCell) {
      DomHandler.invokeElementMethod(targetCell, "click");
      event.preventDefault();
    }
  }
  findPreviousEditableColumn(cell) {
    let prevCell = cell.previousElementSibling;
    if (!prevCell) {
      let previousRow = cell.parentElement ? cell.parentElement.previousElementSibling : null;
      if (previousRow) {
        prevCell = previousRow.lastElementChild;
      }
    }
    if (prevCell) {
      if (DomHandler.hasClass(prevCell, "p-editable-column")) return prevCell;
      else return this.findPreviousEditableColumn(prevCell);
    } else {
      return null;
    }
  }
  findNextEditableColumn(cell) {
    let nextCell = cell.nextElementSibling;
    if (!nextCell) {
      let nextRow = cell.parentElement ? cell.parentElement.nextElementSibling : null;
      if (nextRow) {
        nextCell = nextRow.firstElementChild;
      }
    }
    if (nextCell) {
      if (DomHandler.hasClass(nextCell, "p-editable-column")) return nextCell;
      else return this.findNextEditableColumn(nextCell);
    } else {
      return null;
    }
  }
  isEnabled() {
    return this.ttEditableColumnDisabled !== true;
  }
  static ɵfac = function TTEditableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTEditableColumn)(ɵɵdirectiveInject(TreeTable), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TTEditableColumn,
    selectors: [["", "ttEditableColumn", ""]],
    hostAttrs: [1, "p-element"],
    hostBindings: function TTEditableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function TTEditableColumn_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown", function TTEditableColumn_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
    },
    inputs: {
      data: [0, "ttEditableColumn", "data"],
      field: [0, "ttEditableColumnField", "field"],
      ttEditableColumnDisabled: [2, "ttEditableColumnDisabled", "ttEditableColumnDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTEditableColumn, [{
    type: Directive,
    args: [{
      selector: "[ttEditableColumn]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    data: [{
      type: Input,
      args: ["ttEditableColumn"]
    }],
    field: [{
      type: Input,
      args: ["ttEditableColumnField"]
    }],
    ttEditableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var TreeTableCellEditor = class _TreeTableCellEditor {
  tt;
  editableColumn;
  templates;
  inputTemplate;
  outputTemplate;
  constructor(tt, editableColumn) {
    this.tt = tt;
    this.editableColumn = editableColumn;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "input":
          this.inputTemplate = item.template;
          break;
        case "output":
          this.outputTemplate = item.template;
          break;
      }
    });
  }
  static ɵfac = function TreeTableCellEditor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeTableCellEditor)(ɵɵdirectiveInject(TreeTable), ɵɵdirectiveInject(TTEditableColumn));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TreeTableCellEditor,
    selectors: [["p-treeTableCellEditor"]],
    contentQueries: function TreeTableCellEditor_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]],
    template: function TreeTableCellEditor_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, TreeTableCellEditor_ng_container_0_Template, 2, 1, "ng-container", 0)(1, TreeTableCellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.tt.editingCell === ctx.editableColumn.el.nativeElement);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.tt.editingCell || ctx.tt.editingCell !== ctx.editableColumn.el.nativeElement);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeTableCellEditor, [{
    type: Component,
    args: [{
      selector: "p-treeTableCellEditor",
      template: `
        <ng-container *ngIf="tt.editingCell === editableColumn.el.nativeElement">
            <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!tt.editingCell || tt.editingCell !== editableColumn.el.nativeElement">
            <ng-container *ngTemplateOutlet="outputTemplate"></ng-container>
        </ng-container>
    `,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: TTEditableColumn
  }], {
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TTRow = class _TTRow {
  tt;
  el;
  zone;
  get level() {
    return this.rowNode?.["level"] + 1;
  }
  get styleClass() {
    return this.rowNode?.node["styleClass"] || "";
  }
  get expanded() {
    return this.rowNode?.node["expanded"];
  }
  rowNode;
  constructor(tt, el, zone) {
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  onKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      default:
        break;
    }
  }
  onArrowDownKey(event) {
    let nextRow = this.el?.nativeElement?.nextElementSibling;
    if (nextRow) {
      this.focusRowChange(event.currentTarget, nextRow);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    let prevRow = this.el?.nativeElement?.previousElementSibling;
    if (prevRow) {
      this.focusRowChange(event.currentTarget, prevRow);
    }
    event.preventDefault();
  }
  onArrowRightKey(event) {
    const currentTarget = event.currentTarget;
    const isHiddenIcon = DomHandler.findSingle(currentTarget, "button").style.visibility === "hidden";
    if (!isHiddenIcon && !this.expanded && this.rowNode.node["children"]) {
      this.expand(event);
      currentTarget.tabIndex = -1;
    }
    event.preventDefault();
  }
  onArrowLeftKey(event) {
    const container = this.tt.containerViewChild?.nativeElement;
    const expandedRows = DomHandler.find(container, '[aria-expanded="true"]');
    const lastExpandedRow = expandedRows[expandedRows.length - 1];
    if (this.expanded) {
      this.collapse(event);
    }
    if (lastExpandedRow) {
      this.tt.toggleRowIndex = DomHandler.index(lastExpandedRow);
    }
    this.restoreFocus();
    event.preventDefault();
  }
  onHomeKey(event) {
    const firstElement = DomHandler.findSingle(this.tt.containerViewChild?.nativeElement, `tr[aria-level="${this.level}"]`);
    firstElement && DomHandler.focus(firstElement);
    event.preventDefault();
  }
  onEndKey(event) {
    const nodes = DomHandler.find(this.tt.containerViewChild?.nativeElement, `tr[aria-level="${this.level}"]`);
    const lastElement = nodes[nodes.length - 1];
    DomHandler.focus(lastElement);
    event.preventDefault();
  }
  onTabKey(event) {
    const rows = this.el.nativeElement ? [...DomHandler.find(this.el.nativeElement.parentNode, "tr")] : void 0;
    if (rows && ObjectUtils.isNotEmpty(rows)) {
      const hasSelectedRow = rows.some((row) => DomHandler.getAttribute(row, "data-p-highlight") || row.getAttribute("aria-checked") === "true");
      rows.forEach((row) => {
        row.tabIndex = -1;
      });
      if (hasSelectedRow) {
        const selectedNodes = rows.filter((node) => DomHandler.getAttribute(node, "data-p-highlight") || node.getAttribute("aria-checked") === "true");
        selectedNodes[0].tabIndex = 0;
        return;
      }
      rows[0].tabIndex = 0;
    }
  }
  expand(event) {
    this.tt.toggleRowIndex = DomHandler.index(this.el.nativeElement);
    this.rowNode.node["expanded"] = true;
    this.tt.updateSerializedValue();
    this.tt.tableService.onUIUpdate(this.tt.value);
    this.rowNode.node["children"] ? this.restoreFocus(this.tt.toggleRowIndex + 1) : this.restoreFocus();
    this.tt.onNodeExpand.emit({
      originalEvent: event,
      node: this.rowNode.node
    });
  }
  collapse(event) {
    this.rowNode.node["expanded"] = false;
    this.tt.updateSerializedValue();
    this.tt.tableService.onUIUpdate(this.tt.value);
    this.tt.onNodeCollapse.emit({
      originalEvent: event,
      node: this.rowNode.node
    });
  }
  focusRowChange(firstFocusableRow, currentFocusedRow, lastVisibleDescendant) {
    firstFocusableRow.tabIndex = "-1";
    currentFocusedRow.tabIndex = "0";
    DomHandler.focus(currentFocusedRow);
  }
  restoreFocus(index) {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        const container = this.tt.containerViewChild?.nativeElement;
        const row = DomHandler.findSingle(container, ".p-treetable-tbody").children[index || this.tt.toggleRowIndex];
        const rows = [...DomHandler.find(container, "tr")];
        rows && rows.forEach((r) => {
          if (!row.isSameNode(r)) {
            r.tabIndex = -1;
          }
        });
        if (row) {
          row.tabIndex = 0;
          row.focus();
        }
      }, 25);
    });
  }
  static ɵfac = function TTRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTRow)(ɵɵdirectiveInject(TreeTable), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TTRow,
    selectors: [["", "ttRow", ""]],
    hostAttrs: [1, "p-element"],
    hostVars: 7,
    hostBindings: function TTRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function TTRow_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("tabindex", "0")("aria-expanded", ctx.expanded)("aria-level", ctx.level)("data-pc-section", ctx.row)("role", ctx.row);
        ɵɵclassMap("p-element " + ctx.styleClass);
      }
    },
    inputs: {
      rowNode: [0, "ttRow", "rowNode"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTRow, [{
    type: Directive,
    args: [{
      selector: "[ttRow]",
      host: {
        class: "p-element",
        "[class]": `'p-element ' + styleClass`,
        "[attr.tabindex]": "'0'",
        "[attr.aria-expanded]": "expanded",
        "[attr.aria-level]": "level",
        "[attr.data-pc-section]": "row",
        "[attr.role]": "row"
      }
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    rowNode: [{
      type: Input,
      args: ["ttRow"]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var TreeTableToggler = class _TreeTableToggler {
  tt;
  config;
  rowNode;
  constructor(tt, config) {
    this.tt = tt;
    this.config = config;
  }
  get toggleButtonAriaLabel() {
    return this.config.translation ? this.rowNode.expanded ? this.config.translation.aria.collapseRow : this.config.translation.aria.expandRow : void 0;
  }
  onClick(event) {
    this.rowNode.node.expanded = !this.rowNode.node.expanded;
    if (this.rowNode.node.expanded) {
      this.tt.onNodeExpand.emit({
        originalEvent: event,
        node: this.rowNode.node
      });
    } else {
      this.tt.onNodeCollapse.emit({
        originalEvent: event,
        node: this.rowNode.node
      });
    }
    this.tt.updateSerializedValue();
    this.tt.tableService.onUIUpdate(this.tt.value);
    event.preventDefault();
  }
  static ɵfac = function TreeTableToggler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeTableToggler)(ɵɵdirectiveInject(TreeTable), ɵɵdirectiveInject(PrimeNGConfig));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TreeTableToggler,
    selectors: [["p-treeTableToggler"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      rowNode: "rowNode"
    },
    decls: 3,
    vars: 12,
    consts: [["type", "button", "tabindex", "-1", "pRipple", "", 1, "p-treetable-toggler", "p-link", 3, "click", "ngStyle"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TreeTableToggler_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function TreeTableToggler_Template_button_click_0_listener($event) {
          return ctx.onClick($event);
        });
        ɵɵtemplate(1, TreeTableToggler_ng_container_1_Template, 3, 2, "ng-container", 1)(2, TreeTableToggler_2_Template, 1, 0, null, 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngStyle", ɵɵpureFunction2(7, _c37, ctx.rowNode.node.leaf === false || ctx.rowNode.node.children && ctx.rowNode.node.children.length ? "visible" : "hidden", ctx.rowNode.level * 16 + "px"));
        ɵɵattribute("data-pc-section", "rowtoggler")("data-pc-group-section", "rowactionbutton")("aria-label", ctx.toggleButtonAriaLabel);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.tt.togglerIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.tt.togglerIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c8, ctx.rowNode.node.expanded));
      }
    },
    dependencies: () => [NgIf, NgTemplateOutlet, NgStyle, Ripple, ChevronDownIcon, ChevronRightIcon],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeTableToggler, [{
    type: Component,
    args: [{
      selector: "p-treeTableToggler",
      template: `
        <button
            type="button"
            class="p-treetable-toggler p-link"
            (click)="onClick($event)"
            tabindex="-1"
            pRipple
            [ngStyle]="{
                visibility: rowNode.node.leaf === false || (rowNode.node.children && rowNode.node.children.length) ? 'visible' : 'hidden',
                'margin-left': rowNode.level * 16 + 'px'
            }"
            [attr.data-pc-section]="'rowtoggler'"
            [attr.data-pc-group-section]="'rowactionbutton'"
            [attr.aria-label]="toggleButtonAriaLabel"
        >
            <ng-container *ngIf="!tt.togglerIconTemplate">
                <ChevronDownIcon *ngIf="rowNode.node.expanded" [attr.aria-hidden]="true" />
                <ChevronRightIcon *ngIf="!rowNode.node.expanded" [attr.aria-hidden]="true" />
            </ng-container>
            <ng-template *ngTemplateOutlet="tt.togglerIconTemplate; context: { $implicit: rowNode.node.expanded }"></ng-template>
        </button>
    `,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: PrimeNGConfig
  }], {
    rowNode: [{
      type: Input
    }]
  });
})();
var TreeTableModule = class _TreeTableModule {
  static ɵfac = function TreeTableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeTableModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TreeTableModule,
    declarations: [TreeTable, TreeTableToggler, TTScrollableView, TTBody, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor],
    imports: [CommonModule, PaginatorModule, RippleModule, ScrollerModule, SpinnerIcon, ArrowDownIcon, ArrowUpIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, CheckIcon, MinusIcon, ChevronDownIcon, ChevronRightIcon],
    exports: [TreeTable, SharedModule, TreeTableToggler, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, ScrollerModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, PaginatorModule, RippleModule, ScrollerModule, SpinnerIcon, ArrowDownIcon, ArrowUpIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, CheckIcon, MinusIcon, ChevronDownIcon, ChevronRightIcon, SharedModule, ScrollerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeTableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PaginatorModule, RippleModule, ScrollerModule, SpinnerIcon, ArrowDownIcon, ArrowUpIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, CheckIcon, MinusIcon, ChevronDownIcon, ChevronRightIcon],
      exports: [TreeTable, SharedModule, TreeTableToggler, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, ScrollerModule],
      declarations: [TreeTable, TreeTableToggler, TTScrollableView, TTBody, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor]
    }]
  }], null, null);
})();
export {
  TTBody,
  TTCheckbox,
  TTContextMenuRow,
  TTEditableColumn,
  TTHeaderCheckbox,
  TTReorderableColumn,
  TTResizableColumn,
  TTRow,
  TTScrollableView,
  TTSelectableRow,
  TTSelectableRowDblClick,
  TTSortIcon,
  TTSortableColumn,
  TreeTable,
  TreeTableCellEditor,
  TreeTableModule,
  TreeTableService,
  TreeTableToggler
};
//# sourceMappingURL=primeng_treetable.js.map

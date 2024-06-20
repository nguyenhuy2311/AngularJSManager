import './polyfills.server.mjs';
import {
  ActivatedRoute,
  ChangeDetectorRef,
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HttpClient,
  HttpClientModule,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgForOf,
  NgModule,
  Optional,
  Output,
  Renderer2,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  Self,
  SkipSelf,
  Version,
  booleanAttribute,
  bootstrapApplication,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  importProvidersFrom,
  inject,
  isPromise,
  isSubscribable,
  map,
  mergeApplicationConfig,
  provideClientHydration,
  provideHttpClient,
  provideRouter,
  provideServerRendering,
  setClassMetadata,
  withFetch,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OP274OZT.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-24VIC3GD.mjs";

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = "Qu\u1EA3n L\xFD D\u1EF1 \xC1n";
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 0, consts: [[1, "container"], ["id", "thanhmenu", 1, "bg-success", 2, "height", "60px"], [1, "navbar", "navbar-expand-lg", "bg-body-tertiary"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "href", "#", "routerLink", "/", 1, "nav-link", "active"], ["href", "#", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "#", "routerLink", "/du_an/them", 1, "dropdown-item"], ["href", "#", "routerLink", "/du_an", 1, "dropdown-item"], ["href", "#", "routerLink", "/nhan_vien/them", 1, "dropdown-item"], ["href", "#", "routerLink", "/nhan_vien", 1, "dropdown-item"], ["href", "#", "routerLink", "/task/them", 1, "dropdown-item"], ["href", "#", "routerLink", "/task", 1, "dropdown-item"], ["role", "search", 1, "d-flex"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "me-2"], ["type", "submit", 1, "btn", "btn-outline-success"], ["href", "#", "routerLink", "/dang_nhap", "role", "button", 1, "btn", "btn-success"], ["id", "breadcrumb", 1, "bg-warning-subtle", 2, "height", "35px"], [1, "d-flex", 2, "min-height", "300px"], ["id", "", 1, "col", 2, "min-height", "560px"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "nav", 2)(3, "div", 3)(4, "a", 4);
    \u0275\u0275text(5, "Qu\u1EA3n L\xFD D\u1EF1 \xC1n Fpoly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275element(7, "span", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
    \u0275\u0275text(12, "B\u1EA3ng \u0111i\u1EC1u khi\u1EC3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li", 9)(14, "a", 11);
    \u0275\u0275text(15, "Gi\u1EDBi thi\u1EC7u");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li", 12)(17, "a", 13);
    \u0275\u0275text(18, " Qu\u1EA3n l\xFD d\u1EF1 \xE1n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ul", 14)(20, "li")(21, "a", 15);
    \u0275\u0275text(22, "Th\xEAm d\u1EF1 \xE1n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "li")(24, "a", 16);
    \u0275\u0275text(25, "Danh s\xE1ch d\u1EF1 \xE1n");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "li", 12)(27, "a", 13);
    \u0275\u0275text(28, " Qu\u1EA3n l\xFD nh\xE2n vi\xEAn ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ul", 14)(30, "li")(31, "a", 17);
    \u0275\u0275text(32, "Th\xEAm nh\xE2n vi\xEAn");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li")(34, "a", 18);
    \u0275\u0275text(35, "Danh s\xE1ch nh\xE2n vi\xEAn");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "li", 12)(37, "a", 13);
    \u0275\u0275text(38, " Qu\u1EA3n l\xFD Task ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ul", 14)(40, "li")(41, "a", 19);
    \u0275\u0275text(42, "Th\xEAm Task");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "li")(44, "a", 20);
    \u0275\u0275text(45, "Danh s\xE1ch Task");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(46, "form", 21);
    \u0275\u0275element(47, "input", 22);
    \u0275\u0275elementStart(48, "button", 23);
    \u0275\u0275text(49, " Search ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "a", 24);
    \u0275\u0275text(51, "\u0110\u0103ng nh\u1EADp");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(52, "nav", 25);
    \u0275\u0275text(53, " Trang chu | ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "main", 26)(55, "article", 27);
    \u0275\u0275element(56, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(57, "footer");
    \u0275\u0275elementEnd();
  }
}, dependencies: [RouterOutlet, RouterModule, RouterLink], styles: ["\n\nfooter[_ngcontent-%COMP%] {\n  background-color: aliceblue;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=app.component-RQMV3JCZ.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 11 });
})();

// node_modules/@angular/forms/fesm2022/forms.mjs
var _BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
};
_BaseControlValueAccessor.\u0275fac = function BaseControlValueAccessor_Factory(t) {
  return new (t || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
};
_BaseControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BaseControlValueAccessor
});
var BaseControlValueAccessor = _BaseControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var _BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
};
_BuiltInControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BuiltInControlValueAccessor_BaseFactory;
  return function BuiltInControlValueAccessor_Factory(t) {
    return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(t || _BuiltInControlValueAccessor);
  };
})();
_BuiltInControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BuiltInControlValueAccessor,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var BuiltInControlValueAccessor = _BuiltInControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var _CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
};
_CheckboxControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckboxControlValueAccessor_BaseFactory;
  return function CheckboxControlValueAccessor_Factory(t) {
    return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(t || _CheckboxControlValueAccessor);
  };
})();
_CheckboxControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CheckboxControlValueAccessor,
  selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
  hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.checked);
      })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var CheckboxControlValueAccessor = _CheckboxControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var _DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
};
_DefaultValueAccessor.\u0275fac = function DefaultValueAccessor_Factory(t) {
  return new (t || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
};
_DefaultValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _DefaultValueAccessor,
  selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
  hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
        return ctx._handleInput($event.target.value);
      })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
        return ctx._compositionStart();
      })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
        return ctx._compositionEnd($event.target.value);
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var DefaultValueAccessor = _DefaultValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern)
    return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^")
      regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$")
      regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control)
      this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var _NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatus.\u0275fac = function NgControlStatus_Factory(t) {
  return new (t || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
};
_NgControlStatus.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgControlStatus,
  selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
  hostVars: 14,
  hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var NgControlStatus = _NgControlStatus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var _NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
};
_NgControlStatusGroup.\u0275fac = function NgControlStatusGroup_Factory(t) {
  return new (t || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
};
_NgControlStatusGroup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgControlStatusGroup,
  selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
  hostVars: 16,
  hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
    }
  },
  features: [\u0275\u0275InheritDefinitionFeature]
});
var NgControlStatusGroup = _NgControlStatusGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException() {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formControlNameExample}`);
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = false;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this.pristine = true;
    this.touched = false;
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  /**
   * Marks the control as `touched`. A control is touched by focus and
   * blur events that do not change the value.
   *
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsTouched(opts = {}) {
    this.touched = true;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(opts);
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   */
  markAllAsTouched() {
    this.markAsTouched({
      onlySelf: true
    });
    this._forEachChild((control) => control.markAllAsTouched());
  }
  /**
   * Marks the control as `untouched`.
   *
   * If the control has any children, also marks all children as `untouched`
   * and recalculates the `touched` status of all parent controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsDirty()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after the marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsUntouched(opts = {}) {
    this.touched = false;
    this._pendingTouched = false;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /**
   * Marks the control as `dirty`. A control becomes dirty when
   * the control's value is changed through the UI; compare `markAsTouched`.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsPristine()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsDirty(opts = {}) {
    this.pristine = false;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(opts);
    }
  }
  /**
   * Marks the control as `pristine`.
   *
   * If the control has any children, marks all children as `pristine`,
   * and recalculates the `pristine` status of all parent
   * controls.
   *
   * @see {@link markAsTouched()}
   * @see {@link markAsUntouched()}
   * @see {@link markAsDirty()}
   *
   * @param opts Configuration options that determine how the control emits events after
   * marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsPristine(opts = {}) {
    this.pristine = true;
    this._pendingDirty = false;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /**
   * Marks the control as `pending`.
   *
   * A control is pending while the control performs async validation.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates changes and
   * emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event with the latest status the control is marked pending.
   * When false, no events are emitted.
   *
   */
  markAsPending(opts = {}) {
    this.status = PENDING;
    if (opts.emitEvent !== false) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(opts);
    }
  }
  /**
   * Disables the control. This means the control is exempt from validation checks and
   * excluded from the aggregate value of any parent. Its status is `DISABLED`.
   *
   * If the control has children, all children are also disabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control is disabled.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is disabled.
   * When false, no events are emitted.
   */
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }));
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine();
      }
      this._parent._updateTouched();
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  /**
   * Recalculates the value and validation status of the control.
   *
   * By default, it also updates the value and validity of its ancestors.
   *
   * @param opts Configuration options determine how the control propagates changes and emits events
   * after updates and validity checks are applied.
   * * `onlySelf`: When true, only update this control. When false or not supplied,
   * update all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is updated.
   * When false, no events are emitted.
   */
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(opts.emitEvent);
      }
    }
    if (opts.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = true;
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = false;
        this.setErrors(errors, {
          emitEvent
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      this._hasOwnPendingAsyncValidator = false;
    }
  }
  /**
   * Sets errors on a form control when running validations manually, rather than automatically.
   *
   * Calling `setErrors` also updates the validity of the parent control.
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control errors are set.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
   * observable emits an event after the errors are set.
   *
   * @usageNotes
   *
   * ### Manually set the errors for a control
   *
   * ```
   * const login = new FormControl('someLogin');
   * login.setErrors({
   *   notUnique: true
   * });
   *
   * expect(login.valid).toEqual(false);
   * expect(login.errors).toEqual({ notUnique: true });
   *
   * login.setValue('someOtherLogin');
   *
   * expect(login.valid).toEqual(true);
   * ```
   */
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null)
      return null;
    if (!Array.isArray(currPath))
      currPath = currPath.split(".");
    if (currPath.length === 0)
      return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled())
      return DISABLED;
    if (this.errors)
      return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
      return PENDING;
    if (this._anyControlsHaveStatus(INVALID))
      return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts = {}) {
    this.pristine = !this._anyControlsDirty();
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts);
    }
  }
  /** @internal */
  _updateTouched(opts = {}) {
    this.touched = this._anyControlsTouched();
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name])
      return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name])
      this.controls[name]._registerOnCollectionChange(() => {
      });
    delete this.controls[name];
    if (control)
      this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control)
      _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor)
      _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path?.[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never")
    return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var _NgForm = class _NgForm extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
};
_NgForm.\u0275fac = function NgForm_Factory(t) {
  return new (t || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgForm.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgForm,
  selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
  hostBindings: function NgForm_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function NgForm_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    options: [InputFlags.None, "ngFormOptions", "options"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
});
var NgForm = _NgForm;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty)
        this.markAsDirty();
      if (this._pendingTouched)
        this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var _AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
};
_AbstractFormGroupDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AbstractFormGroupDirective_BaseFactory;
  return function AbstractFormGroupDirective_Factory(t) {
    return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(t || _AbstractFormGroupDirective);
  };
})();
_AbstractFormGroupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AbstractFormGroupDirective,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var AbstractFormGroupDirective = _AbstractFormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var _NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
};
_NgModelGroup.\u0275fac = function NgModelGroup_Factory(t) {
  return new (t || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_NgModelGroup.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgModelGroup,
  selectors: [["", "ngModelGroup", ""]],
  inputs: {
    name: [InputFlags.None, "ngModelGroup", "name"]
  },
  exportAs: ["ngModelGroup"],
  features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
});
var NgModelGroup = _NgModelGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var _NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name)
      this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
};
_NgModel.\u0275fac = function NgModel_Factory(t) {
  return new (t || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_NgModel.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgModel,
  selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
  inputs: {
    name: "name",
    isDisabled: [InputFlags.None, "disabled", "isDisabled"],
    model: [InputFlags.None, "ngModel", "model"],
    options: [InputFlags.None, "ngModelOptions", "options"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngModel"],
  features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var NgModel = _NgModel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var _\u0275NgNoValidate = class _\u0275NgNoValidate {
};
_\u0275NgNoValidate.\u0275fac = function \u0275NgNoValidate_Factory(t) {
  return new (t || _\u0275NgNoValidate)();
};
_\u0275NgNoValidate.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _\u0275NgNoValidate,
  selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
  hostAttrs: ["novalidate", ""]
});
var \u0275NgNoValidate = _\u0275NgNoValidate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var _NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_NumberValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275NumberValueAccessor_BaseFactory;
  return function NumberValueAccessor_Factory(t) {
    return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(t || _NumberValueAccessor);
  };
})();
_NumberValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NumberValueAccessor,
  selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
  hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var NumberValueAccessor = _NumberValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var _RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control)
      return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
};
_RadioControlRegistry.\u0275fac = function RadioControlRegistry_Factory(t) {
  return new (t || _RadioControlRegistry)();
};
_RadioControlRegistry.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _RadioControlRegistry,
  factory: _RadioControlRegistry.\u0275fac,
  providedIn: "root"
});
var RadioControlRegistry = _RadioControlRegistry;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName)
      this.name = this.formControlName;
  }
};
_RadioControlValueAccessor.\u0275fac = function RadioControlValueAccessor_Factory(t) {
  return new (t || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
};
_RadioControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RadioControlValueAccessor,
  selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
  hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
        return ctx.onChange();
      })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    name: "name",
    formControlName: "formControlName",
    value: "value"
  },
  features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var RadioControlValueAccessor = _RadioControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var _RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
};
_RangeValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RangeValueAccessor_BaseFactory;
  return function RangeValueAccessor_Factory(t) {
    return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(t || _RangeValueAccessor);
  };
})();
_RangeValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RangeValueAccessor,
  selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
  hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var RangeValueAccessor = _RangeValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var _FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
};
_FormControlDirective._ngModelWarningSentOnce = false;
_FormControlDirective.\u0275fac = function FormControlDirective_Factory(t) {
  return new (t || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormControlDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormControlDirective,
  selectors: [["", "formControl", ""]],
  inputs: {
    form: [InputFlags.None, "formControl", "form"],
    isDisabled: [InputFlags.None, "disabled", "isDisabled"],
    model: [InputFlags.None, "ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormControlDirective = _FormControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var _FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.submitted = false;
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submitted = false;
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
};
_FormGroupDirective.\u0275fac = function FormGroupDirective_Factory(t) {
  return new (t || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
};
_FormGroupDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormGroupDirective,
  selectors: [["", "formGroup", ""]],
  hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
        return ctx.onSubmit($event);
      })("reset", function FormGroupDirective_reset_HostBindingHandler() {
        return ctx.onReset();
      });
    }
  },
  inputs: {
    form: [InputFlags.None, "formGroup", "form"]
  },
  outputs: {
    ngSubmit: "ngSubmit"
  },
  exportAs: ["ngForm"],
  features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormGroupDirective = _FormGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var _FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
};
_FormGroupName.\u0275fac = function FormGroupName_Factory(t) {
  return new (t || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormGroupName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormGroupName,
  selectors: [["", "formGroupName", ""]],
  inputs: {
    name: [InputFlags.None, "formGroupName", "name"]
  },
  features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
});
var FormGroupName = _FormGroupName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var _FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
};
_FormArrayName.\u0275fac = function FormArrayName_Factory(t) {
  return new (t || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
};
_FormArrayName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormArrayName,
  selectors: [["", "formArrayName", ""]],
  inputs: {
    name: [InputFlags.None, "formArrayName", "name"]
  },
  features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
});
var FormArrayName = _FormArrayName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var _FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added)
      this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException();
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
};
_FormControlName._ngModelWarningSentOnce = false;
_FormControlName.\u0275fac = function FormControlName_Factory(t) {
  return new (t || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
};
_FormControlName.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _FormControlName,
  selectors: [["", "formControlName", ""]],
  inputs: {
    name: [InputFlags.None, "formControlName", "name"],
    isDisabled: [InputFlags.None, "disabled", "isDisabled"],
    model: [InputFlags.None, "ngModel", "model"]
  },
  outputs: {
    update: "ngModelChange"
  },
  features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var FormControlName = _FormControlName;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null)
    return `${value}`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var _SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
};
_SelectControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectControlValueAccessor_BaseFactory;
  return function SelectControlValueAccessor_Factory(t) {
    return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(t || _SelectControlValueAccessor);
  };
})();
_SelectControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SelectControlValueAccessor,
  selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
  hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target.value);
      })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var SelectControlValueAccessor = _SelectControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select)
      this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select)
      this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_NgSelectOption.\u0275fac = function NgSelectOption_Factory(t) {
  return new (t || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
};
_NgSelectOption.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgSelectOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var NgSelectOption = _NgSelectOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null)
    return `${value}`;
  if (typeof value === "string")
    value = `'${value}'`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var _SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value))
        return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
};
_SelectMultipleControlValueAccessor.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectMultipleControlValueAccessor_BaseFactory;
  return function SelectMultipleControlValueAccessor_Factory(t) {
    return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(t || _SelectMultipleControlValueAccessor);
  };
})();
_SelectMultipleControlValueAccessor.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SelectMultipleControlValueAccessor,
  selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
  hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
        return ctx.onChange($event.target);
      })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    compareWith: "compareWith"
  },
  features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
});
var SelectMultipleControlValueAccessor = _SelectMultipleControlValueAccessor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var _\u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null)
      return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
};
_\u0275NgSelectMultipleOption.\u0275fac = function \u0275NgSelectMultipleOption_Factory(t) {
  return new (t || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
};
_\u0275NgSelectMultipleOption.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _\u0275NgSelectMultipleOption,
  selectors: [["option"]],
  inputs: {
    ngValue: "ngValue",
    value: "value"
  }
});
var \u0275NgSelectMultipleOption = _\u0275NgSelectMultipleOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var _AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
};
_AbstractValidatorDirective.\u0275fac = function AbstractValidatorDirective_Factory(t) {
  return new (t || _AbstractValidatorDirective)();
};
_AbstractValidatorDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AbstractValidatorDirective,
  features: [\u0275\u0275NgOnChangesFeature]
});
var AbstractValidatorDirective = _AbstractValidatorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var _MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max) => maxValidator(max);
  }
};
_MaxValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MaxValidator_BaseFactory;
  return function MaxValidator_Factory(t) {
    return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(t || _MaxValidator);
  };
})();
_MaxValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MaxValidator,
  selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
    }
  },
  inputs: {
    max: "max"
  },
  features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MaxValidator = _MaxValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var _MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min) => minValidator(min);
  }
};
_MinValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MinValidator_BaseFactory;
  return function MinValidator_Factory(t) {
    return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(t || _MinValidator);
  };
})();
_MinValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MinValidator,
  selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
    }
  },
  inputs: {
    min: "min"
  },
  features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MinValidator = _MinValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var _RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
};
_RequiredValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RequiredValidator_BaseFactory;
  return function RequiredValidator_Factory(t) {
    return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(t || _RequiredValidator);
  };
})();
_RequiredValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RequiredValidator,
  selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
  hostVars: 1,
  hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("required", ctx._enabled ? "" : null);
    }
  },
  inputs: {
    required: "required"
  },
  features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var RequiredValidator = _RequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var _CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
};
_CheckboxRequiredValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CheckboxRequiredValidator_BaseFactory;
  return function CheckboxRequiredValidator_Factory(t) {
    return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(t || _CheckboxRequiredValidator);
  };
})();
_CheckboxRequiredValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CheckboxRequiredValidator,
  selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("required", ctx._enabled ? "" : null);
    }
  },
  features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var CheckboxRequiredValidator = _CheckboxRequiredValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var _EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
};
_EmailValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EmailValidator_BaseFactory;
  return function EmailValidator_Factory(t) {
    return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(t || _EmailValidator);
  };
})();
_EmailValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _EmailValidator,
  selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
  inputs: {
    email: "email"
  },
  features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var EmailValidator = _EmailValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var _MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
};
_MinLengthValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MinLengthValidator_BaseFactory;
  return function MinLengthValidator_Factory(t) {
    return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(t || _MinLengthValidator);
  };
})();
_MinLengthValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MinLengthValidator,
  selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
    }
  },
  inputs: {
    minlength: "minlength"
  },
  features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MinLengthValidator = _MinLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var _MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
};
_MaxLengthValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MaxLengthValidator_BaseFactory;
  return function MaxLengthValidator_Factory(t) {
    return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(t || _MaxLengthValidator);
  };
})();
_MaxLengthValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MaxLengthValidator,
  selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
    }
  },
  inputs: {
    maxlength: "maxlength"
  },
  features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var MaxLengthValidator = _MaxLengthValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var _PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
};
_PatternValidator.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275PatternValidator_BaseFactory;
  return function PatternValidator_Factory(t) {
    return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(t || _PatternValidator);
  };
})();
_PatternValidator.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _PatternValidator,
  selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function PatternValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
    }
  },
  inputs: {
    pattern: "pattern"
  },
  features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
});
var PatternValidator = _PatternValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var _\u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
};
_\u0275InternalFormsSharedModule.\u0275fac = function \u0275InternalFormsSharedModule_Factory(t) {
  return new (t || _\u0275InternalFormsSharedModule)();
};
_\u0275InternalFormsSharedModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _\u0275InternalFormsSharedModule
});
_\u0275InternalFormsSharedModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var \u0275InternalFormsSharedModule = _\u0275InternalFormsSharedModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0)
      adjustedIndex = 0;
    if (this.controls[adjustedIndex])
      this.controls[adjustedIndex]._registerOnCollectionChange(() => {
      });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null)
      return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options);
    this._updateTouched(options);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1)
      return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated)
      this.updateValueAndValidity({
        onlySelf: true
      });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled)
        return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var _FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
};
_FormBuilder.\u0275fac = function FormBuilder_Factory(t) {
  return new (t || _FormBuilder)();
};
_FormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FormBuilder,
  factory: _FormBuilder.\u0275fac,
  providedIn: "root"
});
var FormBuilder = _FormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NonNullableFormBuilder = class _NonNullableFormBuilder {
};
_NonNullableFormBuilder.\u0275fac = function NonNullableFormBuilder_Factory(t) {
  return new (t || _NonNullableFormBuilder)();
};
_NonNullableFormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NonNullableFormBuilder,
  factory: () => (() => inject(FormBuilder).nonNullable)(),
  providedIn: "root"
});
var NonNullableFormBuilder = _NonNullableFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var _UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
};
_UntypedFormBuilder.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275UntypedFormBuilder_BaseFactory;
  return function UntypedFormBuilder_Factory(t) {
    return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(t || _UntypedFormBuilder);
  };
})();
_UntypedFormBuilder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UntypedFormBuilder,
  factory: _UntypedFormBuilder.\u0275fac,
  providedIn: "root"
});
var UntypedFormBuilder = _UntypedFormBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("17.3.8");
var _FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_FormsModule.\u0275fac = function FormsModule_Factory(t) {
  return new (t || _FormsModule)();
};
_FormsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _FormsModule
});
_FormsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [\u0275InternalFormsSharedModule]
});
var FormsModule = _FormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var _ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
};
_ReactiveFormsModule.\u0275fac = function ReactiveFormsModule_Factory(t) {
  return new (t || _ReactiveFormsModule)();
};
_ReactiveFormsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ReactiveFormsModule
});
_ReactiveFormsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [\u0275InternalFormsSharedModule]
});
var ReactiveFormsModule = _ReactiveFormsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// src/app/dulieu.service.ts
var _DulieuService = class _DulieuService {
  constructor(h) {
    this.h = h;
  }
  // Du an
  layDuAn() {
    return this.h.get("http://localhost:3000/du_an");
  }
  lay1DuAn(id = 0) {
    return this.h.get(`http://localhost:3000/du_an/${id}`);
  }
  themDuAn(da) {
    return this.h.post("http://localhost:3000/du_an", da);
  }
  suaDuAn(da) {
    return this.h.put("http://localhost:3000/du_an/" + da.id, da);
  }
  xoaDuAn(id) {
    return this.h.delete(`http://localhost:3000/du_an/${id}`);
  }
  // Nhan vien
  layNhanVien() {
    return this.h.get("http://localhost:3000/nhan_vien");
  }
  lay1NhanVien(id = 0) {
    return this.h.get(`http://localhost:3000/nhan_vien/${id}`);
  }
  themNhanVien(nv) {
    return this.h.post("http://localhost:3000/nhan_vien", nv);
  }
  suaNhanVien(nv) {
    return this.h.put("http://localhost:3000/nhan_vien/" + nv.id, nv);
  }
  xoaNhanVien(id) {
    return this.h.delete(`http://localhost:3000/nhan_vien/${id}`);
  }
  // Task
  layTask() {
    return this.h.get("http://localhost:3000/task");
  }
  lay1Task(id) {
    return this.h.get(`http://localhost:3000/task/${id}`);
  }
  themTask(task) {
    return this.h.post("http://localhost:3000/task", task);
  }
  suaTask(task) {
    return this.h.put("http://localhost:3000/task/" + task.id, task);
  }
  xoaTask(id) {
    return this.h.delete(`http://localhost:3000/task/${id}`);
  }
};
_DulieuService.\u0275fac = function DulieuService_Factory(t) {
  return new (t || _DulieuService)(\u0275\u0275inject(HttpClient));
};
_DulieuService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DulieuService, factory: _DulieuService.\u0275fac, providedIn: "root" });
var DulieuService = _DulieuService;

// src/app/home/home.component.ts
function HomeComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const client_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r1);
  }
}
function HomeComponent_li_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const duAn_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(duAn_r2.ten_du_an);
  }
}
function HomeComponent_li_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const year_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(year_r3);
  }
}
var _HomeComponent = class _HomeComponent {
  constructor(d, route) {
    this.d = d;
    this.route = route;
    this.id = 0;
    this.data = {};
    this.listNhanVien = [];
    this.listDuAn = [];
    this.list_task = [];
  }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.d.lay1Task(this.id).subscribe((ta) => {
      this.data = ta;
    });
    this.d.layNhanVien().subscribe((data) => {
      this.listNhanVien = data;
    });
    this.d.layDuAn().subscribe((data) => {
      this.listDuAn = data;
    });
  }
  getTotalProjectCost() {
    return this.listDuAn.reduce((total, duAn) => total + duAn.tien, 0);
  }
  getActiveTasksCount() {
    return this.list_task.filter((task) => task.status.toString() === "dang xu ly").length;
  }
  getClients() {
    return ["Vin Group", "FPT Software", "Fpoly"];
  }
  getYears() {
    return [2024, 2023, 2022];
  }
  getMemberCount(region) {
    return this.listNhanVien.filter((nv) => nv.khu_vuc === region).length;
  }
  getMembersByRegion(region) {
    return this.listNhanVien.filter((nv) => nv.khu_vuc === region);
  }
  getInactiveMemberCount(region) {
    return this.listNhanVien.filter((nv) => nv.khu_vuc === region && nv.trangThai === "tam nghi").length;
  }
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)(\u0275\u0275directiveInject(DulieuService), \u0275\u0275directiveInject(ActivatedRoute));
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 165, vars: 24, consts: [[1, "container"], [1, "sidebar", "col-3"], [1, "avatar-container"], [1, "avatar"], ["src", "assets/images/admin.jpg", "alt", "Admin Avatar"], [1, "table"], [1, "table2"], [4, "ngFor", "ngForOf"], [1, "content", "col-6"], [1, "menu1"], [1, "left"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item", "dropdown"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], [1, "right"], [1, "chi_tiet"], [1, "tieu_de1"], [1, "tieu_de2"], ["scope", "row"], [1, "aside", "col-3"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasRight", "aria-controls", "offcanvasRight", 1, "btn", "btn-success"], ["tabindex", "-1", "id", "offcanvasRight", "aria-labelledby", "offcanvasRightLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "offcanvasRightLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close"], [1, "offcanvas-body"], [1, "asibe"], [1, "d-grid", "gap-2"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseEast", "aria-expanded", "false", "aria-controls", "collapseEast", 1, "btn", "btn-secondary"], ["id", "collapseEast", 1, "collapse"], [1, "card", "card-body"], [1, "list-group"], ["aria-current", "true", 1, "list-group-item", "active"], [1, "list-group-item"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseWest", "aria-expanded", "false", "aria-controls", "collapseWest", 1, "btn", "btn-secondary"], ["id", "collapseWest", 1, "collapse"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseSouth", "aria-expanded", "false", "aria-controls", "collapseSouth", 1, "btn", "btn-secondary"], ["id", "collapseSouth", 1, "collapse"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseNorth", "aria-expanded", "false", "aria-controls", "collapseNorth", 1, "btn", "btn-secondary"], ["id", "collapseNorth", 1, "collapse"], ["href", "#", 1, "dropdown-item"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3")(3, "b");
    \u0275\u0275text(4, "Tr\u01B0\u1EDFng nh\xF3m");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 2)(6, "div", 3);
    \u0275\u0275element(7, "img", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h4")(9, "b");
    \u0275\u0275text(10, "admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "hr");
    \u0275\u0275elementStart(12, "h6");
    \u0275\u0275text(13, "T\xF3m t\u1EAFt v\u1EC1 Team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "table", 5)(15, "thead")(16, "tr")(17, "th");
    \u0275\u0275text(18, "S\u1ED1 l\u01B0\u1EE3ng th\xE0nh vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tr")(22, "th");
    \u0275\u0275text(23, "S\u1ED1 l\u01B0\u1EE3ng d\u1EF1 \xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "tr")(27, "th");
    \u0275\u0275text(28, "T\u1ED5ng chi ph\xED c\xE1c d\u1EF1 \xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "tr")(33, "th");
    \u0275\u0275text(34, "C\xE1c Task \u0111ang x\u1EED l\xFD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "h6");
    \u0275\u0275text(38, "Kh\xE1ch h\xE0ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "table", 6)(40, "thead");
    \u0275\u0275template(41, HomeComponent_tr_41_Template, 3, 1, "tr", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 8)(43, "div", 9)(44, "div", 10)(45, "ul", 11)(46, "li", 12)(47, "a", 13);
    \u0275\u0275text(48, " D\u1EF1 \xE1n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ul", 14);
    \u0275\u0275template(50, HomeComponent_li_50_Template, 3, 1, "li", 7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 15)(52, "ul", 11)(53, "li", 12)(54, "a", 13);
    \u0275\u0275text(55, " N\u0103m ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "ul", 14);
    \u0275\u0275template(57, HomeComponent_li_57_Template, 3, 1, "li", 7);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(58, "div", 16)(59, "div", 17)(60, "h4");
    \u0275\u0275text(61, "T\u1ED5ng th\u1EC3 v\u1EC1 d\u1EF1 \xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "table", 5)(63, "thead")(64, "tr")(65, "th");
    \u0275\u0275text(66, "Chi ph\xED d\u1EF1 \xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "td");
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "tr")(71, "th");
    \u0275\u0275text(72, "Hi\u1EC7n t\u1EA1i \u0111\xE3 chi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "td");
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "tr")(77, "th");
    \u0275\u0275text(78, "C\xF2n l\u1EA1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "td");
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "currency");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(82, "div", 18)(83, "h4");
    \u0275\u0275text(84, "Th\xE0nh vi\xEAn c\u1EE7a nh\xF3m");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "table", 5)(86, "thead")(87, "tr")(88, "th");
    \u0275\u0275text(89, "Khu v\u1EF1c");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "th");
    \u0275\u0275text(91, "S\u1ED1 l\u01B0\u1EE3ng th\xE0nh vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "th");
    \u0275\u0275text(93, "Nh\xE2n vi\xEAn \u0111ang t\u1EA1m ngh\u0129");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "tbody")(95, "tr")(96, "td", 19);
    \u0275\u0275text(97, "B\u1EAFc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "td");
    \u0275\u0275text(99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "td");
    \u0275\u0275text(101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "tr")(103, "td", 19);
    \u0275\u0275text(104, "Trung");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "td");
    \u0275\u0275text(106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "td");
    \u0275\u0275text(108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "tr")(110, "td", 19);
    \u0275\u0275text(111, "Nam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "td");
    \u0275\u0275text(113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "td");
    \u0275\u0275text(115);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(116, "div", 20)(117, "button", 21);
    \u0275\u0275text(118, " Xem Th\xE0nh Vi\xEAn ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "div", 22)(120, "div", 23)(121, "h4", 24);
    \u0275\u0275text(122, " Th\xE0nh Vi\xEAn Nh\xF3m ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(123, "button", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div", 26)(125, "div", 27)(126, "div", 28)(127, "button", 29);
    \u0275\u0275text(128, " East ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 30)(130, "div", 31)(131, "ul", 32)(132, "li", 33);
    \u0275\u0275text(133, " An active item ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "li", 34);
    \u0275\u0275text(135, "A second item");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(136, "div", 28)(137, "button", 35);
    \u0275\u0275text(138, " West ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "div", 36)(140, "div", 31)(141, "ul", 32)(142, "li", 33);
    \u0275\u0275text(143, " An active item ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "li", 34);
    \u0275\u0275text(145, "A second item");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(146, "div", 28)(147, "button", 37);
    \u0275\u0275text(148, " South ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(149, "div", 38)(150, "div", 31)(151, "ul", 32)(152, "li", 33);
    \u0275\u0275text(153, " An active item ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "li", 34);
    \u0275\u0275text(155, "A second item");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(156, "div", 28)(157, "button", 39);
    \u0275\u0275text(158, " North ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(159, "div", 40)(160, "div", 31)(161, "ul", 32);
    \u0275\u0275element(162, "li", 33);
    \u0275\u0275elementStart(163, "li", 34);
    \u0275\u0275text(164, "A second item");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate(ctx.listNhanVien.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.listDuAn.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 16, ctx.getTotalProjectCost()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.getActiveTasksCount());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.getClients());
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx.listDuAn);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.getYears());
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 18, ctx.getTotalProjectCost()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 20, ctx.data.nhan_vien_id));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 22, ctx.data.priority));
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate(ctx.getMemberCount("B\u1EAFc"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.getInactiveMemberCount("B\u1EAFc"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.getMemberCount("Trung"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.getInactiveMemberCount("Trung"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.getMemberCount("Nam"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.getInactiveMemberCount("Nam"));
  }
}, dependencies: [FormsModule, CommonModule, NgForOf, CurrencyPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  height: 1000px;\n}\n.sidebar[_ngcontent-%COMP%] {\n  align-items: center;\n  border: 1px solid #ccc;\n  padding: 20px;\n  border-radius: 10px;\n  max-width: 400px;\n  margin: 0 auto;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background-color: #f9f9f9;\n}\n.sidebar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 10px 0;\n}\n.asibe[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 10px 0;\n}\n.avatar-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px 0;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 120px;\n  height: 160px;\n}\n.table[_ngcontent-%COMP%], .table2[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 20px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 10px;\n  text-align: left;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n.content[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 0 auto;\n  background-color: #f9f9f9;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.menu1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\n.nav-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 10px;\n}\n.nav-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333;\n  padding: 10px;\n  border: 1px solid #4caf50;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background-color: #4caf50;\n  color: white;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  display: none;\n  background-color: white;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  padding: 10px;\n  z-index: 1000;\n}\n.nav-item[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-decoration: none;\n  color: #333;\n  display: block;\n  transition: background-color 0.3s ease;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n}\n.chi_tiet[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.tieu_de1[_ngcontent-%COMP%], .tieu_de2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  background-color: rgb(85, 181, 94);\n  color: white;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 10px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ddd;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: rgb(90, 131, 94);\n  color: white;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n.aside[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=home.component-KANCUAX5.css.map */"] });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\home\\home.component.ts", lineNumber: 17 });
})();

// src/app/duan-list/duan-list.component.ts
function DuanListComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 2);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 5);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 2)(12, "button", 6);
    \u0275\u0275listener("click", function DuanListComponent_tr_14_Template_button_click_12_listener() {
      const da_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editDA(da_r2.id));
    });
    \u0275\u0275text(13, "S\u1EEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 7);
    \u0275\u0275listener("click", function DuanListComponent_tr_14_Template_button_click_14_listener() {
      const da_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteDA(da_r2.id));
    });
    \u0275\u0275text(15, "X\xF3a");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const da_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(da_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(da_r2.ten_du_an);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 4, da_r2.ngay_start, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 7, da_r2.tien), " VN\u0110");
  }
}
var _DuanListComponent = class _DuanListComponent {
  constructor(router) {
    this.router = router;
    this.list_du_an = [];
  }
  ngOnInit() {
    this.fetchDA();
  }
  fetchDA() {
    fetch(`http://localhost:3000/du_an`).then((res) => res.json()).then((data) => {
      this.list_du_an = data;
    });
  }
  editDA(id) {
    this.router.navigate([`/du_an/sua/${id}`]);
  }
  deleteDA(id) {
    if (confirm("B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a d\u1EF1 \xE1n n\xE0y kh\xF4ng?")) {
      fetch(`http://localhost:3000/du_an/${id}`, {
        method: "DELETE"
      }).then(() => {
        this.fetchDA();
      }).catch((error) => console.error("L\u1ED7i:", error));
    }
  }
};
_DuanListComponent.\u0275fac = function DuanListComponent_Factory(t) {
  return new (t || _DuanListComponent)(\u0275\u0275directiveInject(Router));
};
_DuanListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DuanListComponent, selectors: [["app-duan-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 1, consts: [[1, "table", "table-bordered", "border", "border-primary"], ["align", "top", 1, "bg-warning", "p-1", "fw-bold"], [1, "p-2"], [1, "text-end", "p-1"], [4, "ngFor", "ngForOf"], [1, "p-2", "text-end"], [1, "btn", "btn-primary", "me-2", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function DuanListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 0)(1, "caption", 1);
    \u0275\u0275text(2, " DANH S\xC1CH D\u1EF0 \xC1N ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "tr")(4, "th", 2);
    \u0275\u0275text(5, "id");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 2);
    \u0275\u0275text(7, "T\xEAn d\u1EF1 \xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 2);
    \u0275\u0275text(9, "Ng\xE0y Start");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 3);
    \u0275\u0275text(11, "Ti\u1EC1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 2);
    \u0275\u0275text(13, "H\xE0nh \u0111\u1ED9ng");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, DuanListComponent_tr_14_Template, 16, 9, "tr", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx.list_du_an);
  }
}, dependencies: [CommonModule, NgForOf, DecimalPipe, DatePipe] });
var DuanListComponent = _DuanListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DuanListComponent, { className: "DuanListComponent", filePath: "src\\app\\duan-list\\duan-list.component.ts", lineNumber: 13 });
})();

// src/app/duan-them/duan-them.component.ts
function DuanThemComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nv_r3 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", nv_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", nv_r3.ho, " ", nv_r3.ten, " ");
  }
}
function DuanThemComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nv_r4 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", nv_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", nv_r4.ho, " ", nv_r4.ten, " ");
  }
}
var _DuanThemComponent = class _DuanThemComponent {
  constructor(d, router) {
    this.d = d;
    this.router = router;
    this.listNhanVien = [];
  }
  ngOnInit() {
    this.d.layNhanVien().subscribe((data) => {
      this.listNhanVien = data;
    });
  }
  xuly(da) {
    this.d.themDuAn(da).subscribe((data) => {
      console.log(da, data);
      alert("Th\xEAm th\xE0nh c\xF4ng.");
      this.router.navigate(["/du_an"]);
    });
  }
};
_DuanThemComponent.\u0275fac = function DuanThemComponent_Factory(t) {
  return new (t || _DuanThemComponent)(\u0275\u0275directiveInject(DulieuService), \u0275\u0275directiveInject(Router));
};
_DuanThemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DuanThemComponent, selectors: [["app-duan-them"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 2, consts: [["frm1", "ngForm"], [1, "col-10", "m-auto", "border", "border-success", "px-3", "mt-2", 3, "ngSubmit"], [1, "mb-3"], ["type", "text", "name", "ten_du_an", "ngModel", "", 1, "form-control"], ["type", "date", "name", "ngay_start", "ngModel", "", 1, "form-control"], ["type", "number", "name", "tien", "ngModel", "", 1, "form-control"], ["name", "leader", "ngModel", "", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "thanh_vien", "ngModel", "", "multiple", "", "size", "4", 1, "form-control"], [1, "btn", "btn-success"], [3, "value"]], template: function DuanThemComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1, 0);
    \u0275\u0275listener("ngSubmit", function DuanThemComponent_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const frm1_r2 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(ctx.xuly(frm1_r2.value));
    });
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275text(3, " T\xEAn d\u1EF1 \xE1n ");
    \u0275\u0275element(4, "input", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275text(6, " Ng\xE0y b\u1EAFt \u0111\u1EA7u ");
    \u0275\u0275element(7, "input", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 2);
    \u0275\u0275text(9, " Ti\u1EC1n ");
    \u0275\u0275element(10, "input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 2);
    \u0275\u0275text(12, " Leader ");
    \u0275\u0275elementStart(13, "select", 6);
    \u0275\u0275template(14, DuanThemComponent_option_14_Template, 2, 3, "option", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 2);
    \u0275\u0275text(16, " Th\xE0nh vi\xEAn ");
    \u0275\u0275elementStart(17, "select", 8);
    \u0275\u0275template(18, DuanThemComponent_option_18_Template, 2, 3, "option", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 2)(20, "button", 9);
    \u0275\u0275text(21, "Th\xEAm d\u1EF1 \xE1n");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx.listNhanVien);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.listNhanVien);
  }
}, dependencies: [CommonModule, NgForOf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm] });
var DuanThemComponent = _DuanThemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DuanThemComponent, { className: "DuanThemComponent", filePath: "src\\app\\duan-them\\duan-them.component.ts", lineNumber: 16 });
})();

// src/app/duan-sua/duan-sua.component.ts
function DuanSuaComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nv_r2 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", nv_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", nv_r2.ho, " ", nv_r2.ten, " ");
  }
}
function DuanSuaComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nv_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", nv_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", nv_r3.ho, " ", nv_r3.ten, " ");
  }
}
var _DuanSuaComponent = class _DuanSuaComponent {
  constructor(d, route, router) {
    this.d = d;
    this.route = route;
    this.router = router;
    this.id = 0;
    this.data = {};
    this.listNhanVien = [];
  }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.d.layNhanVien().subscribe((data) => {
      this.listNhanVien = data;
    });
    this.d.lay1DuAn(this.id).subscribe((da) => {
      console.log("da=", da);
      this.data = da;
    });
  }
  xuly() {
    this.d.suaDuAn(this.data).subscribe((result) => {
      console.log("result=", result);
      alert("S\u1EEDa th\xE0nh c\xF4ng.");
      this.router.navigate(["/du_an"]);
    });
  }
};
_DuanSuaComponent.\u0275fac = function DuanSuaComponent_Factory(t) {
  return new (t || _DuanSuaComponent)(\u0275\u0275directiveInject(DulieuService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_DuanSuaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DuanSuaComponent, selectors: [["app-duan-sua"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 10, consts: [["frm1", "ngForm"], [1, "col-10", "m-auto", "border", "border-success", "px-3", "mt-2", 3, "ngSubmit"], [1, "mb-3"], ["type", "text", "name", "ten_du_an", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "ngay_start", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "tien", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "leader", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "thanh_vien", "multiple", "", "size", "4", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "btn", "btn-success"], [3, "value"], [3, "ngValue"]], template: function DuanSuaComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1, 0);
    \u0275\u0275listener("ngSubmit", function DuanSuaComponent_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.xuly());
    });
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275text(3, " T\xEAn d\u1EF1 \xE1n ");
    \u0275\u0275elementStart(4, "input", 3);
    \u0275\u0275twoWayListener("ngModelChange", function DuanSuaComponent_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.ten_du_an, $event) || (ctx.data.ten_du_an = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275text(6, " Ng\xE0y b\u1EAFt \u0111\u1EA7u ");
    \u0275\u0275elementStart(7, "input", 4);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275listener("ngModelChange", function DuanSuaComponent_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.data.ngay_start = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 2);
    \u0275\u0275text(10, " Ti\u1EC1n ");
    \u0275\u0275elementStart(11, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function DuanSuaComponent_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.tien, $event) || (ctx.data.tien = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 2);
    \u0275\u0275text(13, " Leader ");
    \u0275\u0275elementStart(14, "select", 6);
    \u0275\u0275twoWayListener("ngModelChange", function DuanSuaComponent_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.leader, $event) || (ctx.data.leader = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(15, DuanSuaComponent_option_15_Template, 2, 3, "option", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 2);
    \u0275\u0275text(17, " Th\xE0nh vi\xEAn ");
    \u0275\u0275elementStart(18, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function DuanSuaComponent_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.thanh_vien, $event) || (ctx.data.thanh_vien = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(19, DuanSuaComponent_option_19_Template, 2, 3, "option", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 2)(21, "button", 10);
    \u0275\u0275text(22, "S\u1EEDa d\u1EF1 \xE1n");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.ten_du_an);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind2(8, 7, ctx.data.ngay_start, "yyyy-MM-dd"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.tien);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.leader);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.listNhanVien);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.thanh_vien);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.listNhanVien);
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CommonModule, NgForOf, DatePipe] });
var DuanSuaComponent = _DuanSuaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DuanSuaComponent, { className: "DuanSuaComponent", filePath: "src\\app\\duan-sua\\duan-sua.component.ts", lineNumber: 16 });
})();

// src/app/nv-list/nv-list.component.ts
function NvListComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 2);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 2);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 2);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 2);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 2)(15, "button", 4);
    \u0275\u0275listener("click", function NvListComponent_tr_18_Template_button_click_15_listener() {
      const nv_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editDA(nv_r2.id));
    });
    \u0275\u0275text(16, "S\u1EEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 5);
    \u0275\u0275listener("click", function NvListComponent_tr_18_Template_button_click_17_listener() {
      const nv_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteDA(nv_r2.id));
    });
    \u0275\u0275text(18, "X\xF3a");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const nv_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", nv_r2.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", nv_r2.ho, " ", nv_r2.ten, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", nv_r2.gmail, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 7, nv_r2.ngay_sinh, "dd/MM/yyyy"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", nv_r2.phai, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", nv_r2.khu_vuc, "");
  }
}
var _NvListComponent = class _NvListComponent {
  constructor(router) {
    this.router = router;
    this.list_nv = [];
  }
  ngOnInit() {
    this.fetchNV();
  }
  fetchNV() {
    fetch(`http://localhost:3000/nhan_vien`).then((res) => res.json()).then((data) => {
      this.list_nv = data;
    });
  }
  editDA(id) {
    this.router.navigate([`/nhan_vien/sua/${id}`]);
  }
  deleteDA(id) {
    if (confirm("B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a nh\xE2n vi\xEAn n\xE0y kh\xF4ng?")) {
      fetch(`http://localhost:3000/nhan_vien/${id}`, {
        method: "DELETE"
      }).then(() => {
        this.fetchNV();
      }).catch((error) => console.error("L\u1ED7i:", error));
    }
  }
};
_NvListComponent.\u0275fac = function NvListComponent_Factory(t) {
  return new (t || _NvListComponent)(\u0275\u0275directiveInject(Router));
};
_NvListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NvListComponent, selectors: [["app-nv-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 1, consts: [[1, "table", "table-bordered", "border", "border-primary"], ["align", "top", 1, "bg-warning", "p-1", "fw-bold"], [1, "p-2"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "me-2", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function NvListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 0)(1, "caption", 1);
    \u0275\u0275text(2, " DANH S\xC1CH NH\xC2N VI\xCAN ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "tr")(4, "th", 2);
    \u0275\u0275text(5, "id");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 2);
    \u0275\u0275text(7, "H\u1ECD t\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 2);
    \u0275\u0275text(9, "Gmail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 2);
    \u0275\u0275text(11, "Ng\xE0y sinh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 2);
    \u0275\u0275text(13, "Gi\u1EDBi t\xEDnh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 2);
    \u0275\u0275text(15, "Khu v\u1EF1c");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 2);
    \u0275\u0275text(17, "H\xE0nh \u0111\u1ED9ng");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, NvListComponent_tr_18_Template, 19, 10, "tr", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx.list_nv);
  }
}, dependencies: [CommonModule, NgForOf, DatePipe] });
var NvListComponent = _NvListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NvListComponent, { className: "NvListComponent", filePath: "src\\app\\nv-list\\nv-list.component.ts", lineNumber: 13 });
})();

// src/app/nv-them/nv-them.component.ts
var _NvThemComponent = class _NvThemComponent {
  constructor(d, router) {
    this.d = d;
    this.router = router;
  }
  xuly(nv) {
    this.d.themNhanVien(nv).subscribe((data) => {
      console.log(nv, data);
      alert("Th\xEAm nh\xE2n vi\xEAn th\xE0nh c\xF4ng.");
      this.router.navigate(["/nhan_vien"]);
    });
  }
};
_NvThemComponent.\u0275fac = function NvThemComponent_Factory(t) {
  return new (t || _NvThemComponent)(\u0275\u0275directiveInject(DulieuService), \u0275\u0275directiveInject(Router));
};
_NvThemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NvThemComponent, selectors: [["app-nv-them"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 0, consts: [["frm1", "ngForm"], [1, "col-10", "m-auto", "border", "border-success", "px-3", "mt-2", 3, "ngSubmit"], [1, "mb-3"], ["type", "text", "name", "ho", "ngModel", "", 1, "form-control"], ["type", "text", "name", "ten", "ngModel", "", 1, "form-control"], ["type", "date", "name", "ngay_sinh", "ngModel", "", 1, "form-control"], ["type", "email", "name", "gmail", "ngModel", "", 1, "form-control"], ["type", "password", "name", "password", "ngModel", "", 1, "form-control"], ["type", "radio", "name", "phai", "ngModel", "", "value", "1"], ["type", "radio", "name", "phai", "ngModel", "", "value", "0"], ["name", "khu_vuc", "ngModel", "", 1, "form-control"], ["value", "B\u1EAFc"], ["value", "Trung"], ["value", "Nam"], [1, "btn", "btn-success"]], template: function NvThemComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1, 0);
    \u0275\u0275listener("ngSubmit", function NvThemComponent_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const frm1_r2 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(ctx.xuly(frm1_r2.value));
    });
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275text(3, " H\u1ECD ");
    \u0275\u0275element(4, "input", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275text(6, " T\xEAn ");
    \u0275\u0275element(7, "input", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 2);
    \u0275\u0275text(9, " Ng\xE0y sinh ");
    \u0275\u0275element(10, "input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 2);
    \u0275\u0275text(12, " Gmail ");
    \u0275\u0275element(13, "input", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 2);
    \u0275\u0275text(15, " Password ");
    \u0275\u0275element(16, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 2);
    \u0275\u0275text(18, " Gi\u1EDBi t\xEDnh ");
    \u0275\u0275element(19, "br")(20, "input", 8);
    \u0275\u0275text(21, "Nam ");
    \u0275\u0275element(22, "br")(23, "input", 9);
    \u0275\u0275text(24, "N\u1EEF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 2);
    \u0275\u0275text(26, " Khu v\u1EF1c ");
    \u0275\u0275elementStart(27, "select", 10)(28, "option", 11);
    \u0275\u0275text(29, "B\u1EAFc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 12);
    \u0275\u0275text(31, "Trung");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 13);
    \u0275\u0275text(33, "Nam");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 2)(35, "button", 14);
    \u0275\u0275text(36, "Th\xEAm nh\xE2n vi\xEAn");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CommonModule] });
var NvThemComponent = _NvThemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NvThemComponent, { className: "NvThemComponent", filePath: "src\\app\\nv-them\\nv-them.component.ts", lineNumber: 15 });
})();

// src/app/nv-sua/nv-sua.component.ts
var _NvSuaComponent = class _NvSuaComponent {
  constructor(d, route, router) {
    this.d = d;
    this.route = route;
    this.router = router;
    this.id = 0;
    this.data = {};
  }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.d.lay1NhanVien(this.id).subscribe((nv) => {
      console.log("nv = ", nv);
      this.data = nv;
    });
  }
  xuly() {
    this.d.suaNhanVien(this.data).subscribe((result) => {
      console.log("result = ", result);
      alert("S\u1EEDa nh\xE2n vi\xEAn th\xE0nh c\xF4ng.");
      this.router.navigate(["/nhan_vien"]);
    });
  }
};
_NvSuaComponent.\u0275fac = function NvSuaComponent_Factory(t) {
  return new (t || _NvSuaComponent)(\u0275\u0275directiveInject(DulieuService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_NvSuaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NvSuaComponent, selectors: [["app-nv-sua"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 13, consts: [["frm1", "ngForm"], [1, "col-10", "m-auto", "border", "border-success", "px-3", "mt-2", 3, "ngSubmit"], [1, "mb-3"], ["type", "text", "name", "ho", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "ten", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "ngay_sinh", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "gmail", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "phai", 3, "ngModelChange", "value", "ngModel"], ["name", "khu_vuc", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "B\u1EAFc"], ["value", "Trung"], ["value", "Nam"], [1, "btn", "btn-success"]], template: function NvSuaComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1, 0);
    \u0275\u0275listener("ngSubmit", function NvSuaComponent_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.xuly());
    });
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275text(3, " H\u1ECD ");
    \u0275\u0275elementStart(4, "input", 3);
    \u0275\u0275twoWayListener("ngModelChange", function NvSuaComponent_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.ho, $event) || (ctx.data.ho = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275text(6, " T\xEAn ");
    \u0275\u0275elementStart(7, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function NvSuaComponent_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.ten, $event) || (ctx.data.ten = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 2);
    \u0275\u0275text(9, " Ng\xE0y sinh ");
    \u0275\u0275elementStart(10, "input", 5);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275listener("ngModelChange", function NvSuaComponent_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.data.ngay_sinh = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 2);
    \u0275\u0275text(13, " Gmail ");
    \u0275\u0275elementStart(14, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function NvSuaComponent_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.gmail, $event) || (ctx.data.gmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 2);
    \u0275\u0275text(16, " Password ");
    \u0275\u0275elementStart(17, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function NvSuaComponent_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.password, $event) || (ctx.data.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 2);
    \u0275\u0275text(19, " Gi\u1EDBi t\xEDnh ");
    \u0275\u0275element(20, "br");
    \u0275\u0275elementStart(21, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function NvSuaComponent_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.phai, $event) || (ctx.data.phai = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "Nam ");
    \u0275\u0275element(23, "br");
    \u0275\u0275elementStart(24, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function NvSuaComponent_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.phai, $event) || (ctx.data.phai = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "N\u1EEF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 2);
    \u0275\u0275text(27, " Khu v\u1EF1c ");
    \u0275\u0275elementStart(28, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function NvSuaComponent_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.khu_vuc, $event) || (ctx.data.khu_vuc = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 10);
    \u0275\u0275text(30, "B\u1EAFc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 11);
    \u0275\u0275text(32, "Trung");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 12);
    \u0275\u0275text(34, "Nam");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 2)(36, "button", 13);
    \u0275\u0275text(37, "S\u1EEDa nh\xE2n vi\xEAn");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.ho);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.ten);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind2(11, 10, ctx.data.ngay_sinh, "yyyy-MM-dd"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.gmail);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.password);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", 1);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.phai);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", 0);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.phai);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.khu_vuc);
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CommonModule, DatePipe] });
var NvSuaComponent = _NvSuaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NvSuaComponent, { className: "NvSuaComponent", filePath: "src\\app\\nv-sua\\nv-sua.component.ts", lineNumber: 15 });
})();

// src/app/task-list/task-list.component.ts
function TaskListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
    \u0275\u0275text(8);
    \u0275\u0275element(9, "br");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 5);
    \u0275\u0275text(12);
    \u0275\u0275element(13, "br");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r1.ten_task);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", task_r1.mo_ta, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Priority: ", task_r1.priority, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Status: ", task_r1.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Nh\xE2n vi\xEAn: ", task_r1.nhan_vien_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" D\u1EF1 \xE1n: ", task_r1.du_an_id, " ");
  }
}
var _TaskListComponent = class _TaskListComponent {
  constructor() {
    this.list_task = [];
  }
  ngOnInit() {
    fetch(`http://localhost:3000/task`).then((res) => res.json()).then((data) => {
      this.list_task = data;
    });
  }
};
_TaskListComponent.\u0275fac = function TaskListComponent_Factory(t) {
  return new (t || _TaskListComponent)();
};
_TaskListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskListComponent, selectors: [["app-task-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "bg-warning", "mt-0", "p-2", "fs-4"], ["class", "mt-2", 4, "ngFor", "ngForOf"], [1, "mt-2"], [1, "ms-1"], [1, "mb-0", "px-3", "pb-2", "border-bottom", "border-primary", "d-flex"], [1, "col-6"]], template: function TaskListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1, " DANH S\xC1CH TASK");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, TaskListComponent_div_2_Template, 15, 6, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.list_task);
  }
}, dependencies: [CommonModule, NgForOf] });
var TaskListComponent = _TaskListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskListComponent, { className: "TaskListComponent", filePath: "src\\app\\task-list\\task-list.component.ts", lineNumber: 12 });
})();

// src/app/task-them/task-them.component.ts
function TaskThemComponent_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const da_r3 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", da_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", da_r3.ten_du_an, " ");
  }
}
function TaskThemComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nv_r4 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", nv_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", nv_r4.ho, " ", nv_r4.ten, " ");
  }
}
var _TaskThemComponent = class _TaskThemComponent {
  constructor(d) {
    this.d = d;
    this.listNhanVien = [];
    this.listDuAn = [];
  }
  ngOnInit() {
    this.d.layNhanVien().subscribe((data) => {
      this.listNhanVien = data;
    });
    this.d.layDuAn().subscribe((data) => {
      this.listDuAn = data;
    });
  }
  xuly(ta) {
    this.d.themTask(ta).subscribe((result) => {
      console.log(ta, result);
      alert("Th\xEAm Th\xE0nh C\xF4ng");
    });
  }
};
_TaskThemComponent.\u0275fac = function TaskThemComponent_Factory(t) {
  return new (t || _TaskThemComponent)(\u0275\u0275directiveInject(DulieuService));
};
_TaskThemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskThemComponent, selectors: [["app-task-them"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 2, consts: [["frm1", "ngForm"], [1, "col-10", "m-auto", "border", "border-success", "px-3", "mt-2", 3, "submit"], [1, "mb-3"], ["type", "text", "name", "ten_task", "ngModel", "", 1, "form-control"], ["name", "du_an_id", "ngModel", "", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "nhan_vien_id", "ngModel", "", 1, "form-control"], ["for", ""], ["type", "number", "name", "status", "ngModel", "", 1, "form-control"], ["type", "number", "name", "priority", "ngModel", "", 1, "form-control"], ["rows", "4", "name", "mo_ta", "ngModel", "", 1, "form-control"], [1, "btn", "btn-success"], [3, "value"]], template: function TaskThemComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1, 0);
    \u0275\u0275listener("submit", function TaskThemComponent_Template_form_submit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const frm1_r2 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(ctx.xuly(frm1_r2.value));
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "label");
    \u0275\u0275text(4, " T\xEAn Task ");
    \u0275\u0275element(5, "input", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 2)(7, "label");
    \u0275\u0275text(8, " D\u1EF1 \xC1n ");
    \u0275\u0275elementStart(9, "select", 4);
    \u0275\u0275template(10, TaskThemComponent_option_10_Template, 2, 2, "option", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 2)(12, "label");
    \u0275\u0275text(13, " Nh\xE2n Vi\xEAn Th\u1EF1c Hi\u1EC7n ");
    \u0275\u0275elementStart(14, "select", 6);
    \u0275\u0275template(15, TaskThemComponent_option_15_Template, 2, 3, "option", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 2)(17, "label", 7);
    \u0275\u0275text(18, " Status ");
    \u0275\u0275element(19, "input", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 2)(21, "label", 7);
    \u0275\u0275text(22, " Priority ");
    \u0275\u0275element(23, "input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 2)(25, "label", 7);
    \u0275\u0275text(26, " M\xF4 t\u1EA3 ");
    \u0275\u0275element(27, "textarea", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 2)(29, "button", 11);
    \u0275\u0275text(30, "Th\xEAm task");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx.listDuAn);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.listNhanVien);
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CommonModule, NgForOf] });
var TaskThemComponent = _TaskThemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskThemComponent, { className: "TaskThemComponent", filePath: "src\\app\\task-them\\task-them.component.ts", lineNumber: 16 });
})();

// src/app/task-sua/task-sua.component.ts
function TaskSuaComponent_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const da_r2 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", da_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", da_r2.ten_du_an, " ");
  }
}
function TaskSuaComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nv_r3 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", nv_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", nv_r3.ho, " ", nv_r3.ten, " ");
  }
}
var _TaskSuaComponent = class _TaskSuaComponent {
  constructor(d, route) {
    this.d = d;
    this.route = route;
    this.id = 0;
    this.data = {};
    this.listNhanVien = [];
    this.listDuAn = [];
  }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.d.lay1Task(this.id).subscribe((ta) => {
      console.log("ta=", ta);
      this.data = ta;
    });
    this.d.layNhanVien().subscribe((data) => {
      this.listNhanVien = data;
    });
    this.d.layDuAn().subscribe((data) => {
      this.listDuAn = data;
    });
  }
  xuly() {
    this.d.suaTask(this.data).subscribe((result) => {
      console.log(result);
      alert("S\u1EEDa Th\xE0nh C\xF4ng");
    });
  }
};
_TaskSuaComponent.\u0275fac = function TaskSuaComponent_Factory(t) {
  return new (t || _TaskSuaComponent)(\u0275\u0275directiveInject(DulieuService), \u0275\u0275directiveInject(ActivatedRoute));
};
_TaskSuaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskSuaComponent, selectors: [["app-task-sua"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 7, consts: [["frm1", "ngForm"], [1, "col-10", "m-auto", "border", "border-success", "px-3", "mt-2", 3, "ngSubmit"], [1, "mb-3"], ["for", ""], ["type", "text", "name", "ten_task", "[(ngModel)", "data.ten_task", 1, "form-control"], ["name", "du_an_id", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "nhan_vien_id", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "status", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "priority", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "4", "name", "mo_ta", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-success"], [3, "value"]], template: function TaskSuaComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1, 0);
    \u0275\u0275listener("ngSubmit", function TaskSuaComponent_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.xuly());
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "label", 3);
    \u0275\u0275text(4, " T\xEAn Task ");
    \u0275\u0275element(5, "input", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 2)(7, "label");
    \u0275\u0275text(8, " D\u1EF1 \xC1n ");
    \u0275\u0275elementStart(9, "select", 5);
    \u0275\u0275twoWayListener("ngModelChange", function TaskSuaComponent_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.du_an_id, $event) || (ctx.data.du_an_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(10, TaskSuaComponent_option_10_Template, 2, 2, "option", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 2)(12, "label");
    \u0275\u0275text(13, " Nh\xE2n Vi\xEAn Th\u1EF1c Hi\u1EC7n ");
    \u0275\u0275elementStart(14, "select", 7);
    \u0275\u0275twoWayListener("ngModelChange", function TaskSuaComponent_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.nhan_vien_id, $event) || (ctx.data.nhan_vien_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, TaskSuaComponent_option_15_Template, 2, 3, "option", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 2);
    \u0275\u0275text(17, " Status ");
    \u0275\u0275elementStart(18, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function TaskSuaComponent_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.status, $event) || (ctx.data.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 2);
    \u0275\u0275text(20, " Priority ");
    \u0275\u0275elementStart(21, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function TaskSuaComponent_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.priority, $event) || (ctx.data.priority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 2);
    \u0275\u0275text(23, " M\xF4 t\u1EA3 ");
    \u0275\u0275elementStart(24, "textarea", 10);
    \u0275\u0275twoWayListener("ngModelChange", function TaskSuaComponent_Template_textarea_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.data.mo_ta, $event) || (ctx.data.mo_ta = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 2)(26, "button", 11);
    \u0275\u0275text(27, "S\u1EEDa Task");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.du_an_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.listDuAn);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.nhan_vien_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.listNhanVien);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.status);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.priority);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.data.mo_ta);
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CommonModule, NgForOf] });
var TaskSuaComponent = _TaskSuaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskSuaComponent, { className: "TaskSuaComponent", filePath: "src\\app\\task-sua\\task-sua.component.ts", lineNumber: 16 });
})();

// src/app/not-found/not-found.component.ts
var _NotFoundComponent = class _NotFoundComponent {
};
_NotFoundComponent.\u0275fac = function NotFoundComponent_Factory(t) {
  return new (t || _NotFoundComponent)();
};
_NotFoundComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "not-found works!");
    \u0275\u0275elementEnd();
  }
} });
var NotFoundComponent = _NotFoundComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src\\app\\not-found\\not-found.component.ts", lineNumber: 10 });
})();

// src/app/dang-nhap/dang-nhap.component.ts
var _DangNhapComponent = class _DangNhapComponent {
};
_DangNhapComponent.\u0275fac = function DangNhapComponent_Factory(t) {
  return new (t || _DangNhapComponent)();
};
_DangNhapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DangNhapComponent, selectors: [["app-dang-nhap"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 0, consts: [[1, "container"], [1, "wrapper"], [1, "title"], ["action", "#"], ["for", ""], [1, "row"], [1, "fas", "fa-user"], ["type", "text", "placeholder", "email", "required", ""], [1, "fas", "fa-lock"], ["type", "password", "placeholder", "Password", "required", ""], [1, "pass"], ["href", "#"], [1, "row", "button"], ["type", "submit", "value", "Login"]], template: function DangNhapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
    \u0275\u0275text(4, "\u0110\u0103ng nh\u1EADp");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 3)(6, "label", 4);
    \u0275\u0275text(7, "T\xE0i kho\u1EA3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275element(9, "i", 6)(10, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label", 4);
    \u0275\u0275text(12, "M\u1EADt kh\u1EA9u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 5);
    \u0275\u0275element(14, "i", 8)(15, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10)(17, "a", 11);
    \u0275\u0275text(18, "Qu\xEAn m\u1EADt kh\u1EA9u?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 12);
    \u0275\u0275element(20, "input", 13);
    \u0275\u0275elementEnd()()()();
  }
}, dependencies: [CommonModule], styles: ["\n\n[_ngcontent-%COMP%]::selection {\n  background: rgba(26, 188, 156, 0.3);\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 460px;\n  padding: 0 20px;\n  margin: 170px auto;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border-radius: 5px;\n  border: 1px solid #999;\n  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);\n}\n.wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 90px;\n  background: #198754;\n  border-radius: 5px 5px 0 0;\n  color: #fff;\n  font-size: 30px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 30px 25px 25px 25px;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 45px;\n  margin-bottom: 15px;\n  position: relative;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  outline: none;\n  padding-left: 60px;\n  border-radius: 5px;\n  border: 1px solid lightgrey;\n  font-size: 16px;\n  transition: all 0.3s ease;\n}\nform[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #198754;\n  box-shadow: inset 0px 0px 2px 2px rgba(26, 188, 156, 0.25);\n}\nform[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 47px;\n  height: 100%;\n  color: #fff;\n  font-size: 18px;\n  background: #198754;\n  border: 1px solid #198754;\n  border-radius: 5px 0 0 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .pass[_ngcontent-%COMP%] {\n  margin: -8px 0 20px 0;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .pass[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 17px;\n  text-decoration: none;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .pass[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n  font-weight: 500;\n  padding-left: 0px;\n  background: #198754;\n  border: 1px solid #198754;\n  cursor: pointer;\n}\nform[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  background: #198754;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 17px;\n}\n.wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #198754;\n  text-decoration: none;\n}\nform[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=dang-nhap.component-I7EXQZ46.css.map */"] });
var DangNhapComponent = _DangNhapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DangNhapComponent, { className: "DangNhapComponent", filePath: "src\\app\\dang-nhap\\dang-nhap.component.ts", lineNumber: 11 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", component: HomeComponent },
  { path: "du_an", component: DuanListComponent, title: "Danh s\xE1ch d\u1EF1 \xE1n" },
  { path: "du_an/them", component: DuanThemComponent, title: "Th\xEAm d\u1EF1 \xE1n" },
  { path: "du_an/sua/:id", component: DuanSuaComponent, title: "S\u1EEDa d\u1EF1 \xE1n" },
  { path: "nhan_vien", component: NvListComponent, title: "Danh s\xE1ch nh\xE2n vi\xEAn" },
  { path: "nhan_vien/them", component: NvThemComponent, title: "Th\xEAm nh\xE2n vi\xEAn" },
  { path: "nhan_vien/sua/:id", component: NvSuaComponent, title: "S\u1EEDa nh\xE2n vi\xEAn" },
  { path: "task", component: TaskListComponent, title: "Danh s\xE1ch Task" },
  { path: "task/them", component: TaskThemComponent, title: "Th\xEAm Task" },
  { path: "task/sua/:id", component: TaskSuaComponent, title: "S\u1EEDa Task" },
  { path: "dang_nhap", component: DangNhapComponent, title: "\u0110\u0103ng nh\u1EADp" },
  { path: "**", component: NotFoundComponent, title: "Kh\xF4ng t\xECm th\u1EA5y" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withFetch())
  ]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v17.3.8
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-TM3O2LDN.mjs.map

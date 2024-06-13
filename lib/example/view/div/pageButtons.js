"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _page = /*#__PURE__*/ _interop_require_default(require("../button/page"));
var _customEventTypes = require("../../customEventTypes");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  margin-bottom: 2rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PageButtonsDiv = /*#__PURE__*/ function(Element) {
    _inherits(PageButtonsDiv, Element);
    var _super = _create_super(PageButtonsDiv);
    function PageButtonsDiv() {
        _class_call_check(this, PageButtonsDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "pageButtonClickHandler", function(event, element) {
            var pageButton = element, index = pageButton.getIndex(), customEventType = _customEventTypes.PAGE_UPDATE_CUSTOM_EVENT_TYPE;
            _this.callCustomHandlers(customEventType, event, element, index);
        });
        return _this;
    }
    _create_class(PageButtonsDiv, [
        {
            key: "unmountPageButtons",
            value: function unmountPageButtons() {
                var _this = this;
                var pageButtons = this.getPageButtons();
                pageButtons.forEach(function(pageButton) {
                    _this.unmount(pageButton);
                });
            }
        },
        {
            key: "mountPageButtons",
            value: function mountPageButtons(length) {
                var _this = this;
                var pageButtons = [];
                for(var index = 0; index < length; index++){
                    var pageButton = /*#__PURE__*/ React.createElement(_page.default, {
                        index: index,
                        onClick: this.pageButtonClickHandler
                    });
                    pageButtons.push(pageButton);
                }
                pageButtons.forEach(function(pageButton) {
                    _this.mount(pageButton);
                });
            }
        },
        {
            key: "getPageButtons",
            value: function getPageButtons() {
                var pageButtonChildElements = this.getChildElements("button.page"), pageButtons = pageButtonChildElements; ///
                return pageButtons;
            }
        },
        {
            key: "update",
            value: function update(length) {
                var index = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                if (length !== null) {
                    this.unmountPageButtons();
                    this.mountPageButtons(length);
                }
                var pageButtons = this.getPageButtons(), currentIndex = index;
                pageButtons.forEach(function(pageButton, index) {
                    index === currentIndex ? pageButton.disable() : pageButton.enable();
                });
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.unmountPageButtons();
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var clearPageButtonsDiv = this.clear.bind(this), updatePageButtonsDiv = this.update.bind(this); ///
                return {
                    clearPageButtonsDiv: clearPageButtonsDiv,
                    updatePageButtonsDiv: updatePageButtonsDiv
                };
            }
        }
    ]);
    return PageButtonsDiv;
}(_wrap_native_super(_easy.Element));
_define_property(PageButtonsDiv, "tagName", "div");
_define_property(PageButtonsDiv, "defaultProperties", {
    className: "page-buttons"
});
var _default = (0, _easywithstyle.default)(PageButtonsDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3BhZ2VCdXR0b25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFBhZ2VCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9wYWdlXCI7XG5cbmltcG9ydCB7IFBBR0VfVVBEQVRFX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uLy4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY2xhc3MgUGFnZUJ1dHRvbnNEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcGFnZUJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VCdXR0b24gPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBpbmRleCA9IHBhZ2VCdXR0b24uZ2V0SW5kZXgoKSxcbiAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBQQUdFX1VQREFURV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHVubW91bnRQYWdlQnV0dG9ucygpIHtcbiAgICBjb25zdCBwYWdlQnV0dG9ucyA9IHRoaXMuZ2V0UGFnZUJ1dHRvbnMoKTtcblxuICAgIHBhZ2VCdXR0b25zLmZvckVhY2goKHBhZ2VCdXR0b24pID0+IHtcbiAgICAgIHRoaXMudW5tb3VudChwYWdlQnV0dG9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdW50UGFnZUJ1dHRvbnMobGVuZ3RoKSB7XG4gICAgY29uc3QgcGFnZUJ1dHRvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHBhZ2VCdXR0b24gPVxuXG4gICAgICAgIDxQYWdlQnV0dG9uIGluZGV4PXtpbmRleH0gb25DbGljaz17dGhpcy5wYWdlQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPlxuXG4gICAgICA7XG5cbiAgICAgIHBhZ2VCdXR0b25zLnB1c2gocGFnZUJ1dHRvbik7XG4gICAgfVxuXG4gICAgcGFnZUJ1dHRvbnMuZm9yRWFjaCgocGFnZUJ1dHRvbikgPT4ge1xuICAgICAgdGhpcy5tb3VudChwYWdlQnV0dG9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBhZ2VCdXR0b25zKCkge1xuICAgIGNvbnN0IHBhZ2VCdXR0b25DaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiYnV0dG9uLnBhZ2VcIiksXG4gICAgICBwYWdlQnV0dG9ucyA9IHBhZ2VCdXR0b25DaGlsZEVsZW1lbnRzOyAgLy8vXG5cbiAgICByZXR1cm4gcGFnZUJ1dHRvbnM7XG4gIH1cblxuICB1cGRhdGUobGVuZ3RoLCBpbmRleCA9IDApIHtcbiAgICBpZiAobGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnVubW91bnRQYWdlQnV0dG9ucygpO1xuXG4gICAgICB0aGlzLm1vdW50UGFnZUJ1dHRvbnMobGVuZ3RoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYWdlQnV0dG9ucyA9IHRoaXMuZ2V0UGFnZUJ1dHRvbnMoKSxcbiAgICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcblxuICAgIHBhZ2VCdXR0b25zLmZvckVhY2goKHBhZ2VCdXR0b24sIGluZGV4KSA9PiB7XG4gICAgICAoaW5kZXggPT09IGN1cnJlbnRJbmRleCkgP1xuICAgICAgICBwYWdlQnV0dG9uLmRpc2FibGUoKSA6XG4gICAgICAgICAgcGFnZUJ1dHRvbi5lbmFibGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudW5tb3VudFBhZ2VCdXR0b25zKCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNsZWFyUGFnZUJ1dHRvbnNEaXYgPSB0aGlzLmNsZWFyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICB1cGRhdGVQYWdlQnV0dG9uc0RpdiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjbGVhclBhZ2VCdXR0b25zRGl2LFxuICAgICAgdXBkYXRlUGFnZUJ1dHRvbnNEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBhZ2UtYnV0dG9uc1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQYWdlQnV0dG9uc0RpdilgXG5cbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlBhZ2VCdXR0b25zRGl2IiwicGFnZUJ1dHRvbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInBhZ2VCdXR0b24iLCJpbmRleCIsImdldEluZGV4IiwiY3VzdG9tRXZlbnRUeXBlIiwiUEFHRV9VUERBVEVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJ1bm1vdW50UGFnZUJ1dHRvbnMiLCJwYWdlQnV0dG9ucyIsImdldFBhZ2VCdXR0b25zIiwiZm9yRWFjaCIsInVubW91bnQiLCJtb3VudFBhZ2VCdXR0b25zIiwibGVuZ3RoIiwiUGFnZUJ1dHRvbiIsIm9uQ2xpY2siLCJwdXNoIiwibW91bnQiLCJwYWdlQnV0dG9uQ2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJ1cGRhdGUiLCJjdXJyZW50SW5kZXgiLCJkaXNhYmxlIiwiZW5hYmxlIiwiY2xlYXIiLCJwYXJlbnRDb250ZXh0IiwiY2xlYXJQYWdlQnV0dG9uc0RpdiIsImJpbmQiLCJ1cGRhdGVQYWdlQnV0dG9uc0RpdiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwRkE7OztlQUFBOzs7b0VBeEZzQjtvQkFFRTsyREFFRDtnQ0FFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBQSxBQUFNQSwrQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNKQyxrREFBQUEsMEJBQXlCLFNBQUNDLE9BQU9DO1lBQy9CLElBQU1DLGFBQWFELFNBQ2JFLFFBQVFELFdBQVdFLFFBQVEsSUFDM0JDLGtCQUFrQkMsK0NBQTZCO1lBRXJELE1BQUtDLGtCQUFrQixDQUFDRixpQkFBaUJMLE9BQU9DLFNBQVNFO1FBQzNEOzs7a0JBUElMOztZQVNKVSxLQUFBQTttQkFBQUEsU0FBQUE7O2dCQUNFLElBQU1DLGNBQWMsSUFBSSxDQUFDQyxjQUFjO2dCQUV2Q0QsWUFBWUUsT0FBTyxDQUFDLFNBQUNUO29CQUNuQixNQUFLVSxPQUFPLENBQUNWO2dCQUNmO1lBQ0Y7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNOztnQkFDckIsSUFBTUwsY0FBYyxFQUFFO2dCQUV0QixJQUFLLElBQUlOLFFBQVEsR0FBR0EsUUFBUVcsUUFBUVgsUUFBUztvQkFDM0MsSUFBTUQsMkJBRUosb0JBQUNhLGFBQVU7d0JBQUNaLE9BQU9BO3dCQUFPYSxTQUFTLElBQUksQ0FBQ2pCLHNCQUFzQjs7b0JBSWhFVSxZQUFZUSxJQUFJLENBQUNmO2dCQUNuQjtnQkFFQU8sWUFBWUUsT0FBTyxDQUFDLFNBQUNUO29CQUNuQixNQUFLZ0IsS0FBSyxDQUFDaEI7Z0JBQ2I7WUFDRjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUywwQkFBMEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxnQkFDcERYLGNBQWNVLHlCQUEwQixHQUFHO2dCQUU3QyxPQUFPVjtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9QLE1BQU07b0JBQUVYLFFBQUFBLGlFQUFRO2dCQUNyQixJQUFJVyxXQUFXLE1BQU07b0JBQ25CLElBQUksQ0FBQ04sa0JBQWtCO29CQUV2QixJQUFJLENBQUNLLGdCQUFnQixDQUFDQztnQkFDeEI7Z0JBRUEsSUFBTUwsY0FBYyxJQUFJLENBQUNDLGNBQWMsSUFDakNZLGVBQWVuQjtnQkFFckJNLFlBQVlFLE9BQU8sQ0FBQyxTQUFDVCxZQUFZQztvQkFDOUJBLFVBQVVtQixlQUNUcEIsV0FBV3FCLE9BQU8sS0FDaEJyQixXQUFXc0IsTUFBTTtnQkFDdkI7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNqQixrQkFBa0I7WUFDekI7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHNCQUFzQixJQUFJLENBQUNGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLElBQUksR0FDMUNDLHVCQUF1QixJQUFJLENBQUNSLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUV4RCxPQUFRO29CQUNORCxxQkFBQUE7b0JBQ0FFLHNCQUFBQTtnQkFDRjtZQUNGOzs7V0F2RUkvQjtxQkFBdUJnQyxhQUFPO0FBeUVsQyxpQkF6RUloQyxnQkF5RUdpQyxXQUFVO0FBRWpCLGlCQTNFSWpDLGdCQTJFR2tDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3BDIn0=
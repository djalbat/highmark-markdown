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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  top: 7rem;\n  right: 3rem;\n  z-index: 1;\n  position: absolute;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PageButtonsDiv = /*#__PURE__*/ function(Element) {
    _inherits(PageButtonsDiv, Element);
    function PageButtonsDiv() {
        _class_call_check(this, PageButtonsDiv);
        var _this;
        _this = _call_super(this, PageButtonsDiv, arguments), _define_property(_this, "pageButtonClickHandler", function(event, element) {
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
            value: function update(length, index) {
                if (index === undefined) {
                    index = length; ///
                    length = null;
                }
                if (length !== null) {
                    this.unmountPageButtons();
                    this.mountPageButtons(length);
                }
                var pageButtons = this.getPageButtons(), currentIndex = index; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3BhZ2VCdXR0b25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFBhZ2VCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9wYWdlXCI7XG5cbmltcG9ydCB7IFBBR0VfVVBEQVRFX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uLy4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY2xhc3MgUGFnZUJ1dHRvbnNEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcGFnZUJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VCdXR0b24gPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBpbmRleCA9IHBhZ2VCdXR0b24uZ2V0SW5kZXgoKSxcbiAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBQQUdFX1VQREFURV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHVubW91bnRQYWdlQnV0dG9ucygpIHtcbiAgICBjb25zdCBwYWdlQnV0dG9ucyA9IHRoaXMuZ2V0UGFnZUJ1dHRvbnMoKTtcblxuICAgIHBhZ2VCdXR0b25zLmZvckVhY2goKHBhZ2VCdXR0b24pID0+IHtcbiAgICAgIHRoaXMudW5tb3VudChwYWdlQnV0dG9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdW50UGFnZUJ1dHRvbnMobGVuZ3RoKSB7XG4gICAgY29uc3QgcGFnZUJ1dHRvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHBhZ2VCdXR0b24gPVxuXG4gICAgICAgIDxQYWdlQnV0dG9uIGluZGV4PXtpbmRleH0gb25DbGljaz17dGhpcy5wYWdlQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPlxuXG4gICAgICA7XG5cbiAgICAgIHBhZ2VCdXR0b25zLnB1c2gocGFnZUJ1dHRvbik7XG4gICAgfVxuXG4gICAgcGFnZUJ1dHRvbnMuZm9yRWFjaCgocGFnZUJ1dHRvbikgPT4ge1xuICAgICAgdGhpcy5tb3VudChwYWdlQnV0dG9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBhZ2VCdXR0b25zKCkge1xuICAgIGNvbnN0IHBhZ2VCdXR0b25DaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiYnV0dG9uLnBhZ2VcIiksXG4gICAgICBwYWdlQnV0dG9ucyA9IHBhZ2VCdXR0b25DaGlsZEVsZW1lbnRzOyAgLy8vXG5cbiAgICByZXR1cm4gcGFnZUJ1dHRvbnM7XG4gIH1cblxuICB1cGRhdGUobGVuZ3RoLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbmRleCA9IGxlbmd0aDsgLy8vXG5cbiAgICAgIGxlbmd0aCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy51bm1vdW50UGFnZUJ1dHRvbnMoKTtcblxuICAgICAgdGhpcy5tb3VudFBhZ2VCdXR0b25zKGxlbmd0aCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZUJ1dHRvbnMgPSB0aGlzLmdldFBhZ2VCdXR0b25zKCksXG4gICAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7IC8vL1xuXG4gICAgcGFnZUJ1dHRvbnMuZm9yRWFjaCgocGFnZUJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgIChpbmRleCA9PT0gY3VycmVudEluZGV4KSA/XG4gICAgICAgIHBhZ2VCdXR0b24uZGlzYWJsZSgpIDpcbiAgICAgICAgICBwYWdlQnV0dG9uLmVuYWJsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy51bm1vdW50UGFnZUJ1dHRvbnMoKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY2xlYXJQYWdlQnV0dG9uc0RpdiA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHVwZGF0ZVBhZ2VCdXR0b25zRGl2ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGNsZWFyUGFnZUJ1dHRvbnNEaXYsXG4gICAgICB1cGRhdGVQYWdlQnV0dG9uc0RpdlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGFnZS1idXR0b25zXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFBhZ2VCdXR0b25zRGl2KWBcblxuICB0b3A6IDdyZW07XG4gIHJpZ2h0OiAzcmVtO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJQYWdlQnV0dG9uc0RpdiIsInBhZ2VCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJwYWdlQnV0dG9uIiwiaW5kZXgiLCJnZXRJbmRleCIsImN1c3RvbUV2ZW50VHlwZSIsIlBBR0VfVVBEQVRFX0NVU1RPTV9FVkVOVF9UWVBFIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwidW5tb3VudFBhZ2VCdXR0b25zIiwicGFnZUJ1dHRvbnMiLCJnZXRQYWdlQnV0dG9ucyIsImZvckVhY2giLCJ1bm1vdW50IiwibW91bnRQYWdlQnV0dG9ucyIsImxlbmd0aCIsIlBhZ2VCdXR0b24iLCJvbkNsaWNrIiwicHVzaCIsIm1vdW50IiwicGFnZUJ1dHRvbkNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwidXBkYXRlIiwidW5kZWZpbmVkIiwiY3VycmVudEluZGV4IiwiZGlzYWJsZSIsImVuYWJsZSIsImNsZWFyIiwicGFyZW50Q29udGV4dCIsImNsZWFyUGFnZUJ1dHRvbnNEaXYiLCJiaW5kIiwidXBkYXRlUGFnZUJ1dHRvbnNEaXYiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnR0E7OztlQUFBOzs7b0VBOUZzQjtvQkFFRTsyREFFRDtnQ0FFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBQSxBQUFNQSwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSw0QkFDSkMsd0JBQUFBLDBCQUF5QixTQUFDQyxPQUFPQztZQUMvQixJQUFNQyxhQUFhRCxTQUNiRSxRQUFRRCxXQUFXRSxRQUFRLElBQzNCQyxrQkFBa0JDLCtDQUE2QjtZQUVyRCxNQUFLQyxrQkFBa0IsQ0FBQ0YsaUJBQWlCTCxPQUFPQyxTQUFTRTtRQUMzRDs7O2tCQVBJTDs7WUFTSlUsS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFNQyxjQUFjLElBQUksQ0FBQ0MsY0FBYztnQkFFdkNELFlBQVlFLE9BQU8sQ0FBQyxTQUFDVDtvQkFDbkIsTUFBS1UsT0FBTyxDQUFDVjtnQkFDZjtZQUNGOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTTs7Z0JBQ3JCLElBQU1MLGNBQWMsRUFBRTtnQkFFdEIsSUFBSyxJQUFJTixRQUFRLEdBQUdBLFFBQVFXLFFBQVFYLFFBQVM7b0JBQzNDLElBQU1ELDJCQUVKLG9CQUFDYSxhQUFVO3dCQUFDWixPQUFPQTt3QkFBT2EsU0FBUyxJQUFJLENBQUNqQixzQkFBc0I7O29CQUloRVUsWUFBWVEsSUFBSSxDQUFDZjtnQkFDbkI7Z0JBRUFPLFlBQVlFLE9BQU8sQ0FBQyxTQUFDVDtvQkFDbkIsTUFBS2dCLEtBQUssQ0FBQ2hCO2dCQUNiO1lBQ0Y7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVMsMEJBQTBCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsZ0JBQ3BEWCxjQUFjVSx5QkFBMEIsR0FBRztnQkFFN0MsT0FBT1Y7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPUCxNQUFNLEVBQUVYLEtBQUs7Z0JBQ2xCLElBQUlBLFVBQVVtQixXQUFXO29CQUN2Qm5CLFFBQVFXLFFBQVEsR0FBRztvQkFFbkJBLFNBQVM7Z0JBQ1g7Z0JBRUEsSUFBSUEsV0FBVyxNQUFNO29CQUNuQixJQUFJLENBQUNOLGtCQUFrQjtvQkFFdkIsSUFBSSxDQUFDSyxnQkFBZ0IsQ0FBQ0M7Z0JBQ3hCO2dCQUVBLElBQU1MLGNBQWMsSUFBSSxDQUFDQyxjQUFjLElBQ2pDYSxlQUFlcEIsT0FBTyxHQUFHO2dCQUUvQk0sWUFBWUUsT0FBTyxDQUFDLFNBQUNULFlBQVlDO29CQUM5QkEsVUFBVW9CLGVBQ1RyQixXQUFXc0IsT0FBTyxLQUNoQnRCLFdBQVd1QixNQUFNO2dCQUN2QjtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ2xCLGtCQUFrQjtZQUN6Qjs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsc0JBQXNCLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUMsSUFBSSxHQUMxQ0MsdUJBQXVCLElBQUksQ0FBQ1QsTUFBTSxDQUFDUSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRXhELE9BQVE7b0JBQ05ELHFCQUFBQTtvQkFDQUUsc0JBQUFBO2dCQUNGO1lBQ0Y7OztXQTdFSWhDO3FCQUF1QmlDLGFBQU87QUErRWxDLGlCQS9FSWpDLGdCQStFR2tDLFdBQVU7QUFFakIsaUJBakZJbEMsZ0JBaUZHbUMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDckMifQ==
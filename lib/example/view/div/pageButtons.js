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
        "\n\n  top: 1rem;\n  right: 1rem;\n  z-index: 1;\n  position: absolute;\n  \n"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3BhZ2VCdXR0b25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFBhZ2VCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9wYWdlXCI7XG5cbmltcG9ydCB7IFBBR0VfVVBEQVRFX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uLy4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY2xhc3MgUGFnZUJ1dHRvbnNEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcGFnZUJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VCdXR0b24gPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBpbmRleCA9IHBhZ2VCdXR0b24uZ2V0SW5kZXgoKSxcbiAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBQQUdFX1VQREFURV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHVubW91bnRQYWdlQnV0dG9ucygpIHtcbiAgICBjb25zdCBwYWdlQnV0dG9ucyA9IHRoaXMuZ2V0UGFnZUJ1dHRvbnMoKTtcblxuICAgIHBhZ2VCdXR0b25zLmZvckVhY2goKHBhZ2VCdXR0b24pID0+IHtcbiAgICAgIHRoaXMudW5tb3VudChwYWdlQnV0dG9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdW50UGFnZUJ1dHRvbnMobGVuZ3RoKSB7XG4gICAgY29uc3QgcGFnZUJ1dHRvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHBhZ2VCdXR0b24gPVxuXG4gICAgICAgIDxQYWdlQnV0dG9uIGluZGV4PXtpbmRleH0gb25DbGljaz17dGhpcy5wYWdlQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPlxuXG4gICAgICA7XG5cbiAgICAgIHBhZ2VCdXR0b25zLnB1c2gocGFnZUJ1dHRvbik7XG4gICAgfVxuXG4gICAgcGFnZUJ1dHRvbnMuZm9yRWFjaCgocGFnZUJ1dHRvbikgPT4ge1xuICAgICAgdGhpcy5tb3VudChwYWdlQnV0dG9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBhZ2VCdXR0b25zKCkge1xuICAgIGNvbnN0IHBhZ2VCdXR0b25DaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiYnV0dG9uLnBhZ2VcIiksXG4gICAgICBwYWdlQnV0dG9ucyA9IHBhZ2VCdXR0b25DaGlsZEVsZW1lbnRzOyAgLy8vXG5cbiAgICByZXR1cm4gcGFnZUJ1dHRvbnM7XG4gIH1cblxuICB1cGRhdGUobGVuZ3RoLCBpbmRleCA9IDApIHtcbiAgICBpZiAobGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnVubW91bnRQYWdlQnV0dG9ucygpO1xuXG4gICAgICB0aGlzLm1vdW50UGFnZUJ1dHRvbnMobGVuZ3RoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYWdlQnV0dG9ucyA9IHRoaXMuZ2V0UGFnZUJ1dHRvbnMoKSxcbiAgICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcblxuICAgIHBhZ2VCdXR0b25zLmZvckVhY2goKHBhZ2VCdXR0b24sIGluZGV4KSA9PiB7XG4gICAgICAoaW5kZXggPT09IGN1cnJlbnRJbmRleCkgP1xuICAgICAgICBwYWdlQnV0dG9uLmRpc2FibGUoKSA6XG4gICAgICAgICAgcGFnZUJ1dHRvbi5lbmFibGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudW5tb3VudFBhZ2VCdXR0b25zKCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNsZWFyUGFnZUJ1dHRvbnNEaXYgPSB0aGlzLmNsZWFyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICB1cGRhdGVQYWdlQnV0dG9uc0RpdiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjbGVhclBhZ2VCdXR0b25zRGl2LFxuICAgICAgdXBkYXRlUGFnZUJ1dHRvbnNEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBhZ2UtYnV0dG9uc1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQYWdlQnV0dG9uc0RpdilgXG5cbiAgdG9wOiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiUGFnZUJ1dHRvbnNEaXYiLCJwYWdlQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwicGFnZUJ1dHRvbiIsImluZGV4IiwiZ2V0SW5kZXgiLCJjdXN0b21FdmVudFR5cGUiLCJQQUdFX1VQREFURV9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVycyIsInVubW91bnRQYWdlQnV0dG9ucyIsInBhZ2VCdXR0b25zIiwiZ2V0UGFnZUJ1dHRvbnMiLCJmb3JFYWNoIiwidW5tb3VudCIsIm1vdW50UGFnZUJ1dHRvbnMiLCJsZW5ndGgiLCJQYWdlQnV0dG9uIiwib25DbGljayIsInB1c2giLCJtb3VudCIsInBhZ2VCdXR0b25DaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsInVwZGF0ZSIsImN1cnJlbnRJbmRleCIsImRpc2FibGUiLCJlbmFibGUiLCJjbGVhciIsInBhcmVudENvbnRleHQiLCJjbGVhclBhZ2VCdXR0b25zRGl2IiwiYmluZCIsInVwZGF0ZVBhZ2VCdXR0b25zRGl2IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEZBOzs7ZUFBQTs7O29FQXhGc0I7b0JBRUU7MkRBRUQ7Z0NBRXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsNEJBQ0pDLHdCQUFBQSwwQkFBeUIsU0FBQ0MsT0FBT0M7WUFDL0IsSUFBTUMsYUFBYUQsU0FDYkUsUUFBUUQsV0FBV0UsUUFBUSxJQUMzQkMsa0JBQWtCQywrQ0FBNkI7WUFFckQsTUFBS0Msa0JBQWtCLENBQUNGLGlCQUFpQkwsT0FBT0MsU0FBU0U7UUFDM0Q7OztrQkFQSUw7O1lBU0pVLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBTUMsY0FBYyxJQUFJLENBQUNDLGNBQWM7Z0JBRXZDRCxZQUFZRSxPQUFPLENBQUMsU0FBQ1Q7b0JBQ25CLE1BQUtVLE9BQU8sQ0FBQ1Y7Z0JBQ2Y7WUFDRjs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU07O2dCQUNyQixJQUFNTCxjQUFjLEVBQUU7Z0JBRXRCLElBQUssSUFBSU4sUUFBUSxHQUFHQSxRQUFRVyxRQUFRWCxRQUFTO29CQUMzQyxJQUFNRCwyQkFFSixvQkFBQ2EsYUFBVTt3QkFBQ1osT0FBT0E7d0JBQU9hLFNBQVMsSUFBSSxDQUFDakIsc0JBQXNCOztvQkFJaEVVLFlBQVlRLElBQUksQ0FBQ2Y7Z0JBQ25CO2dCQUVBTyxZQUFZRSxPQUFPLENBQUMsU0FBQ1Q7b0JBQ25CLE1BQUtnQixLQUFLLENBQUNoQjtnQkFDYjtZQUNGOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1TLDBCQUEwQixJQUFJLENBQUNDLGdCQUFnQixDQUFDLGdCQUNwRFgsY0FBY1UseUJBQTBCLEdBQUc7Z0JBRTdDLE9BQU9WO1lBQ1Q7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT1AsTUFBTTtvQkFBRVgsUUFBQUEsaUVBQVE7Z0JBQ3JCLElBQUlXLFdBQVcsTUFBTTtvQkFDbkIsSUFBSSxDQUFDTixrQkFBa0I7b0JBRXZCLElBQUksQ0FBQ0ssZ0JBQWdCLENBQUNDO2dCQUN4QjtnQkFFQSxJQUFNTCxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ1ksZUFBZW5CO2dCQUVyQk0sWUFBWUUsT0FBTyxDQUFDLFNBQUNULFlBQVlDO29CQUM5QkEsVUFBVW1CLGVBQ1RwQixXQUFXcUIsT0FBTyxLQUNoQnJCLFdBQVdzQixNQUFNO2dCQUN2QjtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ2pCLGtCQUFrQjtZQUN6Qjs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsc0JBQXNCLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUMsSUFBSSxHQUMxQ0MsdUJBQXVCLElBQUksQ0FBQ1IsTUFBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRXhELE9BQVE7b0JBQ05ELHFCQUFBQTtvQkFDQUUsc0JBQUFBO2dCQUNGO1lBQ0Y7OztXQXZFSS9CO3FCQUF1QmdDLGFBQU87QUF5RWxDLGlCQXpFSWhDLGdCQXlFR2lDLFdBQVU7QUFFakIsaUJBM0VJakMsZ0JBMkVHa0MscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDcEMifQ==
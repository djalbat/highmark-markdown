"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownStyleElement;
    }
});
var _styleElement = /*#__PURE__*/ _interop_require_wildcard(require("../styleElement"));
var _selectorsList = /*#__PURE__*/ _interop_require_default(require("../style/selectorsList"));
var _constants = require("../constants");
var _css = require("../utilities/css");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var MarkdownStyleElement = /*#__PURE__*/ function(StyleElement) {
    _inherits(MarkdownStyleElement, StyleElement);
    var _super = _create_super(MarkdownStyleElement);
    function MarkdownStyleElement(domElement, selectorsList) {
        _class_call_check(this, MarkdownStyleElement);
        var _this;
        _this = _super.call(this, domElement);
        _this.selectorsList = selectorsList;
        return _this;
    }
    _create_class(MarkdownStyleElement, [
        {
            key: "getSelectorsList",
            value: function getSelectorsList() {
                return this.selectorsList;
            }
        },
        {
            key: "update",
            value: function update(markdownStyle) {
                var css = (0, _css.cssFromMarkdownStyleAndSelectorsList)(markdownStyle, this.selectorsList);
                this.setCSS(css);
                return css;
            }
        },
        {
            key: "reset",
            value: function reset() {
                var markdownStyle = _constants.EMPTY_STRING;
                this.update(markdownStyle);
            }
        }
    ], [
        {
            key: "fromSelectorsString",
            value: function fromSelectorsString(Class, selectorString) {
                if (selectorString === undefined) {
                    selectorString = Class; ///
                    Class = MarkdownStyleElement; ///
                }
                var domElement = (0, _styleElement.createDOMElement)(), selectorsList = _selectorsList.default.fromSelectorsString(selectorString), markdownStyleElement = new Class(domElement, selectorsList);
                return markdownStyleElement;
            }
        }
    ]);
    return MarkdownStyleElement;
}(_styleElement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdHlsZUVsZW1lbnQgZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuaW1wb3J0IFNlbGVjdG9yc0xpc3QgZnJvbSBcIi4uL3N0eWxlL3NlbGVjdG9yc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlRE9NRWxlbWVudCB9IGZyb20gXCIuLi9zdHlsZUVsZW1lbnRcIjtcbmltcG9ydCB7IGNzc0Zyb21NYXJrZG93blN0eWxlQW5kU2VsZWN0b3JzTGlzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duU3R5bGVFbGVtZW50IGV4dGVuZHMgU3R5bGVFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCwgc2VsZWN0b3JzTGlzdCkge1xuICAgIHN1cGVyKGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5zZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGdldFNlbGVjdG9yc0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIHVwZGF0ZShtYXJrZG93blN0eWxlKSB7XG4gICAgY29uc3QgY3NzID0gY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnNMaXN0KG1hcmtkb3duU3R5bGUsIHRoaXMuc2VsZWN0b3JzTGlzdCk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGUgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnVwZGF0ZShtYXJrZG93blN0eWxlKVxuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvcnNTdHJpbmcoQ2xhc3MsIHNlbGVjdG9yU3RyaW5nKSB7XG4gICAgaWYgKHNlbGVjdG9yU3RyaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yU3RyaW5nID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE1hcmtkb3duU3R5bGVFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gY3JlYXRlRE9NRWxlbWVudCgpLFxuICAgICAgICAgIHNlbGVjdG9yc0xpc3QgPSBTZWxlY3RvcnNMaXN0LmZyb21TZWxlY3RvcnNTdHJpbmcoc2VsZWN0b3JTdHJpbmcpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVFbGVtZW50ID0gbmV3IENsYXNzKGRvbUVsZW1lbnQsIHNlbGVjdG9yc0xpc3QpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVFbGVtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWFya2Rvd25TdHlsZUVsZW1lbnQiLCJkb21FbGVtZW50Iiwic2VsZWN0b3JzTGlzdCIsImdldFNlbGVjdG9yc0xpc3QiLCJ1cGRhdGUiLCJtYXJrZG93blN0eWxlIiwiY3NzIiwiY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnNMaXN0Iiwic2V0Q1NTIiwicmVzZXQiLCJFTVBUWV9TVFJJTkciLCJmcm9tU2VsZWN0b3JzU3RyaW5nIiwiQ2xhc3MiLCJzZWxlY3RvclN0cmluZyIsInVuZGVmaW5lZCIsImNyZWF0ZURPTUVsZW1lbnQiLCJTZWxlY3RvcnNMaXN0IiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJTdHlsZUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O29FQVBJO29FQUNDO3lCQUVHO21CQUV3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEscUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEscUJBQ1BDLFVBQVUsRUFBRUMsYUFBYTtnQ0FEbEJGOztrQ0FFWEM7UUFFTixNQUFLQyxhQUFhLEdBQUdBOzs7a0JBSkpGOztZQU9uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxhQUFhO1lBQzNCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWE7Z0JBQ2xCLElBQU1DLE1BQU1DLElBQUFBLHlDQUFvQyxFQUFDRixlQUFlLElBQUksQ0FBQ0gsYUFBYTtnQkFFbEYsSUFBSSxDQUFDTSxNQUFNLENBQUNGO2dCQUVaLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosZ0JBQWdCSyx1QkFBWTtnQkFFbEMsSUFBSSxDQUFDTixNQUFNLENBQUNDO1lBQ2Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxLQUFLLEVBQUVDLGNBQWM7Z0JBQzlDLElBQUlBLG1CQUFtQkMsV0FBVztvQkFDaENELGlCQUFpQkQsT0FBTyxHQUFHO29CQUUzQkEsUUE3QmVaLHNCQTZCZSxHQUFHO2dCQUNuQztnQkFFQSxJQUFNQyxhQUFhYyxJQUFBQSw4QkFBZ0IsS0FDN0JiLGdCQUFnQmMsc0JBQWEsQ0FBQ0wsbUJBQW1CLENBQUNFLGlCQUNsREksdUJBQXVCLElBQUlMLE1BQU1YLFlBQVlDO2dCQUVuRCxPQUFPZTtZQUNUOzs7V0FyQ21CakI7RUFBNkJrQixxQkFBWSJ9
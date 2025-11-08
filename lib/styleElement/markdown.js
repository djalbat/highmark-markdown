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
var _constants = require("../constants");
var _grammar = require("../utilities/grammar");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var MarkdownStyleElement = /*#__PURE__*/ function(StyleElement) {
    _inherits(MarkdownStyleElement, StyleElement);
    function MarkdownStyleElement(domElement, ccsSelectorsString) {
        _class_call_check(this, MarkdownStyleElement);
        var _this;
        _this = _call_super(this, MarkdownStyleElement, [
            domElement
        ]);
        _this.ccsSelectorsString = ccsSelectorsString;
        return _this;
    }
    _create_class(MarkdownStyleElement, [
        {
            key: "getCSSSelectorsString",
            value: function getCSSSelectorsString() {
                return this.ccsSelectorsString;
            }
        },
        {
            key: "update",
            value: function update(markdownStyle) {
                var css = (0, _grammar.cssFromMarkdownStyleAndCSSSelectorsString)(markdownStyle, this.ccsSelectorsString);
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
        },
        {
            key: "remove",
            value: function remove() {
                _get(_get_prototype_of(MarkdownStyleElement.prototype), "remove", this).call(this);
                this.destroy();
            }
        }
    ], [
        {
            key: "fromCSSSelectorsString",
            value: function fromCSSSelectorsString(Class, ccsSelectorsString) {
                if (ccsSelectorsString === undefined) {
                    ccsSelectorsString = Class; ///
                    Class = MarkdownStyleElement; ///
                }
                var domElement = (0, _styleElement.createDOMElement)(), markdownStyleElement = new Class(domElement, ccsSelectorsString);
                return markdownStyleElement;
            }
        }
    ]);
    return MarkdownStyleElement;
}(_styleElement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdHlsZUVsZW1lbnQgZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVET01FbGVtZW50IH0gZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuaW1wb3J0IHsgY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2dyYW1tYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25TdHlsZUVsZW1lbnQgZXh0ZW5kcyBTdHlsZUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50LCBjY3NTZWxlY3RvcnNTdHJpbmcpIHtcbiAgICBzdXBlcihkb21FbGVtZW50KTtcblxuICAgIHRoaXMuY2NzU2VsZWN0b3JzU3RyaW5nID0gY2NzU2VsZWN0b3JzU3RyaW5nO1xuICB9XG5cbiAgZ2V0Q1NTU2VsZWN0b3JzU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmNjc1NlbGVjdG9yc1N0cmluZztcbiAgfVxuXG4gIHVwZGF0ZShtYXJrZG93blN0eWxlKSB7XG4gICAgY29uc3QgY3NzID0gY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmcobWFya2Rvd25TdHlsZSwgdGhpcy5jY3NTZWxlY3RvcnNTdHJpbmcpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy51cGRhdGUobWFya2Rvd25TdHlsZSlcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBzdXBlci5yZW1vdmUoKTtcblxuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21DU1NTZWxlY3RvcnNTdHJpbmcoQ2xhc3MsIGNjc1NlbGVjdG9yc1N0cmluZykge1xuICAgIGlmIChjY3NTZWxlY3RvcnNTdHJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2NzU2VsZWN0b3JzU3RyaW5nID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE1hcmtkb3duU3R5bGVFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gY3JlYXRlRE9NRWxlbWVudCgpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVFbGVtZW50ID0gbmV3IENsYXNzKGRvbUVsZW1lbnQsIGNjc1NlbGVjdG9yc1N0cmluZyk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZUVsZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blN0eWxlRWxlbWVudCIsImRvbUVsZW1lbnQiLCJjY3NTZWxlY3RvcnNTdHJpbmciLCJnZXRDU1NTZWxlY3RvcnNTdHJpbmciLCJ1cGRhdGUiLCJtYXJrZG93blN0eWxlIiwiY3NzIiwiY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRDU1NTZWxlY3RvcnNTdHJpbmciLCJzZXRDU1MiLCJyZXNldCIsIkVNUFRZX1NUUklORyIsInJlbW92ZSIsImRlc3Ryb3kiLCJmcm9tQ1NTU2VsZWN0b3JzU3RyaW5nIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJjcmVhdGVET01FbGVtZW50IiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJTdHlsZUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O29FQU5JO3lCQUVJO3VCQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUEscUJBQ1BDLFVBQVUsRUFBRUMsa0JBQWtCO2dDQUR2QkY7O2dCQUVqQixrQkFGaUJBO1lBRVhDOztRQUVOLE1BQUtDLGtCQUFrQixHQUFHQTs7O2tCQUpURjs7WUFPbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Qsa0JBQWtCO1lBQ2hDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWE7Z0JBQ2xCLElBQU1DLE1BQU1DLElBQUFBLGtEQUF5QyxFQUFDRixlQUFlLElBQUksQ0FBQ0gsa0JBQWtCO2dCQUU1RixJQUFJLENBQUNNLE1BQU0sQ0FBQ0Y7Z0JBRVosT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixnQkFBZ0JLLHVCQUFZO2dCQUVsQyxJQUFJLENBQUNOLE1BQU0sQ0FBQ0M7WUFDZDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSx1QkExQmlCWCxpQ0EwQlhXLFVBQU4sSUFBSztnQkFFTCxJQUFJLENBQUNDLE9BQU87WUFDZDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJDLEtBQUssRUFBRVosa0JBQWtCO2dCQUNyRCxJQUFJQSx1QkFBdUJhLFdBQVc7b0JBQ3BDYixxQkFBcUJZLE9BQU8sR0FBRztvQkFFL0JBLFFBbkNlZCxzQkFtQ2UsR0FBRztnQkFDbkM7Z0JBRUEsSUFBTUMsYUFBYWUsSUFBQUEsOEJBQWdCLEtBQzdCQyx1QkFBdUIsSUFBSUgsTUFBTWIsWUFBWUM7Z0JBRW5ELE9BQU9lO1lBQ1Q7OztXQTFDbUJqQjtFQUE2QmtCLHFCQUFZIn0=
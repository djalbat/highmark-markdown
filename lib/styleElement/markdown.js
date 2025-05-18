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
var _dom = require("../utilities/dom");
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
    function MarkdownStyleElement(domElement, selectorsString) {
        _class_call_check(this, MarkdownStyleElement);
        var _this;
        _this = _call_super(this, MarkdownStyleElement, [
            domElement
        ]);
        _this.selectorsString = selectorsString;
        return _this;
    }
    _create_class(MarkdownStyleElement, [
        {
            key: "getSelectorsString",
            value: function getSelectorsString() {
                return this.selectorsString;
            }
        },
        {
            key: "update",
            value: function update(markdownStyle) {
                var css = (0, _dom.cssFromMarkdownStyleAndSelectorsString)(markdownStyle, this.selectorsString);
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
            key: "fromSelectorsString",
            value: function fromSelectorsString(Class, selectorsString) {
                if (selectorsString === undefined) {
                    selectorsString = Class; ///
                    Class = MarkdownStyleElement; ///
                }
                var domElement = (0, _styleElement.createDOMElement)(), markdownStyleElement = new Class(domElement, selectorsString);
                return markdownStyleElement;
            }
        }
    ]);
    return MarkdownStyleElement;
}(_styleElement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdHlsZUVsZW1lbnQgZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVET01FbGVtZW50IH0gZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuaW1wb3J0IHsgY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blN0eWxlRWxlbWVudCBleHRlbmRzIFN0eWxlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQsIHNlbGVjdG9yc1N0cmluZykge1xuICAgIHN1cGVyKGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5zZWxlY3RvcnNTdHJpbmcgPSBzZWxlY3RvcnNTdHJpbmc7XG4gIH1cblxuICBnZXRTZWxlY3RvcnNTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzU3RyaW5nO1xuICB9XG5cbiAgdXBkYXRlKG1hcmtkb3duU3R5bGUpIHtcbiAgICBjb25zdCBjc3MgPSBjc3NGcm9tTWFya2Rvd25TdHlsZUFuZFNlbGVjdG9yc1N0cmluZyhtYXJrZG93blN0eWxlLCB0aGlzLnNlbGVjdG9yc1N0cmluZyk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGUgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnVwZGF0ZShtYXJrZG93blN0eWxlKVxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHN1cGVyLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yc1N0cmluZyhDbGFzcywgc2VsZWN0b3JzU3RyaW5nKSB7XG4gICAgaWYgKHNlbGVjdG9yc1N0cmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvcnNTdHJpbmcgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTWFya2Rvd25TdHlsZUVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBjcmVhdGVET01FbGVtZW50KCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZUVsZW1lbnQgPSBuZXcgQ2xhc3MoZG9tRWxlbWVudCwgc2VsZWN0b3JzU3RyaW5nKTtcblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlRWxlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGVFbGVtZW50IiwiZG9tRWxlbWVudCIsInNlbGVjdG9yc1N0cmluZyIsImdldFNlbGVjdG9yc1N0cmluZyIsInVwZGF0ZSIsIm1hcmtkb3duU3R5bGUiLCJjc3MiLCJjc3NGcm9tTWFya2Rvd25TdHlsZUFuZFNlbGVjdG9yc1N0cmluZyIsInNldENTUyIsInJlc2V0IiwiRU1QVFlfU1RSSU5HIiwicmVtb3ZlIiwiZGVzdHJveSIsImZyb21TZWxlY3RvcnNTdHJpbmciLCJDbGFzcyIsInVuZGVmaW5lZCIsImNyZWF0ZURPTUVsZW1lbnQiLCJtYXJrZG93blN0eWxlRWxlbWVudCIsIlN0eWxlRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7b0VBTkk7eUJBRUk7bUJBRTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQSxxQkFDUEMsVUFBVSxFQUFFQyxlQUFlO2dDQURwQkY7O2dCQUVqQixrQkFGaUJBO1lBRVhDOztRQUVOLE1BQUtDLGVBQWUsR0FBR0E7OztrQkFKTkY7O1lBT25CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGVBQWU7WUFDN0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYTtnQkFDbEIsSUFBTUMsTUFBTUMsSUFBQUEsMkNBQXNDLEVBQUNGLGVBQWUsSUFBSSxDQUFDSCxlQUFlO2dCQUV0RixJQUFJLENBQUNNLE1BQU0sQ0FBQ0Y7Z0JBRVosT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixnQkFBZ0JLLHVCQUFZO2dCQUVsQyxJQUFJLENBQUNOLE1BQU0sQ0FBQ0M7WUFDZDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSx1QkExQmlCWCxpQ0EwQlhXLFVBQU4sSUFBSztnQkFFTCxJQUFJLENBQUNDLE9BQU87WUFDZDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JDLEtBQUssRUFBRVosZUFBZTtnQkFDL0MsSUFBSUEsb0JBQW9CYSxXQUFXO29CQUNqQ2Isa0JBQWtCWSxPQUFPLEdBQUc7b0JBRTVCQSxRQW5DZWQsc0JBbUNlLEdBQUc7Z0JBQ25DO2dCQUVBLElBQU1DLGFBQWFlLElBQUFBLDhCQUFnQixLQUM3QkMsdUJBQXVCLElBQUlILE1BQU1iLFlBQVlDO2dCQUVuRCxPQUFPZTtZQUNUOzs7V0ExQ21CakI7RUFBNkJrQixxQkFBWSJ9
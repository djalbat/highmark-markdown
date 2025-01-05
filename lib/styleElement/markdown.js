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
    function MarkdownStyleElement(domElement, selectorsList) {
        _class_call_check(this, MarkdownStyleElement);
        var _this;
        _this = _call_super(this, MarkdownStyleElement, [
            domElement
        ]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdHlsZUVsZW1lbnQgZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuaW1wb3J0IFNlbGVjdG9yc0xpc3QgZnJvbSBcIi4uL3N0eWxlL3NlbGVjdG9yc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlRE9NRWxlbWVudCB9IGZyb20gXCIuLi9zdHlsZUVsZW1lbnRcIjtcbmltcG9ydCB7IGNzc0Zyb21NYXJrZG93blN0eWxlQW5kU2VsZWN0b3JzTGlzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duU3R5bGVFbGVtZW50IGV4dGVuZHMgU3R5bGVFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCwgc2VsZWN0b3JzTGlzdCkge1xuICAgIHN1cGVyKGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5zZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGdldFNlbGVjdG9yc0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIHVwZGF0ZShtYXJrZG93blN0eWxlKSB7XG4gICAgY29uc3QgY3NzID0gY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnNMaXN0KG1hcmtkb3duU3R5bGUsIHRoaXMuc2VsZWN0b3JzTGlzdCk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGUgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnVwZGF0ZShtYXJrZG93blN0eWxlKVxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHN1cGVyLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yc1N0cmluZyhDbGFzcywgc2VsZWN0b3JTdHJpbmcpIHtcbiAgICBpZiAoc2VsZWN0b3JTdHJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3JTdHJpbmcgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTWFya2Rvd25TdHlsZUVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBjcmVhdGVET01FbGVtZW50KCksXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdCA9IFNlbGVjdG9yc0xpc3QuZnJvbVNlbGVjdG9yc1N0cmluZyhzZWxlY3RvclN0cmluZyksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZUVsZW1lbnQgPSBuZXcgQ2xhc3MoZG9tRWxlbWVudCwgc2VsZWN0b3JzTGlzdCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZUVsZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blN0eWxlRWxlbWVudCIsImRvbUVsZW1lbnQiLCJzZWxlY3RvcnNMaXN0IiwiZ2V0U2VsZWN0b3JzTGlzdCIsInVwZGF0ZSIsIm1hcmtkb3duU3R5bGUiLCJjc3MiLCJjc3NGcm9tTWFya2Rvd25TdHlsZUFuZFNlbGVjdG9yc0xpc3QiLCJzZXRDU1MiLCJyZXNldCIsIkVNUFRZX1NUUklORyIsInJlbW92ZSIsImRlc3Ryb3kiLCJmcm9tU2VsZWN0b3JzU3RyaW5nIiwiQ2xhc3MiLCJzZWxlY3RvclN0cmluZyIsInVuZGVmaW5lZCIsImNyZWF0ZURPTUVsZW1lbnQiLCJTZWxlY3RvcnNMaXN0IiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJTdHlsZUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O29FQVBJO29FQUNDO3lCQUVHO21CQUV3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQSxxQkFDUEMsVUFBVSxFQUFFQyxhQUFhO2dDQURsQkY7O2dCQUVqQixrQkFGaUJBO1lBRVhDOztRQUVOLE1BQUtDLGFBQWEsR0FBR0E7OztrQkFKSkY7O1lBT25CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGFBQWE7WUFDM0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYTtnQkFDbEIsSUFBTUMsTUFBTUMsSUFBQUEseUNBQW9DLEVBQUNGLGVBQWUsSUFBSSxDQUFDSCxhQUFhO2dCQUVsRixJQUFJLENBQUNNLE1BQU0sQ0FBQ0Y7Z0JBRVosT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixnQkFBZ0JLLHVCQUFZO2dCQUVsQyxJQUFJLENBQUNOLE1BQU0sQ0FBQ0M7WUFDZDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSx1QkExQmlCWCxpQ0EwQlhXLFVBQU4sSUFBSztnQkFFTCxJQUFJLENBQUNDLE9BQU87WUFDZDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JDLEtBQUssRUFBRUMsY0FBYztnQkFDOUMsSUFBSUEsbUJBQW1CQyxXQUFXO29CQUNoQ0QsaUJBQWlCRCxPQUFPLEdBQUc7b0JBRTNCQSxRQW5DZWQsc0JBbUNlLEdBQUc7Z0JBQ25DO2dCQUVBLElBQU1DLGFBQWFnQixJQUFBQSw4QkFBZ0IsS0FDN0JmLGdCQUFnQmdCLHNCQUFhLENBQUNMLG1CQUFtQixDQUFDRSxpQkFDbERJLHVCQUF1QixJQUFJTCxNQUFNYixZQUFZQztnQkFFbkQsT0FBT2lCO1lBQ1Q7OztXQTNDbUJuQjtFQUE2Qm9CLHFCQUFZIn0=
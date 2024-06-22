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
var _mediaType = /*#__PURE__*/ _interop_require_default(require("../style/mediaType"));
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
    function MarkdownStyleElement(mediaType, domElement, selectorsList) {
        _class_call_check(this, MarkdownStyleElement);
        var _this;
        _this = _super.call(this, mediaType, domElement);
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
                var mediaType = this.getMediaType(), css = (0, _css.cssFromMarkdownStyleMediaTypeAndSelectorsList)(markdownStyle, mediaType, this.selectorsList);
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
            key: "fromMediaTypeNameAndSelectorsString",
            value: function fromMediaTypeNameAndSelectorsString(Class, mediaTypeName, selectorString) {
                if (selectorString === undefined) {
                    selectorString = mediaTypeName; ///
                    mediaTypeName = Class; ///
                    Class = MarkdownStyleElement; ///
                }
                var mediaType = _mediaType.default.fromMediaTypeName(mediaTypeName), domElement = (0, _styleElement.createDOMElement)(), selectorsList = _selectorsList.default.fromSelectorsString(selectorString), markdownStyleElement = new Class(mediaType, domElement, selectorsList);
                return markdownStyleElement;
            }
        }
    ]);
    return MarkdownStyleElement;
}(_styleElement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZWRpYVR5cGUgZnJvbSBcIi4uL3N0eWxlL21lZGlhVHlwZVwiO1xuaW1wb3J0IFN0eWxlRWxlbWVudCBmcm9tIFwiLi4vc3R5bGVFbGVtZW50XCI7XG5pbXBvcnQgU2VsZWN0b3JzTGlzdCBmcm9tIFwiLi4vc3R5bGUvc2VsZWN0b3JzTGlzdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVET01FbGVtZW50IH0gZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuaW1wb3J0IHsgY3NzRnJvbU1hcmtkb3duU3R5bGVNZWRpYVR5cGVBbmRTZWxlY3RvcnNMaXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25TdHlsZUVsZW1lbnQgZXh0ZW5kcyBTdHlsZUVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtZWRpYVR5cGUsIGRvbUVsZW1lbnQsIHNlbGVjdG9yc0xpc3QpIHtcbiAgICBzdXBlcihtZWRpYVR5cGUsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5zZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGdldFNlbGVjdG9yc0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIHVwZGF0ZShtYXJrZG93blN0eWxlKSB7XG4gICAgY29uc3QgbWVkaWFUeXBlID0gdGhpcy5nZXRNZWRpYVR5cGUoKSxcbiAgICAgICAgICBjc3MgPSBjc3NGcm9tTWFya2Rvd25TdHlsZU1lZGlhVHlwZUFuZFNlbGVjdG9yc0xpc3QobWFya2Rvd25TdHlsZSwgbWVkaWFUeXBlLCB0aGlzLnNlbGVjdG9yc0xpc3QpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy51cGRhdGUobWFya2Rvd25TdHlsZSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWVkaWFUeXBlTmFtZUFuZFNlbGVjdG9yc1N0cmluZyhDbGFzcywgbWVkaWFUeXBlTmFtZSwgc2VsZWN0b3JTdHJpbmcpIHtcbiAgICBpZiAoc2VsZWN0b3JTdHJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3JTdHJpbmcgPSBtZWRpYVR5cGVOYW1lOyAvLy9cblxuICAgICAgbWVkaWFUeXBlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXJrZG93blN0eWxlRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgbWVkaWFUeXBlID0gTWVkaWFUeXBlLmZyb21NZWRpYVR5cGVOYW1lKG1lZGlhVHlwZU5hbWUpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBjcmVhdGVET01FbGVtZW50KCksXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdCA9IFNlbGVjdG9yc0xpc3QuZnJvbVNlbGVjdG9yc1N0cmluZyhzZWxlY3RvclN0cmluZyksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZUVsZW1lbnQgPSBuZXcgQ2xhc3MobWVkaWFUeXBlLCBkb21FbGVtZW50LCBzZWxlY3RvcnNMaXN0KTtcblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlRWxlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGVFbGVtZW50IiwibWVkaWFUeXBlIiwiZG9tRWxlbWVudCIsInNlbGVjdG9yc0xpc3QiLCJnZXRTZWxlY3RvcnNMaXN0IiwidXBkYXRlIiwibWFya2Rvd25TdHlsZSIsImdldE1lZGlhVHlwZSIsImNzcyIsImNzc0Zyb21NYXJrZG93blN0eWxlTWVkaWFUeXBlQW5kU2VsZWN0b3JzTGlzdCIsInNldENTUyIsInJlc2V0IiwiRU1QVFlfU1RSSU5HIiwiZnJvbU1lZGlhVHlwZU5hbWVBbmRTZWxlY3RvcnNTdHJpbmciLCJDbGFzcyIsIm1lZGlhVHlwZU5hbWUiLCJzZWxlY3RvclN0cmluZyIsInVuZGVmaW5lZCIsIk1lZGlhVHlwZSIsImZyb21NZWRpYVR5cGVOYW1lIiwiY3JlYXRlRE9NRWxlbWVudCIsIlNlbGVjdG9yc0xpc3QiLCJmcm9tU2VsZWN0b3JzU3RyaW5nIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJTdHlsZUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O2dFQVJDO29FQUNHO29FQUNDO3lCQUVHO21CQUVpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQUEsQUFBTUEscUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEscUJBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxhQUFhO2dDQUQ3Qkg7O2tDQUVYQyxXQUFXQztRQUVqQixNQUFLQyxhQUFhLEdBQUdBOzs7a0JBSkpIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxhQUFhO1lBQzNCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWE7Z0JBQ2xCLElBQU1MLFlBQVksSUFBSSxDQUFDTSxZQUFZLElBQzdCQyxNQUFNQyxJQUFBQSxrREFBNkMsRUFBQ0gsZUFBZUwsV0FBVyxJQUFJLENBQUNFLGFBQWE7Z0JBRXRHLElBQUksQ0FBQ08sTUFBTSxDQUFDRjtnQkFFWixPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1MLGdCQUFnQk0sdUJBQVk7Z0JBRWxDLElBQUksQ0FBQ1AsTUFBTSxDQUFDQztZQUNkOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLG9DQUFvQ0MsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLGNBQWM7Z0JBQzdFLElBQUlBLG1CQUFtQkMsV0FBVztvQkFDaENELGlCQUFpQkQsZUFBZSxHQUFHO29CQUVuQ0EsZ0JBQWdCRCxPQUFPLEdBQUc7b0JBRTFCQSxRQWhDZWQsc0JBZ0NlLEdBQUc7Z0JBQ25DO2dCQUVBLElBQU1DLFlBQVlpQixrQkFBUyxDQUFDQyxpQkFBaUIsQ0FBQ0osZ0JBQ3hDYixhQUFha0IsSUFBQUEsOEJBQWdCLEtBQzdCakIsZ0JBQWdCa0Isc0JBQWEsQ0FBQ0MsbUJBQW1CLENBQUNOLGlCQUNsRE8sdUJBQXVCLElBQUlULE1BQU1iLFdBQVdDLFlBQVlDO2dCQUU5RCxPQUFPb0I7WUFDVDs7O1dBekNtQnZCO0VBQTZCd0IscUJBQVkifQ==
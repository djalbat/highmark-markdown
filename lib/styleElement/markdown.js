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
    function MarkdownStyleElement(domElement, mediaType, selectorsList) {
        _class_call_check(this, MarkdownStyleElement);
        var _this;
        _this = _super.call(this, domElement);
        _this.mediaType = mediaType;
        _this.selectorsList = selectorsList;
        return _this;
    }
    _create_class(MarkdownStyleElement, [
        {
            key: "getMediaType",
            value: function getMediaType() {
                return this.mediaType;
            }
        },
        {
            key: "getSelectorsList",
            value: function getSelectorsList() {
                return this.selectorsList;
            }
        },
        {
            key: "update",
            value: function update(markdownStyle) {
                var css = (0, _css.cssFromMarkdownStyleMediaTypeAndSelectorsList)(markdownStyle, this.mediaType, this.selectorsList);
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
                var domElement = (0, _styleElement.createDOMElement)(), mediaType = _mediaType.default.fromMediaTypeName(mediaTypeName), selectorsList = _selectorsList.default.fromSelectorsString(selectorString), markdownStyleElement = new Class(domElement, mediaType, selectorsList);
                return markdownStyleElement;
            }
        }
    ]);
    return MarkdownStyleElement;
}(_styleElement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZWRpYVR5cGUgZnJvbSBcIi4uL3N0eWxlL21lZGlhVHlwZVwiO1xuaW1wb3J0IFN0eWxlRWxlbWVudCBmcm9tIFwiLi4vc3R5bGVFbGVtZW50XCI7XG5pbXBvcnQgU2VsZWN0b3JzTGlzdCBmcm9tIFwiLi4vc3R5bGUvc2VsZWN0b3JzTGlzdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVET01FbGVtZW50IH0gZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuaW1wb3J0IHsgY3NzRnJvbU1hcmtkb3duU3R5bGVNZWRpYVR5cGVBbmRTZWxlY3RvcnNMaXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25TdHlsZUVsZW1lbnQgZXh0ZW5kcyBTdHlsZUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50LCBtZWRpYVR5cGUsIHNlbGVjdG9yc0xpc3QpIHtcbiAgICBzdXBlcihkb21FbGVtZW50KTtcblxuICAgIHRoaXMubWVkaWFUeXBlID0gbWVkaWFUeXBlO1xuICAgIHRoaXMuc2VsZWN0b3JzTGlzdCA9IHNlbGVjdG9yc0xpc3Q7XG4gIH1cblxuICBnZXRNZWRpYVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFUeXBlO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvcnNMaXN0O1xuICB9XG5cbiAgdXBkYXRlKG1hcmtkb3duU3R5bGUpIHtcbiAgICBjb25zdCBjc3MgPSBjc3NGcm9tTWFya2Rvd25TdHlsZU1lZGlhVHlwZUFuZFNlbGVjdG9yc0xpc3QobWFya2Rvd25TdHlsZSwgdGhpcy5tZWRpYVR5cGUsIHRoaXMuc2VsZWN0b3JzTGlzdCk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGUgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnVwZGF0ZShtYXJrZG93blN0eWxlKVxuICB9XG5cbiAgc3RhdGljIGZyb21NZWRpYVR5cGVOYW1lQW5kU2VsZWN0b3JzU3RyaW5nKENsYXNzLCBtZWRpYVR5cGVOYW1lLCBzZWxlY3RvclN0cmluZykge1xuICAgIGlmIChzZWxlY3RvclN0cmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvclN0cmluZyA9IG1lZGlhVHlwZU5hbWU7IC8vL1xuXG4gICAgICBtZWRpYVR5cGVOYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE1hcmtkb3duU3R5bGVFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gY3JlYXRlRE9NRWxlbWVudCgpLFxuICAgICAgICAgIG1lZGlhVHlwZSA9IE1lZGlhVHlwZS5mcm9tTWVkaWFUeXBlTmFtZShtZWRpYVR5cGVOYW1lKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0ID0gU2VsZWN0b3JzTGlzdC5mcm9tU2VsZWN0b3JzU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlRWxlbWVudCA9IG5ldyBDbGFzcyhkb21FbGVtZW50LCBtZWRpYVR5cGUsIHNlbGVjdG9yc0xpc3QpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVFbGVtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWFya2Rvd25TdHlsZUVsZW1lbnQiLCJkb21FbGVtZW50IiwibWVkaWFUeXBlIiwic2VsZWN0b3JzTGlzdCIsImdldE1lZGlhVHlwZSIsImdldFNlbGVjdG9yc0xpc3QiLCJ1cGRhdGUiLCJtYXJrZG93blN0eWxlIiwiY3NzIiwiY3NzRnJvbU1hcmtkb3duU3R5bGVNZWRpYVR5cGVBbmRTZWxlY3RvcnNMaXN0Iiwic2V0Q1NTIiwicmVzZXQiLCJFTVBUWV9TVFJJTkciLCJmcm9tTWVkaWFUeXBlTmFtZUFuZFNlbGVjdG9yc1N0cmluZyIsIkNsYXNzIiwibWVkaWFUeXBlTmFtZSIsInNlbGVjdG9yU3RyaW5nIiwidW5kZWZpbmVkIiwiY3JlYXRlRE9NRWxlbWVudCIsIk1lZGlhVHlwZSIsImZyb21NZWRpYVR5cGVOYW1lIiwiU2VsZWN0b3JzTGlzdCIsImZyb21TZWxlY3RvcnNTdHJpbmciLCJtYXJrZG93blN0eWxlRWxlbWVudCIsIlN0eWxlRWxlbWVudCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7Z0VBUkM7b0VBQ0c7b0VBQ0M7eUJBRUc7bUJBRWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBQSxBQUFNQSxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxxQkFDUEMsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLGFBQWE7Z0NBRDdCSDs7a0NBRVhDO1FBRU4sTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxhQUFhLEdBQUdBOzs7a0JBTEpIOztZQVFuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWE7Z0JBQ2xCLElBQU1DLE1BQU1DLElBQUFBLGtEQUE2QyxFQUFDRixlQUFlLElBQUksQ0FBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQ0MsYUFBYTtnQkFFM0csSUFBSSxDQUFDTyxNQUFNLENBQUNGO2dCQUVaLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosZ0JBQWdCSyx1QkFBWTtnQkFFbEMsSUFBSSxDQUFDTixNQUFNLENBQUNDO1lBQ2Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0Esb0NBQW9DQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsY0FBYztnQkFDN0UsSUFBSUEsbUJBQW1CQyxXQUFXO29CQUNoQ0QsaUJBQWlCRCxlQUFlLEdBQUc7b0JBRW5DQSxnQkFBZ0JELE9BQU8sR0FBRztvQkFFMUJBLFFBcENlZCxzQkFvQ2UsR0FBRztnQkFDbkM7Z0JBRUEsSUFBTUMsYUFBYWlCLElBQUFBLDhCQUFnQixLQUM3QmhCLFlBQVlpQixrQkFBUyxDQUFDQyxpQkFBaUIsQ0FBQ0wsZ0JBQ3hDWixnQkFBZ0JrQixzQkFBYSxDQUFDQyxtQkFBbUIsQ0FBQ04saUJBQ2xETyx1QkFBdUIsSUFBSVQsTUFBTWIsWUFBWUMsV0FBV0M7Z0JBRTlELE9BQU9vQjtZQUNUOzs7V0E3Q21CdkI7RUFBNkJ3QixxQkFBWSJ9
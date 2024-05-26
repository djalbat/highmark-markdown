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
var _constants = require("../../constants");
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
        "\n\n  border: 1px solid darkgrey;\n  padding: 1.6rem;\n  font-size: 1.6rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PreviewDiv = /*#__PURE__*/ function(Element) {
    _inherits(PreviewDiv, Element);
    var _super = _create_super(PreviewDiv);
    function PreviewDiv() {
        _class_call_check(this, PreviewDiv);
        return _super.apply(this, arguments);
    }
    _create_class(PreviewDiv, [
        {
            key: "getParentDOMElement",
            value: function getParentDOMElement() {
                var domElement = this.getDOMElement(), parentDOMElement = domElement; ///
                return parentDOMElement;
            }
        },
        {
            key: "clear",
            value: function clear() {
                var parentDOMElement = this.getParentDOMElement(), innerHTML = _constants.EMPTY_STRING; ///
                Object.assign(parentDOMElement, {
                    innerHTML: innerHTML
                });
            }
        },
        {
            key: "update",
            value: function update(domElements) {
                var parentDOMElement = this.getParentDOMElement();
                this.clear();
                domElements.forEach(function(domElement) {
                    parentDOMElement.appendChild(domElement);
                });
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var clearPreviewDiv = this.clear.bind(this), updatePreviewDiv = this.update.bind(this); ///
                return {
                    clearPreviewDiv: clearPreviewDiv,
                    updatePreviewDiv: updatePreviewDiv
                };
            }
        }
    ]);
    return PreviewDiv;
}(_wrap_native_super(_easy.Element));
_define_property(PreviewDiv, "tagName", "div");
_define_property(PreviewDiv, "defaultProperties", {
    className: "preview"
});
var _default = (0, _easywithstyle.default)(PreviewDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3ByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIFByZXZpZXdEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyZW50RE9NRWxlbWVudCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGlubmVySFRNTCA9IEVNUFRZX1NUUklORzsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHBhcmVudERPTUVsZW1lbnQsIHtcbiAgICAgIGlubmVySFRNTFxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKGRvbUVsZW1lbnRzKSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgZG9tRWxlbWVudHMuZm9yRWFjaCgoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY2xlYXJQcmV2aWV3RGl2ID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1cGRhdGVQcmV2aWV3RGl2ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjbGVhclByZXZpZXdEaXYsXG4gICAgICB1cGRhdGVQcmV2aWV3RGl2XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXZpZXdEaXYpYFxuXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xuICBwYWRkaW5nOiAxLjZyZW07XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiUHJldmlld0RpdiIsImdldFBhcmVudERPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJjbGVhciIsImlubmVySFRNTCIsIkVNUFRZX1NUUklORyIsIk9iamVjdCIsImFzc2lnbiIsInVwZGF0ZSIsImRvbUVsZW1lbnRzIiwiZm9yRWFjaCIsImFwcGVuZENoaWxkIiwicGFyZW50Q29udGV4dCIsImNsZWFyUHJldmlld0RpdiIsImJpbmQiLCJ1cGRhdGVQcmV2aWV3RGl2IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvREE7OztlQUFBOzs7b0VBbERzQjtvQkFFRTt5QkFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLDJCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxtQkFBbUJGLFlBQWEsR0FBRztnQkFFekMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxtQkFBbUIsSUFBSSxDQUFDSCxtQkFBbUIsSUFDM0NLLFlBQVlDLHVCQUFZLEVBQUUsR0FBRztnQkFFbkNDLE9BQU9DLE1BQU0sQ0FBQ0wsa0JBQWtCO29CQUM5QkUsV0FBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXO2dCQUNoQixJQUFNUCxtQkFBbUIsSUFBSSxDQUFDSCxtQkFBbUI7Z0JBRWpELElBQUksQ0FBQ0ksS0FBSztnQkFFVk0sWUFBWUMsT0FBTyxDQUFDLFNBQUNWO29CQUNuQkUsaUJBQWlCUyxXQUFXLENBQUNYO2dCQUMvQjtZQUNGOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFrQixJQUFJLENBQUNWLEtBQUssQ0FBQ1csSUFBSSxDQUFDLElBQUksR0FDdENDLG1CQUFtQixJQUFJLENBQUNQLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUVyRCxPQUFRO29CQUNORCxpQkFBQUE7b0JBQ0FFLGtCQUFBQTtnQkFDRjtZQUNGOzs7V0FuQ0lqQjtxQkFBbUJrQixhQUFPO0FBcUM5QixpQkFyQ0lsQixZQXFDR21CLFdBQVU7QUFFakIsaUJBdkNJbkIsWUF1Q0dvQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN0QiJ9
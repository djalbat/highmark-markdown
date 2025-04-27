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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
        "\n\n  height: 100%;\n  overflow: scroll;\n  position: relative;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PreviewDiv = /*#__PURE__*/ function(Element) {
    _inherits(PreviewDiv, Element);
    function PreviewDiv() {
        _class_call_check(this, PreviewDiv);
        return _call_super(this, PreviewDiv, arguments);
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
                var divisionHTMLNode;
                divisionHTMLNode = this.getDivisionHTMLNode();
                if (divisionHTMLNode !== null) {
                    var parentDOMElement = this.getParentDOMElement();
                    divisionHTMLNode.unmount(parentDOMElement);
                    divisionHTMLNode = null;
                    this.setDivisionHTMLNode(divisionHTMLNode);
                }
            }
        },
        {
            key: "update",
            value: function update(divisionHTMLNode, context) {
                this.clear();
                var whitespaceTokenIndex = -1;
                Object.assign(context, {
                    whitespaceTokenIndex: whitespaceTokenIndex
                });
                var parentDOMElement = this.getParentDOMElement(), siblingDOMElement = null;
                divisionHTMLNode.mount(parentDOMElement, siblingDOMElement, context);
                this.setDivisionHTMLNode(divisionHTMLNode);
            }
        },
        {
            key: "getDivisionHTMLNode",
            value: function getDivisionHTMLNode() {
                var divisionHTMLNode = this.getState().divisionHTMLNode;
                return divisionHTMLNode;
            }
        },
        {
            key: "setDivisionHTMLNode",
            value: function setDivisionHTMLNode(divisionHTMLNode) {
                this.updateState({
                    divisionHTMLNode: divisionHTMLNode
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var divisionHTMLNode = null;
                this.setState({
                    divisionHTMLNode: divisionHTMLNode
                });
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), clearPreviewDiv = this.clear.bind(this), updatePreviewDiv = this.update.bind(this); ///
                return _object_spread_props(_object_spread({}, context), {
                    clearPreviewDiv: clearPreviewDiv,
                    updatePreviewDiv: updatePreviewDiv
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3ByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBQcmV2aWV3RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFBhcmVudERPTUVsZW1lbnQoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gcGFyZW50RE9NRWxlbWVudDtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGxldCBkaXZpc2lvbkhUTUxOb2RlO1xuXG4gICAgZGl2aXNpb25IVE1MTm9kZSA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZSgpO1xuXG4gICAgaWYgKGRpdmlzaW9uSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmdldFBhcmVudERPTUVsZW1lbnQoKTtcblxuICAgICAgZGl2aXNpb25IVE1MTm9kZS51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgICBkaXZpc2lvbkhUTUxOb2RlID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXREaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkaXZpc2lvbkhUTUxOb2RlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgY29uc3Qgd2hpdGVzcGFjZVRva2VuSW5kZXggPSAtMTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgd2hpdGVzcGFjZVRva2VuSW5kZXhcbiAgICB9KTtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmdldFBhcmVudERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICBkaXZpc2lvbkhUTUxOb2RlLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHRoaXMuc2V0RGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcbiAgfVxuXG4gIGdldERpdmlzaW9uSFRNTE5vZGUoKSB7XG4gICAgY29uc3QgeyBkaXZpc2lvbkhUTUxOb2RlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgZGl2aXNpb25IVE1MTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXZpc2lvbkhUTUxOb2RlXG4gICAgfSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjbGVhclByZXZpZXdEaXYgPSB0aGlzLmNsZWFyLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHVwZGF0ZVByZXZpZXdEaXYgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICBjbGVhclByZXZpZXdEaXYsXG4gICAgICB1cGRhdGVQcmV2aWV3RGl2XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXZpZXdEaXYpYFxuXG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiUHJldmlld0RpdiIsImdldFBhcmVudERPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJjbGVhciIsImRpdmlzaW9uSFRNTE5vZGUiLCJnZXREaXZpc2lvbkhUTUxOb2RlIiwidW5tb3VudCIsInNldERpdmlzaW9uSFRNTE5vZGUiLCJ1cGRhdGUiLCJjb250ZXh0Iiwid2hpdGVzcGFjZVRva2VuSW5kZXgiLCJPYmplY3QiLCJhc3NpZ24iLCJzaWJsaW5nRE9NRWxlbWVudCIsIm1vdW50IiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwicGFyZW50Q29udGV4dCIsImdldENvbnRleHQiLCJjbGVhclByZXZpZXdEaXYiLCJiaW5kIiwidXBkYXRlUHJldmlld0RpdiIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwRkE7OztlQUFBOzs7b0VBeEZzQjtvQkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFBLEFBQU1BLDJCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLG1CQUFtQkYsWUFBYSxHQUFHO2dCQUV6QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKQSxtQkFBbUIsSUFBSSxDQUFDQyxtQkFBbUI7Z0JBRTNDLElBQUlELHFCQUFxQixNQUFNO29CQUM3QixJQUFNRixtQkFBbUIsSUFBSSxDQUFDSCxtQkFBbUI7b0JBRWpESyxpQkFBaUJFLE9BQU8sQ0FBQ0o7b0JBRXpCRSxtQkFBbUI7b0JBRW5CLElBQUksQ0FBQ0csbUJBQW1CLENBQUNIO2dCQUMzQjtZQUNGOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9KLGdCQUFnQixFQUFFSyxPQUFPO2dCQUM5QixJQUFJLENBQUNOLEtBQUs7Z0JBRVYsSUFBTU8sdUJBQXVCLENBQUM7Z0JBRTlCQyxPQUFPQyxNQUFNLENBQUNILFNBQVM7b0JBQ3JCQyxzQkFBQUE7Z0JBQ0Y7Z0JBRUEsSUFBTVIsbUJBQW1CLElBQUksQ0FBQ0gsbUJBQW1CLElBQzNDYyxvQkFBb0I7Z0JBRTFCVCxpQkFBaUJVLEtBQUssQ0FBQ1osa0JBQWtCVyxtQkFBbUJKO2dCQUU1RCxJQUFJLENBQUNGLG1CQUFtQixDQUFDSDtZQUMzQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVELG1CQUFxQixJQUFJLENBQUNXLFFBQVEsR0FBbENYO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CSCxnQkFBZ0I7Z0JBQ2xDLElBQUksQ0FBQ1ksV0FBVyxDQUFDO29CQUNmWixrQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNYixtQkFBbUI7Z0JBRXpCLElBQUksQ0FBQ2MsUUFBUSxDQUFDO29CQUNaZCxrQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFlLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVixVQUFVLElBQUksQ0FBQ1csVUFBVSxJQUN6QkMsa0JBQWtCLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ21CLElBQUksQ0FBQyxJQUFJLEdBQ3RDQyxtQkFBbUIsSUFBSSxDQUFDZixNQUFNLENBQUNjLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztnQkFFckQsT0FBUSx3Q0FDSGI7b0JBQ0hZLGlCQUFBQTtvQkFDQUUsa0JBQUFBOztZQUVKOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ1AsZUFBZTtZQUN0Qjs7O1dBM0VJbkI7cUJBQW1CMkIsYUFBTztBQTZFOUIsaUJBN0VJM0IsWUE2RUc0QixXQUFVO0FBRWpCLGlCQS9FSTVCLFlBK0VHNkIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDL0IifQ==
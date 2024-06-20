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
var _necessary = require("necessary");
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("../div/pageButtons"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
        "\n\n  height: 48rem;\n  border: 1px solid darkgrey;\n  overflow: scroll;\n  position: relative;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var first = _necessary.arrayUtilities.first;
var PreviewDiv = /*#__PURE__*/ function(Element) {
    _inherits(PreviewDiv, Element);
    var _super = _create_super(PreviewDiv);
    function PreviewDiv() {
        _class_call_check(this, PreviewDiv);
        return _super.apply(this, arguments);
    }
    _create_class(PreviewDiv, [
        {
            key: "getPageButtonsDivDOMElement",
            value: function getPageButtonsDivDOMElement() {
                var childElements = this.getChildElements(), firstChildElement = first(childElements), pageButtonsDiv = firstChildElement, pageButtonsDivDOMElement = pageButtonsDiv.getDOMElement();
                return pageButtonsDivDOMElement;
            }
        },
        {
            key: "getParentDOMElement",
            value: function getParentDOMElement() {
                var domElement = this.getDOMElement(), parentDOMElement = domElement; ///
                return parentDOMElement;
            }
        },
        {
            key: "getDOMElements",
            value: function getDOMElements() {
                var parentDOMElement = this.getParentDOMElement(), childNodes = parentDOMElement.childNodes, domElements = _to_consumable_array(childNodes);
                return domElements;
            }
        },
        {
            key: "clear",
            value: function clear() {
                var domElements = this.getDOMElements(), pageButtonsDivDOMElement = this.getPageButtonsDivDOMElement();
                domElements.forEach(function(domElement) {
                    if (domElement !== pageButtonsDivDOMElement) {
                        domElement.remove();
                    }
                });
            }
        },
        {
            key: "update",
            value: function update(domElement) {
                this.clear();
                var parentDOMElement = this.getParentDOMElement();
                parentDOMElement.appendChild(domElement);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var onCustomPageUpdate = this.properties.onCustomPageUpdate, pageUpdateCustomHandler = onCustomPageUpdate; ///
                return /*#__PURE__*/ React.createElement(_pageButtons.default, {
                    onCustomPageUpdate: pageUpdateCustomHandler
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
        }
    ]);
    return PreviewDiv;
}(_wrap_native_super(_easy.Element));
_define_property(PreviewDiv, "tagName", "div");
_define_property(PreviewDiv, "ignoredProperties", [
    "onCustomPageUpdate"
]);
_define_property(PreviewDiv, "defaultProperties", {
    className: "preview"
});
var _default = (0, _easywithstyle.default)(PreviewDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3ByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQYWdlQnV0dG9uc0RpdiBmcm9tIFwiLi4vZGl2L3BhZ2VCdXR0b25zXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBQcmV2aWV3RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFBhZ2VCdXR0b25zRGl2RE9NRWxlbWVudCgpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZEVsZW1lbnQgPSBmaXJzdChjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBwYWdlQnV0dG9uc0RpdiA9IGZpcnN0Q2hpbGRFbGVtZW50LCAvLy9cbiAgICAgICAgICBwYWdlQnV0dG9uc0RpdkRPTUVsZW1lbnQgPSBwYWdlQnV0dG9uc0Rpdi5nZXRET01FbGVtZW50KCk7XG5cbiAgICByZXR1cm4gcGFnZUJ1dHRvbnNEaXZET01FbGVtZW50O1xuICB9XG5cbiAgZ2V0UGFyZW50RE9NRWxlbWVudCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudHMoKSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHsgY2hpbGROb2RlcyB9ID0gcGFyZW50RE9NRWxlbWVudCxcbiAgICAgICAgICBkb21FbGVtZW50cyA9IFsgLy8vXG4gICAgICAgICAgICAuLi5jaGlsZE5vZGVzXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBkb21FbGVtZW50cztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gdGhpcy5nZXRET01FbGVtZW50cygpLFxuICAgICAgICAgIHBhZ2VCdXR0b25zRGl2RE9NRWxlbWVudCA9IHRoaXMuZ2V0UGFnZUJ1dHRvbnNEaXZET01FbGVtZW50KCk7XG5cbiAgICBkb21FbGVtZW50cy5mb3JFYWNoKChkb21FbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZG9tRWxlbWVudCAhPT0gcGFnZUJ1dHRvbnNEaXZET01FbGVtZW50KSB7XG4gICAgICAgIGRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmdldFBhcmVudERPTUVsZW1lbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgb25DdXN0b21QYWdlVXBkYXRlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgcGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIgPSBvbkN1c3RvbVBhZ2VVcGRhdGU7IC8vL1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFBhZ2VCdXR0b25zRGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17cGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXJ9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY2xlYXJQcmV2aWV3RGl2ID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1cGRhdGVQcmV2aWV3RGl2ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgY2xlYXJQcmV2aWV3RGl2LFxuICAgICAgdXBkYXRlUHJldmlld0RpdlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ3VzdG9tUGFnZVVwZGF0ZVwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXZpZXdEaXYpYFxuXG4gIGhlaWdodDogNDhyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiUHJldmlld0RpdiIsImdldFBhZ2VCdXR0b25zRGl2RE9NRWxlbWVudCIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZmlyc3RDaGlsZEVsZW1lbnQiLCJwYWdlQnV0dG9uc0RpdiIsInBhZ2VCdXR0b25zRGl2RE9NRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJnZXRQYXJlbnRET01FbGVtZW50IiwiZG9tRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50cyIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50cyIsImNsZWFyIiwiZm9yRWFjaCIsInJlbW92ZSIsInVwZGF0ZSIsImFwcGVuZENoaWxkIiwib25DdXN0b21QYWdlVXBkYXRlIiwicHJvcGVydGllcyIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiUGFnZUJ1dHRvbnNEaXYiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJjbGVhclByZXZpZXdEaXYiLCJiaW5kIiwidXBkYXRlUHJldmlld0RpdiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJGQTs7O2VBQUE7OztvRUF6RnNCO29CQUVFO3lCQUNPO2tFQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQUEsQUFBTUUsMkJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3JDQyxvQkFBb0JOLE1BQU1JLGdCQUMxQkcsaUJBQWlCRCxtQkFDakJFLDJCQUEyQkQsZUFBZUUsYUFBYTtnQkFFN0QsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ0YsYUFBYSxJQUMvQkcsbUJBQW1CRCxZQUFhLEdBQUc7Z0JBRXpDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsbUJBQW1CLElBQUksQ0FBQ0YsbUJBQW1CLElBQzNDLEFBQUVJLGFBQWVGLGlCQUFmRSxZQUNGQyxjQUNFLHFCQUFHRDtnQkFHWCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELGNBQWMsSUFBSSxDQUFDRixjQUFjLElBQ2pDTCwyQkFBMkIsSUFBSSxDQUFDTCwyQkFBMkI7Z0JBRWpFWSxZQUFZRSxPQUFPLENBQUMsU0FBQ047b0JBQ25CLElBQUlBLGVBQWVILDBCQUEwQjt3QkFDM0NHLFdBQVdPLE1BQU07b0JBQ25CO2dCQUNGO1lBQ0Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT1IsVUFBVTtnQkFDZixJQUFJLENBQUNLLEtBQUs7Z0JBRVYsSUFBTUosbUJBQW1CLElBQUksQ0FBQ0YsbUJBQW1CO2dCQUVqREUsaUJBQWlCUSxXQUFXLENBQUNUO1lBQy9COzs7WUFFQVAsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRWlCLHFCQUF1QixJQUFJLENBQUNDLFVBQVUsQ0FBdENELG9CQUNGRSwwQkFBMEJGLG9CQUFvQixHQUFHO2dCQUV2RCxxQkFFRSxvQkFBQ0csb0JBQWM7b0JBQUNILG9CQUFvQkU7O1lBR3hDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxrQkFBa0IsSUFBSSxDQUFDWixLQUFLLENBQUNhLElBQUksQ0FBQyxJQUFJLEdBQ3RDQyxtQkFBbUIsSUFBSSxDQUFDWCxNQUFNLENBQUNVLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztnQkFFckQsT0FBUSx3Q0FDSEg7b0JBQ0hFLGlCQUFBQTtvQkFDQUUsa0JBQUFBOztZQUVKOzs7V0FuRUk1QjtxQkFBbUI2QixhQUFPO0FBcUU5QixpQkFyRUk3QixZQXFFRzhCLFdBQVU7QUFFakIsaUJBdkVJOUIsWUF1RUcrQixxQkFBb0I7SUFDekI7Q0FDRDtBQUVELGlCQTNFSS9CLFlBMkVHZ0MscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDbEMifQ==
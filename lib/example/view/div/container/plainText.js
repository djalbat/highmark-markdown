"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PlainTextContainerDiv;
    }
});
var _container = /*#__PURE__*/ _interop_require_default(require("../../div/container"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("../../textarea/plainText"));
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
var PlainTextContainerDiv = /*#__PURE__*/ function(ContainerDiv) {
    _inherits(PlainTextContainerDiv, ContainerDiv);
    var _super = _create_super(PlainTextContainerDiv);
    function PlainTextContainerDiv() {
        _class_call_check(this, PlainTextContainerDiv);
        return _super.apply(this, arguments);
    }
    _create_class(PlainTextContainerDiv, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_plainText.default, null);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), showPlainTextContainerDiv = this.show.bind(this), hidePlainTextContainerDiv = this.hide.bind(this); ///
                return _object_spread_props(_object_spread({}, context), {
                    showPlainTextContainerDiv: showPlainTextContainerDiv,
                    hidePlainTextContainerDiv: hidePlainTextContainerDiv
                });
            }
        }
    ]);
    return PlainTextContainerDiv;
}(_container.default);
_define_property(PlainTextContainerDiv, "defaultProperties", {
    className: "plain-text"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2NvbnRhaW5lci9wbGFpblRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250YWluZXJEaXYgZnJvbSBcIi4uLy4uL2Rpdi9jb250YWluZXJcIjtcbmltcG9ydCBQbGFpblRleHRUZXh0YXJlYSBmcm9tIFwiLi4vLi4vdGV4dGFyZWEvcGxhaW5UZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYWluVGV4dENvbnRhaW5lckRpdiBleHRlbmRzIENvbnRhaW5lckRpdiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPFBsYWluVGV4dFRleHRhcmVhLz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2ID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2ID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHNob3dQbGFpblRleHRDb250YWluZXJEaXYsXG4gICAgICBoaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBsYWluLXRleHRcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlBsYWluVGV4dENvbnRhaW5lckRpdiIsImNoaWxkRWxlbWVudHMiLCJQbGFpblRleHRUZXh0YXJlYSIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInNob3dQbGFpblRleHRDb250YWluZXJEaXYiLCJzaG93IiwiYmluZCIsImhpZGVQbGFpblRleHRDb250YWluZXJEaXYiLCJoaWRlIiwiQ29udGFpbmVyRGl2IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O2dFQUhJO2dFQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmLElBQUEsQUFBTUEsc0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyxrQkFBaUI7WUFHdEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLDRCQUE0QixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDL0NDLDRCQUE0QixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUU1RCxPQUFRLHdDQUNISjtvQkFDSEUsMkJBQUFBO29CQUNBRywyQkFBQUE7O1lBRUo7OztXQW5CbUJUO0VBQThCVyxrQkFBWTtBQXFCN0QsaUJBckJtQlgsdUJBcUJaWSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9
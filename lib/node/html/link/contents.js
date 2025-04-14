"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsLinkHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _prepends = require("../../../prepends");
var _attributeNames = require("../../../attributeNames");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ContentsLinkHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(ContentsLinkHTMLNode, HTMLNode);
    function ContentsLinkHTMLNode() {
        _class_call_check(this, ContentsLinkHTMLNode);
        return _call_super(this, ContentsLinkHTMLNode, arguments);
    }
    _create_class(ContentsLinkHTMLNode, [
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.outerNode.getIdentifier();
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var prepend = _prepends.CONTENTS_PREPEND, identifier = this.getIdentifier(), attributeValue = "#".concat(prepend, "-").concat(identifier);
                return attributeValue;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(ContentsLinkHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(ContentsLinkHTMLNode, outerNode);
            }
        }
    ]);
    return ContentsLinkHTMLNode;
}(_html.default);
_define_property(ContentsLinkHTMLNode, "tagName", "a");
_define_property(ContentsLinkHTMLNode, "className", "contents-link");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9jb250ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50c0xpbmtIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgZ2V0SWRlbnRpZmllcigpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmdldElkZW50aWZpZXIoKTsgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IENPTlRFTlRTX1BSRVBFTkQsXG4gICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYCMke3ByZXBlbmR9LSR7aWRlbnRpZmllcn1gO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJjb250ZW50cy1saW5rXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoQ29udGVudHNMaW5rSFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKENvbnRlbnRzTGlua0hUTUxOb2RlLCBvdXRlck5vZGUpOyB9XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNMaW5rSFRNTE5vZGUiLCJnZXRJZGVudGlmaWVyIiwib3V0ZXJOb2RlIiwiYXR0cmlidXRlTmFtZSIsImNvbnRleHQiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJwcmVwZW5kIiwiQ09OVEVOVFNfUFJFUEVORCIsImlkZW50aWZpZXIiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxBO3dCQUVZOzhCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFrQixPQUFPLElBQUksQ0FBQ0MsU0FBUyxDQUFDRCxhQUFhO1lBQUk7OztZQUV6REUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLE9BQU87Z0JBQ25CLElBQU1ELGdCQUFnQkUsbUNBQW1CO2dCQUV6QyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVGLE9BQU87Z0JBQ3BCLElBQU1HLFVBQVVDLDBCQUFnQixFQUMxQkMsYUFBYSxJQUFJLENBQUNSLGFBQWEsSUFDL0JLLGlCQUFpQixBQUFDLElBQWNHLE9BQVhGLFNBQVEsS0FBYyxPQUFYRTtnQkFFdEMsT0FBT0g7WUFDVDs7OztZQU1PSSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBckIvQlY7WUFxQnVEOzs7WUFFbkVZLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNWLFNBQVM7Z0JBQUksT0FBT1MsYUFBUSxDQUFDQyxhQUFhLENBdkI1Q1osc0JBdUJtRUU7WUFBWTs7O1dBdkIvRUY7RUFBNkJXLGFBQVE7QUFpQnhELGlCQWpCbUJYLHNCQWlCWmEsV0FBVTtBQUVqQixpQkFuQm1CYixzQkFtQlpjLGFBQVkifQ==
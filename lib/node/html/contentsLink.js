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
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _prepends = require("../../prepends");
var _attributeNames = require("../../attributeNames");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvY29udGVudHNMaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuXG5pbXBvcnQgeyBDT05URU5UU19QUkVQRU5EIH0gZnJvbSBcIi4uLy4uL3ByZXBlbmRzXCI7XG5pbXBvcnQgeyBIUkVGX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRJZGVudGlmaWVyKCkgeyByZXR1cm4gdGhpcy5vdXRlck5vZGUuZ2V0SWRlbnRpZmllcigpOyB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVwZW5kID0gQ09OVEVOVFNfUFJFUEVORCxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBgIyR7cHJlcGVuZH0tJHtpZGVudGlmaWVyfWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhDb250ZW50c0xpbmtIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQ29udGVudHNMaW5rSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0xpbmtIVE1MTm9kZSIsImdldElkZW50aWZpZXIiLCJvdXRlck5vZGUiLCJhdHRyaWJ1dGVOYW1lIiwiY29udGV4dCIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsInByZXBlbmQiLCJDT05URU5UU19QUkVQRU5EIiwiaWRlbnRpZmllciIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMQTt3QkFFWTs4QkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFrQixPQUFPLElBQUksQ0FBQ0MsU0FBUyxDQUFDRCxhQUFhO1lBQUk7OztZQUV6REUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLE9BQU87Z0JBQ25CLElBQU1ELGdCQUFnQkUsbUNBQW1CO2dCQUV6QyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVGLE9BQU87Z0JBQ3BCLElBQU1HLFVBQVVDLDBCQUFnQixFQUMxQkMsYUFBYSxJQUFJLENBQUNSLGFBQWEsSUFDL0JLLGlCQUFpQixBQUFDLElBQWNHLE9BQVhGLFNBQVEsS0FBYyxPQUFYRTtnQkFFdEMsT0FBT0g7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBakIvQlY7WUFpQnVEOzs7WUFFbkVZLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNWLFNBQVM7Z0JBQUksT0FBT1MsYUFBUSxDQUFDQyxhQUFhLENBbkI1Q1osc0JBbUJtRUU7WUFBWTs7O1dBbkIvRUY7RUFBNkJXLGFBQVEifQ==
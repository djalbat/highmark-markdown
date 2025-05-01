"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AnchorHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _constants = require("../../constants");
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
var AnchorHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(AnchorHTMLNode, HTMLNode);
    function AnchorHTMLNode(outerNode, parentNode, childNodes, domElement, identifier) {
        _class_call_check(this, AnchorHTMLNode);
        var _this;
        _this = _call_super(this, AnchorHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement
        ]);
        _this.identifier = identifier;
        return _this;
    }
    _create_class(AnchorHTMLNode, [
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var content = _constants.EMPTY_STRING;
                return content;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.ID_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var attributeValue = "".concat(this.prepend, "-").concat(this.identifier);
                return attributeValue;
            }
        }
    ], [
        {
            key: "fromIdentifier",
            value: function fromIdentifier(identifier) {
                var anchorHTMLNode = _html.default.fromNothing(AnchorHTMLNode, identifier);
                return anchorHTMLNode;
            }
        }
    ]);
    return AnchorHTMLNode;
}(_html.default);
_define_property(AnchorHTMLNode, "tagName", "a");
_define_property(AnchorHTMLNode, "className", "anchor");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvYW5jaG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBJRF9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmNob3JIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCBpZGVudGlmaWVyKSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBjb250ZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSURfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGAke3RoaXMucHJlcGVuZH0tJHt0aGlzLmlkZW50aWZpZXJ9YDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiYW5jaG9yXCI7XG5cbiAgc3RhdGljIGZyb21JZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBhbmNob3JIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKEFuY2hvckhUTUxOb2RlLCBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBhbmNob3JIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkFuY2hvckhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwiaWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJjb250ZW50IiwiY29udGV4dCIsIkVNUFRZX1NUUklORyIsImF0dHJpYnV0ZU5hbWUiLCJJRF9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwicHJlcGVuZCIsImZyb21JZGVudGlmaWVyIiwiYW5jaG9ySFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21Ob3RoaW5nIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEE7eUJBRVE7OEJBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5CLElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7YUFBQUEsZUFDUEMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVO2dDQURsREw7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQVdDO1lBQVlDO1lBQVlDOztRQUV6QyxNQUFLQyxVQUFVLEdBQUdBOzs7a0JBSkRMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUQsVUFBVUUsdUJBQVk7Z0JBRTVCLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0YsT0FBTztnQkFDbkIsSUFBTUUsZ0JBQWdCQyxpQ0FBaUI7Z0JBRXZDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUosT0FBTztnQkFDcEIsSUFBTUksaUJBQWlCLEFBQUMsR0FBa0IsT0FBaEIsSUFBSSxDQUFDQyxPQUFPLEVBQUMsS0FBbUIsT0FBaEIsSUFBSSxDQUFDUixVQUFVO2dCQUV6RCxPQUFPTztZQUNUOzs7O1lBTU9FLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVULFVBQVU7Z0JBQzlCLElBQU1VLGlCQUFpQkMsYUFBUSxDQUFDQyxXQUFXLENBbEMxQmpCLGdCQWtDMkNLO2dCQUU1RCxPQUFPVTtZQUNUOzs7V0FyQ21CZjtFQUF1QmdCLGFBQVE7QUE2QmxELGlCQTdCbUJoQixnQkE2QlprQixXQUFVO0FBRWpCLGlCQS9CbUJsQixnQkErQlptQixhQUFZIn0=
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
    function ContentsLinkHTMLNode(outerNode, parentNode, childNodes, domElement, identifier) {
        _class_call_check(this, ContentsLinkHTMLNode);
        var _this;
        _this = _call_super(this, ContentsLinkHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement
        ]);
        _this.identifier = identifier;
        return _this;
    }
    _create_class(ContentsLinkHTMLNode, [
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
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
                var prepend = _prepends.CONTENTS_PREPEND, attributeValue = "#".concat(prepend, "-").concat(this.identifier);
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
        },
        {
            key: "fromLineHTMLTransformAndIdentifier",
            value: function fromLineHTMLTransformAndIdentifier(lineHTMLTransform, identifier) {
                var lineHTMLNode = lineHTMLTransform.getLineHTMLNode(), childNodes = [
                    lineHTMLNode
                ], contentsLinkHTMLNode = _html.default.fromChildNodes(ContentsLinkHTMLNode, childNodes, identifier);
                return contentsLinkHTMLNode;
            }
        }
    ]);
    return ContentsLinkHTMLNode;
}(_html.default);
_define_property(ContentsLinkHTMLNode, "tagName", "a");
_define_property(ContentsLinkHTMLNode, "className", "contents-link");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9jb250ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50c0xpbmtIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCBpZGVudGlmaWVyKSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IHByZXBlbmQgPSBDT05URU5UU19QUkVQRU5ELFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYCMke3ByZXBlbmR9LSR7dGhpcy5pZGVudGlmaWVyfWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYVwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImNvbnRlbnRzLWxpbmtcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhDb250ZW50c0xpbmtIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoQ29udGVudHNMaW5rSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbUxpbmVIVE1MVHJhbnNmb3JtQW5kSWRlbnRpZmllcihsaW5lSFRNTFRyYW5zZm9ybSwgaWRlbnRpZmllcikge1xuICAgIGNvbnN0IGxpbmVIVE1MTm9kZSA9IGxpbmVIVE1MVHJhbnNmb3JtLmdldExpbmVIVE1MTm9kZSgpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICBsaW5lSFRNTE5vZGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNvbnRlbnRzTGlua0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkTm9kZXMoQ29udGVudHNMaW5rSFRNTE5vZGUsIGNoaWxkTm9kZXMsIGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlua0hUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNMaW5rSFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJpZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsImF0dHJpYnV0ZU5hbWUiLCJjb250ZXh0IiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwicHJlcGVuZCIsIkNPTlRFTlRTX1BSRVBFTkQiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsImZyb21MaW5lSFRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIiLCJsaW5lSFRNTFRyYW5zZm9ybSIsImxpbmVIVE1MTm9kZSIsImdldExpbmVIVE1MTm9kZSIsImNvbnRlbnRzTGlua0hUTUxOb2RlIiwiZnJvbUNoaWxkTm9kZXMiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMQTt3QkFFWTs4QkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQSxxQkFDUEMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVO2dDQURsREw7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQVdDO1lBQVlDO1lBQVlDOztRQUV6QyxNQUFLQyxVQUFVLEdBQUdBOzs7a0JBSkRMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLE9BQU87Z0JBQ25CLElBQU1ELGdCQUFnQkUsbUNBQW1CO2dCQUV6QyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVGLE9BQU87Z0JBQ3BCLElBQU1HLFVBQVVDLDBCQUFnQixFQUMxQkYsaUJBQWlCLEFBQUMsSUFBYyxPQUFYQyxTQUFRLEtBQW1CLE9BQWhCLElBQUksQ0FBQ04sVUFBVTtnQkFFckQsT0FBT0s7WUFDVDs7OztZQU1PRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBNUIvQmI7WUE0QnVEOzs7WUFFbkVlLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNkLFNBQVM7Z0JBQUksT0FBT2EsYUFBUSxDQUFDQyxhQUFhLENBOUI1Q2Ysc0JBOEJtRUM7WUFBWTs7O1lBRTNGZSxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLGlCQUFpQixFQUFFWixVQUFVO2dCQUNyRSxJQUFNYSxlQUFlRCxrQkFBa0JFLGVBQWUsSUFDaERoQixhQUFhO29CQUNYZTtpQkFDRCxFQUNERSx1QkFBdUJOLGFBQVEsQ0FBQ08sY0FBYyxDQXJDbkNyQixzQkFxQzBERyxZQUFZRTtnQkFFdkYsT0FBT2U7WUFDVDs7O1dBeENtQnBCO0VBQTZCYyxhQUFRO0FBd0J4RCxpQkF4Qm1CZCxzQkF3QlpzQixXQUFVO0FBRWpCLGlCQTFCbUJ0QixzQkEwQlp1QixhQUFZIn0=
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LinkMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _attributeNames = require("../../attributeNames");
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
var second = _necessary.arrayUtilities.second;
var LinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(LinkMarkdownNode, MarkdownNode);
    var _super = _create_super(LinkMarkdownNode);
    function LinkMarkdownNode() {
        _class_call_check(this, LinkMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(LinkMarkdownNode, [
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var number = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var html;
                if (number === null) {
                    var selfClosingTag = this.selfClosingTag(context);
                    html = selfClosingTag; ///
                } else {
                    var startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                    html = "".concat(startingTag).concat(number).concat(closingTag);
                }
                return html;
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), identifierTerminalNode = secondChildNode, identifierTerminalNodeContent = identifierTerminalNode.getContent(), identifier = identifierTerminalNodeContent; ///
                return identifier;
            }
        },
        {
            key: "attributeName",
            value: function attributeName() {
                var attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var identifier = this.identifier(context), attributeValue = "#".concat(identifier); ///
                return attributeValue;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(LinkMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return LinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEhSRUZfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCwgbnVtYmVyID0gbnVsbCkge1xuICAgIGxldCBodG1sO1xuXG4gICAgaWYgKG51bWJlciA9PT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2VsZkNsb3NpbmdUYWcgPSB0aGlzLnNlbGZDbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gc2VsZkNsb3NpbmdUYWc7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IGAke3N0YXJ0aW5nVGFnfSR7bnVtYmVyfSR7Y2xvc2luZ1RhZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBpZGVudGlmaWVyVGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgaWRlbnRpZmllclRlcm1pbmFsTm9kZUNvbnRlbnQgPSBpZGVudGlmaWVyVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllclRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGAjJHtpZGVudGlmaWVyfWA7IC8vL1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoTGlua01hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiTGlua01hcmtkb3duTm9kZSIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwiYXNIVE1MIiwiaW5kZW50IiwiY29udGV4dCIsIm51bWJlciIsImh0bWwiLCJzZWxmQ2xvc2luZ1RhZyIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImlkZW50aWZpZXIiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsImlkZW50aWZpZXJUZXJtaW5hbE5vZGUiLCJpZGVudGlmaWVyVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJhdHRyaWJ1dGVOYW1lIiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOytEQUVOOzhCQUVXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCxpQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFQyxPQUFPO29CQUFFQyxTQUFBQSxpRUFBUztnQkFDL0IsSUFBSUM7Z0JBRUosSUFBSUQsV0FBVyxNQUFNO29CQUNuQixJQUFNRSxpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNIO29CQUUzQ0UsT0FBT0MsZ0JBQWlCLEdBQUc7Z0JBQzdCLE9BQU87b0JBQ0wsSUFBTUMsY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0osVUFDL0JLLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNMO29CQUVuQ0UsT0FBTyxBQUFDLEdBQWdCRCxPQUFkRyxhQUF1QkMsT0FBVEosUUFBb0IsT0FBWEk7Z0JBQ25DO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV04sT0FBTztnQkFDaEIsSUFBTU8sYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQmIsT0FBT1csYUFDekJHLHlCQUF5QkQsaUJBQ3pCRSxnQ0FBZ0NELHVCQUF1QkUsVUFBVSxJQUNqRU4sYUFBYUssK0JBQStCLEdBQUc7Z0JBRXJELE9BQU9MO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUEsZ0JBQWdCQyxtQ0FBbUI7Z0JBRXpDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZWYsT0FBTztnQkFDcEIsSUFBTU0sYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ04sVUFDN0JlLGlCQUFpQixBQUFDLElBQWMsT0FBWFQsYUFBYyxHQUFHO2dCQUU1QyxPQUFPUztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFVixVQUFVLEVBQUVXLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsZ0NBQWdDLENBekMxR3JCLGtCQXlDNkhzQixVQUFVVixZQUFZVztZQUFVOzs7V0F6QzdKdkI7RUFBeUJ3QixpQkFBWSJ9
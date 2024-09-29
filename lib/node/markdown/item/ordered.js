"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OrderedItemMarkdownNode;
    }
});
var _necessary = require("necessary");
var _item = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown/item"));
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var OrderedItemMarkdownNode = /*#__PURE__*/ function(ItemNode) {
    _inherits(OrderedItemMarkdownNode, ItemNode);
    function OrderedItemMarkdownNode() {
        _class_call_check(this, OrderedItemMarkdownNode);
        return _call_super(this, OrderedItemMarkdownNode, arguments);
    }
    _create_class(OrderedItemMarkdownNode, [
        {
            key: "value",
            value: function value(context) {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), markerTerminalNode = firstChildNode, value = valueFromMarkerTerminalNode(markerTerminalNode);
                return value;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.VALUE_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var value = this.value(context), attributeValue = value; ///
                return attributeValue;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _item.default.fromRuleNameChildNodesAndOpacity(OrderedItemMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return OrderedItemMarkdownNode;
}(_item.default);
function valueFromMarkerTerminalNode(markerTerminalNode) {
    var content = markerTerminalNode.getContent(), matches = content.match(/(\d+)\./), secondMatch = second(matches), value = secondMatch; ///
    return value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2l0ZW0vb3JkZXJlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBJdGVtTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93bi9pdGVtXCI7XG5cbmltcG9ydCB7IFZBTFVFX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyZWRJdGVtTWFya2Rvd25Ob2RlIGV4dGVuZHMgSXRlbU5vZGUge1xuICB2YWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbWFya2VyVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbU1hcmtlclRlcm1pbmFsTm9kZShtYXJrZXJUZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IFZBTFVFX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBJdGVtTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShPcmRlcmVkSXRlbU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG5cbmZ1bmN0aW9uIHZhbHVlRnJvbU1hcmtlclRlcm1pbmFsTm9kZShtYXJrZXJUZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgY29udGVudCA9IG1hcmtlclRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC8oXFxkKylcXC4vKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHZhbHVlID0gc2Vjb25kTWF0Y2g7ICAvLy9cblxuICByZXR1cm4gdmFsdWU7XG59XG4iXSwibmFtZXMiOlsiT3JkZXJlZEl0ZW1NYXJrZG93bk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwidmFsdWUiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsIm1hcmtlclRlcm1pbmFsTm9kZSIsInZhbHVlRnJvbU1hcmtlclRlcm1pbmFsTm9kZSIsImF0dHJpYnV0ZU5hbWUiLCJWQUxVRV9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJJdGVtTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOzJEQUVWOzhCQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFRQyxRQUFrQkMseUJBQWMsQ0FBaENELE9BQU9FLFNBQVdELHlCQUFjLENBQXpCQztBQUVBLElBQUEsQUFBTUgsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNuQkksS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGlCQUFpQlAsTUFBTUssYUFDdkJHLHFCQUFxQkQsZ0JBQ3JCSixRQUFRTSw0QkFBNEJEO2dCQUUxQyxPQUFPTDtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNOLE9BQU87Z0JBQ25CLElBQU1NLGdCQUFnQkMsb0NBQW9CO2dCQUUxQyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVSLE9BQU87Z0JBQ3BCLElBQU1ELFFBQVEsSUFBSSxDQUFDQSxLQUFLLENBQUNDLFVBQ25CUSxpQkFBaUJULE9BQU8sR0FBRztnQkFFakMsT0FBT1M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRVQsVUFBVSxFQUFFVSxPQUFPO2dCQUFJLE9BQU9DLGFBQVEsQ0FBQ0gsZ0NBQWdDLENBdkJ0R2QseUJBdUJnSWUsVUFBVVQsWUFBWVU7WUFBVTs7O1dBdkJoS2hCO0VBQWdDaUIsYUFBUTtBQTBCN0QsU0FBU1AsNEJBQTRCRCxrQkFBa0I7SUFDckQsSUFBTVMsVUFBVVQsbUJBQW1CVSxVQUFVLElBQ3ZDQyxVQUFVRixRQUFRRyxLQUFLLENBQUMsWUFDeEJDLGNBQWNuQixPQUFPaUIsVUFDckJoQixRQUFRa0IsYUFBYyxHQUFHO0lBRS9CLE9BQU9sQjtBQUNUIn0=
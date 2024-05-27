"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OrderedListItemMarkdownNode;
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var OrderedListItemMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(OrderedListItemMarkdownNode, MarkdownNode);
    var _super = _create_super(OrderedListItemMarkdownNode);
    function OrderedListItemMarkdownNode() {
        _class_call_check(this, OrderedListItemMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(OrderedListItemMarkdownNode, [
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
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), markedTextChildNode = secondChildNode, markedTextChildNodeChildNodesHTML = markedTextChildNode.childNodesAsHTML(indent, context), childNodesHTML = markedTextChildNodeChildNodesHTML; ///
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var domElement = this.getDOMElement(), childNodes = this.getChildNodes(), secondChildNode = second(childNodes), markedTextChildNode = secondChildNode; ///
                markedTextChildNode.createChildNodeDOMElements(domElement, context);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(OrderedListItemMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return OrderedListItemMarkdownNode;
}(_markdown.default);
function valueFromMarkerTerminalNode(markerTerminalNode) {
    var content = markerTerminalNode.getContent(), matches = content.match(/(\d+)\./), secondMatch = second(matches), value = secondMatch; ///
    return value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL29yZGVyZWRMaXN0SXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgVkFMVUVfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJlZExpc3RJdGVtTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgdmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIG1hcmtlclRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21NYXJrZXJUZXJtaW5hbE5vZGUobWFya2VyVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBWQUxVRV9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBtYXJrZWRUZXh0Q2hpbGROb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBtYXJrZWRUZXh0Q2hpbGROb2RlQ2hpbGROb2Rlc0hUTUwgPSBtYXJrZWRUZXh0Q2hpbGROb2RlLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IG1hcmtlZFRleHRDaGlsZE5vZGVDaGlsZE5vZGVzSFRNTDsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgbWFya2VkVGV4dENoaWxkTm9kZSA9IHNlY29uZENoaWxkTm9kZTsgLy8vXG5cbiAgICBtYXJrZWRUZXh0Q2hpbGROb2RlLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGRvbUVsZW1lbnQsIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoT3JkZXJlZExpc3RJdGVtTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuZnVuY3Rpb24gdmFsdWVGcm9tTWFya2VyVGVybWluYWxOb2RlKG1hcmtlclRlcm1pbmFsTm9kZSkge1xuICBjb25zdCBjb250ZW50ID0gbWFya2VyVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goLyhcXGQrKVxcLi8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdmFsdWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cbiJdLCJuYW1lcyI6WyJPcmRlcmVkTGlzdEl0ZW1NYXJrZG93bk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwidmFsdWUiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsIm1hcmtlclRlcm1pbmFsTm9kZSIsInZhbHVlRnJvbU1hcmtlclRlcm1pbmFsTm9kZSIsImF0dHJpYnV0ZU5hbWUiLCJWQUxVRV9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsInNlY29uZENoaWxkTm9kZSIsIm1hcmtlZFRleHRDaGlsZE5vZGUiLCJtYXJrZWRUZXh0Q2hpbGROb2RlQ2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzSFRNTCIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7K0RBRU47OEJBRVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILDRDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUNYLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxpQkFBaUJQLE1BQU1LLGFBQ3ZCRyxxQkFBcUJELGdCQUNyQkosUUFBUU0sNEJBQTRCRDtnQkFFMUMsT0FBT0w7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjTixPQUFPO2dCQUNuQixJQUFNTSxnQkFBZ0JDLG9DQUFvQjtnQkFFMUMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlUixPQUFPO2dCQUNwQixJQUFNRCxRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxVQUNuQlEsaUJBQWlCVCxPQUFPLEdBQUc7Z0JBRWpDLE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUVWLE9BQU87Z0JBQzlCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CUyxrQkFBa0JiLE9BQU9HLGFBQ3pCVyxzQkFBc0JELGlCQUN0QkUsb0NBQW9DRCxvQkFBb0JILGdCQUFnQixDQUFDQyxRQUFRVixVQUNqRmMsaUJBQWlCRCxtQ0FBbUMsR0FBRztnQkFFN0QsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJmLE9BQU87Z0JBQ2hDLElBQU1nQixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQmhCLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CUyxrQkFBa0JiLE9BQU9HLGFBQ3pCVyxzQkFBc0JELGlCQUFpQixHQUFHO2dCQUVoREMsb0JBQW9CRywwQkFBMEIsQ0FBQ0MsWUFBWWhCO1lBQzdEOzs7O1lBRU9rQixLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRWxCLFVBQVUsRUFBRW1CLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsZ0NBQWdDLENBMUMxR3ZCLDZCQTBDd0l3QixVQUFVbEIsWUFBWW1CO1lBQVU7OztXQTFDeEt6QjtFQUFvQzBCLGlCQUFZO0FBNkNyRSxTQUFTaEIsNEJBQTRCRCxrQkFBa0I7SUFDckQsSUFBTWtCLFVBQVVsQixtQkFBbUJtQixVQUFVLElBQ3ZDQyxVQUFVRixRQUFRRyxLQUFLLENBQUMsWUFDeEJDLGNBQWM1QixPQUFPMEIsVUFDckJ6QixRQUFRMkIsYUFBYyxHQUFHO0lBRS9CLE9BQU8zQjtBQUNUIn0=
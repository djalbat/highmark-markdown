"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LineMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var first = _necessary.arrayUtilities.first;
var LineMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(LineMarkdownNode, MarkdownNode);
    var _super = _create_super(LineMarkdownNode);
    function LineMarkdownNode() {
        _class_call_check(this, LineMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(LineMarkdownNode, [
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), markedTextChildNode = firstChildNode, markedTextChildNodeChildNodesHTML = markedTextChildNode.childNodesAsHTML(indent, context), childNodesHTML = "".concat(markedTextChildNodeChildNodesHTML, "\n");
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var childNodes = this.getChildNodes(), domElement = this.getDOMElement(), firstChildNode = first(childNodes), markedTextChildNode = firstChildNode; ///
                markedTextChildNode.createChildNodeDOMElements(domElement, context);
                var childNodeDOMElement = document.createTextNode("\n");
                this.insertDOMElement(childNodeDOMElement);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(LineMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return LineMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBtYXJrZWRUZXh0Q2hpbGROb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIG1hcmtlZFRleHRDaGlsZE5vZGVDaGlsZE5vZGVzSFRNTCA9IG1hcmtlZFRleHRDaGlsZE5vZGUuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7bWFya2VkVGV4dENoaWxkTm9kZUNoaWxkTm9kZXNIVE1MfVxcbmA7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIG1hcmtlZFRleHRDaGlsZE5vZGUgPSBmaXJzdENoaWxkTm9kZTsgLy8vXG5cbiAgICBtYXJrZWRUZXh0Q2hpbGROb2RlLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGRvbUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2hpbGROb2RlRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBcbmApO1xuXG4gICAgdGhpcy5pbnNlcnRET01FbGVtZW50KGNoaWxkTm9kZURPTUVsZW1lbnQpXG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShMaW5lTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJMaW5lTWFya2Rvd25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsIm1hcmtlZFRleHRDaGlsZE5vZGUiLCJtYXJrZWRUZXh0Q2hpbGROb2RlQ2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzSFRNTCIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJjaGlsZE5vZGVET01FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydERPTUVsZW1lbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVTsrREFFTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsaUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTSxFQUFFQyxPQUFPO2dCQUM5QixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsaUJBQWlCUCxNQUFNSyxhQUN2Qkcsc0JBQXNCRCxnQkFDdEJFLG9DQUFvQ0Qsb0JBQW9CTixnQkFBZ0IsQ0FBQ0MsUUFBUUMsVUFDakZNLGlCQUFpQixBQUFDLEdBQW9DLE9BQWxDRCxtQ0FBa0M7Z0JBRTVELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCUCxPQUFPO2dCQUNoQyxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQk0sYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JOLGlCQUFpQlAsTUFBTUssYUFDdkJHLHNCQUFzQkQsZ0JBQWdCLEdBQUc7Z0JBRS9DQyxvQkFBb0JHLDBCQUEwQixDQUFDQyxZQUFZUjtnQkFFM0QsSUFBTVUsc0JBQXNCQyxTQUFTQyxjQUFjLENBQUU7Z0JBR3JELElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNIO1lBQ3hCOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFZCxVQUFVLEVBQUVlLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsZ0NBQWdDLENBekIxR25CLGtCQXlCNkhvQixVQUFVZCxZQUFZZTtZQUFVOzs7V0F6QjdKckI7RUFBeUJzQixpQkFBWSJ9
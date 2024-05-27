"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ParagraphMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _index = require("../../utilities/index");
var _constants = require("../../constants");
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
var ParagraphMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ParagraphMarkdownNode, MarkdownNode);
    var _super = _create_super(ParagraphMarkdownNode);
    function ParagraphMarkdownNode() {
        _class_call_check(this, ParagraphMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ParagraphMarkdownNode, [
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML = _constants.EMPTY_STRING;
                var childNodes = this.getChildNodes();
                childNodes.forEach(function(childNode, index) {
                    var indexEven = (0, _index.isIndexEven)(index);
                    if (indexEven) {
                        var markedTextChildNode = childNode, markedTextChildNodeChildNodesHTML = markedTextChildNode.childNodesAsHTML(indent, context);
                        childNodesHTML = "".concat(childNodesHTML).concat(markedTextChildNodeChildNodesHTML);
                    }
                });
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var domElement = this.getDOMElement(), childNodes = this.getChildNodes();
                childNodes.forEach(function(childNode, index) {
                    var indexEven = (0, _index.isIndexEven)(index);
                    if (indexEven) {
                        var markedTextChildNode = childNode; ///
                        markedTextChildNode.createChildNodeDOMElements(domElement, context);
                    }
                });
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(ParagraphMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return ParagraphMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3BhcmFncmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBpc0luZGV4RXZlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvaW5kZXhcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWdyYXBoTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc0hUTUwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4RXZlbiA9IGlzSW5kZXhFdmVuKGluZGV4KTtcblxuICAgICAgaWYgKGluZGV4RXZlbikge1xuICAgICAgICBjb25zdCBtYXJrZWRUZXh0Q2hpbGROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWFya2VkVGV4dENoaWxkTm9kZUNoaWxkTm9kZXNIVE1MID0gbWFya2VkVGV4dENoaWxkTm9kZS5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHtjaGlsZE5vZGVzSFRNTH0ke21hcmtlZFRleHRDaGlsZE5vZGVDaGlsZE5vZGVzSFRNTH1gO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4RXZlbiA9IGlzSW5kZXhFdmVuKGluZGV4KTtcblxuICAgICAgaWYgKGluZGV4RXZlbikge1xuICAgICAgICBjb25zdCBtYXJrZWRUZXh0Q2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICBtYXJrZWRUZXh0Q2hpbGROb2RlLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGRvbUVsZW1lbnQsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoUGFyYWdyYXBoTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJQYXJhZ3JhcGhNYXJrZG93bk5vZGUiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY29udGV4dCIsImNoaWxkTm9kZXNIVE1MIiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiaW5kZXgiLCJpbmRleEV2ZW4iLCJpc0luZGV4RXZlbiIsIm1hcmtlZFRleHRDaGlsZE5vZGUiLCJtYXJrZWRUZXh0Q2hpbGROb2RlQ2hpbGROb2Rlc0hUTUwiLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7K0RBTEk7cUJBRUc7eUJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHNDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU0sRUFBRUMsT0FBTztnQkFDOUIsSUFBSUMsaUJBQWlCQyx1QkFBWTtnQkFFakMsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWE7Z0JBRXJDRCxXQUFXRSxPQUFPLENBQUMsU0FBQ0MsV0FBV0M7b0JBQzdCLElBQU1DLFlBQVlDLElBQUFBLGtCQUFXLEVBQUNGO29CQUU5QixJQUFJQyxXQUFXO3dCQUNiLElBQU1FLHNCQUFzQkosV0FDdEJLLG9DQUFvQ0Qsb0JBQW9CWixnQkFBZ0IsQ0FBQ0MsUUFBUUM7d0JBRXZGQyxpQkFBaUIsQUFBQyxHQUFtQlUsT0FBakJWLGdCQUFtRCxPQUFsQ1U7b0JBQ3ZDO2dCQUNGO2dCQUVBLE9BQU9WO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCWixPQUFPO2dCQUNoQyxJQUFNYSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQlgsYUFBYSxJQUFJLENBQUNDLGFBQWE7Z0JBRXJDRCxXQUFXRSxPQUFPLENBQUMsU0FBQ0MsV0FBV0M7b0JBQzdCLElBQU1DLFlBQVlDLElBQUFBLGtCQUFXLEVBQUNGO29CQUU5QixJQUFJQyxXQUFXO3dCQUNiLElBQU1FLHNCQUFzQkosV0FBVyxHQUFHO3dCQUUxQ0ksb0JBQW9CRSwwQkFBMEIsQ0FBQ0MsWUFBWWI7b0JBQzdEO2dCQUNGO1lBQ0Y7Ozs7WUFFT2UsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUViLFVBQVUsRUFBRWMsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxnQ0FBZ0MsQ0FuQzFHbEIsdUJBbUNrSW1CLFVBQVViLFlBQVljO1lBQVU7OztXQW5DbEtwQjtFQUE4QnFCLGlCQUFZIn0=
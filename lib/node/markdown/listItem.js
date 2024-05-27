"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ListItemMarkdownNode;
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
var ListItemMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ListItemMarkdownNode, MarkdownNode);
    var _super = _create_super(ListItemMarkdownNode);
    function ListItemMarkdownNode() {
        _class_call_check(this, ListItemMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ListItemMarkdownNode, [
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML = _constants.EMPTY_STRING;
                var childNodes = this.getChildNodes();
                childNodes.forEach(function(childNode, index) {
                    var indexOdd = (0, _index.isIndexOdd)(index);
                    if (indexOdd) {
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
                    var indexOdd = (0, _index.isIndexOdd)(index);
                    if (indexOdd) {
                        var markedTextChildNode = childNode; ///
                        markedTextChildNode.createChildNodeDOMElements(domElement, context);
                    }
                });
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity);
            }
        }
    ]);
    return ListItemMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpc3RJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IGlzSW5kZXhPZGQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2luZGV4XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc0hUTUwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4T2RkID0gaXNJbmRleE9kZChpbmRleCk7XG5cbiAgICAgIGlmIChpbmRleE9kZCkge1xuICAgICAgICBjb25zdCBtYXJrZWRUZXh0Q2hpbGROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWFya2VkVGV4dENoaWxkTm9kZUNoaWxkTm9kZXNIVE1MID0gbWFya2VkVGV4dENoaWxkTm9kZS5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHtjaGlsZE5vZGVzSFRNTH0ke21hcmtlZFRleHRDaGlsZE5vZGVDaGlsZE5vZGVzSFRNTH1gO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4T2RkID0gaXNJbmRleE9kZChpbmRleCk7XG5cbiAgICAgIGlmIChpbmRleE9kZCkge1xuICAgICAgICBjb25zdCBtYXJrZWRUZXh0Q2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICBtYXJrZWRUZXh0Q2hpbGROb2RlLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGRvbUVsZW1lbnQsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJMaXN0SXRlbU1hcmtkb3duTm9kZSIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwiY2hpbGROb2Rlc0hUTUwiLCJFTVBUWV9TVFJJTkciLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJpbmRleCIsImluZGV4T2RkIiwiaXNJbmRleE9kZCIsIm1hcmtlZFRleHRDaGlsZE5vZGUiLCJtYXJrZWRUZXh0Q2hpbGROb2RlQ2hpbGROb2Rlc0hUTUwiLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJDbGFzcyIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsrREFMSTtxQkFFRTt5QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEscUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTSxFQUFFQyxPQUFPO2dCQUM5QixJQUFJQyxpQkFBaUJDLHVCQUFZO2dCQUVqQyxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFckNELFdBQVdFLE9BQU8sQ0FBQyxTQUFDQyxXQUFXQztvQkFDN0IsSUFBTUMsV0FBV0MsSUFBQUEsaUJBQVUsRUFBQ0Y7b0JBRTVCLElBQUlDLFVBQVU7d0JBQ1osSUFBTUUsc0JBQXNCSixXQUN0Qkssb0NBQW9DRCxvQkFBb0JaLGdCQUFnQixDQUFDQyxRQUFRQzt3QkFFdkZDLGlCQUFpQixBQUFDLEdBQW1CVSxPQUFqQlYsZ0JBQW1ELE9BQWxDVTtvQkFDdkM7Z0JBQ0Y7Z0JBRUEsT0FBT1Y7WUFDVDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJaLE9BQU87Z0JBQ2hDLElBQU1hLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CWCxhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFckNELFdBQVdFLE9BQU8sQ0FBQyxTQUFDQyxXQUFXQztvQkFDN0IsSUFBTUMsV0FBV0MsSUFBQUEsaUJBQVUsRUFBQ0Y7b0JBRTVCLElBQUlDLFVBQVU7d0JBQ1osSUFBTUUsc0JBQXNCSixXQUFXLEdBQUc7d0JBRTFDSSxvQkFBb0JFLDBCQUEwQixDQUFDQyxZQUFZYjtvQkFDN0Q7Z0JBQ0Y7WUFDRjs7OztZQUVPZSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLEtBQUssRUFBRUMsUUFBUSxFQUFFZCxVQUFVLEVBQUVlLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osZ0NBQWdDLENBQUNDLE9BQU9DLFVBQVVkLFlBQVllO1lBQVU7OztXQW5DekpyQjtFQUE2QnNCLGlCQUFZIn0=
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return UnorderedListItemMarkdownNode;
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
var UnorderedListItemMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(UnorderedListItemMarkdownNode, MarkdownNode);
    var _super = _create_super(UnorderedListItemMarkdownNode);
    function UnorderedListItemMarkdownNode() {
        _class_call_check(this, UnorderedListItemMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(UnorderedListItemMarkdownNode, [
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
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(UnorderedListItemMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return UnorderedListItemMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3Vub3JkZXJlZExpc3RJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IGlzSW5kZXhPZGQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2luZGV4XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVub3JkZXJlZExpc3RJdGVtTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY2hpbGROb2Rlc0hUTUwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4T2RkID0gaXNJbmRleE9kZChpbmRleCk7XG5cbiAgICAgIGlmIChpbmRleE9kZCkge1xuICAgICAgICBjb25zdCBtYXJrZWRUZXh0Q2hpbGROb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWFya2VkVGV4dENoaWxkTm9kZUNoaWxkTm9kZXNIVE1MID0gbWFya2VkVGV4dENoaWxkTm9kZS5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHtjaGlsZE5vZGVzSFRNTH0ke21hcmtlZFRleHRDaGlsZE5vZGVDaGlsZE5vZGVzSFRNTH1gO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4T2RkID0gaXNJbmRleE9kZChpbmRleCk7XG5cbiAgICAgIGlmIChpbmRleE9kZCkge1xuICAgICAgICBjb25zdCBtYXJrZWRUZXh0Q2hpbGROb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICBtYXJrZWRUZXh0Q2hpbGROb2RlLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGRvbUVsZW1lbnQsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoVW5vcmRlcmVkTGlzdEl0ZW1NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIlVub3JkZXJlZExpc3RJdGVtTWFya2Rvd25Ob2RlIiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNvbnRleHQiLCJjaGlsZE5vZGVzSFRNTCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImluZGV4IiwiaW5kZXhPZGQiLCJpc0luZGV4T2RkIiwibWFya2VkVGV4dENoaWxkTm9kZSIsIm1hcmtlZFRleHRDaGlsZE5vZGVDaGlsZE5vZGVzSFRNTCIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsrREFMSTtxQkFFRTt5QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsOENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTSxFQUFFQyxPQUFPO2dCQUM5QixJQUFJQyxpQkFBaUJDLHVCQUFZO2dCQUVqQyxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFckNELFdBQVdFLE9BQU8sQ0FBQyxTQUFDQyxXQUFXQztvQkFDN0IsSUFBTUMsV0FBV0MsSUFBQUEsaUJBQVUsRUFBQ0Y7b0JBRTVCLElBQUlDLFVBQVU7d0JBQ1osSUFBTUUsc0JBQXNCSixXQUN0Qkssb0NBQW9DRCxvQkFBb0JaLGdCQUFnQixDQUFDQyxRQUFRQzt3QkFFdkZDLGlCQUFpQixBQUFDLEdBQW1CVSxPQUFqQlYsZ0JBQW1ELE9BQWxDVTtvQkFDdkM7Z0JBQ0Y7Z0JBRUEsT0FBT1Y7WUFDVDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJaLE9BQU87Z0JBQ2hDLElBQU1hLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CWCxhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFckNELFdBQVdFLE9BQU8sQ0FBQyxTQUFDQyxXQUFXQztvQkFDN0IsSUFBTUMsV0FBV0MsSUFBQUEsaUJBQVUsRUFBQ0Y7b0JBRTVCLElBQUlDLFVBQVU7d0JBQ1osSUFBTUUsc0JBQXNCSixXQUFXLEdBQUc7d0JBRTFDSSxvQkFBb0JFLDBCQUEwQixDQUFDQyxZQUFZYjtvQkFDN0Q7Z0JBQ0Y7WUFDRjs7OztZQUVPZSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRWIsVUFBVSxFQUFFYyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNILGdDQUFnQyxDQW5DMUdsQiwrQkFtQzBJbUIsVUFBVWIsWUFBWWM7WUFBVTs7O1dBbkMxS3BCO0VBQXNDcUIsaUJBQVkifQ==
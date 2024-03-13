"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TableCellMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _text = /*#__PURE__*/ _interop_require_default(require("./text"));
var _constants = require("../../constants");
var _childNodes = require("../../utilities/childNodes");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var TableCellMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(TableCellMarkdownNode, MarkdownNode);
    var _super = _create_super(TableCellMarkdownNode);
    function TableCellMarkdownNode() {
        _class_call_check(this, TableCellMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(TableCellMarkdownNode, [
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(domElement, context) {
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length;
                if (childNodesLength === 2) {
                    var firstChildNode = first(childNodes), firstChildNodeTextMarkdownNode = _instanceof(firstChildNode, _text.default);
                    if (firstChildNodeTextMarkdownNode) {
                        var textMarkdownNode = firstChildNode, content = textMarkdownNode.getContent(context);
                        if (content === _constants.PERIOD) {
                            return;
                        }
                    }
                }
                var domElements = (0, _childNodes.domElementsFromChildNodes)(childNodes, context), parentDOMElement = domElement, siblingDOMElement = null;
                domElements.forEach(function(domElement) {
                    parentDOMElement.insertBefore(domElement, siblingDOMElement);
                });
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(TableCellMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return TableCellMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3RhYmxlQ2VsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBUZXh0TWFya2Rvd25Ob2RlIGZyb20gXCIuL3RleHRcIjtcblxuaW1wb3J0IHsgUEVSSU9EIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY2hpbGROb2Rlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVDZWxsTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoZG9tRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlVGV4dE1hcmtkb3duTm9kZSA9IChmaXJzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFRleHRNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAoZmlyc3RDaGlsZE5vZGVUZXh0TWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHRleHRNYXJrZG93bk5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBjb250ZW50ID0gdGV4dE1hcmtkb3duTm9kZS5nZXRDb250ZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb250ZW50ID09PSBQRVJJT0QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50cyA9IGRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCksXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICBkb21FbGVtZW50cy5mb3JFYWNoKChkb21FbGVtZW50KSA9PiB7XG4gICAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhUYWJsZUNlbGxNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG4iXSwibmFtZXMiOlsiVGFibGVDZWxsTWFya2Rvd25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiZG9tRWxlbWVudCIsImNvbnRleHQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlVGV4dE1hcmtkb3duTm9kZSIsIlRleHRNYXJrZG93bk5vZGUiLCJ0ZXh0TWFya2Rvd25Ob2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJQRVJJT0QiLCJkb21FbGVtZW50cyIsImRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJmb3JFYWNoIiwiaW5zZXJ0QmVmb3JlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyIsInJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozt5QkFWVTsrREFFTjsyREFDSTt5QkFFTjswQkFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCxzQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCQyxVQUFVLEVBQUVDLE9BQU87Z0JBQzVDLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxtQkFBbUJGLFdBQVdHLE1BQU07Z0JBRTFDLElBQUlELHFCQUFxQixHQUFHO29CQUMxQixJQUFNRSxpQkFBaUJULE1BQU1LLGFBQ3ZCSyxpQ0FBa0NELEFBQWMsWUFBZEEsZ0JBQTBCRSxhQUFnQjtvQkFFbEYsSUFBSUQsZ0NBQWdDO3dCQUNsQyxJQUFNRSxtQkFBbUJILGdCQUNuQkksVUFBVUQsaUJBQWlCRSxVQUFVLENBQUNWO3dCQUU1QyxJQUFJUyxZQUFZRSxpQkFBTSxFQUFFOzRCQUN0Qjt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxJQUFNQyxjQUFjQyxJQUFBQSxxQ0FBeUIsRUFBQ1osWUFBWUQsVUFDcERjLG1CQUFtQmYsWUFDbkJnQixvQkFBb0I7Z0JBRTFCSCxZQUFZSSxPQUFPLENBQUMsU0FBQ2pCO29CQUNuQmUsaUJBQWlCRyxZQUFZLENBQUNsQixZQUFZZ0I7Z0JBQzVDO1lBQ0Y7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxRQUFRLEVBQUVsQixVQUFVLEVBQUVtQixTQUFTO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNILGtDQUFrQyxDQTVCaEh2Qix1QkE0QndJd0IsVUFBVWxCLFlBQVltQjtZQUFZOzs7V0E1QjFLekI7RUFBOEIwQixpQkFBWSJ9
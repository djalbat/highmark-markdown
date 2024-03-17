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
            key: "isEmpty",
            value: function isEmpty(context) {
                var empty = false;
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length;
                if (childNodesLength === 2) {
                    var firstChildNode = first(childNodes), firstChildNodeTextMarkdownNode = _instanceof(firstChildNode, _text.default);
                    if (firstChildNodeTextMarkdownNode) {
                        var textMarkdownNode = firstChildNode, content = textMarkdownNode.content(context);
                        if (content === _constants.PERIOD) {
                            empty = true;
                        }
                    }
                }
                return empty;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML = null;
                var empty = this.isEmpty(context);
                if (!empty) {
                    var childNodes = this.getChildNodes(), html = (0, _childNodes.htmlFromChildNodes)(childNodes, context);
                    childNodesHTML = html; ///
                }
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(domElement, context) {
                var empty = this.isEmpty(context);
                if (empty) {
                    return;
                }
                var childNodes = this.getChildNodes(), domElements = (0, _childNodes.domElementsFromChildNodes)(childNodes, context), parentDOMElement = domElement, childDOMElements = domElements, siblingDOMElement = null;
                childDOMElements.forEach(function(childDOMElement) {
                    parentDOMElement.insertBefore(childDOMElement, siblingDOMElement);
                });
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(TableCellMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return TableCellMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3RhYmxlQ2VsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBUZXh0TWFya2Rvd25Ob2RlIGZyb20gXCIuL3RleHRcIjtcblxuaW1wb3J0IHsgUEVSSU9EIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaHRtbEZyb21DaGlsZE5vZGVzLCBkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jaGlsZE5vZGVzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUNlbGxNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBpc0VtcHR5KGNvbnRleHQpIHtcbiAgICBsZXQgZW1wdHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlVGV4dE1hcmtkb3duTm9kZSA9IChmaXJzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFRleHRNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAoZmlyc3RDaGlsZE5vZGVUZXh0TWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHRleHRNYXJrZG93bk5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBjb250ZW50ID0gdGV4dE1hcmtkb3duTm9kZS5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb250ZW50ID09PSBQRVJJT0QpIHtcbiAgICAgICAgICBlbXB0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBjaGlsZE5vZGVzSFRNTCA9IG51bGw7XG5cbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXNFbXB0eShjb250ZXh0KTtcblxuICAgIGlmICghZW1wdHkpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGh0bWwgPSBodG1sRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gaHRtbDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGRvbUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXNFbXB0eShjb250ZXh0KTtcblxuICAgIGlmIChlbXB0eSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBkb21FbGVtZW50cyA9IGRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCksXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBjaGlsZERPTUVsZW1lbnRzID0gZG9tRWxlbWVudHMsICAvLy9cbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICBjaGlsZERPTUVsZW1lbnRzLmZvckVhY2goKGNoaWxkRE9NRWxlbWVudCkgPT4ge1xuICAgICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoY2hpbGRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShUYWJsZUNlbGxNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIlRhYmxlQ2VsbE1hcmtkb3duTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJpc0VtcHR5IiwiY29udGV4dCIsImVtcHR5IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdENoaWxkTm9kZVRleHRNYXJrZG93bk5vZGUiLCJUZXh0TWFya2Rvd25Ob2RlIiwidGV4dE1hcmtkb3duTm9kZSIsImNvbnRlbnQiLCJQRVJJT0QiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJodG1sIiwiaHRtbEZyb21DaGlsZE5vZGVzIiwiY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMiLCJkb21FbGVtZW50IiwiZG9tRWxlbWVudHMiLCJkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzIiwicGFyZW50RE9NRWxlbWVudCIsImNoaWxkRE9NRWxlbWVudHMiLCJzaWJsaW5nRE9NRWxlbWVudCIsImZvckVhY2giLCJjaGlsZERPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7eUJBVlU7K0RBRU47MkRBQ0k7eUJBRU47MEJBQ3VDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsc0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBSUMsUUFBUTtnQkFFWixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsbUJBQW1CRixXQUFXRyxNQUFNO2dCQUUxQyxJQUFJRCxxQkFBcUIsR0FBRztvQkFDMUIsSUFBTUUsaUJBQWlCVCxNQUFNSyxhQUN2QkssaUNBQWtDRCxBQUFjLFlBQWRBLGdCQUEwQkUsYUFBZ0I7b0JBRWxGLElBQUlELGdDQUFnQzt3QkFDbEMsSUFBTUUsbUJBQW1CSCxnQkFDbkJJLFVBQVVELGlCQUFpQkMsT0FBTyxDQUFDVjt3QkFFekMsSUFBSVUsWUFBWUMsaUJBQU0sRUFBRTs0QkFDdEJWLFFBQVE7d0JBQ1Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU0sRUFBRWIsT0FBTztnQkFDOUIsSUFBSWMsaUJBQWlCO2dCQUVyQixJQUFNYixRQUFRLElBQUksQ0FBQ0YsT0FBTyxDQUFDQztnQkFFM0IsSUFBSSxDQUFDQyxPQUFPO29CQUNWLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CWSxPQUFPQyxJQUFBQSw4QkFBa0IsRUFBQ2QsWUFBWUY7b0JBRTVDYyxpQkFBaUJDLE1BQU8sR0FBRztnQkFDN0I7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJDLFVBQVUsRUFBRWxCLE9BQU87Z0JBQzVDLElBQU1DLFFBQVEsSUFBSSxDQUFDRixPQUFPLENBQUNDO2dCQUUzQixJQUFJQyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CZ0IsY0FBY0MsSUFBQUEscUNBQXlCLEVBQUNsQixZQUFZRixVQUNwRHFCLG1CQUFtQkgsWUFDbkJJLG1CQUFtQkgsYUFDbkJJLG9CQUFvQjtnQkFFMUJELGlCQUFpQkUsT0FBTyxDQUFDLFNBQUNDO29CQUN4QkosaUJBQWlCSyxZQUFZLENBQUNELGlCQUFpQkY7Z0JBQ2pEO1lBQ0Y7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUUxQixVQUFVLEVBQUUyQixPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNILGdDQUFnQyxDQXpEMUcvQix1QkF5RGtJZ0MsVUFBVTFCLFlBQVkyQjtZQUFVOzs7V0F6RGxLakM7RUFBOEJrQyxpQkFBWSJ9
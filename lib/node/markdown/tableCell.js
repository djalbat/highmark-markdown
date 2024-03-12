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
                        var textMarkdownNode = firstChildNode, content = textMarkdownNode.getContent();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3RhYmxlQ2VsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBUZXh0TWFya2Rvd25Ob2RlIGZyb20gXCIuL3RleHRcIjtcblxuaW1wb3J0IHsgUEVSSU9EIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY2hpbGROb2Rlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVDZWxsTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoZG9tRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlVGV4dE1hcmtkb3duTm9kZSA9IChmaXJzdENoaWxkTm9kZSBpbnN0YW5jZW9mIFRleHRNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAoZmlyc3RDaGlsZE5vZGVUZXh0TWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IHRleHRNYXJrZG93bk5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBjb250ZW50ID0gdGV4dE1hcmtkb3duTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgPT09IFBFUklPRCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcblxuICAgIGRvbUVsZW1lbnRzLmZvckVhY2goKGRvbUVsZW1lbnQpID0+IHtcbiAgICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKFRhYmxlQ2VsbE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUYWJsZUNlbGxNYXJrZG93bk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMiLCJkb21FbGVtZW50IiwiY29udGV4dCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGVUZXh0TWFya2Rvd25Ob2RlIiwiVGV4dE1hcmtkb3duTm9kZSIsInRleHRNYXJrZG93bk5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIlBFUklPRCIsImRvbUVsZW1lbnRzIiwiZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImZvckVhY2giLCJpbnNlcnRCZWZvcmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwicnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVOytEQUVOOzJEQUNJO3lCQUVOOzBCQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELHNDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJDLFVBQVUsRUFBRUMsT0FBTztnQkFDNUMsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLG1CQUFtQkYsV0FBV0csTUFBTTtnQkFFMUMsSUFBSUQscUJBQXFCLEdBQUc7b0JBQzFCLElBQU1FLGlCQUFpQlQsTUFBTUssYUFDdkJLLGlDQUFrQ0QsQUFBYyxZQUFkQSxnQkFBMEJFLGFBQWdCO29CQUVsRixJQUFJRCxnQ0FBZ0M7d0JBQ2xDLElBQU1FLG1CQUFtQkgsZ0JBQ25CSSxVQUFVRCxpQkFBaUJFLFVBQVU7d0JBRTNDLElBQUlELFlBQVlFLGlCQUFNLEVBQUU7NEJBQ3RCO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLElBQU1DLGNBQWNDLElBQUFBLHFDQUF5QixFQUFDWixZQUFZRCxVQUNwRGMsbUJBQW1CZixZQUNuQmdCLG9CQUFvQjtnQkFFMUJILFlBQVlJLE9BQU8sQ0FBQyxTQUFDakI7b0JBQ25CZSxpQkFBaUJHLFlBQVksQ0FBQ2xCLFlBQVlnQjtnQkFDNUM7WUFDRjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLFFBQVEsRUFBRWxCLFVBQVUsRUFBRW1CLFNBQVM7Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsa0NBQWtDLENBNUJoSHZCLHVCQTRCd0l3QixVQUFVbEIsWUFBWW1CO1lBQVk7OztXQTVCMUt6QjtFQUE4QjBCLGlCQUFZIn0=
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkedTextMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var MarkedTextMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(MarkedTextMarkdownNode, MarkdownNode);
    var _super = _create_super(MarkedTextMarkdownNode);
    function MarkedTextMarkdownNode() {
        _class_call_check(this, MarkedTextMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(MarkedTextMarkdownNode, [
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var leftTrimmed = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                var childNodes = this.getChildNodes(), html = (0, _childNodes.htmlFromChildNodes)(childNodes, context, leftTrimmed);
                return html;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(domElement, context) {
                var leftTrimmed = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                var childNodes = this.getChildNodes(), domElements = (0, _childNodes.domElementsFromChildNodes)(childNodes, context, leftTrimmed), parentDOMElement = domElement, childNodeDOMElements = domElements; ///
                childNodeDOMElements.forEach(function(childNodeDOMElement) {
                    var _$domElement = childNodeDOMElement; ///
                    parentDOMElement.appendChild(_$domElement);
                });
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(MarkedTextMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return MarkedTextMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL21hcmtlZFRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgaHRtbEZyb21DaGlsZE5vZGVzLCBkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jaGlsZE5vZGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlZFRleHRNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCwgbGVmdFRyaW1tZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBodG1sID0gaHRtbEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkKTtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoZG9tRWxlbWVudCwgY29udGV4dCwgbGVmdFRyaW1tZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBkb21FbGVtZW50cyA9IGRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCwgbGVmdFRyaW1tZWQpLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlRE9NRWxlbWVudHMgPSBkb21FbGVtZW50czsgLy8vXG5cbiAgICBjaGlsZE5vZGVET01FbGVtZW50cy5mb3JFYWNoKChjaGlsZE5vZGVET01FbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gY2hpbGROb2RlRE9NRWxlbWVudDsgLy8vXG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShNYXJrZWRUZXh0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZWRUZXh0TWFya2Rvd25Ob2RlIiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNvbnRleHQiLCJsZWZ0VHJpbW1lZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiaHRtbCIsImh0bWxGcm9tQ2hpbGROb2RlcyIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiZG9tRWxlbWVudCIsImRvbUVsZW1lbnRzIiwiZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyIsInBhcmVudERPTUVsZW1lbnQiLCJjaGlsZE5vZGVET01FbGVtZW50cyIsImZvckVhY2giLCJjaGlsZE5vZGVET01FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytEQUpJOzBCQUVxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFBLEFBQU1BLHVDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU0sRUFBRUMsT0FBTztvQkFBRUMsY0FBQUEsaUVBQWM7Z0JBQzlDLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxPQUFPQyxJQUFBQSw4QkFBa0IsRUFBQ0gsWUFBWUYsU0FBU0M7Z0JBRXJELE9BQU9HO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCQyxVQUFVLEVBQUVQLE9BQU87b0JBQUVDLGNBQUFBLGlFQUFjO2dCQUM1RCxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkssY0FBY0MsSUFBQUEscUNBQXlCLEVBQUNQLFlBQVlGLFNBQVNDLGNBQzdEUyxtQkFBbUJILFlBQ25CSSx1QkFBdUJILGFBQWEsR0FBRztnQkFFN0NHLHFCQUFxQkMsT0FBTyxDQUFDLFNBQUNDO29CQUM1QixJQUFNTixlQUFhTSxxQkFBcUIsR0FBRztvQkFFM0NILGlCQUFpQkksV0FBVyxDQUFDUDtnQkFDL0I7WUFDRjs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRWQsVUFBVSxFQUFFZSxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNILGdDQUFnQyxDQXJCMUdsQix3QkFxQm1JbUIsVUFBVWQsWUFBWWU7WUFBVTs7O1dBckJuS3BCO0VBQStCcUIsaUJBQVkifQ==
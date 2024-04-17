"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    removeBackticks: function() {
        return removeBackticks;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _content = /*#__PURE__*/ _interop_require_default(require("../../mixins/content"));
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
var InlineListingMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(InlineListingMarkdownNode, MarkdownNode);
    var _super = _create_super(InlineListingMarkdownNode);
    function InlineListingMarkdownNode() {
        _class_call_check(this, InlineListingMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(InlineListingMarkdownNode, [
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content = this.content(context);
                content = removeBackticks(content); ///
                var childNodesHTML = content; ///
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var content = this.content(context);
                content = removeBackticks(content); ///
                var textNode = document.createTextNode(content), childNodeDOMElement = textNode; ///
                this.insertDOMElement(childNodeDOMElement);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(InlineListingMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return InlineListingMarkdownNode;
}(_markdown.default);
Object.assign(InlineListingMarkdownNode.prototype, _content.default);
var _default = InlineListingMarkdownNode;
function removeBackticks(content) {
    content = content.replace(/^`|`$/g, _constants.EMPTY_STRING); ///
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2lubGluZUxpc3RpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBjb250ZW50TWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29udGVudFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIElubGluZUxpc3RpbmdNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgY29udGVudCA9IHJlbW92ZUJhY2t0aWNrcyhjb250ZW50KTsgLy8vXG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpO1xuXG4gICAgY29udGVudCA9IHJlbW92ZUJhY2t0aWNrcyhjb250ZW50KTsgLy8vXG5cbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAgICAgICAgIGNoaWxkTm9kZURPTUVsZW1lbnQgPSB0ZXh0Tm9kZTsgLy8vXG5cbiAgICB0aGlzLmluc2VydERPTUVsZW1lbnQoY2hpbGROb2RlRE9NRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShJbmxpbmVMaXN0aW5nTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihJbmxpbmVMaXN0aW5nTWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgY29udGVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IElubGluZUxpc3RpbmdNYXJrZG93bk5vZGU7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCYWNrdGlja3MoY29udGVudCkge1xuICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9eYHxgJC9nLCBFTVBUWV9TVFJJTkcpOyAgLy8vXG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iXSwibmFtZXMiOlsicmVtb3ZlQmFja3RpY2tzIiwiSW5saW5lTGlzdGluZ01hcmtkb3duTm9kZSIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwiY29udGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjaGlsZE5vZGVET01FbGVtZW50IiwiaW5zZXJ0RE9NRWxlbWVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRlbnRNaXhpbnMiLCJyZXBsYWNlIiwiRU1QVFlfU1RSSU5HIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFrQ0EsT0FBeUM7ZUFBekM7O0lBRWdCQSxlQUFlO2VBQWZBOzs7K0RBbENTOzhEQUNDO3lCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUMsMENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUVDLE9BQU87Z0JBQzlCLElBQUlDLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNEO2dCQUUzQkMsVUFBVUwsZ0JBQWdCSyxVQUFVLEdBQUc7Z0JBRXZDLElBQU1DLGlCQUFpQkQsU0FBUyxHQUFHO2dCQUVuQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQkgsT0FBTztnQkFDaEMsSUFBSUMsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ0Q7Z0JBRTNCQyxVQUFVTCxnQkFBZ0JLLFVBQVUsR0FBRztnQkFFdkMsSUFBTUcsV0FBV0MsU0FBU0MsY0FBYyxDQUFDTCxVQUNuQ00sc0JBQXNCSCxVQUFVLEdBQUc7Z0JBRXpDLElBQUksQ0FBQ0ksZ0JBQWdCLENBQUNEO1lBQ3hCOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osZ0NBQWdDLENBdEJ6SFosMkJBc0JxSmEsVUFBVUMsWUFBWUM7WUFBVTs7O1dBdEJyTGY7RUFBa0NnQixpQkFBWTtBQXlCcERDLE9BQU9DLE1BQU0sQ0FBQ2xCLDBCQUEwQm1CLFNBQVMsRUFBRUMsZ0JBQWE7SUFFaEUsV0FBZXBCO0FBRVIsU0FBU0QsZ0JBQWdCSyxPQUFPO0lBQ3JDQSxVQUFVQSxRQUFRaUIsT0FBTyxDQUFDLFVBQVVDLHVCQUFZLEdBQUksR0FBRztJQUV2RCxPQUFPbEI7QUFDVCJ9
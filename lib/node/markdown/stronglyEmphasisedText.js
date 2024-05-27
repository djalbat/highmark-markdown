"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _elementMap = /*#__PURE__*/ _interop_require_default(require("../../elementMap"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _content = /*#__PURE__*/ _interop_require_default(require("../../mixins/content"));
var _ruleNames = require("../../ruleNames");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var tagName = _elementMap.default[_ruleNames.STRONG_TEXT_RULE_NAME].tagName;
var StronglyEmphasisedTextMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(StronglyEmphasisedTextMarkdownNode, MarkdownNode);
    var _super = _create_super(StronglyEmphasisedTextMarkdownNode);
    function StronglyEmphasisedTextMarkdownNode() {
        _class_call_check(this, StronglyEmphasisedTextMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(StronglyEmphasisedTextMarkdownNode, [
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var html = _get(_get_prototype_of(StronglyEmphasisedTextMarkdownNode.prototype), "asHTML", this).call(this, indent, context);
                var childNodesHTML = html, startingTag = "<".concat(tagName, ">"), closingTag = "</".concat(tagName, ">");
                html = "".concat(startingTag).concat(childNodesHTML).concat(closingTag);
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement;
                domElement = document.createElement(tagName);
                this.setDOMElement(domElement);
                var parentDOMElement = domElement; ///
                domElement = _get(_get_prototype_of(StronglyEmphasisedTextMarkdownNode.prototype), "createDOMElement", this).call(this, context);
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(StronglyEmphasisedTextMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return StronglyEmphasisedTextMarkdownNode;
}(_markdown.default);
Object.assign(StronglyEmphasisedTextMarkdownNode.prototype, _content.default);
var _default = StronglyEmphasisedTextMarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3N0cm9uZ2x5RW1waGFzaXNlZFRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50TWFwIGZyb20gXCIuLi8uLi9lbGVtZW50TWFwXCI7XG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgY29udGVudE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2NvbnRlbnRcIjtcblxuaW1wb3J0IHsgU1RST05HX1RFWFRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHRhZ05hbWUgfSA9IGVsZW1lbnRNYXBbU1RST05HX1RFWFRfUlVMRV9OQU1FXTtcblxuY2xhc3MgU3Ryb25nbHlFbXBoYXNpc2VkVGV4dE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbCA9IHN1cGVyLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSBodG1sLCAgLy8vXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSBgPCR7dGFnTmFtZX0+YCxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gYDwvJHt0YWdOYW1lfT5gO1xuXG4gICAgaHRtbCA9IGAke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfWA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IHN1cGVyLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoU3Ryb25nbHlFbXBoYXNpc2VkVGV4dE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oU3Ryb25nbHlFbXBoYXNpc2VkVGV4dE1hcmtkb3duTm9kZS5wcm90b3R5cGUsIGNvbnRlbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBTdHJvbmdseUVtcGhhc2lzZWRUZXh0TWFya2Rvd25Ob2RlOyJdLCJuYW1lcyI6WyJ0YWdOYW1lIiwiZWxlbWVudE1hcCIsIlNUUk9OR19URVhUX1JVTEVfTkFNRSIsIlN0cm9uZ2x5RW1waGFzaXNlZFRleHRNYXJrZG93bk5vZGUiLCJhc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwiaHRtbCIsImNoaWxkTm9kZXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiY3JlYXRlRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwicGFyZW50RE9NRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiY29udGVudE1peGlucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4Q0E7OztlQUFBOzs7aUVBNUN1QjsrREFDRTs4REFDQzt5QkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU0sQUFBRUEsVUFBWUMsbUJBQVUsQ0FBQ0MsZ0NBQXFCLENBQUMsQ0FBN0NGO0FBRVIsSUFBQSxBQUFNRyxtREFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVDLE9BQU87Z0JBQ3BCLElBQUlDLE9BQU8sdUJBRlRKLCtDQUVlQyxVQUFOLElBQUssYUFBUUMsUUFBUUM7Z0JBRWhDLElBQU1FLGlCQUFpQkQsTUFDakJFLGNBQWMsQUFBQyxJQUFXLE9BQVJULFNBQVEsTUFDMUJVLGFBQWEsQUFBQyxLQUFZLE9BQVJWLFNBQVE7Z0JBRWhDTyxPQUFPLEFBQUMsR0FBZ0JDLE9BQWRDLGFBQStCQyxPQUFqQkYsZ0JBQTRCLE9BQVhFO2dCQUV6QyxPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkwsT0FBTztnQkFDdEIsSUFBSU07Z0JBRUpBLGFBQWFDLFNBQVNDLGFBQWEsQ0FBQ2Q7Z0JBRXBDLElBQUksQ0FBQ2UsYUFBYSxDQUFDSDtnQkFFbkIsSUFBTUksbUJBQW1CSixZQUFhLEdBQUc7Z0JBRXpDQSxhQUFhLHVCQXRCWFQsK0NBc0JpQlEsb0JBQU4sSUFBSyxhQUFrQkw7Z0JBRXBDVSxpQkFBaUJDLFdBQVcsQ0FBQ0w7Z0JBRTdCQSxhQUFhSSxrQkFBbUIsR0FBRztnQkFFbkMsT0FBT0o7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQS9CekhmLG9DQStCOEpnQixVQUFVQyxZQUFZQztZQUFVOzs7V0EvQjlMbEI7RUFBMkNtQixpQkFBWTtBQWtDN0RDLE9BQU9DLE1BQU0sQ0FBQ3JCLG1DQUFtQ3NCLFNBQVMsRUFBRUMsZ0JBQWE7SUFFekUsV0FBZXZCIn0=
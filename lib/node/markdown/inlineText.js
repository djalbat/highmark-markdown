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
var _content = /*#__PURE__*/ _interop_require_default(require("../../mixins/content"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("../markdown"));
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
var InlineTextMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(InlineTextMarkdownNode, MarkdownNode);
    var _super = _create_super(InlineTextMarkdownNode);
    function InlineTextMarkdownNode() {
        _class_call_check(this, InlineTextMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(InlineTextMarkdownNode, [
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var content = this.getContent(context), domElement = document.createTextNode(content);
                this.setDOMElement(domElement);
                return domElement;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(InlineTextMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return InlineTextMarkdownNode;
}(_markdown.default);
Object.assign(InlineTextMarkdownNode.prototype, _content.default);
var _default = InlineTextMarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2lubGluZVRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjb250ZW50TWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29udGVudFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9tYXJrZG93blwiO1xuXG5jbGFzcyBJbmxpbmVUZXh0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKElubGluZVRleHRNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oSW5saW5lVGV4dE1hcmtkb3duTm9kZS5wcm90b3R5cGUsIGNvbnRlbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBJbmxpbmVUZXh0TWFya2Rvd25Ob2RlOyJdLCJuYW1lcyI6WyJJbmxpbmVUZXh0TWFya2Rvd25Ob2RlIiwiY3JlYXRlRE9NRWxlbWVudCIsImNvbnRleHQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwic2V0RE9NRWxlbWVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJhbWJpZ3VvdXMiLCJNYXJrZG93bk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJjb250ZW50TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxQkE7OztlQUFBOzs7OERBbkIwQjsrREFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLHVDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsT0FBTztnQkFDdEIsSUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0YsVUFDMUJHLGFBQWFDLFNBQVNDLGNBQWMsQ0FBQ0o7Z0JBRTNDLElBQUksQ0FBQ0ssYUFBYSxDQUFDSDtnQkFFbkIsT0FBT0E7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxTQUFTO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGtDQUFrQyxDQVYvSFQsd0JBVXdKVSxVQUFVQyxZQUFZQztZQUFZOzs7V0FWMUxaO0VBQStCYSxpQkFBWTtBQWFqREMsT0FBT0MsTUFBTSxDQUFDZix1QkFBdUJnQixTQUFTLEVBQUVDLGdCQUFhO0lBRTdELFdBQWVqQiJ9
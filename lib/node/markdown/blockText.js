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
var BlockTextMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(BlockTextMarkdownNode, MarkdownNode);
    var _super = _create_super(BlockTextMarkdownNode);
    function BlockTextMarkdownNode() {
        _class_call_check(this, BlockTextMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(BlockTextMarkdownNode, [
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var content = this.getContent(context), html = content; ///
                return html;
            }
        },
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
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(BlockTextMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return BlockTextMarkdownNode;
}(_markdown.default);
Object.assign(BlockTextMarkdownNode.prototype, _content.default);
var _default = BlockTextMarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrVGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNvbnRlbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb250ZW50XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uL21hcmtkb3duXCI7XG5cbmNsYXNzIEJsb2NrVGV4dE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIGh0bWwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKEJsb2NrVGV4dE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihCbG9ja1RleHRNYXJrZG93bk5vZGUucHJvdG90eXBlLCBjb250ZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tUZXh0TWFya2Rvd25Ob2RlO1xuIl0sIm5hbWVzIjpbIkJsb2NrVGV4dE1hcmtkb3duTm9kZSIsImFzSFRNTCIsImluZGVudCIsImNvbnRleHQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImh0bWwiLCJjcmVhdGVET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJzZXRET01FbGVtZW50IiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImFtYmlndW91cyIsIk1hcmtkb3duTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRlbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRCQTs7O2VBQUE7Ozs4REExQjBCOytEQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEsc0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFQyxPQUFPO2dCQUNwQixJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixVQUMxQkcsT0FBT0YsU0FBUyxHQUFHO2dCQUV6QixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkosT0FBTztnQkFDdEIsSUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0YsVUFDMUJLLGFBQWFDLFNBQVNDLGNBQWMsQ0FBQ047Z0JBRTNDLElBQUksQ0FBQ08sYUFBYSxDQUFDSDtnQkFFbkIsT0FBT0E7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxTQUFTO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGtDQUFrQyxDQWpCL0haLHVCQWlCdUphLFVBQVVDLFlBQVlDO1lBQVk7OztXQWpCekxmO0VBQThCZ0IsaUJBQVk7QUFvQmhEQyxPQUFPQyxNQUFNLENBQUNsQixzQkFBc0JtQixTQUFTLEVBQUVDLGdCQUFhO0lBRTVELFdBQWVwQiJ9
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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _content = /*#__PURE__*/ _interop_require_default(require("../../mixins/content"));
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
                var leftTrimmed = false, rightTrimmed = false, content = this.content(context, leftTrimmed, rightTrimmed), html = content; ///
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var leftTrimmed = false, rightTrimmed = false, content = this.content(context, leftTrimmed, rightTrimmed), textNode = document.createTextNode(content), domElement = textNode;
                this.setDOMElement(domElement);
                return domElement;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(BlockTextMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return BlockTextMarkdownNode;
}(_markdown.default);
Object.assign(BlockTextMarkdownNode.prototype, _content.default);
var _default = BlockTextMarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Jsb2NrVGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IGNvbnRlbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb250ZW50XCI7XG5cbmNsYXNzIEJsb2NrVGV4dE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZWZ0VHJpbW1lZCA9IGZhbHNlLFxuICAgICAgICAgIHJpZ2h0VHJpbW1lZCA9IGZhbHNlLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCwgbGVmdFRyaW1tZWQsIHJpZ2h0VHJpbW1lZCksXG4gICAgICAgICAgaHRtbCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBsZWZ0VHJpbW1lZCA9IGZhbHNlLFxuICAgICAgICAgIHJpZ2h0VHJpbW1lZCA9IGZhbHNlLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCwgbGVmdFRyaW1tZWQsIHJpZ2h0VHJpbW1lZCksXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEJsb2NrVGV4dE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oQmxvY2tUZXh0TWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgY29udGVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrVGV4dE1hcmtkb3duTm9kZTtcbiJdLCJuYW1lcyI6WyJCbG9ja1RleHRNYXJrZG93bk5vZGUiLCJhc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwibGVmdFRyaW1tZWQiLCJyaWdodFRyaW1tZWQiLCJjb250ZW50IiwiaHRtbCIsImNyZWF0ZURPTUVsZW1lbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJkb21FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRlbnRNaXhpbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0NBOzs7ZUFBQTs7OytEQTlCeUI7OERBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBQSxBQUFNQSxzQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVDLE9BQU87Z0JBQ3BCLElBQU1DLGNBQWMsT0FDZEMsZUFBZSxPQUNmQyxVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDSCxTQUFTQyxhQUFhQyxlQUM3Q0UsT0FBT0QsU0FBUyxHQUFHO2dCQUV6QixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkwsT0FBTztnQkFDdEIsSUFBTUMsY0FBYyxPQUNkQyxlQUFlLE9BQ2ZDLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNILFNBQVNDLGFBQWFDLGVBQzdDSSxXQUFXQyxTQUFTQyxjQUFjLENBQUNMLFVBQ25DTSxhQUFhSDtnQkFFbkIsSUFBSSxDQUFDSSxhQUFhLENBQUNEO2dCQUVuQixPQUFPQTtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osZ0NBQWdDLENBdEJ6SGQsdUJBc0JpSmUsVUFBVUMsWUFBWUM7WUFBVTs7O1dBdEJqTGpCO0VBQThCa0IsaUJBQVk7QUF5QmhEQyxPQUFPQyxNQUFNLENBQUNwQixzQkFBc0JxQixTQUFTLEVBQUVDLGdCQUFhO0lBRTVELFdBQWV0QiJ9
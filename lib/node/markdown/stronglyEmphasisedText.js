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
var _ruleNameToHTMLMap = /*#__PURE__*/ _interop_require_default(require("../../ruleNameToHTMLMap"));
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
var strongTextHTML = _ruleNameToHTMLMap.default[_ruleNames.STRONG_TEXT_RULE_NAME], strongTextTagName = strongTextHTML.tagName;
var StronglyEmphasisedTextMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(StronglyEmphasisedTextMarkdownNode, MarkdownNode);
    var _super = _create_super(StronglyEmphasisedTextMarkdownNode);
    function StronglyEmphasisedTextMarkdownNode() {
        _class_call_check(this, StronglyEmphasisedTextMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(StronglyEmphasisedTextMarkdownNode, [
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = _get(_get_prototype_of(StronglyEmphasisedTextMarkdownNode.prototype), "createDOMElement", this).call(this, context);
                var childDOMElement = domElement, tagName = strongTextTagName; ///
                domElement = document.createElement(tagName);
                this.setDOMElement(domElement);
                var parentDOMElement = domElement, siblingDOMElement = null;
                domElement = childDOMElement; ///
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
                return domElement;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdown.default.fromRuleNameChildNodesAndAmbiguous(StronglyEmphasisedTextMarkdownNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return StronglyEmphasisedTextMarkdownNode;
}(_markdown.default);
Object.assign(StronglyEmphasisedTextMarkdownNode.prototype, _content.default);
var _default = StronglyEmphasisedTextMarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3N0cm9uZ2x5RW1waGFzaXNlZFRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjb250ZW50TWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29udGVudFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9tYXJrZG93blwiO1xuaW1wb3J0IHJ1bGVOYW1lVG9IVE1MTWFwIGZyb20gXCIuLi8uLi9ydWxlTmFtZVRvSFRNTE1hcFwiO1xuXG5pbXBvcnQgeyBTVFJPTkdfVEVYVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHN0cm9uZ1RleHRIVE1MID0gcnVsZU5hbWVUb0hUTUxNYXBbU1RST05HX1RFWFRfUlVMRV9OQU1FXSxcbiAgICAgIHsgdGFnTmFtZTogc3Ryb25nVGV4dFRhZ05hbWUgfSA9IHN0cm9uZ1RleHRIVE1MO1xuXG5jbGFzcyBTdHJvbmdseUVtcGhhc2lzZWRUZXh0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQgPSBzdXBlci5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgY29uc3QgY2hpbGRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgLy8vXG4gICAgICAgICAgdGFnTmFtZSA9IHN0cm9uZ1RleHRUYWdOYW1lOyAvLy9cblxuICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICBkb21FbGVtZW50ID0gY2hpbGRET01FbGVtZW50OyAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMocnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cykgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMoU3Ryb25nbHlFbXBoYXNpc2VkVGV4dE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihTdHJvbmdseUVtcGhhc2lzZWRUZXh0TWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgY29udGVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0cm9uZ2x5RW1waGFzaXNlZFRleHRNYXJrZG93bk5vZGU7Il0sIm5hbWVzIjpbInN0cm9uZ1RleHRIVE1MIiwicnVsZU5hbWVUb0hUTUxNYXAiLCJTVFJPTkdfVEVYVF9SVUxFX05BTUUiLCJ0YWdOYW1lIiwic3Ryb25nVGV4dFRhZ05hbWUiLCJTdHJvbmdseUVtcGhhc2lzZWRUZXh0TWFya2Rvd25Ob2RlIiwiY3JlYXRlRE9NRWxlbWVudCIsImNvbnRleHQiLCJkb21FbGVtZW50IiwiY2hpbGRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJhbWJpZ3VvdXMiLCJNYXJrZG93bk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJjb250ZW50TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQ0E7OztlQUFBOzs7OERBcEMwQjsrREFFRDt3RUFDSzt5QkFFUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLGlCQUFpQkMsMEJBQWlCLENBQUNDLGdDQUFxQixDQUFDLEVBQ3ZEQyxBQUFTQyxvQkFBc0JKLGVBQS9CRztBQUVSLElBQUEsQUFBTUUsbURBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxPQUFPO2dCQUN0QixJQUFJQyxhQUFhLHVCQUZmSCwrQ0FFcUJDLG9CQUFOLElBQUssYUFBa0JDO2dCQUV4QyxJQUFNRSxrQkFBa0JELFlBQ2xCTCxVQUFVQyxtQkFBbUIsR0FBRztnQkFFdENJLGFBQWFFLFNBQVNDLGFBQWEsQ0FBQ1I7Z0JBRXBDLElBQUksQ0FBQ1MsYUFBYSxDQUFDSjtnQkFFbkIsSUFBTUssbUJBQW1CTCxZQUNuQk0sb0JBQW9CO2dCQUUxQk4sYUFBYUMsaUJBQWlCLEdBQUc7Z0JBRWpDSSxpQkFBaUJFLFlBQVksQ0FBQ1AsWUFBWU07Z0JBRTFDLE9BQU9OO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsU0FBUztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSixrQ0FBa0MsQ0FyQi9IWCxvQ0FxQm9LWSxVQUFVQyxZQUFZQztZQUFZOzs7V0FyQnRNZDtFQUEyQ2UsaUJBQVk7QUF3QjdEQyxPQUFPQyxNQUFNLENBQUNqQixtQ0FBbUNrQixTQUFTLEVBQUVDLGdCQUFhO0lBRXpFLFdBQWVuQiJ9
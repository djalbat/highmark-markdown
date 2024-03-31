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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../markdown"));
var _content = /*#__PURE__*/ _interop_require_default(require("../../mixins/content"));
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
var tagName = _ruleNameToHTMLMap.default[_ruleNames.STRONG_TEXT_RULE_NAME].tagName;
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
                var childNodesHTML = html, startingTag = "<".concat(tagName, ">"), closingTag = "<\\".concat(tagName, ">");
                html = "".concat(startingTag).concat(childNodesHTML).concat(closingTag);
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = _get(_get_prototype_of(StronglyEmphasisedTextMarkdownNode.prototype), "createDOMElement", this).call(this, context);
                var childNodeDOMElement = domElement; ///
                domElement = document.createElement(tagName);
                this.setDOMElement(domElement);
                var parentDOMElement = domElement, siblingDOMElement = null;
                parentDOMElement.insertBefore(childNodeDOMElement, siblingDOMElement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3N0cm9uZ2x5RW1waGFzaXNlZFRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uL21hcmtkb3duXCI7XG5pbXBvcnQgY29udGVudE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2NvbnRlbnRcIjtcbmltcG9ydCBydWxlTmFtZVRvSFRNTE1hcCBmcm9tIFwiLi4vLi4vcnVsZU5hbWVUb0hUTUxNYXBcIjtcblxuaW1wb3J0IHsgU1RST05HX1RFWFRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHRhZ05hbWUgfSA9IHJ1bGVOYW1lVG9IVE1MTWFwW1NUUk9OR19URVhUX1JVTEVfTkFNRV07XG5cbmNsYXNzIFN0cm9uZ2x5RW1waGFzaXNlZFRleHRNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGh0bWwgPSBzdXBlci5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gaHRtbCwgIC8vL1xuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gYDwke3RhZ05hbWV9PmAsXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IGA8XFxcXCR7dGFnTmFtZX0+YDtcblxuICAgIGh0bWwgPSBgJHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudCA9IHN1cGVyLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBudWxsO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoY2hpbGROb2RlRE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShTdHJvbmdseUVtcGhhc2lzZWRUZXh0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihTdHJvbmdseUVtcGhhc2lzZWRUZXh0TWFya2Rvd25Ob2RlLnByb3RvdHlwZSwgY29udGVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0cm9uZ2x5RW1waGFzaXNlZFRleHRNYXJrZG93bk5vZGU7Il0sIm5hbWVzIjpbInRhZ05hbWUiLCJydWxlTmFtZVRvSFRNTE1hcCIsIlNUUk9OR19URVhUX1JVTEVfTkFNRSIsIlN0cm9uZ2x5RW1waGFzaXNlZFRleHRNYXJrZG93bk5vZGUiLCJhc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwiaHRtbCIsImNoaWxkTm9kZXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiY3JlYXRlRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJjaGlsZE5vZGVET01FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRlbnRNaXhpbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2Q0E7OztlQUFBOzs7K0RBM0N5Qjs4REFDQzt3RUFDSTt5QkFFUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU0sQUFBRUEsVUFBWUMsMEJBQWlCLENBQUNDLGdDQUFxQixDQUFDLENBQXBERjtBQUVSLElBQUEsQUFBTUcsbURBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFQyxPQUFPO2dCQUNwQixJQUFJQyxPQUFPLHVCQUZUSiwrQ0FFZUMsVUFBTixJQUFLLGFBQVFDLFFBQVFDO2dCQUVoQyxJQUFNRSxpQkFBaUJELE1BQ2pCRSxjQUFjLEFBQUMsSUFBVyxPQUFSVCxTQUFRLE1BQzFCVSxhQUFhLEFBQUMsTUFBYSxPQUFSVixTQUFRO2dCQUVqQ08sT0FBTyxBQUFDLEdBQWdCQyxPQUFkQyxhQUErQkMsT0FBakJGLGdCQUE0QixPQUFYRTtnQkFFekMsT0FBT0g7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJMLE9BQU87Z0JBQ3RCLElBQUlNLGFBQWEsdUJBZGZULCtDQWNxQlEsb0JBQU4sSUFBSyxhQUFrQkw7Z0JBRXhDLElBQU1PLHNCQUFzQkQsWUFBWSxHQUFHO2dCQUUzQ0EsYUFBYUUsU0FBU0MsYUFBYSxDQUFDZjtnQkFFcEMsSUFBSSxDQUFDZ0IsYUFBYSxDQUFDSjtnQkFFbkIsSUFBTUssbUJBQW1CTCxZQUNuQk0sb0JBQW9CO2dCQUUxQkQsaUJBQWlCRSxZQUFZLENBQUNOLHFCQUFxQks7Z0JBRW5ELE9BQU9OO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSixnQ0FBZ0MsQ0E5QnpIakIsb0NBOEI4SmtCLFVBQVVDLFlBQVlDO1lBQVU7OztXQTlCOUxwQjtFQUEyQ3FCLGlCQUFZO0FBaUM3REMsT0FBT0MsTUFBTSxDQUFDdkIsbUNBQW1Dd0IsU0FBUyxFQUFFQyxnQkFBYTtJQUV6RSxXQUFlekIifQ==
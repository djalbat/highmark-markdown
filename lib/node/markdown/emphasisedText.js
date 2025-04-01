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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var EmphasisedTextMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(EmphasisedTextMarkdownNode, MarkdownNode);
    function EmphasisedTextMarkdownNode() {
        _class_call_check(this, EmphasisedTextMarkdownNode);
        return _call_super(this, EmphasisedTextMarkdownNode, arguments);
    }
    _create_class(EmphasisedTextMarkdownNode, [
        {
            key: "inlineText",
            value: function inlineText(context) {
                var inlineText = this.fromSecondChildNode(function(secondChildNode) {
                    var indent = null, inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context), inlineText = inlineTextMarkdownNodeHTML; ///
                    return inlineText;
                });
                return inlineText;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var inlineText = this.inlineText(context), content = inlineText; ///
                var domElement;
                var textNode = document.createTextNode(content);
                domElement = _get(_get_prototype_of(EmphasisedTextMarkdownNode.prototype), "createDOMElement", this).call(this, context);
                var parentDOMElement = domElement; ///
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(EmphasisedTextMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return EmphasisedTextMarkdownNode;
}(_markdown.default);
Object.assign(EmphasisedTextMarkdownNode.prototype, _content.default);
var _default = EmphasisedTextMarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2VtcGhhc2lzZWRUZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgY29udGVudE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2NvbnRlbnRcIjtcblxuY2xhc3MgRW1waGFzaXNlZFRleHRNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBpbmxpbmVUZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBpbmxpbmVUZXh0ID0gdGhpcy5mcm9tU2Vjb25kQ2hpbGROb2RlKChzZWNvbmRDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGVudCA9IG51bGwsXG4gICAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlID0gc2Vjb25kQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MID0gaW5saW5lVGV4dE1hcmtkb3duTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KSxcbiAgICAgICAgICAgIGlubGluZVRleHQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTDsgIC8vL1xuXG4gICAgICByZXR1cm4gaW5saW5lVGV4dDtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbmxpbmVUZXh0O1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgaW5saW5lVGV4dCA9IHRoaXMuaW5saW5lVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjb250ZW50ID0gaW5saW5lVGV4dDsgLy8vXG5cbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gc3VwZXIuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEVtcGhhc2lzZWRUZXh0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbXBoYXNpc2VkVGV4dE1hcmtkb3duTm9kZS5wcm90b3R5cGUsIGNvbnRlbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbXBoYXNpc2VkVGV4dE1hcmtkb3duTm9kZTtcbiJdLCJuYW1lcyI6WyJFbXBoYXNpc2VkVGV4dE1hcmtkb3duTm9kZSIsImlubGluZVRleHQiLCJjb250ZXh0IiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZSIsImluZGVudCIsImlubGluZVRleHRNYXJrZG93bk5vZGUiLCJpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTCIsImFzSFRNTCIsImNyZWF0ZURPTUVsZW1lbnQiLCJjb250ZW50IiwiZG9tRWxlbWVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsInBhcmVudERPTUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRlbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZDQTs7O2VBQUE7OzsrREEzQ3lCOzhEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBQSxBQUFNQSwyQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLE9BQU87Z0JBQ2hCLElBQU1ELGFBQWEsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQyxTQUFDQztvQkFDM0MsSUFBTUMsU0FBUyxNQUNUQyx5QkFBeUJGLGlCQUN6QkcsNkJBQTZCRCx1QkFBdUJFLE1BQU0sQ0FBQ0gsUUFBUUgsVUFDbkVELGFBQWFNLDRCQUE2QixHQUFHO29CQUVuRCxPQUFPTjtnQkFDVDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlAsT0FBTztnQkFDdEIsSUFBTUQsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ0MsVUFDN0JRLFVBQVVULFlBQVksR0FBRztnQkFFL0IsSUFBSVU7Z0JBRUosSUFBTUMsV0FBV0MsU0FBU0MsY0FBYyxDQUFDSjtnQkFFekNDLGFBQWEsdUJBdEJYWCx1Q0FzQmlCUyxvQkFBTixJQUFLLGFBQWtCUDtnQkFFcEMsSUFBTWEsbUJBQW1CSixZQUFhLEdBQUc7Z0JBRXpDQSxhQUFhQyxVQUFVLEdBQUc7Z0JBRTFCRyxpQkFBaUJDLFdBQVcsQ0FBQ0w7Z0JBRTdCQSxhQUFhSSxrQkFBbUIsR0FBRztnQkFFbkMsT0FBT0o7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQW5DekhqQiw0QkFtQ3NKa0IsVUFBVUMsWUFBWUM7WUFBVTs7O1dBbkN0THBCO0VBQW1DcUIsaUJBQVk7QUFzQ3JEQyxPQUFPQyxNQUFNLENBQUN2QiwyQkFBMkJ3QixTQUFTLEVBQUVDLGdCQUFhO0lBRWpFLFdBQWV6QiJ9
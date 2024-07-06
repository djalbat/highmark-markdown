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
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _content = /*#__PURE__*/ _interop_require_default(require("../../mixins/content"));
var _attributeNames = require("../../attributeNames");
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, secondLast = _necessary.arrayUtilities.secondLast;
var HyperlinkLinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(HyperlinkLinkMarkdownNode, MarkdownNode);
    var _super = _create_super(HyperlinkLinkMarkdownNode);
    function HyperlinkLinkMarkdownNode() {
        _class_call_check(this, HyperlinkLinkMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(HyperlinkLinkMarkdownNode, [
        {
            key: "url",
            value: function url(context) {
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length;
                var urlTerminalNode;
                if (childNodesLength === 1) {
                    var firstChildNode = first(childNodes);
                    urlTerminalNode = firstChildNode; ///
                } else {
                    var secondLastChildNode = secondLast(childNodes);
                    urlTerminalNode = secondLastChildNode; ///
                }
                var urlTerminalNodeContent = urlTerminalNode.getContent(), url = urlTerminalNodeContent; ///
                return url;
            }
        },
        {
            key: "inlineText",
            value: function inlineText(context) {
                var inlineText = null;
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length;
                if (childNodesLength !== 1) {
                    var indent = null, secondChildNode = second(childNodes), inlineTextMarkdownNode = secondChildNode, inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context);
                    inlineText = inlineTextMarkdownNodeHTML; ///
                }
                return inlineText;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var url = this.url(context), attributeValue = url; ///
                return attributeValue;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                this.domElement = this.createDOMElement(context);
                parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var content;
                var inlineText = this.inlineText(context);
                if (inlineText !== null) {
                    content = inlineText; ///
                } else {
                    content = this.content(context);
                }
                var domElement;
                var textNode = document.createTextNode(content);
                domElement = _get(_get_prototype_of(HyperlinkLinkMarkdownNode.prototype), "createDOMElement", this).call(this, context);
                var parentDOMElement = domElement; ///
                domElement = textNode; ///
                parentDOMElement.appendChild(domElement);
                domElement = parentDOMElement; ///
                return domElement;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content;
                var inlineText = this.inlineText(context);
                if (inlineText !== null) {
                    content = inlineText; ///
                } else {
                    content = this.content(context);
                }
                var childNodesHTML = content; ///
                return childNodesHTML;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(HyperlinkLinkMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return HyperlinkLinkMarkdownNode;
}(_markdown.default);
Object.assign(HyperlinkLinkMarkdownNode.prototype, _content.default);
var _default = HyperlinkLinkMarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2h5cGVybGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBjb250ZW50TWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvY29udGVudFwiO1xuXG5pbXBvcnQgeyBIUkVGX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgc2Vjb25kTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEh5cGVybGlua0xpbmtNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICB1cmwoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBsZXQgdXJsVGVybWluYWxOb2RlO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2Rlcyk7XG5cbiAgICAgIHVybFRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlY29uZExhc3RDaGlsZE5vZGUgPSBzZWNvbmRMYXN0KGNoaWxkTm9kZXMpO1xuXG4gICAgICB1cmxUZXJtaW5hbE5vZGUgPSBzZWNvbmRMYXN0Q2hpbGROb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgdXJsVGVybWluYWxOb2RlQ29udGVudCA9IHVybFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgdXJsID0gdXJsVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgaW5saW5lVGV4dChjb250ZXh0KSB7XG4gICAgbGV0IGlubGluZVRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoICE9PSAxKSB7XG4gICAgICBjb25zdCBpbmRlbnQgPSBudWxsLFxuICAgICAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgaW5saW5lVGV4dE1hcmtkb3duTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTCA9IGlubGluZVRleHRNYXJrZG93bk5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGlubGluZVRleHQgPSBpbmxpbmVUZXh0TWFya2Rvd25Ob2RlSFRNTDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBpbmxpbmVUZXh0O1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnVybChjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHVybDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICBjb25zdCBpbmxpbmVUZXh0ID0gdGhpcy5pbmxpbmVUZXh0KGNvbnRleHQpO1xuXG4gICAgaWYgKGlubGluZVRleHQgIT09IG51bGwpIHtcbiAgICAgIGNvbnRlbnQgPSBpbmxpbmVUZXh0OyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KTtcbiAgICB9XG5cbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gc3VwZXIuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnQ7XG5cbiAgICBjb25zdCBpbmxpbmVUZXh0ID0gdGhpcy5pbmxpbmVUZXh0KGNvbnRleHQpO1xuXG4gICAgaWYgKGlubGluZVRleHQgIT09IG51bGwpIHtcbiAgICAgIGNvbnRlbnQgPSBpbmxpbmVUZXh0OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEh5cGVybGlua0xpbmtNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEh5cGVybGlua0xpbmtNYXJrZG93bk5vZGUucHJvdG90eXBlLCBjb250ZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgSHlwZXJsaW5rTGlua01hcmtkb3duTm9kZTtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwic2Vjb25kTGFzdCIsIkh5cGVybGlua0xpbmtNYXJrZG93bk5vZGUiLCJ1cmwiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwidXJsVGVybWluYWxOb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJzZWNvbmRMYXN0Q2hpbGROb2RlIiwidXJsVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJpbmxpbmVUZXh0IiwiaW5kZW50Iiwic2Vjb25kQ2hpbGROb2RlIiwiaW5saW5lVGV4dE1hcmtkb3duTm9kZSIsImlubGluZVRleHRNYXJrZG93bk5vZGVIVE1MIiwiYXNIVE1MIiwiYXR0cmlidXRlTmFtZSIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJjb250ZW50IiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiY2hpbGROb2Rlc0hUTUwiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRlbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdIQTs7O2VBQUE7Ozt5QkF0SCtCOytEQUVOOzhEQUNDOzhCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBUUEsUUFBOEJDLHlCQUFjLENBQTVDRCxPQUFPRSxTQUF1QkQseUJBQWMsQ0FBckNDLFFBQVFDLGFBQWVGLHlCQUFjLENBQTdCRTtBQUV2QixJQUFBLEFBQU1DLDBDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLElBQUlDLE9BQU87Z0JBQ1QsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLG1CQUFtQkYsV0FBV0csTUFBTTtnQkFFMUMsSUFBSUM7Z0JBRUosSUFBSUYscUJBQXFCLEdBQUc7b0JBQzFCLElBQU1HLGlCQUFpQlosTUFBTU87b0JBRTdCSSxrQkFBa0JDLGdCQUFpQixHQUFHO2dCQUN4QyxPQUFPO29CQUNMLElBQU1DLHNCQUFzQlYsV0FBV0k7b0JBRXZDSSxrQkFBa0JFLHFCQUFzQixHQUFHO2dCQUM3QztnQkFFQSxJQUFNQyx5QkFBeUJILGdCQUFnQkksVUFBVSxJQUNuRFYsTUFBTVMsd0JBQXdCLEdBQUc7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
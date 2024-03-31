"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LinkMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _string = require("../../utilities/string");
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
var second = _necessary.arrayUtilities.second;
var LinkMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(LinkMarkdownNode, MarkdownNode);
    var _super = _create_super(LinkMarkdownNode);
    function LinkMarkdownNode() {
        _class_call_check(this, LinkMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(LinkMarkdownNode, [
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var number = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var html;
                indent = this.adjustIndent(indent);
                var childNodesHTML = this.childNodesAsHTML(indent, context, number);
                if (childNodesHTML !== null) {
                    var startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                    html = indent === null ? "".concat(startingTag).concat((0, _string.trim)(childNodesHTML)).concat(closingTag) : "".concat(indent).concat(startingTag, "\n").concat((0, _string.trim)(childNodesHTML), "\n").concat(indent).concat(closingTag, "\n");
                } else {
                    var selfClosingTag = this.selfClosingTag(context);
                    html = indent === null ? selfClosingTag : "".concat(indent).concat(selfClosingTag, "\n");
                }
                return html;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var number = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var domElement;
                var tagName = this.tagName(context);
                domElement = document.createElement(tagName);
                this.setDOMElement(domElement);
                var className = this.className(context), attributeName = this.attributeName(context);
                Object.assign(domElement, {
                    className: className
                });
                var attributeValue = this.attributeValue(context);
                domElement.setAttribute(attributeName, attributeValue);
                this.createChildNodeDOMElements(context, number);
                return domElement;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context, number) {
                var childNodesHTML = number === null ? null : "".concat(number);
                return childNodesHTML;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context, number) {
                if (number !== null) {
                    var content = "".concat(number), childNodeDOMElement = document.createTextNode(content);
                    this.insertDOMElement(childNodeDOMElement);
                }
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var childNodes = this.getChildNodes(), secondChildNode = second(childNodes), identifierTerminalNode = secondChildNode, identifierTerminalNodeContent = identifierTerminalNode.getContent(), identifier = identifierTerminalNodeContent; ///
                return identifier;
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
                var identifier = this.identifier(context), attributeValue = "#".concat(identifier); ///
                return attributeValue;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(LinkMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return LinkMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IHRyaW0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmtNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0LCBudW1iZXIgPSBudWxsKSB7XG4gICAgbGV0IGh0bWw7XG5cbiAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0LCBudW1iZXIpO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNIVE1MICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICBgJHtzdGFydGluZ1RhZ30ke3RyaW0oY2hpbGROb2Rlc0hUTUwpfSR7Y2xvc2luZ1RhZ31gIDpcbiAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7dHJpbShjaGlsZE5vZGVzSFRNTCl9XG4ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZWxmQ2xvc2luZ1RhZyA9IHRoaXMuc2VsZkNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA6ICAvLy9cbmAke2luZGVudH0ke3NlbGZDbG9zaW5nVGFnfVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCwgbnVtYmVyID0gbnVsbCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZShjb250ZXh0KTtcblxuICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYXR0cmlidXRlVmFsdWUoY29udGV4dCk7XG5cbiAgICBkb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG5cbiAgICB0aGlzLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQsIG51bWJlcik7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0LCBudW1iZXIpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IChudW1iZXIgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtudW1iZXJ9YDtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQsIG51bWJlcikge1xuICAgIGlmIChudW1iZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBgJHtudW1iZXJ9YCxcbiAgICAgICAgICAgIGNoaWxkTm9kZURPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgICAgdGhpcy5pbnNlcnRET01FbGVtZW50KGNoaWxkTm9kZURPTUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlkZW50aWZpZXIoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgICAgaWRlbnRpZmllclRlcm1pbmFsTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIGlkZW50aWZpZXJUZXJtaW5hbE5vZGVDb250ZW50ID0gaWRlbnRpZmllclRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYCMke2lkZW50aWZpZXJ9YDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShMaW5rTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJMaW5rTWFya2Rvd25Ob2RlIiwic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJhc0hUTUwiLCJpbmRlbnQiLCJjb250ZXh0IiwibnVtYmVyIiwiaHRtbCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsInRyaW0iLCJzZWxmQ2xvc2luZ1RhZyIsImNyZWF0ZURPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwidGFnTmFtZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwiYXR0cmlidXRlVmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsImNvbnRlbnQiLCJjaGlsZE5vZGVET01FbGVtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRET01FbGVtZW50IiwiaWRlbnRpZmllciIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic2Vjb25kQ2hpbGROb2RlIiwiaWRlbnRpZmllclRlcm1pbmFsTm9kZSIsImlkZW50aWZpZXJUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVFU7K0RBRU47c0JBRUo7OEJBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxJQUFBLEFBQU1ELGlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVDLE9BQU87b0JBQUVDLFNBQUFBLGlFQUFTO2dCQUMvQixJQUFJQztnQkFFSkgsU0FBUyxJQUFJLENBQUNJLFlBQVksQ0FBQ0o7Z0JBRTNCLElBQU1LLGlCQUFpQixJQUFJLENBQUNDLGdCQUFnQixDQUFDTixRQUFRQyxTQUFTQztnQkFFOUQsSUFBSUcsbUJBQW1CLE1BQU07b0JBQzNCLElBQU1FLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNOLFVBQy9CTyxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDUDtvQkFFbkNFLE9BQU8sQUFBQ0gsV0FBVyxPQUNYLEFBQUMsR0FBZ0JTLE9BQWRGLGFBQXFDQyxPQUF2QkMsSUFBQUEsWUFB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
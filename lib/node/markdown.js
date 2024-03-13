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
var _occamparsers = require("occam-parsers");
var _node = /*#__PURE__*/ _interop_require_default(require("../mixins/node"));
var _element = /*#__PURE__*/ _interop_require_default(require("../mixins/element"));
var _ruleNameToHTMLMap = /*#__PURE__*/ _interop_require_default(require("../ruleNameToHTMLMap"));
var _constants = require("../constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var MarkdownNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(MarkdownNode, NonTerminalNode);
    var _super = _create_super(MarkdownNode);
    function MarkdownNode(ruleName, childNodes, precedence, ambiguous, domElement) {
        _class_call_check(this, MarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, precedence, ambiguous);
        _this.domElement = domElement;
        return _this;
    }
    _create_class(MarkdownNode, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "setDOMElement",
            value: function setDOMElement(domElement) {
                this.domElement = domElement;
            }
        },
        {
            key: "getTagName",
            value: function getTagName() {
                var html = _ruleNameToHTMLMap.default[this.ruleName], tagName = html.tagName;
                return tagName;
            }
        },
        {
            key: "getClassName",
            value: function getClassName() {
                var html = _ruleNameToHTMLMap.default[this.ruleName], className = html.className;
                return className;
            }
        },
        {
            key: "setInnerHTML",
            value: function setInnerHTML(innerHTML) {
                this.domElement.innerHTML = innerHTML;
            }
        },
        {
            key: "setAttribute",
            value: function setAttribute(name, value) {
                this.domElement.setAttribute(name, value);
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                if (context === undefined) {
                    context = indent; ///
                    indent = _constants.EMPTY_STRING;
                }
                var html = null;
                var tagName = this.getTagName(), className = this.getClassName();
                if (tagName !== null) {
                    indent = this.adjustIndent(indent);
                    var childNodesHTML = this.childNodesAsHTML(indent, context);
                    if (childNodesHTML === null) {
                        var selfClosingTag = className !== null ? "<".concat(tagName, ' class="').concat(className, '"/>') : "<".concat(tagName, "/>");
                        html = "".concat(indent).concat(selfClosingTag, "\n");
                    } else {
                        var startTag = className !== null ? "<".concat(tagName, ' class="').concat(className, '">') : "<".concat(tagName, ">"), endTag = "<\\".concat(tagName, ">");
                        html = "".concat(indent).concat(startTag, "\n").concat(childNodesHTML).concat(indent).concat(endTag, "\n");
                    }
                }
                return html;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodes = this.getChildNodes(), childNodesHTML = childNodes.reduce(function(childNodesHTML, childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var childNodeHTML = childNode.asHTML(indent, context);
                        if (childNodeHTML !== null) {
                            childNodesHTML = childNodesHTML === null ? childNodeHTML : "".concat(childNodesHTML).concat(childNodeHTML);
                        }
                    }
                    return childNodesHTML;
                }, null);
                return childNodesHTML;
            }
        },
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                indent = "  ".concat(indent);
                return indent;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = null;
                var tagName = this.getTagName();
                if (tagName !== null) {
                    domElement = document.createElement(tagName);
                    var className = this.getClassName();
                    if (className !== null) {
                        Object.assign(domElement, {
                            className: className
                        });
                    }
                    this.setDOMElement(domElement);
                    this.createChildNodeDOMElements(context);
                }
                return domElement;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var _this = this;
                var childNodes = this.getChildNodes();
                childNodes.forEach(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var domElement = childNode.createDOMElement(context);
                        if (domElement !== null) {
                            _this.insertDOMElement(domElement);
                        }
                    }
                });
            }
        },
        {
            key: "insertDOMElement",
            value: function insertDOMElement(domElement) {
                var parentDOMElement = this.domElement, siblingDOMElement = null;
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(Class, ruleName, childNodes, ambiguous) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                var _NonTerminalNode;
                var domElement = null, markdownNode = (_NonTerminalNode = _occamparsers.NonTerminalNode).fromRuleNameChildNodesAndAmbiguous.apply(_NonTerminalNode, [
                    Class,
                    ruleName,
                    childNodes,
                    ambiguous,
                    domElement
                ].concat(_to_consumable_array(remainingArguments)));
                return markdownNode;
            }
        }
    ]);
    return MarkdownNode;
}(_occamparsers.NonTerminalNode);
Object.assign(MarkdownNode.prototype, _node.default);
Object.assign(MarkdownNode.prototype, _element.default);
var _default = MarkdownNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZWxlbWVudFwiO1xuaW1wb3J0IHJ1bGVOYW1lVG9IVE1MTWFwIGZyb20gXCIuLi9ydWxlTmFtZVRvSFRNTE1hcFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE1hcmtkb3duTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBhbWJpZ3VvdXMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgYW1iaWd1b3VzKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBzZXRET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0VGFnTmFtZSgpIHtcbiAgICBjb25zdCBodG1sID0gcnVsZU5hbWVUb0hUTUxNYXBbdGhpcy5ydWxlTmFtZV0sXG4gICAgICAgICAgeyB0YWdOYW1lIH0gPSBodG1sO1xuXG4gICAgcmV0dXJuIHRhZ05hbWU7XG4gIH1cblxuICBnZXRDbGFzc05hbWUoKSB7XG4gICAgY29uc3QgaHRtbCA9IHJ1bGVOYW1lVG9IVE1MTWFwW3RoaXMucnVsZU5hbWVdLFxuICAgICAgICAgIHsgY2xhc3NOYW1lIH0gPSBodG1sO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldElubmVySFRNTChpbm5lckhUTUwpIHsgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gaW5kZW50OyAvLy9cblxuICAgICAgaW5kZW50ID0gRU1QVFlfU1RSSU5HO1xuICAgIH1cblxuICAgIGxldCBodG1sID0gbnVsbDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmdldFRhZ05hbWUoKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmdldENsYXNzTmFtZSgpO1xuXG4gICAgaWYgKHRhZ05hbWUgIT09IG51bGwpIHtcbiAgICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVzSFRNTCA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzZWxmQ2xvc2luZ1RhZyA9IChjbGFzc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDwke3RhZ05hbWV9IGNsYXNzPVwiJHtjbGFzc05hbWV9XCIvPmAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8JHt0YWdOYW1lfS8+YDtcblxuICAgICAgICBodG1sID0gYCR7aW5kZW50fSR7c2VsZkNsb3NpbmdUYWd9XG5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhcnRUYWcgPSAoY2xhc3NOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGA8JHt0YWdOYW1lfSBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPmAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8JHt0YWdOYW1lfT5gLFxuICAgICAgICAgICAgICBlbmRUYWcgPSBgPFxcXFwke3RhZ05hbWV9PmA7XG5cbiAgICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0VGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2VuZFRhZ31cbmA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVzSFRNTCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVIVE1MID0gY2hpbGROb2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVIVE1MICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSAoY2hpbGROb2Rlc0hUTUwgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlSFRNTCA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NoaWxkTm9kZXNIVE1MfSR7Y2hpbGROb2RlSFRNTH1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgICAgICAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICBpbmRlbnQgPSBgICAke2luZGVudH1gO1xuXG4gICAgcmV0dXJuIGluZGVudDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLmdldFRhZ05hbWUoKTtcblxuICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5nZXRDbGFzc05hbWUoKTtcblxuICAgICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcbiAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgICAgdGhpcy5jcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGNoaWxkTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5pbnNlcnRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbnNlcnRET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBudWxsO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIG1hcmtkb3duTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE1hcmtkb3duTm9kZS5wcm90b3R5cGUsIG5vZGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihNYXJrZG93bk5vZGUucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25Ob2RlO1xuIl0sIm5hbWVzIjpbIk1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJhbWJpZ3VvdXMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJnZXRUYWdOYW1lIiwiaHRtbCIsInJ1bGVOYW1lVG9IVE1MTWFwIiwidGFnTmFtZSIsImdldENsYXNzTmFtZSIsImNsYXNzTmFtZSIsInNldElubmVySFRNTCIsImlubmVySFRNTCIsInNldEF0dHJpYnV0ZSIsIm5hbWUiLCJ2YWx1ZSIsImFzSFRNTCIsImluZGVudCIsImNvbnRleHQiLCJ1bmRlZmluZWQiLCJFTVBUWV9TVFJJTkciLCJhZGp1c3RJbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzZWxmQ2xvc2luZ1RhZyIsInN0YXJ0VGFnIiwiZW5kVGFnIiwiZ2V0Q2hpbGROb2RlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlSFRNTCIsImNyZWF0ZURPTUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyIsImZvckVhY2giLCJpbnNlcnRET01FbGVtZW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiTm9uVGVybWluYWxOb2RlIiwibWFya2Rvd25Ob2RlIiwicHJvdG90eXBlIiwibm9kZU1peGlucyIsImVsZW1lbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVLQTs7O2VBQUE7Ozs0QkFyS2dDOzJEQUVUOzhEQUNHO3dFQUNJO3lCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLDZCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLGFBQ1FDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsVUFBVTtnQ0FEL0RMOztrQ0FFSUMsVUFBVUMsWUFBWUMsWUFBWUM7UUFFeEMsTUFBS0MsVUFBVSxHQUFHQTs7O2tCQUpoQkw7O1lBT0pNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixVQUFVO2dCQUN0QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBT0MsMEJBQWlCLENBQUMsSUFBSSxDQUFDVCxRQUFRLENBQUMsRUFDdkMsQUFBRVUsVUFBWUYsS0FBWkU7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxPQUFPQywwQkFBaUIsQ0FBQyxJQUFJLENBQUNULFFBQVEsQ0FBQyxFQUN2QyxBQUFFWSxZQUFjSixLQUFkSTtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVM7Z0JBQUksSUFBSSxDQUFDVixVQUFVLENBQUNVLFNBQVMsR0FBR0E7WUFBVzs7O1lBRWpFQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsSUFBSSxFQUFFQyxLQUFLO2dCQUFJLElBQUksQ0FBQ2IsVUFBVSxDQUFDVyxZQUFZLENBQUNDLE1BQU1DO1lBQVE7OztZQUV2RUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRUMsT0FBTztnQkFDcEIsSUFBSUEsWUFBWUMsV0FBVztvQkFDekJELFVBQVVELFFBQVEsR0FBRztvQkFFckJBLFNBQVNHLHVCQUFZO2dCQUN2QjtnQkFFQSxJQUFJZCxPQUFPO2dCQUVYLElBQU1FLFVBQVUsSUFBSSxDQUFDSCxVQUFVLElBQ3pCSyxZQUFZLElBQUksQ0FBQ0QsWUFBWTtnQkFFbkMsSUFBSUQsWUFBWSxNQUFNO29CQUNwQlMsU0FBUyxJQUFJLENBQUNJLFlBQVksQ0FBQ0o7b0JBRTNCLElBQU1LLGlCQUFpQixJQUFJLENBQUNDLGdCQUFnQixDQUFDTixRQUFRQztvQkFFckQsSUFBSUksbUJBQW1CLE1BQU07d0JBQzNCLElBQU1FLGlCQUFpQixBQUFDZCxjQUFjLE9BQ2QsQUFBQyxJQUFxQkEsT0FBbEJGLFNBQVEsWUFBb0IsT0FBVkUsV0FBVSxTQUM5QixBQUFDLElBQVcsT0FBUkYsU0FBUTt3QkFFdENGLE9BQU8sQUFBQyxHQUFXa0IsT0FBVFAsUUFBd0IsT0FBZk8sZ0JBQWU7b0JBRXBDLE9BQU87d0JBQ0wsSUFBTUMsV0FBVyxBQUFDZixjQUFjLE9BQ2QsQUFBQyxJQUFxQkEsT0FBbEJGLFNBQVEsWUFBb0IsT0FBVkUsV0FBVSxRQUM5QixBQUFDLElBQVcsT0FBUkYsU0FBUSxNQUMxQmtCLFNBQVMsQUFBQyxNQUFhLE9BQVJsQixTQUFRO3dCQUU3QkYsT0FBTyxBQUFDLEdBQVdtQixPQUFUUixRQUNoQkssT0FEeUJHLFVBQVMsTUFDakJSLE9BQWpCSyxnQkFBMEJJLE9BQVRULFFBQWdCLE9BQVBTLFFBQU87b0JBRTdCO2dCQUNGO2dCQUVBLE9BQU9wQjtZQUNUOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJOLE1BQU0sRUFBRUMsT0FBTztnQkFDOUIsSUFBTW5CLGFBQWEsSUFBSSxDQUFDNEIsYUFBYSxJQUMvQkwsaUJBQWlCdkIsV0FBVzZCLE1BQU0sQ0FBQyxTQUFDTixnQkFBZ0JPO29CQUNsRCxJQUFNQywyQkFBMkJELFVBQVVFLGlCQUFpQjtvQkFFNUQsSUFBSUQsMEJBQTBCO3dCQUM1QixJQUFNRSxnQkFBZ0JILFVBQVViLE1BQU0sQ0FBQ0MsUUFBUUM7d0JBRS9DLElBQUljLGtCQUFrQixNQUFNOzRCQUMxQlYsaUJBQWlCLEFBQUNBLG1CQUFtQixPQUNsQlUsZ0JBQ0MsQUFBQyxHQUFtQkEsT0FBakJWLGdCQUErQixPQUFkVTt3QkFDMUM7b0JBQ0Y7b0JBRUEsT0FBT1Y7Z0JBQ1QsR0FBRztnQkFFVCxPQUFPQTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFKLE1BQU07Z0JBQ2pCQSxTQUFTLEFBQUMsS0FBVyxPQUFQQTtnQkFFZCxPQUFPQTtZQUNUOzs7WUFFQWdCLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJmLE9BQU87Z0JBQ3RCLElBQUloQixhQUFhO2dCQUVqQixJQUFNTSxVQUFVLElBQUksQ0FBQ0gsVUFBVTtnQkFFL0IsSUFBSUcsWUFBWSxNQUFNO29CQUNwQk4sYUFBYWdDLFNBQVNDLGFBQWEsQ0FBQzNCO29CQUVwQyxJQUFNRSxZQUFZLElBQUksQ0FBQ0QsWUFBWTtvQkFFbkMsSUFBSUMsY0FBYyxNQUFNO3dCQUN0QjBCLE9BQU9DLE1BQU0sQ0FBQ25DLFlBQVk7NEJBQ3hCUSxXQUFBQTt3QkFDRjtvQkFDRjtvQkFFQSxJQUFJLENBQUNOLGFBQWEsQ0FBQ0Y7b0JBRW5CLElBQUksQ0FBQ29DLDBCQUEwQixDQUFDcEI7Z0JBQ2xDO2dCQUVBLE9BQU9oQjtZQUNUOzs7WUFFQW9DLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJwQixPQUFPOztnQkFDaEMsSUFBTW5CLGFBQWEsSUFBSSxDQUFDNEIsYUFBYTtnQkFFckM1QixXQUFXd0MsT0FBTyxDQUFDLFNBQUNWO29CQUNsQixJQUFNQywyQkFBMkJELFVBQVVFLGlCQUFpQjtvQkFFNUQsSUFBSUQsMEJBQTBCO3dCQUM1QixJQUFNNUIsYUFBYTJCLFVBQVVJLGdCQUFnQixDQUFDZjt3QkFFOUMsSUFBSWhCLGVBQWUsTUFBTTs0QkFDdkIsTUFBS3NDLGdCQUFnQixDQUFDdEM7d0JBQ3hCO29CQUNGO2dCQUNGO1lBQ0Y7OztZQUVBc0MsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQnRDLFVBQVU7Z0JBQ3pCLElBQU11QyxtQkFBbUIsSUFBSSxDQUFDdkMsVUFBVSxFQUNsQ3dDLG9CQUFvQjtnQkFFMUJELGlCQUFpQkUsWUFBWSxDQUFDekMsWUFBWXdDO1lBQzVDOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLG1DQUFtQ0MsS0FBSyxFQUFFL0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVFLFNBQVM7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUc2QyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBRWhGQztnQkFEckIsSUFBTTdDLGFBQWEsTUFDYjhDLGVBQWVELENBQUFBLG1CQUFBQSw2QkFBZSxFQUFDSCxrQ0FBa0MsQ0FBbERHLE1BQUFBLGtCQUFBQTtvQkFBbURGO29CQUFPL0M7b0JBQVVDO29CQUFZRTtvQkFBV0M7aUJBQWtDLENBQTdINkMsT0FBdUcscUJBQUdEO2dCQUUvSCxPQUFPRTtZQUNUOzs7V0F2SkluRDtFQUFxQmtELDZCQUFlO0FBMEoxQ1gsT0FBT0MsTUFBTSxDQUFDeEMsYUFBYW9ELFNBQVMsRUFBRUMsYUFBVTtBQUNoRGQsT0FBT0MsTUFBTSxDQUFDeEMsYUFBYW9ELFNBQVMsRUFBRUUsZ0JBQWE7SUFFbkQsV0FBZXREIn0=
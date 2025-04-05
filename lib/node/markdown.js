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
var _elementMap = /*#__PURE__*/ _interop_require_default(require("../elementMap"));
var _node = /*#__PURE__*/ _interop_require_default(require("../mixins/node"));
var _element = /*#__PURE__*/ _interop_require_default(require("../mixins/element"));
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var MarkdownNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(MarkdownNode, NonTerminalNode);
    function MarkdownNode(ruleName, childNodes, precedence, opacity, domElement) {
        _class_call_check(this, MarkdownNode);
        var _this;
        _this = _call_super(this, MarkdownNode, [
            ruleName,
            childNodes,
            precedence,
            opacity
        ]);
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
            key: "tagName",
            value: function tagName(context) {
                var element = _elementMap.default[this.ruleName];
                var tagName = element.tagName;
                return tagName;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var element = _elementMap.default[this.ruleName];
                var className = element.className;
                return className;
            }
        },
        {
            key: "closingTag",
            value: function closingTag(context) {
                var tagName = this.tagName(context), closingTag = "</".concat(tagName, ">");
                return closingTag;
            }
        },
        {
            key: "startingTag",
            value: function startingTag(context) {
                var tagName = this.tagName(context), className = this.className(context), attributeName = this.attributeName(context), attributeValue = this.attributeValue(context), classHTML = className !== null ? ' class="'.concat(className, '"') : _constants.EMPTY_STRING, attributeHTML = attributeName !== null && attributeValue !== null ? " ".concat(attributeName, '="').concat(attributeValue, '"') : _constants.EMPTY_STRING, startingTag = "<".concat(tagName).concat(classHTML).concat(attributeHTML, ">");
                return startingTag;
            }
        },
        {
            key: "selfClosingTag",
            value: function selfClosingTag(context) {
                var tagName = this.tagName(context), className = this.className(context), attributeName = this.attributeName(context), attributeValue = this.attributeValue(context), classHTML = className !== null ? ' class="'.concat(className, '"') : _constants.EMPTY_STRING, attributeHTML = attributeName !== null && attributeValue !== null ? " ".concat(attributeName, '="').concat(attributeValue, '"') : _constants.EMPTY_STRING, selfClosingTag = "<".concat(tagName).concat(classHTML).concat(attributeHTML, "/>");
                return selfClosingTag;
            }
        },
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                if (indent !== null) {
                    indent = "  ".concat(indent);
                }
                return indent;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = null;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var attributeValue = null;
                return attributeValue;
            }
        },
        {
            key: "isDivisionMarkdownNode",
            value: function isDivisionMarkdownNode() {
                var divisionMarkdownNode = false;
                return divisionMarkdownNode;
            }
        },
        {
            key: "isPlainTextMarkdownNode",
            value: function isPlainTextMarkdownNode() {
                var plainTextMarkdownNode = false;
                return plainTextMarkdownNode;
            }
        },
        {
            key: "lines",
            value: function lines(context) {
                var lines;
                var ref, ref1;
                ref = this.constructor, ref1 = ref.lines, lines = ref1 === void 0 ? null : ref1, ref;
                if (lines === null) {
                    lines = this.reduceChildNode(function(lines, childNode) {
                        var childNodeMarkdownNode = _instanceof(childNode, MarkdownNode);
                        if (childNodeMarkdownNode) {
                            var markdownNode = childNode, markdownNodeLines = markdownNode.lines(context);
                            lines += markdownNodeLines;
                        }
                        return lines;
                    }, 0);
                }
                return lines;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                this.domElement = this.createDOMElement(context);
                if (this.domElement !== null) {
                    parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
                    parentDOMElement = this.domElement; ///
                    siblingDOMElement = null;
                }
                this.childNodes.forEach(function(childNode) {
                    var childNodeMarkdownNode = _instanceof(childNode, MarkdownNode);
                    if (childNodeMarkdownNode) {
                        var markdownNode = childNode; ///
                        markdownNode.mount(parentDOMElement, siblingDOMElement, context);
                    }
                });
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                if (this.domElement !== null) {
                    parentDOMElement.removeChild(this.domElement);
                    parentDOMElement = this.domElement; ///
                    this.domElement = null;
                    return;
                }
                this.childNodes.forEach(function(childNode) {
                    var childNodeMarkdownNode = _instanceof(childNode, MarkdownNode);
                    if (childNodeMarkdownNode) {
                        childNode.unmount(parentDOMElement, context);
                    }
                });
            }
        },
        {
            key: "isMounted",
            value: function isMounted() {
                var mounted = this.domElement !== null;
                return mounted;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = null;
                var tagName = this.tagName(context);
                if (tagName !== null) {
                    domElement = document.createElement(tagName);
                    var className = this.className(context), attributeName = this.attributeName(context), attributeValue = this.attributeValue(context);
                    if (className !== null) {
                        Object.assign(domElement, {
                            className: className
                        });
                    }
                    if (attributeName !== null && attributeValue !== null) {
                        domElement.setAttribute(attributeName, attributeValue);
                    }
                }
                return domElement;
            }
        },
        {
            key: "asPlainText",
            value: function asPlainText(context) {
                var plainText = null;
                var tagName = this.tagName(context);
                if (tagName !== null) {
                    var childNodesPlainText = this.childNodesAsPlainText(context);
                    plainText = childNodesPlainText; ///
                }
                return plainText;
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var childNodesPlainText = this.reduceChildNode(function(childNodesPlainText, childNode) {
                    var childNodeMarkdownNode = _instanceof(childNode, MarkdownNode);
                    if (childNodeMarkdownNode) {
                        var markdownNode = childNode, markdownNodePlainText = markdownNode.asPlainText(context);
                        if (markdownNodePlainText !== null) {
                            childNodesPlainText = childNodesPlainText === null ? markdownNodePlainText : "".concat(childNodesPlainText, "\n").concat(markdownNodePlainText);
                        }
                    }
                    return childNodesPlainText;
                }, null);
                return childNodesPlainText;
            }
        },
        {
            key: "clone",
            value: function clone() {
                for(var _len = arguments.length, remainingArguments = new Array(_len), _key = 0; _key < _len; _key++){
                    remainingArguments[_key] = arguments[_key];
                }
                var _$_get;
                return (_$_get = _get(_get_prototype_of(MarkdownNode.prototype), "clone", this)).call.apply(_$_get, [
                    this,
                    this.domElement
                ].concat(_to_consumable_array(remainingArguments)));
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                var _NonTerminalNode;
                var domElement = null, markdownNode = (_NonTerminalNode = _occamparsers.NonTerminalNode).fromRuleNameChildNodesAndOpacity.apply(_NonTerminalNode, [
                    Class,
                    ruleName,
                    childNodes,
                    opacity,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgZWxlbWVudE1hcCBmcm9tIFwiLi4vZWxlbWVudE1hcFwiO1xuaW1wb3J0IG5vZGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9ub2RlXCI7XG5pbXBvcnQgZWxlbWVudE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBNYXJrZG93bk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBzZXRET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgdGFnTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRNYXBbdGhpcy5ydWxlTmFtZV07XG5cbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IGVsZW1lbnQ7XG5cbiAgICByZXR1cm4gdGFnTmFtZTtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRNYXBbdGhpcy5ydWxlTmFtZV07XG5cbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gZWxlbWVudDtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBjbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSBgPC8ke3RhZ05hbWV9PmA7XG5cbiAgICByZXR1cm4gY2xvc2luZ1RhZztcbiAgfVxuXG4gIHN0YXJ0aW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzSFRNTCA9IChjbGFzc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhdHRyaWJ1dGVIVE1MID0gKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9PmA7XG5cbiAgICByZXR1cm4gc3RhcnRpbmdUYWc7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc0hUTUwgPSAoY2xhc3NOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYXR0cmlidXRlSFRNTCA9ICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHNlbGZDbG9zaW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9JHthdHRyaWJ1dGVIVE1MfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ICE9PSBudWxsKSB7XG4gICAgICBpbmRlbnQgPSBgICAke2luZGVudH1gO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGlzRGl2aXNpb25NYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGlzUGxhaW5UZXh0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHBsYWluVGV4dE1hcmtkb3duTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGxpbmVzKGNvbnRleHQpIHtcbiAgICBsZXQgbGluZXM7XG5cbiAgICAoeyBsaW5lcyA9IG51bGwgfSA9IHRoaXMuY29uc3RydWN0b3IpO1xuXG4gICAgaWYgKGxpbmVzID09PSBudWxsKSB7XG4gICAgICBsaW5lcyA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChsaW5lcywgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZU1hcmtkb3duTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBNYXJrZG93bk5vZGUpO1xuXG4gICAgICAgIGlmIChjaGlsZE5vZGVNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgICBjb25zdCBtYXJrZG93bk5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIG1hcmtkb3duTm9kZUxpbmVzID0gbWFya2Rvd25Ob2RlLmxpbmVzKGNvbnRleHQpO1xuXG4gICAgICAgICAgbGluZXMgKz0gbWFya2Rvd25Ob2RlTGluZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpXG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTWFya2Rvd25Ob2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIE1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY29uc3QgbWFya2Rvd25Ob2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICBtYXJrZG93bk5vZGUubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgaWYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZU1hcmtkb3duTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBNYXJrZG93bk5vZGUpO1xuXG4gICAgICBpZiAoY2hpbGROb2RlTWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNoaWxkTm9kZS51bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNNb3VudGVkKCkge1xuICAgIGNvbnN0IG1vdW50ZWQgPSAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtb3VudGVkO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSB7XG4gICAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBsZXQgcGxhaW5UZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCk7XG5cbiAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMuY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgICBwbGFpblRleHQgPSBjaGlsZE5vZGVzUGxhaW5UZXh0OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzUGxhaW5UZXh0LCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU1hcmtkb3duTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBNYXJrZG93bk5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlTWFya2Rvd25Ob2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIG1hcmtkb3duTm9kZVBsYWluVGV4dCA9IG1hcmtkb3duTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAobWFya2Rvd25Ob2RlUGxhaW5UZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IChjaGlsZE5vZGVzUGxhaW5UZXh0ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2Rvd25Ob2RlUGxhaW5UZXh0IDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjaGlsZE5vZGVzUGxhaW5UZXh0fVxuJHttYXJrZG93bk5vZGVQbGFpblRleHR9YDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgICAgICAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICB9XG5cbiAgY2xvbmUoLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBtYXJrZG93bk5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE1hcmtkb3duTm9kZS5wcm90b3R5cGUsIG5vZGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihNYXJrZG93bk5vZGUucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25Ob2RlO1xuIl0sIm5hbWVzIjpbIk1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJvcGFjaXR5IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwidGFnTmFtZSIsImNvbnRleHQiLCJlbGVtZW50IiwiZWxlbWVudE1hcCIsImNsYXNzTmFtZSIsImNsb3NpbmdUYWciLCJzdGFydGluZ1RhZyIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsImNsYXNzSFRNTCIsIkVNUFRZX1NUUklORyIsImF0dHJpYnV0ZUhUTUwiLCJzZWxmQ2xvc2luZ1RhZyIsImFkanVzdEluZGVudCIsImluZGVudCIsImlzRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImlzUGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwicGxhaW5UZXh0TWFya2Rvd25Ob2RlIiwibGluZXMiLCJjb25zdHJ1Y3RvciIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU1hcmtkb3duTm9kZSIsIm1hcmtkb3duTm9kZSIsIm1hcmtkb3duTm9kZUxpbmVzIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiZm9yRWFjaCIsInVubW91bnQiLCJyZW1vdmVDaGlsZCIsImlzTW91bnRlZCIsIm1vdW50ZWQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRBdHRyaWJ1dGUiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsImNoaWxkTm9kZXNQbGFpblRleHQiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJtYXJrZG93bk5vZGVQbGFpblRleHQiLCJjbG9uZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiQ2xhc3MiLCJOb25UZXJtaW5hbE5vZGUiLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIiwiZWxlbWVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa1FBOzs7ZUFBQTs7OzRCQWhRZ0M7aUVBRVQ7MkRBQ0E7OERBQ0c7eUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
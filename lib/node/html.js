"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HTMLNode;
    }
});
var _occamdom = require("occam-dom");
var _elementMap = /*#__PURE__*/ _interop_require_default(require("../elementMap"));
var _constants = require("../constants");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var HTMLNode = /*#__PURE__*/ function(Node) {
    _inherits(HTMLNode, Node);
    function HTMLNode(outerNode, parentNode, childNodes, domElement) {
        _class_call_check(this, HTMLNode);
        var _this;
        _this = _call_super(this, HTMLNode, [
            outerNode,
            parentNode,
            childNodes
        ]);
        _this.domElement = domElement;
        return _this;
    }
    _create_class(HTMLNode, [
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
            key: "content",
            value: function content(context) {
                return this.outerNode.content(context);
            }
        },
        {
            key: "inlineText",
            value: function inlineText(context) {
                return this.outerNode.inlineText(context);
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName;
                var outerNode = this.getOuterNode(), nonTerminalNode = outerNode; ///
                ruleName = nonTerminalNode.getRuleName();
                return ruleName;
            }
        },
        {
            key: "tagName",
            value: function tagName(context) {
                var tagName;
                var ruleName = this.getRuleName();
                var element = _elementMap.default[ruleName];
                tagName = element.tagName;
                return tagName;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var className;
                var ruleName = this.getRuleName();
                var element = _elementMap.default[ruleName];
                className = element.className;
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
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                indent = indent === null ? _constants.EMPTY_STRING : "".concat(_constants.DOUBLE_SPACE).concat(indent);
                return indent;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                if (context === undefined) {
                    context = indent; ///
                    indent = _constants.EMPTY_STRING;
                }
                var html;
                var tagName = this.tagName(context);
                if (tagName === null) {
                    var childNodesHTML = this.childNodesAsHTML(indent, context);
                    html = childNodesHTML; ///
                } else {
                    indent = this.adjustIndent(indent);
                    var childNodesHTML1 = this.childNodesAsHTML(indent, context);
                    if (childNodesHTML1 !== null) {
                        var startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                        html = indent === null ? "".concat(startingTag).concat(childNodesHTML1).concat(closingTag) : "".concat(indent).concat(startingTag, "\n").concat(childNodesHTML1).concat(indent).concat(closingTag, "\n");
                    } else {
                        var selfClosingTag = this.selfClosingTag(context);
                        html = indent === null ? selfClosingTag : "".concat(indent).concat(selfClosingTag, "\n");
                    }
                }
                return html;
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
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML = this.reduceChildNode(function(childNodesHTML, childNode) {
                    var childNodeHTML = childNode.asHTML(indent, context);
                    if (childNodeHTML !== null) {
                        childNodesHTML = childNodesHTML === null ? childNodeHTML : "".concat(childNodesHTML).concat(childNodeHTML);
                    }
                    return childNodesHTML;
                }, null);
                return childNodesHTML;
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var childNodesPlainText = this.reduceChildNode(function(childNodesPlainText, childNode) {
                    var markdownNode = childNode, markdownNodePlainText = markdownNode.asPlainText(context);
                    if (markdownNodePlainText !== null) {
                        childNodesPlainText = childNodesPlainText === null ? markdownNodePlainText : "".concat(childNodesPlainText, "\n").concat(markdownNodePlainText);
                    }
                    return childNodesPlainText;
                }, null);
                return childNodesPlainText;
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
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = HTMLNode; ///
                }
                var domElement = null, node = _occamdom.Node.fromNothing(Class, domElement);
                return node;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                if (outerNode === undefined) {
                    outerNode = Class; ///
                    Class = HTMLNode; ///
                }
                var domElement = null, node = _occamdom.Node.fromOuterNode(Class, outerNode);
                return node;
            }
        }
    ]);
    return HTMLNode;
}(_wrap_native_super(_occamdom.Node));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBlbGVtZW50TWFwIGZyb20gXCIuLi9lbGVtZW50TWFwXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgRE9VQkxFX1NQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVE1MTm9kZSBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudClcblxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVNYXJrZG93bk5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgTWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZU1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBtYXJrZG93bk5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIG1hcmtkb3duTm9kZS5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBudWxsO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlTWFya2Rvd25Ob2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIE1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVNYXJrZG93bk5vZGUpIHtcbiAgICAgICAgY2hpbGROb2RlLnVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc01vdW50ZWQoKSB7XG4gICAgY29uc3QgbW91bnRlZCA9ICh0aGlzLmRvbUVsZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1vdW50ZWQ7XG4gIH1cblxuICBjb250ZW50KGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmNvbnRlbnQoY29udGV4dCk7IH1cblxuICBpbmxpbmVUZXh0KGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmlubGluZVRleHQoY29udGV4dCk7IH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBsZXQgcnVsZU5hbWU7XG5cbiAgICBjb25zdCBvdXRlck5vZGUgPSB0aGlzLmdldE91dGVyTm9kZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG91dGVyTm9kZTsgIC8vL1xuXG4gICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIHRhZ05hbWUoY29udGV4dCkge1xuICAgIGxldCB0YWdOYW1lO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE1hcFtydWxlTmFtZV07XG5cbiAgICAoeyB0YWdOYW1lIH0gPSBlbGVtZW50KTtcblxuICAgIHJldHVybiB0YWdOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBsZXQgY2xhc3NOYW1lO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE1hcFtydWxlTmFtZV07XG5cbiAgICAoeyBjbGFzc05hbWUgfSA9IGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGNsb3NpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IGA8LyR7dGFnTmFtZX0+YDtcblxuICAgIHJldHVybiBjbG9zaW5nVGFnO1xuICB9XG5cbiAgc3RhcnRpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYXR0cmlidXRlVmFsdWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NIVE1MID0gKGNsYXNzTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGF0dHJpYnV0ZUhUTUwgPSAoKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpICYmIChhdHRyaWJ1dGVWYWx1ZSAhPT0gbnVsbCkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzdGFydGluZ1RhZyA9IGA8JHt0YWdOYW1lfSR7Y2xhc3NIVE1MfSR7YXR0cmlidXRlSFRNTH0+YDtcblxuICAgIHJldHVybiBzdGFydGluZ1RhZztcbiAgfVxuXG4gIHNlbGZDbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzSFRNTCA9IChjbGFzc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhdHRyaWJ1dGVIVE1MID0gKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc2VsZkNsb3NpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9Lz5gO1xuXG4gICAgcmV0dXJuIHNlbGZDbG9zaW5nVGFnO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IG51bGw7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IG51bGw7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HIDpcbiAgICAgICAgICAgICAgICBgJHtET1VCTEVfU1BBQ0V9JHtpbmRlbnR9YDtcblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IGluZGVudDsgLy8vXG5cbiAgICAgIGluZGVudCA9IEVNUFRZX1NUUklORztcbiAgICB9XG5cbiAgICBsZXQgaHRtbDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCk7XG5cbiAgICBpZiAodGFnTmFtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IGNoaWxkTm9kZXNIVE1MOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVzSFRNTCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbCA9IChpbmRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBgJHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31gIDpcbiAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2VsZkNsb3NpbmdUYWcgPSB0aGlzLnNlbGZDbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgIHNlbGZDbG9zaW5nVGFnIDogIC8vL1xuICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7c2VsZkNsb3NpbmdUYWd9XG5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGxldCBwbGFpblRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gdGhpcy5jaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICAgIHBsYWluVGV4dCA9IGNoaWxkTm9kZXNQbGFpblRleHQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSB7XG4gICAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc0hUTUwsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlSFRNTCA9IGNoaWxkTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKGNoaWxkTm9kZUhUTUwgIT09IG51bGwpIHtcbiAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSAoY2hpbGROb2Rlc0hUTUwgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZUhUTUwgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y2hpbGROb2Rlc0hUTUx9JHtjaGlsZE5vZGVIVE1MfWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzUGxhaW5UZXh0LCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGVQbGFpblRleHQgPSBtYXJrZG93bk5vZGUuYXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICAgIGlmIChtYXJrZG93bk5vZGVQbGFpblRleHQgIT09IG51bGwpIHtcbiAgICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IChjaGlsZE5vZGVzUGxhaW5UZXh0ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZG93bk5vZGVQbGFpblRleHQgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y2hpbGROb2Rlc1BsYWluVGV4dH1cbiR7bWFya2Rvd25Ob2RlUGxhaW5UZXh0fWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gIH1cblxuICBsaW5lcyhjb250ZXh0KSB7XG4gICAgbGV0IGxpbmVzO1xuXG4gICAgKHsgbGluZXMgPSBudWxsIH0gPSB0aGlzLmNvbnN0cnVjdG9yKTtcblxuICAgIGlmIChsaW5lcyA9PT0gbnVsbCkge1xuICAgICAgbGluZXMgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgobGluZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVNYXJrZG93bk5vZGUgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgTWFya2Rvd25Ob2RlKTtcblxuICAgICAgICBpZiAoY2hpbGROb2RlTWFya2Rvd25Ob2RlKSB7XG4gICAgICAgICAgY29uc3QgbWFya2Rvd25Ob2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWFya2Rvd25Ob2RlTGluZXMgPSBtYXJrZG93bk5vZGUubGluZXMoY29udGV4dCk7XG5cbiAgICAgICAgICBsaW5lcyArPSBtYXJrZG93bk5vZGVMaW5lcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IEhUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gTm9kZS5mcm9tTm90aGluZyhDbGFzcywgZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUpIHtcbiAgICBpZiAob3V0ZXJOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG91dGVyTm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBOb2RlLmZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjb250ZXh0IiwiY3JlYXRlRE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJtYXJrZG93bk5vZGUiLCJ1bm1vdW50IiwicmVtb3ZlQ2hpbGQiLCJpc01vdW50ZWQiLCJtb3VudGVkIiwiY29udGVudCIsImlubGluZVRleHQiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiZ2V0T3V0ZXJOb2RlIiwibm9uVGVybWluYWxOb2RlIiwidGFnTmFtZSIsImVsZW1lbnQiLCJlbGVtZW50TWFwIiwiY2xhc3NOYW1lIiwiY2xvc2luZ1RhZyIsInN0YXJ0aW5nVGFnIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZVZhbHVlIiwiY2xhc3NIVE1MIiwiRU1QVFlfU1RSSU5HIiwiYXR0cmlidXRlSFRNTCIsInNlbGZDbG9zaW5nVGFnIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwiRE9VQkxFX1NQQUNFIiwiYXNIVE1MIiwidW5kZWZpbmVkIiwiaHRtbCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0IiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInNldEF0dHJpYnV0ZSIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZUhUTUwiLCJtYXJrZG93bk5vZGVQbGFpblRleHQiLCJsaW5lcyIsImNvbnN0cnVjdG9yIiwibWFya2Rvd25Ob2RlTGluZXMiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwibm9kZSIsIk5vZGUiLCJmcm9tT3V0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt3QkFOQTtpRUFFRTt5QkFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFBLEFBQU1BLHlCQUFOO2NBQU1BO2FBQUFBLFNBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVU7Z0NBRHRDSjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBV0M7WUFBWUM7O1FBRTdCLE1BQUtDLFVBQVUsR0FBR0E7OztrQkFKREo7O1lBT25CSyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFQyxPQUFPO2dCQUNoRCxJQUFJLENBQUNKLFVBQVUsR0FBRyxJQUFJLENBQUNLLGdCQUFnQixDQUFDRDtnQkFFeEMsSUFBSSxJQUFJLENBQUNKLFVBQVUsS0FBSyxNQUFNO29CQUM1QkUsaUJBQWlCSSxZQUFZLENBQUMsSUFBSSxDQUFDTixVQUFVLEVBQUVHO29CQUUvQ0QsbUJBQW1CLElBQUksQ0FBQ0YsVUFBVSxFQUFFLEdBQUc7b0JBRXZDRyxvQkFBb0I7Z0JBQ3RCO2dCQUVBLElBQUksQ0FBQ0osVUFBVSxDQUFDUSxPQUFPLENBQUMsU0FBQ0M7b0JB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
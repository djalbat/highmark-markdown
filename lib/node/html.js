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
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                this.domElement = this.createDOMElement(context);
                if (this.domElement !== null) {
                    parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
                    parentDOMElement = this.domElement; ///
                    siblingDOMElement = null;
                }
                this.childNodes.forEach(function(childNode) {
                    childNode.mount(parentDOMElement, siblingDOMElement, context);
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
                    childNode.unmount(parentDOMElement, context);
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
            key: "lines",
            value: function lines(context) {
                var lines;
                var ref, ref1;
                ref = this.constructor, ref1 = ref.lines, lines = ref1 === void 0 ? null : ref1, ref;
                if (lines === null) {
                    lines = this.reduceChildNode(function(lines, childNode) {
                        var htmlNode = childNode, htmlNodeLines = htmlNode.lines(context);
                        lines += htmlNodeLines;
                        return lines;
                    }, 0);
                }
                return lines;
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
                    var htmlNode = childNode, htmlNodePlainText = htmlNode.asPlainText(context);
                    if (htmlNodePlainText !== null) {
                        childNodesPlainText = childNodesPlainText === null ? htmlNodePlainText : "".concat(childNodesPlainText, "\n").concat(htmlNodePlainText);
                    }
                    return childNodesPlainText;
                }, null);
                return childNodesPlainText;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBlbGVtZW50TWFwIGZyb20gXCIuLi9lbGVtZW50TWFwXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgRE9VQkxFX1NQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVE1MTm9kZSBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHNldERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpXG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IG51bGw7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzTW91bnRlZCgpIHtcbiAgICBjb25zdCBtb3VudGVkID0gKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbW91bnRlZDtcbiAgfVxuXG4gIGxpbmVzKGNvbnRleHQpIHtcbiAgICBsZXQgbGluZXM7XG5cbiAgICAoeyBsaW5lcyA9IG51bGwgfSA9IHRoaXMuY29uc3RydWN0b3IpO1xuXG4gICAgaWYgKGxpbmVzID09PSBudWxsKSB7XG4gICAgICBsaW5lcyA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChsaW5lcywgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGh0bWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgaHRtbE5vZGVMaW5lcyA9IGh0bWxOb2RlLmxpbmVzKGNvbnRleHQpO1xuXG4gICAgICAgIGxpbmVzICs9IGh0bWxOb2RlTGluZXM7XG5cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG5cbiAgY29udGVudChjb250ZXh0KSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5jb250ZW50KGNvbnRleHQpOyB9XG5cbiAgaW5saW5lVGV4dChjb250ZXh0KSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5pbmxpbmVUZXh0KGNvbnRleHQpOyB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgbGV0IHJ1bGVOYW1lO1xuXG4gICAgY29uc3Qgb3V0ZXJOb2RlID0gdGhpcy5nZXRPdXRlck5vZGUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBvdXRlck5vZGU7ICAvLy9cblxuICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICB0YWdOYW1lKGNvbnRleHQpIHtcbiAgICBsZXQgdGFnTmFtZTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRNYXBbcnVsZU5hbWVdO1xuXG4gICAgKHsgdGFnTmFtZSB9ID0gZWxlbWVudCk7XG5cbiAgICByZXR1cm4gdGFnTmFtZTtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgbGV0IGNsYXNzTmFtZTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRNYXBbcnVsZU5hbWVdO1xuXG4gICAgKHsgY2xhc3NOYW1lIH0gPSBlbGVtZW50KTtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBjbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSBgPC8ke3RhZ05hbWV9PmA7XG5cbiAgICByZXR1cm4gY2xvc2luZ1RhZztcbiAgfVxuXG4gIHN0YXJ0aW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzSFRNTCA9IChjbGFzc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhdHRyaWJ1dGVIVE1MID0gKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9PmA7XG5cbiAgICByZXR1cm4gc3RhcnRpbmdUYWc7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc0hUTUwgPSAoY2xhc3NOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYXR0cmlidXRlSFRNTCA9ICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHNlbGZDbG9zaW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9JHthdHRyaWJ1dGVIVE1MfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgYWRqdXN0SW5kZW50KGluZGVudCkge1xuICAgIGluZGVudCA9IChpbmRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyA6XG4gICAgICAgICAgICAgICAgYCR7RE9VQkxFX1NQQUNFfSR7aW5kZW50fWA7XG5cbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSBpbmRlbnQ7IC8vL1xuXG4gICAgICBpbmRlbnQgPSBFTVBUWV9TVFJJTkc7XG4gICAgfVxuXG4gICAgbGV0IGh0bWw7XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpO1xuXG4gICAgaWYgKHRhZ05hbWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSBjaGlsZE5vZGVzSFRNTDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgYCR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9YCA6XG4gICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNlbGZDbG9zaW5nVGFnID0gdGhpcy5zZWxmQ2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3NlbGZDbG9zaW5nVGFnfVxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBsZXQgcGxhaW5UZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCk7XG5cbiAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMuY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgICBwbGFpblRleHQgPSBjaGlsZE5vZGVzUGxhaW5UZXh0OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCk7XG5cbiAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZShjb250ZXh0KSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KTtcblxuICAgICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcbiAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkge1xuICAgICAgICBkb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNoaWxkTm9kZXNIVE1MLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUhUTUwgPSBjaGlsZE5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVIVE1MICE9PSBudWxsKSB7XG4gICAgICAgIGNoaWxkTm9kZXNIVE1MID0gKGNoaWxkTm9kZXNIVE1MID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVIVE1MIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NoaWxkTm9kZXNIVE1MfSR7Y2hpbGROb2RlSFRNTH1gO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNQbGFpblRleHQgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc1BsYWluVGV4dCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBodG1sTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBodG1sTm9kZVBsYWluVGV4dCA9IGh0bWxOb2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgICBpZiAoaHRtbE5vZGVQbGFpblRleHQgIT09IG51bGwpIHtcbiAgICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IChjaGlsZE5vZGVzUGxhaW5UZXh0ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sTm9kZVBsYWluVGV4dCA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjaGlsZE5vZGVzUGxhaW5UZXh0fVxuJHtodG1sTm9kZVBsYWluVGV4dH1gO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBOb2RlLmZyb21Ob3RoaW5nKENsYXNzLCBkb21FbGVtZW50KTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSkge1xuICAgIGlmIChvdXRlck5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3V0ZXJOb2RlID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IE5vZGUuZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiY29udGV4dCIsImNyZWF0ZURPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwidW5tb3VudCIsInJlbW92ZUNoaWxkIiwiaXNNb3VudGVkIiwibW91bnRlZCIsImxpbmVzIiwiY29uc3RydWN0b3IiLCJyZWR1Y2VDaGlsZE5vZGUiLCJodG1sTm9kZSIsImh0bWxOb2RlTGluZXMiLCJjb250ZW50IiwiaW5saW5lVGV4dCIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJnZXRPdXRlck5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJ0YWdOYW1lIiwiZWxlbWVudCIsImVsZW1lbnRNYXAiLCJjbGFzc05hbWUiLCJjbG9zaW5nVGFnIiwic3RhcnRpbmdUYWciLCJhdHRyaWJ1dGVOYW1lIiwiYXR0cmlidXRlVmFsdWUiLCJjbGFzc0hUTUwiLCJFTVBUWV9TVFJJTkciLCJhdHRyaWJ1dGVIVE1MIiwic2VsZkNsb3NpbmdUYWciLCJhZGp1c3RJbmRlbnQiLCJpbmRlbnQiLCJET1VCTEVfU1BBQ0UiLCJhc0hUTUwiLCJ1bmRlZmluZWQiLCJodG1sIiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJjaGlsZE5vZGVzUGxhaW5UZXh0IiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0QXR0cmlidXRlIiwiY2hpbGROb2RlSFRNTCIsImh0bWxOb2RlUGxhaW5UZXh0IiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsIm5vZGUiLCJOb2RlIiwiZnJvbU91dGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7d0JBTkE7aUVBRUU7eUJBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFBLEFBQU1BLHlCQUFOO2NBQU1BO2FBQUFBLFNBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVU7Z0NBRHRDSjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBV0M7WUFBWUM7O1FBRTdCLE1BQUtDLFVBQVUsR0FBR0E7OztrQkFKREo7O1lBT25CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0YsVUFBVTtnQkFDdEIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLGdCQUFnQixFQUFFQyxpQkFBaUIsRUFBRUMsT0FBTztnQkFDaEQsSUFBSSxDQUFDTixVQUFVLEdBQUcsSUFBSSxDQUFDTyxnQkFBZ0IsQ0FBQ0Q7Z0JBRXhDLElBQUksSUFBSSxDQUFDTixVQUFVLEtBQUssTUFBTTtvQkFDNUJJLGlCQUFpQkksWUFBWSxDQUFDLElBQUksQ0FBQ1IsVUFBVSxFQUFFSztvQkFFL0NELG1CQUFtQixJQUFJLENBQUNKLFVBQVUsRUFBRSxHQUFHO29CQUV2Q0ssb0JBQW9CO2dCQUN0QjtnQkFFQSxJQUFJLENBQUNOLFVBQVUsQ0FBQ1UsT0FBTyxDQUFDLFNBQUNDO29CQUN2QkEsVUFBVVAsS0FBSyxDQUFDQyxrQkFBa0JDLG1CQUFtQkM7Z0JBQ3ZEO1lBQ0Y7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUVAsZ0JBQWdCLEVBQUVFLE9BQU87Z0JBQy9CLElBQUksSUFBSSxDQUFDTixVQUFVLEtBQUssTUFBTTtvQkFDNUJJLGlCQUFpQlEsV0FBVyxDQUFDLElBQUksQ0FBQ1osVUFBVTtvQkFFNUNJLG1CQUFtQixJQUFJLENBQUNKLFVBQVUsRUFBRSxHQUFHO29CQUV2QyxJQUFJLENBQUNBLFVBQVUsR0FBRztvQkFFbEI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDRCxVQUFVLENBQUNVLE9BQU8sQ0FBQyxTQUFDQztvQkFDdkJBLFVBQVVDLE9BQU8sQ0FBQ1Asa0JBQWtCRTtnQkFDdEM7WUFDRjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFXLElBQUksQ0FBQ2QsVUFBVSxLQUFLO2dCQUVyQyxPQUFPYztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1ULE9BQU87Z0JBQ1gsSUFBSVM7O3NCQUVnQixJQUFJLENBQUNDLFdBQVcsYUFBakNELE9BQUFBLDBCQUFRO2dCQUVYLElBQUlBLFVBQVUsTUFBTTtvQkFDbEJBLFFBQVEsSUFBSSxDQUFDRSxlQUFlLENBQUMsU0FBQ0YsT0FBT0w7d0JBQ25DLElBQU1RLFdBQVdSLFdBQ1hTLGdCQUFnQkQsU0FBU0gsS0FBSyxDQUFDVDt3QkFFckNTLFNBQVNJO3dCQUVULE9BQU9KO29CQUNULEdBQUc7Z0JBQ0w7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRZCxPQUFPO2dCQUFJLE9BQU8sSUFBSSxDQUFDVCxTQUFTLENBQUN1QixPQUFPLENBQUNkO1lBQVU7OztZQUUzRGUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdmLE9BQU87Z0JBQUksT0FBTyxJQUFJLENBQUNULFNBQVMsQ0FBQ3dCLFVBQVUsQ0FBQ2Y7WUFBVTs7O1lBRWpFZ0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU0xQixZQUFZLElBQUksQ0FBQzJCLFlBQVksSUFDN0JDLGtCQUFrQjVCLFdBQVksR0FBRztnQkFFdkMwQixXQUFXRSxnQkFBZ0JILFdBQVc7Z0JBRXRDLE9BQU9DO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUXBCLE9BQU87Z0JBQ2IsSUFBSW9CO2dCQUVKLElBQU1ILFdBQVcsSUFBSSxDQUFDRCxXQUFXO2dCQUVqQyxJQUFNSyxVQUFVQyxtQkFBVSxDQUFDTCxTQUFTO2dCQUVqQ0csVUFBWUMsUUFBWkQ7Z0JBRUgsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVdkIsT0FBTztnQkFDZixJQUFJdUI7Z0JBRUosSUFBTU4sV0FBVyxJQUFJLENBQUNELFdBQVc7Z0JBRWpDLElBQU1LLFVBQVVDLG1CQUFVLENBQUNMLFNBQVM7Z0JBRWpDTSxZQUFjRixRQUFkRTtnQkFFSCxPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVd4QixPQUFPO2dCQUNoQixJQUFNb0IsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ3BCLFVBQ3ZCd0IsYUFBYSxBQUFDLEtBQVksT0FBUkosU0FBUTtnQkFFaEMsT0FBT0k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZekIsT0FBTztnQkFDakIsSUFBTW9CLFVBQVUsSUFBSSxDQUFDQSxPQUFPLENBQUNwQixVQUN2QnVCLFlBQVksSUFBSSxDQUFDQSxTQUFTLENBQUN2QixVQUMzQjBCLGdCQUFnQixJQUFJLENBQUNBLGFBQWEsQ0FBQzFCLFVBQ25DMkIsaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDM0IsVUFDckM0QixZQUFZLEFBQUNMLGNBQWMsT0FDZCxBQUFDLFdBQW9CLE9BQVZBLFdBQVUsT0FDbEJNLHVCQUFZLEVBQzVCQyxnQkFBZ0IsQUFBQyxBQUFDSixrQkFBa0IsUUFBVUMsbUJBQW1CLE9BQ2hELEFBQUMsSUFBcUJBLE9BQWxCRCxlQUFjLE1BQW1CLE9BQWZDLGdCQUFlLE9BQ2xDRSx1QkFBWSxFQUNoQ0osY0FBYyxBQUFDLElBQWFHLE9BQVZSLFNBQXNCVSxPQUFaRixXQUEwQixPQUFkRSxlQUFjO2dCQUU1RCxPQUFPTDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWUvQixPQUFPO2dCQUNwQixJQUFNb0IsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ3BCLFVBQ3ZCdUIsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ3ZCLFVBQzNCMEIsZ0JBQWdCLElBQUksQ0FBQ0EsYUFBYSxDQUFDMUIsVUFDbkMyQixpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUMzQixVQUNyQzRCLFlBQVksQUFBQ0wsY0FBYyxPQUNkLEFBQUMsV0FBb0IsT0FBVkEsV0FBVSxPQUNsQk0sdUJBQVksRUFDNUJDLGdCQUFnQixBQUFDLEFBQUNKLGtCQUFrQixRQUFVQyxtQkFBbUIsT0FDaEQsQUFBQyxJQUFxQkEsT0FBbEJELGVBQWMsTUFBbUIsT0FBZkMsZ0JBQWUsT0FDbENFLHVCQUFZLEVBQ2hDRSxpQkFBaUIsQUFBQyxJQUFhSCxPQUFWUixTQUFzQlUsT0FBWkYsV0FBMEIsT0FBZEUsZUFBYztnQkFFL0QsT0FBT0M7WUFDVDs7O1lBRUFMLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjMUIsT0FBTztnQkFDbkIsSUFBTTBCLGdCQUFnQjtnQkFFdEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlM0IsT0FBTztnQkFDcEIsSUFBTTJCLGlCQUFpQjtnQkFFdkIsT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxNQUFNO2dCQUNqQkEsU0FBUyxBQUFDQSxXQUFXLE9BQ1ZKLHVCQUFZLEdBQ1gsQUFBQyxHQUFpQkksT0FBZkMsdUJBQVksRUFBVSxPQUFQRDtnQkFFOUIsT0FBT0E7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPRixNQUFNLEVBQUVqQyxPQUFPO2dCQUNwQixJQUFJQSxZQUFZb0MsV0FBVztvQkFDekJwQyxVQUFVaUMsUUFBUSxHQUFHO29CQUVyQkEsU0FBU0osdUJBQVk7Z0JBQ3ZCO2dCQUVBLElBQUlRO2dCQUVKLElBQU1qQixVQUFVLElBQUksQ0FBQ0EsT0FBTyxDQUFDcEI7Z0JBRTdCLElBQUlvQixZQUFZLE1BQU07b0JBQ3BCLElBQU1rQixpQkFBaUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ04sUUFBUWpDO29CQUVyRHFDLE9BQU9DLGdCQUFpQixHQUFHO2dCQUM3QixPQUFPO29CQUNMTCxTQUFTLElBQUksQ0FBQ0QsWUFBWSxDQUFDQztvQkFFM0IsSUFBTUssa0JBQWlCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNOLFFBQVFqQztvQkFFckQsSUFBSXNDLG9CQUFtQixNQUFNO3dCQUMzQixJQUFNYixjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDekIsVUFDL0J3QixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDeEI7d0JBRW5DcUMsT0FBTyxBQUFDSixXQUFXLE9BQ1gsQUFBQyxHQUFnQkssT0FBZGIsYUFBK0JELE9BQWpCYyxpQkFBNEIsT0FBWGQsY0FDaEMsQUFBQyxHQUFXQyxPQUFUUSxRQUNuQkssT0FENEJiLGFBQVksTUFDdkJRLE9BQWpCSyxpQkFBMEJkLE9BQVRTLFFBQW9CLE9BQVhULFlBQVc7b0JBRWpDLE9BQU87d0JBQ0wsSUFBTU8saUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDL0I7d0JBRTNDcUMsT0FBTyxBQUFDSixXQUFXLE9BQ1ZGLGlCQUNDLEFBQUMsR0FBV0EsT0FBVEUsUUFBd0IsT0FBZkYsZ0JBQWU7b0JBRXZDO2dCQUNGO2dCQUVBLE9BQU9NO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWXhDLE9BQU87Z0JBQ2pCLElBQUl5QyxZQUFZO2dCQUVoQixJQUFNckIsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ3BCO2dCQUU3QixJQUFJb0IsWUFBWSxNQUFNO29CQUNwQixJQUFNc0Isc0JBQXNCLElBQUksQ0FBQ0MscUJBQXFCLENBQUMzQztvQkFFdkR5QyxZQUFZQyxxQkFBc0IsR0FBRztnQkFDdkM7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUF4QyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCRCxPQUFPO2dCQUN0QixJQUFJTixhQUFhO2dCQUVqQixJQUFNMEIsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ3BCO2dCQUU3QixJQUFJb0IsWUFBWSxNQUFNO29CQUNwQjFCLGFBQWFrRCxTQUFTQyxhQUFhLENBQUN6QjtvQkFFcEMsSUFBTUcsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ3ZCLFVBQzNCMEIsZ0JBQWdCLElBQUksQ0FBQ0EsYUFBYSxDQUFDMUIsVUFDbkMyQixpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUMzQjtvQkFFM0MsSUFBSXVCLGNBQWMsTUFBTTt3QkFDdEJ1QixPQUFPQyxNQUFNLENBQUNyRCxZQUFZOzRCQUN4QjZCLFdBQUFBO3dCQUNGO29CQUNGO29CQUVBLElBQUksQUFBQ0csa0JBQWtCLFFBQVVDLG1CQUFtQixNQUFPO3dCQUN6RGpDLFdBQVdzRCxZQUFZLENBQUN0QixlQUFlQztvQkFDekM7Z0JBQ0Y7Z0JBRUEsT0FBT2pDO1lBQ1Q7OztZQUVBNkMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQk4sTUFBTSxFQUFFakMsT0FBTztnQkFDOUIsSUFBTXNDLGlCQUFpQixJQUFJLENBQUMzQixlQUFlLENBQUMsU0FBQzJCLGdCQUFnQmxDO29CQUMzRCxJQUFNNkMsZ0JBQWdCN0MsVUFBVStCLE1BQU0sQ0FBQ0YsUUFBUWpDO29CQUUvQyxJQUFJaUQsa0JBQWtCLE1BQU07d0JBQzFCWCxpQkFBaUIsQUFBQ0EsbUJBQW1CLE9BQ2xCVyxnQkFDQyxBQUFDLEdBQW1CQSxPQUFqQlgsZ0JBQStCLE9BQWRXO29CQUMxQztvQkFFQSxPQUFPWDtnQkFDVCxHQUFHO2dCQUVILE9BQU9BO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCM0MsT0FBTztnQkFDM0IsSUFBTTBDLHNCQUFzQixJQUFJLENBQUMvQixlQUFlLENBQUMsU0FBQytCLHFCQUFxQnRDO29CQUNyRSxJQUFNUSxXQUFXUixXQUNYOEMsb0JBQW9CdEMsU0FBUzRCLFdBQVcsQ0FBQ3hDO29CQUUvQyxJQUFJa0Qsc0JBQXNCLE1BQU07d0JBQzlCUixzQkFBc0IsQUFBQ0Esd0JBQXdCLE9BQ3RCUSxvQkFDQyxBQUFDLEdBQ2pDQSxPQURtQ1IscUJBQW9CLE1BQ3JDLE9BQWxCUTtvQkFDSTtvQkFFQSxPQUFPUjtnQkFDVCxHQUFHO2dCQUVILE9BQU9BO1lBQ1Q7Ozs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUMsS0FBSztnQkFDdEIsSUFBSUEsVUFBVWhCLFdBQVc7b0JBQ3ZCZ0IsUUFoU2U5RCxVQWdTRyxHQUFHO2dCQUN2QjtnQkFFQSxJQUFNSSxhQUFhLE1BQ2IyRCxPQUFPQyxjQUFJLENBQUNILFdBQVcsQ0FBQ0MsT0FBTzFEO2dCQUVyQyxPQUFPMkQ7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNILEtBQUssRUFBRTdELFNBQVM7Z0JBQ25DLElBQUlBLGNBQWM2QyxXQUFXO29CQUMzQjdDLFlBQVk2RCxPQUFRLEdBQUc7b0JBRXZCQSxRQTdTZTlELFVBNlNHLEdBQUc7Z0JBQ3ZCO2dCQUVBLElBQU1JLGFBQWEsTUFDYjJELE9BQU9DLGNBQUksQ0FBQ0MsYUFBYSxDQUFDSCxPQUFPN0Q7Z0JBRXZDLE9BQU84RDtZQUNUOzs7V0FwVG1CL0Q7cUJBQWlCZ0UsY0FBSSJ9
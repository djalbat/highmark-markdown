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
var _occamdom = require("occam-dom");
var _node = /*#__PURE__*/ _interop_require_default(require("../mixins/node"));
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
            key: "getMarkdownNode",
            value: function getMarkdownNode() {
                var outerNode = this.getOuterNode(), markdownNode = outerNode; ///
                return markdownNode;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                return this.outerNode.getRuleName();
            }
        },
        {
            key: "isTerminalNode",
            value: function isTerminalNode() {
                var terminalNode = false;
                return terminalNode;
            }
        },
        {
            key: "isNonTerminalNode",
            value: function isNonTerminalNode() {
                var nonTerminalNode = true;
                return nonTerminalNode;
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
            key: "lines",
            value: function lines(context) {
                var lines;
                var ref, ref1;
                ref = this.constructor, ref1 = ref.lines, lines = ref1 === void 0 ? null : ref1, ref;
                if (lines === null) {
                    lines = this.reduceChildNode(function(lines, childNode) {
                        var childNodeLines = childNode.lines(context);
                        lines += childNodeLines;
                        return lines;
                    }, 0);
                }
                return lines;
            }
        },
        {
            key: "tagName",
            value: function tagName(context) {
                var tagName = this.constructor.tagName;
                return tagName;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var className = this.constructor.className;
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
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement;
                var tagName = this.tagName(context);
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
                return domElement;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                this.domElement = this.createDOMElement(context);
                parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
                parentDOMElement = this.domElement; ///
                siblingDOMElement = null;
                this.childNodes.forEach(function(childNode) {
                    childNode.mount(parentDOMElement, siblingDOMElement, context);
                });
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                {
                    var _$parentDOMElement = this.domElement; ///
                    this.childNodes.forEach(function(childNode) {
                        childNode.unmount(_$parentDOMElement, context);
                    });
                }
                parentDOMElement.removeChild(this.domElement);
                this.domElement = null;
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
                indent = this.adjustIndent(indent);
                var childNodesHTML = this.childNodesAsHTML(indent, context);
                if (childNodesHTML !== _constants.EMPTY_STRING) {
                    var startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                    html = "".concat(indent).concat(startingTag, "\n").concat(childNodesHTML).concat(indent).concat(closingTag, "\n");
                } else {
                    var selfClosingTag = this.selfClosingTag(context);
                    html = "".concat(indent).concat(selfClosingTag, "\n");
                }
                return html;
            }
        },
        {
            key: "asPlainText",
            value: function asPlainText(context) {
                var plainText;
                var childNodesPlainText = this.childNodesAsPlainText(context);
                plainText = childNodesPlainText; ///
                return plainText;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML = this.reduceChildNode(function(childNodesHTML, childNode) {
                    var childNodeHTML = childNode.asHTML(indent, context);
                    childNodesHTML = "".concat(childNodesHTML).concat(childNodeHTML);
                    return childNodesHTML;
                }, _constants.EMPTY_STRING);
                return childNodesHTML;
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var childNodesPlainText = this.reduceChildNode(function(childNodesPlainText, childNode) {
                    var childNodePlainText = childNode.asPlainText(context);
                    childNodesPlainText = "".concat(childNodesPlainText, "\n").concat(childNodePlainText);
                    return childNodesPlainText;
                }, _constants.EMPTY_STRING);
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
                var domElement = null, node = _occamdom.Node.fromOuterNode(Class, outerNode, domElement);
                return node;
            }
        }
    ]);
    return HTMLNode;
}(_wrap_native_super(_occamdom.Node));
Object.assign(HTMLNode.prototype, _node.default);
var _default = HTMLNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBub2RlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgSFRNTE5vZGUgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBzZXRET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG91dGVyTm9kZSA9IHRoaXMuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlID0gb3V0ZXJOb2RlOyAvLy9cblxuICAgIHJldHVybiBtYXJrZG93bk5vZGU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmdldFJ1bGVOYW1lKCk7IH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICBpbmRlbnQgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcgOlxuICAgICAgICAgICAgICAgIGAke0RPVUJMRV9TUEFDRX0ke2luZGVudH1gO1xuXG4gICAgcmV0dXJuIGluZGVudDtcbiAgfVxuXG4gIGxpbmVzKGNvbnRleHQpIHtcbiAgICBsZXQgbGluZXM7XG5cbiAgICAoeyBsaW5lcyA9IG51bGwgfSA9IHRoaXMuY29uc3RydWN0b3IpO1xuXG4gICAgaWYgKGxpbmVzID09PSBudWxsKSB7XG4gICAgICBsaW5lcyA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChsaW5lcywgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZUxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpO1xuXG4gICAgICAgIGxpbmVzICs9IGNoaWxkTm9kZUxpbmVzO1xuXG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIHRhZ05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiB0YWdOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBjbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSBgPC8ke3RhZ05hbWV9PmA7XG5cbiAgICByZXR1cm4gY2xvc2luZ1RhZztcbiAgfVxuXG4gIHN0YXJ0aW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzSFRNTCA9IChjbGFzc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhdHRyaWJ1dGVIVE1MID0gKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9PmA7XG5cbiAgICByZXR1cm4gc3RhcnRpbmdUYWc7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc0hUTUwgPSAoY2xhc3NOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYXR0cmlidXRlSFRNTCA9ICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHNlbGZDbG9zaW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9JHthdHRyaWJ1dGVIVE1MfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KTtcblxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkge1xuICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KVxuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAge1xuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY2hpbGROb2RlLnVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSBpbmRlbnQ7IC8vL1xuXG4gICAgICBpbmRlbnQgPSBFTVBUWV9TVFJJTkc7XG4gICAgfVxuXG4gICAgbGV0IGh0bWw7XG5cbiAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChjaGlsZE5vZGVzSFRNTCAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9XG4ke2NoaWxkTm9kZXNIVE1MfSR7aW5kZW50fSR7Y2xvc2luZ1RhZ31cbmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGZDbG9zaW5nVGFnID0gdGhpcy5zZWxmQ2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IGAke2luZGVudH0ke3NlbGZDbG9zaW5nVGFnfVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBsZXQgcGxhaW5UZXh0O1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMuY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgcGxhaW5UZXh0ID0gY2hpbGROb2Rlc1BsYWluVGV4dDsgIC8vL1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc0hUTUwsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlSFRNTCA9IGNoaWxkTm9kZS5hc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc0hUTUwgPSBgJHtjaGlsZE5vZGVzSFRNTH0ke2NoaWxkTm9kZUhUTUx9YDtcblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNQbGFpblRleHQgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgoY2hpbGROb2Rlc1BsYWluVGV4dCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQbGFpblRleHQgPSBjaGlsZE5vZGUuYXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNQbGFpblRleHQgPSBgJHtjaGlsZE5vZGVzUGxhaW5UZXh0fVxuJHtjaGlsZE5vZGVQbGFpblRleHR9YDtcblxuICAgICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBOb2RlLmZyb21Ob3RoaW5nKENsYXNzLCBkb21FbGVtZW50KTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSkge1xuICAgIGlmIChvdXRlck5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3V0ZXJOb2RlID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IE5vZGUuZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlLCBkb21FbGVtZW50KTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oSFRNTE5vZGUucHJvdG90eXBlLCBub2RlTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgSFRNTE5vZGU7Il0sIm5hbWVzIjpbIkhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJnZXRNYXJrZG93bk5vZGUiLCJnZXRPdXRlck5vZGUiLCJtYXJrZG93bk5vZGUiLCJnZXRSdWxlTmFtZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJhZGp1c3RJbmRlbnQiLCJpbmRlbnQiLCJFTVBUWV9TVFJJTkciLCJET1VCTEVfU1BBQ0UiLCJsaW5lcyIsImNvbnRleHQiLCJjb25zdHJ1Y3RvciIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUxpbmVzIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImNsb3NpbmdUYWciLCJzdGFydGluZ1RhZyIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsImNsYXNzSFRNTCIsImF0dHJpYnV0ZUhUTUwiLCJzZWxmQ2xvc2luZ1RhZyIsImNyZWF0ZURPTUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRBdHRyaWJ1dGUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsImZvckVhY2giLCJ1bm1vdW50IiwicmVtb3ZlQ2hpbGQiLCJhc0hUTUwiLCJ1bmRlZmluZWQiLCJodG1sIiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJjaGlsZE5vZGVzUGxhaW5UZXh0IiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiY2hpbGROb2RlSFRNTCIsImNoaWxkTm9kZVBsYWluVGV4dCIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJub2RlIiwiTm9kZSIsImZyb21PdXRlck5vZGUiLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxUkE7OztlQUFBOzs7d0JBblJxQjsyREFFRTt5QkFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQUEsQUFBTUEseUJBQU47Y0FBTUE7YUFBQUEsU0FDUUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtnQ0FEckRKOztnQkFFRixrQkFGRUE7WUFFSUM7WUFBV0M7WUFBWUM7O1FBRTdCLE1BQUtDLFVBQVUsR0FBR0E7OztrQkFKaEJKOztZQU9KSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7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
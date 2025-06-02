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
var _dom = require("../utilities/dom");
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
            key: "resetDOMElement",
            value: function resetDOMElement() {
                this.domElement = null;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var markdownNode = this.getMarkdownNode(), ruleName = markdownNode.getRuleName();
                return ruleName;
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
            key: "getMarkdownNode",
            value: function getMarkdownNode() {
                var outerNode = this.getOuterNode(), markdownNode = outerNode; ///
                return markdownNode;
            }
        },
        {
            key: "getParentHTMLNode",
            value: function getParentHTMLNode() {
                var parentNode = this.getParentNode(), parentHTMLNode = parentNode; ///
                return parentHTMLNode;
            }
        },
        {
            key: "getChildHTMLNodes",
            value: function getChildHTMLNodes() {
                var childNodes = this.getChildNodes(), childHTMLNodes = childNodes; ///
                return childHTMLNodes;
            }
        },
        {
            key: "getAncestorHTMLNodes",
            value: function getAncestorHTMLNodes() {
                var ancestorNodes = this.getAncestorNodes(), ancestorHTMLNodes = ancestorNodes; ///
                return ancestorHTMLNodes;
            }
        },
        {
            key: "someAncestorHTMLNode",
            value: function someAncestorHTMLNode(callback) {
                return this.someAncestorNode(callback);
            }
        },
        {
            key: "removeChildHTMLNodes",
            value: function removeChildHTMLNodes() {
                var removedChildHTMLNodes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                var childHTMLNodes;
                childHTMLNodes = this.getChildHTMLNodes();
                if (removedChildHTMLNodes !== null) {
                    childHTMLNodes = childHTMLNodes.filter(function(childHTMLNode) {
                        var markdownNode = childHTMLNode.getMarkdownNode(), index = removedChildHTMLNodes.findIndex(function(removedChildHTMLNode) {
                            var markdownNodeMatches = removedChildHTMLNode.matchMarkdownNode(markdownNode);
                            if (markdownNodeMatches) {
                                return true;
                            }
                        });
                        if (index !== -1) {
                            return true;
                        }
                    });
                }
                var removedChildNodes = childHTMLNodes; ///
                removedChildNodes = this.removeChildNodes(removedChildNodes);
                removedChildHTMLNodes = removedChildNodes; ///
                return removedChildHTMLNodes;
            }
        },
        {
            key: "matchMarkdownNode",
            value: function matchMarkdownNode(markdownNode) {
                var outerNode = markdownNode, outerNodeMatches = this.outerNode === outerNode, markdownNodeMatches = outerNodeMatches; ///
                return markdownNodeMatches;
            }
        },
        {
            key: "retrieveHTMLNode",
            value: function retrieveHTMLNode(callback) {
                var htmlNode = null;
                if (htmlNode === null) {
                    var childHTMLNodes = this.getChildHTMLNodes();
                    childHTMLNodes.some(function(childHTMLNode) {
                        htmlNode = childHTMLNode.retrieveHTMLNode(callback);
                        if (htmlNode !== null) {
                            return true;
                        }
                    });
                }
                if (htmlNode === null) {
                    htmlNode = this;
                    var result = callback(htmlNode);
                    if (!result) {
                        htmlNode = null;
                    }
                }
                return htmlNode;
            }
        },
        {
            key: "addChildHTMLNodes",
            value: function addChildHTMLNodes(addedChildHTMLNodes, startIndex) {
                var addedChildNodes = addedChildHTMLNodes; ///
                this.addChildNodes(addedChildNodes, startIndex);
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
            key: "depth",
            value: function depth() {
                var _this_constructor = this.constructor, _this_constructor_depth = _this_constructor.depth, depth = _this_constructor_depth === void 0 ? null : _this_constructor_depth;
                return depth;
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
                siblingDOMElement !== null ? (0, _dom.insertAfter)(this.domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(this.domElement, parentDOMElement);
                parentDOMElement = this.domElement; ///
                siblingDOMElement = null;
                this.childNodes.forEach(function(childNode) {
                    siblingDOMElement = childNode.mount(parentDOMElement, siblingDOMElement, context);
                });
                siblingDOMElement = this.domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement) {
                {
                    var _$parentDOMElement = this.domElement; ///
                    this.childNodes.forEach(function(childNode) {
                        childNode.unmount(_$parentDOMElement);
                    });
                }
                (0, _dom.remove)(this.domElement, parentDOMElement);
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
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _Node;
                if (Class === undefined) {
                    Class = HTMLNode; ///
                }
                var domElement = null, htmlNode = (_Node = _occamdom.Node).fromNothing.apply(_Node, [
                    Class,
                    domElement
                ].concat(_to_consumable_array(remainingArguments)));
                return htmlNode;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(Class, outerNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Node;
                if (outerNode === undefined) {
                    outerNode = Class; ///
                    Class = HTMLNode; ///
                }
                var domElement = null, htmlNode = (_Node = _occamdom.Node).fromOuterNode.apply(_Node, [
                    Class,
                    outerNode,
                    domElement
                ].concat(_to_consumable_array(remainingArguments)));
                return htmlNode;
            }
        },
        {
            key: "fromDOMElement",
            value: function fromDOMElement(Class, domElement) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Node;
                if (domElement === undefined) {
                    domElement = Class; ///
                    Class = HTMLNode; ///
                }
                var htmlNode = (_Node = _occamdom.Node).fromNothing.apply(_Node, [
                    Class,
                    domElement
                ].concat(_to_consumable_array(remainingArguments)));
                return htmlNode;
            }
        },
        {
            key: "fromChildHTMLNodes",
            value: function fromChildHTMLNodes(Class, childHTMLNodes) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Node;
                if (childHTMLNodes === undefined) {
                    childHTMLNodes = Class; ///
                    Class = HTMLNode; ///
                }
                var childNodes = childHTMLNodes, domElement = null, htmlNode = (_Node = _occamdom.Node).fromChildNodes.apply(_Node, [
                    Class,
                    childNodes,
                    domElement
                ].concat(_to_consumable_array(remainingArguments)));
                return htmlNode;
            }
        }
    ]);
    return HTMLNode;
}(_wrap_native_super(_occamdom.Node));
Object.assign(HTMLNode.prototype, _node.default);
var _default = HTMLNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBub2RlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZSwgaW5zZXJ0QWZ0ZXIsIGluc2VydEJlZm9yZWhhbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5jbGFzcyBIVE1MTm9kZSBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHNldERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICByZXNldERPTUVsZW1lbnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBtYXJrZG93bk5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG91dGVyTm9kZSA9IHRoaXMuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlID0gb3V0ZXJOb2RlOyAvLy9cblxuICAgIHJldHVybiBtYXJrZG93bk5vZGU7XG4gIH1cblxuICBnZXRQYXJlbnRIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgcGFyZW50SFRNTE5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyZW50SFRNTE5vZGU7XG4gIH1cblxuICBnZXRDaGlsZEhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGRIVE1MTm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRIVE1MTm9kZXM7XG4gIH1cblxuICBnZXRBbmNlc3RvckhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gdGhpcy5nZXRBbmNlc3Rvck5vZGVzKCksXG4gICAgICAgICAgYW5jZXN0b3JIVE1MTm9kZXMgPSBhbmNlc3Rvck5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gYW5jZXN0b3JIVE1MTm9kZXM7XG4gIH1cblxuICBzb21lQW5jZXN0b3JIVE1MTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5zb21lQW5jZXN0b3JOb2RlKGNhbGxiYWNrKTsgfVxuXG4gIHJlbW92ZUNoaWxkSFRNTE5vZGVzKHJlbW92ZWRDaGlsZEhUTUxOb2RlcyA9IG51bGwpIHtcbiAgICBsZXQgY2hpbGRIVE1MTm9kZXM7XG5cbiAgICBjaGlsZEhUTUxOb2RlcyA9IHRoaXMuZ2V0Q2hpbGRIVE1MTm9kZXMoKTtcblxuICAgIGlmIChyZW1vdmVkQ2hpbGRIVE1MTm9kZXMgIT09IG51bGwpIHtcbiAgICAgIGNoaWxkSFRNTE5vZGVzID0gY2hpbGRIVE1MTm9kZXMuZmlsdGVyKChjaGlsZEhUTUxOb2RlKSA9PiB7IC8vL1xuICAgICAgICBjb25zdCBtYXJrZG93bk5vZGUgPSBjaGlsZEhUTUxOb2RlLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgICAgICBpbmRleCA9IHJlbW92ZWRDaGlsZEhUTUxOb2Rlcy5maW5kSW5kZXgoKHJlbW92ZWRDaGlsZEhUTUxOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2Rvd25Ob2RlTWF0Y2hlcyA9IHJlbW92ZWRDaGlsZEhUTUxOb2RlLm1hdGNoTWFya2Rvd25Ob2RlKG1hcmtkb3duTm9kZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWFya2Rvd25Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCByZW1vdmVkQ2hpbGROb2RlcyA9IGNoaWxkSFRNTE5vZGVzOyAgLy8vXG5cbiAgICByZW1vdmVkQ2hpbGROb2RlcyA9IHRoaXMucmVtb3ZlQ2hpbGROb2RlcyhyZW1vdmVkQ2hpbGROb2Rlcyk7XG5cbiAgICByZW1vdmVkQ2hpbGRIVE1MTm9kZXMgPSByZW1vdmVkQ2hpbGROb2RlczsgIC8vL1xuXG4gICAgcmV0dXJuIHJlbW92ZWRDaGlsZEhUTUxOb2RlcztcbiAgfVxuXG4gIG1hdGNoTWFya2Rvd25Ob2RlKG1hcmtkb3duTm9kZSkge1xuICAgIGNvbnN0IG91dGVyTm9kZSA9IG1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgb3V0ZXJOb2RlTWF0Y2hlcyA9ICh0aGlzLm91dGVyTm9kZSA9PT0gb3V0ZXJOb2RlKSxcbiAgICAgICAgICBtYXJrZG93bk5vZGVNYXRjaGVzID0gb3V0ZXJOb2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gbWFya2Rvd25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIHJldHJpZXZlSFRNTE5vZGUoY2FsbGJhY2spIHtcbiAgICBsZXQgaHRtbE5vZGUgPSBudWxsO1xuXG4gICAgaWYgKGh0bWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBjaGlsZEhUTUxOb2RlcyA9IHRoaXMuZ2V0Q2hpbGRIVE1MTm9kZXMoKTtcblxuICAgICAgY2hpbGRIVE1MTm9kZXMuc29tZSgoY2hpbGRIVE1MTm9kZSkgPT4ge1xuICAgICAgICBodG1sTm9kZSA9IGNoaWxkSFRNTE5vZGUucmV0cmlldmVIVE1MTm9kZShjYWxsYmFjaylcblxuICAgICAgICBpZiAoaHRtbE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGh0bWxOb2RlID09PSBudWxsKSB7XG4gICAgICBodG1sTm9kZSA9IHRoaXM7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGh0bWxOb2RlKTtcblxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgaHRtbE5vZGUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sTm9kZTtcbiAgfVxuXG4gIGFkZENoaWxkSFRNTE5vZGVzKGFkZGVkQ2hpbGRIVE1MTm9kZXMsIHN0YXJ0SW5kZXgpIHtcbiAgICBjb25zdCBhZGRlZENoaWxkTm9kZXMgPSBhZGRlZENoaWxkSFRNTE5vZGVzOyAgLy8vXG5cbiAgICB0aGlzLmFkZENoaWxkTm9kZXMoYWRkZWRDaGlsZE5vZGVzLCBzdGFydEluZGV4KTtcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICBpbmRlbnQgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcgOlxuICAgICAgICAgICAgICAgIGAke0RPVUJMRV9TUEFDRX0ke2luZGVudH1gO1xuXG4gICAgcmV0dXJuIGluZGVudDtcbiAgfVxuXG4gIGxpbmVzKGNvbnRleHQpIHtcbiAgICBsZXQgbGluZXM7XG5cbiAgICAoeyBsaW5lcyA9IG51bGwgfSA9IHRoaXMuY29uc3RydWN0b3IpO1xuXG4gICAgaWYgKGxpbmVzID09PSBudWxsKSB7XG4gICAgICBsaW5lcyA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChsaW5lcywgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZUxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpO1xuXG4gICAgICAgIGxpbmVzICs9IGNoaWxkTm9kZUxpbmVzO1xuXG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIHRhZ05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiB0YWdOYW1lO1xuICB9XG5cbiAgZGVwdGgoKSB7XG4gICAgY29uc3QgeyBkZXB0aCA9IG51bGwgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGNsb3NpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IGA8LyR7dGFnTmFtZX0+YDtcblxuICAgIHJldHVybiBjbG9zaW5nVGFnO1xuICB9XG5cbiAgc3RhcnRpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYXR0cmlidXRlVmFsdWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NIVE1MID0gKGNsYXNzTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGF0dHJpYnV0ZUhUTUwgPSAoKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpICYmIChhdHRyaWJ1dGVWYWx1ZSAhPT0gbnVsbCkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzdGFydGluZ1RhZyA9IGA8JHt0YWdOYW1lfSR7Y2xhc3NIVE1MfSR7YXR0cmlidXRlSFRNTH0+YDtcblxuICAgIHJldHVybiBzdGFydGluZ1RhZztcbiAgfVxuXG4gIHNlbGZDbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzSFRNTCA9IChjbGFzc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhdHRyaWJ1dGVIVE1MID0gKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc2VsZkNsb3NpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9Lz5gO1xuXG4gICAgcmV0dXJuIHNlbGZDbG9zaW5nVGFnO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IG51bGw7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IG51bGw7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCk7XG5cbiAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpO1xuXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSB7XG4gICAgICBkb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIChzaWJsaW5nRE9NRWxlbWVudCAhPT0gbnVsbCkgP1xuICAgICAgaW5zZXJ0QWZ0ZXIodGhpcy5kb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCkgOlxuICAgICAgICBpbnNlcnRCZWZvcmVoYW5kKHRoaXMuZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gY2hpbGROb2RlLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICB7XG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjaGlsZE5vZGUudW5tb3VudChwYXJlbnRET01FbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZSh0aGlzLmRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gaW5kZW50OyAvLy9cblxuICAgICAgaW5kZW50ID0gRU1QVFlfU1RSSU5HO1xuICAgIH1cblxuICAgIGxldCBodG1sO1xuXG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZWxmQ2xvc2luZ1RhZyA9IHRoaXMuc2VsZkNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzZWxmQ2xvc2luZ1RhZ31cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBhc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgbGV0IHBsYWluVGV4dDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNQbGFpblRleHQgPSB0aGlzLmNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgIHBsYWluVGV4dCA9IGNoaWxkTm9kZXNQbGFpblRleHQ7ICAvLy9cblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNoaWxkTm9kZXNIVE1MLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUhUTUwgPSBjaGlsZE5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7Y2hpbGROb2Rlc0hUTUx9JHtjaGlsZE5vZGVIVE1MfWA7XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNoaWxkTm9kZXNQbGFpblRleHQsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGxhaW5UZXh0ID0gY2hpbGROb2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gYCR7Y2hpbGROb2Rlc1BsYWluVGV4dH1cbiR7Y2hpbGROb2RlUGxhaW5UZXh0fWA7XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIGh0bWxOb2RlID0gTm9kZS5mcm9tTm90aGluZyhDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBodG1sTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChvdXRlck5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3V0ZXJOb2RlID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgaHRtbE5vZGUgPSBOb2RlLmZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSwgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBodG1sTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGRvbUVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZG9tRWxlbWVudCA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgaHRtbE5vZGUgPSBOb2RlLmZyb21Ob3RoaW5nKENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGh0bWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21DaGlsZEhUTUxOb2RlcyhDbGFzcywgY2hpbGRIVE1MTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjaGlsZEhUTUxOb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZEhUTUxOb2RlcyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBjaGlsZEhUTUxOb2RlcywgIC8vL1xuICAgICAgICAgIGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIGh0bWxOb2RlID0gTm9kZS5mcm9tQ2hpbGROb2RlcyhDbGFzcywgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBodG1sTm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEhUTUxOb2RlLnByb3RvdHlwZSwgbm9kZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEhUTUxOb2RlO1xuIl0sIm5hbWVzIjpbIkhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJyZXNldERPTUVsZW1lbnQiLCJnZXRSdWxlTmFtZSIsIm1hcmtkb3duTm9kZSIsImdldE1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldE91dGVyTm9kZSIsImdldFBhcmVudEhUTUxOb2RlIiwiZ2V0UGFyZW50Tm9kZSIsInBhcmVudEhUTUxOb2RlIiwiZ2V0Q2hpbGRIVE1MTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGRIVE1MTm9kZXMiLCJnZXRBbmNlc3RvckhUTUxOb2RlcyIsImFuY2VzdG9yTm9kZXMiLCJnZXRBbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JIVE1MTm9kZXMiLCJzb21lQW5jZXN0b3JIVE1MTm9kZSIsImNhbGxiYWNrIiwic29tZUFuY2VzdG9yTm9kZSIsInJlbW92ZUNoaWxkSFRNTE5vZGVzIiwicmVtb3ZlZENoaWxkSFRNTE5vZGVzIiwiZmlsdGVyIiwiY2hpbGRIVE1MTm9kZSIsImluZGV4IiwiZmluZEluZGV4IiwicmVtb3ZlZENoaWxkSFRNTE5vZGUiLCJtYXJrZG93bk5vZGVNYXRjaGVzIiwibWF0Y2hNYXJrZG93bk5vZGUiLCJyZW1vdmVkQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkTm9kZXMiLCJvdXRlck5vZGVNYXRjaGVzIiwicmV0cmlldmVIVE1MTm9kZSIsImh0bWxOb2RlIiwic29tZSIsInJlc3VsdCIsImFkZENoaWxkSFRNTE5vZGVzIiwiYWRkZWRDaGlsZEhUTUxOb2RlcyIsInN0YXJ0SW5kZXgiLCJhZGRlZENoaWxkTm9kZXMiLCJhZGRDaGlsZE5vZGVzIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiRE9VQkxFX1NQQUNFIiwibGluZXMiLCJjb250ZXh0IiwiY29uc3RydWN0b3IiLCJyZWR1Y2VDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVMaW5lcyIsInRhZ05hbWUiLCJkZXB0aCIsImNsYXNzTmFtZSIsImNsb3NpbmdUYWciLCJzdGFydGluZ1RhZyIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsImNsYXNzSFRNTCIsImF0dHJpYnV0ZUhUTUwiLCJzZWxmQ2xvc2luZ1RhZyIsImNyZWF0ZURPTUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRBdHRyaWJ1dGUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlaGFuZCIsImZvckVhY2giLCJ1bm1vdW50IiwicmVtb3ZlIiwiYXNIVE1MIiwidW5kZWZpbmVkIiwiaHRtbCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0IiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsImNoaWxkTm9kZUhUTUwiLCJjaGlsZE5vZGVQbGFpblRleHQiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiTm9kZSIsImZyb21PdXRlck5vZGUiLCJmcm9tRE9NRWxlbWVudCIsImZyb21DaGlsZEhUTUxOb2RlcyIsImZyb21DaGlsZE5vZGVzIiwicHJvdG90eXBlIiwibm9kZU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcWFBOzs7ZUFBQTs7O3dCQW5hcUI7MkRBRUU7eUJBRW9CO21CQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTthQUFBQSxTQUNRQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVO2dDQURyREo7O2dCQUVGLGtCQUZFQTtZQUVJQztZQUFXQztZQUFZQzs7UUFFN0IsTUFBS0MsVUFBVSxHQUFHQTs7O2tCQUpoQko7O1lBT0pLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixVQUFVO2dCQUN0QixJ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
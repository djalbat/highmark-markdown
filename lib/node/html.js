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
            key: "someChildHTMLNode",
            value: function someChildHTMLNode(callback) {
                return this.someChildNode(callback);
            }
        },
        {
            key: "reduceChildHTMLNode",
            value: function reduceChildHTMLNode(callback, initialValue) {
                return this.reduceChildNode(callback, initialValue);
            }
        },
        {
            key: "someAncestorHTMLNode",
            value: function someAncestorHTMLNode(callback) {
                return this.someAncestorNode(callback);
            }
        },
        {
            key: "someDescendantHTMLNode",
            value: function someDescendantHTMLNode(callback) {
                return this.someDescendantNode(callback);
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
                var htmlNode;
                htmlNode = null;
                var childHTMLNodes = this.getChildHTMLNodes();
                childHTMLNodes.some(function(childHTMLNode) {
                    htmlNode = childHTMLNode.retrieveHTMLNode(callback);
                    if (htmlNode !== null) {
                        return true;
                    }
                });
                if (htmlNode === null) {
                    htmlNode = this; ///
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
            value: function unmount(parentDOMElement, context) {
                {
                    var _$parentDOMElement = this.domElement; ///
                    this.childNodes.forEach(function(childNode) {
                        childNode.unmount(_$parentDOMElement, context);
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
                var domElement = null, node = (_Node = _occamdom.Node).fromNothing.apply(_Node, [
                    Class,
                    domElement
                ].concat(_to_consumable_array(remainingArguments)));
                return node;
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
                var domElement = null, node = (_Node = _occamdom.Node).fromOuterNode.apply(_Node, [
                    Class,
                    outerNode,
                    domElement
                ].concat(_to_consumable_array(remainingArguments)));
                return node;
            }
        },
        {
            key: "fromChildNodes",
            value: function fromChildNodes(Class, childNodes) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Node;
                if (childNodes === undefined) {
                    childNodes = Class; ///
                    Class = HTMLNode; ///
                }
                var domElement = null, node = (_Node = _occamdom.Node).fromChildNodes.apply(_Node, [
                    Class,
                    childNodes,
                    domElement
                ].concat(_to_consumable_array(remainingArguments)));
                return node;
            }
        }
    ]);
    return HTMLNode;
}(_wrap_native_super(_occamdom.Node));
Object.assign(HTMLNode.prototype, _node.default);
var _default = HTMLNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBub2RlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZSwgaW5zZXJ0QWZ0ZXIsIGluc2VydEJlZm9yZWhhbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5jbGFzcyBIVE1MTm9kZSBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHNldERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICByZXNldERPTUVsZW1lbnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBtYXJrZG93bk5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG91dGVyTm9kZSA9IHRoaXMuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlID0gb3V0ZXJOb2RlOyAvLy9cblxuICAgIHJldHVybiBtYXJrZG93bk5vZGU7XG4gIH1cblxuICBnZXRQYXJlbnRIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgcGFyZW50SFRNTE5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyZW50SFRNTE5vZGU7XG4gIH1cblxuICBnZXRDaGlsZEhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGRIVE1MTm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRIVE1MTm9kZXM7XG4gIH1cblxuICBnZXRBbmNlc3RvckhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gdGhpcy5nZXRBbmNlc3Rvck5vZGVzKCksXG4gICAgICAgICAgYW5jZXN0b3JIVE1MTm9kZXMgPSBhbmNlc3Rvck5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gYW5jZXN0b3JIVE1MTm9kZXM7XG4gIH1cblxuICBzb21lQ2hpbGRIVE1MTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5zb21lQ2hpbGROb2RlKGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZUNoaWxkSFRNTE5vZGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBzb21lQW5jZXN0b3JIVE1MTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5zb21lQW5jZXN0b3JOb2RlKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVEZXNjZW5kYW50SFRNTE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZURlc2NlbmRhbnROb2RlKGNhbGxiYWNrKTsgfVxuXG4gIG1hdGNoTWFya2Rvd25Ob2RlKG1hcmtkb3duTm9kZSkge1xuICAgIGNvbnN0IG91dGVyTm9kZSA9IG1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgb3V0ZXJOb2RlTWF0Y2hlcyA9ICh0aGlzLm91dGVyTm9kZSA9PT0gb3V0ZXJOb2RlKSxcbiAgICAgICAgICBtYXJrZG93bk5vZGVNYXRjaGVzID0gb3V0ZXJOb2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gbWFya2Rvd25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIHJldHJpZXZlSFRNTE5vZGUoY2FsbGJhY2spIHtcbiAgICBsZXQgaHRtbE5vZGU7XG5cbiAgICBodG1sTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBjaGlsZEhUTUxOb2RlcyA9IHRoaXMuZ2V0Q2hpbGRIVE1MTm9kZXMoKTtcblxuICAgIGNoaWxkSFRNTE5vZGVzLnNvbWUoKGNoaWxkSFRNTE5vZGUpID0+IHtcbiAgICAgIGh0bWxOb2RlID0gY2hpbGRIVE1MTm9kZS5yZXRyaWV2ZUhUTUxOb2RlKGNhbGxiYWNrKVxuXG4gICAgICBpZiAoaHRtbE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaHRtbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGh0bWxOb2RlID0gdGhpczsgIC8vL1xuXG4gICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhodG1sTm9kZSk7XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGh0bWxOb2RlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbE5vZGU7XG4gIH1cblxuICBhZGRDaGlsZEhUTUxOb2RlcyhhZGRlZENoaWxkSFRNTE5vZGVzLCBzdGFydEluZGV4KSB7XG4gICAgY29uc3QgYWRkZWRDaGlsZE5vZGVzID0gYWRkZWRDaGlsZEhUTUxOb2RlczsgIC8vL1xuXG4gICAgdGhpcy5hZGRDaGlsZE5vZGVzKGFkZGVkQ2hpbGROb2Rlcywgc3RhcnRJbmRleCk7XG4gIH1cblxuICByZW1vdmVDaGlsZEhUTUxOb2RlcyhyZW1vdmVkQ2hpbGRIVE1MTm9kZXMgPSBudWxsKSB7XG4gICAgbGV0IGNoaWxkSFRNTE5vZGVzO1xuXG4gICAgY2hpbGRIVE1MTm9kZXMgPSB0aGlzLmdldENoaWxkSFRNTE5vZGVzKCk7XG5cbiAgICBpZiAocmVtb3ZlZENoaWxkSFRNTE5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjaGlsZEhUTUxOb2RlcyA9IGNoaWxkSFRNTE5vZGVzLmZpbHRlcigoY2hpbGRIVE1MTm9kZSkgPT4geyAvLy9cbiAgICAgICAgY29uc3QgbWFya2Rvd25Ob2RlID0gY2hpbGRIVE1MTm9kZS5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICAgICAgaW5kZXggPSByZW1vdmVkQ2hpbGRIVE1MTm9kZXMuZmluZEluZGV4KChyZW1vdmVkQ2hpbGRIVE1MTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtkb3duTm9kZU1hdGNoZXMgPSByZW1vdmVkQ2hpbGRIVE1MTm9kZS5tYXRjaE1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtkb3duTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlZENoaWxkTm9kZXMgPSBjaGlsZEhUTUxOb2RlczsgIC8vL1xuXG4gICAgcmVtb3ZlZENoaWxkTm9kZXMgPSB0aGlzLnJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpO1xuXG4gICAgcmVtb3ZlZENoaWxkSFRNTE5vZGVzID0gcmVtb3ZlZENoaWxkTm9kZXM7ICAvLy9cblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGRIVE1MTm9kZXM7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HIDpcbiAgICAgICAgICAgICAgICBgJHtET1VCTEVfU1BBQ0V9JHtpbmRlbnR9YDtcblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBsaW5lcyhjb250ZXh0KSB7XG4gICAgbGV0IGxpbmVzO1xuXG4gICAgKHsgbGluZXMgPSBudWxsIH0gPSB0aGlzLmNvbnN0cnVjdG9yKTtcblxuICAgIGlmIChsaW5lcyA9PT0gbnVsbCkge1xuICAgICAgbGluZXMgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgobGluZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVMaW5lcyA9IGNoaWxkTm9kZS5saW5lcyhjb250ZXh0KTtcblxuICAgICAgICBsaW5lcyArPSBjaGlsZE5vZGVMaW5lcztcblxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cblxuICB0YWdOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gdGFnTmFtZTtcbiAgfVxuXG4gIGRlcHRoKCkge1xuICAgIGNvbnN0IHsgZGVwdGggPSBudWxsIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBjbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSBgPC8ke3RhZ05hbWV9PmA7XG5cbiAgICByZXR1cm4gY2xvc2luZ1RhZztcbiAgfVxuXG4gIHN0YXJ0aW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzSFRNTCA9IChjbGFzc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhdHRyaWJ1dGVIVE1MID0gKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9PmA7XG5cbiAgICByZXR1cm4gc3RhcnRpbmdUYWc7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc0hUTUwgPSAoY2xhc3NOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYXR0cmlidXRlSFRNTCA9ICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHNlbGZDbG9zaW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9JHthdHRyaWJ1dGVIVE1MfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KTtcblxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkge1xuICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgIGluc2VydEFmdGVyKHRoaXMuZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpIDpcbiAgICAgICAgaW5zZXJ0QmVmb3JlaGFuZCh0aGlzLmRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGNoaWxkTm9kZS5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAge1xuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY2hpbGROb2RlLnVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmUodGhpcy5kb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IG51bGw7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IGluZGVudDsgLy8vXG5cbiAgICAgIGluZGVudCA9IEVNUFRZX1NUUklORztcbiAgICB9XG5cbiAgICBsZXQgaHRtbDtcblxuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNIVE1MICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2VsZkNsb3NpbmdUYWcgPSB0aGlzLnNlbGZDbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gYCR7aW5kZW50fSR7c2VsZkNsb3NpbmdUYWd9XG5gO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGxldCBwbGFpblRleHQ7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gdGhpcy5jaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCk7XG5cbiAgICBwbGFpblRleHQgPSBjaGlsZE5vZGVzUGxhaW5UZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzSFRNTCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVIVE1MID0gY2hpbGROb2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke2NoaWxkTm9kZXNIVE1MfSR7Y2hpbGROb2RlSFRNTH1gO1xuXG4gICAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzUGxhaW5UZXh0LCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dCA9IGNoaWxkTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IGAke2NoaWxkTm9kZXNQbGFpblRleHR9XG4ke2NoaWxkTm9kZVBsYWluVGV4dH1gO1xuXG4gICAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IEhUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gTm9kZS5mcm9tTm90aGluZyhDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKG91dGVyTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvdXRlck5vZGUgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IEhUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gTm9kZS5mcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2hpbGROb2RlcyhDbGFzcywgY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBOb2RlLmZyb21DaGlsZE5vZGVzKENsYXNzLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihIVE1MTm9kZS5wcm90b3R5cGUsIG5vZGVNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBIVE1MTm9kZTtcbiJdLCJuYW1lcyI6WyJIVE1MTm9kZSIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwicmVzZXRET01FbGVtZW50IiwiZ2V0UnVsZU5hbWUiLCJtYXJrZG93bk5vZGUiLCJnZXRNYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRPdXRlck5vZGUiLCJnZXRQYXJlbnRIVE1MTm9kZSIsImdldFBhcmVudE5vZGUiLCJwYXJlbnRIVE1MTm9kZSIsImdldENoaWxkSFRNTE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkSFRNTE5vZGVzIiwiZ2V0QW5jZXN0b3JIVE1MTm9kZXMiLCJhbmNlc3Rvck5vZGVzIiwiZ2V0QW5jZXN0b3JOb2RlcyIsImFuY2VzdG9ySFRNTE5vZGVzIiwic29tZUNoaWxkSFRNTE5vZGUiLCJjYWxsYmFjayIsInNvbWVDaGlsZE5vZGUiLCJyZWR1Y2VDaGlsZEhUTUxOb2RlIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlQ2hpbGROb2RlIiwic29tZUFuY2VzdG9ySFRNTE5vZGUiLCJzb21lQW5jZXN0b3JOb2RlIiwic29tZURlc2NlbmRhbnRIVE1MTm9kZSIsInNvbWVEZXNjZW5kYW50Tm9kZSIsIm1hdGNoTWFya2Rvd25Ob2RlIiwib3V0ZXJOb2RlTWF0Y2hlcyIsIm1hcmtkb3duTm9kZU1hdGNoZXMiLCJyZXRyaWV2ZUhUTUxOb2RlIiwiaHRtbE5vZGUiLCJzb21lIiwiY2hpbGRIVE1MTm9kZSIsInJlc3VsdCIsImFkZENoaWxkSFRNTE5vZGVzIiwiYWRkZWRDaGlsZEhUTUxOb2RlcyIsInN0YXJ0SW5kZXgiLCJhZGRlZENoaWxkTm9kZXMiLCJhZGRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGRIVE1MTm9kZXMiLCJyZW1vdmVkQ2hpbGRIVE1MTm9kZXMiLCJmaWx0ZXIiLCJpbmRleCIsImZpbmRJbmRleCIsInJlbW92ZWRDaGlsZEhUTUxOb2RlIiwicmVtb3ZlZENoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZE5vZGVzIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiRE9VQkxFX1NQQUNFIiwibGluZXMiLCJjb250ZXh0IiwiY29uc3RydWN0b3IiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVMaW5lcyIsInRhZ05hbWUiLCJkZXB0aCIsImNsYXNzTmFtZSIsImNsb3NpbmdUYWciLCJzdGFydGluZ1RhZyIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsImNsYXNzSFRNTCIsImF0dHJpYnV0ZUhUTUwiLCJzZWxmQ2xvc2luZ1RhZyIsImNyZWF0ZURPTUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRBdHRyaWJ1dGUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlaGFuZCIsImZvckVhY2giLCJ1bm1vdW50IiwicmVtb3ZlIiwiYXNIVE1MIiwidW5kZWZpbmVkIiwiaHRtbCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0IiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsImNoaWxkTm9kZUhUTUwiLCJjaGlsZE5vZGVQbGFpblRleHQiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiTm9kZSIsIm5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwiZnJvbUNoaWxkTm9kZXMiLCJwcm90b3R5cGUiLCJub2RlTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4WkE7OztlQUFBOzs7d0JBNVpxQjsyREFFRTt5QkFFb0I7bUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxJQUFBLEFBQU1BLHlCQUFOO2NBQU1BO2FBQUFBLFNBQ1FDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVU7Z0NBRHJESjs7Z0JBRUYsa0JBRkVBO1lBRUlDO1lBQVdDO1lBQVlDOztRQUU3QixNQUFLQyxVQUFVLEdBQUdBOzs7a0JBSmhCSjs7WUFPSkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNGLFVBQVU7Z0JBQ3RCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtZQUNwQjs7O1lBRUFH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
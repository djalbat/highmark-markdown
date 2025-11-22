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
            key: "someChildHTMLNode",
            value: function someChildHTMLNode(callback) {
                return this.someChildNode(callback);
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
                var outerNode = markdownNode, outerNodeMatches = this.matchOuterNode(outerNode), markdownNodeMatches = outerNodeMatches; ///
                return markdownNodeMatches;
            }
        },
        {
            key: "addChildHTMLNodes",
            value: function addChildHTMLNodes(addedChildHTMLNodes, startHTNLIndex) {
                var addedChildNodes = addedChildHTMLNodes, startIndex = startHTNLIndex; ///
                this.addChildNodes(addedChildNodes, startIndex);
            }
        },
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                if (indent !== null) {
                    indent = "".concat(_constants.DOUBLE_SPACE).concat(indent);
                }
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
                    html = indent === null ? "".concat(startingTag).concat(childNodesHTML).concat(closingTag) : "".concat(indent).concat(startingTag, "\n").concat(childNodesHTML).concat(indent).concat(closingTag, "\n");
                } else {
                    var selfClosingTag = this.selfClosingTag(context);
                    html = indent === null ? "".concat(selfClosingTag) : "".concat(indent).concat(selfClosingTag, "\n");
                }
                return html;
            }
        },
        {
            key: "asPlainText",
            value: function asPlainText(context) {
                var childNodesPlainText = this.childNodesAsPlainText(context), plainText = childNodesPlainText; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBub2RlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZSwgaW5zZXJ0QWZ0ZXIsIGluc2VydEJlZm9yZWhhbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5jbGFzcyBIVE1MTm9kZSBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHNldERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICByZXNldERPTUVsZW1lbnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBtYXJrZG93bk5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG91dGVyTm9kZSA9IHRoaXMuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlID0gb3V0ZXJOb2RlOyAvLy9cblxuICAgIHJldHVybiBtYXJrZG93bk5vZGU7XG4gIH1cblxuICBnZXRQYXJlbnRIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgcGFyZW50SFRNTE5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyZW50SFRNTE5vZGU7XG4gIH1cblxuICBnZXRDaGlsZEhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGRIVE1MTm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRIVE1MTm9kZXM7XG4gIH1cblxuICBnZXRBbmNlc3RvckhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gdGhpcy5nZXRBbmNlc3Rvck5vZGVzKCksXG4gICAgICAgICAgYW5jZXN0b3JIVE1MTm9kZXMgPSBhbmNlc3Rvck5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gYW5jZXN0b3JIVE1MTm9kZXM7XG4gIH1cblxuICByZWR1Y2VDaGlsZEhUTUxOb2RlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMucmVkdWNlQ2hpbGROb2RlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgc29tZUFuY2VzdG9ySFRNTE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZUFuY2VzdG9yTm9kZShjYWxsYmFjayk7IH1cblxuICBzb21lQ2hpbGRIVE1MTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5zb21lQ2hpbGROb2RlKGNhbGxiYWNrKTsgfVxuXG4gIHJldHJpZXZlSFRNTE5vZGUoY2FsbGJhY2spIHtcbiAgICBsZXQgaHRtbE5vZGUgPSBudWxsO1xuXG4gICAgaWYgKGh0bWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBjaGlsZEhUTUxOb2RlcyA9IHRoaXMuZ2V0Q2hpbGRIVE1MTm9kZXMoKTtcblxuICAgICAgY2hpbGRIVE1MTm9kZXMuc29tZSgoY2hpbGRIVE1MTm9kZSkgPT4ge1xuICAgICAgICBodG1sTm9kZSA9IGNoaWxkSFRNTE5vZGUucmV0cmlldmVIVE1MTm9kZShjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKGh0bWxOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChodG1sTm9kZSA9PT0gbnVsbCkge1xuICAgICAgaHRtbE5vZGUgPSB0aGlzO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhodG1sTm9kZSk7XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGh0bWxOb2RlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbE5vZGU7XG4gIH1cblxuICByZW1vdmVDaGlsZEhUTUxOb2RlcyhyZW1vdmVkQ2hpbGRIVE1MTm9kZXMgPSBudWxsKSB7XG4gICAgbGV0IGNoaWxkSFRNTE5vZGVzO1xuXG4gICAgY2hpbGRIVE1MTm9kZXMgPSB0aGlzLmdldENoaWxkSFRNTE5vZGVzKCk7XG5cbiAgICBpZiAocmVtb3ZlZENoaWxkSFRNTE5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjaGlsZEhUTUxOb2RlcyA9IGNoaWxkSFRNTE5vZGVzLmZpbHRlcigoY2hpbGRIVE1MTm9kZSkgPT4geyAvLy9cbiAgICAgICAgY29uc3QgbWFya2Rvd25Ob2RlID0gY2hpbGRIVE1MTm9kZS5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICAgICAgaW5kZXggPSByZW1vdmVkQ2hpbGRIVE1MTm9kZXMuZmluZEluZGV4KChyZW1vdmVkQ2hpbGRIVE1MTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtkb3duTm9kZU1hdGNoZXMgPSByZW1vdmVkQ2hpbGRIVE1MTm9kZS5tYXRjaE1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtkb3duTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlZENoaWxkTm9kZXMgPSBjaGlsZEhUTUxOb2RlczsgIC8vL1xuXG4gICAgcmVtb3ZlZENoaWxkTm9kZXMgPSB0aGlzLnJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpO1xuXG4gICAgcmVtb3ZlZENoaWxkSFRNTE5vZGVzID0gcmVtb3ZlZENoaWxkTm9kZXM7ICAvLy9cblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGRIVE1MTm9kZXM7XG4gIH1cblxuICBtYXRjaE1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBvdXRlck5vZGUgPSBtYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIG91dGVyTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoT3V0ZXJOb2RlKG91dGVyTm9kZSksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlTWF0Y2hlcyA9IG91dGVyTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIG1hcmtkb3duTm9kZU1hdGNoZXM7XG4gIH1cblxuICBhZGRDaGlsZEhUTUxOb2RlcyhhZGRlZENoaWxkSFRNTE5vZGVzLCBzdGFydEhUTkxJbmRleCkge1xuICAgIGNvbnN0IGFkZGVkQ2hpbGROb2RlcyA9IGFkZGVkQ2hpbGRIVE1MTm9kZXMsICAvLy9cbiAgICAgICAgICBzdGFydEluZGV4ID0gc3RhcnRIVE5MSW5kZXg7ICAvLy9cblxuICAgIHRoaXMuYWRkQ2hpbGROb2RlcyhhZGRlZENoaWxkTm9kZXMsIHN0YXJ0SW5kZXgpO1xuICB9XG5cbiAgYWRqdXN0SW5kZW50KGluZGVudCkge1xuICAgIGlmIChpbmRlbnQgIT09IG51bGwpIHtcbiAgICAgIGluZGVudCA9IGAke0RPVUJMRV9TUEFDRX0ke2luZGVudH1gO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBsaW5lcyhjb250ZXh0KSB7XG4gICAgbGV0IGxpbmVzO1xuXG4gICAgKHsgbGluZXMgPSBudWxsIH0gPSB0aGlzLmNvbnN0cnVjdG9yKTtcblxuICAgIGlmIChsaW5lcyA9PT0gbnVsbCkge1xuICAgICAgbGluZXMgPSB0aGlzLnJlZHVjZUNoaWxkTm9kZSgobGluZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVMaW5lcyA9IGNoaWxkTm9kZS5saW5lcyhjb250ZXh0KTtcblxuICAgICAgICBsaW5lcyArPSBjaGlsZE5vZGVMaW5lcztcblxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cblxuICB0YWdOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gdGFnTmFtZTtcbiAgfVxuXG4gIGRlcHRoKCkge1xuICAgIGNvbnN0IHsgZGVwdGggPSBudWxsIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBjbG9zaW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSBgPC8ke3RhZ05hbWV9PmA7XG5cbiAgICByZXR1cm4gY2xvc2luZ1RhZztcbiAgfVxuXG4gIHN0YXJ0aW5nVGFnKGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZU5hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLmF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzSFRNTCA9IChjbGFzc05hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgYCBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhdHRyaWJ1dGVIVE1MID0gKChhdHRyaWJ1dGVOYW1lICE9PSBudWxsKSAmJiAoYXR0cmlidXRlVmFsdWUgIT09IG51bGwpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7YXR0cmlidXRlTmFtZX09XCIke2F0dHJpYnV0ZVZhbHVlfVwiYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSBgPCR7dGFnTmFtZX0ke2NsYXNzSFRNTH0ke2F0dHJpYnV0ZUhUTUx9PmA7XG5cbiAgICByZXR1cm4gc3RhcnRpbmdUYWc7XG4gIH1cblxuICBzZWxmQ2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc0hUTUwgPSAoY2xhc3NOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYXR0cmlidXRlSFRNTCA9ICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHNlbGZDbG9zaW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9JHthdHRyaWJ1dGVIVE1MfS8+YDtcblxuICAgIHJldHVybiBzZWxmQ2xvc2luZ1RhZztcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KTtcblxuICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkge1xuICAgICAgZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBkb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgIGluc2VydEFmdGVyKHRoaXMuZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpIDpcbiAgICAgICAgaW5zZXJ0QmVmb3JlaGFuZCh0aGlzLmRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGNoaWxkTm9kZS5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50KSB7XG4gICAge1xuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY2hpbGROb2RlLnVubW91bnQocGFyZW50RE9NRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmUodGhpcy5kb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IG51bGw7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IGluZGVudDsgLy8vXG5cbiAgICAgIGluZGVudCA9IEVNUFRZX1NUUklORztcbiAgICB9XG5cbiAgICBsZXQgaHRtbDtcblxuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNIVE1MICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBgJHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31gIDpcbiAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9XG4ke2NoaWxkTm9kZXNIVE1MfSR7aW5kZW50fSR7Y2xvc2luZ1RhZ31cbmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGZDbG9zaW5nVGFnID0gdGhpcy5zZWxmQ2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IChpbmRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIGAke3NlbGZDbG9zaW5nVGFnfWAgOlxuICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzZWxmQ2xvc2luZ1RhZ31cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBhc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMuY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpLFxuICAgICAgICAgIHBsYWluVGV4dCA9IGNoaWxkTm9kZXNQbGFpblRleHQ7ICAvLy9cblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNoaWxkTm9kZXNIVE1MLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUhUTUwgPSBjaGlsZE5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7Y2hpbGROb2Rlc0hUTUx9JHtjaGlsZE5vZGVIVE1MfWA7XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNoaWxkTm9kZXNQbGFpblRleHQsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGxhaW5UZXh0ID0gY2hpbGROb2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gYCR7Y2hpbGROb2Rlc1BsYWluVGV4dH1cbiR7Y2hpbGROb2RlUGxhaW5UZXh0fWA7XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIGh0bWxOb2RlID0gTm9kZS5mcm9tTm90aGluZyhDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBodG1sTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChvdXRlck5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3V0ZXJOb2RlID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgaHRtbE5vZGUgPSBOb2RlLmZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSwgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBodG1sTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGRvbUVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZG9tRWxlbWVudCA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgaHRtbE5vZGUgPSBOb2RlLmZyb21Ob3RoaW5nKENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGh0bWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21DaGlsZEhUTUxOb2RlcyhDbGFzcywgY2hpbGRIVE1MTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjaGlsZEhUTUxOb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZEhUTUxOb2RlcyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBjaGlsZEhUTUxOb2RlcywgIC8vL1xuICAgICAgICAgIGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIGh0bWxOb2RlID0gTm9kZS5mcm9tQ2hpbGROb2RlcyhDbGFzcywgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBodG1sTm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEhUTUxOb2RlLnByb3RvdHlwZSwgbm9kZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEhUTUxOb2RlO1xuIl0sIm5hbWVzIjpbIkhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJyZXNldERPTUVsZW1lbnQiLCJnZXRSdWxlTmFtZSIsIm1hcmtkb3duTm9kZSIsImdldE1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldE91dGVyTm9kZSIsImdldFBhcmVudEhUTUxOb2RlIiwiZ2V0UGFyZW50Tm9kZSIsInBhcmVudEhUTUxOb2RlIiwiZ2V0Q2hpbGRIVE1MTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGRIVE1MTm9kZXMiLCJnZXRBbmNlc3RvckhUTUxOb2RlcyIsImFuY2VzdG9yTm9kZXMiLCJnZXRBbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JIVE1MTm9kZXMiLCJyZWR1Y2VDaGlsZEhUTUxOb2RlIiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2VDaGlsZE5vZGUiLCJzb21lQW5jZXN0b3JIVE1MTm9kZSIsInNvbWVBbmNlc3Rvck5vZGUiLCJzb21lQ2hpbGRIVE1MTm9kZSIsInNvbWVDaGlsZE5vZGUiLCJyZXRyaWV2ZUhUTUxOb2RlIiwiaHRtbE5vZGUiLCJzb21lIiwiY2hpbGRIVE1MTm9kZSIsInJlc3VsdCIsInJlbW92ZUNoaWxkSFRNTE5vZGVzIiwicmVtb3ZlZENoaWxkSFRNTE5vZGVzIiwiZmlsdGVyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJyZW1vdmVkQ2hpbGRIVE1MTm9kZSIsIm1hcmtkb3duTm9kZU1hdGNoZXMiLCJtYXRjaE1hcmtkb3duTm9kZSIsInJlbW92ZWRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlcyIsIm91dGVyTm9kZU1hdGNoZXMiLCJtYXRjaE91dGVyTm9kZSIsImFkZENoaWxkSFRNTE5vZGVzIiwiYWRkZWRDaGlsZEhUTUxOb2RlcyIsInN0YXJ0SFROTEluZGV4IiwiYWRkZWRDaGlsZE5vZGVzIiwic3RhcnRJbmRleCIsImFkZENoaWxkTm9kZXMiLCJhZGp1c3RJbmRlbnQiLCJpbmRlbnQiLCJET1VCTEVfU1BBQ0UiLCJsaW5lcyIsImNvbnRleHQiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVMaW5lcyIsInRhZ05hbWUiLCJkZXB0aCIsImNsYXNzTmFtZSIsImNsb3NpbmdUYWciLCJzdGFydGluZ1RhZyIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsImNsYXNzSFRNTCIsIkVNUFRZX1NUUklORyIsImF0dHJpYnV0ZUhUTUwiLCJzZWxmQ2xvc2luZ1RhZyIsImNyZWF0ZURPTUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRBdHRyaWJ1dGUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlaGFuZCIsImZvckVhY2giLCJ1bm1vdW50IiwicmVtb3ZlIiwiYXNIVE1MIiwidW5kZWZpbmVkIiwiaHRtbCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsImFzUGxhaW5UZXh0IiwiY2hpbGROb2Rlc1BsYWluVGV4dCIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsInBsYWluVGV4dCIsImNoaWxkTm9kZUhUTUwiLCJjaGlsZE5vZGVQbGFpblRleHQiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiTm9kZSIsImZyb21PdXRlck5vZGUiLCJmcm9tRE9NRWxlbWVudCIsImZyb21DaGlsZEhUTUxOb2RlcyIsImZyb21DaGlsZE5vZGVzIiwicHJvdG90eXBlIiwibm9kZU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7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
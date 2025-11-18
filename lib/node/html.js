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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBub2RlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZSwgaW5zZXJ0QWZ0ZXIsIGluc2VydEJlZm9yZWhhbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5jbGFzcyBIVE1MTm9kZSBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHNldERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICByZXNldERPTUVsZW1lbnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBtYXJrZG93bk5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG91dGVyTm9kZSA9IHRoaXMuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlID0gb3V0ZXJOb2RlOyAvLy9cblxuICAgIHJldHVybiBtYXJrZG93bk5vZGU7XG4gIH1cblxuICBnZXRQYXJlbnRIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgcGFyZW50SFRNTE5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyZW50SFRNTE5vZGU7XG4gIH1cblxuICBnZXRDaGlsZEhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGRIVE1MTm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRIVE1MTm9kZXM7XG4gIH1cblxuICBnZXRBbmNlc3RvckhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gdGhpcy5nZXRBbmNlc3Rvck5vZGVzKCksXG4gICAgICAgICAgYW5jZXN0b3JIVE1MTm9kZXMgPSBhbmNlc3Rvck5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gYW5jZXN0b3JIVE1MTm9kZXM7XG4gIH1cblxuICByZWR1Y2VDaGlsZEhUTUxOb2RlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMucmVkdWNlQ2hpbGROb2RlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgc29tZUFuY2VzdG9ySFRNTE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZUFuY2VzdG9yTm9kZShjYWxsYmFjayk7IH1cblxuICByZW1vdmVDaGlsZEhUTUxOb2RlcyhyZW1vdmVkQ2hpbGRIVE1MTm9kZXMgPSBudWxsKSB7XG4gICAgbGV0IGNoaWxkSFRNTE5vZGVzO1xuXG4gICAgY2hpbGRIVE1MTm9kZXMgPSB0aGlzLmdldENoaWxkSFRNTE5vZGVzKCk7XG5cbiAgICBpZiAocmVtb3ZlZENoaWxkSFRNTE5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjaGlsZEhUTUxOb2RlcyA9IGNoaWxkSFRNTE5vZGVzLmZpbHRlcigoY2hpbGRIVE1MTm9kZSkgPT4geyAvLy9cbiAgICAgICAgY29uc3QgbWFya2Rvd25Ob2RlID0gY2hpbGRIVE1MTm9kZS5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICAgICAgaW5kZXggPSByZW1vdmVkQ2hpbGRIVE1MTm9kZXMuZmluZEluZGV4KChyZW1vdmVkQ2hpbGRIVE1MTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtkb3duTm9kZU1hdGNoZXMgPSByZW1vdmVkQ2hpbGRIVE1MTm9kZS5tYXRjaE1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtkb3duTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlZENoaWxkTm9kZXMgPSBjaGlsZEhUTUxOb2RlczsgIC8vL1xuXG4gICAgcmVtb3ZlZENoaWxkTm9kZXMgPSB0aGlzLnJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpO1xuXG4gICAgcmVtb3ZlZENoaWxkSFRNTE5vZGVzID0gcmVtb3ZlZENoaWxkTm9kZXM7ICAvLy9cblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGRIVE1MTm9kZXM7XG4gIH1cblxuICBtYXRjaE1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBvdXRlck5vZGUgPSBtYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIG91dGVyTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoT3V0ZXJOb2RlKG91dGVyTm9kZSksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlTWF0Y2hlcyA9IG91dGVyTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIG1hcmtkb3duTm9kZU1hdGNoZXM7XG4gIH1cblxuICByZXRyaWV2ZUhUTUxOb2RlKGNhbGxiYWNrKSB7XG4gICAgbGV0IGh0bWxOb2RlID0gbnVsbDtcblxuICAgIGlmIChodG1sTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgY2hpbGRIVE1MTm9kZXMgPSB0aGlzLmdldENoaWxkSFRNTE5vZGVzKCk7XG5cbiAgICAgIGNoaWxkSFRNTE5vZGVzLnNvbWUoKGNoaWxkSFRNTE5vZGUpID0+IHtcbiAgICAgICAgaHRtbE5vZGUgPSBjaGlsZEhUTUxOb2RlLnJldHJpZXZlSFRNTE5vZGUoY2FsbGJhY2spO1xuXG4gICAgICAgIGlmIChodG1sTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoaHRtbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGh0bWxOb2RlID0gdGhpcztcblxuICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soaHRtbE5vZGUpO1xuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBodG1sTm9kZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxOb2RlO1xuICB9XG5cbiAgYWRkQ2hpbGRIVE1MTm9kZXMoYWRkZWRDaGlsZEhUTUxOb2Rlcywgc3RhcnRIVE5MSW5kZXgpIHtcbiAgICBjb25zdCBhZGRlZENoaWxkTm9kZXMgPSBhZGRlZENoaWxkSFRNTE5vZGVzLCAgLy8vXG4gICAgICAgICAgc3RhcnRJbmRleCA9IHN0YXJ0SFROTEluZGV4OyAgLy8vXG5cbiAgICB0aGlzLmFkZENoaWxkTm9kZXMoYWRkZWRDaGlsZE5vZGVzLCBzdGFydEluZGV4KTtcbiAgfVxuXG4gIGFkanVzdEluZGVudChpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ICE9PSBudWxsKSB7XG4gICAgICBpbmRlbnQgPSBgJHtET1VCTEVfU1BBQ0V9JHtpbmRlbnR9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgbGluZXMoY29udGV4dCkge1xuICAgIGxldCBsaW5lcztcblxuICAgICh7IGxpbmVzID0gbnVsbCB9ID0gdGhpcy5jb25zdHJ1Y3Rvcik7XG5cbiAgICBpZiAobGluZXMgPT09IG51bGwpIHtcbiAgICAgIGxpbmVzID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGxpbmVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlTGluZXMgPSBjaGlsZE5vZGUubGluZXMoY29udGV4dCk7XG5cbiAgICAgICAgbGluZXMgKz0gY2hpbGROb2RlTGluZXM7XG5cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG5cbiAgdGFnTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0YWdOYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIHRhZ05hbWU7XG4gIH1cblxuICBkZXB0aCgpIHtcbiAgICBjb25zdCB7IGRlcHRoID0gbnVsbCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgY2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gYDwvJHt0YWdOYW1lfT5gO1xuXG4gICAgcmV0dXJuIGNsb3NpbmdUYWc7XG4gIH1cblxuICBzdGFydGluZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc0hUTUwgPSAoY2xhc3NOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYXR0cmlidXRlSFRNTCA9ICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9JHthdHRyaWJ1dGVIVE1MfT5gO1xuXG4gICAgcmV0dXJuIHN0YXJ0aW5nVGFnO1xuICB9XG5cbiAgc2VsZkNsb3NpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYXR0cmlidXRlVmFsdWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NIVE1MID0gKGNsYXNzTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGF0dHJpYnV0ZUhUTUwgPSAoKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpICYmIChhdHRyaWJ1dGVWYWx1ZSAhPT0gbnVsbCkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfSR7Y2xhc3NIVE1MfSR7YXR0cmlidXRlSFRNTH0vPmA7XG5cbiAgICByZXR1cm4gc2VsZkNsb3NpbmdUYWc7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYXR0cmlidXRlVmFsdWUoY29udGV4dCk7XG5cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpICYmIChhdHRyaWJ1dGVWYWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgKHNpYmxpbmdET01FbGVtZW50ICE9PSBudWxsKSA/XG4gICAgICBpbnNlcnRBZnRlcih0aGlzLmRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KSA6XG4gICAgICAgIGluc2VydEJlZm9yZWhhbmQodGhpcy5kb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBjaGlsZE5vZGUubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCkge1xuICAgIHtcbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNoaWxkTm9kZS51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKHRoaXMuZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSBpbmRlbnQ7IC8vL1xuXG4gICAgICBpbmRlbnQgPSBFTVBUWV9TVFJJTkc7XG4gICAgfVxuXG4gICAgbGV0IGh0bWw7XG5cbiAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChjaGlsZE5vZGVzSFRNTCAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gKGluZGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgYCR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9YCA6XG4gICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZWxmQ2xvc2luZ1RhZyA9IHRoaXMuc2VsZkNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSAoaW5kZW50ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBgJHtzZWxmQ2xvc2luZ1RhZ31gIDpcbiAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7c2VsZkNsb3NpbmdUYWd9XG5gO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNQbGFpblRleHQgPSB0aGlzLmNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHQgPSBjaGlsZE5vZGVzUGxhaW5UZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzSFRNTCwgY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVIVE1MID0gY2hpbGROb2RlLmFzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzSFRNTCA9IGAke2NoaWxkTm9kZXNIVE1MfSR7Y2hpbGROb2RlSFRNTH1gO1xuXG4gICAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc1BsYWluVGV4dCA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjaGlsZE5vZGVzUGxhaW5UZXh0LCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBsYWluVGV4dCA9IGNoaWxkTm9kZS5hc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgICAgY2hpbGROb2Rlc1BsYWluVGV4dCA9IGAke2NoaWxkTm9kZXNQbGFpblRleHR9XG4ke2NoaWxkTm9kZVBsYWluVGV4dH1gO1xuXG4gICAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQbGFpblRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IEhUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBodG1sTm9kZSA9IE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gaHRtbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAob3V0ZXJOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG91dGVyTm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIGh0bWxOb2RlID0gTm9kZS5mcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gaHRtbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChkb21FbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRvbUVsZW1lbnQgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWxOb2RlID0gTm9kZS5mcm9tTm90aGluZyhDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBodG1sTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2hpbGRIVE1MTm9kZXMoQ2xhc3MsIGNoaWxkSFRNTE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY2hpbGRIVE1MTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGRIVE1MTm9kZXMgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IEhUTUxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGRIVE1MTm9kZXMsICAvLy9cbiAgICAgICAgICBkb21FbGVtZW50ID0gbnVsbCxcbiAgICAgICAgICBodG1sTm9kZSA9IE5vZGUuZnJvbUNoaWxkTm9kZXMoQ2xhc3MsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gaHRtbE5vZGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihIVE1MTm9kZS5wcm90b3R5cGUsIG5vZGVNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBIVE1MTm9kZTtcbiJdLCJuYW1lcyI6WyJIVE1MTm9kZSIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwicmVzZXRET01FbGVtZW50IiwiZ2V0UnVsZU5hbWUiLCJtYXJrZG93bk5vZGUiLCJnZXRNYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRPdXRlck5vZGUiLCJnZXRQYXJlbnRIVE1MTm9kZSIsImdldFBhcmVudE5vZGUiLCJwYXJlbnRIVE1MTm9kZSIsImdldENoaWxkSFRNTE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkSFRNTE5vZGVzIiwiZ2V0QW5jZXN0b3JIVE1MTm9kZXMiLCJhbmNlc3Rvck5vZGVzIiwiZ2V0QW5jZXN0b3JOb2RlcyIsImFuY2VzdG9ySFRNTE5vZGVzIiwicmVkdWNlQ2hpbGRIVE1MTm9kZSIsImNhbGxiYWNrIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlQ2hpbGROb2RlIiwic29tZUFuY2VzdG9ySFRNTE5vZGUiLCJzb21lQW5jZXN0b3JOb2RlIiwicmVtb3ZlQ2hpbGRIVE1MTm9kZXMiLCJyZW1vdmVkQ2hpbGRIVE1MTm9kZXMiLCJmaWx0ZXIiLCJjaGlsZEhUTUxOb2RlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJyZW1vdmVkQ2hpbGRIVE1MTm9kZSIsIm1hcmtkb3duTm9kZU1hdGNoZXMiLCJtYXRjaE1hcmtkb3duTm9kZSIsInJlbW92ZWRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlcyIsIm91dGVyTm9kZU1hdGNoZXMiLCJtYXRjaE91dGVyTm9kZSIsInJldHJpZXZlSFRNTE5vZGUiLCJodG1sTm9kZSIsInNvbWUiLCJyZXN1bHQiLCJhZGRDaGlsZEhUTUxOb2RlcyIsImFkZGVkQ2hpbGRIVE1MTm9kZXMiLCJzdGFydEhUTkxJbmRleCIsImFkZGVkQ2hpbGROb2RlcyIsInN0YXJ0SW5kZXgiLCJhZGRDaGlsZE5vZGVzIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwiRE9VQkxFX1NQQUNFIiwibGluZXMiLCJjb250ZXh0IiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTGluZXMiLCJ0YWdOYW1lIiwiZGVwdGgiLCJjbGFzc05hbWUiLCJjbG9zaW5nVGFnIiwic3RhcnRpbmdUYWciLCJhdHRyaWJ1dGVOYW1lIiwiYXR0cmlidXRlVmFsdWUiLCJjbGFzc0hUTUwiLCJFTVBUWV9TVFJJTkciLCJhdHRyaWJ1dGVIVE1MIiwic2VsZkNsb3NpbmdUYWciLCJjcmVhdGVET01FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0QXR0cmlidXRlIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsImluc2VydEJlZm9yZWhhbmQiLCJmb3JFYWNoIiwidW5tb3VudCIsInJlbW92ZSIsImFzSFRNTCIsInVuZGVmaW5lZCIsImh0bWwiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJhc1BsYWluVGV4dCIsImNoaWxkTm9kZXNQbGFpblRleHQiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJjaGlsZE5vZGVIVE1MIiwiY2hpbGROb2RlUGxhaW5UZXh0IiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIk5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwiZnJvbURPTUVsZW1lbnQiLCJmcm9tQ2hpbGRIVE1MTm9kZXMiLCJmcm9tQ2hpbGROb2RlcyIsInByb3RvdHlwZSIsIm5vZGVNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlhQTs7O2VBQUE7Ozt3QkF2YXFCOzJEQUVFO3lCQUVvQjttQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
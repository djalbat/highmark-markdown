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
                htmlNode = this; ///
                var result = callback(htmlNode);
                if (!result) {
                    htmlNode = null;
                    var childHTMLNodes = this.getChildHTMLNodes();
                    childHTMLNodes.some(function(childHTMLNode) {
                        htmlNode = childHTMLNode.retrieveHTMLNode(callback);
                        if (htmlNode !== null) {
                            return true;
                        }
                    });
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
                        var index = removedChildHTMLNodes.findIndex(function(removedChildHTMLNode) {
                            var outerNodeMatches = childHTMLNode.matchOuterNode(removedChildHTMLNode);
                            if (outerNodeMatches) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBub2RlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgSFRNTE5vZGUgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBzZXRET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgcmVzZXRET01FbGVtZW50KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IG51bGw7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLmdldE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gbWFya2Rvd25Ob2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBvdXRlck5vZGUgPSB0aGlzLmdldE91dGVyTm9kZSgpLFxuICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG91dGVyTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgZ2V0UGFyZW50SFRNTE5vZGUoKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMuZ2V0UGFyZW50Tm9kZSgpLFxuICAgICAgICAgIHBhcmVudEhUTUxOb2RlID0gcGFyZW50Tm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcmVudEhUTUxOb2RlO1xuICB9XG5cbiAgZ2V0Q2hpbGRIVE1MTm9kZXMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNoaWxkSFRNTE5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkSFRNTE5vZGVzO1xuICB9XG5cbiAgZ2V0QW5jZXN0b3JIVE1MTm9kZXMoKSB7XG4gICAgY29uc3QgYW5jZXN0b3JOb2RlcyA9IHRoaXMuZ2V0QW5jZXN0b3JOb2RlcygpLFxuICAgICAgICAgIGFuY2VzdG9ySFRNTE5vZGVzID0gYW5jZXN0b3JOb2RlczsgIC8vL1xuXG4gICAgcmV0dXJuIGFuY2VzdG9ySFRNTE5vZGVzO1xuICB9XG5cbiAgc29tZUFuY2VzdG9ySFRNTE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuc29tZUFuY2VzdG9yTm9kZShjYWxsYmFjayk7IH1cblxuICBtYXRjaE1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBvdXRlck5vZGUgPSBtYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIG91dGVyTm9kZU1hdGNoZXMgPSAodGhpcy5vdXRlck5vZGUgPT09IG91dGVyTm9kZSksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlTWF0Y2hlcyA9IG91dGVyTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIG1hcmtkb3duTm9kZU1hdGNoZXM7XG4gIH1cblxuICByZXRyaWV2ZUhUTUxOb2RlKGNhbGxiYWNrKSB7XG4gICAgbGV0IGh0bWxOb2RlO1xuXG4gICAgaHRtbE5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhodG1sTm9kZSk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgaHRtbE5vZGUgPSBudWxsO1xuXG4gICAgICBjb25zdCBjaGlsZEhUTUxOb2RlcyA9IHRoaXMuZ2V0Q2hpbGRIVE1MTm9kZXMoKTtcblxuICAgICAgY2hpbGRIVE1MTm9kZXMuc29tZSgoY2hpbGRIVE1MTm9kZSkgPT4ge1xuICAgICAgICBodG1sTm9kZSA9IGNoaWxkSFRNTE5vZGUucmV0cmlldmVIVE1MTm9kZShjYWxsYmFjaylcblxuICAgICAgICBpZiAoaHRtbE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxOb2RlO1xuICB9XG5cbiAgYWRkQ2hpbGRIVE1MTm9kZXMoYWRkZWRDaGlsZEhUTUxOb2Rlcywgc3RhcnRJbmRleCkge1xuICAgIGNvbnN0IGFkZGVkQ2hpbGROb2RlcyA9IGFkZGVkQ2hpbGRIVE1MTm9kZXM7ICAvLy9cblxuICAgIHRoaXMuYWRkQ2hpbGROb2RlcyhhZGRlZENoaWxkTm9kZXMsIHN0YXJ0SW5kZXgpO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGRIVE1MTm9kZXMocmVtb3ZlZENoaWxkSFRNTE5vZGVzID0gbnVsbCkge1xuICAgIGxldCBjaGlsZEhUTUxOb2RlcztcblxuICAgIGNoaWxkSFRNTE5vZGVzID0gdGhpcy5nZXRDaGlsZEhUTUxOb2RlcygpO1xuXG4gICAgaWYgKHJlbW92ZWRDaGlsZEhUTUxOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgY2hpbGRIVE1MTm9kZXMgPSBjaGlsZEhUTUxOb2Rlcy5maWx0ZXIoKGNoaWxkSFRNTE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSByZW1vdmVkQ2hpbGRIVE1MTm9kZXMuZmluZEluZGV4KChyZW1vdmVkQ2hpbGRIVE1MTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG91dGVyTm9kZU1hdGNoZXMgPSBjaGlsZEhUTUxOb2RlLm1hdGNoT3V0ZXJOb2RlKHJlbW92ZWRDaGlsZEhUTUxOb2RlKTtcblxuICAgICAgICAgIGlmIChvdXRlck5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZWRDaGlsZE5vZGVzID0gY2hpbGRIVE1MTm9kZXM7ICAvLy9cblxuICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gdGhpcy5yZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKTtcblxuICAgIHJlbW92ZWRDaGlsZEhUTUxOb2RlcyA9IHJlbW92ZWRDaGlsZE5vZGVzOyAgLy8vXG5cbiAgICByZXR1cm4gcmVtb3ZlZENoaWxkSFRNTE5vZGVzO1xuICB9XG5cbiAgYWRqdXN0SW5kZW50KGluZGVudCkge1xuICAgIGluZGVudCA9IChpbmRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyA6XG4gICAgICAgICAgICAgICAgYCR7RE9VQkxFX1NQQUNFfSR7aW5kZW50fWA7XG5cbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG5cbiAgbGluZXMoY29udGV4dCkge1xuICAgIGxldCBsaW5lcztcblxuICAgICh7IGxpbmVzID0gbnVsbCB9ID0gdGhpcy5jb25zdHJ1Y3Rvcik7XG5cbiAgICBpZiAobGluZXMgPT09IG51bGwpIHtcbiAgICAgIGxpbmVzID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGxpbmVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlTGluZXMgPSBjaGlsZE5vZGUubGluZXMoY29udGV4dCk7XG5cbiAgICAgICAgbGluZXMgKz0gY2hpbGROb2RlTGluZXM7XG5cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG5cbiAgdGFnTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0YWdOYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIHRhZ05hbWU7XG4gIH1cblxuICBkZXB0aCgpIHtcbiAgICBjb25zdCB7IGRlcHRoID0gbnVsbCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgY2xvc2luZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gYDwvJHt0YWdOYW1lfT5gO1xuXG4gICAgcmV0dXJuIGNsb3NpbmdUYWc7XG4gIH1cblxuICBzdGFydGluZ1RhZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5hdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc0hUTUwgPSAoY2xhc3NOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYXR0cmlidXRlSFRNTCA9ICgoYXR0cmlidXRlTmFtZSAhPT0gbnVsbCkgJiYgKGF0dHJpYnV0ZVZhbHVlICE9PSBudWxsKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAke2F0dHJpYnV0ZU5hbWV9PVwiJHthdHRyaWJ1dGVWYWx1ZX1cImAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gYDwke3RhZ05hbWV9JHtjbGFzc0hUTUx9JHthdHRyaWJ1dGVIVE1MfT5gO1xuXG4gICAgcmV0dXJuIHN0YXJ0aW5nVGFnO1xuICB9XG5cbiAgc2VsZkNsb3NpbmdUYWcoY29udGV4dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0aGlzLnRhZ05hbWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYXR0cmlidXRlVmFsdWUoY29udGV4dCksXG4gICAgICAgICAgY2xhc3NIVE1MID0gKGNsYXNzTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGF0dHJpYnV0ZUhUTUwgPSAoKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpICYmIChhdHRyaWJ1dGVWYWx1ZSAhPT0gbnVsbCkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgJHthdHRyaWJ1dGVOYW1lfT1cIiR7YXR0cmlidXRlVmFsdWV9XCJgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzZWxmQ2xvc2luZ1RhZyA9IGA8JHt0YWdOYW1lfSR7Y2xhc3NIVE1MfSR7YXR0cmlidXRlSFRNTH0vPmA7XG5cbiAgICByZXR1cm4gc2VsZkNsb3NpbmdUYWc7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gbnVsbDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIGNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KTtcblxuICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYXR0cmlidXRlVmFsdWUoY29udGV4dCk7XG5cbiAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoKGF0dHJpYnV0ZU5hbWUgIT09IG51bGwpICYmIChhdHRyaWJ1dGVWYWx1ZSAhPT0gbnVsbCkpIHtcbiAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudClcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHtcbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNoaWxkTm9kZS51bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gaW5kZW50OyAvLy9cblxuICAgICAgaW5kZW50ID0gRU1QVFlfU1RSSU5HO1xuICAgIH1cblxuICAgIGxldCBodG1sO1xuXG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZWxmQ2xvc2luZ1RhZyA9IHRoaXMuc2VsZkNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzZWxmQ2xvc2luZ1RhZ31cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBhc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgbGV0IHBsYWluVGV4dDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNQbGFpblRleHQgPSB0aGlzLmNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KTtcblxuICAgIHBsYWluVGV4dCA9IGNoaWxkTm9kZXNQbGFpblRleHQ7ICAvLy9cblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNoaWxkTm9kZXNIVE1MLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZUhUTUwgPSBjaGlsZE5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICAgIGNoaWxkTm9kZXNIVE1MID0gYCR7Y2hpbGROb2Rlc0hUTUx9JHtjaGlsZE5vZGVIVE1MfWA7XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gdGhpcy5yZWR1Y2VDaGlsZE5vZGUoKGNoaWxkTm9kZXNQbGFpblRleHQsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGxhaW5UZXh0ID0gY2hpbGROb2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgICBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gYCR7Y2hpbGROb2Rlc1BsYWluVGV4dH1cbiR7Y2hpbGROb2RlUGxhaW5UZXh0fWA7XG5cbiAgICAgIHJldHVybiBjaGlsZE5vZGVzUGxhaW5UZXh0O1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBOb2RlLmZyb21Ob3RoaW5nKENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShDbGFzcywgb3V0ZXJOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAob3V0ZXJOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG91dGVyTm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gSFRNTE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBOb2RlLmZyb21PdXRlck5vZGUoQ2xhc3MsIG91dGVyTm9kZSwgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzKENsYXNzLCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBIVE1MTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IE5vZGUuZnJvbUNoaWxkTm9kZXMoQ2xhc3MsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEhUTUxOb2RlLnByb3RvdHlwZSwgbm9kZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEhUTUxOb2RlO1xuIl0sIm5hbWVzIjpbIkhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJyZXNldERPTUVsZW1lbnQiLCJnZXRSdWxlTmFtZSIsIm1hcmtkb3duTm9kZSIsImdldE1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldE91dGVyTm9kZSIsImdldFBhcmVudEhUTUxOb2RlIiwiZ2V0UGFyZW50Tm9kZSIsInBhcmVudEhUTUxOb2RlIiwiZ2V0Q2hpbGRIVE1MTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGRIVE1MTm9kZXMiLCJnZXRBbmNlc3RvckhUTUxOb2RlcyIsImFuY2VzdG9yTm9kZXMiLCJnZXRBbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JIVE1MTm9kZXMiLCJzb21lQW5jZXN0b3JIVE1MTm9kZSIsImNhbGxiYWNrIiwic29tZUFuY2VzdG9yTm9kZSIsIm1hdGNoTWFya2Rvd25Ob2RlIiwib3V0ZXJOb2RlTWF0Y2hlcyIsIm1hcmtkb3duTm9kZU1hdGNoZXMiLCJyZXRyaWV2ZUhUTUxOb2RlIiwiaHRtbE5vZGUiLCJyZXN1bHQiLCJzb21lIiwiY2hpbGRIVE1MTm9kZSIsImFkZENoaWxkSFRNTE5vZGVzIiwiYWRkZWRDaGlsZEhUTUxOb2RlcyIsInN0YXJ0SW5kZXgiLCJhZGRlZENoaWxkTm9kZXMiLCJhZGRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGRIVE1MTm9kZXMiLCJyZW1vdmVkQ2hpbGRIVE1MTm9kZXMiLCJmaWx0ZXIiLCJpbmRleCIsImZpbmRJbmRleCIsInJlbW92ZWRDaGlsZEhUTUxOb2RlIiwibWF0Y2hPdXRlck5vZGUiLCJyZW1vdmVkQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkTm9kZXMiLCJhZGp1c3RJbmRlbnQiLCJpbmRlbnQiLCJFTVBUWV9TVFJJTkciLCJET1VCTEVfU1BBQ0UiLCJsaW5lcyIsImNvbnRleHQiLCJjb25zdHJ1Y3RvciIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUxpbmVzIiwidGFnTmFtZSIsImRlcHRoIiwiY2xhc3NOYW1lIiwiY2xvc2luZ1RhZyIsInN0YXJ0aW5nVGFnIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZVZhbHVlIiwiY2xhc3NIVE1MIiwiYXR0cmlidXRlSFRNTCIsInNlbGZDbG9zaW5nVGFnIiwiY3JlYXRlRE9NRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInNldEF0dHJpYnV0ZSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiZm9yRWFjaCIsInVubW91bnQiLCJyZW1vdmVDaGlsZCIsImFzSFRNTCIsInVuZGVmaW5lZCIsImh0bWwiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsImNoaWxkTm9kZXNQbGFpblRleHQiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJjaGlsZE5vZGVIVE1MIiwiY2hpbGROb2RlUGxhaW5UZXh0IiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIk5vZGUiLCJub2RlIiwiZnJvbU91dGVyTm9kZSIsImZyb21DaGlsZE5vZGVzIiwicHJvdG90eXBlIiwibm9kZU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNFlBOzs7ZUFBQTs7O3dCQTFZcUI7MkRBRUU7eUJBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTthQUFBQSxTQUNRQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVO2dDQURyREo7O2dCQUVGLGtCQUZFQTtZQUVJQztZQUFXQztZQUFZQzs7UUFFN0IsTUFBS0MsVUFBVSxHQUFHQTs7O2tCQUpoQko7O1lBT0pLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lB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
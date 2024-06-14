"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DivisionMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _replacementNodeAndTokens = /*#__PURE__*/ _interop_require_default(require("../../replacementNodeAndTokens"));
var _contentsList = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/contentsList"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/footnotesList"));
var _constants = require("../../constants");
var _ruleNames = require("../../ruleNames");
var _footnotes = require("../../utilities/footnotes");
var _replace = require("../../utilities/replace");
var _query = require("../../utilities/query");
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
var clear = _necessary.arrayUtilities.clear, filter = _necessary.arrayUtilities.filter;
var DivisionMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(DivisionMarkdownNode, MarkdownNode);
    var _super = _create_super(DivisionMarkdownNode);
    function DivisionMarkdownNode(ruleName, childNodes, precedence, opacity, domElement, divisionClassName) {
        _class_call_check(this, DivisionMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, precedence, opacity, domElement);
        _this.divisionClassName = divisionClassName;
        return _this;
    }
    _create_class(DivisionMarkdownNode, [
        {
            key: "getDivisionClassName",
            value: function getDivisionClassName() {
                return this.divisionClassName;
            }
        },
        {
            key: "setDivisionClassName",
            value: function setDivisionClassName(divisionClassName) {
                this.divisionClassName = divisionClassName;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var className = this.divisionClassName; ///
                return className;
            }
        },
        {
            key: "isIgnored",
            value: function isIgnored() {
                var node = this, ignoreDirectiveMarkdownNode = (0, _query.ignoreDirectiveMarkdownNodeFromNode)(node), ignored = ignoreDirectiveMarkdownNode !== null;
                return ignored;
            }
        },
        {
            key: "findParentNode",
            value: function findParentNode(childNode) {
                var _this = this;
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
                var parentNode = null;
                var nodeNonTerminalNode = node.isNonTerminalNode();
                if (nodeNonTerminalNode) {
                    var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), index = childNodes.indexOf(childNode);
                    if (index !== -1) {
                        parentNode = node; ///
                    } else {
                        var nodes = childNodes; ///
                        nodes.some(function(node) {
                            parentNode = _this.findParentNode(childNode, node);
                            if (parentNode !== null) {
                                return true;
                            }
                        });
                    }
                }
                return parentNode;
            }
        },
        {
            key: "paginate",
            value: function paginate(pageDivisionMarkdownNodes, context) {
                var _this = this;
                var linesPerPage = context.linesPerPage, pageChildNodes = [], childNodes = this.getChildNodes(), footnotesDirectiveReplacementNodeAndTokens = this.removeFootnotesSubdivisionMarkdownNode(context), pageNumberDirectiveReplacementNodeAndTokens = this.removePageNumberSubdivisionMarkdownNode(context);
                var pageLines = 0;
                childNodes.forEach(function(childNode) {
                    var pageChildNode = childNode, lines = pageChildNode.lines(context);
                    pageLines += lines;
                    pageChildNodes.push(pageChildNode);
                    if (pageLines > linesPerPage) {
                        var childNodes = _to_consumable_array(pageChildNodes), divisionMarkdownNode = DivisionMarkdownNode.fromChildNodesAndDivisionClassName(childNodes, _this.divisionClassName), pageDivisionMarkdownNode = divisionMarkdownNode; ///
                        if (footnotesDirectiveReplacementNodeAndTokens !== null) {
                            footnotesDirectiveReplacementNodeAndTokens.appendTo(pageDivisionMarkdownNode, context);
                        }
                        if (pageNumberDirectiveReplacementNodeAndTokens !== null) {
                            pageNumberDirectiveReplacementNodeAndTokens.appendTo(pageDivisionMarkdownNode, context);
                        }
                        pageDivisionMarkdownNodes.push(pageDivisionMarkdownNode);
                        clear(pageChildNodes);
                        pageLines = 0;
                    }
                });
                if (pageLines > 0) {
                    var childNodes1 = _to_consumable_array(pageChildNodes), divisionMarkdownNode = DivisionMarkdownNode.fromChildNodesAndDivisionClassName(childNodes1, this.divisionClassName), pageDivisionMarkdownNode = divisionMarkdownNode; ///
                    if (footnotesDirectiveReplacementNodeAndTokens !== null) {
                        footnotesDirectiveReplacementNodeAndTokens.appendTo(pageDivisionMarkdownNode, context);
                    }
                    if (pageNumberDirectiveReplacementNodeAndTokens !== null) {
                        pageNumberDirectiveReplacementNodeAndTokens.appendTo(pageDivisionMarkdownNode, context);
                    }
                    pageDivisionMarkdownNodes.push(pageDivisionMarkdownNode);
                }
            }
        },
        {
            key: "createContents",
            value: function createContents(context) {
                var contentsCreated = false;
                var node = this, contentsDirectiveMarkdownNode = (0, _query.contentsDirectiveMarkdownNodeFromNode)(node);
                if (contentsDirectiveMarkdownNode !== null) {
                    var divisionMarkdownNode = this, headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodeAndContentsDirectiveMarkdownNode(divisionMarkdownNode, contentsDirectiveMarkdownNode, context), headingMarkdownNodesLength = headingMarkdownNodes.length;
                    if (headingMarkdownNodesLength === 0) {
                        return;
                    }
                    var tokens = context.tokens, contentsListMarkdownNode = _contentsList.default.fromHeadingMarkdownNodes(headingMarkdownNodes, context), contentsListMarkdownNodeTokens = contentsListMarkdownNode.getTokens(), childNode = contentsDirectiveMarkdownNode, parentNode = this.findParentNode(childNode), replacedNode = contentsDirectiveMarkdownNode, replacementNode = contentsListMarkdownNode, replacementTokens = contentsListMarkdownNodeTokens; ///
                    (0, _replace.replaceNode)(replacementNode, replacedNode, parentNode);
                    (0, _replace.replaceTokens)(replacementTokens, replacedNode, tokens);
                    contentsCreated = true;
                }
                return contentsCreated;
            }
        },
        {
            key: "createFootnotes",
            value: function createFootnotes(context) {
                var node = this, footnotesDirectiveMarkdownNode = (0, _query.footnotesDirectiveMarkdownNodeFromNode)(node);
                if (footnotesDirectiveMarkdownNode !== null) {
                    var divisionMarkdownNode = this, footnotesListMarkdownNode = _footnotesList.default.fromDivisionMarkdownNode(divisionMarkdownNode, context);
                    if (footnotesListMarkdownNode !== null) {
                        var childNode = footnotesListMarkdownNode; ///
                        divisionMarkdownNode.appendChildNode(childNode);
                        (0, _footnotes.renumberLinkMarkdownNodes)(divisionMarkdownNode, footnotesListMarkdownNode, context);
                    }
                }
            }
        },
        {
            key: "resolveEmbeddings",
            value: function resolveEmbeddings(context) {
                var _this = this;
                var node = this, embedDirectiveMarkdownNodes = (0, _query.embedDirectiveMarkdownNodesFromNode)(node);
                embedDirectiveMarkdownNodes.map(function(embedDirectiveMarkdownNode) {
                    var replacementNodeAndTokens = embedDirectiveMarkdownNode.replacementNodeAndTokens(context);
                    if (replacementNodeAndTokens !== null) {
                        var tokens;
                        tokens = replacementNodeAndTokens.getTokens();
                        var childNodes = replacementNodeAndTokens.getChildNodes(), replacementNodes = childNodes, replacementTokens = tokens; ///
                        tokens = context.tokens;
                        var childNode = embedDirectiveMarkdownNode, parentNode = _this.findParentNode(childNode), replacedNode = embedDirectiveMarkdownNode; ///
                        (0, _replace.replaceNodes)(replacementNodes, replacedNode, parentNode);
                        (0, _replace.replaceTokens)(replacementTokens, replacedNode, tokens);
                    }
                });
            }
        },
        {
            key: "createFootnotesListMarkdownNode",
            value: function createFootnotesListMarkdownNode(context) {
                var divisionMarkdownNode = this, footnotesListMarkdownNode = _footnotesList.default.fromDivisionMarkdownNode(divisionMarkdownNode, context);
                return footnotesListMarkdownNode;
            }
        },
        {
            key: "removeSubdivisionMarkdownNode",
            value: function removeSubdivisionMarkdownNode(markdownNodeFromNode, context) {
                var subdivisionReplacementNodeAndTokens = null;
                var tokens = context.tokens, node = this, parentNode = this, subDivisionMarkdownNodes = (0, _query.subDivisionMarkdownNodesFromNode)(node);
                subDivisionMarkdownNodes.some(function(subDivisionMarkdownNode) {
                    var node = subDivisionMarkdownNode, markdownNode = markdownNodeFromNode(node);
                    if (markdownNode !== null) {
                        var replacementNodeAndTokens = _replacementNodeAndTokens.default.fromNode(node, context);
                        subdivisionReplacementNodeAndTokens = replacementNodeAndTokens; ///
                        var removedNode = subDivisionMarkdownNode; ///
                        (0, _replace.removeTokens)(removedNode, tokens);
                        (0, _replace.removeNode)(removedNode, parentNode);
                        return true;
                    }
                });
                return subdivisionReplacementNodeAndTokens;
            }
        },
        {
            key: "removeFootnotesListMarkdownNode",
            value: function removeFootnotesListMarkdownNode(footnotesListMarkdownNode) {
                var childNode = footnotesListMarkdownNode; ///
                this.removeChildNode(childNode);
            }
        },
        {
            key: "removeFootnotesSubdivisionMarkdownNode",
            value: function removeFootnotesSubdivisionMarkdownNode(context) {
                var footnotesDirectiveReplacementNodeAndTokens = this.removeSubdivisionMarkdownNode(_query.footnotesDirectiveMarkdownNodeFromNode, context);
                return footnotesDirectiveReplacementNodeAndTokens;
            }
        },
        {
            key: "removePageNumberSubdivisionMarkdownNode",
            value: function removePageNumberSubdivisionMarkdownNode(context) {
                var pageNumberDirectiveReplacementNodeAndTokens = this.removeSubdivisionMarkdownNode(_query.pageNumberDirectiveMarkdownNodeFromNode, context);
                return pageNumberDirectiveReplacementNodeAndTokens;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(context) {
                var html = null;
                var indent = _constants.EMPTY_STRING, childNodesHTML = this.childNodesAsHTML(indent, context);
                if (childNodesHTML !== null) {
                    var startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                    html = "".concat(indent).concat(startingTag, "\n").concat(childNodesHTML).concat(indent).concat(closingTag, "\n");
                }
                return html;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(DivisionMarkdownNode.prototype), "clone", this).call(this, this.divisionClassName);
            }
        }
    ], [
        {
            key: "fromChildNodesAndDivisionClassName",
            value: function fromChildNodesAndDivisionClassName(childNodes, divisionClassName) {
                var ruleName = _ruleNames.DIVISION_RULE_NAME, opacity = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                return divisionMarkdownNode;
            }
        },
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                var divisionClassName = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
}(_markdown.default);
function headingMarkdownNodesFromDivisionMarkdownNodeAndContentsDirectiveMarkdownNode(divisionMarkdownNode, contentsDirectiveMarkdownNode, context) {
    var contentsDepth = context.contentsDepth, headingMarkdownNodes = [];
    var divisionMarkdownNodes = context.divisionMarkdownNodes;
    var index = divisionMarkdownNodes.indexOf(divisionMarkdownNode), start = index + 1;
    divisionMarkdownNodes = divisionMarkdownNodes.slice(start); ///
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        var node = divisionMarkdownNode; ///
        (0, _query.headingMarkdownNodesFromNode)(node, headingMarkdownNodes);
    });
    filter(headingMarkdownNodes, function(headingMarkdownNode) {
        var depth = headingMarkdownNode.getDepth();
        if (depth <= contentsDepth) {
            return true;
        }
    });
    return headingMarkdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IFJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vZm9vdG5vdGVzTGlzdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBESVZJU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mb290bm90ZXNcIjtcbmltcG9ydCB7IHJlbW92ZU5vZGUsIHJlbW92ZVRva2VucywgcmVwbGFjZU5vZGUsIHJlcGxhY2VOb2RlcywgcmVwbGFjZVRva2VucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcmVwbGFjZVwiO1xuaW1wb3J0IHsgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsXG4gICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBjbGVhciwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBpc0lnbm9yZWQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaWdub3JlZCA9IChpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWQ7XG4gIH1cblxuICBmaW5kUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUgPSB0aGlzKSB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBwYXJlbnROb2RlID0gbm9kZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZE5vZGVzOyAvLy9cblxuICAgICAgICBub2Rlcy5zb21lKChub2RlKSA9PiB7XG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlLCBub2RlKTtcblxuICAgICAgICAgIGlmIChwYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnROb2RlO1xuICB9XG5cbiAgcGFnaW5hdGUocGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbGluZXNQZXJQYWdlIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHBhZ2VDaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZVJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyA9IHRoaXMucmVtb3ZlRm9vdG5vdGVzU3ViZGl2aXNpb25NYXJrZG93bk5vZGUoY29udGV4dCksXG4gICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZVJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyA9IHRoaXMucmVtb3ZlUGFnZU51bWJlclN1YmRpdmlzaW9uTWFya2Rvd25Ob2RlKGNvbnRleHQpO1xuXG4gICAgbGV0IHBhZ2VMaW5lcyA9IDA7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgcGFnZUNoaWxkTm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgbGluZXMgPSBwYWdlQ2hpbGROb2RlLmxpbmVzKGNvbnRleHQpO1xuXG4gICAgICBwYWdlTGluZXMgKz0gbGluZXM7XG5cbiAgICAgIHBhZ2VDaGlsZE5vZGVzLnB1c2gocGFnZUNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChwYWdlTGluZXMgPiBsaW5lc1BlclBhZ2UpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IFsgIC8vL1xuICAgICAgICAgICAgICAgIC4uLnBhZ2VDaGlsZE5vZGVzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gRGl2aXNpb25NYXJrZG93bk5vZGUuZnJvbUNoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShjaGlsZE5vZGVzLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKSxcbiAgICAgICAgICAgICAgcGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgICAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlUmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zICE9PSBudWxsKSB7XG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlUmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zLmFwcGVuZFRvKHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZVJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyAhPT0gbnVsbCkge1xuICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVSZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMuYXBwZW5kVG8ocGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZXMucHVzaChwYWdlRGl2aXNpb25NYXJrZG93bk5vZGUpO1xuXG4gICAgICAgIGNsZWFyKHBhZ2VDaGlsZE5vZGVzKTtcblxuICAgICAgICBwYWdlTGluZXMgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBhZ2VMaW5lcyA+IDApIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBbICAvLy9cbiAgICAgICAgICAgICAgLi4ucGFnZUNoaWxkTm9kZXNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21DaGlsZE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUoY2hpbGROb2RlcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSksXG4gICAgICAgICAgICBwYWdlRGl2aXNpb25NYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlUmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zICE9PSBudWxsKSB7XG4gICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZVJlcGxhY2VtZW50Tm9kZUFuZFRva2Vucy5hcHBlbmRUbyhwYWdlRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZVJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyAhPT0gbnVsbCkge1xuICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlUmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zLmFwcGVuZFRvKHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZXMucHVzaChwYWdlRGl2aXNpb25NYXJrZG93bk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudHNDcmVhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kQ29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gaGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tSGVhZGluZ01hcmtkb3duTm9kZXMoaGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlVG9rZW5zID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmdldFRva2VucygpLFxuICAgICAgICAgICAgY2hpbGROb2RlID0gY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgICAgICByZXBsYWNlZE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlVG9rZW5zOyAvLy9cblxuICAgICAgcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG5cbiAgICAgIGNvbnRlbnRzQ3JlYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzQ3JlYXRlZDtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlcyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMubWFwKChlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUucmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zICE9PSBudWxsKSB7XG4gICAgICAgIGxldCB0b2tlbnM7XG5cbiAgICAgICAgdG9rZW5zID0gcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zLmdldFRva2VucygpO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICByZXBsYWNlbWVudE5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdG9rZW5zOyAvLy9cblxuICAgICAgICAoeyB0b2tlbnMgfSA9IGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgICAgICAgIHJlcGxhY2VkTm9kZSA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICByZXBsYWNlTm9kZXMocmVwbGFjZW1lbnROb2RlcywgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgICAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cblxuICByZW1vdmVTdWJkaXZpc2lvbk1hcmtkb3duTm9kZShtYXJrZG93bk5vZGVGcm9tTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdWJkaXZpc2lvblJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyA9IG51bGw7XG5cbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMgPSBSZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMuZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgc3ViZGl2aXNpb25SZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMgPSByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnM7IC8vL1xuXG4gICAgICAgIGNvbnN0IHJlbW92ZWROb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgICAgICByZW1vdmVUb2tlbnMocmVtb3ZlZE5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgcmVtb3ZlTm9kZShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3ViZGl2aXNpb25SZXBsYWNlbWVudE5vZGVBbmRUb2tlbnM7XG4gIH1cblxuICByZW1vdmVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUNoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgcmVtb3ZlRm9vdG5vdGVzU3ViZGl2aXNpb25NYXJrZG93bk5vZGUoY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZVJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyA9IHRoaXMucmVtb3ZlU3ViZGl2aXNpb25NYXJrZG93bk5vZGUoZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0RpcmVjdGl2ZVJlcGxhY2VtZW50Tm9kZUFuZFRva2VucztcbiAgfVxuXG4gIHJlbW92ZVBhZ2VOdW1iZXJTdWJkaXZpc2lvbk1hcmtkb3duTm9kZShjb250ZXh0KSB7XG4gICAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZVJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyA9IHRoaXMucmVtb3ZlU3ViZGl2aXNpb25NYXJrZG93bk5vZGUocGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYWdlTnVtYmVyRGlyZWN0aXZlUmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zO1xuICB9XG5cbiAgYXNIVE1MKGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRlbnQgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChjaGlsZE5vZGVzSFRNTCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKGNoaWxkTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBESVZJU0lPTl9SVUxFX05BTUUsXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBjb250ZW50c0RlcHRoIH0gPSBjb250ZXh0LFxuICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGxldCB7IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyB9ID0gY29udGV4dDtcblxuICBjb25zdCBpbmRleCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5pbmRleE9mKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCArIDE7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLnNsaWNlKHN0YXJ0KTsgLy8vXG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzKTtcbiAgfSk7XG5cbiAgZmlsdGVyKGhlYWRpbmdNYXJrZG93bk5vZGVzLCAoaGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGRlcHRoID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXREZXB0aCgpO1xuXG4gICAgaWYgKGRlcHRoIDw9IGNvbnRlbnRzRGVwdGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRpbmdNYXJrZG93bk5vZGVzO1xufSJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsImZpbmRQYXJlbnROb2RlIiwiY2hpbGROb2RlIiwicGFyZW50Tm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldENoaWxkTm9kZXMiLCJpbmRleCIsImluZGV4T2YiLCJub2RlcyIsInNvbWUiLCJwYWdpbmF0ZSIsInBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJsaW5lc1BlclBhZ2UiLCJwYWdlQ2hpbGROb2RlcyIsImZvb3Rub3Rlc0RpcmVjdGl2ZVJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyIsInJlbW92ZUZvb3Rub3Rlc1N1YmRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZVJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyIsInJlbW92ZVBhZ2VOdW1iZXJTdWJkaXZpc2lvbk1hcmtkb3duTm9kZSIsInBhZ2VMaW5lcyIsImZvckVhY2giLCJwYWdlQ2hpbGROb2RlIiwibGluZXMiLCJwdXNoIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lIiwicGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiYXBwZW5kVG8iLCJjcmVhdGVDb250ZW50cyIsImNvbnRlbnRzQ3JlYXRlZCIsImNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5zIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlVG9rZW5zIiwiZ2V0VG9rZW5zIiwicmVwbGFjZWROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJyZXBsYWNlTm9kZSIsInJlcGxhY2VUb2tlbnMiLCJjcmVhdGVGb290bm90ZXMiLCJmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiYXBwZW5kQ2hpbGROb2RlIiwicmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyIsInJlc29sdmVFbWJlZGRpbmdzIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJtYXAiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSIsInJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyIsInJlcGxhY2VtZW50Tm9kZXMiLCJyZXBsYWNlTm9kZXMiLCJjcmVhdGVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwicmVtb3ZlU3ViZGl2aXNpb25NYXJrZG93bk5vZGUiLCJtYXJrZG93bk5vZGVGcm9tTm9kZSIsInN1YmRpdmlzaW9uUmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsIm1hcmtkb3duTm9kZSIsIlJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyIsImZyb21Ob2RlIiwicmVtb3ZlZE5vZGUiLCJyZW1vdmVUb2tlbnMiLCJyZW1vdmVOb2RlIiwicmVtb3ZlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImFzSFRNTCIsImh0bWwiLCJpbmRlbnQiLCJFTVBUWV9TVFJJTkciLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJjbG9uZSIsIkRJVklTSU9OX1JVTEVfTkFNRSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiY29udGVudHNEZXB0aCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInN0YXJ0Iiwic2xpY2UiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImRlcHRoIiwiZ2V0RGVwdGgiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
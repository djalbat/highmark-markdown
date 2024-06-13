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
            key: "hasPageNumber",
            value: function hasPageNumber() {
                var node = this, pageNumberDirectiveMarkdownNode = (0, _query.pageNumberDirectiveMarkdownNodeFromNode)(node), pageNumber = pageNumberDirectiveMarkdownNode !== null;
                return pageNumber;
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
            value: function paginate(context) {
                var _this = this;
                var pageDivisionMarkdownNodes = context.pageDivisionMarkdownNodes, linesPerPage = context.linesPerPage, pageChildNodes = [], childNodes = this.getChildNodes();
                var pageLines = 0;
                childNodes.forEach(function(childNode) {
                    var pageChildNode = childNode, lines = pageChildNode.lines(context);
                    pageLines += lines;
                    pageChildNodes.push(pageChildNode);
                    if (pageLines > linesPerPage) {
                        var childNodes = _to_consumable_array(pageChildNodes), divisionMarkdownNode = DivisionMarkdownNode.fromChildNodesAndDivisionClassName(childNodes, _this.divisionClassName), pageDivisionMarkdownNode = divisionMarkdownNode; ///
                        pageDivisionMarkdownNodes.push(pageDivisionMarkdownNode);
                        clear(pageChildNodes);
                        pageLines = 0;
                    }
                });
                var pageDivisionMarkdownNode = this; ///
                pageDivisionMarkdownNodes.push(pageDivisionMarkdownNode);
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
            key: "removeFootnotesListMarkdownNode",
            value: function removeFootnotesListMarkdownNode(footnotesListMarkdownNode) {
                var childNode = footnotesListMarkdownNode; ///
                this.removeChildNode(childNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5pbXBvcnQgeyByZXBsYWNlTm9kZSwgcmVwbGFjZU5vZGVzLCByZXBsYWNlVG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9yZXBsYWNlXCI7XG5pbXBvcnQgeyBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsXG4gICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBjbGVhciwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBpc0lnbm9yZWQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaWdub3JlZCA9IChpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWQ7XG4gIH1cblxuICBoYXNQYWdlTnVtYmVyKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLFxuICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgcGFnZU51bWJlciA9IChwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICB9XG5cbiAgZmluZFBhcmVudE5vZGUoY2hpbGROb2RlLCBub2RlID0gdGhpcykge1xuICAgIGxldCBwYXJlbnROb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgICAgbm9kZXMuc29tZSgobm9kZSkgPT4ge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSwgbm9kZSk7XG5cbiAgICAgICAgICBpZiAocGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIHBhZ2luYXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZXMsIGxpbmVzUGVyUGFnZSB9ID0gY29udGV4dCxcbiAgICAgICAgICBwYWdlQ2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGxldCBwYWdlTGluZXMgPSAwO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHBhZ2VDaGlsZE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGxpbmVzID0gcGFnZUNoaWxkTm9kZS5saW5lcyhjb250ZXh0KTtcblxuICAgICAgcGFnZUxpbmVzICs9IGxpbmVzO1xuXG4gICAgICBwYWdlQ2hpbGROb2Rlcy5wdXNoKHBhZ2VDaGlsZE5vZGUpO1xuXG4gICAgICBpZiAocGFnZUxpbmVzID4gbGluZXNQZXJQYWdlKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBbICAvLy9cbiAgICAgICAgICAgICAgICAuLi5wYWdlQ2hpbGROb2Rlc1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21DaGlsZE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUoY2hpbGROb2RlcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSksXG4gICAgICAgICAgICAgIHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICAgICAgcGFnZURpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZSk7XG5cbiAgICAgICAgY2xlYXIocGFnZUNoaWxkTm9kZXMpO1xuXG4gICAgICAgIHBhZ2VMaW5lcyA9IDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwYWdlRGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICBwYWdlRGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2gocGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudHNDcmVhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kQ29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gaGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tSGVhZGluZ01hcmtkb3duTm9kZXMoaGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlVG9rZW5zID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmdldFRva2VucygpLFxuICAgICAgICAgICAgY2hpbGROb2RlID0gY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgICAgICByZXBsYWNlZE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlVG9rZW5zOyAvLy9cblxuICAgICAgcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG5cbiAgICAgIGNvbnRlbnRzQ3JlYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzQ3JlYXRlZDtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlcyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMubWFwKChlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUucmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zICE9PSBudWxsKSB7XG4gICAgICAgIGxldCB0b2tlbnM7XG5cbiAgICAgICAgdG9rZW5zID0gcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zLmdldFRva2VucygpO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSByZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICByZXBsYWNlbWVudE5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdG9rZW5zOyAvLy9cblxuICAgICAgICAoeyB0b2tlbnMgfSA9IGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgICAgICAgIHJlcGxhY2VkTm9kZSA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICByZXBsYWNlTm9kZXMocmVwbGFjZW1lbnROb2RlcywgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgICAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cblxuICByZW1vdmVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUNoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgYXNIVE1MKGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRlbnQgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChjaGlsZE5vZGVzSFRNTCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKGNoaWxkTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBESVZJU0lPTl9SVUxFX05BTUUsXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBjb250ZW50c0RlcHRoIH0gPSBjb250ZXh0LFxuICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGxldCB7IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyB9ID0gY29udGV4dDtcblxuICBjb25zdCBpbmRleCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5pbmRleE9mKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCArIDE7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLnNsaWNlKHN0YXJ0KTsgLy8vXG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzKTtcbiAgfSk7XG5cbiAgZmlsdGVyKGhlYWRpbmdNYXJrZG93bk5vZGVzLCAoaGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGRlcHRoID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXREZXB0aCgpO1xuXG4gICAgaWYgKGRlcHRoIDw9IGNvbnRlbnRzRGVwdGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRpbmdNYXJrZG93bk5vZGVzO1xufSJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsImhhc1BhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwicGFnZU51bWJlciIsImZpbmRQYXJlbnROb2RlIiwiY2hpbGROb2RlIiwicGFyZW50Tm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldENoaWxkTm9kZXMiLCJpbmRleCIsImluZGV4T2YiLCJub2RlcyIsInNvbWUiLCJwYWdpbmF0ZSIsInBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJsaW5lc1BlclBhZ2UiLCJwYWdlQ2hpbGROb2RlcyIsInBhZ2VMaW5lcyIsImZvckVhY2giLCJwYWdlQ2hpbGROb2RlIiwibGluZXMiLCJwdXNoIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lIiwicGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY3JlYXRlQ29udGVudHMiLCJjb250ZW50c0NyZWF0ZWQiLCJjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kQ29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsInRva2VucyIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImZyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZVRva2VucyIsImdldFRva2VucyIsInJlcGxhY2VkTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZU5vZGUiLCJyZXBsYWNlVG9rZW5zIiwiY3JlYXRlRm9vdG5vdGVzIiwiZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImFwcGVuZENoaWxkTm9kZSIsInJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMiLCJyZXNvbHZlRW1iZWRkaW5ncyIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwibWFwIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJyZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZU5vZGVzIiwiY3JlYXRlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsInJlbW92ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJhc0hUTUwiLCJodG1sIiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiY2xvbmUiLCJESVZJU0lPTl9SVUxFX05BTUUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsImNvbnRlbnRzRGVwdGgiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzdGFydCIsInNsaWNlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJkZXB0aCIsImdldERlcHRoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBcUJxQkE7Ozt5QkFuQlU7K0RBRU47bUVBQ1k7b0VBQ0M7eUJBRVQ7eUJBQ007eUJBQ087dUJBQ2U7cUJBTUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILHFDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLHFCQUNQSSxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCO2dDQURqRVQ7O2tDQUVYSSxVQUFVQyxZQUFZQyxZQUFZQyxTQUFTQztRQUVqRCxNQUFLQyxpQkFBaUIsR0FBR0E7OztrQkFKUlQ7O1lBT25CVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGlCQUFpQjtZQUMvQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJGLGlCQUFpQjtnQkFDcEMsSUFBSSxDQUFDQSxpQkFBaUIsR0FBR0E7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFDZixJQUFNRCxZQUFZLElBQUksQ0FBQ0gsaUJBQWlCLEVBQUUsR0FBRztnQkFFN0MsT0FBT0c7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksRUFDWEMsOEJBQThCQyxJQUFBQSwwQ0FBbUMsRUFBQ0YsT0FDbEVHLFVBQVdGLGdDQUFnQztnQkFFakQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixPQUFPLElBQUksRUFDWEssa0NBQWtDQyxJQUFBQSw4Q0FBdUMsRUFBQ04sT0FDMUVPLGFBQWNGLG9DQUFvQztnQkFFeEQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTOztvQkFBRVQsT0FBQUEsaUVBQU8sSUFBSTtnQkFDbkMsSUFBSVUsYUFBYTtnQkFFakIsSUFBTUMsc0JBQXNCWCxLQUFLWSxpQkFBaUI7Z0JBRWxELElBQUlELHFCQUFxQjtvQkFDdkIsSUFBTUUsa0JBQWtCYixNQUNsQlYsYUFBYXVCLGdCQUFnQkMsYUFBYSxJQUMxQ0MsUUFBUXpCLFdBQVcwQixPQUFPLENBQUNQO29CQUVqQyxJQUFJTSxVQUFVLENBQUMsR0FBRzt3QkFDaEJMLGFBQWFWLE1BQU8sR0FBRztvQkFDekIsT0FBTzt3QkFDTCxJQUFNaUIsUUFBUTNCLFlBQVksR0FBRzt3QkFFN0IyQixNQUFNQyxJQUFJLENBQUMsU0FBQ2xCOzRCQUNWVSxhQUFhLE1BQUtGLGNBQWMsQ0FBQ0MsV0FBV1Q7NEJBRTVDLElBQUlVLGVBQWUsTUFBTTtnQ0FDdkIsT0FBTzs0QkFDVDt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNyQixPQUFPOztnQkFDZCxJQUFRc0IsNEJBQTRDdEIsUUFBNUNzQiwyQkFBMkJDLGVBQWlCdkIsUUFBakJ1QixjQUM3QkMsaUJBQWlCLEVBQUUsRUFDbkJoQyxhQUFhLElBQUksQ0FBQ3dCLGFBQWE7Z0JBRXJDLElBQUlTLFlBQVk7Z0JBRWhCakMsV0FBV2tDLE9BQU8sQ0FBQyxTQUFDZjtvQkFDbEIsSUFBTWdCLGdCQUFnQmhCLFdBQ2hCaUIsUUFBUUQsY0FBY0MsS0FBSyxDQUFDNUI7b0JBRWxDeUIsYUFBYUc7b0JBRWJKLGVBQWVLLElBQUksQ0FBQ0Y7b0JBRXBCLElBQUlGLFlBQVlGLGNBQWM7d0JBQzVCLElBQU0vQixhQUNFLHFCQUFHZ0MsaUJBRUxNLHVCQUF1QjNDLEFBcEZoQkEscUJBb0ZxQzRDLGtDQUFrQyxDQUFDdkMsWUFBWSxNQUFLSSxpQkFBaUIsR0FDakhvQywyQkFBMkJGLHNCQUF1QixHQUFHO3dCQUUzRFIsMEJBQTBCTyxJQUFJLENBQUNHO3dCQUUvQjVDLE1BQU1vQzt3QkFFTkMsWUFBWTtvQkFDZDtnQkFDRjtnQkFFQSxJQUFNTywyQkFBMkIsSUFBSSxFQUFHLEdBQUc7Z0JBRTNDViwwQkFBMEJPLElBQUksQ0FBQ0c7WUFDakM7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZWpDLE9BQU87Z0JBQ3BCLElBQUlrQyxrQkFBa0I7Z0JBRXRCLElBQU1oQyxPQUFPLElBQUksRUFDWGlDLGdDQUFnQ0MsSUFBQUEsNENBQXFDLEVBQUNsQztnQkFFNUUsSUFBSWlDLGtDQUFrQyxNQUFNO29CQUMxQyxJQUFNTCx1QkFBdUIsSUFBSSxFQUMzQk8sdUJBQXVCQyw2RUFBNkVSLHNCQUFzQkssK0JBQStCbkMsVUFDekp1Qyw2QkFBNkJGLHFCQUFxQkcsTUFBTTtvQkFFOUQsSUFBSUQsK0JBQStCLEdBQUc7d0JBQ3BDO29CQUNGO29CQUVBLElBQU0sQUFBRUUsU0FBV3pDLFFBQVh5QyxRQUNGQywyQkFBMkJDLHFCQUF3QixDQUFDQyx3QkFBd0IsQ0FBQ1Asc0JBQXNCckMsVUFDbkc2QyxpQ0FBaUNILHlCQUF5QkksU0FBUyxJQUNuRW5DLFlBQVl3QiwrQkFDWnZCLGFBQWEsSUFBSSxDQUFDRixjQUFjLENBQUNDLFlBQ2pDb0MsZUFBZVosK0JBQ2ZhLGtCQUFrQk4sMEJBQ2xCTyxvQkFBb0JKLGdDQUFnQyxHQUFHO29CQUU3REssSUFBQUEsb0JBQVcsRUFBQ0YsaUJBQWlCRCxjQUFjbkM7b0JBRTNDdUMsSUFBQUEsc0JBQWEsRUFBQ0YsbUJBQW1CRixjQUFjTjtvQkFFL0NQLGtCQUFrQjtnQkFDcEI7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCcEQsT0FBTztnQkFDckIsSUFBTUUsT0FBTyxJQUFJLEVBQ1htRCxpQ0FBaUNDLElBQUFBLDZDQUFzQyxFQUFDcEQ7Z0JBRTlFLElBQUltRCxtQ0FBbUMsTUFBTTtvQkFDM0MsSUFBTXZCLHVCQUF1QixJQUFJLEVBQzNCeUIsNEJBQTRCQyxzQkFBeUIsQ0FBQ0Msd0JBQXdCLENBQUMzQixzQkFBc0I5QjtvQkFFM0csSUFBSXVELDhCQUE4QixNQUFNO3dCQUN0QyxJQUFNNUMsWUFBWTRDLDJCQUE0QixHQUFHO3dCQUVqRHpCLHFCQUFxQjRCLGVBQWUsQ0FBQy9DO3dCQUVyQ2dELElBQUFBLG9DQUF5QixFQUFDN0Isc0JBQXNCeUIsMkJBQTJCdkQ7b0JBQzdFO2dCQUNGO1lBQ0Y7OztZQUVBNEQsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjVELE9BQU87O2dCQUN2QixJQUFNRSxPQUFPLElBQUksRUFDWDJELDhCQUE4QkMsSUFBQUEsMENBQW1DLEVBQUM1RDtnQkFFeEUyRCw0QkFBNEJFLEdBQUcsQ0FBQyxTQUFDQztvQkFDL0IsSUFBTUMsMkJBQTJCRCwyQkFBMkJDLHdCQUF3QixDQUFDakU7b0JBRXJGLElBQUlpRSw2QkFBNkIsTUFBTTt3QkFDckMsSUFBSXhCO3dCQUVKQSxTQUFTd0IseUJBQXlCbkIsU0FBUzt3QkFFM0MsSUFBTXRELGFBQWF5RSx5QkFBeUJqRCxhQUFhLElBQ25Ea0QsbUJBQW1CMUUsWUFDbkJ5RCxvQkFBb0JSLFFBQVEsR0FBRzt3QkFFbENBLFNBQVd6QyxRQUFYeUM7d0JBRUgsSUFBTTlCLFlBQVlxRCw0QkFDWnBELGFBQWEsTUFBS0YsY0FBYyxDQUFDQyxZQUNqQ29DLGVBQWVpQiw0QkFBNEIsR0FBRzt3QkFFcERHLElBQUFBLHFCQUFZLEVBQUNELGtCQUFrQm5CLGNBQWNuQzt3QkFFN0N1QyxJQUFBQSxzQkFBYSxFQUFDRixtQkFBbUJGLGNBQWNOO29CQUNqRDtnQkFDRjtZQUNGOzs7WUFFQTJCLEtBQUFBO21CQUFBQSxTQUFBQSxnQ0FBZ0NwRSxPQUFPO2dCQUNyQyxJQUFNOEIsdUJBQXVCLElBQUksRUFDM0J5Qiw0QkFBNEJDLHNCQUF5QixDQUFDQyx3QkFBd0IsQ0FBQzNCLHNCQUFzQjlCO2dCQUUzRyxPQUFPdUQ7WUFDVDs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQSxnQ0FBZ0NkLHlCQUF5QjtnQkFDdkQsSUFBTTVDLFlBQVk0QywyQkFBNEIsR0FBRztnQkFFakQsSUFBSSxDQUFDZSxlQUFlLENBQUMzRDtZQUN2Qjs7O1lBRUE0RCxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT3ZFLE9BQU87Z0JBQ1osSUFBSXdFLE9BQU87Z0JBRVgsSUFBTUMsU0FBU0MsdUJBQVksRUFDckJDLGlCQUFpQixJQUFJLENBQUNDLGdCQUFnQixDQUFDSCxRQUFRekU7Z0JBRXJELElBQUkyRSxtQkFBbUIsTUFBTTtvQkFDM0IsSUFBTUUsY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQzdFLFVBQy9COEUsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQzlFO29CQUVuQ3dFLE9BQU8sQUFBQyxHQUFXSyxPQUFUSixRQUNkRSxPQUR1QkUsYUFBWSxNQUNsQkosT0FBakJFLGdCQUEwQkcsT0FBVEwsUUFBb0IsT0FBWEssWUFBVztnQkFFbkM7Z0JBRUEsT0FBT047WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBVSxPQUFPLHVCQXBORTVGLGlDQW9OSTRGLFNBQU4sSUFBSyxhQUFPLElBQUksQ0FBQ25GLGlCQUFpQjtZQUFHOzs7O1lBRS9DbUMsS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DdkMsVUFBVSxFQUFFSSxpQkFBaUI7Z0JBQ3JFLElBQU1MLFdBQVd5Riw2QkFBa0IsRUFDN0J0RixVQUFVLE1BQ1ZvQyx1QkFBdUJtRCxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0F6TnpEL0Ysc0JBeU5nRkksVUFBVUMsWUFBWUUsU0FBU0U7Z0JBRWhJLE9BQU9rQztZQUNUOzs7WUFFT29ELEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQzNGLFFBQVEsRUFBRUMsVUFBVSxFQUFFRSxPQUFPO2dCQUNuRSxJQUFNRSxvQkFBb0IsTUFDcEJrQyx1QkFBdUJtRCxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0FoT3pEL0Ysc0JBZ09nRkksVUFBVUMsWUFBWUUsU0FBU0U7Z0JBRWhJLE9BQU9rQztZQUNUOzs7V0FuT21CM0M7RUFBNkI4RixpQkFBWTtBQXNPOUQsU0FBUzNDLDZFQUE2RVIsb0JBQW9CLEVBQUVLLDZCQUE2QixFQUFFbkMsT0FBTztJQUNoSixJQUFNLEFBQUVtRixnQkFBa0JuRixRQUFsQm1GLGVBQ0Y5Qyx1QkFBdUIsRUFBRTtJQUUvQixJQUFJLEFBQUUrQyx3QkFBMEJwRixRQUExQm9GO0lBRU4sSUFBTW5FLFFBQVFtRSxzQkFBc0JsRSxPQUFPLENBQUNZLHVCQUN0Q3VELFFBQVFwRSxRQUFRO0lBRXRCbUUsd0JBQXdCQSxzQkFBc0JFLEtBQUssQ0FBQ0QsUUFBUSxHQUFHO0lBRS9ERCxzQkFBc0IxRCxPQUFPLENBQUMsU0FBQ0k7UUFDN0IsSUFBTTVCLE9BQU80QixzQkFBdUIsR0FBRztRQUV2Q3lELElBQUFBLG1DQUE0QixFQUFDckYsTUFBTW1DO0lBQ3JDO0lBRUEvQyxPQUFPK0Msc0JBQXNCLFNBQUNtRDtRQUM1QixJQUFNQyxRQUFRRCxvQkFBb0JFLFFBQVE7UUFFMUMsSUFBSUQsU0FBU04sZUFBZTtZQUMxQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU85QztBQUNUIn0=
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
                var pageChildNodesLength = pageChildNodes.length;
                if (pageChildNodesLength > 0) {
                    var childNodes1 = _to_consumable_array(pageChildNodes), divisionMarkdownNode = DivisionMarkdownNode.fromChildNodesAndDivisionClassName(childNodes1, this.divisionClassName), pageDivisionMarkdownNode = divisionMarkdownNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5pbXBvcnQgeyByZXBsYWNlTm9kZSwgcmVwbGFjZU5vZGVzLCByZXBsYWNlVG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9yZXBsYWNlXCI7XG5pbXBvcnQgeyBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsXG4gICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBjbGVhciwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBpc0lnbm9yZWQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaWdub3JlZCA9IChpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWQ7XG4gIH1cblxuICBoYXNQYWdlTnVtYmVyKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLFxuICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgcGFnZU51bWJlciA9IChwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwYWdlTnVtYmVyO1xuICB9XG5cbiAgZmluZFBhcmVudE5vZGUoY2hpbGROb2RlLCBub2RlID0gdGhpcykge1xuICAgIGxldCBwYXJlbnROb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgICAgbm9kZXMuc29tZSgobm9kZSkgPT4ge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSwgbm9kZSk7XG5cbiAgICAgICAgICBpZiAocGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIHBhZ2luYXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZXMsIGxpbmVzUGVyUGFnZSB9ID0gY29udGV4dCxcbiAgICAgICAgICBwYWdlQ2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGxldCBwYWdlTGluZXMgPSAwO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHBhZ2VDaGlsZE5vZGUgPSBjaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGxpbmVzID0gcGFnZUNoaWxkTm9kZS5saW5lcyhjb250ZXh0KTtcblxuICAgICAgcGFnZUxpbmVzICs9IGxpbmVzO1xuXG4gICAgICBwYWdlQ2hpbGROb2Rlcy5wdXNoKHBhZ2VDaGlsZE5vZGUpO1xuXG4gICAgICBpZiAocGFnZUxpbmVzID4gbGluZXNQZXJQYWdlKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBbICAvLy9cbiAgICAgICAgICAgICAgICAuLi5wYWdlQ2hpbGROb2Rlc1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21DaGlsZE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUoY2hpbGROb2RlcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSksXG4gICAgICAgICAgICAgIHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICAgICAgcGFnZURpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZSk7XG5cbiAgICAgICAgY2xlYXIocGFnZUNoaWxkTm9kZXMpO1xuXG4gICAgICAgIHBhZ2VMaW5lcyA9IDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwYWdlQ2hpbGROb2Rlc0xlbmd0aCA9IHBhZ2VDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChwYWdlQ2hpbGROb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBbICAvLy9cbiAgICAgICAgICAgICAgLi4ucGFnZUNoaWxkTm9kZXNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21DaGlsZE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUoY2hpbGROb2RlcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSksXG4gICAgICAgICAgICBwYWdlRGl2aXNpb25NYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgICBwYWdlRGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2gocGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDb250ZW50cyhjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZENvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzKGhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZVRva2VucyA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5nZXRUb2tlbnMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUpLFxuICAgICAgICAgICAgcmVwbGFjZWROb2RlID0gY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZVRva2VuczsgLy8vXG5cbiAgICAgIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuXG4gICAgICBjb250ZW50c0NyZWF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0NyZWF0ZWQ7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7ICAvLy9cblxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5hcHBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgICByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVFbWJlZGRpbmdzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzLm1hcCgoZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlLnJlcGxhY2VtZW50Tm9kZUFuZFRva2Vucyhjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgdG9rZW5zO1xuXG4gICAgICAgIHRva2VucyA9IHJlcGxhY2VtZW50Tm9kZUFuZFRva2Vucy5nZXRUb2tlbnMoKTtcblxuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnROb2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRva2VuczsgLy8vXG5cbiAgICAgICAgKHsgdG9rZW5zIH0gPSBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUpLFxuICAgICAgICAgICAgICByZXBsYWNlZE5vZGUgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgICAgcmVwbGFjZU5vZGVzKHJlcGxhY2VtZW50Tm9kZXMsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICAgICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgcmVtb3ZlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIGFzSFRNTChjb250ZXh0KSB7XG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZW50ID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbUNoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShjaGlsZE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRElWSVNJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kQ29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgY29udGVudHNEZXB0aCB9ID0gY29udGV4dCxcbiAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBbXTtcblxuICBsZXQgeyBkaXZpc2lvbk1hcmtkb3duTm9kZXMgfSA9IGNvbnRleHQ7XG5cbiAgY29uc3QgaW5kZXggPSBkaXZpc2lvbk1hcmtkb3duTm9kZXMuaW5kZXhPZihkaXZpc2lvbk1hcmtkb3duTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXggKyAxO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zbGljZShzdGFydCk7IC8vL1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlLCBoZWFkaW5nTWFya2Rvd25Ob2Rlcyk7XG4gIH0pO1xuXG4gIGZpbHRlcihoZWFkaW5nTWFya2Rvd25Ob2RlcywgKGhlYWRpbmdNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBkZXB0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0RGVwdGgoKTtcblxuICAgIGlmIChkZXB0aCA8PSBjb250ZW50c0RlcHRoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkaW5nTWFya2Rvd25Ob2Rlcztcbn0iXSwibmFtZXMiOlsiRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjbGVhciIsImFycmF5VXRpbGl0aWVzIiwiZmlsdGVyIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImlzSWdub3JlZCIsIm5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImlnbm9yZWQiLCJoYXNQYWdlTnVtYmVyIiwicGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsInBhZ2VOdW1iZXIiLCJmaW5kUGFyZW50Tm9kZSIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwibm9kZXMiLCJzb21lIiwicGFnaW5hdGUiLCJwYWdlRGl2aXNpb25NYXJrZG93bk5vZGVzIiwibGluZXNQZXJQYWdlIiwicGFnZUNoaWxkTm9kZXMiLCJwYWdlTGluZXMiLCJmb3JFYWNoIiwicGFnZUNoaWxkTm9kZSIsImxpbmVzIiwicHVzaCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZnJvbUNoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZSIsInBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZSIsInBhZ2VDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY3JlYXRlQ29udGVudHMiLCJjb250ZW50c0NyZWF0ZWQiLCJjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kQ29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCIsInRva2VucyIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImZyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZVRva2VucyIsImdldFRva2VucyIsInJlcGxhY2VkTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZU5vZGUiLCJyZXBsYWNlVG9rZW5zIiwiY3JlYXRlRm9vdG5vdGVzIiwiZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImFwcGVuZENoaWxkTm9kZSIsInJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMiLCJyZXNvbHZlRW1iZWRkaW5ncyIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwibWFwIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJyZXBsYWNlbWVudE5vZGVBbmRUb2tlbnMiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZU5vZGVzIiwiY3JlYXRlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsInJlbW92ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJhc0hUTUwiLCJodG1sIiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiY2xvbmUiLCJESVZJU0lPTl9SVUxFX05BTUUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsImNvbnRlbnRzRGVwdGgiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzdGFydCIsInNsaWNlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJkZXB0aCIsImdldERlcHRoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
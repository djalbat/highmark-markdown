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
var _replacement = /*#__PURE__*/ _interop_require_default(require("../../replacement"));
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
                var linesPerPage = context.linesPerPage, childNodes = this.getChildNodes(), replacements = this.removeDirectiveMarkdownNodes(context), pageChildNodes = [];
                var pageLines = 0;
                childNodes.forEach(function(childNode) {
                    var lines = childNode.lines(context), pageChildNode = childNode; ///
                    pageLines += lines;
                    pageChildNodes.push(pageChildNode);
                    if (pageLines > linesPerPage) {
                        var divisionMarkdownNode = DivisionMarkdownNode.fromReplacementsPageChildNodesAndDivisionClassName(replacements, pageChildNodes, _this.divisionClassName, context), pageDivisionMarkdownNode = divisionMarkdownNode; ///
                        pageDivisionMarkdownNodes.push(pageDivisionMarkdownNode);
                        clear(pageChildNodes);
                        pageLines = 0;
                    }
                });
                if (pageLines > 0) {
                    var divisionMarkdownNode = DivisionMarkdownNode.fromReplacementsPageChildNodesAndDivisionClassName(replacements, pageChildNodes, this.divisionClassName, context), pageDivisionMarkdownNode = divisionMarkdownNode; ///
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
                    var replacement = embedDirectiveMarkdownNode.replacement(context);
                    if (replacement !== null) {
                        var tokens;
                        tokens = replacement.getTokens();
                        var childNodes = replacement.getChildNodes(), replacementNodes = childNodes, replacementTokens = tokens; ///
                        tokens = context.tokens;
                        var childNode = embedDirectiveMarkdownNode, parentNode = _this.findParentNode(childNode), replacedNode = embedDirectiveMarkdownNode; ///
                        (0, _replace.replaceNodes)(replacementNodes, replacedNode, parentNode);
                        (0, _replace.replaceTokens)(replacementTokens, replacedNode, tokens);
                    }
                });
            }
        },
        {
            key: "removeDirectiveMarkdownNodes",
            value: function removeDirectiveMarkdownNodes(context) {
                var _this = this;
                var markdownNodeFromNodes = [
                    _query.footnotesDirectiveMarkdownNodeFromNode,
                    _query.pageNumberDirectiveMarkdownNodeFromNode
                ], replacements = markdownNodeFromNodes.reduce(function(replacements, markdownNodeFromNode) {
                    var replacement = _this.removeSubdivisionMarkdownNode(markdownNodeFromNode, context);
                    if (replacement !== null) {
                        replacements.push(replacement);
                    }
                    return replacements;
                }, []);
                return replacements;
            }
        },
        {
            key: "removeSubdivisionMarkdownNode",
            value: function removeSubdivisionMarkdownNode(markdownNodeFromNode, context) {
                var subdivisionReplacement = null;
                var tokens = context.tokens, node = this, parentNode = this, subDivisionMarkdownNodes = (0, _query.subDivisionMarkdownNodesFromNode)(node);
                subDivisionMarkdownNodes.some(function(subDivisionMarkdownNode) {
                    var node = subDivisionMarkdownNode, markdownNode = markdownNodeFromNode(node);
                    if (markdownNode !== null) {
                        var replacement = _replacement.default.fromNode(node, context);
                        subdivisionReplacement = replacement; ///
                        var removedNode = subDivisionMarkdownNode; ///
                        (0, _replace.removeTokens)(removedNode, tokens);
                        (0, _replace.removeNode)(removedNode, parentNode);
                        return true;
                    }
                });
                return subdivisionReplacement;
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
            key: "fromReplacementsPageChildNodesAndDivisionClassName",
            value: function fromReplacementsPageChildNodesAndDivisionClassName(replacements, pageChildNodes, divisionClassName, context) {
                var ruleName = _ruleNames.DIVISION_RULE_NAME, childNodes = _to_consumable_array(pageChildNodes), opacity = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                replacements.forEach(function(replacement) {
                    replacement.appendTo(divisionMarkdownNode, context);
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudFwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5pbXBvcnQgeyByZW1vdmVOb2RlLCByZW1vdmVUb2tlbnMsIHJlcGxhY2VOb2RlLCByZXBsYWNlTm9kZXMsIHJlcGxhY2VUb2tlbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3JlcGxhY2VcIjtcbmltcG9ydCB7IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsXG4gICAgICAgICBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLFxuICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsXG4gICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgY2xlYXIsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25DbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBzZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgaXNJZ25vcmVkKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLFxuICAgICAgICAgIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGlnbm9yZWQgPSAoaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBpZ25vcmVkO1xuICB9XG5cbiAgZmluZFBhcmVudE5vZGUoY2hpbGROb2RlLCBub2RlID0gdGhpcykge1xuICAgIGxldCBwYXJlbnROb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgICAgbm9kZXMuc29tZSgobm9kZSkgPT4ge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSwgbm9kZSk7XG5cbiAgICAgICAgICBpZiAocGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIHBhZ2luYXRlKHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGxpbmVzUGVyUGFnZSB9ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnRzID0gdGhpcy5yZW1vdmVEaXJlY3RpdmVNYXJrZG93bk5vZGVzKGNvbnRleHQpLFxuICAgICAgICAgIHBhZ2VDaGlsZE5vZGVzID0gW107XG5cbiAgICBsZXQgcGFnZUxpbmVzID0gMDtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBsaW5lcyA9IGNoaWxkTm9kZS5saW5lcyhjb250ZXh0KSxcbiAgICAgICAgICAgIHBhZ2VDaGlsZE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgcGFnZUxpbmVzICs9IGxpbmVzO1xuXG4gICAgICBwYWdlQ2hpbGROb2Rlcy5wdXNoKHBhZ2VDaGlsZE5vZGUpO1xuXG4gICAgICBpZiAocGFnZUxpbmVzID4gbGluZXNQZXJQYWdlKSB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gRGl2aXNpb25NYXJrZG93bk5vZGUuZnJvbVJlcGxhY2VtZW50c1BhZ2VDaGlsZE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUocmVwbGFjZW1lbnRzLCBwYWdlQ2hpbGROb2RlcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICAgICAgcGFnZURpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZSk7XG5cbiAgICAgICAgY2xlYXIocGFnZUNoaWxkTm9kZXMpO1xuXG4gICAgICAgIHBhZ2VMaW5lcyA9IDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGFnZUxpbmVzID4gMCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUmVwbGFjZW1lbnRzUGFnZUNoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShyZXBsYWNlbWVudHMsIHBhZ2VDaGlsZE5vZGVzLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICAgIHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZXMucHVzaChwYWdlRGl2aXNpb25NYXJrZG93bk5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudHNDcmVhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kQ29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gaGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tSGVhZGluZ01hcmtkb3duTm9kZXMoaGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlVG9rZW5zID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmdldFRva2VucygpLFxuICAgICAgICAgICAgY2hpbGROb2RlID0gY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgICAgICByZXBsYWNlZE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlVG9rZW5zOyAvLy9cblxuICAgICAgcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG5cbiAgICAgIGNvbnRlbnRzQ3JlYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzQ3JlYXRlZDtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlcyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMubWFwKChlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZS5yZXBsYWNlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGxldCB0b2tlbnM7XG5cbiAgICAgICAgdG9rZW5zID0gcmVwbGFjZW1lbnQuZ2V0VG9rZW5zKCk7XG5cbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHJlcGxhY2VtZW50LmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnROb2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRva2VuczsgLy8vXG5cbiAgICAgICAgKHsgdG9rZW5zIH0gPSBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUpLFxuICAgICAgICAgICAgICByZXBsYWNlZE5vZGUgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgICAgcmVwbGFjZU5vZGVzKHJlcGxhY2VtZW50Tm9kZXMsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICAgICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlRnJvbU5vZGVzID0gW1xuICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlXG4gICAgICBdLFxuICAgICAgcmVwbGFjZW1lbnRzID0gbWFya2Rvd25Ob2RlRnJvbU5vZGVzLnJlZHVjZSgocmVwbGFjZW1lbnRzLCBtYXJrZG93bk5vZGVGcm9tTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IHRoaXMucmVtb3ZlU3ViZGl2aXNpb25NYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlRnJvbU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHJlcGxhY2VtZW50cy5wdXNoKHJlcGxhY2VtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXBsYWNlbWVudHM7XG4gICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRzO1xuICB9XG5cbiAgcmVtb3ZlU3ViZGl2aXNpb25NYXJrZG93bk5vZGUobWFya2Rvd25Ob2RlRnJvbU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3ViZGl2aXNpb25SZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHN1YmRpdmlzaW9uUmVwbGFjZW1lbnQgPSByZXBsYWNlbWVudDsgLy8vXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlZE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgICAgIHJlbW92ZVRva2VucyhyZW1vdmVkTm9kZSwgdG9rZW5zKTtcblxuICAgICAgICByZW1vdmVOb2RlKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJkaXZpc2lvblJlcGxhY2VtZW50O1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgYXNIVE1MKGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRlbnQgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChjaGlsZE5vZGVzSFRNTCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tUmVwbGFjZW1lbnRzUGFnZUNoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShyZXBsYWNlbWVudHMsIHBhZ2VDaGlsZE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRElWSVNJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICAuLi5wYWdlQ2hpbGROb2Rlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXBsYWNlbWVudHMuZm9yRWFjaCgocmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIHJlcGxhY2VtZW50LmFwcGVuZFRvKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZENvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IGNvbnRlbnRzRGVwdGggfSA9IGNvbnRleHQsXG4gICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzID0gW107XG5cbiAgbGV0IHsgZGl2aXNpb25NYXJrZG93bk5vZGVzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IGluZGV4ID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLmluZGV4T2YoZGl2aXNpb25NYXJrZG93bk5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4ICsgMTtcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXMuc2xpY2Uoc3RhcnQpOyAvLy9cblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSwgaGVhZGluZ01hcmtkb3duTm9kZXMpO1xuICB9KTtcblxuICBmaWx0ZXIoaGVhZGluZ01hcmtkb3duTm9kZXMsIChoZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgZGVwdGggPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmdldERlcHRoKCk7XG5cbiAgICBpZiAoZGVwdGggPD0gY29udGVudHNEZXB0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaGVhZGluZ01hcmtkb3duTm9kZXM7XG59Il0sIm5hbWVzIjpbIkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJvcGFjaXR5IiwiZG9tRWxlbWVudCIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiZ2V0RGl2aXNpb25DbGFzc05hbWUiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJpc0lnbm9yZWQiLCJub2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJpZ25vcmVkIiwiZmluZFBhcmVudE5vZGUiLCJjaGlsZE5vZGUiLCJwYXJlbnROb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0Q2hpbGROb2RlcyIsImluZGV4IiwiaW5kZXhPZiIsIm5vZGVzIiwic29tZSIsInBhZ2luYXRlIiwicGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImxpbmVzUGVyUGFnZSIsInJlcGxhY2VtZW50cyIsInJlbW92ZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMiLCJwYWdlQ2hpbGROb2RlcyIsInBhZ2VMaW5lcyIsImZvckVhY2giLCJsaW5lcyIsInBhZ2VDaGlsZE5vZGUiLCJwdXNoIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tUmVwbGFjZW1lbnRzUGFnZUNoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZSIsInBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNyZWF0ZUNvbnRlbnRzIiwiY29udGVudHNDcmVhdGVkIiwiY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXMiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZENvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJ0b2tlbnMiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJDb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tSGVhZGluZ01hcmtkb3duTm9kZXMiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGVUb2tlbnMiLCJnZXRUb2tlbnMiLCJyZXBsYWNlZE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFRva2VucyIsInJlcGxhY2VOb2RlIiwicmVwbGFjZVRva2VucyIsImNyZWF0ZUZvb3Rub3RlcyIsImZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJyZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSIsIm1hcCIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwicmVwbGFjZW1lbnQiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZU5vZGVzIiwibWFya2Rvd25Ob2RlRnJvbU5vZGVzIiwicGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwicmVkdWNlIiwibWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJyZW1vdmVTdWJkaXZpc2lvbk1hcmtkb3duTm9kZSIsInN1YmRpdmlzaW9uUmVwbGFjZW1lbnQiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwibWFya2Rvd25Ob2RlIiwiUmVwbGFjZW1lbnQiLCJmcm9tTm9kZSIsInJlbW92ZWROb2RlIiwicmVtb3ZlVG9rZW5zIiwicmVtb3ZlTm9kZSIsImNyZWF0ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJhc0hUTUwiLCJodG1sIiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiY2xvbmUiLCJESVZJU0lPTl9SVUxFX05BTUUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsImFwcGVuZFRvIiwiY29udGVudHNEZXB0aCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInN0YXJ0Iiwic2xpY2UiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImRlcHRoIiwiZ2V0RGVwdGgiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBdUJxQkE7Ozt5QkFyQlU7K0RBRU47a0VBQ0Q7bUVBQ2E7b0VBQ0M7eUJBRVQ7eUJBQ007eUJBQ087dUJBQ3lDO3FCQU8zQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
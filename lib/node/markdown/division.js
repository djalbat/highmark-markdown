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
var _replacement = /*#__PURE__*/ _interop_require_default(require("../../replacement"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _contentsList = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/contentsList"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/footnotesList"));
var _constants = require("../../constants");
var _ruleNames = require("../../ruleNames");
var _node = require("../../utilities/node");
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
            value: function paginate(context) {
                var _this = this;
                var linesPerPage = context.linesPerPage, childNodes = this.getChildNodes(), paginatedChildNodes = [], divisionMarkdownNodes = [], subDivisionReplacements = this.removeSubdivisionMarkdownNodes(_query.pageNumberDirectiveMarkdownNodeFromNode, context);
                var totalLines = 0;
                childNodes.forEach(function(childNode) {
                    var lines = childNode.lines(context), paginatedChildNode = childNode; ///
                    totalLines += lines;
                    paginatedChildNodes.push(paginatedChildNode);
                    if (totalLines > linesPerPage) {
                        var divisionMarkdownNode = DivisionMarkdownNode.fromSubdivisionReplacementsPaginatedChildNodesAndDivisionClassName(subDivisionReplacements, paginatedChildNodes, _this.divisionClassName, context);
                        divisionMarkdownNodes.push(divisionMarkdownNode);
                        clear(paginatedChildNodes);
                        totalLines = 0;
                    }
                });
                if (totalLines > 0) {
                    var divisionMarkdownNode = DivisionMarkdownNode.fromSubdivisionReplacementsPaginatedChildNodesAndDivisionClassName(subDivisionReplacements, paginatedChildNodes, this.divisionClassName, context);
                    divisionMarkdownNodes.push(divisionMarkdownNode);
                }
                return divisionMarkdownNodes;
            }
        },
        {
            key: "setPageNumber",
            value: function setPageNumber(pageNumber) {
                var node = this, pageNumberDirective = (0, _query.pageNumberDirectiveMarkdownNodeFromNode)(node);
                if (pageNumberDirective !== null) {
                    pageNumberDirective.setPageNumber(pageNumber);
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
                    (0, _node.replaceNode)(replacementNode, replacedNode, parentNode);
                    (0, _node.replaceTokens)(replacementTokens, replacedNode, tokens);
                    contentsCreated = true;
                }
                return contentsCreated;
            }
        },
        {
            key: "createFootnotes",
            value: function createFootnotes(footnoteReplacements, context) {
                if (footnoteReplacements === null) {
                    return;
                }
                var divisionMarkdownNode = this, footnotesListMarkdownNode = _footnotesList.default.fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context);
                if (footnotesListMarkdownNode === null) {
                    return;
                }
                var node = footnotesListMarkdownNode, replacement = _replacement.default.fromNode(node, context);
                replacement.appendTo(divisionMarkdownNode, context);
            }
        },
        {
            key: "prepareFootnotes",
            value: function prepareFootnotes(context) {
                var subdivisionReplacements;
                subdivisionReplacements = this.removeSubdivisionMarkdownNodes(_query.footnoteMarkdownNodsFromNode, context);
                var footnoteReplacements = footnoteReplacementsFromSubdivisionReplacements(subdivisionReplacements);
                subdivisionReplacements = this.removeSubdivisionMarkdownNodes(_query.footnotesDirectiveMarkdownNodeFromNode, context);
                var subdivisionReplacementsLength = subdivisionReplacements.length;
                if (subdivisionReplacementsLength === 0) {
                    footnoteReplacements = null;
                }
                return footnoteReplacements;
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
                        (0, _node.replaceNodes)(replacementNodes, replacedNode, parentNode);
                        (0, _node.replaceTokens)(replacementTokens, replacedNode, tokens);
                    }
                });
            }
        },
        {
            key: "removeSubdivisionMarkdownNodes",
            value: function removeSubdivisionMarkdownNodes(markdownNodeFromNode, context) {
                var tokens = context.tokens, node = this, parentNode = this, subDivisionMarkdownNodes = (0, _query.subDivisionMarkdownNodesFromNode)(node), subDivisionReplacements = subDivisionMarkdownNodes.reduce(function(subDivisionReplacements, subDivisionMarkdownNode) {
                    var node = subDivisionMarkdownNode, markdownNode = markdownNodeFromNode(node);
                    if (markdownNode !== null) {
                        var removedNode = subDivisionMarkdownNode, subDivisionReplacement = _replacement.default.fromNode(subDivisionMarkdownNode, context);
                        subDivisionReplacements.push(subDivisionReplacement);
                        (0, _node.removeTokens)(removedNode, tokens);
                        (0, _node.removeNode)(removedNode, parentNode);
                    }
                    return subDivisionReplacements;
                }, []);
                return subDivisionReplacements;
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
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                var divisionClassName = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                return divisionMarkdownNode;
            }
        },
        {
            key: "fromSubdivisionReplacementsPaginatedChildNodesAndDivisionClassName",
            value: function fromSubdivisionReplacementsPaginatedChildNodesAndDivisionClassName(subDivisionReplacements, paginatedChildNodes, divisionClassName, context) {
                var ruleName = _ruleNames.DIVISION_RULE_NAME, childNodes = _to_consumable_array(paginatedChildNodes), opacity = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                subDivisionReplacements.some(function(subDivisionReplacement) {
                    subDivisionReplacement.appendTo(divisionMarkdownNode, context);
                    return true; ///
                });
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
}(_markdown.default);
function footnoteReplacementsFromSubdivisionReplacements(subdivisionReplacements) {
    var footnoteReplacements = subdivisionReplacements.map(function(subdivisionReplacement) {
        var node = subdivisionReplacement.getNode(), footnoteMarkdownNode = (0, _query.footnoteMarkdownNodsFromNode)(node), descendentNode = footnoteMarkdownNode, footnoteReplacement = subdivisionReplacement.contract(descendentNode);
        return footnoteReplacement;
    });
    return footnoteReplacements;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudFwiO1xuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlTm9kZSwgcmVtb3ZlVG9rZW5zLCByZXBsYWNlTm9kZSwgcmVwbGFjZU5vZGVzLCByZXBsYWNlVG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyBmb290bm90ZU1hcmtkb3duTm9kc0Zyb21Ob2RlLFxuICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsXG4gICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBjbGVhciwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBpc0lnbm9yZWQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaWdub3JlZCA9IChpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWQ7XG4gIH1cblxuICBmaW5kUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUgPSB0aGlzKSB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBwYXJlbnROb2RlID0gbm9kZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZE5vZGVzOyAvLy9cblxuICAgICAgICBub2Rlcy5zb21lKChub2RlKSA9PiB7XG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlLCBub2RlKTtcblxuICAgICAgICAgIGlmIChwYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnROb2RlO1xuICB9XG5cbiAgcGFnaW5hdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgbGluZXNQZXJQYWdlIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gW10sXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSB0aGlzLnJlbW92ZVN1YmRpdmlzaW9uTWFya2Rvd25Ob2RlcyhwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsIGNvbnRleHQpO1xuXG4gICAgbGV0IHRvdGFsTGluZXMgPSAwO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpLFxuICAgICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHRvdGFsTGluZXMgKz0gbGluZXM7XG5cbiAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMucHVzaChwYWdpbmF0ZWRDaGlsZE5vZGUpO1xuXG4gICAgICBpZiAodG90YWxMaW5lcyA+IGxpbmVzUGVyUGFnZSkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21TdWJkaXZpc2lvblJlcGxhY2VtZW50c1BhZ2luYXRlZENoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgcGFnaW5hdGVkQ2hpbGROb2RlcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCk7XG5cbiAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2goZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuXG4gICAgICAgIGNsZWFyKHBhZ2luYXRlZENoaWxkTm9kZXMpO1xuXG4gICAgICAgIHRvdGFsTGluZXMgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRvdGFsTGluZXMgPiAwKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21TdWJkaXZpc2lvblJlcGxhY2VtZW50c1BhZ2luYXRlZENoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgcGFnaW5hdGVkQ2hpbGROb2RlcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCk7XG5cbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlICE9PSBudWxsKSB7XG4gICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlLnNldFBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQ29udGVudHMoY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0NyZWF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPSBoZWFkaW5nTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyhoZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGVUb2tlbnMgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlKSxcbiAgICAgICAgICAgIHJlcGxhY2VkTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGVUb2tlbnM7IC8vL1xuXG4gICAgICByZXBsYWNlTm9kZShyZXBsYWNlbWVudE5vZGUsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKTtcblxuICAgICAgY29udGVudHNDcmVhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNDcmVhdGVkO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBjb250ZXh0KSB7XG4gICAgaWYgKGZvb3Rub3RlUmVwbGFjZW1lbnRzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZm9vdG5vdGVSZXBsYWNlbWVudHMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICByZXBsYWNlbWVudC5hcHBlbmRUbyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBwcmVwYXJlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBsZXQgc3ViZGl2aXNpb25SZXBsYWNlbWVudHM7XG5cbiAgICBzdWJkaXZpc2lvblJlcGxhY2VtZW50cyA9IHRoaXMucmVtb3ZlU3ViZGl2aXNpb25NYXJrZG93bk5vZGVzKGZvb3Rub3RlTWFya2Rvd25Ob2RzRnJvbU5vZGUsIGNvbnRleHQpO1xuXG4gICAgbGV0IGZvb3Rub3RlUmVwbGFjZW1lbnRzID0gZm9vdG5vdGVSZXBsYWNlbWVudHNGcm9tU3ViZGl2aXNpb25SZXBsYWNlbWVudHMoc3ViZGl2aXNpb25SZXBsYWNlbWVudHMpO1xuXG4gICAgc3ViZGl2aXNpb25SZXBsYWNlbWVudHMgPSB0aGlzLnJlbW92ZVN1YmRpdmlzaW9uTWFya2Rvd25Ob2Rlcyhmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzdWJkaXZpc2lvblJlcGxhY2VtZW50c0xlbmd0aCA9IHN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmIChzdWJkaXZpc2lvblJlcGxhY2VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudHMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZVJlcGxhY2VtZW50cztcbiAgfVxuXG4gIHJlc29sdmVFbWJlZGRpbmdzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzLm1hcCgoZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUucmVwbGFjZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgdG9rZW5zO1xuXG4gICAgICAgIHRva2VucyA9IHJlcGxhY2VtZW50LmdldFRva2VucygpO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSByZXBsYWNlbWVudC5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSB0b2tlbnM7IC8vL1xuXG4gICAgICAgICh7IHRva2VucyB9ID0gY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlKSxcbiAgICAgICAgICAgICAgcmVwbGFjZWROb2RlID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICAgIHJlcGxhY2VOb2RlcyhyZXBsYWNlbWVudE5vZGVzLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgICAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVN1YmRpdmlzaW9uTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVGcm9tTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgIG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5yZWR1Y2UoKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlbW92ZWROb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cy5wdXNoKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpO1xuXG4gICAgICAgICAgICAgIHJlbW92ZVRva2VucyhyZW1vdmVkTm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgICByZW1vdmVOb2RlKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50cztcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGFzSFRNTChjb250ZXh0KSB7XG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZW50ID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzUGFnaW5hdGVkQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCBwYWdpbmF0ZWRDaGlsZE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRElWSVNJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICAuLi5wYWdpbmF0ZWRDaGlsZE5vZGVzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLnNvbWUoKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuYXBwZW5kVG8oZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTsgIC8vL1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvb3Rub3RlUmVwbGFjZW1lbnRzRnJvbVN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzKHN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzKSB7XG4gIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnRzID0gc3ViZGl2aXNpb25SZXBsYWNlbWVudHMubWFwKChzdWJkaXZpc2lvblJlcGxhY2VtZW50KSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IHN1YmRpdmlzaW9uUmVwbGFjZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVNYXJrZG93bk5vZHNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBkZXNjZW5kZW50Tm9kZSA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudCA9IHN1YmRpdmlzaW9uUmVwbGFjZW1lbnQuY29udHJhY3QoZGVzY2VuZGVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlUmVwbGFjZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBmb290bm90ZVJlcGxhY2VtZW50cztcbn1cblxuZnVuY3Rpb24gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBjb250ZW50c0RlcHRoIH0gPSBjb250ZXh0LFxuICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGxldCB7IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyB9ID0gY29udGV4dDtcblxuICBjb25zdCBpbmRleCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5pbmRleE9mKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCArIDE7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLnNsaWNlKHN0YXJ0KTsgLy8vXG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzKTtcbiAgfSk7XG5cbiAgZmlsdGVyKGhlYWRpbmdNYXJrZG93bk5vZGVzLCAoaGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGRlcHRoID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXREZXB0aCgpO1xuXG4gICAgaWYgKGRlcHRoIDw9IGNvbnRlbnRzRGVwdGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRpbmdNYXJrZG93bk5vZGVzO1xufSJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsImZpbmRQYXJlbnROb2RlIiwiY2hpbGROb2RlIiwicGFyZW50Tm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldENoaWxkTm9kZXMiLCJpbmRleCIsImluZGV4T2YiLCJub2RlcyIsInNvbWUiLCJwYWdpbmF0ZSIsImxpbmVzUGVyUGFnZSIsInBhZ2luYXRlZENoaWxkTm9kZXMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzdWJEaXZpc2lvblJlcGxhY2VtZW50cyIsInJlbW92ZVN1YmRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsInRvdGFsTGluZXMiLCJmb3JFYWNoIiwibGluZXMiLCJwYWdpbmF0ZWRDaGlsZE5vZGUiLCJwdXNoIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tU3ViZGl2aXNpb25SZXBsYWNlbWVudHNQYWdpbmF0ZWRDaGlsZE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUiLCJzZXRQYWdlTnVtYmVyIiwicGFnZU51bWJlciIsInBhZ2VOdW1iZXJEaXJlY3RpdmUiLCJjcmVhdGVDb250ZW50cyIsImNvbnRlbnRzQ3JlYXRlZCIsImNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5zIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlVG9rZW5zIiwiZ2V0VG9rZW5zIiwicmVwbGFjZWROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJyZXBsYWNlTm9kZSIsInJlcGxhY2VUb2tlbnMiLCJjcmVhdGVGb290bm90ZXMiLCJmb290bm90ZVJlcGxhY2VtZW50cyIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlbWVudCIsIlJlcGxhY2VtZW50IiwiZnJvbU5vZGUiLCJhcHBlbmRUbyIsInByZXBhcmVGb290bm90ZXMiLCJzdWJkaXZpc2lvblJlcGxhY2VtZW50cyIsImZvb3Rub3RlTWFya2Rvd25Ob2RzRnJvbU5vZGUiLCJmb290bm90ZVJlcGxhY2VtZW50c0Zyb21TdWJkaXZpc2lvblJlcGxhY2VtZW50cyIsImZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwic3ViZGl2aXNpb25SZXBsYWNlbWVudHNMZW5ndGgiLCJyZXNvbHZlRW1iZWRkaW5ncyIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwibWFwIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZU5vZGVzIiwibWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsInJlZHVjZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwibWFya2Rvd25Ob2RlIiwicmVtb3ZlZE5vZGUiLCJzdWJEaXZpc2lvblJlcGxhY2VtZW50IiwicmVtb3ZlVG9rZW5zIiwicmVtb3ZlTm9kZSIsImNyZWF0ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJhc0hUTUwiLCJodG1sIiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiY2xvbmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIkRJVklTSU9OX1JVTEVfTkFNRSIsInN1YmRpdmlzaW9uUmVwbGFjZW1lbnQiLCJnZXROb2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJkZXNjZW5kZW50Tm9kZSIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJjb250cmFjdCIsImNvbnRlbnRzRGVwdGgiLCJzdGFydCIsInNsaWNlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJkZXB0aCIsImdldERlcHRoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
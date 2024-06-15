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
            value: function createContents(divisionMarkdownNodes, context) {
                var contentsCreated = false;
                var node = this, contentsDirectiveMarkdownNode = (0, _query.contentsDirectiveMarkdownNodeFromNode)(node);
                if (contentsDirectiveMarkdownNode !== null) {
                    var divisionMarkdownNode = this, headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context), headingMarkdownNodesLength = headingMarkdownNodes.length;
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
function headingMarkdownNodesFromDivisionMarkdownNodesAndDivisionMarkdownNode(divisionMarkdownNodes, divisionMarkdownNode, context) {
    var headingMarkdownNodes = [], index = divisionMarkdownNodes.indexOf(divisionMarkdownNode), start = index + 1;
    divisionMarkdownNodes = divisionMarkdownNodes.slice(start); ///
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        var node = divisionMarkdownNode; ///
        (0, _query.headingMarkdownNodesFromNode)(node, headingMarkdownNodes);
    });
    filter(headingMarkdownNodes, function(headingMarkdownNode) {
        var contentsDepth = context.contentsDepth, depth = headingMarkdownNode.getDepth();
        if (depth <= contentsDepth) {
            return true;
        }
    });
    return headingMarkdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudFwiO1xuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlTm9kZSwgcmVtb3ZlVG9rZW5zLCByZXBsYWNlTm9kZSwgcmVwbGFjZU5vZGVzLCByZXBsYWNlVG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyBmb290bm90ZU1hcmtkb3duTm9kc0Zyb21Ob2RlLFxuICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsXG4gICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBjbGVhciwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBpc0lnbm9yZWQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaWdub3JlZCA9IChpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWQ7XG4gIH1cblxuICBmaW5kUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUgPSB0aGlzKSB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBwYXJlbnROb2RlID0gbm9kZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZE5vZGVzOyAvLy9cblxuICAgICAgICBub2Rlcy5zb21lKChub2RlKSA9PiB7XG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlLCBub2RlKTtcblxuICAgICAgICAgIGlmIChwYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnROb2RlO1xuICB9XG5cbiAgcGFnaW5hdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgbGluZXNQZXJQYWdlIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gW10sXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSB0aGlzLnJlbW92ZVN1YmRpdmlzaW9uTWFya2Rvd25Ob2RlcyhwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsIGNvbnRleHQpO1xuXG4gICAgbGV0IHRvdGFsTGluZXMgPSAwO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpLFxuICAgICAgICAgICAgcGFnaW5hdGVkQ2hpbGROb2RlID0gY2hpbGROb2RlOyAgLy8vXG5cbiAgICAgIHRvdGFsTGluZXMgKz0gbGluZXM7XG5cbiAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMucHVzaChwYWdpbmF0ZWRDaGlsZE5vZGUpO1xuXG4gICAgICBpZiAodG90YWxMaW5lcyA+IGxpbmVzUGVyUGFnZSkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21TdWJkaXZpc2lvblJlcGxhY2VtZW50c1BhZ2luYXRlZENoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgcGFnaW5hdGVkQ2hpbGROb2RlcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCk7XG5cbiAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2goZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuXG4gICAgICAgIGNsZWFyKHBhZ2luYXRlZENoaWxkTm9kZXMpO1xuXG4gICAgICAgIHRvdGFsTGluZXMgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRvdGFsTGluZXMgPiAwKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21TdWJkaXZpc2lvblJlcGxhY2VtZW50c1BhZ2luYXRlZENoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgcGFnaW5hdGVkQ2hpbGROb2RlcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCk7XG5cbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZSA9IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlICE9PSBudWxsKSB7XG4gICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlLnNldFBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQ29udGVudHMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gaGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tSGVhZGluZ01hcmtkb3duTm9kZXMoaGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlVG9rZW5zID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmdldFRva2VucygpLFxuICAgICAgICAgICAgY2hpbGROb2RlID0gY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgICAgICByZXBsYWNlZE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlVG9rZW5zOyAvLy9cblxuICAgICAgcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG5cbiAgICAgIGNvbnRlbnRzQ3JlYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzQ3JlYXRlZDtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlcyhmb290bm90ZVJlcGxhY2VtZW50cywgY29udGV4dCkge1xuICAgIGlmIChmb290bm90ZVJlcGxhY2VtZW50cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmVwbGFjZW1lbnQuYXBwZW5kVG8oZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcHJlcGFyZUZvb3Rub3Rlcyhjb250ZXh0KSB7XG4gICAgbGV0IHN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuXG4gICAgc3ViZGl2aXNpb25SZXBsYWNlbWVudHMgPSB0aGlzLnJlbW92ZVN1YmRpdmlzaW9uTWFya2Rvd25Ob2Rlcyhmb290bm90ZU1hcmtkb3duTm9kc0Zyb21Ob2RlLCBjb250ZXh0KTtcblxuICAgIGxldCBmb290bm90ZVJlcGxhY2VtZW50cyA9IGZvb3Rub3RlUmVwbGFjZW1lbnRzRnJvbVN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzKHN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzKTtcblxuICAgIHN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzID0gdGhpcy5yZW1vdmVTdWJkaXZpc2lvbk1hcmtkb3duTm9kZXMoZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3ViZGl2aXNpb25SZXBsYWNlbWVudHNMZW5ndGggPSBzdWJkaXZpc2lvblJlcGxhY2VtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAoc3ViZGl2aXNpb25SZXBsYWNlbWVudHNMZW5ndGggPT09IDApIHtcbiAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnRzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVSZXBsYWNlbWVudHM7XG4gIH1cblxuICByZXNvbHZlRW1iZWRkaW5ncyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlcy5tYXAoKGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudCA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlLnJlcGxhY2VtZW50KGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IHRva2VucztcblxuICAgICAgICB0b2tlbnMgPSByZXBsYWNlbWVudC5nZXRUb2tlbnMoKTtcblxuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gcmVwbGFjZW1lbnQuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICByZXBsYWNlbWVudE5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gdG9rZW5zOyAvLy9cblxuICAgICAgICAoeyB0b2tlbnMgfSA9IGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgICAgICAgIHJlcGxhY2VkTm9kZSA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICByZXBsYWNlTm9kZXMocmVwbGFjZW1lbnROb2RlcywgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgICAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVTdWJkaXZpc2lvbk1hcmtkb3duTm9kZXMobWFya2Rvd25Ob2RlRnJvbU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMucmVkdWNlKChzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCByZW1vdmVkTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBSZXBsYWNlbWVudC5mcm9tTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgc3ViRGl2aXNpb25SZXBsYWNlbWVudHMucHVzaChzdWJEaXZpc2lvblJlcGxhY2VtZW50KTtcblxuICAgICAgICAgICAgICByZW1vdmVUb2tlbnMocmVtb3ZlZE5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgICAgcmVtb3ZlTm9kZShyZW1vdmVkTm9kZSwgcGFyZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJEaXZpc2lvblJlcGxhY2VtZW50cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudHM7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cblxuICBhc0hUTUwoY29udGV4dCkge1xuICAgIGxldCBodG1sID0gbnVsbDtcblxuICAgIGNvbnN0IGluZGVudCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNIVE1MICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9XG4ke2NoaWxkTm9kZXNIVE1MfSR7aW5kZW50fSR7Y2xvc2luZ1RhZ31cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuZGl2aXNpb25DbGFzc05hbWUpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJkaXZpc2lvblJlcGxhY2VtZW50c1BhZ2luYXRlZENoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgcGFnaW5hdGVkQ2hpbGROb2RlcywgZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERJVklTSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgLi4ucGFnaW5hdGVkQ2hpbGROb2Rlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cy5zb21lKChzdWJEaXZpc2lvblJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50LmFwcGVuZFRvKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHRydWU7ICAvLy9cbiAgICB9KTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb290bm90ZVJlcGxhY2VtZW50c0Zyb21TdWJkaXZpc2lvblJlcGxhY2VtZW50cyhzdWJkaXZpc2lvblJlcGxhY2VtZW50cykge1xuICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50cyA9IHN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzLm1hcCgoc3ViZGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBzdWJkaXZpc2lvblJlcGxhY2VtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IGZvb3Rub3RlTWFya2Rvd25Ob2RzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZGVzY2VuZGVudE5vZGUgPSBmb290bm90ZU1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnQgPSBzdWJkaXZpc2lvblJlcGxhY2VtZW50LmNvbnRyYWN0KGRlc2NlbmRlbnROb2RlKTtcblxuICAgIHJldHVybiBmb290bm90ZVJlcGxhY2VtZW50O1xuICB9KTtcblxuICByZXR1cm4gZm9vdG5vdGVSZXBsYWNlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBbXSxcbiAgICAgICAgaW5kZXggPSBkaXZpc2lvbk1hcmtkb3duTm9kZXMuaW5kZXhPZihkaXZpc2lvbk1hcmtkb3duTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXggKyAxO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zbGljZShzdGFydCk7IC8vL1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlLCBoZWFkaW5nTWFya2Rvd25Ob2Rlcyk7XG4gIH0pO1xuXG4gIGZpbHRlcihoZWFkaW5nTWFya2Rvd25Ob2RlcywgKGhlYWRpbmdNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCB7IGNvbnRlbnRzRGVwdGggfSA9IGNvbnRleHQsXG4gICAgICAgICAgZGVwdGggPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmdldERlcHRoKCk7XG5cbiAgICBpZiAoZGVwdGggPD0gY29udGVudHNEZXB0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaGVhZGluZ01hcmtkb3duTm9kZXM7XG59Il0sIm5hbWVzIjpbIkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJvcGFjaXR5IiwiZG9tRWxlbWVudCIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiZ2V0RGl2aXNpb25DbGFzc05hbWUiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJpc0lnbm9yZWQiLCJub2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJpZ25vcmVkIiwiZmluZFBhcmVudE5vZGUiLCJjaGlsZE5vZGUiLCJwYXJlbnROb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0Q2hpbGROb2RlcyIsImluZGV4IiwiaW5kZXhPZiIsIm5vZGVzIiwic29tZSIsInBhZ2luYXRlIiwibGluZXNQZXJQYWdlIiwicGFnaW5hdGVkQ2hpbGROb2RlcyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzIiwicmVtb3ZlU3ViZGl2aXNpb25NYXJrZG93bk5vZGVzIiwicGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwidG90YWxMaW5lcyIsImZvckVhY2giLCJsaW5lcyIsInBhZ2luYXRlZENoaWxkTm9kZSIsInB1c2giLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImZyb21TdWJkaXZpc2lvblJlcGxhY2VtZW50c1BhZ2luYXRlZENoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZSIsInNldFBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyIiwicGFnZU51bWJlckRpcmVjdGl2ZSIsImNyZWF0ZUNvbnRlbnRzIiwiY29udGVudHNDcmVhdGVkIiwiY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXMiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5zIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlVG9rZW5zIiwiZ2V0VG9rZW5zIiwicmVwbGFjZWROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJyZXBsYWNlTm9kZSIsInJlcGxhY2VUb2tlbnMiLCJjcmVhdGVGb290bm90ZXMiLCJmb290bm90ZVJlcGxhY2VtZW50cyIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3RlUmVwbGFjZW1lbnRzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlbWVudCIsIlJlcGxhY2VtZW50IiwiZnJvbU5vZGUiLCJhcHBlbmRUbyIsInByZXBhcmVGb290bm90ZXMiLCJzdWJkaXZpc2lvblJlcGxhY2VtZW50cyIsImZvb3Rub3RlTWFya2Rvd25Ob2RzRnJvbU5vZGUiLCJmb290bm90ZVJlcGxhY2VtZW50c0Zyb21TdWJkaXZpc2lvblJlcGxhY2VtZW50cyIsImZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwic3ViZGl2aXNpb25SZXBsYWNlbWVudHNMZW5ndGgiLCJyZXNvbHZlRW1iZWRkaW5ncyIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwibWFwIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZU5vZGVzIiwibWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSIsInJlZHVjZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwibWFya2Rvd25Ob2RlIiwicmVtb3ZlZE5vZGUiLCJzdWJEaXZpc2lvblJlcGxhY2VtZW50IiwicmVtb3ZlVG9rZW5zIiwicmVtb3ZlTm9kZSIsImNyZWF0ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJhc0hUTUwiLCJodG1sIiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiY2xvbmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIkRJVklTSU9OX1JVTEVfTkFNRSIsInN1YmRpdmlzaW9uUmVwbGFjZW1lbnQiLCJnZXROb2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJkZXNjZW5kZW50Tm9kZSIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJjb250cmFjdCIsInN0YXJ0Iiwic2xpY2UiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImNvbnRlbnRzRGVwdGgiLCJkZXB0aCIsImdldERlcHRoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
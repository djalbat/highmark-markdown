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
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../replacement/footnotesList"));
var _contentsList = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/contentsList"));
var _footnotesList1 = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/footnotesList"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/footnote"));
var _footnotesDirective = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/footnotesDirective"));
var _pageNumberDirective = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/pageNumberDirective"));
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
                var linesPerPage = context.linesPerPage, childNodes = this.getChildNodes(), paginatedChildNodes = [], divisionMarkdownNodes = [], pageNumberDirectiveSubDivisionReplacement = this.removePageNumberDirectiveSubDivisionMarkdownNode(context);
                var totalLines = 0;
                childNodes.forEach(function(childNode) {
                    var lines = childNode.lines(context), paginatedChildNode = childNode; ///
                    totalLines += lines;
                    paginatedChildNodes.push(paginatedChildNode);
                    if (totalLines > linesPerPage) {
                        var divisionMarkdownNode = DivisionMarkdownNode.fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName(pageNumberDirectiveSubDivisionReplacement, paginatedChildNodes, _this.divisionClassName, context);
                        divisionMarkdownNodes.push(divisionMarkdownNode);
                        clear(paginatedChildNodes);
                        totalLines = 0;
                    }
                });
                if (totalLines > 0) {
                    var divisionMarkdownNode = DivisionMarkdownNode.fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName(pageNumberDirectiveSubDivisionReplacement, paginatedChildNodes, this.divisionClassName, context);
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
                var divisionMarkdownNode = this, footnotesListMarkdownNode = _footnotesList1.default.fromFootnoteReplacementsAndDivisionMarkdownNode(footnoteReplacements, divisionMarkdownNode, context);
                if (footnotesListMarkdownNode === null) {
                    return;
                }
                var footnotesListReplacement = _footnotesList.default.fromFootnotesListMarkdownNode(footnotesListMarkdownNode, context);
                footnotesListReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
            }
        },
        {
            key: "prepareFootnotes",
            value: function prepareFootnotes(context) {
                var footnoteSubDivisionReplacements = this.removeFootnoteSubDivisionMarkdownNodes(context);
                var footnoteReplacements = footnoteReplacementsFromFootnoteSubDivisionReplacements(footnoteSubDivisionReplacements);
                var footnotesDirectiveSubDivisionReplacement = this.removeFootnotesDirectiveSubDivisionMarkdownNode(context);
                if (footnotesDirectiveSubDivisionReplacement === null) {
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
                    var importedReplacement = embedDirectiveMarkdownNode.import(context);
                    if (importedReplacement !== null) {
                        var childNode = embedDirectiveMarkdownNode, parentNode = _this.findParentNode(childNode);
                        importedReplacement.replaceEmbedDirectiveMarkdownNode(embedDirectiveMarkdownNode, parentNode, context);
                    }
                });
            }
        },
        {
            key: "createFootnotesListMarkdownNode",
            value: function createFootnotesListMarkdownNode(context) {
                var divisionMarkdownNode = this, footnotesListMarkdownNode = _footnotesList1.default.fromDivisionMarkdownNode(divisionMarkdownNode, context);
                return footnotesListMarkdownNode;
            }
        },
        {
            key: "removeFootnoteSubDivisionMarkdownNodes",
            value: function removeFootnoteSubDivisionMarkdownNodes(context) {
                var _this = this;
                var node = this, subDivisionMarkdownNodes = (0, _query.subDivisionMarkdownNodesFromNode)(node), footnoteSubDivisionReplacements = subDivisionMarkdownNodes.reduce(function(footnoteSubDivisionReplacements, subDivisionMarkdownNode) {
                    var footnoteSubDivisionReplacement = _footnote.default.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                    if (footnoteSubDivisionReplacement !== null) {
                        var divisionMarkdownNode = _this; ///
                        footnoteSubDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                        footnoteSubDivisionReplacements.push(footnoteSubDivisionReplacement);
                    }
                    return footnoteSubDivisionReplacements;
                }, []);
                return footnoteSubDivisionReplacements;
            }
        },
        {
            key: "removeFootnotesDirectiveSubDivisionMarkdownNode",
            value: function removeFootnotesDirectiveSubDivisionMarkdownNode(context) {
                var _this = this;
                var footnotesDirectiveSubDivisionReplacement = null;
                var node = this, subDivisionMarkdownNodes = (0, _query.subDivisionMarkdownNodesFromNode)(node);
                subDivisionMarkdownNodes.some(function(subDivisionMarkdownNode) {
                    footnotesDirectiveSubDivisionReplacement = _footnotesDirective.default.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                    if (footnotesDirectiveSubDivisionReplacement !== null) {
                        var divisionMarkdownNode = _this; ///
                        footnotesDirectiveSubDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                        return true;
                    }
                });
                return footnotesDirectiveSubDivisionReplacement;
            }
        },
        {
            key: "removePageNumberDirectiveSubDivisionMarkdownNode",
            value: function removePageNumberDirectiveSubDivisionMarkdownNode(context) {
                var _this = this;
                var pageNumberDirectiveSubDivisionReplacement = null;
                var node = this, subDivisionMarkdownNodes = (0, _query.subDivisionMarkdownNodesFromNode)(node);
                subDivisionMarkdownNodes.some(function(subDivisionMarkdownNode) {
                    pageNumberDirectiveSubDivisionReplacement = _pageNumberDirective.default.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                    if (pageNumberDirectiveSubDivisionReplacement !== null) {
                        var divisionMarkdownNode = _this; ///
                        pageNumberDirectiveSubDivisionReplacement.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                        return true;
                    }
                });
                return pageNumberDirectiveSubDivisionReplacement;
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
            key: "fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName",
            value: function fromPageNumberDirectiveSubDivisionReplacementPaginatedChildNodesAndDivisionClassName(pageNumberDirectiveSubDivisionReplacement, paginatedChildNodes, divisionClassName, context) {
                var ruleName = _ruleNames.DIVISION_RULE_NAME, childNodes = _to_consumable_array(paginatedChildNodes), opacity = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                if (pageNumberDirectiveSubDivisionReplacement !== null) {
                    pageNumberDirectiveSubDivisionReplacement = pageNumberDirectiveSubDivisionReplacement.clone(); ///
                    pageNumberDirectiveSubDivisionReplacement.appendToDivisionMarkdownNode(divisionMarkdownNode, context);
                }
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
}(_markdown.default);
function footnoteReplacementsFromFootnoteSubDivisionReplacements(footnoteSubDivisionReplacements) {
    var footnoteReplacements = footnoteSubDivisionReplacements.map(function(footnoteSubDivisionReplacement) {
        var node = footnoteSubDivisionReplacement.getNode(), footnoteMarkdownNode = (0, _query.footnoteMarkdownNodsFromNode)(node), descendentNode = footnoteMarkdownNode, footnoteReplacement = footnoteSubDivisionReplacement.contract(descendentNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RSZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvZm9vdG5vdGVzTGlzdFwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcbmltcG9ydCBGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL2Zvb3Rub3RlXCI7XG5pbXBvcnQgRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vZm9vdG5vdGVzRGlyZWN0aXZlXCI7XG5pbXBvcnQgUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uL3BhZ2VOdW1iZXJEaXJlY3RpdmVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVwbGFjZU5vZGUsIHJlcGxhY2VUb2tlbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IGZvb3Rub3RlTWFya2Rvd25Ob2RzRnJvbU5vZGUsXG4gICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLFxuICAgICAgICAgY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBjbGVhciwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBpc0lnbm9yZWQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaWdub3JlZCA9IChpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWQ7XG4gIH1cblxuICBmaW5kUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUgPSB0aGlzKSB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBwYXJlbnROb2RlID0gbm9kZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZE5vZGVzOyAvLy9cblxuICAgICAgICBub2Rlcy5zb21lKChub2RlKSA9PiB7XG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlLCBub2RlKTtcblxuICAgICAgICAgIGlmIChwYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnROb2RlO1xuICB9XG5cbiAgcGFnaW5hdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgbGluZXNQZXJQYWdlIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gW10sXG4gICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSB0aGlzLnJlbW92ZVBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShjb250ZXh0KTtcblxuICAgIGxldCB0b3RhbExpbmVzID0gMDtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBsaW5lcyA9IGNoaWxkTm9kZS5saW5lcyhjb250ZXh0KSxcbiAgICAgICAgICAgIHBhZ2luYXRlZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICB0b3RhbExpbmVzICs9IGxpbmVzO1xuXG4gICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzLnB1c2gocGFnaW5hdGVkQ2hpbGROb2RlKTtcblxuICAgICAgaWYgKHRvdGFsTGluZXMgPiBsaW5lc1BlclBhZ2UpIHtcbiAgICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRQYWdpbmF0ZWRDaGlsZE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIHBhZ2luYXRlZENoaWxkTm9kZXMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgICAgICBjbGVhcihwYWdpbmF0ZWRDaGlsZE5vZGVzKTtcblxuICAgICAgICB0b3RhbExpbmVzID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0b3RhbExpbmVzID4gMCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRQYWdpbmF0ZWRDaGlsZE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIHBhZ2luYXRlZENoaWxkTm9kZXMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpO1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMucHVzaChkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHNldFBhZ2VOdW1iZXIocGFnZU51bWJlcikge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLFxuICAgICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZS5zZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0NyZWF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzKGhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZVRva2VucyA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5nZXRUb2tlbnMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUpLFxuICAgICAgICAgICAgcmVwbGFjZWROb2RlID0gY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZVRva2VuczsgLy8vXG5cbiAgICAgIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuXG4gICAgICBjb250ZW50c0NyZWF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0NyZWF0ZWQ7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXMoZm9vdG5vdGVSZXBsYWNlbWVudHMsIGNvbnRleHQpIHtcbiAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShmb290bm90ZVJlcGxhY2VtZW50cywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQgPSBGb290bm90ZXNMaXN0UmVwbGFjZW1lbnQuZnJvbUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUoZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICBmb290bm90ZXNMaXN0UmVwbGFjZW1lbnQuYXBwZW5kVG9EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBwcmVwYXJlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gdGhpcy5yZW1vdmVGb290bm90ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcyhjb250ZXh0KTtcblxuICAgIGxldCBmb290bm90ZVJlcGxhY2VtZW50cyA9IGZvb3Rub3RlUmVwbGFjZW1lbnRzRnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyk7XG5cbiAgICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gdGhpcy5yZW1vdmVGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShjb250ZXh0KTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID09PSBudWxsKSB7XG4gICAgICBmb290bm90ZVJlcGxhY2VtZW50cyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvb3Rub3RlUmVwbGFjZW1lbnRzO1xuICB9XG5cbiAgcmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMubWFwKChlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaW1wb3J0ZWRSZXBsYWNlbWVudCA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlLmltcG9ydChjb250ZXh0KTtcblxuICAgICAgaWYgKGltcG9ydGVkUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgICBpbXBvcnRlZFJlcGxhY2VtZW50LnJlcGxhY2VFbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZShlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cblxuICByZW1vdmVGb290bm90ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnJlZHVjZSgoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IEZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpczsgIC8vL1xuXG4gICAgICAgICAgICAgIGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5yZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMucHVzaChmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cztcbiAgfVxuXG4gIHJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKGNvbnRleHQpIHtcbiAgICBsZXQgZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudDtcbiAgfVxuXG4gIHJlbW92ZVBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShjb250ZXh0KSB7XG4gICAgbGV0IHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50LnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQ7XG4gIH1cblxuICBhc0hUTUwoY29udGV4dCkge1xuICAgIGxldCBodG1sID0gbnVsbDtcblxuICAgIGNvbnN0IGluZGVudCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNIVE1MICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9XG4ke2NoaWxkTm9kZXNIVE1MfSR7aW5kZW50fSR7Y2xvc2luZ1RhZ31cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuZGl2aXNpb25DbGFzc05hbWUpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudFBhZ2luYXRlZENoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgcGFnaW5hdGVkQ2hpbGROb2RlcywgZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERJVklTSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgLi4ucGFnaW5hdGVkQ2hpbGROb2Rlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gcGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuY2xvbmUoKTsgIC8vL1xuXG4gICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5hcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9vdG5vdGVSZXBsYWNlbWVudHNGcm9tRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cyhmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzKSB7XG4gIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnRzID0gZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50cy5tYXAoKGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVNYXJrZG93bk5vZHNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBkZXNjZW5kZW50Tm9kZSA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVSZXBsYWNlbWVudCA9IGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudC5jb250cmFjdChkZXNjZW5kZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVSZXBsYWNlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlUmVwbGFjZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGhlYWRpbmdNYXJrZG93bk5vZGVzID0gW10sXG4gICAgICAgIGluZGV4ID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLmluZGV4T2YoZGl2aXNpb25NYXJrZG93bk5vZGUpLFxuICAgICAgICBzdGFydCA9IGluZGV4ICsgMTtcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXMuc2xpY2Uoc3RhcnQpOyAvLy9cblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSwgaGVhZGluZ01hcmtkb3duTm9kZXMpO1xuICB9KTtcblxuICBmaWx0ZXIoaGVhZGluZ01hcmtkb3duTm9kZXMsIChoZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgeyBjb250ZW50c0RlcHRoIH0gPSBjb250ZXh0LFxuICAgICAgICAgIGRlcHRoID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXREZXB0aCgpO1xuXG4gICAgaWYgKGRlcHRoIDw9IGNvbnRlbnRzRGVwdGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRpbmdNYXJrZG93bk5vZGVzO1xufSJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsImZpbmRQYXJlbnROb2RlIiwiY2hpbGROb2RlIiwicGFyZW50Tm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldENoaWxkTm9kZXMiLCJpbmRleCIsImluZGV4T2YiLCJub2RlcyIsInNvbWUiLCJwYWdpbmF0ZSIsImxpbmVzUGVyUGFnZSIsInBhZ2luYXRlZENoaWxkTm9kZXMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInJlbW92ZVBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInRvdGFsTGluZXMiLCJmb3JFYWNoIiwibGluZXMiLCJwYWdpbmF0ZWRDaGlsZE5vZGUiLCJwdXNoIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnRQYWdpbmF0ZWRDaGlsZE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUiLCJzZXRQYWdlTnVtYmVyIiwicGFnZU51bWJlciIsInBhZ2VOdW1iZXJEaXJlY3RpdmUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJjcmVhdGVDb250ZW50cyIsImNvbnRlbnRzQ3JlYXRlZCIsImNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsInRva2VucyIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImZyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZVRva2VucyIsImdldFRva2VucyIsInJlcGxhY2VkTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZU5vZGUiLCJyZXBsYWNlVG9rZW5zIiwiY3JlYXRlRm9vdG5vdGVzIiwiZm9vdG5vdGVSZXBsYWNlbWVudHMiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IiwiRm9vdG5vdGVzTGlzdFJlcGxhY2VtZW50IiwiZnJvbUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJhcHBlbmRUb0RpdmlzaW9uTWFya2Rvd25Ob2RlIiwicHJlcGFyZUZvb3Rub3RlcyIsImZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMiLCJyZW1vdmVGb290bm90ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImZvb3Rub3RlUmVwbGFjZW1lbnRzRnJvbUZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudHMiLCJmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwicmVtb3ZlRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXNvbHZlRW1iZWRkaW5ncyIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwibWFwIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpbXBvcnRlZFJlcGxhY2VtZW50IiwiaW1wb3J0IiwicmVwbGFjZUVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiY3JlYXRlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwicmVkdWNlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJhc0hUTUwiLCJodG1sIiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiY2xvbmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIkRJVklTSU9OX1JVTEVfTkFNRSIsImdldE5vZGUiLCJmb290bm90ZU1hcmtkb3duTm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RzRnJvbU5vZGUiLCJkZXNjZW5kZW50Tm9kZSIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJjb250cmFjdCIsInN0YXJ0Iiwic2xpY2UiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImNvbnRlbnRzRGVwdGgiLCJkZXB0aCIsImdldERlcHRoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
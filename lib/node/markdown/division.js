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
var _footnotes = require("../../utilities/footnotes");
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
                        var divisionMarkdownNode = DivisionMarkdownNode.fromSubdivisionReplacementsPagincatedChildNodesAndDivisionClassName(subDivisionReplacements, paginatedChildNodes, _this.divisionClassName, context);
                        divisionMarkdownNodes.push(divisionMarkdownNode);
                        clear(paginatedChildNodes);
                        totalLines = 0;
                    }
                });
                if (totalLines > 0) {
                    var divisionMarkdownNode = DivisionMarkdownNode.fromSubdivisionReplacementsPagincatedChildNodesAndDivisionClassName(subDivisionReplacements, paginatedChildNodes, this.divisionClassName, context);
                    divisionMarkdownNodes.push(divisionMarkdownNode);
                }
                return divisionMarkdownNodes;
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
                (0, _footnotes.renumberLinkMarkdownNodes)(divisionMarkdownNode, footnotesListMarkdownNode, context);
            }
        },
        {
            key: "prepareFootnotes",
            value: function prepareFootnotes(context) {
                var subdivisionReplacements;
                subdivisionReplacements = this.removeSubdivisionMarkdownNodes(_query.footnoteMarkdownNodsFromNode, context);
                var footnoteReplacements = subdivisionReplacements.map(function(subdivisionReplacement) {
                    var node = subdivisionReplacement.getNode(), footnoteMarkdownNode = (0, _query.footnoteMarkdownNodsFromNode)(node), descendentNode = footnoteMarkdownNode, footnoteReplacement = subdivisionReplacement.contract(descendentNode);
                    return footnoteReplacement;
                });
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
            key: "fromSubdivisionReplacementsPagincatedChildNodesAndDivisionClassName",
            value: function fromSubdivisionReplacementsPagincatedChildNodesAndDivisionClassName(subDivisionReplacements, paginatedChildNodes, divisionClassName, context) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudFwiO1xuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5pbXBvcnQgeyByZW1vdmVOb2RlLCByZW1vdmVUb2tlbnMsIHJlcGxhY2VOb2RlLCByZXBsYWNlTm9kZXMsIHJlcGxhY2VUb2tlbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IGZvb3Rub3RlTWFya2Rvd25Ob2RzRnJvbU5vZGUsXG4gICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLFxuICAgICAgICAgY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLFxuICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGNsZWFyLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIGZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSwgbm9kZSA9IHRoaXMpIHtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub2RlcyA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICAgIG5vZGVzLnNvbWUoKG5vZGUpID0+IHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUpO1xuXG4gICAgICAgICAgaWYgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gIH1cblxuICBwYWdpbmF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgeyBsaW5lc1BlclBhZ2UgfSA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMgPSBbXSxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBbXSxcbiAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50cyA9IHRoaXMucmVtb3ZlU3ViZGl2aXNpb25NYXJrZG93bk5vZGVzKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSwgY29udGV4dCk7XG5cbiAgICBsZXQgdG90YWxMaW5lcyA9IDA7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgbGluZXMgPSBjaGlsZE5vZGUubGluZXMoY29udGV4dCksXG4gICAgICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgdG90YWxMaW5lcyArPSBsaW5lcztcblxuICAgICAgcGFnaW5hdGVkQ2hpbGROb2Rlcy5wdXNoKHBhZ2luYXRlZENoaWxkTm9kZSk7XG5cbiAgICAgIGlmICh0b3RhbExpbmVzID4gbGluZXNQZXJQYWdlKSB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gRGl2aXNpb25NYXJrZG93bk5vZGUuZnJvbVN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzUGFnaW5jYXRlZENoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShzdWJEaXZpc2lvblJlcGxhY2VtZW50cywgcGFnaW5hdGVkQ2hpbGROb2RlcywgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCk7XG5cbiAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2goZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuXG4gICAgICAgIGNsZWFyKHBhZ2luYXRlZENoaWxkTm9kZXMpO1xuXG4gICAgICAgIHRvdGFsTGluZXMgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRvdGFsTGluZXMgPiAwKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21TdWJkaXZpc2lvblJlcGxhY2VtZW50c1BhZ2luY2F0ZWRDaGlsZE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUoc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIHBhZ2luYXRlZENoaWxkTm9kZXMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpO1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMucHVzaChkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGNvbnRleHQpIHtcbiAgICBsZXQgY29udGVudHNDcmVhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kQ29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gaGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tSGVhZGluZ01hcmtkb3duTm9kZXMoaGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlVG9rZW5zID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmdldFRva2VucygpLFxuICAgICAgICAgICAgY2hpbGROb2RlID0gY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgICAgICByZXBsYWNlZE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlVG9rZW5zOyAvLy9cblxuICAgICAgcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpO1xuXG4gICAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VtZW50VG9rZW5zLCByZXBsYWNlZE5vZGUsIHRva2Vucyk7XG5cbiAgICAgIGNvbnRlbnRzQ3JlYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzQ3JlYXRlZDtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlcyhmb290bm90ZVJlcGxhY2VtZW50cywgY29udGV4dCkge1xuICAgIGlmIChmb290bm90ZVJlcGxhY2VtZW50cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmVwbGFjZW1lbnQuYXBwZW5kVG8oZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dClcbiAgfVxuXG4gIHByZXBhcmVGb290bm90ZXMoY29udGV4dCkge1xuICAgIGxldCBzdWJkaXZpc2lvblJlcGxhY2VtZW50cztcblxuICAgIHN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzID0gdGhpcy5yZW1vdmVTdWJkaXZpc2lvbk1hcmtkb3duTm9kZXMoZm9vdG5vdGVNYXJrZG93bk5vZHNGcm9tTm9kZSwgY29udGV4dCk7XG5cbiAgICBsZXQgZm9vdG5vdGVSZXBsYWNlbWVudHMgPSBzdWJkaXZpc2lvblJlcGxhY2VtZW50cy5tYXAoKHN1YmRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdWJkaXZpc2lvblJlcGxhY2VtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVNYXJrZG93bk5vZHNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICAgIGRlc2NlbmRlbnROb2RlID0gZm9vdG5vdGVNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIGZvb3Rub3RlUmVwbGFjZW1lbnQgPSBzdWJkaXZpc2lvblJlcGxhY2VtZW50LmNvbnRyYWN0KGRlc2NlbmRlbnROb2RlKTtcblxuICAgICAgcmV0dXJuIGZvb3Rub3RlUmVwbGFjZW1lbnQ7XG4gICAgfSk7XG5cbiAgICBzdWJkaXZpc2lvblJlcGxhY2VtZW50cyA9IHRoaXMucmVtb3ZlU3ViZGl2aXNpb25NYXJrZG93bk5vZGVzKGZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzTGVuZ3RoID0gc3ViZGl2aXNpb25SZXBsYWNlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKHN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBmb290bm90ZVJlcGxhY2VtZW50cyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvb3Rub3RlUmVwbGFjZW1lbnRzO1xuICB9XG5cbiAgcmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMubWFwKChlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZS5yZXBsYWNlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGxldCB0b2tlbnM7XG5cbiAgICAgICAgdG9rZW5zID0gcmVwbGFjZW1lbnQuZ2V0VG9rZW5zKCk7XG5cbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHJlcGxhY2VtZW50LmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnROb2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRva2VuczsgLy8vXG5cbiAgICAgICAgKHsgdG9rZW5zIH0gPSBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUpLFxuICAgICAgICAgICAgICByZXBsYWNlZE5vZGUgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgICAgcmVwbGFjZU5vZGVzKHJlcGxhY2VtZW50Tm9kZXMsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICAgICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlU3ViZGl2aXNpb25NYXJrZG93bk5vZGVzKG1hcmtkb3duTm9kZUZyb21Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnJlZHVjZSgoc3ViRGl2aXNpb25SZXBsYWNlbWVudHMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlZE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICBzdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLnB1c2goc3ViRGl2aXNpb25SZXBsYWNlbWVudCk7XG5cbiAgICAgICAgICAgICAgcmVtb3ZlVG9rZW5zKHJlbW92ZWROb2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICAgIHJlbW92ZU5vZGUocmVtb3ZlZE5vZGUsIHBhcmVudE5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3ViRGl2aXNpb25SZXBsYWNlbWVudHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgYXNIVE1MKGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRlbnQgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChjaGlsZE5vZGVzSFRNTCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfVxuJHtjaGlsZE5vZGVzSFRNTH0ke2luZGVudH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ViZGl2aXNpb25SZXBsYWNlbWVudHNQYWdpbmNhdGVkQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLCBwYWdpbmF0ZWRDaGlsZE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRElWSVNJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgICAgICAuLi5wYWdpbmF0ZWRDaGlsZE5vZGVzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnRzLnNvbWUoKHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIHN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuYXBwZW5kVG8oZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTsgIC8vL1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kQ29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgY29udGVudHNEZXB0aCB9ID0gY29udGV4dCxcbiAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBbXTtcblxuICBsZXQgeyBkaXZpc2lvbk1hcmtkb3duTm9kZXMgfSA9IGNvbnRleHQ7XG5cbiAgY29uc3QgaW5kZXggPSBkaXZpc2lvbk1hcmtkb3duTm9kZXMuaW5kZXhPZihkaXZpc2lvbk1hcmtkb3duTm9kZSksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXggKyAxO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zbGljZShzdGFydCk7IC8vL1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlLCBoZWFkaW5nTWFya2Rvd25Ob2Rlcyk7XG4gIH0pO1xuXG4gIGZpbHRlcihoZWFkaW5nTWFya2Rvd25Ob2RlcywgKGhlYWRpbmdNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBkZXB0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0RGVwdGgoKTtcblxuICAgIGlmIChkZXB0aCA8PSBjb250ZW50c0RlcHRoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkaW5nTWFya2Rvd25Ob2Rlcztcbn0iXSwibmFtZXMiOlsiRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjbGVhciIsImFycmF5VXRpbGl0aWVzIiwiZmlsdGVyIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImlzSWdub3JlZCIsIm5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImlnbm9yZWQiLCJmaW5kUGFyZW50Tm9kZSIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwibm9kZXMiLCJzb21lIiwicGFnaW5hdGUiLCJsaW5lc1BlclBhZ2UiLCJwYWdpbmF0ZWRDaGlsZE5vZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwic3ViRGl2aXNpb25SZXBsYWNlbWVudHMiLCJyZW1vdmVTdWJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJ0b3RhbExpbmVzIiwiZm9yRWFjaCIsImxpbmVzIiwicGFnaW5hdGVkQ2hpbGROb2RlIiwicHVzaCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZnJvbVN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzUGFnaW5jYXRlZENoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZSIsImNyZWF0ZUNvbnRlbnRzIiwiY29udGVudHNDcmVhdGVkIiwiY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXMiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZENvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJ0b2tlbnMiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJDb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tSGVhZGluZ01hcmtkb3duTm9kZXMiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGVUb2tlbnMiLCJnZXRUb2tlbnMiLCJyZXBsYWNlZE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFRva2VucyIsInJlcGxhY2VOb2RlIiwicmVwbGFjZVRva2VucyIsImNyZWF0ZUZvb3Rub3RlcyIsImZvb3Rub3RlUmVwbGFjZW1lbnRzIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmREaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlcGxhY2VtZW50IiwiUmVwbGFjZW1lbnQiLCJmcm9tTm9kZSIsImFwcGVuZFRvIiwicmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyIsInByZXBhcmVGb290bm90ZXMiLCJzdWJkaXZpc2lvblJlcGxhY2VtZW50cyIsImZvb3Rub3RlTWFya2Rvd25Ob2RzRnJvbU5vZGUiLCJtYXAiLCJzdWJkaXZpc2lvblJlcGxhY2VtZW50IiwiZ2V0Tm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZGVzY2VuZGVudE5vZGUiLCJmb290bm90ZVJlcGxhY2VtZW50IiwiY29udHJhY3QiLCJmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsInN1YmRpdmlzaW9uUmVwbGFjZW1lbnRzTGVuZ3RoIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwicmVwbGFjZW1lbnROb2RlcyIsInJlcGxhY2VOb2RlcyIsIm1hcmtkb3duTm9kZUZyb21Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJyZWR1Y2UiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsIm1hcmtkb3duTm9kZSIsInJlbW92ZWROb2RlIiwic3ViRGl2aXNpb25SZXBsYWNlbWVudCIsInJlbW92ZVRva2VucyIsInJlbW92ZU5vZGUiLCJjcmVhdGVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiYXNIVE1MIiwiaHRtbCIsImluZGVudCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJESVZJU0lPTl9SVUxFX05BTUUiLCJjb250ZW50c0RlcHRoIiwic3RhcnQiLCJzbGljZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwiZGVwdGgiLCJnZXREZXB0aCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUF3QnFCQTs7O3lCQXRCVTtrRUFFUDsrREFDQzttRUFDWTtvRUFDQzt5QkFFVDt5QkFDTTt5QkFDTztvQkFDeUM7cUJBUTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
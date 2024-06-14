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
            value: function paginate(pageDivisionMarkdownNodes, context) {
                var _this = this;
                var linesPerPage = context.linesPerPage, childNodes = this.getChildNodes(), replacements = [], pageChildNodes = [];
                this.removeSubdivisionMarkdownNodes(_query.footnotesDirectiveMarkdownNodeFromNode, replacements, context);
                this.removeSubdivisionMarkdownNodes(_query.pageNumberDirectiveMarkdownNodeFromNode, replacements, context);
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
                    (0, _node.replaceNode)(replacementNode, replacedNode, parentNode);
                    (0, _node.replaceTokens)(replacementTokens, replacedNode, tokens);
                    contentsCreated = true;
                }
                return contentsCreated;
            }
        },
        {
            key: "createFootnotes",
            value: function createFootnotes(context) {
                var node = this, footnotesDirectiveMarkdownNode = (0, _query.footnotesDirectiveMarkdownNodeFromNode)(node);
                if (footnotesDirectiveMarkdownNode === null) {
                    return;
                }
                var replacements = [];
                this.removeSubdivisionMarkdownNodes(_query.footnoteMarkdownNodsFromNode, replacements, context);
                var divisionMarkdownNode = this, footnotesListMarkdownNode = _footnotesList.default.fromDivisionMarkdownNodeAndReplacements(divisionMarkdownNode, replacements, context);
                if (footnotesListMarkdownNode !== null) {
                    var node1 = footnotesListMarkdownNode, replacement = _replacement.default.fromNode(node1, context);
                    replacement.appendTo(divisionMarkdownNode, context);
                    (0, _footnotes.renumberLinkMarkdownNodes)(divisionMarkdownNode, footnotesListMarkdownNode, context);
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
                        (0, _node.replaceNodes)(replacementNodes, replacedNode, parentNode);
                        (0, _node.replaceTokens)(replacementTokens, replacedNode, tokens);
                    }
                });
            }
        },
        {
            key: "removeSubdivisionMarkdownNodes",
            value: function removeSubdivisionMarkdownNodes(markdownNodeFromNode, replacements, context) {
                var tokens = context.tokens, node = this, parentNode = this, subDivisionMarkdownNodes = (0, _query.subDivisionMarkdownNodesFromNode)(node);
                subDivisionMarkdownNodes.some(function(subDivisionMarkdownNode) {
                    var node = subDivisionMarkdownNode, markdownNode = markdownNodeFromNode(node);
                    if (markdownNode !== null) {
                        var replacement = _replacement.default.fromNode(node, context), removedNode = subDivisionMarkdownNode; ///
                        replacements.push(replacement);
                        (0, _node.removeTokens)(removedNode, tokens);
                        (0, _node.removeNode)(removedNode, parentNode);
                        return true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudFwiO1xuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5pbXBvcnQgeyByZW1vdmVOb2RlLCByZW1vdmVUb2tlbnMsIHJlcGxhY2VOb2RlLCByZXBsYWNlTm9kZXMsIHJlcGxhY2VUb2tlbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IGZvb3Rub3RlTWFya2Rvd25Ob2RzRnJvbU5vZGUsXG4gICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSxcbiAgICAgICAgIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLFxuICAgICAgICAgY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLFxuICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGNsZWFyLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIGZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSwgbm9kZSA9IHRoaXMpIHtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub2RlcyA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICAgIG5vZGVzLnNvbWUoKG5vZGUpID0+IHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUpO1xuXG4gICAgICAgICAgaWYgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gIH1cblxuICBwYWdpbmF0ZShwYWdlRGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBsaW5lc1BlclBhZ2UgfSA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJlcGxhY2VtZW50cyA9IFtdLFxuICAgICAgICAgIHBhZ2VDaGlsZE5vZGVzID0gW107XG5cbiAgICB0aGlzLnJlbW92ZVN1YmRpdmlzaW9uTWFya2Rvd25Ob2Rlcyhmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSwgcmVwbGFjZW1lbnRzLCBjb250ZXh0KTtcblxuICAgIHRoaXMucmVtb3ZlU3ViZGl2aXNpb25NYXJrZG93bk5vZGVzKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSwgcmVwbGFjZW1lbnRzLCBjb250ZXh0KTtcblxuICAgIGxldCBwYWdlTGluZXMgPSAwO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpLFxuICAgICAgICAgICAgcGFnZUNoaWxkTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuXG4gICAgICBwYWdlTGluZXMgKz0gbGluZXM7XG5cbiAgICAgIHBhZ2VDaGlsZE5vZGVzLnB1c2gocGFnZUNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChwYWdlTGluZXMgPiBsaW5lc1BlclBhZ2UpIHtcbiAgICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tUmVwbGFjZW1lbnRzUGFnZUNoaWxkTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShyZXBsYWNlbWVudHMsIHBhZ2VDaGlsZE5vZGVzLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgICAgICBwYWdlRGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2gocGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgICAgICBjbGVhcihwYWdlQ2hpbGROb2Rlcyk7XG5cbiAgICAgICAgcGFnZUxpbmVzID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYWdlTGluZXMgPiAwKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21SZXBsYWNlbWVudHNQYWdlQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHJlcGxhY2VtZW50cywgcGFnZUNoaWxkTm9kZXMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgICAgcGFnZURpdmlzaW9uTWFya2Rvd25Ob2Rlcy5wdXNoKHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQ29udGVudHMoY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0NyZWF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPSBoZWFkaW5nTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyhoZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGVUb2tlbnMgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlKSxcbiAgICAgICAgICAgIHJlcGxhY2VkTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGVUb2tlbnM7IC8vL1xuXG4gICAgICByZXBsYWNlTm9kZShyZXBsYWNlbWVudE5vZGUsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKTtcblxuICAgICAgY29udGVudHNDcmVhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNDcmVhdGVkO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IGZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50cyA9IFtdO1xuXG4gICAgdGhpcy5yZW1vdmVTdWJkaXZpc2lvbk1hcmtkb3duTm9kZXMoZm9vdG5vdGVNYXJrZG93bk5vZHNGcm9tTm9kZSwgcmVwbGFjZW1lbnRzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZFJlcGxhY2VtZW50cyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgcmVwbGFjZW1lbnRzLCBjb250ZXh0KTtcblxuICAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXBsYWNlbWVudC5hcHBlbmRUbyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpXG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMubWFwKChlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZS5yZXBsYWNlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGxldCB0b2tlbnM7XG5cbiAgICAgICAgdG9rZW5zID0gcmVwbGFjZW1lbnQuZ2V0VG9rZW5zKCk7XG5cbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHJlcGxhY2VtZW50LmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnROb2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRva2VuczsgLy8vXG5cbiAgICAgICAgKHsgdG9rZW5zIH0gPSBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUpLFxuICAgICAgICAgICAgICByZXBsYWNlZE5vZGUgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgICAgcmVwbGFjZU5vZGVzKHJlcGxhY2VtZW50Tm9kZXMsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICAgICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlU3ViZGl2aXNpb25NYXJrZG93bk5vZGVzKG1hcmtkb3duTm9kZUZyb21Ob2RlLCByZXBsYWNlbWVudHMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICBtYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgICAgaWYgKG1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IFJlcGxhY2VtZW50LmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICByZW1vdmVkTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICAgICAgcmVwbGFjZW1lbnRzLnB1c2gocmVwbGFjZW1lbnQpO1xuXG4gICAgICAgIHJlbW92ZVRva2VucyhyZW1vdmVkTm9kZSwgdG9rZW5zKTtcblxuICAgICAgICByZW1vdmVOb2RlKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGFzSFRNTChjb250ZXh0KSB7XG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZW50ID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbVJlcGxhY2VtZW50c1BhZ2VDaGlsZE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUocmVwbGFjZW1lbnRzLCBwYWdlQ2hpbGROb2RlcywgZGl2aXNpb25DbGFzc05hbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IERJVklTSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgLi4ucGFnZUNoaWxkTm9kZXNcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmVwbGFjZW1lbnRzLmZvckVhY2goKHJlcGxhY2VtZW50KSA9PiB7XG4gICAgICByZXBsYWNlbWVudC5hcHBlbmRUbyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBjb250ZW50c0RlcHRoIH0gPSBjb250ZXh0LFxuICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGxldCB7IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyB9ID0gY29udGV4dDtcblxuICBjb25zdCBpbmRleCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5pbmRleE9mKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCArIDE7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLnNsaWNlKHN0YXJ0KTsgLy8vXG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzKTtcbiAgfSk7XG5cbiAgZmlsdGVyKGhlYWRpbmdNYXJrZG93bk5vZGVzLCAoaGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGRlcHRoID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXREZXB0aCgpO1xuXG4gICAgaWYgKGRlcHRoIDw9IGNvbnRlbnRzRGVwdGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRpbmdNYXJrZG93bk5vZGVzO1xufSJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsImZpbmRQYXJlbnROb2RlIiwiY2hpbGROb2RlIiwicGFyZW50Tm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldENoaWxkTm9kZXMiLCJpbmRleCIsImluZGV4T2YiLCJub2RlcyIsInNvbWUiLCJwYWdpbmF0ZSIsInBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJsaW5lc1BlclBhZ2UiLCJyZXBsYWNlbWVudHMiLCJwYWdlQ2hpbGROb2RlcyIsInJlbW92ZVN1YmRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwicGFnZUxpbmVzIiwiZm9yRWFjaCIsImxpbmVzIiwicGFnZUNoaWxkTm9kZSIsInB1c2giLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImZyb21SZXBsYWNlbWVudHNQYWdlQ2hpbGROb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lIiwicGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY3JlYXRlQ29udGVudHMiLCJjb250ZW50c0NyZWF0ZWQiLCJjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kQ29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsInRva2VucyIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImZyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZVRva2VucyIsImdldFRva2VucyIsInJlcGxhY2VkTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZU5vZGUiLCJyZXBsYWNlVG9rZW5zIiwiY3JlYXRlRm9vdG5vdGVzIiwiZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZHNGcm9tTm9kZSIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kUmVwbGFjZW1lbnRzIiwicmVwbGFjZW1lbnQiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlIiwiYXBwZW5kVG8iLCJyZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSIsIm1hcCIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwicmVwbGFjZW1lbnROb2RlcyIsInJlcGxhY2VOb2RlcyIsIm1hcmtkb3duTm9kZUZyb21Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsIm1hcmtkb3duTm9kZSIsInJlbW92ZWROb2RlIiwicmVtb3ZlVG9rZW5zIiwicmVtb3ZlTm9kZSIsImNyZWF0ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJhc0hUTUwiLCJodG1sIiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiY2xvbmUiLCJESVZJU0lPTl9SVUxFX05BTUUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsImNvbnRlbnRzRGVwdGgiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJzdGFydCIsInNsaWNlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJkZXB0aCIsImdldERlcHRoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXdCcUJBOzs7eUJBdEJVO2tFQUVQOytEQUNDO21FQUNZO29FQUNDO3lCQUVUO3lCQUNNO3lCQUNPO29CQUN5QztxQkFRM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILHFDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLHFCQUNQSSxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCO2dDQURqRVQ7O2tD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
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
var _footnotes = require("../../utilities/footnotes");
var _replace = require("../../utilities/replace");
var _query = require("../../utilities/query");
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var filter = _necessary.arrayUtilities.filter;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5pbXBvcnQgeyByZXBsYWNlTm9kZSwgcmVwbGFjZU5vZGVzLCByZXBsYWNlVG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9yZXBsYWNlXCI7XG5pbXBvcnQgeyBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlLFxuICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUsXG4gICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSxcbiAgICAgICAgIGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUsXG4gICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIGZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSwgbm9kZSA9IHRoaXMpIHtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub2RlcyA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICAgIG5vZGVzLnNvbWUoKG5vZGUpID0+IHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUpO1xuXG4gICAgICAgICAgaWYgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gIH1cblxuICBjcmVhdGVDb250ZW50cyhjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZENvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzKGhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZVRva2VucyA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5nZXRUb2tlbnMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUpLFxuICAgICAgICAgICAgcmVwbGFjZWROb2RlID0gY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZVRva2VuczsgLy8vXG5cbiAgICAgIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuXG4gICAgICBjb250ZW50c0NyZWF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0NyZWF0ZWQ7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7ICAvLy9cblxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5hcHBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgICByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVFbWJlZGRpbmdzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzLm1hcCgoZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlLnJlcGxhY2VtZW50Tm9kZUFuZFRva2Vucyhjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgdG9rZW5zO1xuXG4gICAgICAgIHRva2VucyA9IHJlcGxhY2VtZW50Tm9kZUFuZFRva2Vucy5nZXRUb2tlbnMoKTtcblxuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gcmVwbGFjZW1lbnROb2RlQW5kVG9rZW5zLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnROb2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IHRva2VuczsgLy8vXG5cbiAgICAgICAgKHsgdG9rZW5zIH0gPSBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUpLFxuICAgICAgICAgICAgICByZXBsYWNlZE5vZGUgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgICAgcmVwbGFjZU5vZGVzKHJlcGxhY2VtZW50Tm9kZXMsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICAgICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgcmVtb3ZlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIGFzSFRNTChjb250ZXh0KSB7XG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZW50ID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0hUTUwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ31cbiR7Y2hpbGROb2Rlc0hUTUx9JHtpbmRlbnR9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBjb250ZW50c0RlcHRoIH0gPSBjb250ZXh0LFxuICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gIGxldCB7IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyB9ID0gY29udGV4dDtcblxuICBjb25zdCBpbmRleCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5pbmRleE9mKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCArIDE7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLnNsaWNlKHN0YXJ0KTsgLy8vXG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzKTtcbiAgfSk7XG5cbiAgZmlsdGVyKGhlYWRpbmdNYXJrZG93bk5vZGVzLCAoaGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGRlcHRoID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXREZXB0aCgpO1xuXG4gICAgaWYgKGRlcHRoIDw9IGNvbnRlbnRzRGVwdGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRpbmdNYXJrZG93bk5vZGVzO1xufSJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImlzSWdub3JlZCIsIm5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImlnbm9yZWQiLCJmaW5kUGFyZW50Tm9kZSIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwibm9kZXMiLCJzb21lIiwiY3JlYXRlQ29udGVudHMiLCJjb250ZW50c0NyZWF0ZWQiLCJjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwidG9rZW5zIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlVG9rZW5zIiwiZ2V0VG9rZW5zIiwicmVwbGFjZWROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJyZXBsYWNlTm9kZSIsInJlcGxhY2VUb2tlbnMiLCJjcmVhdGVGb290bm90ZXMiLCJmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiYXBwZW5kQ2hpbGROb2RlIiwicmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyIsInJlc29sdmVFbWJlZGRpbmdzIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJtYXAiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSIsInJlcGxhY2VtZW50Tm9kZUFuZFRva2VucyIsInJlcGxhY2VtZW50Tm9kZXMiLCJyZXBsYWNlTm9kZXMiLCJjcmVhdGVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwicmVtb3ZlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsImFzSFRNTCIsImh0bWwiLCJpbmRlbnQiLCJFTVBUWV9TVFJJTkciLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJjbG9uZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiY29udGVudHNEZXB0aCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInN0YXJ0Iiwic2xpY2UiLCJmb3JFYWNoIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJkZXB0aCIsImdldERlcHRoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFtQnFCQTs7O3lCQWpCVTsrREFFTjttRUFDWTtvRUFDQzt5QkFFVDt5QkFDYTt1QkFDZTtxQkFLRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZELElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxxQkFDUEcsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEakVSOztrQ0FFWEcsVUFBVUMsWUFBWUMsWUFBWUMsU0FBU0M7UUFFakQsTUFBS0MsaUJBQWlCLEdBQUdBOzs7a0JBSlJSOztZQU9uQlMsS0FBQUE7bUJB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
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
                var node = this, ignoreMarkdownNode = (0, _query.ignoreMarkdownNodeFromNode)(node), ignored = ignoreMarkdownNode !== null;
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
                var node = this, contentsMarkdownNode = (0, _query.contentsMarkdownNodeFromNode)(node);
                if (contentsMarkdownNode !== null) {
                    var divisionMarkdownNode = this, headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodeAndContentsMarkdownNode(divisionMarkdownNode, contentsMarkdownNode, context), headingMarkdownNodesLength = headingMarkdownNodes.length;
                    if (headingMarkdownNodesLength === 0) {
                        return;
                    }
                    var tokens = context.tokens, contentsListMarkdownNode = _contentsList.default.fromHeadingMarkdownNodes(headingMarkdownNodes, context), contentsListMarkdownNodeTokens = contentsListMarkdownNode.getTokens(), childNode = contentsMarkdownNode, parentNode = this.findParentNode(childNode), replacedNode = contentsMarkdownNode, replacementNode = contentsListMarkdownNode, replacementTokens = contentsListMarkdownNodeTokens; ///
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
                var _this = this;
                var node = this, footnotesMarkdownNodes = (0, _query.footnotesMarkdownNodesFromNode)(node);
                footnotesMarkdownNodes.forEach(function(footnotesMarkdownNode) {
                    var childNode, parentNode;
                    childNode = footnotesMarkdownNode; ///
                    parentNode = _this.findParentNode(childNode);
                    var subDivisionMarkdownNode = parentNode; ///
                    childNode = subDivisionMarkdownNode; ///
                    parentNode = _this.findParentNode(childNode);
                    var divisionMarkdownNode = parentNode, footnotesListMarkdownNode = _footnotesList.default.fromDivisionMarkdownNode(divisionMarkdownNode, context);
                    if (footnotesListMarkdownNode !== null) {
                        childNode = footnotesListMarkdownNode; ///
                        divisionMarkdownNode.addChildNode(childNode);
                        (0, _footnotes.renumberLinkMarkdownNodes)(divisionMarkdownNode, footnotesListMarkdownNode, context);
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
function headingMarkdownNodesFromDivisionMarkdownNodeAndContentsMarkdownNode(divisionMarkdownNode, contentsMarkdownNode, context) {
    var headingMarkdownNodes = [], minimumPosition = contentsMarkdownNode.minimumPosition(context), maximumLevel = contentsMarkdownNode.maximumLevel(context), node = divisionMarkdownNode; ///
    (0, _query.headingMarkdownNodesFromNode)(node, headingMarkdownNodes);
    filter(headingMarkdownNodes, function(headingMarkdownNode) {
        var position = headingMarkdownNode.position(context);
        if (position > minimumPosition) {
            return true;
        }
    });
    var divisionMarkdownNodes = context.divisionMarkdownNodes;
    var index = divisionMarkdownNodes.indexOf(divisionMarkdownNode), start = index + 1;
    divisionMarkdownNodes = divisionMarkdownNodes.slice(start); ///
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        var node = divisionMarkdownNode; ///
        (0, _query.headingMarkdownNodesFromNode)(node, headingMarkdownNodes);
    });
    filter(headingMarkdownNodes, function(headingMarkdownNode) {
        var level = headingMarkdownNode.getLevel();
        if (level <= maximumLevel) {
            return true;
        }
    });
    return headingMarkdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5pbXBvcnQgeyByZXBsYWNlTm9kZSwgcmVwbGFjZVRva2VucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcmVwbGFjZVwiO1xuaW1wb3J0IHsgaWdub3JlTWFya2Rvd25Ob2RlRnJvbU5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUsIGNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUsIGZvb3Rub3Rlc01hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBpZ25vcmVNYXJrZG93bk5vZGUgPSBpZ25vcmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIGZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSwgbm9kZSA9IHRoaXMpIHtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub2RlcyA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICAgIG5vZGVzLnNvbWUoKG5vZGUpID0+IHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUpO1xuXG4gICAgICAgICAgaWYgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gIH1cblxuICBjcmVhdGVDb250ZW50cyhjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjb250ZW50c01hcmtkb3duTm9kZSA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoY29udGVudHNNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZENvbnRlbnRzTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZW50c01hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzKGhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZVRva2VucyA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5nZXRUb2tlbnMoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUpLFxuICAgICAgICAgICAgcmVwbGFjZWROb2RlID0gY29udGVudHNNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZVRva2VuczsgLy8vXG5cbiAgICAgIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKTtcblxuICAgICAgcmVwbGFjZVRva2VucyhyZXBsYWNlbWVudFRva2VucywgcmVwbGFjZWROb2RlLCB0b2tlbnMpO1xuXG4gICAgICBjb250ZW50c0NyZWF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0NyZWF0ZWQ7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTWFya2Rvd25Ob2RlcyA9IGZvb3Rub3Rlc01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIGZvb3Rub3Rlc01hcmtkb3duTm9kZXMuZm9yRWFjaCgoZm9vdG5vdGVzTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBsZXQgY2hpbGROb2RlLFxuICAgICAgICAgIHBhcmVudE5vZGU7XG5cbiAgICAgIGNoaWxkTm9kZSA9IGZvb3Rub3Rlc01hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSA9IHBhcmVudE5vZGU7ICAvLy9cblxuICAgICAgY2hpbGROb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBwYXJlbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjaGlsZE5vZGUgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUuYWRkQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dClcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHJlbW92ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUoZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuZGl2aXNpb25DbGFzc05hbWUpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kQ29udGVudHNNYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRlbnRzTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGhlYWRpbmdNYXJrZG93bk5vZGVzID0gW10sXG4gICAgICAgIG1pbmltdW1Qb3NpdGlvbiA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlLm1pbmltdW1Qb3NpdGlvbihjb250ZXh0KSxcbiAgICAgICAgbWF4aW11bUxldmVsID0gY29udGVudHNNYXJrZG93bk5vZGUubWF4aW11bUxldmVsKGNvbnRleHQpLFxuICAgICAgICBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzKTtcblxuICBmaWx0ZXIoaGVhZGluZ01hcmtkb3duTm9kZXMsIChoZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBoZWFkaW5nTWFya2Rvd25Ob2RlLnBvc2l0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHBvc2l0aW9uID4gbWluaW11bVBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldCB7IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyB9ID0gY29udGV4dDtcblxuICBjb25zdCBpbmRleCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5pbmRleE9mKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCArIDE7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gZGl2aXNpb25NYXJrZG93bk5vZGVzLnNsaWNlKHN0YXJ0KTsgLy8vXG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzKTtcbiAgfSk7XG5cbiAgZmlsdGVyKGhlYWRpbmdNYXJrZG93bk5vZGVzLCAoaGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGxldmVsID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXRMZXZlbCgpO1xuXG4gICAgaWYgKGxldmVsIDw9IG1heGltdW1MZXZlbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaGVhZGluZ01hcmtkb3duTm9kZXM7XG59Il0sIm5hbWVzIjpbIkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZU1hcmtkb3duTm9kZSIsImlnbm9yZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsImZpbmRQYXJlbnROb2RlIiwiY2hpbGROb2RlIiwicGFyZW50Tm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldENoaWxkTm9kZXMiLCJpbmRleCIsImluZGV4T2YiLCJub2RlcyIsInNvbWUiLCJjcmVhdGVDb250ZW50cyIsImNvbnRlbnRzQ3JlYXRlZCIsImNvbnRlbnRzTWFya2Rvd25Ob2RlIiwiY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXMiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZENvbnRlbnRzTWFya2Rvd25Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJ0b2tlbnMiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJDb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tSGVhZGluZ01hcmtkb3duTm9kZXMiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGVUb2tlbnMiLCJnZXRUb2tlbnMiLCJyZXBsYWNlZE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFRva2VucyIsInJlcGxhY2VOb2RlIiwicmVwbGFjZVRva2VucyIsImNyZWF0ZUZvb3Rub3RlcyIsImZvb3Rub3Rlc01hcmtkb3duTm9kZXMiLCJmb290bm90ZXNNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmb3JFYWNoIiwiZm9vdG5vdGVzTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImFkZENoaWxkTm9kZSIsInJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMiLCJjcmVhdGVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwicmVtb3ZlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJtaW5pbXVtUG9zaXRpb24iLCJtYXhpbXVtTGV2ZWwiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsInBvc2l0aW9uIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwic3RhcnQiLCJzbGljZSIsImxldmVsIiwiZ2V0TGV2ZWwiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
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
                    var headingMarkdownNodes = (0, _query.headingMarkdownNodesFromNode)(node), minimumPosition = contentsMarkdownNode.minimumPosition(context), maximumLevel = contentsMarkdownNode.maximumLevel(context);
                    filter(headingMarkdownNodes, function(headingMarkdownNode) {
                        var level = headingMarkdownNode.getLevel(), position = headingMarkdownNode.position(context);
                        if (level <= maximumLevel && position > minimumPosition) {
                            return true;
                        }
                    });
                    var headingMarkdownNodesLength = headingMarkdownNodes.length;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5pbXBvcnQgeyByZXBsYWNlTm9kZSwgcmVwbGFjZVRva2VucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcmVwbGFjZVwiO1xuaW1wb3J0IHsgaWdub3JlTWFya2Rvd25Ob2RlRnJvbU5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUsIGNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUsIGZvb3Rub3Rlc01hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBpZ25vcmVNYXJrZG93bk5vZGUgPSBpZ25vcmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIGZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSwgbm9kZSA9IHRoaXMpIHtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub2RlcyA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICAgIG5vZGVzLnNvbWUoKG5vZGUpID0+IHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUpO1xuXG4gICAgICAgICAgaWYgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gIH1cblxuICBjcmVhdGVDb250ZW50cyhjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjb250ZW50c01hcmtkb3duTm9kZSA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoY29udGVudHNNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICAgIG1pbmltdW1Qb3NpdGlvbiA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlLm1pbmltdW1Qb3NpdGlvbihjb250ZXh0KSxcbiAgICAgICAgICAgIG1heGltdW1MZXZlbCA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlLm1heGltdW1MZXZlbChjb250ZXh0KTtcblxuICAgICAgZmlsdGVyKGhlYWRpbmdNYXJrZG93bk5vZGVzLCAoaGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBsZXZlbCA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0TGV2ZWwoKSxcbiAgICAgICAgICAgICAgcG9zaXRpb24gPSBoZWFkaW5nTWFya2Rvd25Ob2RlLnBvc2l0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgIGlmICgobGV2ZWwgPD0gbWF4aW11bUxldmVsKSAmJiAocG9zaXRpb24gPiBtaW5pbXVtUG9zaXRpb24pKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge3Rva2Vuc30gPSBjb250ZXh0LFxuICAgICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyhoZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGVUb2tlbnMgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjb250ZW50c01hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlKSxcbiAgICAgICAgICAgIHJlcGxhY2VkTm9kZSA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGVUb2tlbnM7IC8vL1xuXG4gICAgICByZXBsYWNlTm9kZShyZXBsYWNlbWVudE5vZGUsIHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgICAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKTtcblxuICAgICAgY29udGVudHNDcmVhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNDcmVhdGVkO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc01hcmtkb3duTm9kZXMgPSBmb290bm90ZXNNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICBmb290bm90ZXNNYXJrZG93bk5vZGVzLmZvckVhY2goKGZvb3Rub3Rlc01hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgbGV0IGNoaWxkTm9kZSxcbiAgICAgICAgICBwYXJlbnROb2RlO1xuXG4gICAgICBjaGlsZE5vZGUgPSBmb290bm90ZXNNYXJrZG93bk5vZGU7ICAvLy9cblxuICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG5cbiAgICAgIGNoaWxkTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gcGFyZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY2hpbGROb2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFkZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cblxuICByZW1vdmVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUNoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZU1hcmtkb3duTm9kZSIsImlnbm9yZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsImZpbmRQYXJlbnROb2RlIiwiY2hpbGROb2RlIiwicGFyZW50Tm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldENoaWxkTm9kZXMiLCJpbmRleCIsImluZGV4T2YiLCJub2RlcyIsInNvbWUiLCJjcmVhdGVDb250ZW50cyIsImNvbnRlbnRzQ3JlYXRlZCIsImNvbnRlbnRzTWFya2Rvd25Ob2RlIiwiY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSIsIm1pbmltdW1Qb3NpdGlvbiIsIm1heGltdW1MZXZlbCIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJsZXZlbCIsImdldExldmVsIiwicG9zaXRpb24iLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsInRva2VucyIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImZyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZVRva2VucyIsImdldFRva2VucyIsInJlcGxhY2VkTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VG9rZW5zIiwicmVwbGFjZU5vZGUiLCJyZXBsYWNlVG9rZW5zIiwiY3JlYXRlRm9vdG5vdGVzIiwiZm9vdG5vdGVzTWFya2Rvd25Ob2RlcyIsImZvb3Rub3Rlc01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImZvckVhY2giLCJmb290bm90ZXNNYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJhZGRDaGlsZE5vZGUiLCJyZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIiwiY3JlYXRlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsInJlbW92ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJjbG9uZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7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
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
var _contents = require("../../utilities/contents");
var _tokens = require("../../utilities/tokens");
var _footnotes = require("../../utilities/footnotes");
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
                var node = this, contentsMarkdownNode = (0, _query.contentsMarkdownNodeFromNode)(node);
                if (contentsMarkdownNode === null) {
                    return;
                }
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
                var nodes = headingMarkdownNodes, nestedNode = (0, _contents.nestNodes)(nodes), childNestedNodes = nestedNode.getChildNestedNodes(), replacementTokens = [], nestedHeadingMarkdownNodes = childNestedNodes; ///
                Object.assign(context, {
                    replacementTokens: replacementTokens
                });
                var contentsListMarkdownNode = _contentsList.default.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), childNode = contentsMarkdownNode, parentNode = this.findParentNode(childNode), replacedChildNode = contentsMarkdownNode, replacementChildNode = contentsListMarkdownNode; ///
                parentNode.replaceChildNode(replacedChildNode, replacementChildNode);
                (0, _tokens.replaceTokens)(replacedChildNode, replacementTokens, context);
                delete context.replacementTokens;
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
                    var divisionMarkdownNode = parentNode, footnotesListMarkdownNode = _footnotesList.default.fromDivisionMarkdownNode(divisionMarkdownNode, context), replacedChildNode = footnotesMarkdownNode, replacementChildNode = footnotesListMarkdownNode; ///
                    parentNode = subDivisionMarkdownNode; ///
                    parentNode.replaceChildNode(replacedChildNode, replacementChildNode);
                    (0, _footnotes.renumberLinkMarkdownNodes)(divisionMarkdownNode, footnotesListMarkdownNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgbmVzdE5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZW50c1wiO1xuaW1wb3J0IHsgcmVwbGFjZVRva2VucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5pbXBvcnQgeyByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mb290bm90ZXNcIjtcbmltcG9ydCB7IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUsIGNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUsIGZvb3Rub3Rlc01hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSwgbm9kZSA9IHRoaXMpIHtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub2RlcyA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICAgIG5vZGVzLnNvbWUoKG5vZGUpID0+IHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUpO1xuXG4gICAgICAgICAgaWYgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gIH1cblxuICBjcmVhdGVDb250ZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjb250ZW50c01hcmtkb3duTm9kZSA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoY29udGVudHNNYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgbWluaW11bVBvc2l0aW9uID0gY29udGVudHNNYXJrZG93bk5vZGUubWluaW11bVBvc2l0aW9uKGNvbnRleHQpLFxuICAgICAgICAgIG1heGltdW1MZXZlbCA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlLm1heGltdW1MZXZlbChjb250ZXh0KTtcblxuICAgIGZpbHRlcihoZWFkaW5nTWFya2Rvd25Ob2RlcywgKGhlYWRpbmdNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxldmVsID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXRMZXZlbCgpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSBoZWFkaW5nTWFya2Rvd25Ob2RlLnBvc2l0aW9uKGNvbnRleHQpO1xuXG4gICAgICBpZiAoKGxldmVsIDw9IG1heGltdW1MZXZlbCkgJiYgKHBvc2l0aW9uID4gbWluaW11bVBvc2l0aW9uKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gaGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgICAgbmVzdGVkTm9kZSA9IG5lc3ROb2Rlcyhub2RlcyksXG4gICAgICAgICAgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZE5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gW10sXG4gICAgICAgICAgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMgPSBjaGlsZE5lc3RlZE5vZGVzOyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHJlcGxhY2VtZW50VG9rZW5zXG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBjb250ZW50c01hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgICAgcmVwbGFjZWRDaGlsZE5vZGUgPSBjb250ZW50c01hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlOyAvLy9cblxuICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIGNvbnRleHQpO1xuXG4gICAgZGVsZXRlIGNvbnRleHQucmVwbGFjZW1lbnRUb2tlbnM7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTWFya2Rvd25Ob2RlcyA9IGZvb3Rub3Rlc01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIGZvb3Rub3Rlc01hcmtkb3duTm9kZXMuZm9yRWFjaCgoZm9vdG5vdGVzTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBsZXQgY2hpbGROb2RlLFxuICAgICAgICAgIHBhcmVudE5vZGU7XG5cbiAgICAgIGNoaWxkTm9kZSA9IGZvb3Rub3Rlc01hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSA9IHBhcmVudE5vZGU7ICAvLy9cblxuICAgICAgY2hpbGROb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBwYXJlbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVwbGFjZWRDaGlsZE5vZGUgPSBmb290bm90ZXNNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgIHBhcmVudE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGUpO1xuXG4gICAgICByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgcmVtb3ZlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImZpbmRQYXJlbnROb2RlIiwiY2hpbGROb2RlIiwibm9kZSIsInBhcmVudE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwibm9kZXMiLCJzb21lIiwiY3JlYXRlQ29udGVudHMiLCJjb250ZW50c01hcmtkb3duTm9kZSIsImNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJtaW5pbXVtUG9zaXRpb24iLCJtYXhpbXVtTGV2ZWwiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwibGV2ZWwiLCJnZXRMZXZlbCIsInBvc2l0aW9uIiwiaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJuZXN0ZWROb2RlIiwibmVzdE5vZGVzIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJyZXBsYWNlbWVudFRva2VucyIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlVG9rZW5zIiwiY3JlYXRlRm9vdG5vdGVzIiwiZm9vdG5vdGVzTWFya2Rvd25Ob2RlcyIsImZvb3Rub3Rlc01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImZvckVhY2giLCJmb290bm90ZXNNYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIiwiY3JlYXRlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsInJlbW92ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJjbG9uZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWVxQkE7Ozt5QkFiVTsrREFFTjttRUFDWTtvRUFDQzt3QkFF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
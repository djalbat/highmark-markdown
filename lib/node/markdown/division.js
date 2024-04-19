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
                var footnotesListMarkdownNode = this.createFootnotesListMarkdownNode(context);
                if (footnotesListMarkdownNode !== null) {
                    var childNode = footnotesListMarkdownNode, divisionMarkdownNode = this; ///
                    this.addChildNode(childNode);
                    (0, _footnotes.renumberLinkMarkdownNodes)(divisionMarkdownNode, footnotesListMarkdownNode, context);
                }
                return footnotesListMarkdownNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgbmVzdE5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZW50c1wiO1xuaW1wb3J0IHsgcmVwbGFjZVRva2VucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5pbXBvcnQgeyByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mb290bm90ZXNcIjtcbmltcG9ydCB7IGNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBmaW5kUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUgPSB0aGlzKSB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YoY2hpbGROb2RlKTtcblxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBwYXJlbnROb2RlID0gbm9kZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZE5vZGVzOyAvLy9cblxuICAgICAgICBub2Rlcy5zb21lKChub2RlKSA9PiB7XG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlLCBub2RlKTtcblxuICAgICAgICAgIGlmIChwYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnROb2RlO1xuICB9XG5cbiAgY3JlYXRlQ29udGVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29udGVudHNNYXJrZG93bk5vZGUgPSBjb250ZW50c01hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGNvbnRlbnRzTWFya2Rvd25Ob2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIG1pbmltdW1Qb3NpdGlvbiA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlLm1pbmltdW1Qb3NpdGlvbihjb250ZXh0KSxcbiAgICAgICAgICBtYXhpbXVtTGV2ZWwgPSBjb250ZW50c01hcmtkb3duTm9kZS5tYXhpbXVtTGV2ZWwoY29udGV4dCk7XG5cbiAgICBmaWx0ZXIoaGVhZGluZ01hcmtkb3duTm9kZXMsIChoZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBsZXZlbCA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0TGV2ZWwoKSxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaGVhZGluZ01hcmtkb3duTm9kZS5wb3NpdGlvbihjb250ZXh0KTtcblxuICAgICAgaWYgKChsZXZlbCA8PSBtYXhpbXVtTGV2ZWwpICYmIChwb3NpdGlvbiA+IG1pbmltdW1Qb3NpdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXMsIC8vL1xuICAgICAgICAgIG5lc3RlZE5vZGUgPSBuZXN0Tm9kZXMobm9kZXMpLFxuICAgICAgICAgIGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWROb2RlLmdldENoaWxkTmVzdGVkTm9kZXMoKSxcbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IFtdLFxuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gY2hpbGROZXN0ZWROb2RlczsgIC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICByZXBsYWNlbWVudFRva2Vuc1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2RlID0gY29udGVudHNNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUpLFxuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gY29udGVudHNNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZSA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2RlKTtcblxuICAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBjb250ZXh0KTtcblxuICAgIGRlbGV0ZSBjb250ZXh0LnJlcGxhY2VtZW50VG9rZW5zO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gdGhpcy5jcmVhdGVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKGNvbnRleHQpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpczsgIC8vL1xuXG4gICAgICB0aGlzLmFkZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KVxuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgcmVtb3ZlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImZpbmRQYXJlbnROb2RlIiwiY2hpbGROb2RlIiwibm9kZSIsInBhcmVudE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwibm9kZXMiLCJzb21lIiwiY3JlYXRlQ29udGVudHMiLCJjb250ZW50c01hcmtkb3duTm9kZSIsImNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJtaW5pbXVtUG9zaXRpb24iLCJtYXhpbXVtTGV2ZWwiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwibGV2ZWwiLCJnZXRMZXZlbCIsInBvc2l0aW9uIiwiaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJuZXN0ZWROb2RlIiwibmVzdE5vZGVzIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJyZXBsYWNlbWVudFRva2VucyIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlVG9rZW5zIiwiY3JlYXRlRm9vdG5vdGVzIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImNyZWF0ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImFkZENoaWxkTm9kZSIsInJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVtb3ZlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7eUJBYlU7K0RBRU47bUVBQ1k7b0VBQ0M7d0JBRVo7c0JBQ0k7eUJBQ1k7cUJBQ2lDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxJQUFBLEFBQU1ELHFDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLHFCQUNQRyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCO2dDQURqRVI7O2tDQUVYRyxVQUFVQyxZQUFZQyxZQUFZQyxTQUFTQztRQUVqRCxNQUFLQyxpQkFBaUIsR0FBR0E7OztrQkFKUlI7O1lBT25CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGlCQUFpQjtZQUMvQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJGLGlCQUFpQjtnQkFDcEMsSUFBSSxDQUFDQSxpQkFBaUIsR0FBR0E7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFDZixJQUFNRCxZQUFZLElBQUksQ0FBQ0gsaUJBQWlCLEVBQUUsR0FBRztnQkFFN0MsT0FBT0c7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTOztvQkFBRUMsT0FBQUEsaUVBQU8sSUFBSTtnQkFDbkMsSUFBSUMsYUFBYTtnQkFFakIsSUFBTUMsc0JBQXNCRixLQUFLRyxpQkFBaUI7Z0JBRWxELElBQUlELHFCQUFxQjtvQkFDdkIsSUFBTUUsa0JBQWtCSixNQUNsQlgsYUFBYWUsZ0JBQWdCQyxhQUFhLElBQzFDQyxRQUFRakIsV0FBV2tCLE9BQU8sQ0FBQ1I7b0JBRWpDLElBQUlPLFVBQVUsQ0FBQyxHQUFHO3dCQUNoQkwsYUFBYUQsTUFBTyxHQUFHO29CQUN6QixPQUFPO3dCQUNMLElBQU1RLFFBQVFuQixZQUFZLEdBQUc7d0JBRTdCbUIsTUFBTUMsSUFBSSxDQUFDLFNBQUNUOzRCQUNWQyxhQUFhLE1BQUtILGNBQWMsQ0FBQ0MsV0FBV0M7NEJBRTVDLElBQUlDLGVBQWUsTUFBTTtnQ0FDdkIsT0FBTzs0QkFDVDt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWViLE9BQU87Z0JBQ3BCLElBQU1HLE9BQU8sSUFBSSxFQUNYVyx1QkFBdUJDLElBQUFBLG1DQUE0QixFQUFDWjtnQkFFMUQsSUFBSVcseUJBQXlCLE1BQU07b0JBQ2pDO2dCQUNGO2dCQUVBLElBQU1FLHVCQUF1QkMsSUFBQUEsbUNBQTRCLEVBQUNkLE9BQ3BEZSxrQkFBa0JKLHFCQUFxQkksZUFBZSxDQUFDbEIsVUFDdkRtQixlQUFlTCxxQkFBcUJLLFlBQVksQ0FBQ25CO2dCQUV2RFgsT0FBTzJCLHNCQUFzQixTQUFDSTtvQkFDNUIsSUFBTUMsUUFBUUQsb0JBQW9CRSxRQUFRLElBQ3BDQyxXQUFXSCxvQkFBb0JHLFFBQVEsQ0FBQ3ZCO29CQUU5QyxJQUFJLEFBQUNxQixTQUFTRixnQkFBa0JJLFdBQVdMLGlCQUFrQjt3QkFDM0QsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFNTSw2QkFBNkJSLHFCQUFxQlMsTUFBTTtnQkFFOUQsSUFBSUQsK0JBQStCLEdBQUc7b0JBQ3BDO2dCQUNGO2dCQUVBLElBQU1iLFFBQVFLLHNCQUNSVSxhQUFhQyxJQUFBQSxtQkFBUyxFQUFDaEIsUUFDdkJpQixtQkFBbUJGLFdBQVdHLG1CQUFtQixJQUNqREMsb0JBQW9CLEVBQUUsRUFDdEJDLDZCQUE2Qkgsa0JBQW1CLEdBQUc7Z0JBRXpESSxPQUFPQyxNQUFNLENBQUNqQyxTQUFTO29CQUNyQjhCLG1CQUFBQTtnQkFDRjtnQkFFQSxJQUFNSSwyQkFBMkJDLHFCQUF3QixDQUFDQyw4QkFBOEIsQ0FBQ0wsNEJBQTRCL0IsVUFDL0dFLFlBQVlZLHNCQUNaVixhQUFhLElBQUksQ0FBQ0gsY0FBYyxDQUFDQyxZQUNqQ21DLG9CQUFvQnZCLHNCQUNwQndCLHVCQUF1QkosMEJBQTBCLEdBQUc7Z0JBRTFEOUIsV0FBV21DLGdCQUFnQixDQUFDRixtQkFBbUJDO2dCQUUvQ0UsSUFBQUEscUJBQWEsRUFBQ0gsbUJBQW1CUCxtQkFBbUI5QjtnQkFFcEQsT0FBT0EsUUFBUThCLGlCQUFpQjtZQUNsQzs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0J6QyxPQUFPO2dCQUNyQixJQUFNMEMsNEJBQTRCLElBQUksQ0FBQ0MsK0JBQStCLENBQUMzQztnQkFFdkUsSUFBSTBDLDhCQUE4QixNQUFNO29CQUN0QyxJQUFNeEMsWUFBWXdDLDJCQUNaRSx1QkFBdUIsSUFBSSxFQUFHLEdBQUc7b0JBRXZDLElBQUksQ0FBQ0MsWUFBWSxDQUFDM0M7b0JBRWxCNEMsSUFBQUEsb0NBQXlCLEVBQUNGLHNCQUFzQkYsMkJBQTJCMUM7Z0JBQzdFO2dCQUVBLE9BQU8wQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGdDQUFnQzNDLE9BQU87Z0JBQ3JDLElBQU00Qyx1QkFBdUIsSUFBSSxFQUMzQkYsNEJBQTRCSyxzQkFBeUIsQ0FBQ0Msd0JBQXdCLENBQUNKLHNCQUFzQjVDO2dCQUUzRyxPQUFPMEM7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxnQ0FBZ0NQLHlCQUF5QjtnQkFDdkQsSUFBTXhDLFlBQVl3QywyQkFBNEIsR0FBRztnQkFFakQsSUFBSSxDQUFDUSxlQUFlLENBQUNoRDtZQUN2Qjs7O1lBRUFpRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVUsT0FBTyx1QkEvSEUvRCxpQ0ErSEkrRCxTQUFOLElBQUssYUFBTyxJQUFJLENBQUN2RCxpQkFBaUI7WUFBRzs7OztZQUUvQ3dELEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQzdELFFBQVEsRUFBRUMsVUFBVSxFQUFFRSxPQUFPO2dCQUNuRSxJQUFNRSxvQkFBb0IsTUFDcEJnRCx1QkFBdUJTLGlCQUFZLENBQUNELGdDQUFnQyxDQW5JekRoRSxzQkFtSWdGRyxVQUFVQyxZQUFZRSxTQUFTRTtnQkFFaEksT0FBT2dEO1lBQ1Q7OztXQXRJbUJ4RDtFQUE2QmlFLGlCQUFZIn0=
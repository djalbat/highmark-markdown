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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _contentsList = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/contentsList"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/footnotesList"));
var _tokens = require("../../utilities/tokens");
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
            key: "createContents",
            value: function createContents(context) {
                var replacementTokens = [], divisionMarkdownNode = this;
                var replacedChildNode = null, replacementChildNode = null;
                Object.assign(context, {
                    replacementTokens: replacementTokens,
                    replacedChildNode: replacedChildNode,
                    replacementChildNode: replacementChildNode
                });
                _contentsList.default.fromDivisionMarkdownNode(divisionMarkdownNode, context);
                var ref;
                ref = context, replacementChildNode = ref.replacementChildNode, replacedChildNode = ref.replacedChildNode, ref;
                if (replacementChildNode !== null && replacedChildNode !== null) {
                    var childNode = replacedChildNode, parentNode = this.findParentNode(childNode);
                    parentNode.replaceChildNode(replacedChildNode, replacementChildNode);
                    (0, _tokens.replaceTokens)(replacedChildNode, replacementTokens, context);
                }
                delete context.replacementTokens;
                delete context.replacedChildNode;
                delete context.replacementChildNode;
            }
        },
        {
            key: "createFootnotes",
            value: function createFootnotes(context) {
                var divisionMarkdownNode = this; ///
                var replacementChildNode = null;
                Object.assign(context, {
                    replacementChildNode: replacementChildNode
                });
                _footnotesList.default.fromDivisionMarkdownNode(divisionMarkdownNode, context);
                var ref, ref1;
                ref = context, ref1 = ref.replacementChildNode, replacementChildNode = ref1 === void 0 ? null : ref1, ref;
                if (replacementChildNode !== null) {
                    var childNode = replacementChildNode, parentNode = this; ///
                    parentNode.addChildNode(childNode);
                }
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
                        childNodes.some(function(childNode) {
                            var node = childNode; ///
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
            key: "clone",
            value: function clone() {
                debugger;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vZm9vdG5vdGVzTGlzdFwiO1xuXG5pbXBvcnQgeyByZXBsYWNlVG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90b2tlbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBjcmVhdGVDb250ZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRUb2tlbnMgPSBbXSxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXM7XG5cbiAgICBsZXQgcmVwbGFjZWRDaGlsZE5vZGUgPSBudWxsLFxuICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZSA9IG51bGw7XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHJlcGxhY2VtZW50VG9rZW5zLFxuICAgICAgcmVwbGFjZWRDaGlsZE5vZGUsXG4gICAgICByZXBsYWNlbWVudENoaWxkTm9kZVxuICAgIH0pO1xuXG4gICAgQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAoeyByZXBsYWNlbWVudENoaWxkTm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUgfSA9IGNvbnRleHQpO1xuXG4gICAgaWYgKChyZXBsYWNlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkgJiYgKHJlcGxhY2VkQ2hpbGROb2RlICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gcmVwbGFjZWRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGUpO1xuXG4gICAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudFRva2VucywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgZGVsZXRlIGNvbnRleHQucmVwbGFjZW1lbnRUb2tlbnM7XG4gICAgZGVsZXRlIGNvbnRleHQucmVwbGFjZWRDaGlsZE5vZGU7XG4gICAgZGVsZXRlIGNvbnRleHQucmVwbGFjZW1lbnRDaGlsZE5vZGU7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpczsgIC8vL1xuXG4gICAgbGV0IHJlcGxhY2VtZW50Q2hpbGROb2RlID0gbnVsbDtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVcbiAgICB9KTtcblxuICAgIEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICh7IHJlcGxhY2VtZW50Q2hpbGROb2RlID0gbnVsbCB9ID0gY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHJlcGxhY2VtZW50Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpczsgIC8vL1xuXG4gICAgICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSwgbm9kZSA9IHRoaXMpIHtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IG51bGxcblxuICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUpO1xuXG4gICAgICAgICAgaWYgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGl2aXNpb25NYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiY3JlYXRlQ29udGVudHMiLCJyZXBsYWNlbWVudFRva2VucyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJmaW5kUGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlVG9rZW5zIiwiY3JlYXRlRm9vdG5vdGVzIiwiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImFkZENoaWxkTm9kZSIsIm5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwic29tZSIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7K0RBTkk7bUVBQ1k7b0VBQ0M7c0JBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLHFDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLHFCQUNQQyxRQUFR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
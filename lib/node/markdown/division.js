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
var _node = require("../../utilities/node");
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
                Object.assign(context, {
                    replacementTokens: replacementTokens
                });
                _contentsList.default.fromDivisionMarkdownNode(divisionMarkdownNode, context);
                var _context_replacementChildNode = context.replacementChildNode, replacementChildNode = _context_replacementChildNode === void 0 ? null : _context_replacementChildNode, _context_replacedChildNode = context.replacedChildNode, replacedChildNode = _context_replacedChildNode === void 0 ? null : _context_replacedChildNode;
                if (replacementChildNode !== null && replacedChildNode !== null) {
                    var node = this, childNode = replacedChildNode, parentNode = (0, _node.parentNodeFromNodeAndChildNode)(node, childNode);
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
                var replacementTokens = [], divisionMarkdownNode = this; ///
                Object.assign(context, {
                    replacementTokens: replacementTokens
                });
                _footnotesList.default.fromDivisionMarkdownNode(divisionMarkdownNode, context);
                var _context_replacementChildNode = context.replacementChildNode, replacementChildNode = _context_replacementChildNode === void 0 ? null : _context_replacementChildNode;
                if (replacementChildNode !== null) {
                    var childNode = replacementChildNode, parentNode = this; ///
                    parentNode.addChildNode(childNode);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vZm9vdG5vdGVzTGlzdFwiO1xuXG5pbXBvcnQgeyByZXBsYWNlVG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90b2tlbnNcIjtcbmltcG9ydCB7IHBhcmVudE5vZGVGcm9tTm9kZUFuZENoaWxkTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFRva2VucyA9IFtdLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcztcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgcmVwbGFjZW1lbnRUb2tlbnNcbiAgICB9KTtcblxuICAgIENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgeyByZXBsYWNlbWVudENoaWxkTm9kZSA9IG51bGwsIHJlcGxhY2VkQ2hpbGROb2RlID0gbnVsbCB9ID0gY29udGV4dDtcblxuICAgIGlmICgocmVwbGFjZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpICYmIChyZXBsYWNlZENoaWxkTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSByZXBsYWNlZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGVGcm9tTm9kZUFuZENoaWxkTm9kZShub2RlLCBjaGlsZE5vZGUpO1xuXG4gICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2RlKTtcblxuICAgICAgcmVwbGFjZVRva2VucyhyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGRlbGV0ZSBjb250ZXh0LnJlcGxhY2VtZW50VG9rZW5zO1xuICAgIGRlbGV0ZSBjb250ZXh0LnJlcGxhY2VkQ2hpbGROb2RlO1xuICAgIGRlbGV0ZSBjb250ZXh0LnJlcGxhY2VtZW50Q2hpbGROb2RlO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFRva2VucyA9IFtdLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpczsgIC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICByZXBsYWNlbWVudFRva2Vuc1xuICAgIH0pO1xuXG4gICAgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgeyByZXBsYWNlbWVudENoaWxkTm9kZSA9IG51bGwgfSA9IGNvbnRleHQ7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHJlcGxhY2VtZW50Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpczsgIC8vL1xuXG4gICAgICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJvcGFjaXR5IiwiZG9tRWxlbWVudCIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiZ2V0RGl2aXNpb25DbGFzc05hbWUiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJjcmVhdGVDb250ZW50cyIsInJlcGxhY2VtZW50VG9rZW5zIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJDb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwibm9kZSIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJwYXJlbnROb2RlRnJvbU5vZGVBbmRDaGlsZE5vZGUiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZVRva2VucyIsImNyZWF0ZUZvb3Rub3RlcyIsIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJhZGRDaGlsZE5vZGUiLCJjbG9uZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsrREFQSTttRUFDWTtvRUFDQztzQkFFUjtvQkFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
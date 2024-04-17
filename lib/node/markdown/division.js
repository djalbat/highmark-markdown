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
                var node = this, contentsMarkdownNode = (0, _query.contentsMarkdownNodeFromNode)(node);
                if (contentsMarkdownNode === null) {
                    return;
                }
                var replacementTokens = [];
                Object.assign(context, {
                    replacementTokens: replacementTokens
                });
                var divisionMarkdownNode = this, contentsListMarkdownNode = _contentsList.default.fromDivisionMarkdownNodeAndContentsMarkdownNode(divisionMarkdownNode, contentsMarkdownNode, context);
                if (contentsListMarkdownNode !== null) {
                    var childNode = contentsMarkdownNode, parentNode = this.findParentNode(childNode), replacedChildNode = contentsMarkdownNode, replacementChildNode = contentsListMarkdownNode; ///
                    parentNode.replaceChildNode(replacedChildNode, replacementChildNode);
                    (0, _tokens.replaceTokens)(replacedChildNode, replacementTokens, context);
                }
                delete context.replacementTokens;
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
            key: "createFootnotes",
            value: function createFootnotes(context) {
                var footnotesListMarkdownNode = this.createFootnotesListMarkdownNode(context);
                if (footnotesListMarkdownNode !== null) {
                    var childNode = footnotesListMarkdownNode; ///
                    this.addChildNode(childNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vZm9vdG5vdGVzTGlzdFwiO1xuXG5pbXBvcnQgeyByZXBsYWNlVG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90b2tlbnNcIjtcbmltcG9ydCB7IGNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25DbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBzZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgY3JlYXRlQ29udGVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29udGVudHNNYXJrZG93bk5vZGUgPSBjb250ZW50c01hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGNvbnRlbnRzTWFya2Rvd25Ob2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUb2tlbnMgPSBbXTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgcmVwbGFjZW1lbnRUb2tlbnNcbiAgICB9KTtcblxuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c01hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGVudHNNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gY29udGVudHNNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgICAgICByZXBsYWNlZENoaWxkTm9kZSA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZSA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGUpO1xuXG4gICAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudFRva2VucywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgZGVsZXRlIGNvbnRleHQucmVwbGFjZW1lbnRUb2tlbnM7XG4gIH1cblxuICBmaW5kUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUgPSB0aGlzKSB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBudWxsXG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlLCBub2RlKTtcblxuICAgICAgICAgIGlmIChwYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnROb2RlO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gdGhpcy5jcmVhdGVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKGNvbnRleHQpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7ICAvLy9cblxuICAgICAgdGhpcy5hZGRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHJlbW92ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUoZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuZGl2aXNpb25DbGFzc05hbWUpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGl2aXNpb25NYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eSIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwiY3JlYXRlQ29udGVudHMiLCJub2RlIiwiY29udGVudHNNYXJrZG93bk5vZGUiLCJjb250ZW50c01hcmtkb3duTm9kZUZyb21Ob2RlIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZENvbnRlbnRzTWFya2Rvd25Ob2RlIiwiY2hpbGROb2RlIiwicGFyZW50Tm9kZSIsImZpbmRQYXJlbnROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlVG9rZW5zIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0Q2hpbGROb2RlcyIsImluZGV4IiwiaW5kZXhPZiIsInNvbWUiLCJjcmVhdGVGb290bm90ZXMiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiY3JlYXRlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImFkZENoaWxkTm9kZSIsIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZW1vdmVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwicmVtb3ZlQ2hpbGROb2RlIiwiY2xvbmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OytEQVBJO21FQUNZO29FQUNDO3NCQUVSO3FCQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBQSxBQUFNQSxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxxQkFDUEMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEakVOOztrQ0FFWEMsVUFBVUMsWUFBWUMsWUFBWUMsU0FBU0M7UUFFakQsTUFBS0MsaUJBQWlCLEdBQUdBOzs7a0JBSlJOOztZQU9uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZ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
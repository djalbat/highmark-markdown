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
                if (footnotesListMarkdownNode) {
                    var childNode = footnotesListMarkdownNode; ///
                    this.addChildNode(childNode);
                }
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
            key: "createFootnotesListMarkdownNode",
            value: function createFootnotesListMarkdownNode(context) {
                var divisionMarkdownNode = this, footnotesListMarkdownNode = _footnotesList.default.fromDivisionMarkdownNode(divisionMarkdownNode, context);
                return footnotesListMarkdownNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vZm9vdG5vdGVzTGlzdFwiO1xuXG5pbXBvcnQgeyByZXBsYWNlVG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90b2tlbnNcIjtcbmltcG9ydCB7IGNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25DbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBzZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgY3JlYXRlQ29udGVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29udGVudHNNYXJrZG93bk5vZGUgPSBjb250ZW50c01hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGNvbnRlbnRzTWFya2Rvd25Ob2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUb2tlbnMgPSBbXTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgcmVwbGFjZW1lbnRUb2tlbnNcbiAgICB9KTtcblxuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c01hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGVudHNNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gY29udGVudHNNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgICAgICByZXBsYWNlZENoaWxkTm9kZSA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZSA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGUpO1xuXG4gICAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudFRva2VucywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgZGVsZXRlIGNvbnRleHQucmVwbGFjZW1lbnRUb2tlbnM7XG4gIH1cblxuICBmaW5kUGFyZW50Tm9kZShjaGlsZE5vZGUsIG5vZGUgPSB0aGlzKSB7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBudWxsXG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBpbmRleCA9IGNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZE5vZGUpO1xuXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUoY2hpbGROb2RlLCBub2RlKTtcblxuICAgICAgICAgIGlmIChwYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnROb2RlO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzKGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gdGhpcy5jcmVhdGVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKGNvbnRleHQpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7ICAvLy9cblxuICAgICAgdGhpcy5hZGRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUNoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImNyZWF0ZUNvbnRlbnRzIiwibm9kZSIsImNvbnRlbnRzTWFya2Rvd25Ob2RlIiwiY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSIsInJlcGxhY2VtZW50VG9rZW5zIiwiT2JqZWN0IiwiYXNzaWduIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJDb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c01hcmtkb3duTm9kZSIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJmaW5kUGFyZW50Tm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwicmVwbGFjZW1lbnRDaGlsZE5vZGUiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZVRva2VucyIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldENoaWxkTm9kZXMiLCJpbmRleCIsImluZGV4T2YiLCJzb21lIiwiY3JlYXRlRm9vdG5vdGVzIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImNyZWF0ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJhZGRDaGlsZE5vZGUiLCJyZW1vdmVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwicmVtb3ZlQ2hpbGROb2RlIiwiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OytEQVBJO21FQUNZO29FQUNDO3NCQUVSO3FCQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBQSxBQUFNQSxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxxQkFDUEMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEakVOOztrQ0FFWEMsVUFBVUMsWUFBWUMsWUFBWUMsU0FBU0M7UUFFakQsTUFBS0MsaUJBQWlCLEdBQUdBOzs7a0JBSlJOOztZQU9uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCRixpQkFBaUI7Z0JBQ3BDLElBQUks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
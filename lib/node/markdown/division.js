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
                var headingMarkdownNodes = (0, _query.headingMarkdownNodesFromNode)(node), maximumLevel = contentsMarkdownNode.maximumLevel(context);
                filter(headingMarkdownNodes, function(headingMarkdownNode) {
                    var level = headingMarkdownNode.getLevel();
                    if (level <= maximumLevel) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgbmVzdE5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZW50c1wiO1xuaW1wb3J0IHsgcmVwbGFjZVRva2VucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5pbXBvcnQgeyBjb250ZW50c01hcmtkb3duTm9kZUZyb21Ob2RlLCBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25DbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBzZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgZmluZFBhcmVudE5vZGUoY2hpbGROb2RlLCBub2RlID0gdGhpcykge1xuICAgIGxldCBwYXJlbnROb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkTm9kZSk7XG5cbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgICAgbm9kZXMuc29tZSgobm9kZSkgPT4ge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSwgbm9kZSk7XG5cbiAgICAgICAgICBpZiAocGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzTWFya2Rvd25Ob2RlID0gY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChjb250ZW50c01hcmtkb3duTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBtYXhpbXVtTGV2ZWwgPSBjb250ZW50c01hcmtkb3duTm9kZS5tYXhpbXVtTGV2ZWwoY29udGV4dCk7XG5cbiAgICBmaWx0ZXIoaGVhZGluZ01hcmtkb3duTm9kZXMsIChoZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBsZXZlbCA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0TGV2ZWwoKTtcblxuICAgICAgaWYgKGxldmVsIDw9IG1heGltdW1MZXZlbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gaGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgICAgbmVzdGVkTm9kZSA9IG5lc3ROb2Rlcyhub2RlcyksXG4gICAgICAgICAgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZE5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gW10sXG4gICAgICAgICAgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMgPSBjaGlsZE5lc3RlZE5vZGVzOyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgIHJlcGxhY2VtZW50VG9rZW5zXG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBjb250ZW50c01hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGNoaWxkTm9kZSksXG4gICAgICAgICAgcmVwbGFjZWRDaGlsZE5vZGUgPSBjb250ZW50c01hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlOyAvLy9cblxuICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIGNvbnRleHQpO1xuXG4gICAgZGVsZXRlIGNvbnRleHQucmVwbGFjZW1lbnRUb2tlbnM7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSB0aGlzLmNyZWF0ZUZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUoY29udGV4dCk7XG5cbiAgICBpZiAoZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgICB0aGlzLmFkZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgcmVtb3ZlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZShmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImZpbmRQYXJlbnROb2RlIiwiY2hpbGROb2RlIiwibm9kZSIsInBhcmVudE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwibm9kZXMiLCJzb21lIiwiY3JlYXRlQ29udGVudHMiLCJjb250ZW50c01hcmtkb3duTm9kZSIsImNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJtYXhpbXVtTGV2ZWwiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwibGV2ZWwiLCJnZXRMZXZlbCIsImhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibmVzdGVkTm9kZSIsIm5lc3ROb2RlcyIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIk9iamVjdCIsImFzc2lnbiIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsInJlcGxhY2VkQ2hpbGROb2RlIiwicmVwbGFjZW1lbnRDaGlsZE5vZGUiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZVRva2VucyIsImNyZWF0ZUZvb3Rub3RlcyIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJjcmVhdGVGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiYWRkQ2hpbGROb2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVtb3ZlRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7O3lCQVpVOytEQUVOO21FQUNZO29FQUNDO3dCQUVaO3NCQUNJO3FCQUM2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxxQkFDUEcsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEakVSOztr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
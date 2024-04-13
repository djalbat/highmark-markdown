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
var _tree = require("../../utilities/tree");
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
            key: "createContents",
            value: function createContents(context) {
                var node = this, contentsMarkdownNode = (0, _query.contentsMarkdownNodeFromNode)(node);
                if (contentsMarkdownNode === null) {
                    return;
                }
                var maximumLevel = contentsMarkdownNode.maximumLevel(context);
                var headingMarkdownNodes = headingMarkdownNodesFromNodeAndMaximumLevel(node, maximumLevel, context), headingMarkdownNodesLength = headingMarkdownNodes.length;
                if (headingMarkdownNodesLength === 0) {
                    return;
                }
                var nodes = headingMarkdownNodes, nestedNode = (0, _tree.nestNodes)(nodes), childNestedNodes = nestedNode.getChildNestedNodes(), replacementTokens = [];
                Object.assign(context, {
                    replacementTokens: replacementTokens
                });
                var nestedHeadingMarkdownNodes = childNestedNodes, contentsListMarkdownNode = _contentsList.default.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), replacementChildNode = contentsListMarkdownNode, replacedChildNode = contentsMarkdownNode, parentNode = parentNodeFromNodeAndReplacedChildNode(node, replacedChildNode);
                parentNode.replaceChildNode(replacedChildNode, replacementChildNode);
                (0, _tokens.replaceTokens)(replacedChildNode, replacementTokens, context);
                delete context.replacementTokens;
            }
        },
        {
            key: "createFootnotes",
            value: function createFootnotes(context) {}
        },
        {
            key: "recreateFootnotes",
            value: function recreateFootnotes(context) {}
        },
        {
            // childNodesAsHTML(indent, context) {
            //   const divisionMarkdownNode = this,  ///
            //         contentsListMarkdownNode = ContentsListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context),
            //         footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);
            //
            //   let childNodesHTML = super.childNodesAsHTML(indent, context);
            //
            //   if (contentsListMarkdownNode !== null) {
            //     childNodesHTML = replaceContentsMarkdownNodeHTML(childNodesHTML, divisionMarkdownNode, contentsListMarkdownNode, context);
            //   }
            //
            //   if (footnotesListMarkdownNode !== null) {
            //     childNodesHTML = renumberLinkMarkdownNodesHTML(childNodesHTML, divisionMarkdownNode, footnotesListMarkdownNode, context);
            //
            //     childNodesHTML = appendFootnotesListMarkdownNodeHTML(childNodesHTML, footnotesListMarkdownNode, indent, context);
            //   }
            //
            //   return childNodesHTML;
            // }
            // createChildNodeDOMElements(context) {
            //   const divisionMarkdownNode = this,  ///
            //         footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);
            //
            //   super.createChildNodeDOMElements(context);
            //
            //   if (footnotesListMarkdownNode !== null) {
            //     const footnotesListMarkdownNodeDOMElement = footnotesListMarkdownNode.createDOMElement(context),
            //           childNodeDOMElement = footnotesListMarkdownNodeDOMElement;  ///
            //
            //     this.insertDOMElement(childNodeDOMElement);
            //
            //     renumberLinkMarkdownNodes(divisionMarkdownNode, footnotesListMarkdownNode, context);
            //   }
            // }
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
function parentNodeFromNodeAndReplacedChildNode(node, replacedChildNode) {
    var parentNode = null;
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), index = childNodes.indexOf(replacedChildNode);
        if (index !== -1) {
            parentNode = node; ///
        } else {
            childNodes.some(function(childNode) {
                var _$node = childNode; ///
                parentNode = parentNodeFromNodeAndReplacedChildNode(_$node, replacedChildNode);
                if (parentNode !== null) {
                    return true;
                }
            });
        }
    }
    return parentNode;
}
function headingMarkdownNodesFromNodeAndMaximumLevel(node, maximumLevel) {
    var headingMarkdownNodes = (0, _query.headingMarkdownNodesFromNode)(node);
    filter(headingMarkdownNodes, function(headingMarkdownNode) {
        var level = headingMarkdownNode.getLevel();
        if (level <= maximumLevel) {
            return true;
        }
    });
    return headingMarkdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5pbXBvcnQgeyBuZXN0Tm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RyZWVcIjtcbmltcG9ydCB7IHJlcGxhY2VUb2tlbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuaW1wb3J0IHsgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSwgY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuLy8gaW1wb3J0IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vZm9vdG5vdGVzTGlzdFwiO1xuXG4vLyBpbXBvcnQgeyByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzLCByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzSFRNTCwgYXBwZW5kRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZUhUTUwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Zvb3Rub3Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzTWFya2Rvd25Ob2RlID0gY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChjb250ZW50c01hcmtkb3duTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1heGltdW1MZXZlbCA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlLm1heGltdW1MZXZlbChjb250ZXh0KTtcblxuICAgIGNvbnN0IGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZUFuZE1heGltdW1MZXZlbChub2RlLCBtYXhpbXVtTGV2ZWwsIGNvbnRleHQpLFxuICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gaGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgICAgbmVzdGVkTm9kZSA9IG5lc3ROb2Rlcyhub2RlcyksXG4gICAgICAgICAgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZE5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICAgIHJlcGxhY2VtZW50VG9rZW5zID0gW11cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgcmVwbGFjZW1lbnRUb2tlbnNcbiAgICB9KTtcblxuICAgIGNvbnN0IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gY2hpbGROZXN0ZWROb2RlcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLFxuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gY29udGVudHNNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlRnJvbU5vZGVBbmRSZXBsYWNlZENoaWxkTm9kZShub2RlLCByZXBsYWNlZENoaWxkTm9kZSk7XG5cbiAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2RlKTtcblxuICAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBjb250ZXh0KTtcblxuICAgIGRlbGV0ZSBjb250ZXh0LnJlcGxhY2VtZW50VG9rZW5zO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzKGNvbnRleHQpIHtcblxuICB9XG5cbiAgcmVjcmVhdGVGb290bm90ZXMoY29udGV4dCkge1xuXG4gIH1cblxuICAvLyBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAvLyAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAvLyAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgbGV0IGNoaWxkTm9kZXNIVE1MID0gc3VwZXIuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGlmIChjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgLy8gICAgIGNoaWxkTm9kZXNIVE1MID0gcmVwbGFjZUNvbnRlbnRzTWFya2Rvd25Ob2RlSFRNTChjaGlsZE5vZGVzSFRNTCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gIC8vICAgICBjaGlsZE5vZGVzSFRNTCA9IHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXNIVE1MKGNoaWxkTm9kZXNIVE1MLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBjaGlsZE5vZGVzSFRNTCA9IGFwcGVuZEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGVIVE1MKGNoaWxkTm9kZXNIVE1MLCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBpbmRlbnQsIGNvbnRleHQpO1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIC8vIH1cblxuICAvLyBjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gIC8vICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBzdXBlci5jcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBpZiAoZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAvLyAgICAgY29uc3QgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZURPTUVsZW1lbnQgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCksXG4gIC8vICAgICAgICAgICBjaGlsZE5vZGVET01FbGVtZW50ID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZURPTUVsZW1lbnQ7ICAvLy9cbiAgLy9cbiAgLy8gICAgIHRoaXMuaW5zZXJ0RE9NRWxlbWVudChjaGlsZE5vZGVET01FbGVtZW50KTtcbiAgLy9cbiAgLy8gICAgIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGNsb25lKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyZW50Tm9kZUZyb21Ob2RlQW5kUmVwbGFjZWRDaGlsZE5vZGUobm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUpIHtcbiAgbGV0IHBhcmVudE5vZGUgPSBudWxsXG5cbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKHJlcGxhY2VkQ2hpbGROb2RlKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlRnJvbU5vZGVBbmRSZXBsYWNlZENoaWxkTm9kZShub2RlLCByZXBsYWNlZENoaWxkTm9kZSk7XG5cbiAgICAgICAgaWYgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG5cbmZ1bmN0aW9uIGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGVBbmRNYXhpbXVtTGV2ZWwobm9kZSwgbWF4aW11bUxldmVsKSB7XG4gIGNvbnN0ICBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgZmlsdGVyKGhlYWRpbmdNYXJrZG93bk5vZGVzLCAoaGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGxldmVsID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXRMZXZlbCgpO1xuXG4gICAgaWYgKGxldmVsIDw9IG1heGltdW1MZXZlbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaGVhZGluZ01hcmtkb3duTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJvcGFjaXR5IiwiZG9tRWxlbWVudCIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiZ2V0RGl2aXNpb25DbGFzc05hbWUiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJjcmVhdGVDb250ZW50cyIsIm5vZGUiLCJjb250ZW50c01hcmtkb3duTm9kZSIsImNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJtYXhpbXVtTGV2ZWwiLCJoZWFkaW5nTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGVBbmRNYXhpbXVtTGV2ZWwiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGVzIiwibmVzdGVkTm9kZSIsIm5lc3ROb2RlcyIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsInJlcGxhY2VtZW50Q2hpbGROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJwYXJlbnROb2RlIiwicGFyZW50Tm9kZUZyb21Ob2RlQW5kUmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZVRva2VucyIsImNyZWF0ZUZvb3Rub3RlcyIsInJlY3JlYXRlRm9vdG5vdGVzIiwiY2xvbmUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0Q2hpbGROb2RlcyIsImluZGV4IiwiaW5kZXhPZiIsInNvbWUiLCJjaGlsZE5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImxldmVsIiwiZ2V0TGV2ZWwiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
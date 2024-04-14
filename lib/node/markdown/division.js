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
                var maximumLevel = contentsMarkdownNode.maximumLevel(context), headingMarkdownNodes = headingMarkdownNodesFromNodeAndMaximumLevel(node, maximumLevel, context), headingMarkdownNodesLength = headingMarkdownNodes.length;
                if (headingMarkdownNodesLength === 0) {
                    return;
                }
                var replacementTokens = [];
                Object.assign(context, {
                    replacementTokens: replacementTokens
                });
                var nodes = headingMarkdownNodes, nestedNode = (0, _tree.nestNodes)(nodes), nestedHeadingMarkdownNode = nestedNode, contentsListMarkdownNode = _contentsList.default.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context), replacementChildNode = contentsListMarkdownNode, replacedChildNode = contentsMarkdownNode, parentNode = parentNodeFromNodeAndReplacedChildNode(node, replacedChildNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5pbXBvcnQgeyBuZXN0Tm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RyZWVcIjtcbmltcG9ydCB7IHJlcGxhY2VUb2tlbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuaW1wb3J0IHsgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSwgY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuLy8gaW1wb3J0IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vZm9vdG5vdGVzTGlzdFwiO1xuXG4vLyBpbXBvcnQgeyByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzLCByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzSFRNTCwgYXBwZW5kRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZUhUTUwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2Zvb3Rub3Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlLCBvcGFjaXR5LCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzTWFya2Rvd25Ob2RlID0gY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChjb250ZW50c01hcmtkb3duTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1heGltdW1MZXZlbCA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlLm1heGltdW1MZXZlbChjb250ZXh0KSxcbiAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGVBbmRNYXhpbXVtTGV2ZWwobm9kZSwgbWF4aW11bUxldmVsLCBjb250ZXh0KSxcbiAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50VG9rZW5zID0gW11cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgcmVwbGFjZW1lbnRUb2tlbnNcbiAgICB9KTtcblxuICAgIGNvbnN0IG5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXMsIC8vL1xuICAgICAgICAgIG5lc3RlZE5vZGUgPSBuZXN0Tm9kZXMobm9kZXMpLFxuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUgPSBuZXN0ZWROb2RlLCAvLy9cbiAgICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsXG4gICAgICAgICAgcmVwbGFjZWRDaGlsZE5vZGUgPSBjb250ZW50c01hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGVGcm9tTm9kZUFuZFJlcGxhY2VkQ2hpbGROb2RlKG5vZGUsIHJlcGxhY2VkQ2hpbGROb2RlKTtcblxuICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGUpO1xuXG4gICAgcmVwbGFjZVRva2VucyhyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIGNvbnRleHQpO1xuXG4gICAgZGVsZXRlIGNvbnRleHQucmVwbGFjZW1lbnRUb2tlbnM7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXMoY29udGV4dCkge1xuXG4gIH1cblxuICByZWNyZWF0ZUZvb3Rub3Rlcyhjb250ZXh0KSB7XG5cbiAgfVxuXG4gIC8vIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gIC8vICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gIC8vICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBsZXQgY2hpbGROb2Rlc0hUTUwgPSBzdXBlci5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgaWYgKGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAvLyAgICAgY2hpbGROb2Rlc0hUTUwgPSByZXBsYWNlQ29udGVudHNNYXJrZG93bk5vZGVIVE1MKGNoaWxkTm9kZXNIVE1MLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgaWYgKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgLy8gICAgIGNoaWxkTm9kZXNIVE1MID0gcmVudW1iZXJMaW5rTWFya2Rvd25Ob2Rlc0hUTUwoY2hpbGROb2Rlc0hUTUwsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGNoaWxkTm9kZXNIVE1MID0gYXBwZW5kRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZUhUTUwoY2hpbGROb2Rlc0hUTUwsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIGluZGVudCwgY29udGV4dCk7XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgLy8gfVxuXG4gIC8vIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgLy8gICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIHN1cGVyLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlRE9NRWxlbWVudCA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSxcbiAgLy8gICAgICAgICAgIGNoaWxkTm9kZURPTUVsZW1lbnQgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlRE9NRWxlbWVudDsgIC8vL1xuICAvL1xuICAvLyAgICAgdGhpcy5pbnNlcnRET01FbGVtZW50KGNoaWxkTm9kZURPTUVsZW1lbnQpO1xuICAvL1xuICAvLyAgICAgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgY2xvbmUoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJlbnROb2RlRnJvbU5vZGVBbmRSZXBsYWNlZENoaWxkTm9kZShub2RlLCByZXBsYWNlZENoaWxkTm9kZSkge1xuICBsZXQgcGFyZW50Tm9kZSA9IG51bGxcblxuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YocmVwbGFjZWRDaGlsZE5vZGUpO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGVGcm9tTm9kZUFuZFJlcGxhY2VkQ2hpbGROb2RlKG5vZGUsIHJlcGxhY2VkQ2hpbGROb2RlKTtcblxuICAgICAgICBpZiAocGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyZW50Tm9kZTtcbn1cblxuZnVuY3Rpb24gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZUFuZE1heGltdW1MZXZlbChub2RlLCBtYXhpbXVtTGV2ZWwpIHtcbiAgY29uc3QgIGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICBmaWx0ZXIoaGVhZGluZ01hcmtkb3duTm9kZXMsIChoZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgbGV2ZWwgPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmdldExldmVsKCk7XG5cbiAgICBpZiAobGV2ZWwgPD0gbWF4aW11bUxldmVsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkaW5nTWFya2Rvd25Ob2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImNyZWF0ZUNvbnRlbnRzIiwibm9kZSIsImNvbnRlbnRzTWFya2Rvd25Ob2RlIiwiY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSIsIm1heGltdW1MZXZlbCIsImhlYWRpbmdNYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZUFuZE1heGltdW1MZXZlbCIsImhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJub2RlcyIsIm5lc3RlZE5vZGUiLCJuZXN0Tm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwicGFyZW50Tm9kZSIsInBhcmVudE5vZGVGcm9tTm9kZUFuZFJlcGxhY2VkQ2hpbGROb2RlIiwicmVwbGFjZUNoaWxkTm9kZSIsInJlcGxhY2VUb2tlbnMiLCJjcmVhdGVGb290bm90ZXMiLCJyZWNyZWF0ZUZvb3Rub3RlcyIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldENoaWxkTm9kZXMiLCJpbmRleCIsImluZGV4T2YiLCJzb21lIiwiY2hpbGROb2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJsZXZlbCIsImdldExldmVsIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlCcUJBOzs7eUJBZlU7K0RBRU47bUVBQ1k7b0JBSVg7c0JBQ0k7cUJBQzZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
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
                var nodes = headingMarkdownNodes, nestedNode = (0, _contents.nestNodes)(nodes), nestedHeadingMarkdownNode = nestedNode, contentsListMarkdownNode = _contentsList.default.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context), replacementChildNode = contentsListMarkdownNode, replacedChildNode = contentsMarkdownNode, parentNode = parentNodeFromNodeAndReplacedChildNode(node, replacedChildNode);
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
            // childNodesAsHTML(indent, context) {
            //   const divisionMarkdownNode = this,  ///
            //         footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDivisionMarkdownNode(divisionMarkdownNode, context);
            //
            //   let childNodesHTML = super.childNodesAsHTML(indent, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5pbXBvcnQgeyBuZXN0Tm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRlbnRzXCI7XG5pbXBvcnQgeyByZXBsYWNlVG9rZW5zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90b2tlbnNcIjtcbmltcG9ydCB7IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUsIGNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbi8vIGltcG9ydCB7IHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMsIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXNIVE1MLCBhcHBlbmRGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlSFRNTCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZm9vdG5vdGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIG9wYWNpdHksIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25DbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBzZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgY3JlYXRlQ29udGVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29udGVudHNNYXJrZG93bk5vZGUgPSBjb250ZW50c01hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGNvbnRlbnRzTWFya2Rvd25Ob2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWF4aW11bUxldmVsID0gY29udGVudHNNYXJrZG93bk5vZGUubWF4aW11bUxldmVsKGNvbnRleHQpLFxuICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZUFuZE1heGltdW1MZXZlbChub2RlLCBtYXhpbXVtTGV2ZWwsIGNvbnRleHQpLFxuICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gaGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUb2tlbnMgPSBbXVxuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICByZXBsYWNlbWVudFRva2Vuc1xuICAgIH0pO1xuXG4gICAgY29uc3Qgbm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgICAgbmVzdGVkTm9kZSA9IG5lc3ROb2Rlcyhub2RlcyksXG4gICAgICAgICAgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSA9IG5lc3RlZE5vZGUsIC8vL1xuICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICByZXBsYWNlbWVudENoaWxkTm9kZSA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSxcbiAgICAgICAgICByZXBsYWNlZENoaWxkTm9kZSA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZUZyb21Ob2RlQW5kUmVwbGFjZWRDaGlsZE5vZGUobm9kZSwgcmVwbGFjZWRDaGlsZE5vZGUpO1xuXG4gICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZSk7XG5cbiAgICByZXBsYWNlVG9rZW5zKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudFRva2VucywgY29udGV4dCk7XG5cbiAgICBkZWxldGUgY29udGV4dC5yZXBsYWNlbWVudFRva2VucztcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlcyhjb250ZXh0KSB7XG5cbiAgfVxuXG4gIC8vIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gIC8vICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBsZXQgY2hpbGROb2Rlc0hUTUwgPSBzdXBlci5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgaWYgKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgLy8gICAgIGNoaWxkTm9kZXNIVE1MID0gcmVudW1iZXJMaW5rTWFya2Rvd25Ob2Rlc0hUTUwoY2hpbGROb2Rlc0hUTUwsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGNoaWxkTm9kZXNIVE1MID0gYXBwZW5kRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZUhUTUwoY2hpbGROb2Rlc0hUTUwsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIGluZGVudCwgY29udGV4dCk7XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgLy8gfVxuXG4gIC8vIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgLy8gICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIHN1cGVyLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlRE9NRWxlbWVudCA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSxcbiAgLy8gICAgICAgICAgIGNoaWxkTm9kZURPTUVsZW1lbnQgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlRE9NRWxlbWVudDsgIC8vL1xuICAvL1xuICAvLyAgICAgdGhpcy5pbnNlcnRET01FbGVtZW50KGNoaWxkTm9kZURPTUVsZW1lbnQpO1xuICAvL1xuICAvLyAgICAgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgY2xvbmUoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJlbnROb2RlRnJvbU5vZGVBbmRSZXBsYWNlZENoaWxkTm9kZShub2RlLCByZXBsYWNlZENoaWxkTm9kZSkge1xuICBsZXQgcGFyZW50Tm9kZSA9IG51bGxcblxuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YocmVwbGFjZWRDaGlsZE5vZGUpO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcGFyZW50Tm9kZSA9IG5vZGU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGVGcm9tTm9kZUFuZFJlcGxhY2VkQ2hpbGROb2RlKG5vZGUsIHJlcGxhY2VkQ2hpbGROb2RlKTtcblxuICAgICAgICBpZiAocGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyZW50Tm9kZTtcbn1cblxuZnVuY3Rpb24gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZUFuZE1heGltdW1MZXZlbChub2RlLCBtYXhpbXVtTGV2ZWwpIHtcbiAgY29uc3QgIGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICBmaWx0ZXIoaGVhZGluZ01hcmtkb3duTm9kZXMsIChoZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgbGV2ZWwgPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmdldExldmVsKCk7XG5cbiAgICBpZiAobGV2ZWwgPD0gbWF4aW11bUxldmVsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkaW5nTWFya2Rvd25Ob2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImNyZWF0ZUNvbnRlbnRzIiwibm9kZSIsImNvbnRlbnRzTWFya2Rvd25Ob2RlIiwiY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSIsIm1heGltdW1MZXZlbCIsImhlYWRpbmdNYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZUFuZE1heGltdW1MZXZlbCIsImhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJub2RlcyIsIm5lc3RlZE5vZGUiLCJuZXN0Tm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VkQ2hpbGROb2RlIiwicGFyZW50Tm9kZSIsInBhcmVudE5vZGVGcm9tTm9kZUFuZFJlcGxhY2VkQ2hpbGROb2RlIiwicmVwbGFjZUNoaWxkTm9kZSIsInJlcGxhY2VUb2tlbnMiLCJjcmVhdGVGb290bm90ZXMiLCJjbG9uZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwic29tZSIsImNoaWxkTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwibGV2ZWwiLCJnZXRMZXZlbCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7Ozt5QkFkVTsrREFFTjttRUFDWTtvRUFDQzt3QkFJWjtzQkFDSTtxQkFDNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKM0UsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFRTyxJQUFBLEFBQU1ELHFDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLHFCQUNQRyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCO2dDQURqRVI7O2tDQUVYRyxVQUFVQyxZQUFZQyxZQUFZQyxTQUFTQztRQUVqRCxNQUFLQyxpQkFBaUIsR0FBR0E7OztrQkFKUlI7O1lBT25CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGlCQUFpQjtZQUMvQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJGLGlCQUFpQjtn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
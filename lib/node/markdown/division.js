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
                var nestedHeadingMarkdownNodes = childNestedNodes, contentsListMarkdownNode = _contentsList.default.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), replacementChildNode = contentsListMarkdownNode, replacedChildNode = contentsMarkdownNode; ///
                this.replaceChildNode(replacedChildNode, replacementChildNode);
                // replaceTokens(replacedChildNode, replacementTokens, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpc3RcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5pbXBvcnQgeyBuZXN0Tm9kZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RyZWVcIjtcbmltcG9ydCB7IHJlcGxhY2VUb2tlbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuaW1wb3J0IHsgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSwgY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbi8vIGltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuLy8gaW1wb3J0IHsgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcywgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2Rlc0hUTUwsIGFwcGVuZEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGVIVE1MIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mb290bm90ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBjcmVhdGVDb250ZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjb250ZW50c01hcmtkb3duTm9kZSA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoY29udGVudHNNYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXhpbXVtTGV2ZWwgPSBjb250ZW50c01hcmtkb3duTm9kZS5tYXhpbXVtTGV2ZWwoY29udGV4dCk7XG5cbiAgICBjb25zdCBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGVBbmRNYXhpbXVtTGV2ZWwobm9kZSwgbWF4aW11bUxldmVsLCBjb250ZXh0KSxcbiAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXMsIC8vL1xuICAgICAgICAgIG5lc3RlZE5vZGUgPSBuZXN0Tm9kZXMobm9kZXMpLFxuICAgICAgICAgIGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWROb2RlLmdldENoaWxkTmVzdGVkTm9kZXMoKSxcbiAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IFtdO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICByZXBsYWNlbWVudFRva2Vuc1xuICAgIH0pO1xuXG4gICAgY29uc3QgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMgPSBjaGlsZE5lc3RlZE5vZGVzLCAgLy8vXG4gICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsXG4gICAgICAgICAgcmVwbGFjZWRDaGlsZE5vZGUgPSBjb250ZW50c01hcmtkb3duTm9kZTsgLy8vXG5cbiAgICB0aGlzLnJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2RlKTtcblxuICAgIC8vIHJlcGxhY2VUb2tlbnMocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBjb250ZXh0KTtcblxuICAgIGRlbGV0ZSBjb250ZXh0LnJlcGxhY2VtZW50VG9rZW5zO1xuICB9XG5cbiAgY3JlYXRlRm9vdG5vdGVzKGNvbnRleHQpIHtcblxuICB9XG5cbiAgcmVjcmVhdGVGb290bm90ZXMoY29udGV4dCkge1xuXG4gIH1cblxuICAvLyBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAvLyAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAvLyAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgbGV0IGNoaWxkTm9kZXNIVE1MID0gc3VwZXIuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGlmIChjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgLy8gICAgIGNoaWxkTm9kZXNIVE1MID0gcmVwbGFjZUNvbnRlbnRzTWFya2Rvd25Ob2RlSFRNTChjaGlsZE5vZGVzSFRNTCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIGlmIChmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gIC8vICAgICBjaGlsZE5vZGVzSFRNTCA9IHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXNIVE1MKGNoaWxkTm9kZXNIVE1MLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBjaGlsZE5vZGVzSFRNTCA9IGFwcGVuZEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGVIVE1MKGNoaWxkTm9kZXNIVE1MLCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBpbmRlbnQsIGNvbnRleHQpO1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIC8vIH1cblxuICAvLyBjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gIC8vICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBzdXBlci5jcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBpZiAoZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAvLyAgICAgY29uc3QgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZURPTUVsZW1lbnQgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCksXG4gIC8vICAgICAgICAgICBjaGlsZE5vZGVET01FbGVtZW50ID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZURPTUVsZW1lbnQ7ICAvLy9cbiAgLy9cbiAgLy8gICAgIHRoaXMuaW5zZXJ0RE9NRWxlbWVudChjaGlsZE5vZGVET01FbGVtZW50KTtcbiAgLy9cbiAgLy8gICAgIHJlbnVtYmVyTGlua01hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGNsb25lKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZUFuZE1heGltdW1MZXZlbChub2RlLCBtYXhpbXVtTGV2ZWwpIHtcbiAgY29uc3QgIGhlYWRpbmdNYXJrZG93bk5vZGVzID0gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICBmaWx0ZXIoaGVhZGluZ01hcmtkb3duTm9kZXMsIChoZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgbGV2ZWwgPSBoZWFkaW5nTWFya2Rvd25Ob2RlLmdldExldmVsKCk7XG5cbiAgICBpZiAobGV2ZWwgPD0gbWF4aW11bUxldmVsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkaW5nTWFya2Rvd25Ob2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImNyZWF0ZUNvbnRlbnRzIiwibm9kZSIsImNvbnRlbnRzTWFya2Rvd25Ob2RlIiwiY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSIsIm1heGltdW1MZXZlbCIsImhlYWRpbmdNYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZUFuZE1heGltdW1MZXZlbCIsImhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibm9kZXMiLCJuZXN0ZWROb2RlIiwibmVzdE5vZGVzIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJyZXBsYWNlbWVudFRva2VucyIsIk9iamVjdCIsImFzc2lnbiIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJjcmVhdGVGb290bm90ZXMiLCJyZWNyZWF0ZUZvb3Rub3RlcyIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwibGV2ZWwiLCJnZXRMZXZlbCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFnQnFCQTs7O3lCQWRVOytEQUVOO21FQUNZO29CQUlYO3NCQUNJO3FCQUM2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
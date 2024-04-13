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
var _tree = require("../../utilities/tree");
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
                var divisionMarkdownNode = this, headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNode(divisionMarkdownNode, context), headingMarkdownNodesLength = headingMarkdownNodes.length;
                if (headingMarkdownNodesLength === 0) {
                    return;
                }
                var nodes = headingMarkdownNodes, levels = headingMarkdownNodes.map(function(headingMarkdownNode) {
                    var level = headingMarkdownNode.level(context);
                    return level;
                }), nestedNodes = (0, _tree.nestNodes)(nodes, levels);
                debugger;
            }
        },
        {
            key: "createFootnotes",
            value: function createFootnotes(context) {}
        },
        {
            key: "recreateFootnotes",
            value: function recreateFootnotes(context) {}
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: // childNodesAsHTML(indent, context) {
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
            function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                var divisionClassName = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
}(_markdown.default);
function headingMarkdownNodesFromDivisionMarkdownNode(divisionMarkdownNode, context) {
    var headingMarkdownNodes = [];
    var node = divisionMarkdownNode, contentsMarkdownNode = (0, _query.contentsMarkdownNodeFromNode)(node);
    if (contentsMarkdownNode !== null) {
        var maximumLevel = contentsMarkdownNode.maximumLevel(context);
        (0, _query.headingMarkdownNodesFromNode)(node, headingMarkdownNodes);
        filter(headingMarkdownNodes, function(headingMarkdownNode) {
            var level = headingMarkdownNode.level(context);
            if (level <= maximumLevel) {
                return true;
            }
        });
    }
    return headingMarkdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmltcG9ydCB7IG5lc3ROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdHJlZVwiO1xuaW1wb3J0IHsgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSwgY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbi8vIGltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuLy8gaW1wb3J0IHsgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2RlcywgcmVudW1iZXJMaW5rTWFya2Rvd25Ob2Rlc0hUTUwsIGFwcGVuZEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGVIVE1MIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mb290bm90ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgb3BhY2l0eSwgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBjcmVhdGVDb250ZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPSBoZWFkaW5nTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLCAvLy9cbiAgICAgICAgICBsZXZlbHMgPSBoZWFkaW5nTWFya2Rvd25Ob2Rlcy5tYXAoKGhlYWRpbmdNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gaGVhZGluZ01hcmtkb3duTm9kZS5sZXZlbChjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxldmVsO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5lc3RlZE5vZGVzID0gbmVzdE5vZGVzKG5vZGVzLCBsZXZlbHMpO1xuXG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlcyhjb250ZXh0KSB7XG5cbiAgfVxuXG4gIHJlY3JlYXRlRm9vdG5vdGVzKGNvbnRleHQpIHtcblxuICB9XG5cbiAgLy8gY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgLy8gICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgLy8gICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGxldCBjaGlsZE5vZGVzSFRNTCA9IHN1cGVyLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBpZiAoY29udGVudHNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gIC8vICAgICBjaGlsZE5vZGVzSFRNTCA9IHJlcGxhY2VDb250ZW50c01hcmtkb3duTm9kZUhUTUwoY2hpbGROb2Rlc0hUTUwsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICBpZiAoZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAvLyAgICAgY2hpbGROb2Rlc0hUTUwgPSByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzSFRNTChjaGlsZE5vZGVzSFRNTCwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgY2hpbGROb2Rlc0hUTUwgPSBhcHBlbmRGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlSFRNTChjaGlsZE5vZGVzSFRNTCwgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgaW5kZW50LCBjb250ZXh0KTtcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICAvLyB9XG5cbiAgLy8gY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAvLyAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgc3VwZXIuY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCk7XG4gIC8vXG4gIC8vICAgaWYgKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGVET01FbGVtZW50ID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZS5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpLFxuICAvLyAgICAgICAgICAgY2hpbGROb2RlRE9NRWxlbWVudCA9IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGVET01FbGVtZW50OyAgLy8vXG4gIC8vXG4gIC8vICAgICB0aGlzLmluc2VydERPTUVsZW1lbnQoY2hpbGROb2RlRE9NRWxlbWVudCk7XG4gIC8vXG4gIC8vICAgICByZW51bWJlckxpbmtNYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGhlYWRpbmdNYXJrZG93bk5vZGVzID0gW107XG5cbiAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgIGNvbnRlbnRzTWFya2Rvd25Ob2RlID0gY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICBpZiAoY29udGVudHNNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtYXhpbXVtTGV2ZWwgPSBjb250ZW50c01hcmtkb3duTm9kZS5tYXhpbXVtTGV2ZWwoY29udGV4dCk7XG5cbiAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUsIGhlYWRpbmdNYXJrZG93bk5vZGVzKTtcblxuICAgIGZpbHRlcihoZWFkaW5nTWFya2Rvd25Ob2RlcywgKGhlYWRpbmdNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxldmVsID0gaGVhZGluZ01hcmtkb3duTm9kZS5sZXZlbChjb250ZXh0KTtcblxuICAgICAgaWYgKGxldmVsIDw9IG1heGltdW1MZXZlbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBoZWFkaW5nTWFya2Rvd25Ob2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsIm9wYWNpdHkiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImNyZWF0ZUNvbnRlbnRzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlcyIsImxldmVscyIsIm1hcCIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJsZXZlbCIsIm5lc3RlZE5vZGVzIiwibmVzdE5vZGVzIiwiY3JlYXRlRm9vdG5vdGVzIiwicmVjcmVhdGVGb290bm90ZXMiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIk1hcmtkb3duTm9kZSIsIm5vZGUiLCJjb250ZW50c01hcmtkb3duTm9kZSIsImNvbnRlbnRzTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJtYXhpbXVtTGV2ZWwiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
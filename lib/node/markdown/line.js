"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LineMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _childNodes = require("../../utilities/childNodes");
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
var LineMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(LineMarkdownNode, MarkdownNode);
    var _super = _create_super(LineMarkdownNode);
    function LineMarkdownNode() {
        _class_call_check(this, LineMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(LineMarkdownNode, [
        {
            key: "lines",
            value: function lines(context) {
                var charactersPerLine = context.charactersPerLine, plainText = this.asPlainText(context), plainTextLength = plainText.length, characters = plainTextLength, lines = characters / charactersPerLine + 1;
                return lines;
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                indent = this.adjustIndent(indent);
                var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context), html = "".concat(indent).concat(startingTag).concat(childNodesHTML).concat(closingTag, "\n");
                return html;
            }
        },
        {
            key: "asPlainText",
            value: function asPlainText(context) {
                var childNodesPlainText = this.childNodesAsPlainText(context), plainText = childNodesPlainText; ///
                return plainText;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var tagName = this.tagName(context), className = this.className(context), domElement = document.createElement(tagName);
                Object.assign(domElement, {
                    className: className
                });
                this.setDOMElement(domElement);
                this.createChildNodeDOMElements(context);
                return domElement;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodes = this.getChildNodes(), html = (0, _childNodes.htmlFromChildNodes)(childNodes, context);
                return html;
            }
        },
        {
            key: "childNodesAsPlainText",
            value: function childNodesAsPlainText(context) {
                var childNodes = this.getChildNodes(), plainText = (0, _childNodes.plainTextFromChildNodes)(childNodes, context);
                return plainText;
            }
        },
        {
            key: "createChildNodeDOMElements",
            value: function createChildNodeDOMElements(context) {
                var domElement = this.getDOMElement(), childNodes = this.getChildNodes(), domElements = (0, _childNodes.domElementsFromChildNodes)(childNodes, context), parentDOMElement = domElement, childNodeDOMElements = domElements; ///
                childNodeDOMElements.forEach(function(childNodeDOMElement) {
                    var domElement = childNodeDOMElement; ///
                    parentDOMElement.appendChild(domElement);
                });
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(LineMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return LineMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgaHRtbEZyb21DaGlsZE5vZGVzLCBwbGFpblRleHRGcm9tQ2hpbGROb2RlcywgZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY2hpbGROb2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgbGluZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgY2hhcmFjdGVyc1BlckxpbmUgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHRMZW5ndGggPSBwbGFpblRleHQubGVuZ3RoLFxuICAgICAgICAgIGNoYXJhY3RlcnMgPSBwbGFpblRleHRMZW5ndGgsIC8vL1xuICAgICAgICAgIGxpbmVzID0gKGNoYXJhY3RlcnMgLyBjaGFyYWN0ZXJzUGVyTGluZSkgKyAxO1xuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31cbmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzUGxhaW5UZXh0ID0gdGhpcy5jaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgcGxhaW5UZXh0ID0gY2hpbGROb2Rlc1BsYWluVGV4dDsgLy8vXG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRoaXMudGFnTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBjbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZShjb250ZXh0KSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBodG1sID0gaHRtbEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBwbGFpblRleHQgPSBwbGFpblRleHRGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjcmVhdGVDaGlsZE5vZGVET01FbGVtZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBkb21FbGVtZW50cyA9IGRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCksXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVET01FbGVtZW50cyA9IGRvbUVsZW1lbnRzOyAvLy9cblxuICAgIGNoaWxkTm9kZURPTUVsZW1lbnRzLmZvckVhY2goKGNoaWxkTm9kZURPTUVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBjaGlsZE5vZGVET01FbGVtZW50OyAvLy9cblxuICAgICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KExpbmVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkxpbmVNYXJrZG93bk5vZGUiLCJsaW5lcyIsImNvbnRleHQiLCJjaGFyYWN0ZXJzUGVyTGluZSIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0TGVuZ3RoIiwibGVuZ3RoIiwiY2hhcmFjdGVycyIsImFzSFRNTCIsImluZGVudCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImh0bWwiLCJjaGlsZE5vZGVzUGxhaW5UZXh0IiwiY2hpbGROb2Rlc0FzUGxhaW5UZXh0IiwiY3JlYXRlRE9NRWxlbWVudCIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0RE9NRWxlbWVudCIsImNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJodG1sRnJvbUNoaWxkTm9kZXMiLCJwbGFpblRleHRGcm9tQ2hpbGROb2RlcyIsImdldERPTUVsZW1lbnQiLCJkb21FbGVtZW50cyIsImRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMiLCJwYXJlbnRET01FbGVtZW50IiwiY2hpbGROb2RlRE9NRWxlbWVudHMiLCJmb3JFYWNoIiwiY2hpbGROb2RlRE9NRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytEQUpJOzBCQUU4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RSxJQUFBLEFBQU1BLGlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUNYLElBQU0sQUFBRUMsb0JBQXNCRCxRQUF0QkMsbUJBQ0ZDLFlBQVksSUFBSSxDQUFDQyxXQUFXLENBQUNILFVBQzdCSSxrQkFBa0JGLFVBQVVHLE1BQU0sRUFDbENDLGFBQWFGLGlCQUNiTCxRQUFRLEFBQUNPLGFBQWFMLG9CQUFxQjtnQkFFakQsT0FBT0Y7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVSLE9BQU87Z0JBQ3BCUSxTQUFTLElBQUksQ0FBQ0MsWUFBWSxDQUFDRDtnQkFFM0IsSUFBTUUsaUJBQWlCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNILFFBQVFSLFVBQy9DWSxjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDWixVQUMvQmEsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ2IsVUFDN0JjLE9BQU8sQUFBQyxHQUFXRixPQUFUSixRQUF1QkUsT0FBZEUsYUFBK0JDLE9BQWpCSCxnQkFBNEIsT0FBWEcsWUFBVztnQkFHbkUsT0FBT0M7WUFDVDs7O1lBRUFYLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZSCxPQUFPO2dCQUNqQixJQUFNZSxzQkFBc0IsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ2hCLFVBQ2pERSxZQUFZYSxxQkFBcUIsR0FBRztnQkFFMUMsT0FBT2I7WUFDVDs7O1lBRUFlLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJqQixPQUFPO2dCQUN0QixJQUFNa0IsVUFBVSxJQUFJLENBQUNBLE9BQU8sQ0FBQ2xCLFVBQ3ZCbUIsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ25CLFVBQzNCb0IsYUFBYUMsU0FBU0MsYUFBYSxDQUFDSjtnQkFFMUNLLE9BQU9DLE1BQU0sQ0FBQ0osWUFBWTtvQkFDeEJELFdBQUFBO2dCQUNGO2dCQUVBLElBQUksQ0FBQ00sYUFBYSxDQUFDTDtnQkFFbkIsSUFBSSxDQUFDTSwwQkFBMEIsQ0FBQzFCO2dCQUVoQyxPQUFPb0I7WUFDVDs7O1lBRUFULEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJILE1BQU0sRUFBRVIsT0FBTztnQkFDOUIsSUFBTTJCLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CZCxPQUFPZSxJQUFBQSw4QkFBa0IsRUFBQ0YsWUFBWTNCO2dCQUU1QyxPQUFPYztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQmhCLE9BQU87Z0JBQzNCLElBQU0yQixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQjFCLFlBQVk0QixJQUFBQSxtQ0FBdUIsRUFBQ0gsWUFBWTNCO2dCQUV0RCxPQUFPRTtZQUNUOzs7WUFFQXdCLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkIxQixPQUFPO2dCQUNoQyxJQUFNb0IsYUFBYSxJQUFJLENBQUNXLGFBQWEsSUFDL0JKLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CSSxjQUFjQyxJQUFBQSxxQ0FBeUIsRUFBQ04sWUFBWTNCLFVBQ3BEa0MsbUJBQW1CZCxZQUNuQmUsdUJBQXVCSCxhQUFhLEdBQUc7Z0JBRTdDRyxxQkFBcUJDLE9BQU8sQ0FBQyxTQUFDQztvQkFDNUIsSUFBTWpCLGFBQWFpQixxQkFBcUIsR0FBRztvQkFFM0NILGlCQUFpQkksV0FBVyxDQUFDbEI7Z0JBQy9CO1lBQ0Y7Ozs7WUFFT21CLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFYixVQUFVLEVBQUVjLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0gsZ0NBQWdDLENBMUUxR3pDLGtCQTBFNkgwQyxVQUFVYixZQUFZYztZQUFVOzs7V0ExRTdKM0M7RUFBeUI0QyxpQkFBWSJ9
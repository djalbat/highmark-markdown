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
                var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context), html = indent !== null ? "".concat(indent).concat(startingTag).concat(childNodesHTML).concat(closingTag, "\n") : "".concat(startingTag).concat(childNodesHTML).concat(closingTag);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgaHRtbEZyb21DaGlsZE5vZGVzLCBwbGFpblRleHRGcm9tQ2hpbGROb2RlcywgZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY2hpbGROb2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgbGluZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgY2hhcmFjdGVyc1BlckxpbmUgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHRMZW5ndGggPSBwbGFpblRleHQubGVuZ3RoLFxuICAgICAgICAgIGNoYXJhY3RlcnMgPSBwbGFpblRleHRMZW5ndGgsIC8vL1xuICAgICAgICAgIGxpbmVzID0gKGNoYXJhY3RlcnMgLyBjaGFyYWN0ZXJzUGVyTGluZSkgKyAxO1xuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGh0bWwgPSAoaW5kZW50ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31cbmA6ICAgICAgICAgICAgICAgICAgYCR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNQbGFpblRleHQgPSB0aGlzLmNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHQgPSBjaGlsZE5vZGVzUGxhaW5UZXh0OyAvLy9cblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gdGhpcy50YWdOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lKGNvbnRleHQpLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMoY29udGV4dCk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGh0bWwgPSBodG1sRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNyZWF0ZUNoaWxkTm9kZURPTUVsZW1lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGRvbUVsZW1lbnRzID0gZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZURPTUVsZW1lbnRzID0gZG9tRWxlbWVudHM7IC8vL1xuXG4gICAgY2hpbGROb2RlRE9NRWxlbWVudHMuZm9yRWFjaCgoY2hpbGROb2RlRE9NRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGNoaWxkTm9kZURPTUVsZW1lbnQ7IC8vL1xuXG4gICAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7IHJldHVybiBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoTGluZU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiTGluZU1hcmtkb3duTm9kZSIsImxpbmVzIiwiY29udGV4dCIsImNoYXJhY3RlcnNQZXJMaW5lIiwicGxhaW5UZXh0IiwiYXNQbGFpblRleHQiLCJwbGFpblRleHRMZW5ndGgiLCJsZW5ndGgiLCJjaGFyYWN0ZXJzIiwiYXNIVE1MIiwiaW5kZW50IiwiYWRqdXN0SW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiaHRtbCIsImNoaWxkTm9kZXNQbGFpblRleHQiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJjcmVhdGVET01FbGVtZW50IiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRET01FbGVtZW50IiwiY3JlYXRlQ2hpbGROb2RlRE9NRWxlbWVudHMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImh0bWxGcm9tQ2hpbGROb2RlcyIsInBsYWluVGV4dEZyb21DaGlsZE5vZGVzIiwiZ2V0RE9NRWxlbWVudCIsImRvbUVsZW1lbnRzIiwiZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyIsInBhcmVudERPTUVsZW1lbnQiLCJjaGlsZE5vZGVET01FbGVtZW50cyIsImZvckVhY2giLCJjaGlsZE5vZGVET01FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkk7MEJBRThEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhFLElBQUEsQUFBTUEsaUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JB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
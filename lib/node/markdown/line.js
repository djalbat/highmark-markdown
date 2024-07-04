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
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                this.domElement = this.createDOMElement(context);
                if (siblingDOMElement !== null) {
                    siblingDOMElement = siblingDOMElement.nextSibling; ///
                }
                parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
                siblingDOMElement = this.domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "createDOMElement",
            value: function createDOMElement(context) {
                var domElement = _get(_get_prototype_of(LineMarkdownNode.prototype), "createDOMElement", this).call(this, context), childNodes = this.getChildNodes(), domElements = (0, _childNodes.domElementsFromChildNodes)(childNodes, context), parentDOMElement = domElement, childNodeDOMElements = domElements; ///
                childNodeDOMElements.forEach(function(childNodeDOMElement) {
                    var domElement = childNodeDOMElement; ///
                    parentDOMElement.appendChild(domElement);
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgaHRtbEZyb21DaGlsZE5vZGVzLCBwbGFpblRleHRGcm9tQ2hpbGROb2RlcywgZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY2hpbGROb2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgbGluZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgY2hhcmFjdGVyc1BlckxpbmUgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHRMZW5ndGggPSBwbGFpblRleHQubGVuZ3RoLFxuICAgICAgICAgIGNoYXJhY3RlcnMgPSBwbGFpblRleHRMZW5ndGgsIC8vL1xuICAgICAgICAgIGxpbmVzID0gKGNoYXJhY3RlcnMgLyBjaGFyYWN0ZXJzUGVyTGluZSkgKyAxO1xuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGh0bWwgPSAoaW5kZW50ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31cbmA6ICAgICAgICAgICAgICAgICAgYCR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBpZiAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmc7ICAvLy9cbiAgICB9XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gc3VwZXIuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZG9tRWxlbWVudHMgPSBkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlRE9NRWxlbWVudHMgPSBkb21FbGVtZW50czsgLy8vXG5cbiAgICBjaGlsZE5vZGVET01FbGVtZW50cy5mb3JFYWNoKChjaGlsZE5vZGVET01FbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gY2hpbGROb2RlRE9NRWxlbWVudDsgLy8vXG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGh0bWwgPSBodG1sRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KExpbmVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkxpbmVNYXJrZG93bk5vZGUiLCJsaW5lcyIsImNvbnRleHQiLCJjaGFyYWN0ZXJzUGVyTGluZSIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0TGVuZ3RoIiwibGVuZ3RoIiwiY2hhcmFjdGVycyIsImFzSFRNTCIsImluZGVudCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImh0bWwiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwibmV4dFNpYmxpbmciLCJpbnNlcnRCZWZvcmUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImRvbUVsZW1lbnRzIiwiZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyIsImNoaWxkTm9kZURPTUVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkTm9kZURPTUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImh0bWxGcm9tQ2hpbGROb2RlcyIsImNoaWxkTm9kZXNBc1BsYWluVGV4dCIsInBsYWluVGV4dEZyb21DaGlsZE5vZGVzIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytEQUpJOzBCQUU4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhFLElBQUEsQUFBTUEsaUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBTSxBQUFFQyxvQkFBc0JELFFBQXRCQyxtQkFDRkMsWUFBWSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0gsVUFDN0JJLGtCQUFrQkYsVUFBVUcsTUFBTSxFQUNsQ0MsYUFBYUYsaUJBQ2JMLFFBQVEsQUFBQ08sYUFBYUwsb0JBQXFCO2dCQUVqRCxPQUFPRjtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRVIsT0FBTztnQkFDcEJRLFNBQVMsSUFBSSxDQUFDQyxZQUFZLENBQUNEO2dCQUUzQixJQUFNRSxpQkFBaUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsUUFBUVIsVUFDL0NZLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNaLFVBQy9CYSxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDYixVQUM3QmMsT0FBTyxBQUFDTixXQUFXLE9BQ1gsQUFBQyxHQUFXSSxPQUFUSixRQUF1QkUsT0FBZEUsYUFBK0JDLE9BQWpCSCxnQkFBNEIsT0FBWEcsWUFBVyxRQUNwRCxBQUFDLEdBQWdCSCxPQUFkRSxhQUErQkMsT0FBakJILGdCQUE0QixPQUFYRztnQkFFbEQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUVqQixPQUFPO2dCQUNoRCxJQUFJLENBQUNrQixVQUFVLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ25CO2dCQUV4QyxJQUFJaUIsc0JBQXNCLE1BQU07b0JBQzlCQSxvQkFBb0JBLGtCQUFrQkcsV0FBVyxFQUFHLEdBQUc7Z0JBQ3pEO2dCQUVBSixpQkFBaUJLLFlBQVksQ0FBQyxJQUFJLENBQUNILFVBQVUsRUFBRUQ7Z0JBRS9DQSxvQkFBb0IsSUFBSSxDQUFDQyxVQUFVLEVBQUcsR0FBRztnQkFFekMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJuQixPQUFPO2dCQUN0QixJQUFNa0IsYUFBYSx1QkF2Q0ZwQiw2QkF1Q1FxQixvQkFBTixJQUFLLGFBQWtCbkIsVUFDcENzQixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsY0FBY0MsSUFBQUEscUNBQXlCLEVBQUNILFlBQVl0QixVQUNwRGdCLG1CQUFtQkUsWUFDbkJRLHVCQUF1QkYsYUFBYSxHQUFHO2dCQUU3Q0UscUJBQXFCQyxPQUFPLENBQUMsU0FBQ0M7b0JBQzVCLElBQU1WLGFBQWFVLHFCQUFxQixHQUFHO29CQUUzQ1osaUJBQWlCYSxXQUFXLENBQUNYO2dCQUMvQjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVAsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkgsTUFBTSxFQUFFUixPQUFPO2dCQUM5QixJQUFNc0IsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JULE9BQU9nQixJQUFBQSw4QkFBa0IsRUFBQ1IsWUFBWXRCO2dCQUU1QyxPQUFPYztZQUNUOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0IvQixPQUFPO2dCQUMzQixJQUFNc0IsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JyQixZQUFZOEIsSUFBQUEsbUNBQXVCLEVBQUNWLFlBQVl0QjtnQkFFdEQsT0FBT0U7WUFDVDs7OztZQUVPK0IsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVaLFVBQVUsRUFBRWEsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxnQ0FBZ0MsQ0FwRTFHbkMsa0JBb0U2SG9DLFVBQVVaLFlBQVlhO1lBQVU7OztXQXBFN0pyQztFQUF5QnNDLGlCQUFZIn0=
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
                parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                if (this.domElement !== null) {
                    parentDOMElement.removeChild(this.domElement);
                    this.domElement = null;
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgaHRtbEZyb21DaGlsZE5vZGVzLCBwbGFpblRleHRGcm9tQ2hpbGROb2RlcywgZG9tRWxlbWVudHNGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY2hpbGROb2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgbGluZXMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgY2hhcmFjdGVyc1BlckxpbmUgfSA9IGNvbnRleHQsXG4gICAgICAgICAgcGxhaW5UZXh0ID0gdGhpcy5hc1BsYWluVGV4dChjb250ZXh0KSxcbiAgICAgICAgICBwbGFpblRleHRMZW5ndGggPSBwbGFpblRleHQubGVuZ3RoLFxuICAgICAgICAgIGNoYXJhY3RlcnMgPSBwbGFpblRleHRMZW5ndGgsIC8vL1xuICAgICAgICAgIGxpbmVzID0gKGNoYXJhY3RlcnMgLyBjaGFyYWN0ZXJzUGVyTGluZSkgKyAxO1xuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGh0bWwgPSAoaW5kZW50ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31cbmA6ICAgICAgICAgICAgICAgICAgYCR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVET01FbGVtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gc3VwZXIuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZG9tRWxlbWVudHMgPSBkb21FbGVtZW50c0Zyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlRE9NRWxlbWVudHMgPSBkb21FbGVtZW50czsgLy8vXG5cbiAgICBjaGlsZE5vZGVET01FbGVtZW50cy5mb3JFYWNoKChjaGlsZE5vZGVET01FbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gY2hpbGROb2RlRE9NRWxlbWVudDsgLy8vXG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGh0bWwgPSBodG1sRnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHBsYWluVGV4dCA9IHBsYWluVGV4dEZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KExpbmVNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIkxpbmVNYXJrZG93bk5vZGUiLCJsaW5lcyIsImNvbnRleHQiLCJjaGFyYWN0ZXJzUGVyTGluZSIsInBsYWluVGV4dCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0TGVuZ3RoIiwibGVuZ3RoIiwiY2hhcmFjdGVycyIsImFzSFRNTCIsImluZGVudCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImh0bWwiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwidW5tb3VudCIsInJlbW92ZUNoaWxkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJkb21FbGVtZW50cyIsImRvbUVsZW1lbnRzRnJvbUNoaWxkTm9kZXMiLCJjaGlsZE5vZGVET01FbGVtZW50cyIsImZvckVhY2giLCJjaGlsZE5vZGVET01FbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJodG1sRnJvbUNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQXNQbGFpblRleHQiLCJwbGFpblRleHRGcm9tQ2hpbGROb2RlcyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKSTswQkFFOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RSxJQUFBLEFBQU1BLGlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUNYLElBQU0sQUFBRUMsb0JBQXNCRCxRQUF0QkMsbUJBQ0ZDLFlBQVksSUFBSSxDQUFDQyxXQUFXLENBQUNILFVBQzdCSSxrQkFBa0JGLFVBQVVHLE1BQU0sRUFDbENDLGFBQWFGLGlCQUNiTCxRQUFRLEFBQUNPLGFBQWFMLG9CQUFxQjtnQkFFakQsT0FBT0Y7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUVSLE9BQU87Z0JBQ3BCUSxTQUFTLElBQUksQ0FBQ0MsWUFBWSxDQUFDRDtnQkFFM0IsSUFBTUUsaUJBQWlCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNILFFBQVFSLFVBQy9DWSxjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDWixVQUMvQmEsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ2IsVUFDN0JjLE9BQU8sQUFBQ04sV0FBVyxPQUNYLEFBQUMsR0FBV0ksT0FBVEosUUFBdUJFLE9BQWRFLGFBQStCQyxPQUFqQkgsZ0JBQTRCLE9BQVhHLFlBQVcsUUFDcEQsQUFBQyxHQUFnQkgsT0FBZEUsYUFBK0JDLE9BQWpCSCxnQkFBNEIsT0FBWEc7Z0JBRWxELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFakIsT0FBTztnQkFDaEQsSUFBSSxDQUFDa0IsVUFBVSxHQUFHLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNuQjtnQkFFeENnQixpQkFBaUJJLFlBQVksQ0FBQyxJQUFJLENBQUNGLFVBQVUsRUFBRUQ7WUFDakQ7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUwsZ0JBQWdCLEVBQUVoQixPQUFPO2dCQUMvQixJQUFJLElBQUksQ0FBQ2tCLFVBQVUsS0FBSyxNQUFNO29CQUM1QkYsaUJBQWlCTSxXQUFXLENBQUMsSUFBSSxDQUFDSixVQUFVO29CQUU1QyxJQUFJLENBQUNBLFVBQVUsR0FBRztnQkFDcEI7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJuQixPQUFPO2dCQUN0QixJQUFNa0IsYUFBYSx1QkF2Q0ZwQiw2QkF1Q1FxQixvQkFBTixJQUFLLGFBQWtCbkIsVUFDcEN1QixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsY0FBY0MsSUFBQUEscUNBQXlCLEVBQUNILFlBQVl2QixVQUNwRGdCLG1CQUFtQkUsWUFDbkJTLHVCQUF1QkYsYUFBYSxHQUFHO2dCQUU3Q0UscUJBQXFCQyxPQUFPLENBQUMsU0FBQ0M7b0JBQzVCLElBQU1YLGFBQWFXLHFCQUFxQixHQUFHO29CQUUzQ2IsaUJBQWlCYyxXQUFXLENBQUNaO2dCQUMvQjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVAsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkgsTUFBTSxFQUFFUixPQUFPO2dCQUM5QixJQUFNdUIsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JWLE9BQU9pQixJQUFBQSw4QkFBa0IsRUFBQ1IsWUFBWXZCO2dCQUU1QyxPQUFPYztZQUNUOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JoQyxPQUFPO2dCQUMzQixJQUFNdUIsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0J0QixZQUFZK0IsSUFBQUEsbUNBQXVCLEVBQUNWLFlBQVl2QjtnQkFFdEQsT0FBT0U7WUFDVDs7OztZQUVPZ0MsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVaLFVBQVUsRUFBRWEsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxnQ0FBZ0MsQ0FwRTFHcEMsa0JBb0U2SHFDLFVBQVVaLFlBQVlhO1lBQVU7OztXQXBFN0p0QztFQUF5QnVDLGlCQUFZIn0=
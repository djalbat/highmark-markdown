"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteLinkHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _constants = require("../../../constants");
var _prepends = require("../../../prepends");
var _attributeNames = require("../../../attributeNames");
var _dom = require("../../../utilities/dom");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var FootnoteLinkHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(FootnoteLinkHTMLNode, HTMLNode);
    function FootnoteLinkHTMLNode(outerNode, parentNode, childNodes, domElement, number) {
        _class_call_check(this, FootnoteLinkHTMLNode);
        var _this;
        _this = _call_super(this, FootnoteLinkHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement
        ]);
        _this.number = number;
        return _this;
    }
    _create_class(FootnoteLinkHTMLNode, [
        {
            key: "getNumber",
            value: function getNumber() {
                return this.number;
            }
        },
        {
            key: "setNumber",
            value: function setNumber(number) {
                this.unmountNumber();
                this.number = number;
                this.mountNumber();
            }
        },
        {
            key: "resetNumber",
            value: function resetNumber() {
                var number = null;
                this.setNumber(number);
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var markdownNode = this.getMarkdownNode(), identifier = markdownNode.identifier(context);
                return identifier;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.HREF_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var prepend = _prepends.FOOTNOTE_PREPEND, identifier = this.identifier(context), attributeValue = "#".concat(prepend, "-").concat(identifier); ///
                return attributeValue;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                var domElement = this.createDOMElement(context);
                this.setDOMElement(domElement);
                siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(domElement, parentDOMElement);
                this.mountNumber();
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement) {
                var domElement = this.getDOMElement();
                this.unmountNumber();
                (0, _dom.remove)(domElement, parentDOMElement);
                this.resetDOMElement();
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var html;
                if (this.number === null) {
                    html = _constants.EMPTY_STRING;
                } else {
                    indent = this.adjustIndent(indent);
                    var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                    html = "".concat(indent).concat(startingTag).concat(childNodesHTML).concat(closingTag, "\n");
                }
                return html;
            }
        },
        {
            key: "asPlainText",
            value: function asPlainText(context) {
                var plainText = _constants.EMPTY_STRING;
                return plainText;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content = this.number, childNodesHTML = content; ///
                return childNodesHTML;
            }
        },
        {
            key: "mountNumber",
            value: function mountNumber() {
                if (this.number === null) {
                    return;
                }
                var domElement;
                domElement = this.getDOMElement();
                if (domElement === null) {
                    return;
                }
                var parentDOMElement = domElement, content = this.number, textNode = document.createTextNode(content);
                domElement = textNode; ///
                (0, _dom.insertAfterwards)(domElement, parentDOMElement);
            }
        },
        {
            key: "unmountNumber",
            value: function unmountNumber() {
                if (this.number === null) {
                    return;
                }
                var domElement;
                domElement = this.getDOMElement();
                if (domElement === null) {
                    return;
                }
                var parentDOMElement = domElement, firstChild = domElement.firstChild;
                domElement = firstChild; ///
                (0, _dom.remove)(domElement, parentDOMElement);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var number = null, footnoteLinkHTMLNode = _html.default.fromNothing(FootnoteLinkHTMLNode, number);
                return footnoteLinkHTMLNode;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                var number = null, footnoteLinkHTMLNode = _html.default.fromOuterNode(FootnoteLinkHTMLNode, outerNode, number);
                return footnoteLinkHTMLNode;
            }
        }
    ]);
    return FootnoteLinkHTMLNode;
}(_html.default);
_define_property(FootnoteLinkHTMLNode, "tagName", "a");
_define_property(FootnoteLinkHTMLNode, "className", "footnote");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRk9PVE5PVEVfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcywgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlTGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIG51bWJlcikge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBzZXROdW1iZXIobnVtYmVyKSB7XG4gICAgdGhpcy51bm1vdW50TnVtYmVyKCk7XG5cbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcblxuICAgIHRoaXMubW91bnROdW1iZXIoKTtcbiAgfVxuXG4gIHJlc2V0TnVtYmVyKCkge1xuICAgIGNvbnN0IG51bWJlciA9IG51bGw7XG5cbiAgICB0aGlzLnNldE51bWJlcihudW1iZXIpO1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlID0gdGhpcy5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gbWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IEZPT1ROT1RFX1BSRVBFTkQsXG4gICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGAjJHtwcmVwZW5kfS0ke2lkZW50aWZpZXJ9YDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgIGluc2VydEFmdGVyKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KSA6XG4gICAgICAgIGluc2VydEJlZm9yZWhhbmQoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLm1vdW50TnVtYmVyKCk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy51bm1vdW50TnVtYmVyKCk7XG5cbiAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLnJlc2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBodG1sO1xuXG4gICAgaWYgKHRoaXMubnVtYmVyID09PSBudWxsKSB7XG4gICAgICBodG1sID0gRU1QVFlfU1RSSU5HO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5udW1iZXIsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgbW91bnROdW1iZXIoKSB7XG4gICAgaWYgKHRoaXMubnVtYmVyID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBpZiAoZG9tRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5udW1iZXIsICAvLy9cbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBpbnNlcnRBZnRlcndhcmRzKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuICB9XG5cbiAgdW5tb3VudE51bWJlcigpIHtcbiAgICBpZiAodGhpcy5udW1iZXIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGlmIChkb21FbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBmaXJzdENoaWxkID0gZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgZG9tRWxlbWVudCA9IGZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiZm9vdG5vdGVcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKEZvb3Rub3RlTGlua0hUTUxOb2RlLCBudW1iZXIpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlTGlua0hUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7XG4gICAgY29uc3QgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRm9vdG5vdGVMaW5rSFRNTE5vZGUsIG91dGVyTm9kZSwgbnVtYmVyKTtcblxuICAgIHJldHVybiBmb290bm90ZUxpbmtIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlTGlua0hUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwibnVtYmVyIiwiZ2V0TnVtYmVyIiwic2V0TnVtYmVyIiwidW5tb3VudE51bWJlciIsIm1vdW50TnVtYmVyIiwicmVzZXROdW1iZXIiLCJpZGVudGlmaWVyIiwiY29udGV4dCIsIm1hcmtkb3duTm9kZSIsImdldE1hcmtkb3duTm9kZSIsImF0dHJpYnV0ZU5hbWUiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJwcmVwZW5kIiwiRk9PVE5PVEVfUFJFUEVORCIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJpbnNlcnRBZnRlciIsImluc2VydEJlZm9yZWhhbmQiLCJ1bm1vdW50IiwiZ2V0RE9NRWxlbWVudCIsInJlbW92ZSIsInJlc2V0RE9NRWxlbWVudCIsImFzSFRNTCIsImluZGVudCIsImh0bWwiLCJFTVBUWV9TVFJJTkciLCJhZGp1c3RJbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsImNvbnRlbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRBZnRlcndhcmRzIiwiZmlyc3RDaGlsZCIsImZyb21Ob3RoaW5nIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyREFQQTt5QkFFUTt3QkFDSTs4QkFDRzttQkFDb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUEscUJBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsTUFBTTtnQ0FEOUNMOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFXQztZQUFZQztZQUFZQzs7UUFFekMsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUpHTDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVRixNQUFNO2dCQUNkLElBQUksQ0FBQ0csYUFBYTtnQkFFbEIsSUFBSSxDQUFDSCxNQUFNLEdBQUdBO2dCQUVkLElBQUksQ0FBQ0ksV0FBVztZQUNsQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTCxTQUFTO2dCQUVmLElBQUksQ0FBQ0UsU0FBUyxDQUFDRjtZQUNqQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxPQUFPO2dCQUNo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
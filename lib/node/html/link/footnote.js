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
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                indent = null;
                return indent;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRk9PVE5PVEVfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcywgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlTGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIG51bWJlcikge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBzZXROdW1iZXIobnVtYmVyKSB7XG4gICAgdGhpcy51bm1vdW50TnVtYmVyKCk7XG5cbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcblxuICAgIHRoaXMubW91bnROdW1iZXIoKTtcbiAgfVxuXG4gIHJlc2V0TnVtYmVyKCkge1xuICAgIGNvbnN0IG51bWJlciA9IG51bGw7XG5cbiAgICB0aGlzLnNldE51bWJlcihudW1iZXIpO1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlID0gdGhpcy5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gbWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IEZPT1ROT1RFX1BSRVBFTkQsXG4gICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGAjJHtwcmVwZW5kfS0ke2lkZW50aWZpZXJ9YDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgIGluc2VydEFmdGVyKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KSA6XG4gICAgICAgIGluc2VydEJlZm9yZWhhbmQoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLm1vdW50TnVtYmVyKCk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy51bm1vdW50TnVtYmVyKCk7XG5cbiAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLnJlc2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLm51bWJlciwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBtb3VudE51bWJlcigpIHtcbiAgICBpZiAodGhpcy5udW1iZXIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGlmIChkb21FbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLm51bWJlciwgIC8vL1xuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIGluc2VydEFmdGVyd2FyZHMoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50TnVtYmVyKCkge1xuICAgIGlmICh0aGlzLm51bWJlciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgaWYgKGRvbUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGZpcnN0Q2hpbGQgPSBkb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICBkb21FbGVtZW50ID0gZmlyc3RDaGlsZDsgIC8vL1xuXG4gICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJmb290bm90ZVwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRm9vdG5vdGVMaW5rSFRNTE5vZGUsIG51bWJlcik7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVMaW5rSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICBjb25zdCBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShGb290bm90ZUxpbmtIVE1MTm9kZSwgb3V0ZXJOb2RlLCBudW1iZXIpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlTGlua0hUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJudW1iZXIiLCJnZXROdW1iZXIiLCJzZXROdW1iZXIiLCJ1bm1vdW50TnVtYmVyIiwibW91bnROdW1iZXIiLCJyZXNldE51bWJlciIsImlkZW50aWZpZXIiLCJjb250ZXh0IiwibWFya2Rvd25Ob2RlIiwiZ2V0TWFya2Rvd25Ob2RlIiwiYXR0cmlidXRlTmFtZSIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsInByZXBlbmQiLCJGT09UTk9URV9QUkVQRU5EIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlaGFuZCIsInVubW91bnQiLCJnZXRET01FbGVtZW50IiwicmVtb3ZlIiwicmVzZXRET01FbGVtZW50IiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJFTVBUWV9TVFJJTkciLCJjaGlsZE5vZGVzQXNIVE1MIiwiY29udGVudCIsImNoaWxkTm9kZXNIVE1MIiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiaW5zZXJ0QWZ0ZXJ3YXJkcyIsImZpcnN0Q2hpbGQiLCJmcm9tTm90aGluZyIsImZvb3Rub3RlTGlua0hUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MkRBUEE7eUJBRVE7d0JBQ0k7OEJBQ0c7bUJBQ29DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
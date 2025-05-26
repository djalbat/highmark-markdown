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
                this.number = number;
            }
        },
        {
            key: "content",
            value: function content(context) {
                var content = this.number !== null ? this.number : _constants.EMPTY_STRING;
                return content;
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                return this.outerNode.identifier(context);
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
                var domElement;
                domElement = this.createDOMElement(context);
                this.setDOMElement(domElement);
                siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(domElement, parentDOMElement);
                parentDOMElement = domElement; ///
                var content = this.content(context), textNode = document.createTextNode(content);
                domElement = textNode; ///
                (0, _dom.insertAfterwards)(domElement, parentDOMElement);
                domElement = this.getDOMElement();
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                var domElement;
                {
                    domElement = this.getDOMElement();
                    var _$parentDOMElement = domElement, firstChild = domElement.firstChild;
                    domElement = firstChild; ///
                    (0, _dom.remove)(domElement, _$parentDOMElement);
                }
                domElement = this.getDOMElement();
                (0, _dom.remove)(domElement, parentDOMElement);
                this.resetDOMElement();
            }
        },
        {
            key: "asHTML",
            value: function asHTML(indent, context) {
                var html;
                indent = this.adjustIndent(indent);
                var childNodesHTML = this.childNodesAsHTML(indent, context), startingTag = this.startingTag(context), closingTag = this.closingTag(context);
                html = "".concat(indent).concat(startingTag).concat(childNodesHTML).concat(closingTag, "\n");
                return html;
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var content = this.content(context), childNodesHTML = content; ///
                return childNodesHTML;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRk9PVE5PVEVfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcywgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlTGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIG51bWJlcikge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBzZXROdW1iZXIobnVtYmVyKSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIH1cblxuICBjb250ZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gKHRoaXMubnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlkZW50aWZpZXIoY29udGV4dCkgeyByZXR1cm4gdGhpcy5vdXRlck5vZGUuaWRlbnRpZmllcihjb250ZXh0KTsgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IEZPT1ROT1RFX1BSRVBFTkQsXG4gICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGAjJHtwcmVwZW5kfS0ke2lkZW50aWZpZXJ9YDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIChzaWJsaW5nRE9NRWxlbWVudCAhPT0gbnVsbCkgP1xuICAgICAgaW5zZXJ0QWZ0ZXIoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpIDpcbiAgICAgICAgaW5zZXJ0QmVmb3JlaGFuZChkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIHtcbiAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIGZpcnN0Q2hpbGQgPSBkb21FbGVtZW50LmZpcnN0Q2hpbGRcblxuICAgICAgZG9tRWxlbWVudCA9IGZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHRoaXMucmVzZXRET01FbGVtZW50KCk7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGh0bWw7XG5cbiAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31cbmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJmb290bm90ZVwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRm9vdG5vdGVMaW5rSFRNTE5vZGUsIG51bWJlcik7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVMaW5rSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICBjb25zdCBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShGb290bm90ZUxpbmtIVE1MTm9kZSwgb3V0ZXJOb2RlLCBudW1iZXIpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlTGlua0hUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJudW1iZXIiLCJnZXROdW1iZXIiLCJzZXROdW1iZXIiLCJjb250ZW50IiwiY29udGV4dCIsIkVNUFRZX1NUUklORyIsImlkZW50aWZpZXIiLCJhdHRyaWJ1dGVOYW1lIiwiSFJFRl9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwicHJlcGVuZCIsIkZPT1ROT1RFX1BSRVBFTkQiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJpbnNlcnRCZWZvcmVoYW5kIiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiaW5zZXJ0QWZ0ZXJ3YXJkcyIsImdldERPTUVsZW1lbnQiLCJ1bm1vdW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZSIsInJlc2V0RE9NRWxlbWVudCIsImFzSFRNTCIsImluZGVudCIsImh0bWwiLCJhZGp1c3RJbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJmcm9tTm90aGluZyIsImZvb3Rub3RlTGlua0hUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MkRBUEE7eUJBRVE7d0JBQ0k7OEJBQ0c7bUJBQ29DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBLHFCQUNQQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLE1BQU07Z0NBRDlDTDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBV0M7WUFBWUM7WUFBWUM7O1FBRXpDLE1BQUtDLE1BQU0sR0FBR0E7OztrQkFKR0w7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1B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
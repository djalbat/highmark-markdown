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
                this.removeNumber();
                this.addNumber();
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
                if (this.number !== null) {
                    this.addNumber(this.number);
                }
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement) {
                if (this.number !== null) {
                    this.removeNumber();
                }
                var domElement = this.getDOMElement();
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
            key: "addNumber",
            value: function addNumber() {
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
            key: "removeNumber",
            value: function removeNumber() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRk9PVE5PVEVfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlciwgaW5zZXJ0QWZ0ZXJ3YXJkcywgaW5zZXJ0QmVmb3JlaGFuZCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlTGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIG51bWJlcikge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBzZXROdW1iZXIobnVtYmVyKSB7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG5cbiAgICB0aGlzLnJlbW92ZU51bWJlcigpO1xuXG4gICAgdGhpcy5hZGROdW1iZXIoKTtcbiAgfVxuXG4gIHJlc2V0TnVtYmVyKCkge1xuICAgIGNvbnN0IG51bWJlciA9IG51bGw7XG5cbiAgICB0aGlzLnNldE51bWJlcihudW1iZXIpO1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3QgbWFya2Rvd25Ob2RlID0gdGhpcy5nZXRNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gbWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IEZPT1ROT1RFX1BSRVBFTkQsXG4gICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGAjJHtwcmVwZW5kfS0ke2lkZW50aWZpZXJ9YDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICAoc2libGluZ0RPTUVsZW1lbnQgIT09IG51bGwpID9cbiAgICAgIGluc2VydEFmdGVyKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KSA6XG4gICAgICAgIGluc2VydEJlZm9yZWhhbmQoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYWRkTnVtYmVyKHRoaXMubnVtYmVyKTtcbiAgICB9XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50KSB7XG4gICAgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlbW92ZU51bWJlcigpO1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHRoaXMucmVzZXRET01FbGVtZW50KCk7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGh0bWw7XG5cbiAgICBpZiAodGhpcy5udW1iZXIgPT09IG51bGwpIHtcbiAgICAgIGh0bWwgPSBFTVBUWV9TVFJJTkc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgICBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9XG5gO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLm51bWJlciwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBhZGROdW1iZXIoKSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBpZiAoZG9tRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5udW1iZXIsICAvLy9cbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBpbnNlcnRBZnRlcndhcmRzKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuICB9XG5cbiAgcmVtb3ZlTnVtYmVyKCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgaWYgKGRvbUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGZpcnN0Q2hpbGQgPSBkb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICBkb21FbGVtZW50ID0gZmlyc3RDaGlsZDsgIC8vL1xuXG4gICAgcmVtb3ZlKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJmb290bm90ZVwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRm9vdG5vdGVMaW5rSFRNTE5vZGUsIG51bWJlcik7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVMaW5rSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICBjb25zdCBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShGb290bm90ZUxpbmtIVE1MTm9kZSwgb3V0ZXJOb2RlLCBudW1iZXIpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlTGlua0hUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJudW1iZXIiLCJnZXROdW1iZXIiLCJzZXROdW1iZXIiLCJyZW1vdmVOdW1iZXIiLCJhZGROdW1iZXIiLCJyZXNldE51bWJlciIsImlkZW50aWZpZXIiLCJjb250ZXh0IiwibWFya2Rvd25Ob2RlIiwiZ2V0TWFya2Rvd25Ob2RlIiwiYXR0cmlidXRlTmFtZSIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsInByZXBlbmQiLCJGT09UTk9URV9QUkVQRU5EIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlaGFuZCIsInVubW91bnQiLCJnZXRET01FbGVtZW50IiwicmVtb3ZlIiwicmVzZXRET01FbGVtZW50IiwiYXNIVE1MIiwiaW5kZW50IiwiaHRtbCIsIkVNUFRZX1NUUklORyIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0IiwiY29udGVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydEFmdGVyd2FyZHMiLCJmaXJzdENoaWxkIiwiZnJvbU5vdGhpbmciLCJmb290bm90ZUxpbmtIVE1MTm9kZSIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJEQVBBO3lCQUVRO3dCQUNJOzhCQUNHO21CQUNvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQSxxQkFDUEMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxNQUFNO2dDQUQ5Q0w7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQVdDO1lBQVlDO1lBQVlDOztRQUV6QyxNQUFLQyxNQUFNLEdBQUdBOzs7a0JBSkdMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxNQUFNO1lBQ3BCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVGLE1BQU07Z0JBQ2QsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO2dCQUVkLElBQUksQ0FBQ0csWUFBWTtnQkFFakIsSUFBSSxDQUFDQyxTQUFTO1lBQ2hCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1MLFNBQVM7Z0JBRWYsSUFBSSxDQUFDRSxTQUFTLENBQUNGO1lBQ2pCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLE9BQU87Z0JBQ2hCLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElB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
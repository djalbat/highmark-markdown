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
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
                parentDOMElement = domElement; ///
                siblingDOMElement = null;
                var content = this.content(context), textNode = document.createTextNode(content);
                domElement = textNode; ///
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
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
                    _$parentDOMElement.removeChild(domElement);
                }
                domElement = this.getDOMElement();
                parentDOMElement.removeChild(domElement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRk9PVE5PVEVfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUxpbmtIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCBudW1iZXIpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG5cbiAgc2V0TnVtYmVyKG51bWJlcikge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9ICh0aGlzLm51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm51bWJlciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZGVudGlmaWVyKGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmlkZW50aWZpZXIoY29udGV4dCk7IH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IHByZXBlbmQgPSBGT09UTk9URV9QUkVQRU5ELFxuICAgICAgICAgIGlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBgIyR7cHJlcGVuZH0tJHtpZGVudGlmaWVyfWA7IC8vL1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAge1xuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IGRvbUVsZW1lbnQuZmlyc3RDaGlsZFxuXG4gICAgICBkb21FbGVtZW50ID0gZmlyc3RDaGlsZDsgIC8vL1xuXG4gICAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnJlc2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBodG1sO1xuXG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9XG5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiZm9vdG5vdGVcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKEZvb3Rub3RlTGlua0hUTUxOb2RlLCBudW1iZXIpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlTGlua0hUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7XG4gICAgY29uc3QgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBmb290bm90ZUxpbmtIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRm9vdG5vdGVMaW5rSFRNTE5vZGUsIG91dGVyTm9kZSwgbnVtYmVyKTtcblxuICAgIHJldHVybiBmb290bm90ZUxpbmtIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlTGlua0hUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwibnVtYmVyIiwiZ2V0TnVtYmVyIiwic2V0TnVtYmVyIiwiY29udGVudCIsImNvbnRleHQiLCJFTVBUWV9TVFJJTkciLCJpZGVudGlmaWVyIiwiYXR0cmlidXRlTmFtZSIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsInByZXBlbmQiLCJGT09UTk9URV9QUkVQRU5EIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImluc2VydEJlZm9yZSIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsInVubW91bnQiLCJnZXRET01FbGVtZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwicmVzZXRET01FbGVtZW50IiwiYXNIVE1MIiwiaW5kZW50IiwiaHRtbCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImZyb21Ob3RoaW5nIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOQTt5QkFFUTt3QkFDSTs4QkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQSxxQkFDUEMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxNQUFNO2dDQUQ5Q0w7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQVdDO1lBQVlDO1lBQVlDOztRQUV6QyxNQUFLQyxNQUFNLEdBQUdBOzs7a0JBSkdMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxNQUFNO1lBQ3BCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVGLE1BQU07Z0JBQ2QsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO1lBQ2hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUQsVUFBVSxBQUFDLElBQUksQ0FBQ0gsTUFBTSxLQUFLLE9BQ2QsSUFBSSxDQUFDQSxNQUFNLEdBQ1RLLHVCQUFZO2dCQUVqQyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdGLE9BQU87Z0JBQUksT0FBTyxJQUFJLENBQUNSLFNBQVMsQ0FBQ1UsVUFBVSxDQUFDRjtZQUFV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
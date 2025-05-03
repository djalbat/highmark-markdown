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
            // clear() {
            //   if (this.domElement === null) {
            //     return;
            //   }
            //
            //   const { lastChild = null } = this.domElement;
            //
            //   if (lastChild !== null) {
            //     const domElement = lastChild,  ///
            //           parentDOMElement = this.domElement;
            //
            //     parentDOMElement.removeChild(domElement);
            //   }
            // }
            //
            // update(context) {
            //   if (this.domElement === null) {
            //     return;
            //   }
            //
            //   const content = this.content(context);
            //
            //   if (content !== EMPTY_STRING) {
            //     const textNode  = document.createTextNode(content),
            //           domElement = textNode,  ///
            //           parentDOMElement = this.domElement; ///
            //
            //     parentDOMElement.appendChild(domElement);
            //   }
            // }
            //
            // renumber(number, context) {
            //   this.setNumber(number);
            //
            //   this.clear();
            //
            //   this.update(context);
            // }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRk9PVE5PVEVfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUxpbmtIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCBudW1iZXIpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG5cbiAgc2V0TnVtYmVyKG51bWJlcikge1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9ICh0aGlzLm51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgLy8gY2xlYXIoKSB7XG4gIC8vICAgaWYgKHRoaXMuZG9tRWxlbWVudCA9PT0gbnVsbCkge1xuICAvLyAgICAgcmV0dXJuO1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICBjb25zdCB7IGxhc3RDaGlsZCA9IG51bGwgfSA9IHRoaXMuZG9tRWxlbWVudDtcbiAgLy9cbiAgLy8gICBpZiAobGFzdENoaWxkICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBkb21FbGVtZW50ID0gbGFzdENoaWxkLCAgLy8vXG4gIC8vICAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50O1xuICAvL1xuICAvLyAgICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gdXBkYXRlKGNvbnRleHQpIHtcbiAgLy8gICBpZiAodGhpcy5kb21FbGVtZW50ID09PSBudWxsKSB7XG4gIC8vICAgICByZXR1cm47XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCk7XG4gIC8vXG4gIC8vICAgaWYgKGNvbnRlbnQgIT09IEVNUFRZX1NUUklORykge1xuICAvLyAgICAgY29uc3QgdGV4dE5vZGUgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCksXG4gIC8vICAgICAgICAgICBkb21FbGVtZW50ID0gdGV4dE5vZGUsICAvLy9cbiAgLy8gICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuICAvL1xuICAvLyAgICAgcGFyZW50RE9NRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gcmVudW1iZXIobnVtYmVyLCBjb250ZXh0KSB7XG4gIC8vICAgdGhpcy5zZXROdW1iZXIobnVtYmVyKTtcbiAgLy9cbiAgLy8gICB0aGlzLmNsZWFyKCk7XG4gIC8vXG4gIC8vICAgdGhpcy51cGRhdGUoY29udGV4dCk7XG4gIC8vIH1cblxuICBpZGVudGlmaWVyKGNvbnRleHQpIHsgcmV0dXJuIHRoaXMub3V0ZXJOb2RlLmlkZW50aWZpZXIoY29udGV4dCk7IH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IHByZXBlbmQgPSBGT09UTk9URV9QUkVQRU5ELFxuICAgICAgICAgIGlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIoY29udGV4dCksXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBgIyR7cHJlcGVuZH0tJHtpZGVudGlmaWVyfWA7IC8vL1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudClcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpXG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIHtcbiAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIGZpcnN0Q2hpbGQgPSBkb21FbGVtZW50LmZpcnN0Q2hpbGRcblxuICAgICAgZG9tRWxlbWVudCA9IGZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZXNldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIGFzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgaHRtbDtcblxuICAgIGluZGVudCA9IHRoaXMuYWRqdXN0SW5kZW50KGluZGVudCk7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IHRoaXMuY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXJ0aW5nVGFnID0gdGhpcy5zdGFydGluZ1RhZyhjb250ZXh0KSxcbiAgICAgICAgICBjbG9zaW5nVGFnID0gdGhpcy5jbG9zaW5nVGFnKGNvbnRleHQpO1xuXG4gICAgaHRtbCA9IGAke2luZGVudH0ke3N0YXJ0aW5nVGFnfSR7Y2hpbGROb2Rlc0hUTUx9JHtjbG9zaW5nVGFnfVxuYDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkTm9kZXNIVE1MID0gY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYVwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImZvb3Rub3RlXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG51bWJlciA9IG51bGwsXG4gICAgICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tTm90aGluZyhGb290bm90ZUxpbmtIVE1MTm9kZSwgbnVtYmVyKTtcblxuICAgIHJldHVybiBmb290bm90ZUxpbmtIVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkge1xuICAgIGNvbnN0IG51bWJlciA9IG51bGwsXG4gICAgICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKEZvb3Rub3RlTGlua0hUTUxOb2RlLCBvdXRlck5vZGUsIG51bWJlcik7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVMaW5rSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZUxpbmtIVE1MTm9kZSIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZG9tRWxlbWVudCIsIm51bWJlciIsImdldE51bWJlciIsInNldE51bWJlciIsImNvbnRlbnQiLCJjb250ZXh0IiwiRU1QVFlfU1RSSU5HIiwiaWRlbnRpZmllciIsImF0dHJpYnV0ZU5hbWUiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJwcmVwZW5kIiwiRk9PVE5PVEVfUFJFUEVORCIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJ1bm1vdW50IiwiZ2V0RE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInJlc2V0RE9NRWxlbWVudCIsImFzSFRNTCIsImluZGVudCIsImh0bWwiLCJhZGp1c3RJbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJmcm9tTm90aGluZyIsImZvb3Rub3RlTGlua0hUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTkE7eUJBRVE7d0JBQ0k7OEJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUEscUJBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsTUFBTTtnQ0FEOUNMOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFXQztZQUFZQztZQUFZQzs7UUFFekMsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUpHTDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVRixNQUFNO2dCQUNkLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtZQUNoQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQU1ELFVBQVUsQUFBQyxJQUFJLENBQUNILE1BQU0sS0FBSyxPQUNmLElBQUksQ0FBQ0EsTUFBTSxHQUNUSyx1QkFBWTtnQkFFaEMsT0FBT0Y7WUFDVDs7O1lBRUEsWUFBWTtZQUNaLG9DQUFvQztZQUNwQyxjQUFjO1lBQ2QsTUFBTTtZQUNOLEVB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
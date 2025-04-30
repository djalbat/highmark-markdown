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
var number = 1; ///
var FootnoteLinkHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(FootnoteLinkHTMLNode, HTMLNode);
    function FootnoteLinkHTMLNode() {
        _class_call_check(this, FootnoteLinkHTMLNode);
        return _call_super(this, FootnoteLinkHTMLNode, arguments);
    }
    _create_class(FootnoteLinkHTMLNode, [
        {
            // getNumber() {
            //   return this.number;
            // }
            //
            // setNumber(number) {
            //   this.number = number;
            // }
            //
            // content(context) {
            //   const content = (this.number !== null) ?
            //                     this.number :
            //                       EMPTY_STRING;
            //
            //   return content;
            // }
            //
            // identifier(context) {
            //   const identifier = this.fromFirstChildNode((firstChildNode) => {
            //     const linkTerminalNode = firstChildNode,  ///
            //           identifier = identifierFromLinkTerminalNode(linkTerminalNode);
            //
            //     return identifier;
            //   });
            //
            //   return identifier;
            // }
            //
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
            key: "content",
            value: function content(context) {
                var content = number++; ///
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
                return _html.default.fromNothing(FootnoteLinkHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(FootnoteLinkHTMLNode, outerNode);
            }
        }
    ]);
    return FootnoteLinkHTMLNode;
}(_html.default);
_define_property(FootnoteLinkHTMLNode, "tagName", "a");
_define_property(FootnoteLinkHTMLNode, "className", "footnote");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRk9PVE5PVEVfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5sZXQgbnVtYmVyID0gMTsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlTGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICAvLyBnZXROdW1iZXIoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICAvLyB9XG4gIC8vXG4gIC8vIHNldE51bWJlcihudW1iZXIpIHtcbiAgLy8gICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgLy8gfVxuICAvL1xuICAvLyBjb250ZW50KGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBjb250ZW50ID0gKHRoaXMubnVtYmVyICE9PSBudWxsKSA/XG4gIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIgOlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuICAvL1xuICAvLyAgIHJldHVybiBjb250ZW50O1xuICAvLyB9XG4gIC8vXG4gIC8vIGlkZW50aWZpZXIoY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGlkZW50aWZpZXIgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgLy8gICAgIGNvbnN0IGxpbmtUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAvLyAgICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tTGlua1Rlcm1pbmFsTm9kZShsaW5rVGVybWluYWxOb2RlKTtcbiAgLy9cbiAgLy8gICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIHJldHVybiBpZGVudGlmaWVyO1xuICAvLyB9XG4gIC8vXG4gIC8vIGNsZWFyKCkge1xuICAvLyAgIGlmICh0aGlzLmRvbUVsZW1lbnQgPT09IG51bGwpIHtcbiAgLy8gICAgIHJldHVybjtcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgY29uc3QgeyBsYXN0Q2hpbGQgPSBudWxsIH0gPSB0aGlzLmRvbUVsZW1lbnQ7XG4gIC8vXG4gIC8vICAgaWYgKGxhc3RDaGlsZCAhPT0gbnVsbCkge1xuICAvLyAgICAgY29uc3QgZG9tRWxlbWVudCA9IGxhc3RDaGlsZCwgIC8vL1xuICAvLyAgICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDtcbiAgLy9cbiAgLy8gICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vXG4gIC8vIHVwZGF0ZShjb250ZXh0KSB7XG4gIC8vICAgaWYgKHRoaXMuZG9tRWxlbWVudCA9PT0gbnVsbCkge1xuICAvLyAgICAgcmV0dXJuO1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGlmIChjb250ZW50ICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgLy8gICAgIGNvbnN0IHRleHROb2RlICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAvLyAgICAgICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlLCAgLy8vXG4gIC8vICAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cbiAgLy9cbiAgLy8gICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vXG4gIC8vIHJlbnVtYmVyKG51bWJlciwgY29udGV4dCkge1xuICAvLyAgIHRoaXMuc2V0TnVtYmVyKG51bWJlcik7XG4gIC8vXG4gIC8vICAgdGhpcy5jbGVhcigpO1xuICAvL1xuICAvLyAgIHRoaXMudXBkYXRlKGNvbnRleHQpO1xuICAvLyB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IG51bWJlcisrOyAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpOyB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVwZW5kID0gRk9PVE5PVEVfUFJFUEVORCxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYCMke3ByZXBlbmR9LSR7aWRlbnRpZmllcn1gOyAvLy9cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5jcmVhdGVET01FbGVtZW50KGNvbnRleHQpO1xuXG4gICAgdGhpcy5zZXRET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpXG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KVxuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICB7XG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBmaXJzdENoaWxkID0gZG9tRWxlbWVudC5maXJzdENoaWxkXG5cbiAgICAgIGRvbUVsZW1lbnQgPSBmaXJzdENoaWxkOyAgLy8vXG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfVxuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcblxuICAgIHRoaXMucmVzZXRET01FbGVtZW50KCk7XG4gIH1cblxuICBhc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGh0bWw7XG5cbiAgICBpbmRlbnQgPSB0aGlzLmFkanVzdEluZGVudChpbmRlbnQpO1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSB0aGlzLmNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31cbmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJmb290bm90ZVwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKEZvb3Rub3RlTGlua0hUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShGb290bm90ZUxpbmtIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlTGlua0hUTUxOb2RlIiwibnVtYmVyIiwiY29udGVudCIsImNvbnRleHQiLCJpZGVudGlmaWVyIiwib3V0ZXJOb2RlIiwiYXR0cmlidXRlTmFtZSIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsInByZXBlbmQiLCJGT09UTk9URV9QUkVQRU5EIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJ1bm1vdW50IiwiZ2V0RE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInJlc2V0RE9NRWxlbWVudCIsImFzSFRNTCIsImluZGVudCIsImh0bWwiLCJhZGp1c3RJbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImNoaWxkTm9kZXNBc0hUTUwiLCJzdGFydGluZ1RhZyIsImNsb3NpbmdUYWciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJEQVBBO3dCQUVZOzhCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFJQyxTQUFTLEdBQUcsR0FBRztBQUVKLElBQUEsQUFBTUQscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CLGdCQUFnQjtZQUNoQix3QkFBd0I7WUFDeEIsSUFBSTtZQUNKLEVBQUU7WUFDRixzQkFBc0I7WUFDdEIsMEJBQTBCO1lBQzFCLElBQUk7WUFDSixFQUFFO1lBQ0YscUJBQXFCO1lBQ3JCLDZDQUE2QztZQUM3QyxvQ0FBb0M7WUFDcEMsc0NBQXNDO1lBQ3RDLEVBQUU7WUFDRixvQkFBb0I7WUFDcEIsSUFBSTtZQUNKLEVBQUU7WUFDRix3QkFBd0I7WUFDeEIscUVBQXFFO1lBQ3JFLG9EQUFvRDtZQUNwRCwyRUFBMkU7WUFDM0UsRUFBRTtZQUNGLHlCQUF5QjtZQUN6QixRQUFRO1lBQ1IsRUFBRTtZQUNGLHVCQUF1QjtZQUN2QixJQUFJO1lBQ0osRUFBRTtZQUNGLFlBQVk7WUFDWixvQ0FBb0M7WUFDcEMsY0FBYztZQUNkLE1BQU07WUFDTixFQUFFO1lBQ0Ysa0RBQWtEO1lBQ2xELEVBQUU7WUFDRiw4QkFBOEI7WUFDOUIseUNBQXlDO1lBQ3pD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
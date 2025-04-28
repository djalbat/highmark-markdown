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
                _get(_get_prototype_of(FootnoteLinkHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                var domElement;
                domElement = this.getDOMElement();
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
                domElement = this.getDOMElement();
                parentDOMElement = domElement; ///
                var firstChild = parentDOMElement.firstChild;
                domElement = firstChild; ///
                parentDOMElement.removeChild(domElement);
                _get(_get_prototype_of(FootnoteLinkHTMLNode.prototype), "unmount", this).call(this, parentDOMElement, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRk9PVE5PVEVfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5sZXQgbnVtYmVyID0gMTsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlTGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICAvLyBnZXROdW1iZXIoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICAvLyB9XG4gIC8vXG4gIC8vIHNldE51bWJlcihudW1iZXIpIHtcbiAgLy8gICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgLy8gfVxuICAvL1xuICAvLyBjb250ZW50KGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBjb250ZW50ID0gKHRoaXMubnVtYmVyICE9PSBudWxsKSA/XG4gIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIgOlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuICAvL1xuICAvLyAgIHJldHVybiBjb250ZW50O1xuICAvLyB9XG4gIC8vXG4gIC8vIGlkZW50aWZpZXIoY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGlkZW50aWZpZXIgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgLy8gICAgIGNvbnN0IGxpbmtUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAvLyAgICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tTGlua1Rlcm1pbmFsTm9kZShsaW5rVGVybWluYWxOb2RlKTtcbiAgLy9cbiAgLy8gICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIHJldHVybiBpZGVudGlmaWVyO1xuICAvLyB9XG4gIC8vXG4gIC8vIGNsZWFyKCkge1xuICAvLyAgIGlmICh0aGlzLmRvbUVsZW1lbnQgPT09IG51bGwpIHtcbiAgLy8gICAgIHJldHVybjtcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgY29uc3QgeyBsYXN0Q2hpbGQgPSBudWxsIH0gPSB0aGlzLmRvbUVsZW1lbnQ7XG4gIC8vXG4gIC8vICAgaWYgKGxhc3RDaGlsZCAhPT0gbnVsbCkge1xuICAvLyAgICAgY29uc3QgZG9tRWxlbWVudCA9IGxhc3RDaGlsZCwgIC8vL1xuICAvLyAgICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDtcbiAgLy9cbiAgLy8gICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vXG4gIC8vIHVwZGF0ZShjb250ZXh0KSB7XG4gIC8vICAgaWYgKHRoaXMuZG9tRWxlbWVudCA9PT0gbnVsbCkge1xuICAvLyAgICAgcmV0dXJuO1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGlmIChjb250ZW50ICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgLy8gICAgIGNvbnN0IHRleHROb2RlICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpLFxuICAvLyAgICAgICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlLCAgLy8vXG4gIC8vICAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cbiAgLy9cbiAgLy8gICAgIHBhcmVudERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vXG4gIC8vIHJlbnVtYmVyKG51bWJlciwgY29udGV4dCkge1xuICAvLyAgIHRoaXMuc2V0TnVtYmVyKG51bWJlcik7XG4gIC8vXG4gIC8vICAgdGhpcy5jbGVhcigpO1xuICAvL1xuICAvLyAgIHRoaXMudXBkYXRlKGNvbnRleHQpO1xuICAvLyB9XG5cbiAgY29udGVudChjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IG51bWJlcisrOyAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWRlbnRpZmllcihjb250ZXh0KSB7IHJldHVybiB0aGlzLm91dGVyTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpOyB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IEhSRUZfQVRUUklCVVRFX05BTUU7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZVZhbHVlKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVwZW5kID0gRk9PVE5PVEVfUFJFUEVORCxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYCMke3ByZXBlbmR9LSR7aWRlbnRpZmllcn1gOyAvLy9cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50KGNvbnRleHQpLFxuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KVxuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICBjb25zdCBmaXJzdENoaWxkID0gcGFyZW50RE9NRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgZG9tRWxlbWVudCA9IGZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG5cbiAgICBzdXBlci51bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBodG1sO1xuXG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCksXG4gICAgICAgICAgc3RhcnRpbmdUYWcgPSB0aGlzLnN0YXJ0aW5nVGFnKGNvbnRleHQpLFxuICAgICAgICAgIGNsb3NpbmdUYWcgPSB0aGlzLmNsb3NpbmdUYWcoY29udGV4dCk7XG5cbiAgICBodG1sID0gYCR7aW5kZW50fSR7c3RhcnRpbmdUYWd9JHtjaGlsZE5vZGVzSFRNTH0ke2Nsb3NpbmdUYWd9XG5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiZm9vdG5vdGVcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhGb290bm90ZUxpbmtIVE1MTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRm9vdG5vdGVMaW5rSFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZUxpbmtIVE1MTm9kZSIsIm51bWJlciIsImNvbnRlbnQiLCJjb250ZXh0IiwiaWRlbnRpZmllciIsIm91dGVyTm9kZSIsImF0dHJpYnV0ZU5hbWUiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJwcmVwZW5kIiwiRk9PVE5PVEVfUFJFUEVORCIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJ1bm1vdW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiYXNIVE1MIiwiaW5kZW50IiwiaHRtbCIsImFkanVzdEluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiY2hpbGROb2Rlc0FzSFRNTCIsInN0YXJ0aW5nVGFnIiwiY2xvc2luZ1RhZyIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJmcm9tT3V0ZXJOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MkRBUEE7d0JBRVk7OEJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBSUMsU0FBUyxHQUFHLEdBQUc7QUFFSixJQUFBLEFBQU1ELHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQixnQkFBZ0I7WUFDaEIsd0JBQXdCO1lBQ3hCLElBQUk7WUFDSixFQUFFO1lBQ0Ysc0JBQXNCO1lBQ3RCLDBCQUEwQjtZQUMxQixJQUFJO1lBQ0osRUFBRTtZQUNGLHFCQUFxQjtZQUNyQiw2Q0FBNkM7WUFDN0Msb0NBQW9DO1lBQ3BDLHNDQUFzQztZQUN0QyxFQUFFO1lBQ0Ysb0JBQW9CO1lBQ3BCLElBQUk7WUFDSixFQUFFO1lBQ0Ysd0JBQXdCO1lBQ3hCLHFFQUFxRTtZQUNyRSxvREFBb0Q7WUFDcEQsMkVBQTJFO1lBQzNFLEVBQUU7WUFDRix5QkFBeUI7WUFDekIsUUFBUTtZQUNSLEVBQUU7WUFDRix1QkFBdUI7WUFDdkIsSUFBSTtZQUNKLEVBQUU7WUFDRixZQUFZO1lBQ1osb0NBQW9DO1lBQ3BDLGNBQWM7WUFDZCxNQUFNO1lBQ04sRUFBRTtZQUNGLGtEQUFrRDtZQUNsRCxFQUFFO1lBQ0YsOEJBQThCO1lBQzlCLHlDQUF5QztZQUN6QyxnREFBZ0Q7WUFDaEQsRUFBRTtZQUNGLGdEQUFnRDtZQUNoRCxNQUFNO1lBQ04sSUFBSTtZQUNKLEVBQUU7WUFDRixvQkFBb0I7WUFDcEIsb0NBQW9DO1lBQ3BDLGNBQWM7WUFDZCxNQUFNO1lBQ04sRUFBRTtZQUNGLDJDQUEyQztZQUMzQyxFQUFFO1lBQ0Ysb0NBQW9DO1lBQ3BDLDBEQUEwRDtZQUMxRCx3Q0FB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
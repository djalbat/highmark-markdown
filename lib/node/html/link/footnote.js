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
                var content = _constants.EMPTY_STRING;
                return content;
            }
        },
        {
            key: "identifier",
            value: function identifier(context) {
                var identifier = _constants.EMPTY_STRING;
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
} // function identifierFromLinkTerminalNode(linkTerminalNode) {
 //   const content = linkTerminalNode.getContent(),
 //     matches = content.match(/\[\^([^\]]+)]/),
 //     secondMatch = second(matches),
 //     identifier = secondMatch; ///
 //
 //   return identifier;
 // }
(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRk9PVE5PVEVfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUxpbmtIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgLy8gZ2V0TnVtYmVyKCkge1xuICAvLyAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgLy8gfVxuICAvL1xuICAvLyBzZXROdW1iZXIobnVtYmVyKSB7XG4gIC8vICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIC8vIH1cbiAgLy9cbiAgLy8gY29udGVudChjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgY29udGVudCA9ICh0aGlzLm51bWJlciAhPT0gbnVsbCkgP1xuICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyIDpcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcbiAgLy9cbiAgLy8gICByZXR1cm4gY29udGVudDtcbiAgLy8gfVxuICAvL1xuICAvLyBpZGVudGlmaWVyKGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gIC8vICAgICBjb25zdCBsaW5rVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgLy8gICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbUxpbmtUZXJtaW5hbE5vZGUobGlua1Rlcm1pbmFsTm9kZSk7XG4gIC8vXG4gIC8vICAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICByZXR1cm4gaWRlbnRpZmllcjtcbiAgLy8gfVxuICAvL1xuICAvLyBjbGVhcigpIHtcbiAgLy8gICBpZiAodGhpcy5kb21FbGVtZW50ID09PSBudWxsKSB7XG4gIC8vICAgICByZXR1cm47XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIGNvbnN0IHsgbGFzdENoaWxkID0gbnVsbCB9ID0gdGhpcy5kb21FbGVtZW50O1xuICAvL1xuICAvLyAgIGlmIChsYXN0Q2hpbGQgIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBsYXN0Q2hpbGQsICAvLy9cbiAgLy8gICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7XG4gIC8vXG4gIC8vICAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvL1xuICAvLyB1cGRhdGUoY29udGV4dCkge1xuICAvLyAgIGlmICh0aGlzLmRvbUVsZW1lbnQgPT09IG51bGwpIHtcbiAgLy8gICAgIHJldHVybjtcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBpZiAoY29udGVudCAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gIC8vICAgICBjb25zdCB0ZXh0Tm9kZSAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgLy8gICAgICAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZSwgIC8vL1xuICAvLyAgICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG4gIC8vXG4gIC8vICAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvL1xuICAvLyByZW51bWJlcihudW1iZXIsIGNvbnRleHQpIHtcbiAgLy8gICB0aGlzLnNldE51bWJlcihudW1iZXIpO1xuICAvL1xuICAvLyAgIHRoaXMuY2xlYXIoKTtcbiAgLy9cbiAgLy8gICB0aGlzLnVwZGF0ZShjb250ZXh0KTtcbiAgLy8gfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlkZW50aWZpZXIoY29udGV4dCkge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IEZPT1ROT1RFX1BSRVBFTkQsXG4gICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGAjJHtwcmVwZW5kfS0ke2lkZW50aWZpZXJ9YDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGROb2Rlc0hUTUwgPSBjb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKEZvb3Rub3RlTGlua0hUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShGb290bm90ZUxpbmtIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuXG4vLyBmdW5jdGlvbiBpZGVudGlmaWVyRnJvbUxpbmtUZXJtaW5hbE5vZGUobGlua1Rlcm1pbmFsTm9kZSkge1xuLy8gICBjb25zdCBjb250ZW50ID0gbGlua1Rlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4vLyAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL1xcW1xcXihbXlxcXV0rKV0vKSxcbi8vICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbi8vICAgICBpZGVudGlmaWVyID0gc2Vjb25kTWF0Y2g7IC8vL1xuLy9cbi8vICAgcmV0dXJuIGlkZW50aWZpZXI7XG4vLyB9Il0sIm5hbWVzIjpbIkZvb3Rub3RlTGlua0hUTUxOb2RlIiwiY29udGVudCIsImNvbnRleHQiLCJFTVBUWV9TVFJJTkciLCJpZGVudGlmaWVyIiwiYXR0cmlidXRlTmFtZSIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsInByZXBlbmQiLCJGT09UTk9URV9QUkVQRU5EIiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJvdXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5BO3lCQUVRO3dCQUNJOzhCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7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
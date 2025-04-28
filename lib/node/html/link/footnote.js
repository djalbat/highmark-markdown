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
var _constants = require("../../../constants");
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
                var content = "".concat(number++, "\n");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRk9PVE5PVEVfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHtDQVJSSUFHRV9SRVRVUk59IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxubGV0IG51bWJlciA9IDE7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUxpbmtIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgLy8gZ2V0TnVtYmVyKCkge1xuICAvLyAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgLy8gfVxuICAvL1xuICAvLyBzZXROdW1iZXIobnVtYmVyKSB7XG4gIC8vICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gIC8vIH1cbiAgLy9cbiAgLy8gY29udGVudChjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgY29udGVudCA9ICh0aGlzLm51bWJlciAhPT0gbnVsbCkgP1xuICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyIDpcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcbiAgLy9cbiAgLy8gICByZXR1cm4gY29udGVudDtcbiAgLy8gfVxuICAvL1xuICAvLyBpZGVudGlmaWVyKGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gIC8vICAgICBjb25zdCBsaW5rVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgLy8gICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbUxpbmtUZXJtaW5hbE5vZGUobGlua1Rlcm1pbmFsTm9kZSk7XG4gIC8vXG4gIC8vICAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICByZXR1cm4gaWRlbnRpZmllcjtcbiAgLy8gfVxuICAvL1xuICAvLyBjbGVhcigpIHtcbiAgLy8gICBpZiAodGhpcy5kb21FbGVtZW50ID09PSBudWxsKSB7XG4gIC8vICAgICByZXR1cm47XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIGNvbnN0IHsgbGFzdENoaWxkID0gbnVsbCB9ID0gdGhpcy5kb21FbGVtZW50O1xuICAvL1xuICAvLyAgIGlmIChsYXN0Q2hpbGQgIT09IG51bGwpIHtcbiAgLy8gICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBsYXN0Q2hpbGQsICAvLy9cbiAgLy8gICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQ7XG4gIC8vXG4gIC8vICAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvL1xuICAvLyB1cGRhdGUoY29udGV4dCkge1xuICAvLyAgIGlmICh0aGlzLmRvbUVsZW1lbnQgPT09IG51bGwpIHtcbiAgLy8gICAgIHJldHVybjtcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBpZiAoY29udGVudCAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gIC8vICAgICBjb25zdCB0ZXh0Tm9kZSAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSxcbiAgLy8gICAgICAgICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZSwgIC8vL1xuICAvLyAgICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG4gIC8vXG4gIC8vICAgICBwYXJlbnRET01FbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW1lbnQpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvL1xuICAvLyByZW51bWJlcihudW1iZXIsIGNvbnRleHQpIHtcbiAgLy8gICB0aGlzLnNldE51bWJlcihudW1iZXIpO1xuICAvL1xuICAvLyAgIHRoaXMuY2xlYXIoKTtcbiAgLy9cbiAgLy8gICB0aGlzLnVwZGF0ZShjb250ZXh0KTtcbiAgLy8gfVxuXG4gIGNvbnRlbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgJHtudW1iZXIrK31cbmA7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlkZW50aWZpZXIoY29udGV4dCkgeyByZXR1cm4gdGhpcy5vdXRlck5vZGUuaWRlbnRpZmllcihjb250ZXh0KTsgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IEZPT1ROT1RFX1BSRVBFTkQsXG4gICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGAjJHtwcmVwZW5kfS0ke2lkZW50aWZpZXJ9YDsgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudClcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IHBhcmVudERPTUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIGRvbUVsZW1lbnQgPSBmaXJzdENoaWxkOyAgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGVzSFRNTCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJmb290bm90ZVwiO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEhUTUxOb2RlLmZyb21Ob3RoaW5nKEZvb3Rub3RlTGlua0hUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShGb290bm90ZUxpbmtIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlTGlua0hUTUxOb2RlIiwibnVtYmVyIiwiY29udGVudCIsImNvbnRleHQiLCJpZGVudGlmaWVyIiwib3V0ZXJOb2RlIiwiYXR0cmlidXRlTmFtZSIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsInByZXBlbmQiLCJGT09UTk9URV9QUkVQRU5EIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydEJlZm9yZSIsInVubW91bnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzJEQVJBO3dCQUVZOzhCQUNHO3lCQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUlDLFNBQVMsR0FBRyxHQUFHO0FBRUosSUFBQSxBQUFNRCxxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkIsZ0JBQWdCO1lBQ2hCLHdCQUF3QjtZQUN4QixJQUFJO1lBQ0osRUFBRTtZQUNG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
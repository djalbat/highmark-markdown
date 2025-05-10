"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexHeadingHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _markdown = require("../../../ruleNames/markdown");
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
var IndexHeadingHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(IndexHeadingHTMLNode, HTMLNode);
    function IndexHeadingHTMLNode(outerNode, parentNode, childNodes, domElement, letter) {
        _class_call_check(this, IndexHeadingHTMLNode);
        var _this;
        _this = _call_super(this, IndexHeadingHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement
        ]);
        _this.letter = letter;
        return _this;
    }
    _create_class(IndexHeadingHTMLNode, [
        {
            key: "getLetter",
            value: function getLetter() {
                return this.letter;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _markdown.INDEX_HEADING_MARKDOWN_RULE_NAME;
                return ruleName;
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
                var content = this.letter, textNode = document.createTextNode(content);
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
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML = "".concat(this.letter, "\n");
                return childNodesHTML;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var ruleName = this.getRuleName(), string = ruleName; ///
                return string;
            }
        }
    ], [
        {
            key: "fromLetter",
            value: function fromLetter(letter) {
                var indexHeadingHTMLNode = _html.default.fromNothing(IndexHeadingHTMLNode, letter);
                return indexHeadingHTMLNode;
            }
        }
    ]);
    return IndexHeadingHTMLNode;
}(_html.default);
_define_property(IndexHeadingHTMLNode, "tagName", "h3");
_define_property(IndexHeadingHTMLNode, "className", "index");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSU5ERVhfSEVBRElOR19NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SGVhZGluZ0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIGxldHRlcikge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmxldHRlciA9IGxldHRlcjtcbiAgfVxuXG4gIGdldExldHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXR0ZXI7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IElOREVYX0hFQURJTkdfTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICB0aGlzLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5sZXR0ZXIsICAvLy9cbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIHtcbiAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIGZpcnN0Q2hpbGQgPSBkb21FbGVtZW50LmZpcnN0Q2hpbGRcblxuICAgICAgZG9tRWxlbWVudCA9IGZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZXNldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSBgJHt0aGlzLmxldHRlcn1cbmA7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJoM1wiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImluZGV4XCI7XG5cbiAgc3RhdGljIGZyb21MZXR0ZXIobGV0dGVyKSB7XG4gICAgY29uc3QgaW5kZXhIZWFkaW5nSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tTm90aGluZyhJbmRleEhlYWRpbmdIVE1MTm9kZSwgbGV0dGVyKTtcblxuICAgIHJldHVybiBpbmRleEhlYWRpbmdIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4SGVhZGluZ0hUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwibGV0dGVyIiwiZ2V0TGV0dGVyIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIklOREVYX0hFQURJTkdfTUFSS0RPV05fUlVMRV9OQU1FIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjb250ZXh0IiwiY3JlYXRlRE9NRWxlbWVudCIsInNldERPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJjb250ZW50IiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwidW5tb3VudCIsImdldERPTUVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJyZXNldERPTUVsZW1lbnQiLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJhc1N0cmluZyIsInN0cmluZyIsImZyb21MZXR0ZXIiLCJpbmRleEhlYWRpbmdIVE1MTm9kZSIsIkhUTUxOb2RlIiwiZnJvbU5vdGhpbmciLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKQTt3QkFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUEscUJBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsTUFBTTtnQ0FEOUNMOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFXQztZQUFZQztZQUFZQzs7UUFFekMsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUpHTDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQywwQ0FBZ0M7Z0JBRWpELE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFQyxPQUFPO2dCQUNoRCxJQUFJVDtnQkFFSkEsYUFBYSxJQUFJLENBQUNVLGdCQUFnQixDQUFDRDtnQkFFbkMsSUFBSSxDQUFDRSxhQUFhLENBQUNYO2dCQUVuQk8saUJBQWlCSyxZQUFZLENBQUNaLFlBQVlRO2dCQUUxQ0QsbUJBQW1CUCxZQUFZLEdBQUc7Z0JBRWxDUSxvQkFBb0I7Z0JBRXBCLElBQU1LLFVBQVUsSUFBSSxDQUFDWixNQUFNLEVBQ3JCYSxXQUFXQyxTQUFTQyxjQUFjLENBQUNIO2dCQUV6Q2IsYUFBYWMsVUFBVyxHQUFHO2dCQUUzQlAsaUJBQWlCSyxZQUFZLENBQUNaLFlBQVlRO1lBQzVDOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFWLGdCQUFnQixFQUFFRSxPQUFPO2dCQUMvQixJQUFJVDtnQkFFSjtvQkFDRUEsYUFBYSxJQUFJLENBQUNrQixhQUFhO29CQUUvQixJQUFNWCxxQkFBbUJQLFlBQ25CbUIsYUFBYW5CLFdBQVdtQixVQUFVO29CQUV4Q25CLGFBQWFtQixZQUFhLEdBQUc7b0JBRTdCWixtQkFBaUJhLFdBQVcsQ0FBQ3BCO2dCQUMvQjtnQkFFQUEsYUFBYSxJQUFJLENBQUNrQixhQUFhO2dCQUUvQlgsaUJBQWlCYSxXQUFXLENBQUNwQjtnQkFFN0IsSUFBSSxDQUFDcUIsZUFBZTtZQUN0Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU0sRUFBRWQsT0FBTztnQkFDOUIsSUFBTWUsaUJBQWlCLEFBQUMsR0FBYyxPQUFaLElBQUksQ0FBQ3ZCLE1BQU0sRUFBQztnQkFHdEMsT0FBT3VCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXJCLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCdUIsU0FBU3RCLFVBQVcsR0FBRztnQkFFN0IsT0FBT3NCO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0EsV0FBVzFCLE1BQU07Z0JBQ3RCLElBQU0yQix1QkFBdUJDLGFBQVEsQ0FBQ0MsV0FBVyxDQTlFaENsQyxzQkE4RXVESztnQkFFeEUsT0FBTzJCO1lBQ1Q7OztXQWpGbUJoQztFQUE2QmlDLGFBQVE7QUF5RXhELGlCQXpFbUJqQyxzQkF5RVptQyxXQUFVO0FBRWpCLGlCQTNFbUJuQyxzQkEyRVpvQyxhQUFZIn0=
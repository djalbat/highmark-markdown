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
                siblingDOMElement !== null ? (0, _dom.insertAfter)(domElement, parentDOMElement, siblingDOMElement) : (0, _dom.insertBeforehand)(domElement, parentDOMElement);
                parentDOMElement = domElement; ///
                var content = this.letter, textNode = document.createTextNode(content);
                domElement = textNode; ///
                (0, _dom.insertAfterwards)(domElement, parentDOMElement);
                domElement = this.getDOMElement();
                siblingDOMElement = domElement; ///
                return siblingDOMElement;
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaGVhZGluZy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSU5ERVhfSEVBRElOR19NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5pbXBvcnQgeyByZW1vdmUsIGluc2VydEFmdGVyLCBpbnNlcnRBZnRlcndhcmRzLCBpbnNlcnRCZWZvcmVoYW5kIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhIZWFkaW5nSFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgbGV0dGVyKSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMubGV0dGVyID0gbGV0dGVyO1xuICB9XG5cbiAgZ2V0TGV0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxldHRlcjtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSU5ERVhfSEVBRElOR19NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgIHRoaXMuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIChzaWJsaW5nRE9NRWxlbWVudCAhPT0gbnVsbCkgP1xuICAgICAgaW5zZXJ0QWZ0ZXIoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpIDpcbiAgICAgICAgaW5zZXJ0QmVmb3JlaGFuZChkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmxldHRlciwgIC8vL1xuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIGluc2VydEFmdGVyd2FyZHMoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgcmV0dXJuIHNpYmxpbmdET01FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50KSB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICB7XG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBmaXJzdENoaWxkID0gZG9tRWxlbWVudC5maXJzdENoaWxkXG5cbiAgICAgIGRvbUVsZW1lbnQgPSBmaXJzdENoaWxkOyAgLy8vXG5cbiAgICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgICB9XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLnJlc2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IGAke3RoaXMubGV0dGVyfVxuYDtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImgzXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiaW5kZXhcIjtcblxuICBzdGF0aWMgZnJvbUxldHRlcihsZXR0ZXIpIHtcbiAgICBjb25zdCBpbmRleEhlYWRpbmdIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKEluZGV4SGVhZGluZ0hUTUxOb2RlLCBsZXR0ZXIpO1xuXG4gICAgcmV0dXJuIGluZGV4SGVhZGluZ0hUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhIZWFkaW5nSFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJsZXR0ZXIiLCJnZXRMZXR0ZXIiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiSU5ERVhfSEVBRElOR19NQVJLRE9XTl9SVUxFX05BTUUiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImNvbnRleHQiLCJjcmVhdGVET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwiaW5zZXJ0QmVmb3JlaGFuZCIsImNvbnRlbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRBZnRlcndhcmRzIiwiZ2V0RE9NRWxlbWVudCIsInVubW91bnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwicmVzZXRET01FbGVtZW50IiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiYXNTdHJpbmciLCJzdHJpbmciLCJmcm9tTGV0dGVyIiwiaW5kZXhIZWFkaW5nSFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21Ob3RoaW5nIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEE7d0JBRTRCO21CQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQSxxQkFDUEMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxNQUFNO2dDQUQ5Q0w7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQVdDO1lBQVlDO1lBQVlDOztRQUV6QyxNQUFLQyxNQUFNLEdBQUdBOzs7a0JBSkdMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxNQUFNO1lBQ3BCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLDBDQUFnQztnQkFFakQsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUVDLE9BQU87Z0JBQ2hELElBQUlUO2dCQUVKQSxhQUFhLElBQUksQ0FBQ1UsZ0JBQWdCLENBQUNEO2dCQUVuQyxJQUFJLENBQUNFLGFBQWEsQ0FBQ1g7Z0JBRWxCUSxzQkFBc0IsT0FDckJJLElBQUFBLGdCQUFXLEVBQUNaLFlBQVlPLGtCQUFrQkMscUJBQ3hDSyxJQUFBQSxxQkFBZ0IsRUFBQ2IsWUFBWU87Z0JBRWpDQSxtQkFBbUJQLFlBQVksR0FBRztnQkFFbEMsSUFBTWMsVUFBVSxJQUFJLENBQUNiLE1BQU0sRUFDckJjLFdBQVdDLFNBQVNDLGNBQWMsQ0FBQ0g7Z0JBRXpDZCxhQUFhZSxVQUFXLEdBQUc7Z0JBRTNCRyxJQUFBQSxxQkFBZ0IsRUFBQ2xCLFlBQVlPO2dCQUU3QlAsYUFBYSxJQUFJLENBQUNtQixhQUFhO2dCQUUvQlgsb0JBQW9CUixZQUFZLEdBQUc7Z0JBRW5DLE9BQU9RO1lBQ1Q7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUWIsZ0JBQWdCO2dCQUN0QixJQUFJUDtnQkFFSjtvQkFDRUEsYUFBYSxJQUFJLENBQUNtQixhQUFhO29CQUUvQixJQUFNWixxQkFBbUJQLFlBQ25CcUIsYUFBYXJCLFdBQVdxQixVQUFVO29CQUV4Q3JCLGFBQWFxQixZQUFhLEdBQUc7b0JBRTdCQyxJQUFBQSxXQUFNLEVBQUN0QixZQUFZTztnQkFDckI7Z0JBRUFQLGFBQWEsSUFBSSxDQUFDbUIsYUFBYTtnQkFFL0JHLElBQUFBLFdBQU0sRUFBQ3RCLFlBQVlPO2dCQUVuQixJQUFJLENBQUNnQixlQUFlO1lBQ3RCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTSxFQUFFaEIsT0FBTztnQkFDOUIsSUFBTWlCLGlCQUFpQixBQUFDLEdBQWMsT0FBWixJQUFJLENBQUN6QixNQUFNLEVBQUM7Z0JBR3RDLE9BQU95QjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU12QixXQUFXLElBQUksQ0FBQ0QsV0FBVyxJQUMzQnlCLFNBQVN4QixVQUFXLEdBQUc7Z0JBRTdCLE9BQU93QjtZQUNUOzs7O1lBTU9DLEtBQUFBO21CQUFQLFNBQU9BLFdBQVc1QixNQUFNO2dCQUN0QixJQUFNNkIsdUJBQXVCQyxhQUFRLENBQUNDLFdBQVcsQ0FwRmhDcEMsc0JBb0Z1REs7Z0JBRXhFLE9BQU82QjtZQUNUOzs7V0F2Rm1CbEM7RUFBNkJtQyxhQUFRO0FBK0V4RCxpQkEvRW1CbkMsc0JBK0VacUMsV0FBVTtBQUVqQixpQkFqRm1CckMsc0JBaUZac0MsYUFBWSJ9
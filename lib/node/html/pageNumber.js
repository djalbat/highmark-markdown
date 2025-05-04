"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PageNumberHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _ruleNames = require("../../ruleNames");
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
var PageNumberHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(PageNumberHTMLNode, HTMLNode);
    function PageNumberHTMLNode(outerNode, parentNode, childNodes, domElement, pageNumber) {
        _class_call_check(this, PageNumberHTMLNode);
        var _this;
        _this = _call_super(this, PageNumberHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement
        ]);
        _this.pageNumber = pageNumber;
        return _this;
    }
    _create_class(PageNumberHTMLNode, [
        {
            key: "getPageNumber",
            value: function getPageNumber() {
                return this.pageNumber;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                var content = this.pageNumber, textNode = document.createTextNode(content), domElement = textNode; ///
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                {
                    var domElement;
                    domElement = this.getDOMElement();
                    var parentDOMElement1 = domElement, lastChild = domElement.lastChild;
                    domElement = lastChild; ///
                    parentDOMElement1.removeChild(domElement);
                }
            }
        },
        {
            key: "childNodesAsHTML",
            value: function childNodesAsHTML(indent, context) {
                var childNodesHTML = "".concat(this.pageNumber, "\n");
                return childNodesHTML;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = _ruleNames.PAGE_NUMBER_RULE_NAME;
                return string;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(PageNumberHTMLNode);
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                return _html.default.fromOuterNode(PageNumberHTMLNode, outerNode);
            }
        },
        {
            key: "fromPageNumber",
            value: function fromPageNumber(pageNumber) {
                var pageNumberHTMLNode = _html.default.fromNothing(PageNumberHTMLNode, pageNumber);
                return pageNumberHTMLNode;
            }
        }
    ]);
    return PageNumberHTMLNode;
}(_html.default);
_define_property(PageNumberHTMLNode, "tagName", "span");
_define_property(PageNumberHTMLNode, "className", "page-number");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvcGFnZU51bWJlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgUEFHRV9OVU1CRVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlTnVtYmVySFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgcGFnZU51bWJlcikge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICB9XG5cbiAgZ2V0UGFnZU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlTnVtYmVyO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5wYWdlTnVtYmVyLFxuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB7XG4gICAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgbGFzdENoaWxkID0gZG9tRWxlbWVudC5sYXN0Q2hpbGRcblxuICAgICAgZG9tRWxlbWVudCA9IGxhc3RDaGlsZDsgIC8vL1xuXG4gICAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSBgJHt0aGlzLnBhZ2VOdW1iZXJ9XG5gO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gUEFHRV9OVU1CRVJfUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzcGFuXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwicGFnZS1udW1iZXJcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhQYWdlTnVtYmVySFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21PdXRlck5vZGUob3V0ZXJOb2RlKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tT3V0ZXJOb2RlKFBhZ2VOdW1iZXJIVE1MTm9kZSwgb3V0ZXJOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4gICAgY29uc3QgcGFnZU51bWJlckhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoUGFnZU51bWJlckhUTUxOb2RlLCBwYWdlTnVtYmVyKTtcblxuICAgIHJldHVybiBwYWdlTnVtYmVySFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQYWdlTnVtYmVySFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJwYWdlTnVtYmVyIiwiZ2V0UGFnZU51bWJlciIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiY29udGV4dCIsImNvbnRlbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJ1bm1vdW50IiwiZ2V0RE9NRWxlbWVudCIsImxhc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiYXNTdHJpbmciLCJzdHJpbmciLCJQQUdFX05VTUJFUl9SVUxFX05BTUUiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsImZyb21QYWdlTnVtYmVyIiwicGFnZU51bWJlckhUTUxOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSkE7eUJBRWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLG1DQUFOO2NBQU1BO2FBQUFBLG1CQUNQQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVU7Z0NBRGxETDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBV0M7WUFBWUM7WUFBWUM7O1FBRXpDLE1BQUtDLFVBQVUsR0FBR0E7OztrQkFKREw7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFQyxPQUFPO2dCQUNoRCxJQUFNQyxVQUFVLElBQUksQ0FBQ04sVUFBVSxFQUN6Qk8sV0FBV0MsU0FBU0MsY0FBYyxDQUFDSCxVQUNuQ1AsYUFBYVEsVUFBVyxHQUFHO2dCQUVqQ0osaUJBQWlCTyxZQUFZLENBQUNYLFlBQVlLO1lBQzVDOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFSLGdCQUFnQixFQUFFRSxPQUFPO2dCQUMvQjtvQkFDRSxJQUFJTjtvQkFFSkEsYUFBYSxJQUFJLENBQUNhLGFBQWE7b0JBRS9CLElBQU1ULG9CQUFtQkosWUFDbkJjLFlBQVlkLFdBQVdjLFNBQVM7b0JBRXRDZCxhQUFhYyxXQUFZLEdBQUc7b0JBRTVCVixrQkFBaUJXLFdBQVcsQ0FBQ2Y7Z0JBQy9CO1lBQ0Y7OztZQUVBZ0IsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTSxFQUFFWCxPQUFPO2dCQUM5QixJQUFNWSxpQkFBaUIsQUFBQyxHQUFrQixPQUFoQixJQUFJLENBQUNqQixVQUFVLEVBQUM7Z0JBRzFDLE9BQU9pQjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVNDLGdDQUFxQjtnQkFFcEMsT0FBT0Q7WUFDVDs7OztZQU1PRSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBbkQvQjFCO1lBbURxRDs7O1lBRWpFNEIsS0FBQUE7bUJBQVAsU0FBT0EsY0FBYzNCLFNBQVM7Z0JBQUksT0FBTzBCLGFBQVEsQ0FBQ0MsYUFBYSxDQXJENUM1QixvQkFxRGlFQztZQUFZOzs7WUFFekY0QixLQUFBQTttQkFBUCxTQUFPQSxlQUFleEIsVUFBVTtnQkFDOUIsSUFBTXlCLHFCQUFxQkgsYUFBUSxDQUFDRCxXQUFXLENBeEQ5QjFCLG9CQXdEbURLO2dCQUVwRSxPQUFPeUI7WUFDVDs7O1dBM0RtQjlCO0VBQTJCMkIsYUFBUTtBQStDdEQsaUJBL0NtQjNCLG9CQStDWitCLFdBQVU7QUFFakIsaUJBakRtQi9CLG9CQWlEWmdDLGFBQVkifQ==
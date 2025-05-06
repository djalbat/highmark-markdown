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
var _constants = require("../../constants");
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
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _ruleNames.PAGE_NUMBER_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                _get(_get_prototype_of(PageNumberHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                var domElement;
                domElement = this.getDOMElement();
                parentDOMElement = domElement; ///
                siblingDOMElement = null;
                var content = this.pageNumber, textNode = document.createTextNode(content);
                domElement = textNode; ///
                parentDOMElement.insertBefore(domElement, siblingDOMElement);
            }
        },
        {
            key: "unmount",
            value: function unmount(parentDOMElement, context) {
                {
                    var domElement;
                    domElement = this.getDOMElement();
                    var _$parentDOMElement = domElement, lastChild = domElement.lastChild;
                    domElement = lastChild; ///
                    _$parentDOMElement.removeChild(domElement);
                }
                _get(_get_prototype_of(PageNumberHTMLNode.prototype), "unmount", this).call(this, parentDOMElement, context);
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
                var childNodesHTML = "".concat(this.pageNumber, "\n");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvcGFnZU51bWJlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUEFHRV9OVU1CRVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlTnVtYmVySFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgcGFnZU51bWJlcikge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICB9XG5cbiAgZ2V0UGFnZU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlTnVtYmVyO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQQUdFX05VTUJFUl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnBhZ2VOdW1iZXIsICAvLy9cbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICB7XG4gICAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgbGFzdENoaWxkID0gZG9tRWxlbWVudC5sYXN0Q2hpbGRcblxuICAgICAgZG9tRWxlbWVudCA9IGxhc3RDaGlsZDsgIC8vL1xuXG4gICAgICBwYXJlbnRET01FbGVtZW50LnJlbW92ZUNoaWxkKGRvbUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHN1cGVyLnVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCk7XG4gIH1cblxuICBhc1BsYWluVGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgcGxhaW5UZXh0ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dDtcbiAgfVxuXG4gIGNoaWxkTm9kZXNBc0hUTUwoaW5kZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0hUTUwgPSBgJHt0aGlzLnBhZ2VOdW1iZXJ9XG5gO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNIVE1MO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3BhblwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcInBhZ2UtbnVtYmVyXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoUGFnZU51bWJlckhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShQYWdlTnVtYmVySFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcikge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXJIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKFBhZ2VOdW1iZXJIVE1MTm9kZSwgcGFnZU51bWJlcik7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlckhUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFnZU51bWJlckhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwicGFnZU51bWJlciIsImdldFBhZ2VOdW1iZXIiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiUEFHRV9OVU1CRVJfUlVMRV9OQU1FIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJjb250ZXh0IiwiZ2V0RE9NRWxlbWVudCIsImNvbnRlbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJ1bm1vdW50IiwibGFzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImFzU3RyaW5nIiwic3RyaW5nIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJmcm9tUGFnZU51bWJlciIsInBhZ2VOdW1iZXJIVE1MTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxBO3lCQUVRO3lCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQUEsQUFBTUEsbUNBQU47Y0FBTUE7YUFBQUEsbUJBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtnQ0FEbERMOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFXQztZQUFZQztZQUFZQzs7UUFFekMsTUFBS0MsVUFBVSxHQUFHQTs7O2tCQUpETDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyxnQ0FBcUI7Z0JBRXRDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFQyxPQUFPO2dCQUNoRCx1QkFsQmlCYiwrQkFrQlhVLFNBQU4sSUFBSyxhQUFPQyxrQkFBa0JDLG1CQUFtQkM7Z0JBRWpELElBQUlUO2dCQUVKQSxhQUFhLElBQUksQ0FBQ1UsYUFBYTtnQkFFL0JILG1CQUFtQlAsWUFBYSxHQUFHO2dCQUVuQ1Esb0JBQW9CO2dCQUVwQixJQUFNRyxVQUFVLElBQUksQ0FBQ1YsVUFBVSxFQUN6QlcsV0FBV0MsU0FBU0MsY0FBYyxDQUFDSDtnQkFFekNYLGFBQWFZLFVBQVcsR0FBRztnQkFFM0JMLGlCQUFpQlEsWUFBWSxDQUFDZixZQUFZUTtZQUM1Qzs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRVCxnQkFBZ0IsRUFBRUUsT0FBTztnQkFDL0I7b0JBQ0UsSUFBSVQ7b0JBRUpBLGFBQWEsSUFBSSxDQUFDVSxhQUFhO29CQUUvQixJQUFNSCxxQkFBbUJQLFlBQ25CaUIsWUFBWWpCLFdBQVdpQixTQUFTO29CQUV0Q2pCLGFBQWFpQixXQUFZLEdBQUc7b0JBRTVCVixtQkFBaUJXLFdBQVcsQ0FBQ2xCO2dCQUMvQjtnQkFFQSx1QkFsRGlCSiwrQkFrRFhvQixXQUFOLElBQUssYUFBU1Qsa0JBQWtCRTtZQUNsQzs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZVixPQUFPO2dCQUNqQixJQUFNVyxZQUFZQyx1QkFBWTtnQkFFOUIsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU0sRUFBRWQsT0FBTztnQkFDOUIsSUFBTWUsaUJBQWlCLEFBQUMsR0FBa0IsT0FBaEIsSUFBSSxDQUFDdkIsVUFBVSxFQUFDO2dCQUcxQyxPQUFPdUI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNckIsV0FBVyxJQUFJLENBQUNELFdBQVcsSUFDM0J1QixTQUFTdEIsVUFBVyxHQUFHO2dCQUU3QixPQUFPc0I7WUFDVDs7OztZQU1PQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBUSxDQUFDRCxXQUFXLENBN0UvQi9CO1lBNkVxRDs7O1lBRWpFaUMsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY2hDLFNBQVM7Z0JBQUksT0FBTytCLGFBQVEsQ0FBQ0MsYUFBYSxDQS9FNUNqQyxvQkErRWlFQztZQUFZOzs7WUFFekZpQyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlN0IsVUFBVTtnQkFDOUIsSUFBTThCLHFCQUFxQkgsYUFBUSxDQUFDRCxXQUFXLENBbEY5Qi9CLG9CQWtGbURLO2dCQUVwRSxPQUFPOEI7WUFDVDs7O1dBckZtQm5DO0VBQTJCZ0MsYUFBUTtBQXlFdEQsaUJBekVtQmhDLG9CQXlFWm9DLFdBQVU7QUFFakIsaUJBM0VtQnBDLG9CQTJFWnFDLGFBQVkifQ==
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
var _dom = require("../../utilities/dom");
var _markdown = require("../../ruleNames/markdown");
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
                var ruleName = _markdown.PAGE_NUMBER_MARKDOWN_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                var domElement;
                _get(_get_prototype_of(PageNumberHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
                domElement = this.getDOMElement();
                parentDOMElement = domElement; ///
                var content = this.pageNumber, textNode = document.createTextNode(content);
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
                {
                    var domElement;
                    domElement = this.getDOMElement();
                    var _$parentDOMElement = domElement, lastChild = domElement.lastChild;
                    domElement = lastChild; ///
                    (0, _dom.remove)(domElement, _$parentDOMElement);
                }
                _get(_get_prototype_of(PageNumberHTMLNode.prototype), "unmount", this).call(this, parentDOMElement);
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
            key: "fromPageNumber",
            value: function fromPageNumber(pageNumber) {
                return _html.default.fromNothing(PageNumberHTMLNode, pageNumber);
            }
        },
        {
            key: "fromPageNumberDOMElement",
            value: function fromPageNumberDOMElement(pageNumberDOMElement) {
                var domElement = pageNumberDOMElement, pageNumberHTMLNode = _html.default.fromDOMElement(PageNumberHTMLNode, domElement);
                return pageNumberHTMLNode;
            }
        }
    ]);
    return PageNumberHTMLNode;
}(_html.default);
_define_property(PageNumberHTMLNode, "tagName", "span");
_define_property(PageNumberHTMLNode, "className", "page-number");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvcGFnZU51bWJlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlcndhcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kb21cIjtcbmltcG9ydCB7IFBBR0VfTlVNQkVSX01BUktET1dOX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXMvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZU51bWJlckhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIHBhZ2VOdW1iZXIpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5wYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcbiAgfVxuXG4gIGdldFBhZ2VOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZU51bWJlcjtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUEFHRV9OVU1CRVJfTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIHN1cGVyLm1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5wYWdlTnVtYmVyLCAgLy8vXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgaW5zZXJ0QWZ0ZXJ3YXJkcyhkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHNpYmxpbmdET01FbGVtZW50ID0gZG9tRWxlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gc2libGluZ0RPTUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICB7XG4gICAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgbGFzdENoaWxkID0gZG9tRWxlbWVudC5sYXN0Q2hpbGRcblxuICAgICAgZG9tRWxlbWVudCA9IGxhc3RDaGlsZDsgIC8vL1xuXG4gICAgICByZW1vdmUoZG9tRWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCk7XG4gICAgfVxuXG4gICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IGAke3RoaXMucGFnZU51bWJlcn1cbmA7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzcGFuXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwicGFnZS1udW1iZXJcIjtcblxuICBzdGF0aWMgZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcikgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoUGFnZU51bWJlckhUTUxOb2RlLCBwYWdlTnVtYmVyKTsgfVxuXG4gIHN0YXRpYyBmcm9tUGFnZU51bWJlckRPTUVsZW1lbnQocGFnZU51bWJlckRPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gcGFnZU51bWJlckRPTUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBwYWdlTnVtYmVySFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tRE9NRWxlbWVudChQYWdlTnVtYmVySFRNTE5vZGUsIGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXJIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBhZ2VOdW1iZXJIVE1MTm9kZSIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZG9tRWxlbWVudCIsInBhZ2VOdW1iZXIiLCJnZXRQYWdlTnVtYmVyIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIlBBR0VfTlVNQkVSX01BUktET1dOX1JVTEVfTkFNRSIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiY29udGV4dCIsImdldERPTUVsZW1lbnQiLCJjb250ZW50IiwidGV4dE5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiaW5zZXJ0QWZ0ZXJ3YXJkcyIsInVubW91bnQiLCJsYXN0Q2hpbGQiLCJyZW1vdmUiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImFzU3RyaW5nIiwic3RyaW5nIiwiZnJvbVBhZ2VOdW1iZXIiLCJIVE1MTm9kZSIsImZyb21Ob3RoaW5nIiwiZnJvbVBhZ2VOdW1iZXJET01FbGVtZW50IiwicGFnZU51bWJlckRPTUVsZW1lbnQiLCJwYWdlTnVtYmVySFRNTE5vZGUiLCJmcm9tRE9NRWxlbWVudCIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5BO3lCQUVRO21CQUNZO3dCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQUEsQUFBTUEsbUNBQU47Y0FBTUE7YUFBQUEsbUJBQ1BDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtnQ0FEbERMOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFXQztZQUFZQztZQUFZQzs7UUFFekMsTUFBS0MsVUFBVSxHQUFHQTs7O2tCQUpETDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyx3Q0FBOEI7Z0JBRS9DLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFQyxPQUFPO2dCQUNoRCxJQUFJVDtnQkFFSix1QkFwQmlCSiwrQkFvQlhVLFNBQU4sSUFBSyxhQUFPQyxrQkFBa0JDLG1CQUFtQkM7Z0JBRWpEVCxhQUFhLElBQUksQ0FBQ1UsYUFBYTtnQkFFL0JILG1CQUFtQlAsWUFBYSxHQUFHO2dCQUVuQyxJQUFNVyxVQUFVLElBQUksQ0FBQ1YsVUFBVSxFQUN6QlcsV0FBV0MsU0FBU0MsY0FBYyxDQUFDSDtnQkFFekNYLGFBQWFZLFVBQVcsR0FBRztnQkFFM0JHLElBQUFBLHFCQUFnQixFQUFDZixZQUFZTztnQkFFN0JQLGFBQWEsSUFBSSxDQUFDVSxhQUFhO2dCQUUvQkYsb0JBQW9CUixZQUFZLEdBQUc7Z0JBRW5DLE9BQU9RO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUVQsZ0JBQWdCO2dCQUN0QjtvQkFDRSxJQUFJUDtvQkFFSkEsYUFBYSxJQUFJLENBQUNVLGFBQWE7b0JBRS9CLElBQU1ILHFCQUFtQlAsWUFDbkJpQixZQUFZakIsV0FBV2lCLFNBQVM7b0JBRXRDakIsYUFBYWlCLFdBQVksR0FBRztvQkFFNUJDLElBQUFBLFdBQU0sRUFBQ2xCLFlBQVlPO2dCQUNyQjtnQkFFQSx1QkF0RGlCWCwrQkFzRFhvQixXQUFOLElBQUssYUFBU1Q7WUFDaEI7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWVYsT0FBTztnQkFDakIsSUFBTVcsWUFBWUMsdUJBQVk7Z0JBRTlCLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxNQUFNLEVBQUVkLE9BQU87Z0JBQzlCLElBQU1lLGlCQUFpQixBQUFDLEdBQWtCLE9BQWhCLElBQUksQ0FBQ3ZCLFVBQVUsRUFBQztnQkFHMUMsT0FBT3VCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXJCLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCdUIsU0FBU3RCLFVBQVcsR0FBRztnQkFFN0IsT0FBT3NCO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZTFCLFVBQVU7Z0JBQUksT0FBTzJCLGFBQVEsQ0FBQ0MsV0FBVyxDQWpGNUNqQyxvQkFpRmlFSztZQUFhOzs7WUFFMUY2QixLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJDLG9CQUFvQjtnQkFDbEQsSUFBTS9CLGFBQWErQixzQkFDYkMscUJBQXFCSixhQUFRLENBQUNLLGNBQWMsQ0FyRmpDckMsb0JBcUZzREk7Z0JBRXZFLE9BQU9nQztZQUNUOzs7V0F4Rm1CcEM7RUFBMkJnQyxhQUFRO0FBNkV0RCxpQkE3RW1CaEMsb0JBNkVac0MsV0FBVTtBQUVqQixpQkEvRW1CdEMsb0JBK0VadUMsYUFBWSJ9
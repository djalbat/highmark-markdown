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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvcGFnZU51bWJlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUEFHRV9OVU1CRVJfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlTnVtYmVySFRNTE5vZGUgZXh0ZW5kcyBIVE1MTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCwgcGFnZU51bWJlcikge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICB9XG5cbiAgZ2V0UGFnZU51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlTnVtYmVyO1xuICB9XG5cbiAgbW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICBsZXQgZG9tRWxlbWVudDtcblxuICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICBzaWJsaW5nRE9NRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5wYWdlTnVtYmVyLCAgLy8vXG4gICAgICAgICAgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KTtcblxuICAgIGRvbUVsZW1lbnQgPSB0ZXh0Tm9kZTsgIC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgdW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAge1xuICAgICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIGxhc3RDaGlsZCA9IGRvbUVsZW1lbnQubGFzdENoaWxkXG5cbiAgICAgIGRvbUVsZW1lbnQgPSBsYXN0Q2hpbGQ7ICAvLy9cblxuICAgICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9XG5cbiAgICBzdXBlci51bm1vdW50KHBhcmVudERPTUVsZW1lbnQsIGNvbnRleHQpO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gYCR7dGhpcy5wYWdlTnVtYmVyfVxuYDtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IFBBR0VfTlVNQkVSX1JVTEVfTkFNRTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic3BhblwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcInBhZ2UtbnVtYmVyXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoUGFnZU51bWJlckhUTUxOb2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShQYWdlTnVtYmVySFRNTE5vZGUsIG91dGVyTm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcikge1xuICAgIGNvbnN0IHBhZ2VOdW1iZXJIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21Ob3RoaW5nKFBhZ2VOdW1iZXJIVE1MTm9kZSwgcGFnZU51bWJlcik7XG5cbiAgICByZXR1cm4gcGFnZU51bWJlckhUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFnZU51bWJlckhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwicGFnZU51bWJlciIsImdldFBhZ2VOdW1iZXIiLCJtb3VudCIsInBhcmVudERPTUVsZW1lbnQiLCJzaWJsaW5nRE9NRWxlbWVudCIsImNvbnRleHQiLCJnZXRET01FbGVtZW50IiwiY29udGVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydEJlZm9yZSIsInVubW91bnQiLCJsYXN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImFzUGxhaW5UZXh0IiwicGxhaW5UZXh0IiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0FzSFRNTCIsImluZGVudCIsImNoaWxkTm9kZXNIVE1MIiwiYXNTdHJpbmciLCJzdHJpbmciLCJQQUdFX05VTUJFUl9SVUxFX05BTUUiLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbU91dGVyTm9kZSIsImZyb21QYWdlTnVtYmVyIiwicGFnZU51bWJlckhUTUxOb2RlIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEE7eUJBRVE7eUJBQ1M7Ozs7Ozs7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
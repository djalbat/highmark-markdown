"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexLinkHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _constants = require("../../../constants");
var _prepends = require("../../../prepends");
var _attributeNames = require("../../../attributeNames");
var _dom = require("../../../utilities/dom");
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
var IndexLinkHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(IndexLinkHTMLNode, HTMLNode);
    function IndexLinkHTMLNode(outerNode, parentNode, childNodes, domElement, pageNumber) {
        _class_call_check(this, IndexLinkHTMLNode);
        var _this;
        _this = _call_super(this, IndexLinkHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement
        ]);
        _this.pageNumber = pageNumber;
        return _this;
    }
    _create_class(IndexLinkHTMLNode, [
        {
            key: "getIndexLink",
            value: function getIndexLink() {
                return this.pageNumber;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _markdown.INDEX_LINK_MARKDOWN_RULE_NAME;
                return ruleName;
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
                var prepend = _prepends.INDEX_PREPEND, attributeValue = "#".concat(prepend, "-").concat(this.pageNumber);
                return attributeValue;
            }
        },
        {
            key: "mount",
            value: function mount(parentDOMElement, siblingDOMElement, context) {
                var domElement;
                _get(_get_prototype_of(IndexLinkHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
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
                _get(_get_prototype_of(IndexLinkHTMLNode.prototype), "unmount", this).call(this, parentDOMElement);
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
                var indexLinkHTMLNode = _html.default.fromNothing(IndexLinkHTMLNode, pageNumber);
                return indexLinkHTMLNode;
            }
        }
    ]);
    return IndexLinkHTMLNode;
}(_html.default);
_define_property(IndexLinkHTMLNode, "tagName", "a");
_define_property(IndexLinkHTMLNode, "className", "index");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSU5ERVhfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVtb3ZlLCBpbnNlcnRBZnRlcndhcmRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9kb21cIjtcbmltcG9ydCB7IElOREVYX0xJTktfTUFSS0RPV05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL3J1bGVOYW1lcy9tYXJrZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleExpbmtIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCBwYWdlTnVtYmVyKSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMucGFnZU51bWJlciA9IHBhZ2VOdW1iZXI7XG4gIH1cblxuICBnZXRJbmRleExpbmsoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZU51bWJlcjtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSU5ERVhfTElOS19NQVJLRE9XTl9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gSFJFRl9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IHByZXBlbmQgPSBJTkRFWF9QUkVQRU5ELFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYCMke3ByZXBlbmR9LSR7dGhpcy5wYWdlTnVtYmVyfWA7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBtb3VudChwYXJlbnRET01FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnBhZ2VOdW1iZXIsICAvLy9cbiAgICAgICAgICB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRleHROb2RlOyAgLy8vXG5cbiAgICBpbnNlcnRBZnRlcndhcmRzKGRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAvLy9cblxuICAgIHJldHVybiBzaWJsaW5nRE9NRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCkge1xuICAgIHtcbiAgICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBsYXN0Q2hpbGQgPSBkb21FbGVtZW50Lmxhc3RDaGlsZFxuXG4gICAgICBkb21FbGVtZW50ID0gbGFzdENoaWxkOyAgLy8vXG5cbiAgICAgIHJlbW92ZShkb21FbGVtZW50LCBwYXJlbnRET01FbGVtZW50KTtcbiAgICB9XG5cbiAgICBzdXBlci51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXNQbGFpblRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBwbGFpblRleHQ7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gYCR7dGhpcy5wYWdlTnVtYmVyfVxuYDtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzSFRNTDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJpbmRleFwiO1xuXG4gIHN0YXRpYyBmcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4gICAgY29uc3QgaW5kZXhMaW5rSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tTm90aGluZyhJbmRleExpbmtIVE1MTm9kZSwgcGFnZU51bWJlcik7XG5cbiAgICByZXR1cm4gaW5kZXhMaW5rSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleExpbmtIVE1MTm9kZSIsIm91dGVyTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZG9tRWxlbWVudCIsInBhZ2VOdW1iZXIiLCJnZXRJbmRleExpbmsiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiSU5ERVhfTElOS19NQVJLRE9XTl9SVUxFX05BTUUiLCJhdHRyaWJ1dGVOYW1lIiwiY29udGV4dCIsIkhSRUZfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsInByZXBlbmQiLCJJTkRFWF9QUkVQRU5EIiwibW91bnQiLCJwYXJlbnRET01FbGVtZW50Iiwic2libGluZ0RPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiY29udGVudCIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydEFmdGVyd2FyZHMiLCJ1bm1vdW50IiwibGFzdENoaWxkIiwicmVtb3ZlIiwiYXNQbGFpblRleHQiLCJwbGFpblRleHQiLCJFTVBUWV9TVFJJTkciLCJjaGlsZE5vZGVzQXNIVE1MIiwiaW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJhc1N0cmluZyIsInN0cmluZyIsImZyb21QYWdlTnVtYmVyIiwiaW5kZXhMaW5rSFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21Ob3RoaW5nIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7MkRBUkE7eUJBRVE7d0JBQ0M7OEJBQ007bUJBQ0s7d0JBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQSxrQkFDUEMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVO2dDQURsREw7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQVdDO1lBQVlDO1lBQVlDOztRQUV6QyxNQUFLQyxVQUFVLEdBQUdBOzs7a0JBSkRMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHVDQUE2QjtnQkFFOUMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxPQUFPO2dCQUNuQixJQUFNRCxnQkFBZ0JFLG1DQUFtQjtnQkFFekMsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlRixPQUFPO2dCQUNwQixJQUFNRyxVQUFVQyx1QkFBYSxFQUN2QkYsaUJBQWlCLEFBQUMsSUFBYyxPQUFYQyxTQUFRLEtBQW1CLE9BQWhCLElBQUksQ0FBQ1QsVUFBVTtnQkFFckQsT0FBT1E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUVQLE9BQU87Z0JBQ2hELElBQUlQO2dCQUVKLHVCQWpDaUJKLDhCQWlDWGdCLFNBQU4sSUFBSyxhQUFPQyxrQkFBa0JDLG1CQUFtQlA7Z0JBRWpEUCxhQUFhLElBQUksQ0FBQ2UsYUFBYTtnQkFFL0JGLG1CQUFtQmIsWUFBYSxHQUFHO2dCQUVuQyxJQUFNZ0IsVUFBVSxJQUFJLENBQUNmLFVBQVUsRUFDekJnQixXQUFXQyxTQUFTQyxjQUFjLENBQUNIO2dCQUV6Q2hCLGFBQWFpQixVQUFXLEdBQUc7Z0JBRTNCRyxJQUFBQSxxQkFBZ0IsRUFBQ3BCLFlBQVlhO2dCQUU3QmIsYUFBYSxJQUFJLENBQUNlLGFBQWE7Z0JBRS9CRCxvQkFBb0JkLFlBQVksR0FBRztnQkFFbkMsT0FBT2M7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRUixnQkFBZ0I7Z0JBQ3RCO29CQUNFLElBQUliO29CQUVKQSxhQUFhLElBQUksQ0FBQ2UsYUFBYTtvQkFFL0IsSUFBTUYscUJBQW1CYixZQUNuQnNCLFlBQVl0QixXQUFXc0IsU0FBUztvQkFFdEN0QixhQUFhc0IsV0FBWSxHQUFHO29CQUU1QkMsSUFBQUEsV0FBTSxFQUFDdkIsWUFBWWE7Z0JBQ3JCO2dCQUVBLHVCQW5FaUJqQiw4QkFtRVh5QixXQUFOLElBQUssYUFBU1I7WUFDaEI7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWWpCLE9BQU87Z0JBQ2pCLElBQU1rQixZQUFZQyx1QkFBWTtnQkFFOUIsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU0sRUFBRXJCLE9BQU87Z0JBQzlCLElBQU1zQixpQkFBaUIsQUFBQyxHQUFrQixPQUFoQixJQUFJLENBQUM1QixVQUFVLEVBQUM7Z0JBRzFDLE9BQU80QjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0xQixXQUFXLElBQUksQ0FBQ0QsV0FBVyxJQUMzQjRCLFNBQVMzQixVQUFXLEdBQUc7Z0JBRTdCLE9BQU8yQjtZQUNUOzs7O1lBTU9DLEtBQUFBO21CQUFQLFNBQU9BLGVBQWUvQixVQUFVO2dCQUM5QixJQUFNZ0Msb0JBQW9CQyxhQUFRLENBQUNDLFdBQVcsQ0EvRjdCdkMsbUJBK0ZpREs7Z0JBRWxFLE9BQU9nQztZQUNUOzs7V0FsR21CckM7RUFBMEJzQyxhQUFRO0FBMEZyRCxpQkExRm1CdEMsbUJBMEZad0MsV0FBVTtBQUVqQixpQkE1Rm1CeEMsbUJBNEZaeUMsYUFBWSJ9
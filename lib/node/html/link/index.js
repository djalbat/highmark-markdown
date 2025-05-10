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
                _get(_get_prototype_of(IndexLinkHTMLNode.prototype), "mount", this).call(this, parentDOMElement, siblingDOMElement, context);
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
                _get(_get_prototype_of(IndexLinkHTMLNode.prototype), "unmount", this).call(this, parentDOMElement, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGluay9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSU5ERVhfUFJFUEVORCB9IGZyb20gXCIuLi8uLi8uLi9wcmVwZW5kc1wiO1xuaW1wb3J0IHsgSFJFRl9BVFRSSUJVVEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9hdHRyaWJ1dGVOYW1lc1wiO1xuaW1wb3J0IHsgSU5ERVhfTElOS19NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4TGlua0hUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIHBhZ2VOdW1iZXIpIHtcbiAgICBzdXBlcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5wYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcbiAgfVxuXG4gIGdldEluZGV4TGluaygpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlTnVtYmVyO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBJTkRFWF9MSU5LX01BUktET1dOX1JVTEVfTkFNRTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBIUkVGX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IElOREVYX1BSRVBFTkQsXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBgIyR7cHJlcGVuZH0tJHt0aGlzLnBhZ2VOdW1iZXJ9YDtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudERPTUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50LCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgc2libGluZ0RPTUVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMucGFnZU51bWJlciwgIC8vL1xuICAgICAgICAgIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG5cbiAgICBkb21FbGVtZW50ID0gdGV4dE5vZGU7ICAvLy9cblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIHVubW91bnQocGFyZW50RE9NRWxlbWVudCwgY29udGV4dCkge1xuICAgIHtcbiAgICAgIGxldCBkb21FbGVtZW50O1xuXG4gICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBsYXN0Q2hpbGQgPSBkb21FbGVtZW50Lmxhc3RDaGlsZFxuXG4gICAgICBkb21FbGVtZW50ID0gbGFzdENoaWxkOyAgLy8vXG5cbiAgICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfVxuXG4gICAgc3VwZXIudW5tb3VudChwYXJlbnRET01FbGVtZW50LCBjb250ZXh0KTtcbiAgfVxuXG4gIGFzUGxhaW5UZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBwbGFpblRleHQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0O1xuICB9XG5cbiAgY2hpbGROb2Rlc0FzSFRNTChpbmRlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzSFRNTCA9IGAke3RoaXMucGFnZU51bWJlcn1cbmA7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0hUTUw7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiaW5kZXhcIjtcblxuICBzdGF0aWMgZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcikge1xuICAgIGNvbnN0IGluZGV4TGlua0hUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoSW5kZXhMaW5rSFRNTE5vZGUsIHBhZ2VOdW1iZXIpO1xuXG4gICAgcmV0dXJuIGluZGV4TGlua0hUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhMaW5rSFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJwYWdlTnVtYmVyIiwiZ2V0SW5kZXhMaW5rIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIklOREVYX0xJTktfTUFSS0RPV05fUlVMRV9OQU1FIiwiYXR0cmlidXRlTmFtZSIsImNvbnRleHQiLCJIUkVGX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJwcmVwZW5kIiwiSU5ERVhfUFJFUEVORCIsIm1vdW50IiwicGFyZW50RE9NRWxlbWVudCIsInNpYmxpbmdET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImNvbnRlbnQiLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJ1bm1vdW50IiwibGFzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJhc1BsYWluVGV4dCIsInBsYWluVGV4dCIsIkVNUFRZX1NUUklORyIsImNoaWxkTm9kZXNBc0hUTUwiLCJpbmRlbnQiLCJjaGlsZE5vZGVzSFRNTCIsImFzU3RyaW5nIiwic3RyaW5nIiwiZnJvbVBhZ2VOdW1iZXIiLCJpbmRleExpbmtIVE1MTm9kZSIsIkhUTUxOb2RlIiwiZnJvbU5vdGhpbmciLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyREFQQTt5QkFFUTt3QkFDQzs4QkFDTTt3QkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBLGtCQUNQQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVU7Z0NBRGxETDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBV0M7WUFBWUM7WUFBWUM7O1FBRXpDLE1BQUtDLFVBQVUsR0FBR0E7OztrQkFKREw7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsdUNBQTZCO2dCQUU5QyxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLE9BQU87Z0JBQ25CLElBQU1ELGdCQUFnQkUsbUNBQW1CO2dCQUV6QyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVGLE9BQU87Z0JBQ3BCLElBQU1HLFVBQVVDLHVCQUFhLEVBQ3ZCRixpQkFBaUIsQUFBQyxJQUFjLE9BQVhDLFNBQVEsS0FBbUIsT0FBaEIsSUFBSSxDQUFDVCxVQUFVO2dCQUVyRCxPQUFPUTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLGdCQUFnQixFQUFFQyxpQkFBaUIsRUFBRVAsT0FBTztnQkFDaEQsdUJBL0JpQlgsOEJBK0JYZ0IsU0FBTixJQUFLLGFBQU9DLGtCQUFrQkMsbUJBQW1CUDtnQkFFakQsSUFBSVA7Z0JBRUpBLGFBQWEsSUFBSSxDQUFDZSxhQUFhO2dCQUUvQkYsbUJBQW1CYixZQUFhLEdBQUc7Z0JBRW5DYyxvQkFBb0I7Z0JBRXBCLElBQU1FLFVBQVUsSUFBSSxDQUFDZixVQUFVLEVBQ3pCZ0IsV0FBV0MsU0FBU0MsY0FBYyxDQUFDSDtnQkFFekNoQixhQUFhaUIsVUFBVyxHQUFHO2dCQUUzQkosaUJBQWlCTyxZQUFZLENBQUNwQixZQUFZYztZQUM1Qzs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRUixnQkFBZ0IsRUFBRU4sT0FBTztnQkFDL0I7b0JBQ0UsSUFBSVA7b0JBRUpBLGFBQWEsSUFBSSxDQUFDZSxhQUFhO29CQUUvQixJQUFNRixxQkFBbUJiLFlBQ25Cc0IsWUFBWXRCLFdBQVdzQixTQUFTO29CQUV0Q3RCLGFBQWFzQixXQUFZLEdBQUc7b0JBRTVCVCxtQkFBaUJVLFdBQVcsQ0FBQ3ZCO2dCQUMvQjtnQkFFQSx1QkEvRGlCSiw4QkErRFh5QixXQUFOLElBQUssYUFBU1Isa0JBQWtCTjtZQUNsQzs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUEsWUFBWWpCLE9BQU87Z0JBQ2pCLElBQU1rQixZQUFZQyx1QkFBWTtnQkFFOUIsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU0sRUFBRXJCLE9BQU87Z0JBQzlCLElBQU1zQixpQkFBaUIsQUFBQyxHQUFrQixPQUFoQixJQUFJLENBQUM1QixVQUFVLEVBQUM7Z0JBRzFDLE9BQU80QjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0xQixXQUFXLElBQUksQ0FBQ0QsV0FBVyxJQUMzQjRCLFNBQVMzQixVQUFXLEdBQUc7Z0JBRTdCLE9BQU8yQjtZQUNUOzs7O1lBTU9DLEtBQUFBO21CQUFQLFNBQU9BLGVBQWUvQixVQUFVO2dCQUM5QixJQUFNZ0Msb0JBQW9CQyxhQUFRLENBQUNDLFdBQVcsQ0EzRjdCdkMsbUJBMkZpREs7Z0JBRWxFLE9BQU9nQztZQUNUOzs7V0E5Rm1CckM7RUFBMEJzQyxhQUFRO0FBc0ZyRCxpQkF0Rm1CdEMsbUJBc0Zad0MsV0FBVTtBQUVqQixpQkF4Rm1CeEMsbUJBd0ZaeUMsYUFBWSJ9
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesListHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
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
var FootnotesListHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(FootnotesListHTMLNode, HTMLNode);
    function FootnotesListHTMLNode(outerNode, parentNode, childNodes, domElement, start) {
        _class_call_check(this, FootnotesListHTMLNode);
        var _this;
        _this = _call_super(this, FootnotesListHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement
        ]);
        _this.start = start;
        return _this;
    }
    _create_class(FootnotesListHTMLNode, [
        {
            key: "getStart",
            value: function getStart() {
                return this.start;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _markdown.FOOTNOTES_LIST_MARKDOWN_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "attributeName",
            value: function attributeName(context) {
                var attributeName = _attributeNames.START_ATTRIBUTE_NAME;
                return attributeName;
            }
        },
        {
            key: "attributeValue",
            value: function attributeValue(context) {
                var attributeValue = this.start; ///
                return attributeValue;
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
            key: "fromFootnotesListDOMElement",
            value: function fromFootnotesListDOMElement(footnotesListDOMElement) {
                var domElement = footnotesListDOMElement, footnotesListHTMLNode = _html.default.fromDOMElement(FootnotesListHTMLNode, domElement);
                return footnotesListHTMLNode;
            }
        },
        {
            key: "fromStartAndFootnoteItemHTMLTransforms",
            value: function fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms) {
                var footnoteItemHTMLNodes = footnoteItemHTMLTransforms.map(function(footnoteItemHTMLTransform) {
                    var footnoteItemHTMLNode = footnoteItemHTMLTransform.getFootnoteItemHTMLNode();
                    return footnoteItemHTMLNode;
                }), childNHTMLodes = footnoteItemHTMLNodes, footnotesListHTMLNode = _html.default.fromChildHTMLNodes(FootnotesListHTMLNode, childNHTMLodes, start);
                return footnotesListHTMLNode;
            }
        }
    ]);
    return FootnotesListHTMLNode;
}(_html.default);
_define_property(FootnotesListHTMLNode, "tagName", "ol");
_define_property(FootnotesListHTMLNode, "className", "footnotes");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdC9mb290bm90ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IFNUQVJUX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5pbXBvcnQgeyBGT09UTk9URVNfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCBzdGFydCkge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gIH1cblxuICBnZXRTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRk9PVE5PVEVTX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IFNUQVJUX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLnN0YXJ0OyAgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJvbFwiO1xuXG4gIHN0YXRpYyBjbGFzc05hbWUgPSBcImZvb3Rub3Rlc1wiO1xuXG4gIHN0YXRpYyBmcm9tRm9vdG5vdGVzTGlzdERPTUVsZW1lbnQoZm9vdG5vdGVzTGlzdERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZm9vdG5vdGVzTGlzdERPTUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0SFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tRE9NRWxlbWVudChGb290bm90ZXNMaXN0SFRNTE5vZGUsIGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RIVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyhzdGFydCwgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCBmb290bm90ZUl0ZW1IVE1MTm9kZXMgPSBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcy5tYXAoKGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvb3Rub3RlSXRlbUhUTUxOb2RlID0gZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybS5nZXRGb290bm90ZUl0ZW1IVE1MTm9kZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gZm9vdG5vdGVJdGVtSFRNTE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGROSFRNTG9kZXMgPSBmb290bm90ZUl0ZW1IVE1MTm9kZXMsIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21DaGlsZEhUTUxOb2RlcyhGb290bm90ZXNMaXN0SFRNTE5vZGUsIGNoaWxkTkhUTUxvZGVzLCBzdGFydCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdEhUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdEhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50Iiwic3RhcnQiLCJnZXRTdGFydCIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJGT09UTk9URVNfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUiLCJhdHRyaWJ1dGVOYW1lIiwiY29udGV4dCIsIlNUQVJUX0FUVFJJQlVURV9OQU1FIiwiYXR0cmlidXRlVmFsdWUiLCJhc1N0cmluZyIsInN0cmluZyIsImZyb21Gb290bm90ZXNMaXN0RE9NRWxlbWVudCIsImZvb3Rub3Rlc0xpc3RET01FbGVtZW50IiwiZm9vdG5vdGVzTGlzdEhUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tRE9NRWxlbWVudCIsImZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUl0ZW1IVE1MTm9kZXMiLCJtYXAiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtIiwiZm9vdG5vdGVJdGVtSFRNTE5vZGUiLCJnZXRGb290bm90ZUl0ZW1IVE1MTm9kZSIsImNoaWxkTkhUTUxvZGVzIiwiZnJvbUNoaWxkSFRNTE5vZGVzIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEE7OEJBRWdCO3dCQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBLHNCQUNQQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLEtBQUs7Z0NBRDdDTDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBV0M7WUFBWUM7WUFBWUM7O1FBRXpDLE1BQUtDLEtBQUssR0FBR0E7OztrQkFKSUw7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsMkNBQWlDO2dCQUVsRCxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLE9BQU87Z0JBQ25CLElBQU1ELGdCQUFnQkUsb0NBQW9CO2dCQUUxQyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVGLE9BQU87Z0JBQ3BCLElBQU1FLGlCQUFpQixJQUFJLENBQUNSLEtBQUssRUFBRyxHQUFHO2dCQUV2QyxPQUFPUTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1OLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCUSxTQUFTUCxVQUFXLEdBQUc7Z0JBRTdCLE9BQU9PO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyx1QkFBdUI7Z0JBQ3hELElBQU1iLGFBQWFhLHlCQUNiQyx3QkFBd0JDLGFBQVEsQ0FBQ0MsY0FBYyxDQTFDcENwQix1QkEwQzRESTtnQkFFN0UsT0FBT2M7WUFDVDs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLHVDQUF1Q2hCLEtBQUssRUFBRWlCLDBCQUEwQjtnQkFDN0UsSUFBTUMsd0JBQXdCRCwyQkFBMkJFLEdBQUcsQ0FBQyxTQUFDQztvQkFDdEQsSUFBTUMsdUJBQXVCRCwwQkFBMEJFLHVCQUF1QjtvQkFFOUUsT0FBT0Q7Z0JBQ1QsSUFDQUUsaUJBQWlCTCx1QkFDakJMLHdCQUF3QkMsYUFBUSxDQUFDVSxrQkFBa0IsQ0F0RHhDN0IsdUJBc0RnRTRCLGdCQUFnQnZCO2dCQUVqRyxPQUFPYTtZQUNUOzs7V0F6RG1CbEI7RUFBOEJtQixhQUFRO0FBb0N6RCxpQkFwQ21CbkIsdUJBb0NaOEIsV0FBVTtBQUVqQixpQkF0Q21COUIsdUJBc0NaK0IsYUFBWSJ9
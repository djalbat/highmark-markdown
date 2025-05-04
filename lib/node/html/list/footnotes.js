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
var _ruleNames = require("../../../ruleNames");
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
                var string = _ruleNames.FOOTNOTES_LIST_RULE_NAME; ///
                return string;
            }
        }
    ], [
        {
            key: "fromStartAndFootnoteItemHTMLTransforms",
            value: function fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms) {
                var footnoteItemHTMLNodes = footnoteItemHTMLTransforms.map(function(footnoteItemHTMLTransform) {
                    var footnoteItemHTMLNode = footnoteItemHTMLTransform.getFootnoteItemHTMLNode();
                    return footnoteItemHTMLNode;
                }), childNodes = footnoteItemHTMLNodes, footnotesListHTMLNode = _html.default.fromChildNodes(FootnotesListHTMLNode, childNodes, start);
                return footnotesListHTMLNode;
            }
        }
    ]);
    return FootnotesListHTMLNode;
}(_html.default);
_define_property(FootnotesListHTMLNode, "tagName", "ol");
_define_property(FootnotesListHTMLNode, "className", "footnotes");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdC9mb290bm90ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sXCI7XG5cbmltcG9ydCB7IFNUQVJUX0FUVFJJQlVURV9OQU1FIH0gZnJvbSBcIi4uLy4uLy4uL2F0dHJpYnV0ZU5hbWVzXCI7XG5pbXBvcnQgeyBGT09UTk9URVNfTElTVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0xpc3RIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCBzdGFydCkge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gIH1cblxuICBnZXRTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydDtcbiAgfVxuXG4gIGF0dHJpYnV0ZU5hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBTVEFSVF9BVFRSSUJVVEVfTkFNRTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lO1xuICB9XG5cbiAgYXR0cmlidXRlVmFsdWUoY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gdGhpcy5zdGFydDsgIC8vL1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcIm9sXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiZm9vdG5vdGVzXCI7XG5cbiAgc3RhdGljIGZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKHN0YXJ0LCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcykge1xuICAgIGNvbnN0IGZvb3Rub3RlSXRlbUhUTUxOb2RlcyA9IGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zLm1hcCgoZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9vdG5vdGVJdGVtSFRNTE5vZGUgPSBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtLmdldEZvb3Rub3RlSXRlbUhUTUxOb2RlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmb290bm90ZUl0ZW1IVE1MTm9kZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gZm9vdG5vdGVJdGVtSFRNTE5vZGVzLCAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0SFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGROb2RlcyhGb290bm90ZXNMaXN0SFRNTE5vZGUsIGNoaWxkTm9kZXMsIHN0YXJ0KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0SFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNMaXN0SFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJzdGFydCIsImdldFN0YXJ0IiwiYXR0cmlidXRlTmFtZSIsImNvbnRleHQiLCJTVEFSVF9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiYXNTdHJpbmciLCJzdHJpbmciLCJGT09UTk9URVNfTElTVF9SVUxFX05BTUUiLCJmcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTE5vZGVzIiwibWFwIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybSIsImZvb3Rub3RlSXRlbUhUTUxOb2RlIiwiZ2V0Rm9vdG5vdGVJdGVtSFRNTE5vZGUiLCJmb290bm90ZXNMaXN0SFRNTE5vZGUiLCJIVE1MTm9kZSIsImZyb21DaGlsZE5vZGVzIiwidGFnTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEE7OEJBRWdCO3lCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBLHNCQUNQQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLEtBQUs7Z0NBRDdDTDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBV0M7WUFBWUM7WUFBWUM7O1FBRXpDLE1BQUtDLEtBQUssR0FBR0E7OztrQkFKSUw7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsT0FBTztnQkFDbkIsSUFBTUQsZ0JBQWdCRSxvQ0FBb0I7Z0JBRTFDLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUYsT0FBTztnQkFDcEIsSUFBTUUsaUJBQWlCLElBQUksQ0FBQ0wsS0FBSyxFQUFHLEdBQUc7Z0JBRXZDLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBU0MsbUNBQXdCLEVBQUcsR0FBRztnQkFFN0MsT0FBT0Q7WUFDVDs7OztZQU1PRSxLQUFBQTttQkFBUCxTQUFPQSx1Q0FBdUNULEtBQUssRUFBRVUsMEJBQTBCO2dCQUM3RSxJQUFNQyx3QkFBd0JELDJCQUEyQkUsR0FBRyxDQUFDLFNBQUNDO29CQUN0RCxJQUFNQyx1QkFBdUJELDBCQUEwQkUsdUJBQXVCO29CQUU5RSxPQUFPRDtnQkFDVCxJQUNBaEIsYUFBYWEsdUJBQ2JLLHdCQUF3QkMsYUFBUSxDQUFDQyxjQUFjLENBeENwQ3ZCLHVCQXdDNERHLFlBQVlFO2dCQUV6RixPQUFPZ0I7WUFDVDs7O1dBM0NtQnJCO0VBQThCc0IsYUFBUTtBQTZCekQsaUJBN0JtQnRCLHVCQTZCWndCLFdBQVU7QUFFakIsaUJBL0JtQnhCLHVCQStCWnlCLGFBQVkifQ==
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesListMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _attributeNames = require("../../attributeNames");
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
var FootnotesListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(FootnotesListMarkdownNode, MarkdownNode);
    function FootnotesListMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, start) {
        _class_call_check(this, FootnotesListMarkdownNode);
        var _this;
        _this = _call_super(this, FootnotesListMarkdownNode, [
            ruleName,
            childNodes,
            opacity,
            precedence,
            domElement
        ]);
        _this.start = start;
        return _this;
    }
    _create_class(FootnotesListMarkdownNode, [
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
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(FootnotesListMarkdownNode.prototype), "clone", this).call(this, this.start);
            }
        }
    ], [
        {
            key: "fromDOMElement",
            value: function fromDOMElement(domElement) {
                var ruleName = _ruleNames.FOOTNOTES_LIST_RULE_NAME, childNodes = [], opacity = null, start = null, footnotesListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity, start);
                footnotesListMarkdownNode.setDOMElement(domElement);
                return footnotesListMarkdownNode;
            }
        },
        {
            key: "fromFootnotesItemReplacementsAndStart",
            value: function fromFootnotesItemReplacementsAndStart(footnotesItemReplacements, start) {
                var ruleName = _ruleNames.FOOTNOTES_LIST_RULE_NAME, childNodes = footnotesItemReplacements.map(function(footnotesItemReplacement) {
                    var footnotesItemReplacementMode = footnotesItemReplacement.getFootnotesItemMarkdownNode(), childNode = footnotesItemReplacementMode; ///
                    return childNode;
                }), opacity = null, footnotesListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity, start);
                return footnotesListMarkdownNode;
            }
        }
    ]);
    return FootnotesListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgU1RBUlRfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcbmltcG9ydCB7IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBzdGFydCkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgfVxuXG4gIGdldFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0O1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IFNUQVJUX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLnN0YXJ0OyAgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuc3RhcnQpOyB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgc3RhcnQgPSBudWxsLFxuICAgICAgICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHN0YXJ0KTtcblxuICAgIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuc2V0RE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzQW5kU3RhcnQoZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cywgc3RhcnQpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cy5tYXAoKGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50TW9kZSA9IGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudC5nZXRGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgICAgICAgICBjaGlsZE5vZGUgPSBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRNb2RlOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBzdGFydCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsImRvbUVsZW1lbnQiLCJzdGFydCIsImdldFN0YXJ0IiwiYXR0cmlidXRlTmFtZSIsImNvbnRleHQiLCJTVEFSVF9BVFRSSUJVVEVfTkFNRSIsImF0dHJpYnV0ZVZhbHVlIiwiY2xvbmUiLCJmcm9tRE9NRWxlbWVudCIsIkZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInNldERPTUVsZW1lbnQiLCJmcm9tRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50c0FuZFN0YXJ0IiwiZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cyIsIm1hcCIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudE1vZGUiLCJnZXRGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIiwiY2hpbGROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsrREFMSTs4QkFFWTt5QkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUEsMEJBQ1BDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxLQUFLO2dDQURyRE47O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQVVDO1lBQVlDO1lBQVNDO1lBQVlDOztRQUVqRCxNQUFLQyxLQUFLLEdBQUdBOzs7a0JBSklOOztZQU9uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLE9BQU87Z0JBQ25CLElBQU1ELGdCQUFnQkUsb0NBQW9CO2dCQUUxQyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVGLE9BQU87Z0JBQ3BCLElBQU1FLGlCQUFpQixJQUFJLENBQUNMLEtBQUssRUFBRyxHQUFHO2dCQUV2QyxPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFVLE9BQU8sdUJBdkJFWixzQ0F1QklZLFNBQU4sSUFBSyxhQUFPLElBQUksQ0FBQ04sS0FBSztZQUFHOzs7O1lBRW5DTyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlUixVQUFVO2dCQUM5QixJQUFNSixXQUFXYSxtQ0FBd0IsRUFDbkNaLGFBQWEsRUFBRSxFQUNmQyxVQUFVLE1BQ1ZHLFFBQVEsTUFDUlMsNEJBQTRCQyxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0E5QjlEakIsMkJBOEIwRkMsVUFBVUMsWUFBWUMsU0FBU0c7Z0JBRTFJUywwQkFBMEJHLGFBQWEsQ0FBQ2I7Z0JBRXhDLE9BQU9VO1lBQ1Q7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxzQ0FBc0NDLHlCQUF5QixFQUFFZCxLQUFLO2dCQUMzRSxJQUFNTCxXQUFXYSxtQ0FBd0IsRUFDbkNaLGFBQWFrQiwwQkFBMEJDLEdBQUcsQ0FBQyxTQUFDQztvQkFDMUMsSUFBTUMsK0JBQStCRCx5QkFBeUJFLDRCQUE0QixJQUNwRkMsWUFBWUYsOEJBQThCLEdBQUc7b0JBRW5ELE9BQU9FO2dCQUNULElBQ0F0QixVQUFVLE1BQ1ZZLDRCQUE0QkMsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBOUM5RGpCLDJCQThDMEZDLFVBQVVDLFlBQVlDLFNBQVNHO2dCQUUxSSxPQUFPUztZQUNUOzs7V0FqRG1CZjtFQUFrQ2dCLGlCQUFZIn0=
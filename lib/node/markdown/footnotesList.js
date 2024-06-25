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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var FootnotesListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(FootnotesListMarkdownNode, MarkdownNode);
    var _super = _create_super(FootnotesListMarkdownNode);
    function FootnotesListMarkdownNode(ruleName, childNodes, opacity, precedence, domElement, start) {
        _class_call_check(this, FootnotesListMarkdownNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes, opacity, precedence, domElement);
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
            key: "fromFootnotesItemReplacementsAndStart",
            value: function fromFootnotesItemReplacementsAndStart(footnotesItemReplacements, start) {
                var footnotesListMarkdownNode = null;
                var footnotesItemReplacementsLength = footnotesItemReplacements.length;
                if (footnotesItemReplacementsLength > 0) {
                    var ruleName = _ruleNames.FOOTNOTES_LIST_RULE_NAME, childNodes = footnotesItemReplacements.map(function(footnotesItemReplacement) {
                        var footnotesItemReplacementMode = footnotesItemReplacement.getFootnotesItemMarkdownNode(), childNode = footnotesItemReplacementMode; ///
                        return childNode;
                    }), opacity = null;
                    footnotesListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(FootnotesListMarkdownNode, ruleName, childNodes, opacity, start);
                }
                return footnotesListMarkdownNode;
            }
        }
    ]);
    return FootnotesListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgU1RBUlRfQVRUUklCVVRFX05BTUUgfSBmcm9tIFwiLi4vLi4vYXR0cmlidXRlTmFtZXNcIjtcbmltcG9ydCB7IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBzdGFydCkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgfVxuXG4gIGdldFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0O1xuICB9XG5cbiAgYXR0cmlidXRlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IFNUQVJUX0FUVFJJQlVURV9OQU1FO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWU7XG4gIH1cblxuICBhdHRyaWJ1dGVWYWx1ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSB0aGlzLnN0YXJ0OyAgLy8vXG5cbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuc3RhcnQpOyB9XG5cbiAgc3RhdGljIGZyb21Gb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzQW5kU3RhcnQoZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cywgc3RhcnQpIHtcbiAgICBsZXQgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRzTGVuZ3RoID0gZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAoZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50c0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gRk9PVE5PVEVTX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9IGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMubWFwKChmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50TW9kZSA9IGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudC5nZXRGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudE1vZGU7IC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG9wYWNpdHkgPSBudWxsO1xuXG4gICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBzdGFydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJkb21FbGVtZW50Iiwic3RhcnQiLCJnZXRTdGFydCIsImF0dHJpYnV0ZU5hbWUiLCJjb250ZXh0IiwiU1RBUlRfQVRUUklCVVRFX05BTUUiLCJhdHRyaWJ1dGVWYWx1ZSIsImNsb25lIiwiZnJvbUZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHNBbmRTdGFydCIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50c0xlbmd0aCIsImxlbmd0aCIsIkZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSIsIm1hcCIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudE1vZGUiLCJnZXRGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIiwiY2hpbGROb2RlIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OytEQUxJOzhCQUVZO3lCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBQSxBQUFNQSwwQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSwwQkFDUEMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLEtBQUs7Z0NBRHJETjs7a0NBRVhDLFVBQVVDLFlBQVlDLFNBQVNDLFlBQVlDO1FBRWpELE1BQUtDLEtBQUssR0FBR0E7OztrQkFKSU47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsT0FBTztnQkFDbkIsSUFBTUQsZ0JBQWdCRSxvQ0FBb0I7Z0JBRTFDLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUYsT0FBTztnQkFDcEIsSUFBTUUsaUJBQWlCLElBQUksQ0FBQ0wsS0FBSyxFQUFHLEdBQUc7Z0JBRXZDLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVUsT0FBTyx1QkF2QkVaLHNDQXVCSVksU0FBTixJQUFLLGFBQU8sSUFBSSxDQUFDTixLQUFLO1lBQUc7Ozs7WUFFbkNPLEtBQUFBO21CQUFQLFNBQU9BLHNDQUFzQ0MseUJBQXlCLEVBQUVSLEtBQUs7Z0JBQzNFLElBQUlTLDRCQUE0QjtnQkFFaEMsSUFBTUMsa0NBQWtDRiwwQkFBMEJHLE1BQU07Z0JBRXhFLElBQUlELGtDQUFrQyxHQUFHO29CQUN2QyxJQUFNZixXQUFXaUIsbUNBQXdCLEVBQ25DaEIsYUFBYVksMEJBQTBCSyxHQUFHLENBQUMsU0FBQ0M7d0JBQzFDLElBQU1DLCtCQUErQkQseUJBQXlCRSw0QkFBNEIsSUFDcEZDLFlBQVlGLDhCQUE4QixHQUFHO3dCQUVuRCxPQUFPRTtvQkFDVCxJQUNBcEIsVUFBVTtvQkFFaEJZLDRCQUE0QlMsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBeEMxRHpCLDJCQXdDc0ZDLFVBQVVDLFlBQVlDLFNBQVNHO2dCQUN0STtnQkFFQSxPQUFPUztZQUNUOzs7V0E1Q21CZjtFQUFrQ3dCLGlCQUFZIn0=
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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpc3QvZm9vdG5vdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL21hcmtkb3duXCI7XG5cbmltcG9ydCB7IEZPT1ROT1RFU19MSVNUX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50LCBzdGFydCkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgfVxuXG4gIGdldFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0O1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLnN0YXJ0KTsgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBGT09UTk9URVNfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0ID0gbnVsbCxcbiAgICAgICAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBzdGFydCk7XG5cbiAgICBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLnNldERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50c0FuZFN0YXJ0KGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMsIHN0YXJ0KSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBGT09UTk9URVNfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMubWFwKChmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudE1vZGUgPSBmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQuZ2V0Rm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgICAgICAgICAgY2hpbGROb2RlID0gZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50TW9kZTsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgc3RhcnQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJkb21FbGVtZW50Iiwic3RhcnQiLCJnZXRTdGFydCIsImNsb25lIiwiZnJvbURPTUVsZW1lbnQiLCJGT09UTk9URVNfTElTVF9SVUxFX05BTUUiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJzZXRET01FbGVtZW50IiwiZnJvbUZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHNBbmRTdGFydCIsImZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudHMiLCJtYXAiLCJmb290bm90ZXNJdGVtUmVwbGFjZW1lbnQiLCJmb290bm90ZXNJdGVtUmVwbGFjZW1lbnRNb2RlIiwiZ2V0Rm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSIsImNoaWxkTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkk7eUJBRWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBQSxBQUFNQSwwQ0FBTjtjQUFNQTthQUFBQSwwQkFDUEMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLEtBQUs7Z0NBRHJETjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBVUM7WUFBWUM7WUFBU0M7WUFBWUM7O1FBRWpELE1BQUtDLEtBQUssR0FBR0E7OztrQkFKSU47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVUsT0FBTyx1QkFYRVIsc0NBV0lRLFNBQU4sSUFBSyxhQUFPLElBQUksQ0FBQ0YsS0FBSztZQUFHOzs7O1lBRW5DRyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlSixVQUFVO2dCQUM5QixJQUFNSixXQUFXUyxtQ0FBd0IsRUFDbkNSLGFBQWEsRUFBRSxFQUNmQyxVQUFVLE1BQ1ZHLFFBQVEsTUFDUkssNEJBQTRCQyxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0FsQjlEYiwyQkFrQjBGQyxVQUFVQyxZQUFZQyxTQUFTRztnQkFFMUlLLDBCQUEwQkcsYUFBYSxDQUFDVDtnQkFFeEMsT0FBT007WUFDVDs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLHNDQUFzQ0MseUJBQXlCLEVBQUVWLEtBQUs7Z0JBQzNFLElBQU1MLFdBQVdTLG1DQUF3QixFQUNuQ1IsYUFBYWMsMEJBQTBCQyxHQUFHLENBQUMsU0FBQ0M7b0JBQzFDLElBQU1DLCtCQUErQkQseUJBQXlCRSw0QkFBNEIsSUFDcEZDLFlBQVlGLDhCQUE4QixHQUFHO29CQUVuRCxPQUFPRTtnQkFDVCxJQUNBbEIsVUFBVSxNQUNWUSw0QkFBNEJDLGlCQUFZLENBQUNDLGdDQUFnQyxDQWxDOURiLDJCQWtDMEZDLFVBQVVDLFlBQVlDLFNBQVNHO2dCQUUxSSxPQUFPSztZQUNUOzs7V0FyQ21CWDtFQUFrQ1ksaUJBQVkifQ==
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteItemMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/anchor"));
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var FootnoteItemMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(FootnoteItemMarkdownNode, MarkdownNode);
    var _super = _create_super(FootnoteItemMarkdownNode);
    function FootnoteItemMarkdownNode() {
        _class_call_check(this, FootnoteItemMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(FootnoteItemMarkdownNode, [
        {
            key: "identifier",
            value: function identifier(context) {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), anchorMarkdownNode = firstChildNode, identifier = anchorMarkdownNode.getIdentifier();
                return identifier;
            }
        }
    ], [
        {
            key: "fromFootnoteMarkdownNodeAndIdentifier",
            value: function fromFootnoteMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier) {
                var anchorMarkdownNode = _anchor.default.fromIdentifier(identifier), footnoteMarkdownNodeChildNodes = footnoteMarkdownNode.getChildNodes(), secondFootnoteMarkdownNodeChildNode = second(footnoteMarkdownNodeChildNodes), paragraphMarkdownNode = secondFootnoteMarkdownNodeChildNode, ruleName = _ruleNames.FOOTNOTE_ITEM_RULE_NAME, childNodes = [
                    anchorMarkdownNode,
                    paragraphMarkdownNode
                ], opacity = false, footnoteItemMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(FootnoteItemMarkdownNode, ruleName, childNodes, opacity);
                return footnoteItemMarkdownNode;
            }
        }
    ]);
    return FootnoteItemMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3RlSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBBbmNob3JNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vYW5jaG9yXCI7XG5cbmltcG9ydCB7IEZPT1ROT1RFX0lURU1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBpZGVudGlmaWVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBhbmNob3JNYXJrZG93bk5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIGlkZW50aWZpZXIgPSBhbmNob3JNYXJrZG93bk5vZGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllcihmb290bm90ZU1hcmtkb3duTm9kZSwgaWRlbnRpZmllcikge1xuICAgIGNvbnN0IGFuY2hvck1hcmtkb3duTm9kZSA9IEFuY2hvck1hcmtkb3duTm9kZS5mcm9tSWRlbnRpZmllcihpZGVudGlmaWVyKSxcbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZUNoaWxkTm9kZXMgPSBmb290bm90ZU1hcmtkb3duTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kRm9vdG5vdGVNYXJrZG93bk5vZGVDaGlsZE5vZGUgPSBzZWNvbmQoZm9vdG5vdGVNYXJrZG93bk5vZGVDaGlsZE5vZGVzKSxcbiAgICAgICAgICBwYXJhZ3JhcGhNYXJrZG93bk5vZGUgPSBzZWNvbmRGb290bm90ZU1hcmtkb3duTm9kZUNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gRk9PVE5PVEVfSVRFTV9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSxcbiAgICAgICAgICAgIHBhcmFncmFwaE1hcmtkb3duTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgb3BhY2l0eSA9IGZhbHNlLFxuICAgICAgICAgIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcblxuICAgIHJldHVybiBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiaWRlbnRpZmllciIsImNvbnRleHQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiYW5jaG9yTWFya2Rvd25Ob2RlIiwiZ2V0SWRlbnRpZmllciIsImZyb21Gb290bm90ZU1hcmtkb3duTm9kZUFuZElkZW50aWZpZXIiLCJmb290bm90ZU1hcmtkb3duTm9kZSIsIkFuY2hvck1hcmtkb3duTm9kZSIsImZyb21JZGVudGlmaWVyIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVDaGlsZE5vZGVzIiwic2Vjb25kRm9vdG5vdGVNYXJrZG93bk5vZGVDaGlsZE5vZGUiLCJwYXJhZ3JhcGhNYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsIkZPT1ROT1RFX0lURU1fUlVMRV9OQU1FIiwib3BhY2l0eSIsImZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lCQVRVOytEQUVOOzZEQUNNO3lCQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQVFDLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUEsSUFBQSxBQUFNSCx5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsT0FBTztnQkFDaEIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGlCQUFpQlAsTUFBTUssYUFDdkJHLHFCQUFxQkQsZ0JBQ3JCSixhQUFhSyxtQkFBbUJDLGFBQWE7Z0JBRW5ELE9BQU9OO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0Esc0NBQXNDQyxvQkFBb0IsRUFBRVIsVUFBVTtnQkFDM0UsSUFBTUsscUJBQXFCSSxlQUFrQixDQUFDQyxjQUFjLENBQUNWLGFBQ3ZEVyxpQ0FBaUNILHFCQUFxQkwsYUFBYSxJQUNuRVMsc0NBQXNDYixPQUFPWSxpQ0FDN0NFLHdCQUF3QkQscUNBQ3hCRSxXQUFXQyxrQ0FBdUIsRUFDbENiLGFBQWE7b0JBQ1hHO29CQUNBUTtpQkFDRCxFQUNERyxVQUFVLE9BQ1ZDLDJCQUEyQkMsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBckI3RHZCLDBCQXFCd0ZrQixVQUFVWixZQUFZYztnQkFFL0gsT0FBT0M7WUFDVDs7O1dBeEJtQnJCO0VBQWlDc0IsaUJBQVkifQ==
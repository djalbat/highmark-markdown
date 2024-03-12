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
            key: "getIdentifier",
            value: function getIdentifier() {
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
                ], ambiguous = false, footnoteItemMarkdownNode = _markdown.default.fromRuleNameChildNodesAndAmbiguous(FootnoteItemMarkdownNode, ruleName, childNodes, ambiguous);
                return footnoteItemMarkdownNode;
            }
        }
    ]);
    return FootnoteItemMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2Zvb3Rub3RlSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBBbmNob3JNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vYW5jaG9yXCI7XG5cbmltcG9ydCB7IEZPT1ROT1RFX0lURU1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgaWRlbnRpZmllciA9IGFuY2hvck1hcmtkb3duTm9kZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRm9vdG5vdGVNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyKGZvb3Rub3RlTWFya2Rvd25Ob2RlLCBpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgYW5jaG9yTWFya2Rvd25Ob2RlID0gQW5jaG9yTWFya2Rvd25Ob2RlLmZyb21JZGVudGlmaWVyKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlQ2hpbGROb2RlcyA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRGb290bm90ZU1hcmtkb3duTm9kZUNoaWxkTm9kZSA9IHNlY29uZChmb290bm90ZU1hcmtkb3duTm9kZUNoaWxkTm9kZXMpLFxuICAgICAgICAgIHBhcmFncmFwaE1hcmtkb3duTm9kZSA9IHNlY29uZEZvb3Rub3RlTWFya2Rvd25Ob2RlQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBGT09UTk9URV9JVEVNX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAgICAgYW5jaG9yTWFya2Rvd25Ob2RlLFxuICAgICAgICAgICAgcGFyYWdyYXBoTWFya2Rvd25Ob2RlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJnZXRJZGVudGlmaWVyIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImFuY2hvck1hcmtkb3duTm9kZSIsImlkZW50aWZpZXIiLCJmcm9tRm9vdG5vdGVNYXJrZG93bk5vZGVBbmRJZGVudGlmaWVyIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJBbmNob3JNYXJrZG93bk5vZGUiLCJmcm9tSWRlbnRpZmllciIsImZvb3Rub3RlTWFya2Rvd25Ob2RlQ2hpbGROb2RlcyIsInNlY29uZEZvb3Rub3RlTWFya2Rvd25Ob2RlQ2hpbGROb2RlIiwicGFyYWdyYXBoTWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJGT09UTk9URV9JVEVNX1JVTEVfTkFNRSIsImFtYmlndW91cyIsImZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lCQVRVOytEQUVOOzZEQUNNO3lCQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQVFDLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUEsSUFBQSxBQUFNSCx5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGlCQUFpQk4sTUFBTUksYUFDdkJHLHFCQUFxQkQsZ0JBQ3JCRSxhQUFhRCxtQkFBbUJKLGFBQWE7Z0JBRW5ELE9BQU9LO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0NBQXNDQyxvQkFBb0IsRUFBRUYsVUFBVTtnQkFDM0UsSUFBTUQscUJBQXFCSSxlQUFrQixDQUFDQyxjQUFjLENBQUNKLGFBQ3ZESyxpQ0FBaUNILHFCQUFxQkwsYUFBYSxJQUNuRVMsc0NBQXNDWixPQUFPVyxpQ0FDN0NFLHdCQUF3QkQscUNBQ3hCRSxXQUFXQyxrQ0FBdUIsRUFDbENiLGFBQWE7b0JBQ1hHO29CQUNBUTtpQkFDRCxFQUNERyxZQUFZLE9BQ1pDLDJCQUEyQkMsaUJBQVksQ0FBQ0Msa0NBQWtDLENBckIvRHRCLDBCQXFCMEZpQixVQUFVWixZQUFZYztnQkFFakksT0FBT0M7WUFDVDs7O1dBeEJtQnBCO0VBQWlDcUIsaUJBQVkifQ==
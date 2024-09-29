"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsItemMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var ContentsItemMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ContentsItemMarkdownNode, MarkdownNode);
    function ContentsItemMarkdownNode() {
        _class_call_check(this, ContentsItemMarkdownNode);
        return _call_super(this, ContentsItemMarkdownNode, arguments);
    }
    _create_class(ContentsItemMarkdownNode, null, [
        {
            key: "fromReplacements",
            value: function fromReplacements(replacements) {
                var ruleName = _ruleNames.CONTENTS_ITEM_RULE_NAME, childNodes = replacements.map(function(replacement) {
                    var replacementNode = replacement.getNode(), childNode = replacementNode; ///
                    return childNode;
                }), opacity = null, contentsItemMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsItemMarkdownNode, ruleName, childNodes, opacity);
                return contentsItemMarkdownNode;
            }
        }
    ]);
    return ContentsItemMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBDT05URU5UU19JVEVNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNJdGVtTWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgc3RhdGljIGZyb21SZXBsYWNlbWVudHMocmVwbGFjZW1lbnRzKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBDT05URU5UU19JVEVNX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gcmVwbGFjZW1lbnRzLm1hcCgocmVwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZSA9IHJlcGxhY2VtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcblxuICAgIHJldHVybiBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJmcm9tUmVwbGFjZW1lbnRzIiwicmVwbGFjZW1lbnRzIiwicnVsZU5hbWUiLCJDT05URU5UU19JVEVNX1JVTEVfTkFNRSIsImNoaWxkTm9kZXMiLCJtYXAiLCJyZXBsYWNlbWVudCIsInJlcGxhY2VtZW50Tm9kZSIsImdldE5vZGUiLCJjaGlsZE5vZGUiLCJvcGFjaXR5IiwiY29udGVudHNJdGVtTWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytEQUpJO3lCQUVlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEseUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJDLFlBQVk7Z0JBQ2xDLElBQU1DLFdBQVdDLGtDQUF1QixFQUNsQ0MsYUFBYUgsYUFBYUksR0FBRyxDQUFDLFNBQUNDO29CQUM3QixJQUFNQyxrQkFBa0JELFlBQVlFLE9BQU8sSUFDckNDLFlBQVlGLGlCQUFrQixHQUFHO29CQUV2QyxPQUFPRTtnQkFDVCxJQUNBQyxVQUFVLE1BQ1ZDLDJCQUEyQkMsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBVjdEZCwwQkFVd0ZHLFVBQVVFLFlBQVlNO2dCQUUvSCxPQUFPQztZQUNUOzs7V0FibUJaO0VBQWlDYSxpQkFBWSJ9
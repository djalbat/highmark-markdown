"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexListMarkdownNode;
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
var IndexListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(IndexListMarkdownNode, MarkdownNode);
    function IndexListMarkdownNode() {
        _class_call_check(this, IndexListMarkdownNode);
        return _call_super(this, IndexListMarkdownNode, arguments);
    }
    _create_class(IndexListMarkdownNode, null, [
        {
            key: "fromIndexItemReplacements",
            value: function fromIndexItemReplacements(indexItemReplacements) {
                var ruleName = _ruleNames.INDEX_LIST_RULE_NAME, childNodes = indexItemReplacements.map(function(indexItemReplacement) {
                    var indexItemReplacementNode = indexItemReplacement.getIndexItemMarkdownNode(), childNode = indexItemReplacementNode; ///
                    return childNode;
                }), opacity = null, indexListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(IndexListMarkdownNode, ruleName, childNodes, opacity);
                return indexListMarkdownNode;
            }
        }
    ]);
    return IndexListMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpc3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgSU5ERVhfTElTVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4TGlzdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHN0YXRpYyBmcm9tSW5kZXhJdGVtUmVwbGFjZW1lbnRzKGluZGV4SXRlbVJlcGxhY2VtZW50cykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSU5ERVhfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGluZGV4SXRlbVJlcGxhY2VtZW50cy5tYXAoKGluZGV4SXRlbVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleEl0ZW1SZXBsYWNlbWVudE5vZGUgPSBpbmRleEl0ZW1SZXBsYWNlbWVudC5nZXRJbmRleEl0ZW1NYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGluZGV4SXRlbVJlcGxhY2VtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGluZGV4TGlzdE1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShJbmRleExpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcblxuICAgIHJldHVybiBpbmRleExpc3RNYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleExpc3RNYXJrZG93bk5vZGUiLCJmcm9tSW5kZXhJdGVtUmVwbGFjZW1lbnRzIiwiaW5kZXhJdGVtUmVwbGFjZW1lbnRzIiwicnVsZU5hbWUiLCJJTkRFWF9MSVNUX1JVTEVfTkFNRSIsImNoaWxkTm9kZXMiLCJtYXAiLCJpbmRleEl0ZW1SZXBsYWNlbWVudCIsImluZGV4SXRlbVJlcGxhY2VtZW50Tm9kZSIsImdldEluZGV4SXRlbU1hcmtkb3duTm9kZSIsImNoaWxkTm9kZSIsIm9wYWNpdHkiLCJpbmRleExpc3RNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkk7eUJBRVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxxQkFBcUI7Z0JBQ3BELElBQU1DLFdBQVdDLCtCQUFvQixFQUMvQkMsYUFBYUgsc0JBQXNCSSxHQUFHLENBQUMsU0FBQ0M7b0JBQ3RDLElBQU1DLDJCQUEyQkQscUJBQXFCRSx3QkFBd0IsSUFDeEVDLFlBQVlGLDBCQUEyQixHQUFHO29CQUVoRCxPQUFPRTtnQkFDVCxJQUNBQyxVQUFVLE1BQ1ZDLHdCQUF3QkMsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBVjFEZCx1QkFVa0ZHLFVBQVVFLFlBQVlNO2dCQUV6SCxPQUFPQztZQUNUOzs7V0FibUJaO0VBQThCYSxpQkFBWSJ9
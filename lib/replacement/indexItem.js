"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexItemReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _constants = require("../constants");
var _ruleNames = require("../ruleNames");
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
var IndexItemReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(IndexItemReplacement, Replacement);
    function IndexItemReplacement() {
        _class_call_check(this, IndexItemReplacement);
        return _call_super(this, IndexItemReplacement, arguments);
    }
    _create_class(IndexItemReplacement, [
        {
            key: "getIndexItemMarkdownNode",
            value: function getIndexItemMarkdownNode() {
                var node = this.getNode(), indexItemMarkdownNode = node; ///
                return indexItemMarkdownNode;
            }
        }
    ], [
        {
            key: "fromIndexItem",
            value: function fromIndexItem(indexItem, context) {
                var nodeFromTokens = context.nodeFromTokens, tokensFromContent = context.tokensFromContent, wordOrPhrase = indexItem.getWordOrPhrase(), pageNumbers = indexItem.getPageNumbers(), pageNumbersContent = pageNumbers.join(_constants.COMMA), content = "".concat(wordOrPhrase, ",").concat(pageNumbersContent), startRuleName = _ruleNames.INDEX_ITEM_RULE_NAME, tokens = tokensFromContent(content), node = nodeFromTokens(tokens, startRuleName), indexItemReplacement = _replacement.default.fromNodeAndTokens(IndexItemReplacement, node, tokens);
                return indexItemReplacement;
            }
        }
    ]);
    return IndexItemReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmRleEl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcblxuaW1wb3J0IHsgQ09NTUEgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBJTkRFWF9JVEVNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhJdGVtUmVwbGFjZW1lbnQgZXh0ZW5kcyBSZXBsYWNlbWVudCB7XG4gIGdldEluZGV4SXRlbU1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgaW5kZXhJdGVtTWFya2Rvd25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gaW5kZXhJdGVtTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRleEl0ZW0oaW5kZXhJdGVtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBub2RlRnJvbVRva2VucywgdG9rZW5zRnJvbUNvbnRlbnQgfSA9IGNvbnRleHQsXG4gICAgICAgICAgd29yZE9yUGhyYXNlID0gaW5kZXhJdGVtLmdldFdvcmRPclBocmFzZSgpLFxuICAgICAgICAgIHBhZ2VOdW1iZXJzID0gaW5kZXhJdGVtLmdldFBhZ2VOdW1iZXJzKCksXG4gICAgICAgICAgcGFnZU51bWJlcnNDb250ZW50ID0gcGFnZU51bWJlcnMuam9pbihDT01NQSksXG4gICAgICAgICAgY29udGVudCA9IGAke3dvcmRPclBocmFzZX0sJHtwYWdlTnVtYmVyc0NvbnRlbnR9YCxcbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gSU5ERVhfSVRFTV9SVUxFX05BTUUsXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IG5vZGVGcm9tVG9rZW5zKHRva2Vucywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgICAgaW5kZXhJdGVtUmVwbGFjZW1lbnQgPSBSZXBsYWNlbWVudC5mcm9tTm9kZUFuZFRva2VucyhJbmRleEl0ZW1SZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBpbmRleEl0ZW1SZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4SXRlbVJlcGxhY2VtZW50IiwiZ2V0SW5kZXhJdGVtTWFya2Rvd25Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJpbmRleEl0ZW1NYXJrZG93bk5vZGUiLCJmcm9tSW5kZXhJdGVtIiwiaW5kZXhJdGVtIiwiY29udGV4dCIsIm5vZGVGcm9tVG9rZW5zIiwidG9rZW5zRnJvbUNvbnRlbnQiLCJ3b3JkT3JQaHJhc2UiLCJnZXRXb3JkT3JQaHJhc2UiLCJwYWdlTnVtYmVycyIsImdldFBhZ2VOdW1iZXJzIiwicGFnZU51bWJlcnNDb250ZW50Iiwiam9pbiIsIkNPTU1BIiwiY29udGVudCIsInN0YXJ0UnVsZU5hbWUiLCJJTkRFWF9JVEVNX1JVTEVfTkFNRSIsInRva2VucyIsImluZGV4SXRlbVJlcGxhY2VtZW50IiwiUmVwbGFjZW1lbnQiLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7a0VBTEc7eUJBRUY7eUJBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLHdCQUF3QkYsTUFBTSxHQUFHO2dCQUV2QyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRUMsT0FBTztnQkFDckMsSUFBUUMsaUJBQXNDRCxRQUF0Q0MsZ0JBQWdCQyxvQkFBc0JGLFFBQXRCRSxtQkFDbEJDLGVBQWVKLFVBQVVLLGVBQWUsSUFDeENDLGNBQWNOLFVBQVVPLGNBQWMsSUFDdENDLHFCQUFxQkYsWUFBWUcsSUFBSSxDQUFDQyxnQkFBSyxHQUMzQ0MsVUFBVSxBQUFDLEdBQWtCSCxPQUFoQkosY0FBYSxLQUFzQixPQUFuQkkscUJBQzdCSSxnQkFBZ0JDLCtCQUFvQixFQUNwQ0MsU0FBU1gsa0JBQWtCUSxVQUMzQmYsT0FBT00sZUFBZVksUUFBUUYsZ0JBQzlCRyx1QkFBdUJDLG9CQUFXLENBQUNDLGlCQUFpQixDQWpCekN2QixzQkFpQmdFRSxNQUFNa0I7Z0JBRXZGLE9BQU9DO1lBQ1Q7OztXQXBCbUJyQjtFQUE2QnNCLG9CQUFXIn0=
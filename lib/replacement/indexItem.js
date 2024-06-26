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
var IndexItemReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(IndexItemReplacement, Replacement);
    var _super = _create_super(IndexItemReplacement);
    function IndexItemReplacement() {
        _class_call_check(this, IndexItemReplacement);
        return _super.apply(this, arguments);
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
            key: "fromEntryAndPageNumbers",
            value: function fromEntryAndPageNumbers(entry, pageNumbers, context) {
                var tokensFromContent = context.tokensFromContent, nodeFromTokensAndStartRuleName = context.nodeFromTokensAndStartRuleName, entryContent = entry, pageNumbersContent = pageNumbers.join(_constants.COMMA), content = "".concat(entryContent, " ").concat(pageNumbersContent), startRuleName = _ruleNames.INDEX_ITEM_RULE_NAME, tokens = tokensFromContent(content), node = nodeFromTokensAndStartRuleName(tokens, startRuleName), indexItemReplacement = _replacement.default.fromNodeAndTokens(IndexItemReplacement, node, tokens);
                return indexItemReplacement;
            }
        }
    ]);
    return IndexItemReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmRleEl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcblxuaW1wb3J0IHsgQ09NTUEgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBJTkRFWF9JVEVNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhJdGVtUmVwbGFjZW1lbnQgZXh0ZW5kcyBSZXBsYWNlbWVudCB7XG4gIGdldEluZGV4SXRlbU1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgaW5kZXhJdGVtTWFya2Rvd25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gaW5kZXhJdGVtTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FbnRyeUFuZFBhZ2VOdW1iZXJzKGVudHJ5LCBwYWdlTnVtYmVycywgY29udGV4dCkge1xuICAgIGNvbnN0IHsgdG9rZW5zRnJvbUNvbnRlbnQsIG5vZGVGcm9tVG9rZW5zQW5kU3RhcnRSdWxlTmFtZSB9ID0gY29udGV4dCxcbiAgICAgICAgICBlbnRyeUNvbnRlbnQgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgcGFnZU51bWJlcnNDb250ZW50ID0gcGFnZU51bWJlcnMuam9pbihDT01NQSksXG4gICAgICAgICAgY29udGVudCA9IGAke2VudHJ5Q29udGVudH0gJHtwYWdlTnVtYmVyc0NvbnRlbnR9YCxcbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gSU5ERVhfSVRFTV9SVUxFX05BTUUsXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IG5vZGVGcm9tVG9rZW5zQW5kU3RhcnRSdWxlTmFtZSh0b2tlbnMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIGluZGV4SXRlbVJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoSW5kZXhJdGVtUmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gaW5kZXhJdGVtUmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleEl0ZW1SZXBsYWNlbWVudCIsImdldEluZGV4SXRlbU1hcmtkb3duTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiaW5kZXhJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUVudHJ5QW5kUGFnZU51bWJlcnMiLCJlbnRyeSIsInBhZ2VOdW1iZXJzIiwiY29udGV4dCIsInRva2Vuc0Zyb21Db250ZW50Iiwibm9kZUZyb21Ub2tlbnNBbmRTdGFydFJ1bGVOYW1lIiwiZW50cnlDb250ZW50IiwicGFnZU51bWJlcnNDb250ZW50Iiwiam9pbiIsIkNPTU1BIiwiY29udGVudCIsInN0YXJ0UnVsZU5hbWUiLCJJTkRFWF9JVEVNX1JVTEVfTkFNRSIsInRva2VucyIsImluZGV4SXRlbVJlcGxhY2VtZW50IiwiUmVwbGFjZW1lbnQiLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7a0VBTEc7eUJBRUY7eUJBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLHdCQUF3QkYsTUFBTSxHQUFHO2dCQUV2QyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHdCQUF3QkMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLE9BQU87Z0JBQ3hELElBQVFDLG9CQUFzREQsUUFBdERDLG1CQUFtQkMsaUNBQW1DRixRQUFuQ0UsZ0NBQ3JCQyxlQUFlTCxPQUNmTSxxQkFBcUJMLFlBQVlNLElBQUksQ0FBQ0MsZ0JBQUssR0FDM0NDLFVBQVUsQUFBQyxHQUFrQkgsT0FBaEJELGNBQWEsS0FBc0IsT0FBbkJDLHFCQUM3QkksZ0JBQWdCQywrQkFBb0IsRUFDcENDLFNBQVNULGtCQUFrQk0sVUFDM0JiLE9BQU9RLCtCQUErQlEsUUFBUUYsZ0JBQzlDRyx1QkFBdUJDLG9CQUFXLENBQUNDLGlCQUFpQixDQWhCekNyQixzQkFnQmdFRSxNQUFNZ0I7Z0JBRXZGLE9BQU9DO1lBQ1Q7OztXQW5CbUJuQjtFQUE2Qm9CLG9CQUFXIn0=
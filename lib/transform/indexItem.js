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
var _ = /*#__PURE__*/ _interop_require_default(require("./"));
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
                var nodeFromTokens = context.nodeFromTokens, tokensFromContent = context.tokensFromContent, wordOrPhrase = indexItem.getWordOrPhrase(), pageNumbers = indexItem.getPageNumbers(), pageNumbersContent = pageNumbers.join(_constants.COMMA), content = "".concat(wordOrPhrase, ",").concat(pageNumbersContent), startRuleName = _ruleNames.INDEX_ITEM_RULE_NAME, tokens = tokensFromContent(content), node = nodeFromTokens(tokens, startRuleName), indexItemReplacement = _.default.fromNodeAndTokens(IndexItemReplacement, node, tokens);
                return indexItemReplacement;
            }
        }
    ]);
    return IndexItemReplacement;
}(_.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5kZXhJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4vXCI7XG5cbmltcG9ydCB7IENPTU1BIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSU5ERVhfSVRFTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SXRlbVJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBnZXRJbmRleEl0ZW1NYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGluZGV4SXRlbU1hcmtkb3duTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGluZGV4SXRlbU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kZXhJdGVtKGluZGV4SXRlbSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbm9kZUZyb21Ub2tlbnMsIHRva2Vuc0Zyb21Db250ZW50IH0gPSBjb250ZXh0LFxuICAgICAgICAgIHdvcmRPclBocmFzZSA9IGluZGV4SXRlbS5nZXRXb3JkT3JQaHJhc2UoKSxcbiAgICAgICAgICBwYWdlTnVtYmVycyA9IGluZGV4SXRlbS5nZXRQYWdlTnVtYmVycygpLFxuICAgICAgICAgIHBhZ2VOdW1iZXJzQ29udGVudCA9IHBhZ2VOdW1iZXJzLmpvaW4oQ09NTUEpLFxuICAgICAgICAgIGNvbnRlbnQgPSBgJHt3b3JkT3JQaHJhc2V9LCR7cGFnZU51bWJlcnNDb250ZW50fWAsXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IElOREVYX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBub2RlRnJvbVRva2Vucyh0b2tlbnMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIGluZGV4SXRlbVJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoSW5kZXhJdGVtUmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gaW5kZXhJdGVtUmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleEl0ZW1SZXBsYWNlbWVudCIsImdldEluZGV4SXRlbU1hcmtkb3duTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiaW5kZXhJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUluZGV4SXRlbSIsImluZGV4SXRlbSIsImNvbnRleHQiLCJub2RlRnJvbVRva2VucyIsInRva2Vuc0Zyb21Db250ZW50Iiwid29yZE9yUGhyYXNlIiwiZ2V0V29yZE9yUGhyYXNlIiwicGFnZU51bWJlcnMiLCJnZXRQYWdlTnVtYmVycyIsInBhZ2VOdW1iZXJzQ29udGVudCIsImpvaW4iLCJDT01NQSIsImNvbnRlbnQiLCJzdGFydFJ1bGVOYW1lIiwiSU5ERVhfSVRFTV9SVUxFX05BTUUiLCJ0b2tlbnMiLCJpbmRleEl0ZW1SZXBsYWNlbWVudCIsIlJlcGxhY2VtZW50IiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3VEQUxHO3lCQUVGO3lCQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLHdCQUF3QkYsTUFBTSxHQUFHO2dCQUV2QyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRUMsT0FBTztnQkFDckMsSUFBUUMsaUJBQXNDRCxRQUF0Q0MsZ0JBQWdCQyxvQkFBc0JGLFFBQXRCRSxtQkFDbEJDLGVBQWVKLFVBQVVLLGVBQWUsSUFDeENDLGNBQWNOLFVBQVVPLGNBQWMsSUFDdENDLHFCQUFxQkYsWUFBWUcsSUFBSSxDQUFDQyxnQkFBSyxHQUMzQ0MsVUFBVSxBQUFDLEdBQWtCSCxPQUFoQkosY0FBYSxLQUFzQixPQUFuQkkscUJBQzdCSSxnQkFBZ0JDLCtCQUFvQixFQUNwQ0MsU0FBU1gsa0JBQWtCUSxVQUMzQmYsT0FBT00sZUFBZVksUUFBUUYsZ0JBQzlCRyx1QkFBdUJDLFNBQVcsQ0FBQ0MsaUJBQWlCLENBakJ6Q3ZCLHNCQWlCZ0VFLE1BQU1rQjtnQkFFdkYsT0FBT0M7WUFDVDs7O1dBcEJtQnJCO0VBQTZCc0IsU0FBVyJ9
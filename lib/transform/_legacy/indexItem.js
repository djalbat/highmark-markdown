"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexItemTransform;
    }
});
var _occamdom = require("occam-dom");
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
var IndexItemTransform = /*#__PURE__*/ function(Transform) {
    _inherits(IndexItemTransform, Transform);
    function IndexItemTransform() {
        _class_call_check(this, IndexItemTransform);
        return _call_super(this, IndexItemTransform, arguments);
    }
    _create_class(IndexItemTransform, [
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
                var nodeFromTokens = context.nodeFromTokens, tokensFromContent = context.tokensFromContent, wordOrPhrase = indexItem.getWordOrPhrase(), pageNumbers = indexItem.getPageNumbers(), pageNumbersContent = pageNumbers.join(_constants.COMMA), content = "".concat(wordOrPhrase, ",").concat(pageNumbersContent), startRuleName = _ruleNames.INDEX_ITEM_RULE_NAME, tokens = tokensFromContent(content), node = nodeFromTokens(tokens, startRuleName), indexItemTransform = _occamdom.Transform.fromNodeAndTokens(IndexItemTransform, node, tokens);
                return indexItemTransform;
            }
        }
    ]);
    return IndexItemTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vX2xlZ2FjeS9pbmRleEl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IHsgQ09NTUEgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBJTkRFWF9JVEVNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhJdGVtVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgZ2V0SW5kZXhJdGVtTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBpbmRleEl0ZW1NYXJrZG93bk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBpbmRleEl0ZW1NYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGV4SXRlbShpbmRleEl0ZW0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5vZGVGcm9tVG9rZW5zLCB0b2tlbnNGcm9tQ29udGVudCB9ID0gY29udGV4dCxcbiAgICAgICAgICB3b3JkT3JQaHJhc2UgPSBpbmRleEl0ZW0uZ2V0V29yZE9yUGhyYXNlKCksXG4gICAgICAgICAgcGFnZU51bWJlcnMgPSBpbmRleEl0ZW0uZ2V0UGFnZU51bWJlcnMoKSxcbiAgICAgICAgICBwYWdlTnVtYmVyc0NvbnRlbnQgPSBwYWdlTnVtYmVycy5qb2luKENPTU1BKSxcbiAgICAgICAgICBjb250ZW50ID0gYCR7d29yZE9yUGhyYXNlfSwke3BhZ2VOdW1iZXJzQ29udGVudH1gLFxuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBJTkRFWF9JVEVNX1JVTEVfTkFNRSxcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gbm9kZUZyb21Ub2tlbnModG9rZW5zLCBzdGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBpbmRleEl0ZW1UcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoSW5kZXhJdGVtVHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGluZGV4SXRlbVRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4SXRlbVRyYW5zZm9ybSIsImdldEluZGV4SXRlbU1hcmtkb3duTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiaW5kZXhJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUluZGV4SXRlbSIsImluZGV4SXRlbSIsImNvbnRleHQiLCJub2RlRnJvbVRva2VucyIsInRva2Vuc0Zyb21Db250ZW50Iiwid29yZE9yUGhyYXNlIiwiZ2V0V29yZE9yUGhyYXNlIiwicGFnZU51bWJlcnMiLCJnZXRQYWdlTnVtYmVycyIsInBhZ2VOdW1iZXJzQ29udGVudCIsImpvaW4iLCJDT01NQSIsImNvbnRlbnQiLCJzdGFydFJ1bGVOYW1lIiwiSU5ERVhfSVRFTV9SVUxFX05BTUUiLCJ0b2tlbnMiLCJpbmRleEl0ZW1UcmFuc2Zvcm0iLCJUcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7d0JBTEs7eUJBRUo7eUJBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQUEsQUFBTUEsbUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLHdCQUF3QkYsTUFBTSxHQUFHO2dCQUV2QyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRUMsT0FBTztnQkFDckMsSUFBUUMsaUJBQXNDRCxRQUF0Q0MsZ0JBQWdCQyxvQkFBc0JGLFFBQXRCRSxtQkFDbEJDLGVBQWVKLFVBQVVLLGVBQWUsSUFDeENDLGNBQWNOLFVBQVVPLGNBQWMsSUFDdENDLHFCQUFxQkYsWUFBWUcsSUFBSSxDQUFDQyxnQkFBSyxHQUMzQ0MsVUFBVSxBQUFDLEdBQWtCSCxPQUFoQkosY0FBYSxLQUFzQixPQUFuQkkscUJBQzdCSSxnQkFBZ0JDLCtCQUFvQixFQUNwQ0MsU0FBU1gsa0JBQWtCUSxVQUMzQmYsT0FBT00sZUFBZVksUUFBUUYsZ0JBQzlCRyxxQkFBcUJDLG1CQUFTLENBQUNDLGlCQUFpQixDQWpCckN2QixvQkFpQjBERSxNQUFNa0I7Z0JBRWpGLE9BQU9DO1lBQ1Q7OztXQXBCbUJyQjtFQUEyQnNCLG1CQUFTIn0=
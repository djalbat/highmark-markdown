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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5kZXhJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCB7IENPTU1BIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSU5ERVhfSVRFTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SXRlbVRyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGdldEluZGV4SXRlbU1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgaW5kZXhJdGVtTWFya2Rvd25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gaW5kZXhJdGVtTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRleEl0ZW0oaW5kZXhJdGVtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBub2RlRnJvbVRva2VucywgdG9rZW5zRnJvbUNvbnRlbnQgfSA9IGNvbnRleHQsXG4gICAgICAgICAgd29yZE9yUGhyYXNlID0gaW5kZXhJdGVtLmdldFdvcmRPclBocmFzZSgpLFxuICAgICAgICAgIHBhZ2VOdW1iZXJzID0gaW5kZXhJdGVtLmdldFBhZ2VOdW1iZXJzKCksXG4gICAgICAgICAgcGFnZU51bWJlcnNDb250ZW50ID0gcGFnZU51bWJlcnMuam9pbihDT01NQSksXG4gICAgICAgICAgY29udGVudCA9IGAke3dvcmRPclBocmFzZX0sJHtwYWdlTnVtYmVyc0NvbnRlbnR9YCxcbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gSU5ERVhfSVRFTV9SVUxFX05BTUUsXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IG5vZGVGcm9tVG9rZW5zKHRva2Vucywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgICAgaW5kZXhJdGVtVHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKEluZGV4SXRlbVRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBpbmRleEl0ZW1UcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleEl0ZW1UcmFuc2Zvcm0iLCJnZXRJbmRleEl0ZW1NYXJrZG93bk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImluZGV4SXRlbU1hcmtkb3duTm9kZSIsImZyb21JbmRleEl0ZW0iLCJpbmRleEl0ZW0iLCJjb250ZXh0Iiwibm9kZUZyb21Ub2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsIndvcmRPclBocmFzZSIsImdldFdvcmRPclBocmFzZSIsInBhZ2VOdW1iZXJzIiwiZ2V0UGFnZU51bWJlcnMiLCJwYWdlTnVtYmVyc0NvbnRlbnQiLCJqb2luIiwiQ09NTUEiLCJjb250ZW50Iiwic3RhcnRSdWxlTmFtZSIsIklOREVYX0lURU1fUlVMRV9OQU1FIiwidG9rZW5zIiwiaW5kZXhJdGVtVHJhbnNmb3JtIiwiVHJhbnNmb3JtIiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3dCQUxLO3lCQUVKO3lCQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFBLEFBQU1BLG1DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyx3QkFBd0JGLE1BQU0sR0FBRztnQkFFdkMsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVDLE9BQU87Z0JBQ3JDLElBQVFDLGlCQUFzQ0QsUUFBdENDLGdCQUFnQkMsb0JBQXNCRixRQUF0QkUsbUJBQ2xCQyxlQUFlSixVQUFVSyxlQUFlLElBQ3hDQyxjQUFjTixVQUFVTyxjQUFjLElBQ3RDQyxxQkFBcUJGLFlBQVlHLElBQUksQ0FBQ0MsZ0JBQUssR0FDM0NDLFVBQVUsQUFBQyxHQUFrQkgsT0FBaEJKLGNBQWEsS0FBc0IsT0FBbkJJLHFCQUM3QkksZ0JBQWdCQywrQkFBb0IsRUFDcENDLFNBQVNYLGtCQUFrQlEsVUFDM0JmLE9BQU9NLGVBQWVZLFFBQVFGLGdCQUM5QkcscUJBQXFCQyxtQkFBUyxDQUFDQyxpQkFBaUIsQ0FqQnJDdkIsb0JBaUIwREUsTUFBTWtCO2dCQUVqRixPQUFPQztZQUNUOzs7V0FwQm1CckI7RUFBMkJzQixtQkFBUyJ9
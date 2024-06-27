"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexHeadingReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
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
var IndexHeadingReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(IndexHeadingReplacement, Replacement);
    var _super = _create_super(IndexHeadingReplacement);
    function IndexHeadingReplacement() {
        _class_call_check(this, IndexHeadingReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(IndexHeadingReplacement, null, [
        {
            key: "fromLetter",
            value: function fromLetter(letter, context) {
                var nodeFromTokens = context.nodeFromTokens, tokensFromContent = context.tokensFromContent, startRuleName = _ruleNames.INDEX_HEADING_RULE_NAME, content = "".concat(letter), tokens = tokensFromContent(content), node = nodeFromTokens(tokens, startRuleName), indexHeadingReplacement = _replacement.default.fromNodeAndTokens(IndexHeadingReplacement, node, tokens);
                return indexHeadingReplacement;
            }
        }
    ]);
    return IndexHeadingReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmRleEhlYWRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcblxuaW1wb3J0IHsgSU5ERVhfSEVBRElOR19SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SGVhZGluZ1JlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBzdGF0aWMgZnJvbUxldHRlcihsZXR0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5vZGVGcm9tVG9rZW5zLCB0b2tlbnNGcm9tQ29udGVudCB9ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBJTkRFWF9IRUFESU5HX1JVTEVfTkFNRSxcbiAgICAgICAgICBjb250ZW50ID0gYCR7bGV0dGVyfWAsXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IG5vZGVGcm9tVG9rZW5zKHRva2Vucywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgICAgaW5kZXhIZWFkaW5nUmVwbGFjZW1lbnQgPSBSZXBsYWNlbWVudC5mcm9tTm9kZUFuZFRva2VucyhJbmRleEhlYWRpbmdSZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBpbmRleEhlYWRpbmdSZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4SGVhZGluZ1JlcGxhY2VtZW50IiwiZnJvbUxldHRlciIsImxldHRlciIsImNvbnRleHQiLCJub2RlRnJvbVRva2VucyIsInRva2Vuc0Zyb21Db250ZW50Iiwic3RhcnRSdWxlTmFtZSIsIklOREVYX0hFQURJTkdfUlVMRV9OQU1FIiwiY29udGVudCIsInRva2VucyIsIm5vZGUiLCJpbmRleEhlYWRpbmdSZXBsYWNlbWVudCIsIlJlcGxhY2VtZW50IiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpHO3lCQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLHdDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsV0FBV0MsTUFBTSxFQUFFQyxPQUFPO2dCQUMvQixJQUFRQyxpQkFBc0NELFFBQXRDQyxnQkFBZ0JDLG9CQUFzQkYsUUFBdEJFLG1CQUNsQkMsZ0JBQWdCQyxrQ0FBdUIsRUFDdkNDLFVBQVUsQUFBQyxHQUFTLE9BQVBOLFNBQ2JPLFNBQVNKLGtCQUFrQkcsVUFDM0JFLE9BQU9OLGVBQWVLLFFBQVFILGdCQUM5QkssMEJBQTBCQyxvQkFBVyxDQUFDQyxpQkFBaUIsQ0FQNUNiLHlCQU9zRVUsTUFBTUQ7Z0JBRTdGLE9BQU9FO1lBQ1Q7OztXQVZtQlg7RUFBZ0NZLG9CQUFXIn0=
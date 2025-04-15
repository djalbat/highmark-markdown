"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexAnchorReplacement;
    }
});
var _ = /*#__PURE__*/ _interop_require_default(require("./"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../node/markdown/anchor"));
var _prepends = require("../prepends");
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
var IndexAnchorReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(IndexAnchorReplacement, Replacement);
    function IndexAnchorReplacement() {
        _class_call_check(this, IndexAnchorReplacement);
        return _call_super(this, IndexAnchorReplacement, arguments);
    }
    _create_class(IndexAnchorReplacement, [
        {
            key: "getAnchorMarkdownNode",
            value: function getAnchorMarkdownNode() {
                var node = this.getNode(), anchorMarkdownNode = node; ///
                return anchorMarkdownNode;
            }
        }
    ], [
        {
            key: "fromPageNumber",
            value: function fromPageNumber(pageNumber, context) {
                var prepend = _prepends.INDEX_PREPEND, identifier = pageNumber, anchorMarkdownNode = _anchor.default.fromPrependAndIdentifier(prepend, identifier), node = anchorMarkdownNode, tokens = [], indexAnchorReplacement = _.default.fromNodeAndTokens(IndexAnchorReplacement, node, tokens);
                return indexAnchorReplacement;
            }
        }
    ]);
    return IndexAnchorReplacement;
}(_.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5kZXhBbmNob3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi9cIjtcbmltcG9ydCBBbmNob3JNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vYW5jaG9yXCI7XG5cbmltcG9ydCB7IElOREVYX1BSRVBFTkQgfSBmcm9tIFwiLi4vcHJlcGVuZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhBbmNob3JSZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgZ2V0QW5jaG9yTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBhbmNob3JNYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gYW5jaG9yTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVwZW5kID0gSU5ERVhfUFJFUEVORCxcbiAgICAgICAgICBpZGVudGlmaWVyID0gcGFnZU51bWJlciwgIC8vL1xuICAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IEFuY2hvck1hcmtkb3duTm9kZS5mcm9tUHJlcGVuZEFuZElkZW50aWZpZXIocHJlcGVuZCwgaWRlbnRpZmllciksXG4gICAgICAgICAgbm9kZSA9IGFuY2hvck1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IFtdLFxuICAgICAgICAgIGluZGV4QW5jaG9yUmVwbGFjZW1lbnQgPSBSZXBsYWNlbWVudC5mcm9tTm9kZUFuZFRva2VucyhJbmRleEFuY2hvclJlcGxhY2VtZW50LCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGluZGV4QW5jaG9yUmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleEFuY2hvclJlcGxhY2VtZW50IiwiZ2V0QW5jaG9yTWFya2Rvd25Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJhbmNob3JNYXJrZG93bk5vZGUiLCJmcm9tUGFnZU51bWJlciIsInBhZ2VOdW1iZXIiLCJjb250ZXh0IiwicHJlcGVuZCIsIklOREVYX1BSRVBFTkQiLCJpZGVudGlmaWVyIiwiQW5jaG9yTWFya2Rvd25Ob2RlIiwiZnJvbVByZXBlbmRBbmRJZGVudGlmaWVyIiwidG9rZW5zIiwiaW5kZXhBbmNob3JSZXBsYWNlbWVudCIsIlJlcGxhY2VtZW50IiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3VEQUxHOzZEQUNPO3dCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMscUJBQXFCRixNQUFPLEdBQUc7Z0JBRXJDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsVUFBVSxFQUFFQyxPQUFPO2dCQUN2QyxJQUFNQyxVQUFVQyx1QkFBYSxFQUN2QkMsYUFBYUosWUFDYkYscUJBQXFCTyxlQUFrQixDQUFDQyx3QkFBd0IsQ0FBQ0osU0FBU0UsYUFDMUVSLE9BQU9FLG9CQUNQUyxTQUFTLEVBQUUsRUFDWEMseUJBQXlCQyxTQUFXLENBQUNDLGlCQUFpQixDQWQzQ2hCLHdCQWNvRUUsTUFBTVc7Z0JBRTNGLE9BQU9DO1lBQ1Q7OztXQWpCbUJkO0VBQStCZSxTQUFXIn0=
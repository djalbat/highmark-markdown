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
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
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
                var prepend = _prepends.INDEX_PREPEND, identifier = pageNumber, anchorMarkdownNode = _anchor.default.fromPrependAndIdentifier(prepend, identifier), node = anchorMarkdownNode, tokens = [], indexAnchorReplacement = _replacement.default.fromNodeAndTokens(IndexAnchorReplacement, node, tokens);
                return indexAnchorReplacement;
            }
        }
    ]);
    return IndexAnchorReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmRleEFuY2hvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudFwiO1xuXG5pbXBvcnQgQW5jaG9yTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBJTkRFWF9QUkVQRU5EIH0gZnJvbSBcIi4uL3ByZXBlbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4QW5jaG9yUmVwbGFjZW1lbnQgZXh0ZW5kcyBSZXBsYWNlbWVudCB7XG4gIGdldEFuY2hvck1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYW5jaG9yTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGFuY2hvck1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IElOREVYX1BSRVBFTkQsXG4gICAgICAgICAgaWRlbnRpZmllciA9IHBhZ2VOdW1iZXIsICAvLy9cbiAgICAgICAgICBhbmNob3JNYXJrZG93bk5vZGUgPSBBbmNob3JNYXJrZG93bk5vZGUuZnJvbVByZXBlbmRBbmRJZGVudGlmaWVyKHByZXBlbmQsIGlkZW50aWZpZXIpLFxuICAgICAgICAgIG5vZGUgPSBhbmNob3JNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBbXSxcbiAgICAgICAgICBpbmRleEFuY2hvclJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoSW5kZXhBbmNob3JSZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBpbmRleEFuY2hvclJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhBbmNob3JSZXBsYWNlbWVudCIsImdldEFuY2hvck1hcmtkb3duTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiYW5jaG9yTWFya2Rvd25Ob2RlIiwiZnJvbVBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyIiwiY29udGV4dCIsInByZXBlbmQiLCJJTkRFWF9QUkVQRU5EIiwiaWRlbnRpZmllciIsIkFuY2hvck1hcmtkb3duTm9kZSIsImZyb21QcmVwZW5kQW5kSWRlbnRpZmllciIsInRva2VucyIsImluZGV4QW5jaG9yUmVwbGFjZW1lbnQiLCJSZXBsYWNlbWVudCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztrRUFORzs2REFFTzt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmLElBQUEsQUFBTUEsdUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLHFCQUFxQkYsTUFBTyxHQUFHO2dCQUVyQyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLFVBQVUsRUFBRUMsT0FBTztnQkFDdkMsSUFBTUMsVUFBVUMsdUJBQWEsRUFDdkJDLGFBQWFKLFlBQ2JGLHFCQUFxQk8sZUFBa0IsQ0FBQ0Msd0JBQXdCLENBQUNKLFNBQVNFLGFBQzFFUixPQUFPRSxvQkFDUFMsU0FBUyxFQUFFLEVBQ1hDLHlCQUF5QkMsb0JBQVcsQ0FBQ0MsaUJBQWlCLENBZDNDaEIsd0JBY29FRSxNQUFNVztnQkFFM0YsT0FBT0M7WUFDVDs7O1dBakJtQmQ7RUFBK0JlLG9CQUFXIn0=
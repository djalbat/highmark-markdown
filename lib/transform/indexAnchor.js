"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexAnchorTransform;
    }
});
var _occamdom = require("occam-dom");
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
var IndexAnchorTransform = /*#__PURE__*/ function(Transform) {
    _inherits(IndexAnchorTransform, Transform);
    function IndexAnchorTransform() {
        _class_call_check(this, IndexAnchorTransform);
        return _call_super(this, IndexAnchorTransform, arguments);
    }
    _create_class(IndexAnchorTransform, [
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
                var prepend = _prepends.INDEX_PREPEND, identifier = pageNumber, anchorMarkdownNode = _anchor.default.fromPrependAndIdentifier(prepend, identifier), node = anchorMarkdownNode, tokens = [], indexAnchorTransform = _occamdom.Transform.fromNodeAndTokens(IndexAnchorTransform, node, tokens);
                return indexAnchorTransform;
            }
        }
    ]);
    return IndexAnchorTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5kZXhBbmNob3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IEFuY2hvck1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9hbmNob3JcIjtcblxuaW1wb3J0IHsgSU5ERVhfUFJFUEVORCB9IGZyb20gXCIuLi9wcmVwZW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleEFuY2hvclRyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGdldEFuY2hvck1hcmtkb3duTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYW5jaG9yTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGFuY2hvck1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFnZU51bWJlcihwYWdlTnVtYmVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlcGVuZCA9IElOREVYX1BSRVBFTkQsXG4gICAgICAgICAgaWRlbnRpZmllciA9IHBhZ2VOdW1iZXIsICAvLy9cbiAgICAgICAgICBhbmNob3JNYXJrZG93bk5vZGUgPSBBbmNob3JNYXJrZG93bk5vZGUuZnJvbVByZXBlbmRBbmRJZGVudGlmaWVyKHByZXBlbmQsIGlkZW50aWZpZXIpLFxuICAgICAgICAgIG5vZGUgPSBhbmNob3JNYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBbXSxcbiAgICAgICAgICBpbmRleEFuY2hvclRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhJbmRleEFuY2hvclRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBpbmRleEFuY2hvclRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4QW5jaG9yVHJhbnNmb3JtIiwiZ2V0QW5jaG9yTWFya2Rvd25Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJhbmNob3JNYXJrZG93bk5vZGUiLCJmcm9tUGFnZU51bWJlciIsInBhZ2VOdW1iZXIiLCJjb250ZXh0IiwicHJlcGVuZCIsIklOREVYX1BSRVBFTkQiLCJpZGVudGlmaWVyIiwiQW5jaG9yTWFya2Rvd25Ob2RlIiwiZnJvbVByZXBlbmRBbmRJZGVudGlmaWVyIiwidG9rZW5zIiwiaW5kZXhBbmNob3JUcmFuc2Zvcm0iLCJUcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7d0JBTks7NkRBRUs7d0JBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxxQkFBcUJGLE1BQU8sR0FBRztnQkFFckMsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVLEVBQUVDLE9BQU87Z0JBQ3ZDLElBQU1DLFVBQVVDLHVCQUFhLEVBQ3ZCQyxhQUFhSixZQUNiRixxQkFBcUJPLGVBQWtCLENBQUNDLHdCQUF3QixDQUFDSixTQUFTRSxhQUMxRVIsT0FBT0Usb0JBQ1BTLFNBQVMsRUFBRSxFQUNYQyx1QkFBdUJDLG1CQUFTLENBQUNDLGlCQUFpQixDQWR2Q2hCLHNCQWM4REUsTUFBTVc7Z0JBRXJGLE9BQU9DO1lBQ1Q7OztXQWpCbUJkO0VBQTZCZSxtQkFBUyJ9
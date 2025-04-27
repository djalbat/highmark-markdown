"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsDirectiveSubDivisionTransform;
    }
});
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../subDivision"));
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
var ContentsDirectiveSubDivisionTransform = /*#__PURE__*/ function(SubDivisionTransform) {
    _inherits(ContentsDirectiveSubDivisionTransform, SubDivisionTransform);
    function ContentsDirectiveSubDivisionTransform() {
        _class_call_check(this, ContentsDirectiveSubDivisionTransform);
        return _call_super(this, ContentsDirectiveSubDivisionTransform, arguments);
    }
    _create_class(ContentsDirectiveSubDivisionTransform, null, [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
                var contentsDirectiveSubDivisionTransform = null;
                var node = subDivisionMarkdownNode, contentsDirectiveMarkdownNode = contentsDirectiveMarkdownNodeFromNode(node);
                if (contentsDirectiveMarkdownNode !== null) {
                    contentsDirectiveSubDivisionTransform = _subDivision.default.fromSubDivisionMarkdownNode(ContentsDirectiveSubDivisionTransform, subDivisionMarkdownNode, context);
                }
                return contentsDirectiveSubDivisionTransform;
            }
        }
    ]);
    return ContentsDirectiveSubDivisionTransform;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY29udGVudHNEaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vc3ViRGl2aXNpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSBleHRlbmRzIFN1YkRpdmlzaW9uVHJhbnNmb3JtIHtcbiAgc3RhdGljIGZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtID0gU3ViRGl2aXNpb25UcmFuc2Zvcm0uZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKENvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0sIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJjb250ZW50c0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwibm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiY29udGVudHNEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsIlN1YkRpdmlzaW9uVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztrRUFGWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFBLEFBQU1BLHNEQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJDLHVCQUF1QixFQUFFQyxPQUFPO2dCQUNqRSxJQUFJQyx3Q0FBd0M7Z0JBRTVDLElBQU1DLE9BQU9ILHlCQUNQSSxnQ0FBZ0NDLHNDQUFzQ0Y7Z0JBRTVFLElBQUlDLGtDQUFrQyxNQUFNO29CQUMxQ0Ysd0NBQXdDSSxvQkFBb0IsQ0FBQ1AsMkJBQTJCLENBUnpFRCx1Q0FRaUhFLHlCQUF5QkM7Z0JBQzNKO2dCQUVBLE9BQU9DO1lBQ1Q7OztXQVptQko7RUFBOENRLG9CQUFvQiJ9
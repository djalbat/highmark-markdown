"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexDirectiveSubDivisionTransform;
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
var IndexDirectiveSubDivisionTransform = /*#__PURE__*/ function(SubDivisionTransform) {
    _inherits(IndexDirectiveSubDivisionTransform, SubDivisionTransform);
    function IndexDirectiveSubDivisionTransform() {
        _class_call_check(this, IndexDirectiveSubDivisionTransform);
        return _call_super(this, IndexDirectiveSubDivisionTransform, arguments);
    }
    _create_class(IndexDirectiveSubDivisionTransform, null, [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
                var indexDirectiveSubDivisionTransform = null;
                var node = subDivisionMarkdownNode, indexDirectiveMarkdownNode = indexDirectiveMarkdownNodeFromNode(node);
                if (indexDirectiveMarkdownNode !== null) {
                    indexDirectiveSubDivisionTransform = _subDivision.default.fromSubDivisionMarkdownNode(IndexDirectiveSubDivisionTransform, subDivisionMarkdownNode, context);
                }
                return indexDirectiveSubDivisionTransform;
            }
        }
    ]);
    return IndexDirectiveSubDivisionTransform;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5kZXhEaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vc3ViRGl2aXNpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSBleHRlbmRzIFN1YkRpdmlzaW9uVHJhbnNmb3JtIHtcbiAgc3RhdGljIGZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgaW5kZXhEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBpbmRleERpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGluZGV4RGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtID0gU3ViRGl2aXNpb25UcmFuc2Zvcm0uZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKEluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0sIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJpbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwibm9kZSIsImluZGV4RGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaW5kZXhEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsIlN1YkRpdmlzaW9uVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztrRUFGWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFBLEFBQU1BLG1EQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJDLHVCQUF1QixFQUFFQyxPQUFPO2dCQUNqRSxJQUFJQyxxQ0FBcUM7Z0JBRXpDLElBQU1DLE9BQU9ILHlCQUNQSSw2QkFBNkJDLG1DQUFtQ0Y7Z0JBRXRFLElBQUlDLCtCQUErQixNQUFNO29CQUN2Q0YscUNBQXFDSSxvQkFBb0IsQ0FBQ1AsMkJBQTJCLENBUnRFRCxvQ0FRMkdFLHlCQUF5QkM7Z0JBQ3JKO2dCQUVBLE9BQU9DO1lBQ1Q7OztXQVptQko7RUFBMkNRLG9CQUFvQiJ9
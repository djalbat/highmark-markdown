"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesDirectiveSubDivisionTransform;
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
var FootnotesDirectiveSubDivisionTransform = /*#__PURE__*/ function(SubDivisionTransform) {
    _inherits(FootnotesDirectiveSubDivisionTransform, SubDivisionTransform);
    function FootnotesDirectiveSubDivisionTransform() {
        _class_call_check(this, FootnotesDirectiveSubDivisionTransform);
        return _call_super(this, FootnotesDirectiveSubDivisionTransform, arguments);
    }
    _create_class(FootnotesDirectiveSubDivisionTransform, null, [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
                var footnotesDirectiveSubDivisionTransform = null;
                var node = subDivisionMarkdownNode, footnotesDirectiveMarkdownNode = footnotesDirectiveMarkdownNodeFromNode(node);
                if (footnotesDirectiveMarkdownNode !== null) {
                    footnotesDirectiveSubDivisionTransform = _subDivision.default.fromSubDivisionMarkdownNode(FootnotesDirectiveSubDivisionTransform, subDivisionMarkdownNode, context);
                }
                return footnotesDirectiveSubDivisionTransform;
            }
        }
    ]);
    return FootnotesDirectiveSubDivisionTransform;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vZm9vdG5vdGVzRGlyZWN0aXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3ViRGl2aXNpb25UcmFuc2Zvcm0gZnJvbSBcIi4uL3N1YkRpdmlzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIGV4dGVuZHMgU3ViRGl2aXNpb25UcmFuc2Zvcm0ge1xuICBzdGF0aWMgZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSA9IFN1YkRpdmlzaW9uVHJhbnNmb3JtLmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSwgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJub2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJTdWJEaXZpc2lvblRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7a0VBRlk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSx1REFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyx1QkFBdUIsRUFBRUMsT0FBTztnQkFDakUsSUFBSUMseUNBQXlDO2dCQUU3QyxJQUFNQyxPQUFPSCx5QkFDUEksaUNBQWlDQyx1Q0FBdUNGO2dCQUU5RSxJQUFJQyxtQ0FBbUMsTUFBTTtvQkFDM0NGLHlDQUF5Q0ksb0JBQW9CLENBQUNQLDJCQUEyQixDQVIxRUQsd0NBUW1IRSx5QkFBeUJDO2dCQUM3SjtnQkFFQSxPQUFPQztZQUNUOzs7V0FabUJKO0VBQStDUSxvQkFBb0IifQ==
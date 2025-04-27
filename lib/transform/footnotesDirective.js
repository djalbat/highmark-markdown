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
var _query = require("../../utilities/query");
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
                var node = subDivisionMarkdownNode, footnotesDirectiveMarkdownNode = (0, _query.footnotesDirectiveMarkdownNodeFromNode)(node);
                if (footnotesDirectiveMarkdownNode !== null) {
                    footnotesDirectiveSubDivisionTransform = _subDivision.default.fromSubDivisionMarkdownNode(FootnotesDirectiveSubDivisionTransform, subDivisionMarkdownNode, context);
                }
                return footnotesDirectiveSubDivisionTransform;
            }
        }
    ]);
    return FootnotesDirectiveSubDivisionTransform;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vZm9vdG5vdGVzRGlyZWN0aXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3ViRGl2aXNpb25UcmFuc2Zvcm0gZnJvbSBcIi4uL3N1YkRpdmlzaW9uXCI7XG5cbmltcG9ydCB7IGZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSBleHRlbmRzIFN1YkRpdmlzaW9uVHJhbnNmb3JtIHtcbiAgc3RhdGljIGZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IGZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBTdWJEaXZpc2lvblRyYW5zZm9ybS5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0sIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsImZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwibm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiU3ViRGl2aXNpb25UcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpZO3FCQUVzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFBLEFBQU1BLHVEQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJDLHVCQUF1QixFQUFFQyxPQUFPO2dCQUNqRSxJQUFJQyx5Q0FBeUM7Z0JBRTdDLElBQU1DLE9BQU9ILHlCQUNQSSxpQ0FBaUNDLElBQUFBLDZDQUFzQyxFQUFDRjtnQkFFOUUsSUFBSUMsbUNBQW1DLE1BQU07b0JBQzNDRix5Q0FBeUNJLG9CQUFvQixDQUFDUCwyQkFBMkIsQ0FSMUVELHdDQVFtSEUseUJBQXlCQztnQkFDN0o7Z0JBRUEsT0FBT0M7WUFDVDs7O1dBWm1CSjtFQUErQ1Esb0JBQW9CIn0=
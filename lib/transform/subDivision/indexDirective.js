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
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision"));
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
                var node = subDivisionMarkdownNode, indexDirectiveMarkdownNode = (0, _query.indexDirectiveMarkdownNodeFromNode)(node);
                if (indexDirectiveMarkdownNode !== null) {
                    indexDirectiveSubDivisionTransform = _subDivision.default.fromSubDivisionMarkdownNode(IndexDirectiveSubDivisionTransform, subDivisionMarkdownNode, context);
                }
                return indexDirectiveSubDivisionTransform;
            }
        }
    ]);
    return IndexDirectiveSubDivisionTransform;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vc3ViRGl2aXNpb24vaW5kZXhEaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uXCI7XG5cbmltcG9ydCB7IGluZGV4RGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0gZXh0ZW5kcyBTdWJEaXZpc2lvblRyYW5zZm9ybSB7XG4gIHN0YXRpYyBmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIGluZGV4RGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gaW5kZXhEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChpbmRleERpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSA9IFN1YkRpdmlzaW9uVHJhbnNmb3JtLmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShJbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4RGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleERpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiaW5kZXhEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSIsIm5vZGUiLCJpbmRleERpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImluZGV4RGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJTdWJEaXZpc2lvblRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSlk7cUJBRWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQUEsQUFBTUEsbURBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsdUJBQXVCLEVBQUVDLE9BQU87Z0JBQ2pFLElBQUlDLHFDQUFxQztnQkFFekMsSUFBTUMsT0FBT0gseUJBQ1BJLDZCQUE2QkMsSUFBQUEseUNBQWtDLEVBQUNGO2dCQUV0RSxJQUFJQywrQkFBK0IsTUFBTTtvQkFDdkNGLHFDQUFxQ0ksb0JBQW9CLENBQUNQLDJCQUEyQixDQVJ0RUQsb0NBUTJHRSx5QkFBeUJDO2dCQUNySjtnQkFFQSxPQUFPQztZQUNUOzs7V0FabUJKO0VBQTJDUSxvQkFBb0IifQ==
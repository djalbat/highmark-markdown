"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PageNumberDirectiveSubDivisionTransform;
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
var PageNumberDirectiveSubDivisionTransform = /*#__PURE__*/ function(SubDivisionTransform) {
    _inherits(PageNumberDirectiveSubDivisionTransform, SubDivisionTransform);
    function PageNumberDirectiveSubDivisionTransform() {
        _class_call_check(this, PageNumberDirectiveSubDivisionTransform);
        return _call_super(this, PageNumberDirectiveSubDivisionTransform, arguments);
    }
    _create_class(PageNumberDirectiveSubDivisionTransform, null, [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
                var pageNumberDirectiveSubDivisionTransform = null;
                var node = subDivisionMarkdownNode, pageNumberDirectiveMarkdownNode = (0, _query.pageNumberDirectiveMarkdownNodeFromNode)(node);
                if (pageNumberDirectiveMarkdownNode !== null) {
                    pageNumberDirectiveSubDivisionTransform = _subDivision.default.fromSubDivisionMarkdownNode(PageNumberDirectiveSubDivisionTransform, subDivisionMarkdownNode, context);
                }
                return pageNumberDirectiveSubDivisionTransform;
            }
        }
    ]);
    return PageNumberDirectiveSubDivisionTransform;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vcGFnZU51bWJlckRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YkRpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi9zdWJEaXZpc2lvblwiO1xuXG5pbXBvcnQgeyBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSBleHRlbmRzIFN1YkRpdmlzaW9uVHJhbnNmb3JtIHtcbiAgc3RhdGljIGZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSA9IFN1YkRpdmlzaW9uVHJhbnNmb3JtLmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShQYWdlTnVtYmVyRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0sIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwicGFnZU51bWJlckRpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwibm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJTdWJEaXZpc2lvblRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSlk7cUJBRXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQUEsQUFBTUEsd0RBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsdUJBQXVCLEVBQUVDLE9BQU87Z0JBQ2pFLElBQUlDLDBDQUEwQztnQkFFOUMsSUFBTUMsT0FBT0gseUJBQ1BJLGtDQUFrQ0MsSUFBQUEsOENBQXVDLEVBQUNGO2dCQUVoRixJQUFJQyxvQ0FBb0MsTUFBTTtvQkFDNUNGLDBDQUEwQ0ksb0JBQW9CLENBQUNQLDJCQUEyQixDQVIzRUQseUNBUXFIRSx5QkFBeUJDO2dCQUMvSjtnQkFFQSxPQUFPQztZQUNUOzs7V0FabUJKO0VBQWdEUSxvQkFBb0IifQ==
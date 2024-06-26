"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexAnchorSubDivisionReplacement;
    }
});
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/anchor"));
var _subDivision1 = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/subDivision"));
var _prepends = require("../../prepends");
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
var IndexAnchorSubDivisionReplacement = /*#__PURE__*/ function(SubDivisionReplacement) {
    _inherits(IndexAnchorSubDivisionReplacement, SubDivisionReplacement);
    var _super = _create_super(IndexAnchorSubDivisionReplacement);
    function IndexAnchorSubDivisionReplacement() {
        _class_call_check(this, IndexAnchorSubDivisionReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(IndexAnchorSubDivisionReplacement, null, [
        {
            key: "fromPageNumber",
            value: function fromPageNumber(pageNumber, context) {
                var prepend = _prepends.INDEX_PREPEND, identifier = pageNumber, anchorMarkdownNode = _anchor.default.fromPrependAndIdentifier(prepend, identifier), subDivisionMarkdownNode = _subDivision1.default.fromAnchorMarkdownNode(anchorMarkdownNode), indexAnchorSubdivisionReplacement = _subDivision.default.fromSubDivisionMarkdownNode(IndexAnchorSubDivisionReplacement, subDivisionMarkdownNode, context);
                return indexAnchorSubdivisionReplacement;
            }
        }
    ]);
    return IndexAnchorSubDivisionReplacement;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9pbmRleEFuY2hvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uXCI7XG5cbmltcG9ydCBBbmNob3JNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vYW5jaG9yXCI7XG5pbXBvcnQgU3ViRGl2aXNpb25NYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vc3ViRGl2aXNpb25cIjtcblxuaW1wb3J0IHsgSU5ERVhfUFJFUEVORCB9IGZyb20gXCIuLi8uLi9wcmVwZW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleEFuY2hvclN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZXh0ZW5kcyBTdWJEaXZpc2lvblJlcGxhY2VtZW50IHtcbiAgc3RhdGljIGZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVwZW5kID0gSU5ERVhfUFJFUEVORCxcbiAgICAgICAgICBpZGVudGlmaWVyID0gcGFnZU51bWJlciwgIC8vL1xuICAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IEFuY2hvck1hcmtkb3duTm9kZS5mcm9tUHJlcGVuZEFuZElkZW50aWZpZXIocHJlcGVuZCwgaWRlbnRpZmllciksXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSBTdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5mcm9tQW5jaG9yTWFya2Rvd25Ob2RlKGFuY2hvck1hcmtkb3duTm9kZSksXG4gICAgICAgICAgaW5kZXhBbmNob3JTdWJkaXZpc2lvblJlcGxhY2VtZW50ID0gU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoSW5kZXhBbmNob3JTdWJEaXZpc2lvblJlcGxhY2VtZW50LCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaW5kZXhBbmNob3JTdWJkaXZpc2lvblJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhBbmNob3JTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZnJvbVBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyIiwiY29udGV4dCIsInByZXBlbmQiLCJJTkRFWF9QUkVQRU5EIiwiaWRlbnRpZmllciIsImFuY2hvck1hcmtkb3duTm9kZSIsIkFuY2hvck1hcmtkb3duTm9kZSIsImZyb21QcmVwZW5kQW5kSWRlbnRpZmllciIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tQW5jaG9yTWFya2Rvd25Ob2RlIiwiaW5kZXhBbmNob3JTdWJkaXZpc2lvblJlcGxhY2VtZW50IiwiU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7a0VBUGM7NkRBRUo7bUVBQ0s7d0JBRU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLGtEQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsVUFBVSxFQUFFQyxPQUFPO2dCQUN2QyxJQUFNQyxVQUFVQyx1QkFBYSxFQUN2QkMsYUFBYUosWUFDYksscUJBQXFCQyxlQUFrQixDQUFDQyx3QkFBd0IsQ0FBQ0wsU0FBU0UsYUFDMUVJLDBCQUEwQkMscUJBQXVCLENBQUNDLHNCQUFzQixDQUFDTCxxQkFDekVNLG9DQUFvQ0Msb0JBQXNCLENBQUNDLDJCQUEyQixDQU4zRWYsbUNBTStHVSx5QkFBeUJQO2dCQUV6SixPQUFPVTtZQUNUOzs7V0FUbUJiO0VBQTBDYyxvQkFBc0IifQ==
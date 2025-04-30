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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vX2xlZ2FjeS9pbmRleEFuY2hvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgQW5jaG9yTWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBJTkRFWF9QUkVQRU5EIH0gZnJvbSBcIi4uL3ByZXBlbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4QW5jaG9yVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgZ2V0QW5jaG9yTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBhbmNob3JNYXJrZG93bk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gYW5jaG9yTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVwZW5kID0gSU5ERVhfUFJFUEVORCxcbiAgICAgICAgICBpZGVudGlmaWVyID0gcGFnZU51bWJlciwgIC8vL1xuICAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IEFuY2hvck1hcmtkb3duTm9kZS5mcm9tUHJlcGVuZEFuZElkZW50aWZpZXIocHJlcGVuZCwgaWRlbnRpZmllciksXG4gICAgICAgICAgbm9kZSA9IGFuY2hvck1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IFtdLFxuICAgICAgICAgIGluZGV4QW5jaG9yVHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKEluZGV4QW5jaG9yVHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGluZGV4QW5jaG9yVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhBbmNob3JUcmFuc2Zvcm0iLCJnZXRBbmNob3JNYXJrZG93bk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImFuY2hvck1hcmtkb3duTm9kZSIsImZyb21QYWdlTnVtYmVyIiwicGFnZU51bWJlciIsImNvbnRleHQiLCJwcmVwZW5kIiwiSU5ERVhfUFJFUEVORCIsImlkZW50aWZpZXIiLCJBbmNob3JNYXJrZG93bk5vZGUiLCJmcm9tUHJlcGVuZEFuZElkZW50aWZpZXIiLCJ0b2tlbnMiLCJpbmRleEFuY2hvclRyYW5zZm9ybSIsIlRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt3QkFOSzs2REFFSzt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLHFCQUFxQkYsTUFBTyxHQUFHO2dCQUVyQyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLFVBQVUsRUFBRUMsT0FBTztnQkFDdkMsSUFBTUMsVUFBVUMsdUJBQWEsRUFDdkJDLGFBQWFKLFlBQ2JGLHFCQUFxQk8sZUFBa0IsQ0FBQ0Msd0JBQXdCLENBQUNKLFNBQVNFLGFBQzFFUixPQUFPRSxvQkFDUFMsU0FBUyxFQUFFLEVBQ1hDLHVCQUF1QkMsbUJBQVMsQ0FBQ0MsaUJBQWlCLENBZHZDaEIsc0JBYzhERSxNQUFNVztnQkFFckYsT0FBT0M7WUFDVDs7O1dBakJtQmQ7RUFBNkJlLG1CQUFTIn0=
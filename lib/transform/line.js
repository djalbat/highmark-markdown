"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LineTransform;
    }
});
var _transform = /*#__PURE__*/ _interop_require_default(require("../transform"));
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
var LineTransform = /*#__PURE__*/ function(Transform) {
    _inherits(LineTransform, Transform);
    function LineTransform() {
        _class_call_check(this, LineTransform);
        return _call_super(this, LineTransform, arguments);
    }
    _create_class(LineTransform, [
        {
            key: "getLineMarkdownNode",
            value: function getLineMarkdownNode() {
                var node = this.getNode(), lineMarkdownNode = node; ///
                return lineMarkdownNode;
            }
        }
    ], [
        {
            key: "fromLineMarkdownNode",
            value: function fromLineMarkdownNode(lineMarkdownNode, context) {
                var node = lineMarkdownNode, lineTransform = _transform.default.fromNode(LineTransform, node, context);
                return lineTransform;
            }
        }
    ]);
    return LineTransform;
}(_transform.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVUcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBnZXRMaW5lTWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBsaW5lTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGxpbmVNYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmVNYXJrZG93bk5vZGUobGluZU1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBsaW5lTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgbGluZVRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tTm9kZShMaW5lVHJhbnNmb3JtLCBub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsaW5lVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTGluZVRyYW5zZm9ybSIsImdldExpbmVNYXJrZG93bk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImxpbmVNYXJrZG93bk5vZGUiLCJmcm9tTGluZU1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJsaW5lVHJhbnNmb3JtIiwiVHJhbnNmb3JtIiwiZnJvbU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O2dFQUZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsbUJBQW1CRixNQUFPLEdBQUc7Z0JBRW5DLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCRCxnQkFBZ0IsRUFBRUUsT0FBTztnQkFDbkQsSUFBTUosT0FBT0Usa0JBQ1BHLGdCQUFnQkMsa0JBQVMsQ0FBQ0MsUUFBUSxDQVZ2QlQsZUFVdUNFLE1BQU1JO2dCQUU5RCxPQUFPQztZQUNUOzs7V0FibUJQO0VBQXNCUSxrQkFBUyJ9
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexAnchorTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("../../node/html/anchor"));
var _prepends = require("../../prepends");
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
var IndexAnchorTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(IndexAnchorTMLTransform, HTMLTransform);
    function IndexAnchorTMLTransform() {
        _class_call_check(this, IndexAnchorTMLTransform);
        return _call_super(this, IndexAnchorTMLTransform, arguments);
    }
    _create_class(IndexAnchorTMLTransform, [
        {
            key: "appendToHTMLNode",
            value: function appendToHTMLNode(htmlNode) {
                var parentHTMLNode = htmlNode; ///
                this.prependTo(parentHTMLNode);
            }
        }
    ], [
        {
            key: "fromPageNumber",
            value: function fromPageNumber(pageNumber) {
                var prepend = _prepends.INDEX_PREPEND, identifier = pageNumber, anchorHTMLNode = _anchor.default.fromPrependAndIdentifier(prepend, identifier), htmlNode = anchorHTMLNode, paragraphHTMLTransform = _html.default.fromHTMLNode(IndexAnchorTMLTransform, htmlNode);
                return paragraphHTMLTransform;
            }
        }
    ]);
    return IndexAnchorTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pbmRleEFuY2hvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sXCJcbmltcG9ydCBBbmNob3JIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sL2FuY2hvclwiO1xuXG5pbXBvcnQgeyBJTkRFWF9QUkVQRU5EIH0gZnJvbSBcIi4uLy4uL3ByZXBlbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4QW5jaG9yVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIGFwcGVuZFRvSFRNTE5vZGUoaHRtbE5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnRIVE1MTm9kZSA9IGh0bWxOb2RlOyAgLy8vXG5cbiAgICB0aGlzLnByZXBlbmRUbyhwYXJlbnRIVE1MTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcikge1xuICAgIGNvbnN0IHByZXBlbmQgPSBJTkRFWF9QUkVQRU5ELFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBwYWdlTnVtYmVyLCAgLy8vXG4gICAgICAgICAgYW5jaG9ySFRNTE5vZGUgPSBBbmNob3JIVE1MTm9kZS5mcm9tUHJlcGVuZEFuZElkZW50aWZpZXIocHJlcGVuZCwgaWRlbnRpZmllciksXG4gICAgICAgICAgaHRtbE5vZGUgPSBhbmNob3JIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgcGFyYWdyYXBoSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKEluZGV4QW5jaG9yVE1MVHJhbnNmb3JtLCBodG1sTm9kZSk7XG5cbiAgICByZXR1cm4gcGFyYWdyYXBoSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4QW5jaG9yVE1MVHJhbnNmb3JtIiwiYXBwZW5kVG9IVE1MTm9kZSIsImh0bWxOb2RlIiwicGFyZW50SFRNTE5vZGUiLCJwcmVwZW5kVG8iLCJmcm9tUGFnZU51bWJlciIsInBhZ2VOdW1iZXIiLCJwcmVwZW5kIiwiSU5ERVhfUFJFUEVORCIsImlkZW50aWZpZXIiLCJhbmNob3JIVE1MTm9kZSIsIkFuY2hvckhUTUxOb2RlIiwiZnJvbVByZXBlbmRBbmRJZGVudGlmaWVyIiwicGFyYWdyYXBoSFRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzJEQUxLOzZEQUNDO3dCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSx3Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsUUFBUTtnQkFDdkIsSUFBTUMsaUJBQWlCRCxVQUFXLEdBQUc7Z0JBRXJDLElBQUksQ0FBQ0UsU0FBUyxDQUFDRDtZQUNqQjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVO2dCQUM5QixJQUFNQyxVQUFVQyx1QkFBYSxFQUN2QkMsYUFBYUgsWUFDYkksaUJBQWlCQyxlQUFjLENBQUNDLHdCQUF3QixDQUFDTCxTQUFTRSxhQUNsRVAsV0FBV1EsZ0JBQ1hHLHlCQUF5QkMsYUFBYSxDQUFDQyxZQUFZLENBWnhDZix5QkFZa0VFO2dCQUVuRixPQUFPVztZQUNUOzs7V0FmbUJiO0VBQWdDYyxhQUFhIn0=
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IgnoreDirectiveTransform;
    }
});
var _occamdom = require("occam-dom");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var IgnoreDirectiveTransform = /*#__PURE__*/ function(Transform) {
    _inherits(IgnoreDirectiveTransform, Transform);
    function IgnoreDirectiveTransform() {
        _class_call_check(this, IgnoreDirectiveTransform);
        return _call_super(this, IgnoreDirectiveTransform, arguments);
    }
    _create_class(IgnoreDirectiveTransform, [
        {
            key: "removeFromTopmostMarkdownNode",
            value: function removeFromTopmostMarkdownNode(topmostMarkdownNode, context) {
                var parentNode = topmostMarkdownNode; ///
                _get(_get_prototype_of(IgnoreDirectiveTransform.prototype), "removeFrom", this).call(this, parentNode, context);
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNode",
            value: function fromDivisionMarkdownNode(divisionMarkdownNode) {
                var node = divisionMarkdownNode, tokens = null, includeDirectiveTransform = _occamdom.Transform.fromNodeAndTokens(IgnoreDirectiveTransform, node, tokens);
                return includeDirectiveTransform;
            }
        }
    ]);
    return IgnoreDirectiveTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaWdub3JlRGlyZWN0aXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElnbm9yZURpcmVjdGl2ZVRyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIHJlbW92ZUZyb21Ub3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdG9wbW9zdE1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICBzdXBlci5yZW1vdmVGcm9tKHBhcmVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhJZ25vcmVEaXJlY3RpdmVUcmFuc2Zvcm0sIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIklnbm9yZURpcmVjdGl2ZVRyYW5zZm9ybSIsInJlbW92ZUZyb21Ub3Btb3N0TWFya2Rvd25Ob2RlIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJwYXJlbnROb2RlIiwicmVtb3ZlRnJvbSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwibm9kZSIsInRva2VucyIsImluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm0iLCJUcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7d0JBRks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLDhCQUE4QkMsbUJBQW1CLEVBQUVDLE9BQU87Z0JBQ3hELElBQU1DLGFBQWFGLHFCQUFxQixHQUFHO2dCQUUzQyx1QkFKaUJGLHFDQUlYSyxjQUFOLElBQUssYUFBWUQsWUFBWUQ7WUFDL0I7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxvQkFBb0I7Z0JBQ2xELElBQU1DLE9BQU9ELHNCQUNQRSxTQUFTLE1BQ1RDLDRCQUE0QkMsbUJBQVMsQ0FBQ0MsaUJBQWlCLENBVjVDWiwwQkFVdUVRLE1BQU1DO2dCQUU5RixPQUFPQztZQUNUOzs7V0FibUJWO0VBQWlDVyxtQkFBUyJ9
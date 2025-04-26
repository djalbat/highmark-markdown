"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IncludeDirectiveTransform;
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
var IncludeDirectiveTransform = /*#__PURE__*/ function(Transform) {
    _inherits(IncludeDirectiveTransform, Transform);
    function IncludeDirectiveTransform() {
        _class_call_check(this, IncludeDirectiveTransform);
        return _call_super(this, IncludeDirectiveTransform, arguments);
    }
    _create_class(IncludeDirectiveTransform, [
        {
            key: "getDivisionMarkdownNode",
            value: function getDivisionMarkdownNode() {
                var node = this.getNode(), divisionMarkdownNode = node; ///
                return divisionMarkdownNode;
            }
        },
        {
            key: "appendToTopmostMarkdownNode",
            value: function appendToTopmostMarkdownNode(topmostMarkdownNode, context) {
                var parentNode = topmostMarkdownNode; ///
                _get(_get_prototype_of(IncludeDirectiveTransform.prototype), "appendTo", this).call(this, parentNode, context);
                var divisionMarkdownNode = this.getDivisionMarkdownNode();
                return divisionMarkdownNode;
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNodeAndTokens",
            value: function fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens) {
                var node = divisionMarkdownNode, includeDirectiveTransform = _occamdom.Transform.fromNodeAndTokens(IncludeDirectiveTransform, node, tokens);
                return includeDirectiveTransform;
            }
        }
    ]);
    return IncludeDirectiveTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5jbHVkZURpcmVjdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgYXBwZW5kVG9Ub3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdG9wbW9zdE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgc3VwZXIuYXBwZW5kVG8ocGFyZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMoZGl2aXNpb25NYXJrZG93bk5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoSW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSIsImdldERpdmlzaW9uTWFya2Rvd25Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImFwcGVuZFRvVG9wbW9zdE1hcmtkb3duTm9kZSIsInRvcG1vc3RNYXJrZG93bk5vZGUiLCJjb250ZXh0IiwicGFyZW50Tm9kZSIsImFwcGVuZFRvIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zIiwidG9rZW5zIiwiaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSIsIlRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt3QkFGSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLHVCQUF1QkYsTUFBTyxHQUFHO2dCQUV2QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkMsbUJBQW1CLEVBQUVDLE9BQU87Z0JBQ3RELElBQU1DLGFBQWFGLHFCQUFzQixHQUFHO2dCQUU1Qyx1QkFYaUJOLHNDQVdYUyxZQUFOLElBQUssYUFBVUQsWUFBWUQ7Z0JBRTNCLElBQU1ILHVCQUF1QixJQUFJLENBQUNILHVCQUF1QjtnQkFFekQsT0FBT0c7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxrQ0FBa0NOLG9CQUFvQixFQUFFTyxNQUFNO2dCQUNuRSxJQUFNVCxPQUFPRSxzQkFDUFEsNEJBQTRCQyxtQkFBUyxDQUFDQyxpQkFBaUIsQ0FwQjVDZCwyQkFvQndFRSxNQUFNUztnQkFFL0YsT0FBT0M7WUFDVDs7O1dBdkJtQlo7RUFBa0NhLG1CQUFTIn0=
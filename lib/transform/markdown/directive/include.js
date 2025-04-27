"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IncludeDirectiveMarkdownTransform;
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
var IncludeDirectiveMarkdownTransform = /*#__PURE__*/ function(Transform) {
    _inherits(IncludeDirectiveMarkdownTransform, Transform);
    function IncludeDirectiveMarkdownTransform() {
        _class_call_check(this, IncludeDirectiveMarkdownTransform);
        return _call_super(this, IncludeDirectiveMarkdownTransform, arguments);
    }
    _create_class(IncludeDirectiveMarkdownTransform, [
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
                _get(_get_prototype_of(IncludeDirectiveMarkdownTransform.prototype), "appendTo", this).call(this, parentNode, context);
                var divisionMarkdownNode = this.getDivisionMarkdownNode();
                return divisionMarkdownNode;
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNodeAndTokens",
            value: function fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens) {
                var node = divisionMarkdownNode, includeDirectiveMarkdownTransform = _occamdom.Transform.fromNodeAndTokens(IncludeDirectiveMarkdownTransform, node, tokens);
                return includeDirectiveMarkdownTransform;
            }
        }
    ]);
    return IncludeDirectiveMarkdownTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vbWFya2Rvd24vZGlyZWN0aXZlL2luY2x1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgYXBwZW5kVG9Ub3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdG9wbW9zdE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgc3VwZXIuYXBwZW5kVG8ocGFyZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMoZGl2aXNpb25NYXJrZG93bk5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhJbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0sIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiYXBwZW5kVG9Ub3Btb3N0TWFya2Rvd25Ob2RlIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJwYXJlbnROb2RlIiwiYXBwZW5kVG8iLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMiLCJ0b2tlbnMiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0iLCJUcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7d0JBRks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLGtEQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyx1QkFBdUJGLE1BQU8sR0FBRztnQkFFdkMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJDLG1CQUFtQixFQUFFQyxPQUFPO2dCQUN0RCxJQUFNQyxhQUFhRixxQkFBc0IsR0FBRztnQkFFNUMsdUJBWGlCTiw4Q0FXWFMsWUFBTixJQUFLLGFBQVVELFlBQVlEO2dCQUUzQixJQUFNSCx1QkFBdUIsSUFBSSxDQUFDSCx1QkFBdUI7Z0JBRXpELE9BQU9HO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0Esa0NBQWtDTixvQkFBb0IsRUFBRU8sTUFBTTtnQkFDbkUsSUFBTVQsT0FBT0Usc0JBQ1BRLG9DQUFvQ0MsbUJBQVMsQ0FBQ0MsaUJBQWlCLENBcEJwRGQsbUNBb0J3RkUsTUFBTVM7Z0JBRS9HLE9BQU9DO1lBQ1Q7OztXQXZCbUJaO0VBQTBDYSxtQkFBUyJ9
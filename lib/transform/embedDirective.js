"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmbedDirectiveTransform;
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
var EmbedDirectiveTransform = /*#__PURE__*/ function(Transform) {
    _inherits(EmbedDirectiveTransform, Transform);
    function EmbedDirectiveTransform() {
        _class_call_check(this, EmbedDirectiveTransform);
        return _call_super(this, EmbedDirectiveTransform, arguments);
    }
    _create_class(EmbedDirectiveTransform, [
        {
            key: "addAfterSubDivisionMarkdownNode",
            value: function addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, context) {
                var existingNode = subDivisionMarkdownNode, parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(EmbedDirectiveTransform.prototype), "addAfter", this).call(this, existingNode, parentNode, context);
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNodeAndTokens",
            value: function fromSubDivisionMarkdownNodeAndTokens(subDivisionMarkdownNode, tokens) {
                var node = subDivisionMarkdownNode, embedDirectiveTransform = _occamdom.Transform.fromNodeAndTokens(EmbedDirectiveTransform, node, tokens);
                return embedDirectiveTransform;
            }
        }
    ]);
    return EmbedDirectiveTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vZW1iZWREaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBhZGRBZnRlclN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHN1cGVyLmFkZEFmdGVyKGV4aXN0aW5nTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBlbWJlZERpcmVjdGl2ZVRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhFbWJlZERpcmVjdGl2ZVRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBlbWJlZERpcmVjdGl2ZVRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtIiwiYWRkQWZ0ZXJTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiZXhpc3RpbmdOb2RlIiwicGFyZW50Tm9kZSIsImFkZEFmdGVyIiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zIiwidG9rZW5zIiwibm9kZSIsImVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtIiwiVHJhbnNmb3JtIiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3dCQUZLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVgsSUFBQSxBQUFNQSx3Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxnQ0FBZ0NDLHVCQUF1QixFQUFFQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDcEYsSUFBTUMsZUFBZUgseUJBQ2ZJLGFBQWFILHNCQUF1QixHQUFHO2dCQUU3Qyx1QkFMaUJILG9DQUtYTyxZQUFOLElBQUssYUFBVUYsY0FBY0MsWUFBWUY7WUFDM0M7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDTix1QkFBdUIsRUFBRU8sTUFBTTtnQkFDekUsSUFBTUMsT0FBT1IseUJBQ1BTLDBCQUEwQkMsbUJBQVMsQ0FBQ0MsaUJBQWlCLENBVjFDYix5QkFVb0VVLE1BQU1EO2dCQUUzRixPQUFPRTtZQUNUOzs7V0FibUJYO0VBQWdDWSxtQkFBUyJ9
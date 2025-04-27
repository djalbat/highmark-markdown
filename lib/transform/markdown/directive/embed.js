"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmbedDirectiveMarkdownTransform;
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
var EmbedDirectiveMarkdownTransform = /*#__PURE__*/ function(Transform) {
    _inherits(EmbedDirectiveMarkdownTransform, Transform);
    function EmbedDirectiveMarkdownTransform() {
        _class_call_check(this, EmbedDirectiveMarkdownTransform);
        return _call_super(this, EmbedDirectiveMarkdownTransform, arguments);
    }
    _create_class(EmbedDirectiveMarkdownTransform, [
        {
            key: "addAfterSubDivisionMarkdownNode",
            value: function addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, context) {
                var existingNode = subDivisionMarkdownNode, parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(EmbedDirectiveMarkdownTransform.prototype), "addAfter", this).call(this, existingNode, parentNode, context);
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNodeAndTokens",
            value: function fromSubDivisionMarkdownNodeAndTokens(subDivisionMarkdownNode, tokens) {
                var node = subDivisionMarkdownNode, embedDirectiveMarkdownTransform = _occamdom.Transform.fromNodeAndTokens(EmbedDirectiveMarkdownTransform, node, tokens);
                return embedDirectiveMarkdownTransform;
            }
        }
    ]);
    return EmbedDirectiveMarkdownTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vbWFya2Rvd24vZGlyZWN0aXZlL2VtYmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBhZGRBZnRlclN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHN1cGVyLmFkZEFmdGVyKGV4aXN0aW5nTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKEVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0sIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0iLCJhZGRBZnRlclN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJleGlzdGluZ05vZGUiLCJwYXJlbnROb2RlIiwiYWRkQWZ0ZXIiLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGVBbmRUb2tlbnMiLCJ0b2tlbnMiLCJub2RlIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSIsIlRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt3QkFGSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsZ0RBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0NBQWdDQyx1QkFBdUIsRUFBRUMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQ3BGLElBQU1DLGVBQWVILHlCQUNmSSxhQUFhSCxzQkFBdUIsR0FBRztnQkFFN0MsdUJBTGlCSCw0Q0FLWE8sWUFBTixJQUFLLGFBQVVGLGNBQWNDLFlBQVlGO1lBQzNDOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLHFDQUFxQ04sdUJBQXVCLEVBQUVPLE1BQU07Z0JBQ3pFLElBQU1DLE9BQU9SLHlCQUNQUyxrQ0FBa0NDLG1CQUFTLENBQUNDLGlCQUFpQixDQVZsRGIsaUNBVW9GVSxNQUFNRDtnQkFFM0csT0FBT0U7WUFDVDs7O1dBYm1CWDtFQUF3Q1ksbUJBQVMifQ==
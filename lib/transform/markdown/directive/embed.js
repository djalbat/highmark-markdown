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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../../transform/markdown"));
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
var EmbedDirectiveMarkdownTransform = /*#__PURE__*/ function(MarkdownTransform) {
    _inherits(EmbedDirectiveMarkdownTransform, MarkdownTransform);
    function EmbedDirectiveMarkdownTransform() {
        _class_call_check(this, EmbedDirectiveMarkdownTransform);
        return _call_super(this, EmbedDirectiveMarkdownTransform, arguments);
    }
    _create_class(EmbedDirectiveMarkdownTransform, [
        {
            key: "addAfterSubDivisionMarkdownNode",
            value: function addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
                var existingNode = subDivisionMarkdownNode; ///
                _get(_get_prototype_of(EmbedDirectiveMarkdownTransform.prototype), "addAfter", this).call(this, existingNode, context);
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNodeAndTokens",
            value: function fromSubDivisionMarkdownNodeAndTokens(subDivisionMarkdownNode, tokens) {
                var node = subDivisionMarkdownNode, embedDirectiveMarkdownTransform = _markdown.default.fromNodeAndTokens(EmbedDirectiveMarkdownTransform, node, tokens);
                return embedDirectiveMarkdownTransform;
            }
        }
    ]);
    return EmbedDirectiveMarkdownTransform;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vbWFya2Rvd24vZGlyZWN0aXZlL2VtYmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zZm9ybS9tYXJrZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIGV4dGVuZHMgTWFya2Rvd25UcmFuc2Zvcm0ge1xuICBhZGRBZnRlclN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXhpc3RpbmdOb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIHN1cGVyLmFkZEFmdGVyKGV4aXN0aW5nTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlQW5kVG9rZW5zKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtID0gTWFya2Rvd25UcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoRW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSIsImFkZEFmdGVyU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJleGlzdGluZ05vZGUiLCJhZGRBZnRlciIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZUFuZFRva2VucyIsInRva2VucyIsIm5vZGUiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIiwiTWFya2Rvd25UcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7K0RBRlM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmLElBQUEsQUFBTUEsZ0RBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0NBQWdDQyx1QkFBdUIsRUFBRUMsT0FBTztnQkFDOUQsSUFBTUMsZUFBZUYseUJBQTBCLEdBQUc7Z0JBRWxELHVCQUppQkYsNENBSVhLLFlBQU4sSUFBSyxhQUFVRCxjQUFjRDtZQUMvQjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUNKLHVCQUF1QixFQUFFSyxNQUFNO2dCQUN6RSxJQUFNQyxPQUFPTix5QkFDUE8sa0NBQWtDQyxpQkFBaUIsQ0FBQ0MsaUJBQWlCLENBVDFEWCxpQ0FTNEZRLE1BQU1EO2dCQUVuSCxPQUFPRTtZQUNUOzs7V0FabUJUO0VBQXdDVSxpQkFBaUIifQ==
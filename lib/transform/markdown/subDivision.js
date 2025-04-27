"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubDivisionMarkdownTransform;
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
var SubDivisionMarkdownTransform = /*#__PURE__*/ function(Transform) {
    _inherits(SubDivisionMarkdownTransform, Transform);
    function SubDivisionMarkdownTransform(node, tokens, subDivisionMarkdownNode) {
        _class_call_check(this, SubDivisionMarkdownTransform);
        var _this;
        _this = _call_super(this, SubDivisionMarkdownTransform, [
            node,
            tokens
        ]);
        _this.subDivisionMarkdownNode = subDivisionMarkdownNode;
        return _this;
    }
    _create_class(SubDivisionMarkdownTransform, [
        {
            key: "removeFromDivisionMarkdownNode",
            value: function removeFromDivisionMarkdownNode(divisionMarkdownNode, context) {
                var parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(SubDivisionMarkdownTransform.prototype), "removeFrom", this).call(this, parentNode, context);
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(subDivisionMarkdownNode) {
                var node = subDivisionMarkdownNode, tokens = null, subDivisionMarkdownTransform = _occamdom.Transform.fromNodeAndTokens(SubDivisionMarkdownTransform, node, tokens);
                return subDivisionMarkdownTransform;
            }
        }
    ]);
    return SubDivisionMarkdownTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vbWFya2Rvd24vc3ViRGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViRGl2aXNpb25NYXJrZG93blRyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2Vucywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpIHtcbiAgICBzdXBlcihub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5zdWJEaXZpc2lvbk1hcmtkb3duTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgcmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgIHN1cGVyLnJlbW92ZUZyb20ocGFyZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25UcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoU3ViRGl2aXNpb25NYXJrZG93blRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvbk1hcmtkb3duVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3ViRGl2aXNpb25NYXJrZG93blRyYW5zZm9ybSIsIm5vZGUiLCJ0b2tlbnMiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInBhcmVudE5vZGUiLCJyZW1vdmVGcm9tIiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93blRyYW5zZm9ybSIsIlRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt3QkFGSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsNkNBQU47Y0FBTUE7YUFBQUEsNkJBQ1BDLElBQUksRUFBRUMsTUFBTSxFQUFFQyx1QkFBdUI7Z0NBRDlCSDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBTUM7O1FBRVosTUFBS0MsdUJBQXVCLEdBQUdBOzs7a0JBSmRIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBLCtCQUErQkMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQzFELElBQU1DLGFBQWFGLHNCQUFzQixHQUFHO2dCQUU1Qyx1QkFWaUJMLHlDQVVYUSxjQUFOLElBQUssYUFBWUQsWUFBWUQ7WUFDL0I7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCTix1QkFBdUI7Z0JBQ3hELElBQU1GLE9BQU9FLHlCQUNQRCxTQUFTLE1BQ1RRLCtCQUErQkMsbUJBQVMsQ0FBQ0MsaUJBQWlCLENBaEIvQ1osOEJBZ0I4RUMsTUFBTUM7Z0JBRXJHLE9BQU9RO1lBQ1Q7OztXQW5CbUJWO0VBQXFDVyxtQkFBUyJ9
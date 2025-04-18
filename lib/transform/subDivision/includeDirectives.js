"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IncludeDirectivesSubDivisionTransform;
    }
});
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision"));
var _query = require("../../utilities/query");
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
var IncludeDirectivesSubDivisionTransform = /*#__PURE__*/ function(SubDivisionTransform) {
    _inherits(IncludeDirectivesSubDivisionTransform, SubDivisionTransform);
    function IncludeDirectivesSubDivisionTransform(node, tokens, subDivisionMarkdownNode, includeDirectiveMarkdownNodes) {
        _class_call_check(this, IncludeDirectivesSubDivisionTransform);
        var _this;
        _this = _call_super(this, IncludeDirectivesSubDivisionTransform, [
            node,
            tokens,
            subDivisionMarkdownNode
        ]);
        _this.includeDirectiveMarkdownNodes = includeDirectiveMarkdownNodes;
        return _this;
    }
    _create_class(IncludeDirectivesSubDivisionTransform, [
        {
            key: "getIncludeDirectiveMarkdownNodes",
            value: function getIncludeDirectiveMarkdownNodes() {
                return this.includeDirectiveMarkdownNodes;
            }
        },
        {
            key: "removeFromDivisionMarkdownNode",
            value: function removeFromDivisionMarkdownNode(divisionMarkdownNode, context) {
                var ignored = divisionMarkdownNode.isIgnored();
                if (ignored) {
                    return;
                }
                _get(_get_prototype_of(IncludeDirectivesSubDivisionTransform.prototype), "removeFromDivisionMarkdownNode", this).call(this, divisionMarkdownNode, context);
            }
        },
        {
            key: "removeSubDivisionMarkdownNode",
            value: function removeSubDivisionMarkdownNode(divisionMarkdownNode, context) {
                this.includeDirectiveMarkdownNodes.forEach(function(includeDirectiveMarkdownNode) {
                    var includeDirectiveTransform = includeDirectiveMarkdownNode.resolve(context);
                    if (includeDirectiveTransform !== null) {
                        var _$divisionMarkdownNode = includeDirectiveTransform.getDivisionMarkdownNode(), subDivisionMarkdownNodes = includeDirectiveTransform.addDivisionMarkdownNode(context);
                        subDivisionMarkdownNodes.forEach(function(subDivisionMarkdownNode) {
                            subDivisionMarkdownNode.resolveIncludes(_$divisionMarkdownNode, context);
                        });
                    }
                });
                this.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
                var includeDirectivesSubDivisionTransform = null;
                var node = subDivisionMarkdownNode, includeDirectiveMarkdownNodes = (0, _query.includeDirectiveMarkdownNodesFromNode)(node), includeDirectiveMarkdownNodesLength = includeDirectiveMarkdownNodes.length;
                if (includeDirectiveMarkdownNodesLength > 0) {
                    includeDirectivesSubDivisionTransform = _subDivision.default.fromSubDivisionMarkdownNode(IncludeDirectivesSubDivisionTransform, subDivisionMarkdownNode, includeDirectiveMarkdownNodes, context);
                }
                return includeDirectivesSubDivisionTransform;
            }
        }
    ]);
    return IncludeDirectivesSubDivisionTransform;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vc3ViRGl2aXNpb24vaW5jbHVkZURpcmVjdGl2ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uXCI7XG5cbmltcG9ydCB7IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25UcmFuc2Zvcm0gZXh0ZW5kcyBTdWJEaXZpc2lvblRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2Vucywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzKSB7XG4gICAgc3VwZXIobm9kZSwgdG9rZW5zLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSk7XG5cbiAgICB0aGlzLmluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBnZXRJbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGlnbm9yZWQgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5pc0lnbm9yZWQoKTtcblxuICAgIGlmIChpZ25vcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3VwZXIucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5pbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IGluY2x1ZGVEaXJlY3RpdmVUcmFuc2Zvcm0uZ2V0RGl2aXNpb25NYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gaW5jbHVkZURpcmVjdGl2ZVRyYW5zZm9ybS5hZGREaXZpc2lvbk1hcmtkb3duTm9kZShjb250ZXh0KTtcblxuICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBTdWJEaXZpc2lvblRyYW5zZm9ybS5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoSW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblRyYW5zZm9ybSwgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJub2RlIiwidG9rZW5zIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsImdldEluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzIiwicmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiaWdub3JlZCIsImlzSWdub3JlZCIsInJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9yRWFjaCIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlVHJhbnNmb3JtIiwicmVzb2x2ZSIsImdldERpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiYWRkRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXNvbHZlSW5jbHVkZXMiLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlc1N1YkRpdmlzaW9uVHJhbnNmb3JtIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiU3ViRGl2aXNpb25UcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpZO3FCQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQUEsQUFBTUEsc0RBQU47Y0FBTUE7YUFBQUEsc0NBQ1BDLElBQUksRUFBRUMsTUFBTSxFQUFFQyx1QkFBdUIsRUFBRUMsNkJBQTZCO2dDQUQ3REo7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQU1DO1lBQVFDOztRQUVwQixNQUFLQyw2QkFBNkIsR0FBR0E7OztrQkFKcEJKOztZQU9uQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCw2QkFBNkI7WUFDM0M7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsK0JBQStCQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDMUQsSUFBTUMsVUFBVUYscUJBQXFCRyxTQUFTO2dCQUU5QyxJQUFJRCxTQUFTO29CQUNYO2dCQUNGO2dCQUVBLHVCQWxCaUJULGtEQWtCWE0sa0NBQU4sSUFBSyxhQUFnQ0Msc0JBQXNCQztZQUM3RDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJKLG9CQUFvQixFQUFFQyxPQUFPO2dCQUN6RCxJQUFJLENBQUNKLDZCQUE2QixDQUFDUSxPQUFPLENBQUMsU0FBQ0M7b0JBQzFDLElBQU1DLDRCQUE0QkQsNkJBQTZCRSxPQUFPLENBQUNQO29CQUV2RSxJQUFJTSw4QkFBOEIsTUFBTTt3QkFDdEMsSUFBTVAseUJBQXVCTywwQkFBMEJFLHVCQUF1QixJQUN4RUMsMkJBQTJCSCwwQkFBMEJJLHVCQUF1QixDQUFDVjt3QkFFbkZTLHlCQUF5QkwsT0FBTyxDQUFDLFNBQUNUOzRCQUNoQ0Esd0JBQXdCZ0IsZUFBZSxDQUFDWix3QkFBc0JDO3dCQUNoRTtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJLENBQUNGLDhCQUE4QixDQUFDQyxzQkFBc0JDO1lBQzVEOzs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QmpCLHVCQUF1QixFQUFFSyxPQUFPO2dCQUNqRSxJQUFJYSx3Q0FBd0M7Z0JBRTVDLElBQU1wQixPQUFPRSx5QkFDUEMsZ0NBQWdDa0IsSUFBQUEsNENBQXFDLEVBQUNyQixPQUN0RXNCLHNDQUFzQ25CLDhCQUE4Qm9CLE1BQU07Z0JBRWhGLElBQUlELHNDQUFzQyxHQUFHO29CQUMzQ0Ysd0NBQXdDSSxvQkFBb0IsQ0FBQ0wsMkJBQTJCLENBOUN6RXBCLHVDQThDaUhHLHlCQUF5QkMsK0JBQStCSTtnQkFDMUw7Z0JBRUEsT0FBT2E7WUFDVDs7O1dBbERtQnJCO0VBQThDeUIsb0JBQW9CIn0=
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IncludeDirectivesSubDivisionReplacement;
    }
});
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../subDivision"));
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
var IncludeDirectivesSubDivisionReplacement = /*#__PURE__*/ function(SubDivisionReplacement) {
    _inherits(IncludeDirectivesSubDivisionReplacement, SubDivisionReplacement);
    function IncludeDirectivesSubDivisionReplacement(node, tokens, subDivisionMarkdownNode, includeDirectiveMarkdownNodes) {
        _class_call_check(this, IncludeDirectivesSubDivisionReplacement);
        var _this;
        _this = _call_super(this, IncludeDirectivesSubDivisionReplacement, [
            node,
            tokens,
            subDivisionMarkdownNode
        ]);
        _this.includeDirectiveMarkdownNodes = includeDirectiveMarkdownNodes;
        return _this;
    }
    _create_class(IncludeDirectivesSubDivisionReplacement, [
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
                _get(_get_prototype_of(IncludeDirectivesSubDivisionReplacement.prototype), "removeFromDivisionMarkdownNode", this).call(this, divisionMarkdownNode, context);
            }
        },
        {
            key: "removeSubDivisionMarkdownNode",
            value: function removeSubDivisionMarkdownNode(divisionMarkdownNode, context) {
                this.includeDirectiveMarkdownNodes.forEach(function(includeDirectiveMarkdownNode) {
                    var includeDirectiveReplacement = includeDirectiveMarkdownNode.resolve(context);
                    if (includeDirectiveReplacement !== null) {
                        var _$divisionMarkdownNode = includeDirectiveReplacement.getDivisionMarkdownNode(), subDivisionMarkdownNodes = includeDirectiveReplacement.addDivisionMarkdownNode(context);
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
                var includeDirectivesSubDivisionReplacement = null;
                var node = subDivisionMarkdownNode, includeDirectiveMarkdownNodes = (0, _query.includeDirectiveMarkdownNodesFromNode)(node), includeDirectiveMarkdownNodesLength = includeDirectiveMarkdownNodes.length;
                if (includeDirectiveMarkdownNodesLength > 0) {
                    includeDirectivesSubDivisionReplacement = _subDivision.default.fromSubDivisionMarkdownNode(IncludeDirectivesSubDivisionReplacement, subDivisionMarkdownNode, includeDirectiveMarkdownNodes, context);
                }
                return includeDirectivesSubDivisionReplacement;
            }
        }
    ]);
    return IncludeDirectivesSubDivisionReplacement;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vc3ViRGl2aXNpb24vaW5jbHVkZURpcmVjdGl2ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi9zdWJEaXZpc2lvblwiO1xuXG5pbXBvcnQgeyBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZXh0ZW5kcyBTdWJEaXZpc2lvblJlcGxhY2VtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMpIHtcbiAgICBzdXBlcihub2RlLCB0b2tlbnMsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgIHRoaXMuaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMgPSBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIGdldEluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgcmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaWdub3JlZCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmlzSWdub3JlZCgpO1xuXG4gICAgaWYgKGlnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdXBlci5yZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICB0aGlzLmluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzLmZvckVhY2goKGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudCA9IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgICAgaWYgKGluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IGluY2x1ZGVEaXJlY3RpdmVSZXBsYWNlbWVudC5nZXREaXZpc2lvbk1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBpbmNsdWRlRGlyZWN0aXZlUmVwbGFjZW1lbnQuYWRkRGl2aXNpb25NYXJrZG93bk5vZGUoY29udGV4dCk7XG5cbiAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUluY2x1ZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKEluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50Iiwibm9kZSIsInRva2VucyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMiLCJnZXRJbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsInJlbW92ZUZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsImlnbm9yZWQiLCJpc0lnbm9yZWQiLCJyZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZvckVhY2giLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaW5jbHVkZURpcmVjdGl2ZVJlcGxhY2VtZW50IiwicmVzb2x2ZSIsImdldERpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiYWRkRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXNvbHZlSW5jbHVkZXMiLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJTdWJEaXZpc2lvblJlcGxhY2VtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztrRUFKYztxQkFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFBLEFBQU1BLHdEQUFOO2NBQU1BO2FBQUFBLHdDQUNQQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsdUJBQXVCLEVBQUVDLDZCQUE2QjtnQ0FEN0RKOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFNQztZQUFRQzs7UUFFcEIsTUFBS0MsNkJBQTZCLEdBQUdBOzs7a0JBSnBCSjs7WUFPbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsNkJBQTZCO1lBQzNDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLCtCQUErQkMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQzFELElBQU1DLFVBQVVGLHFCQUFxQkcsU0FBUztnQkFFOUMsSUFBSUQsU0FBUztvQkFDWDtnQkFDRjtnQkFFQSx1QkFsQmlCVCxvREFrQlhNLGtDQUFOLElBQUssYUFBZ0NDLHNCQUFzQkM7WUFDN0Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsOEJBQThCSixvQkFBb0IsRUFBRUMsT0FBTztnQkFDekQsSUFBSSxDQUFDSiw2QkFBNkIsQ0FBQ1EsT0FBTyxDQUFDLFNBQUNDO29CQUMxQyxJQUFNQyw4QkFBOEJELDZCQUE2QkUsT0FBTyxDQUFDUDtvQkFFekUsSUFBSU0sZ0NBQWdDLE1BQU07d0JBQ3hDLElBQU1QLHlCQUF1Qk8sNEJBQTRCRSx1QkFBdUIsSUFDMUVDLDJCQUEyQkgsNEJBQTRCSSx1QkFBdUIsQ0FBQ1Y7d0JBRXJGUyx5QkFBeUJMLE9BQU8sQ0FBQyxTQUFDVDs0QkFDaENBLHdCQUF3QmdCLGVBQWUsQ0FBQ1osd0JBQXNCQzt3QkFDaEU7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDRiw4QkFBOEIsQ0FBQ0Msc0JBQXNCQztZQUM1RDs7OztZQUVPWSxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJqQix1QkFBdUIsRUFBRUssT0FBTztnQkFDakUsSUFBSWEsMENBQTBDO2dCQUU5QyxJQUFNcEIsT0FBT0UseUJBQ1BDLGdDQUFnQ2tCLElBQUFBLDRDQUFxQyxFQUFDckIsT0FDdEVzQixzQ0FBc0NuQiw4QkFBOEJvQixNQUFNO2dCQUVoRixJQUFJRCxzQ0FBc0MsR0FBRztvQkFDM0NGLDBDQUEwQ0ksb0JBQXNCLENBQUNMLDJCQUEyQixDQTlDN0VwQix5Q0E4Q3VIRyx5QkFBeUJDLCtCQUErQkk7Z0JBQ2hNO2dCQUVBLE9BQU9hO1lBQ1Q7OztXQWxEbUJyQjtFQUFnRHlCLG9CQUFzQiJ9
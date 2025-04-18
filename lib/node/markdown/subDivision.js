"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubDivisionMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _embedDirectives = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/embedDirectives"));
var _includeDirectives = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/includeDirectives"));
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
var SubDivisionMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(SubDivisionMarkdownNode, MarkdownNode);
    function SubDivisionMarkdownNode() {
        _class_call_check(this, SubDivisionMarkdownNode);
        return _call_super(this, SubDivisionMarkdownNode, arguments);
    }
    _create_class(SubDivisionMarkdownNode, [
        {
            key: "resolveEmbeddings",
            value: function resolveEmbeddings(divisionMarkdownNode, context) {
                var subDivisionMarkdownNode = this, embedDirectivesSubDivisionTransform = _embedDirectives.default.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                if (embedDirectivesSubDivisionTransform !== null) {
                    var subDivisionMarkdownNodes = embedDirectivesSubDivisionTransform.replaceSubDivisionMarkdownNode(divisionMarkdownNode, context);
                    subDivisionMarkdownNodes.forEach(function(subDivisionMarkdownNode) {
                        subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
                    });
                }
            }
        },
        {
            key: "resolveIncludes",
            value: function resolveIncludes(divisionMarkdownNode, context) {
                var subDivisionMarkdownNode = this, includeDirectivesSubDivisionTransform = _includeDirectives.default.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                if (includeDirectivesSubDivisionTransform !== null) {
                    includeDirectivesSubDivisionTransform.removeSubDivisionMarkdownNode(divisionMarkdownNode, context);
                }
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(SubDivisionMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return SubDivisionMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3N1YkRpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgRW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9zdWJEaXZpc2lvbi9lbWJlZERpcmVjdGl2ZXNcIjtcbmltcG9ydCBJbmNsdWRlRGlyZWN0aXZlc1N1YkRpdmlzaW9uVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vc3ViRGl2aXNpb24vaW5jbHVkZURpcmVjdGl2ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICByZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgLy8vXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBFbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblRyYW5zZm9ybS5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBlbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblRyYW5zZm9ybS5yZXBsYWNlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUVtYmVkZGluZ3MoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZUluY2x1ZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlc1N1YkRpdmlzaW9uVHJhbnNmb3JtID0gSW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblRyYW5zZm9ybS5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgIGluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25UcmFuc2Zvcm0ucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlc29sdmVFbWJlZGRpbmdzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0Iiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJlbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblRyYW5zZm9ybSIsIkVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uVHJhbnNmb3JtIiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGVzIiwicmVwbGFjZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9yRWFjaCIsInJlc29sdmVJbmNsdWRlcyIsImluY2x1ZGVEaXJlY3RpdmVzU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJJbmNsdWRlRGlyZWN0aXZlc1N1YkRpdmlzaW9uVHJhbnNmb3JtIiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytEQUpJO3NFQUN1Qjt3RUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFBLEFBQU1BLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQzdDLElBQU1DLDBCQUEwQixJQUFJLEVBQzlCQyxzQ0FBc0NDLHdCQUFtQyxDQUFDQywyQkFBMkIsQ0FBQ0gseUJBQXlCRDtnQkFFckksSUFBSUUsd0NBQXdDLE1BQU07b0JBQ2hELElBQU1HLDJCQUEyQkgsb0NBQW9DSSw4QkFBOEIsQ0FBQ1Asc0JBQXNCQztvQkFFMUhLLHlCQUF5QkUsT0FBTyxDQUFDLFNBQUNOO3dCQUNoQ0Esd0JBQXdCSCxpQkFBaUIsQ0FBQ0Msc0JBQXNCQztvQkFDbEU7Z0JBQ0Y7WUFDRjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JULG9CQUFvQixFQUFFQyxPQUFPO2dCQUMzQyxJQUFNQywwQkFBMEIsSUFBSSxFQUM5QlEsd0NBQXdDQywwQkFBcUMsQ0FBQ04sMkJBQTJCLENBQUNILHlCQUF5QkQ7Z0JBRXpJLElBQUlTLDBDQUEwQyxNQUFNO29CQUNsREEsc0NBQXNDRSw2QkFBNkIsQ0FBQ1osc0JBQXNCQztnQkFDNUY7WUFDRjs7OztZQUVPWSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQXZCMUdmLHlCQXVCb0lnQixVQUFVQyxZQUFZQztZQUFVOzs7V0F2QnBLbEI7RUFBZ0NtQixpQkFBWSJ9
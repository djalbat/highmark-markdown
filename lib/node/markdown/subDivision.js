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
var _embedDirectives = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/embedDirectives"));
var _includeDirectives = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision/includeDirectives"));
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
                var subDivisionMarkdownNode = this, embedDirectivesSubDivisionReplacement = _embedDirectives.default.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                if (embedDirectivesSubDivisionReplacement !== null) {
                    var subDivisionMarkdownNodes = embedDirectivesSubDivisionReplacement.replaceSubDivisionMarkdownNode(divisionMarkdownNode, context);
                    subDivisionMarkdownNodes.forEach(function(subDivisionMarkdownNode) {
                        subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
                    });
                }
            }
        },
        {
            key: "resolveIncludes",
            value: function resolveIncludes(divisionMarkdownNode, context) {
                var subDivisionMarkdownNode = this, includeDirectivesSubDivisionReplacement = _includeDirectives.default.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                if (includeDirectivesSubDivisionReplacement !== null) {
                    includeDirectivesSubDivisionReplacement.removeSubDivisionMarkdownNode(divisionMarkdownNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3N1YkRpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgRW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCBmcm9tIFwiLi4vLi4vcmVwbGFjZW1lbnQvc3ViRGl2aXNpb24vZW1iZWREaXJlY3RpdmVzXCI7XG5pbXBvcnQgSW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi8uLi9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9pbmNsdWRlRGlyZWN0aXZlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gRW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudC5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVwbGFjZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVJbmNsdWRlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgLy8vXG4gICAgICAgICAgaW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gSW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50LmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoaW5jbHVkZURpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBpbmNsdWRlRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQucmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlc29sdmVFbWJlZGRpbmdzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0Iiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJlbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiRW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInJlcGxhY2VTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZvckVhY2giLCJyZXNvbHZlSW5jbHVkZXMiLCJpbmNsdWRlRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJJbmNsdWRlRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJyZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkk7c0VBQ3lCO3dFQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQUEsQUFBTUEsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDN0MsSUFBTUMsMEJBQTBCLElBQUksRUFDOUJDLHdDQUF3Q0Msd0JBQXFDLENBQUNDLDJCQUEyQixDQUFDSCx5QkFBeUJEO2dCQUV6SSxJQUFJRSwwQ0FBMEMsTUFBTTtvQkFDbEQsSUFBTUcsMkJBQTJCSCxzQ0FBc0NJLDhCQUE4QixDQUFDUCxzQkFBc0JDO29CQUU1SEsseUJBQXlCRSxPQUFPLENBQUMsU0FBQ047d0JBQ2hDQSx3QkFBd0JILGlCQUFpQixDQUFDQyxzQkFBc0JDO29CQUNsRTtnQkFDRjtZQUNGOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQlQsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQzNDLElBQU1DLDBCQUEwQixJQUFJLEVBQzlCUSwwQ0FBMENDLDBCQUF1QyxDQUFDTiwyQkFBMkIsQ0FBQ0gseUJBQXlCRDtnQkFFN0ksSUFBSVMsNENBQTRDLE1BQU07b0JBQ3BEQSx3Q0FBd0NFLDZCQUE2QixDQUFDWixzQkFBc0JDO2dCQUM5RjtZQUNGOzs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osZ0NBQWdDLENBdkIxR2YseUJBdUJvSWdCLFVBQVVDLFlBQVlDO1lBQVU7OztXQXZCcEtsQjtFQUFnQ21CLGlCQUFZIn0=
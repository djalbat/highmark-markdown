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
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _footnote = /*#__PURE__*/ _interop_require_default(require("../../transform/footnote"));
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../transform/footnotesList"));
var _footnote1 = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision/footnote"));
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
var backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
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
                var embeddingsResolved = false;
                var node = this, embedDirectiveMarkdownNodes = (0, _query.embedDirectiveMarkdownNodesFromNode)(node), embedDirectiveTransforms = embedDirectiveMarkdownNodes.reduce(function(embedDirectiveTransforms, embedDirectiveMarkdownNode) {
                    var embedDirectiveTransform = embedDirectiveMarkdownNode.resolveEmbedding(context);
                    if (embedDirectiveTransform !== null) {
                        embedDirectiveTransforms.push(embedDirectiveTransform);
                    }
                    return embedDirectiveTransforms;
                }, []), embedDirectiveTransformsLength = embedDirectiveTransforms.length;
                if (embedDirectiveTransformsLength > 0) {
                    var subDivisionMarkdownNode = this; ///
                    backwardsForEach(embedDirectiveTransforms, function(embedDirectiveTransform) {
                        embedDirectiveTransform.addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, context);
                    });
                    embeddingsResolved = true;
                }
                return embeddingsResolved;
            }
        },
        {
            key: "createFootnotesListTransform",
            value: function createFootnotesListTransform(footnoteTransformMap, context) {
                var footnoteDivisionTransforms = this.findDivisionTransforms(_footnote1.default, context);
                footnoteDivisionTransforms.forEach(function(footnoteDivisionTransform) {
                    var footnoteTransform = _footnote.default.fromFootnoteDivisionTransform(footnoteDivisionTransform), identifier = footnoteDivisionTransform.identifier(context);
                    footnoteTransformMap[identifier] = footnoteTransform;
                });
                var divisionMarkdownNode = this, footnotesListDivisionTransform = _footnotesList.default.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);
                return footnotesListDivisionTransform;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3N1YkRpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IEZvb3Rub3RlVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vZm9vdG5vdGVcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0VHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vZm9vdG5vdGVzTGlzdFwiO1xuaW1wb3J0IEZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9zdWJEaXZpc2lvbi9mb290bm90ZVwiO1xuXG5pbXBvcnQgeyBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICByZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBlbWJlZGRpbmdzUmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm1zID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzLnJlZHVjZSgoZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm1zLCBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0gPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5nKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm1zLnB1c2goZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm1zO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICBlbWJlZERpcmVjdGl2ZVRyYW5zZm9ybXNMZW5ndGggPSBlbWJlZERpcmVjdGl2ZVRyYW5zZm9ybXMubGVuZ3RoO1xuXG4gICAgaWYgKGVtYmVkRGlyZWN0aXZlVHJhbnNmb3Jtc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpczsgLy8vXG5cbiAgICAgIGJhY2t3YXJkc0ZvckVhY2goZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm1zLCAoZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0uYWRkQWZ0ZXJTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgICAgfSk7XG5cbiAgICAgIGVtYmVkZGluZ3NSZXNvbHZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtYmVkZGluZ3NSZXNvbHZlZDtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0oZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtcyA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtcyhGb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcblxuICAgIGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgICAgIGNvbnN0IGZvb3Rub3RlVHJhbnNmb3JtID0gRm9vdG5vdGVUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0oZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICBmb290bm90ZVRyYW5zZm9ybU1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlVHJhbnNmb3JtO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcChkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImJhY2t3YXJkc0ZvckVhY2giLCJhcnJheVV0aWxpdGllcyIsInJlc29sdmVFbWJlZGRpbmdzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiZW1iZWRkaW5nc1Jlc29sdmVkIiwibm9kZSIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm1zIiwicmVkdWNlIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJlbWJlZERpcmVjdGl2ZVRyYW5zZm9ybSIsInJlc29sdmVFbWJlZGRpbmciLCJwdXNoIiwiZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm1zTGVuZ3RoIiwibGVuZ3RoIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJhZGRBZnRlclN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY3JlYXRlRm9vdG5vdGVzTGlzdFRyYW5zZm9ybSIsImZvb3Rub3RlVHJhbnNmb3JtTWFwIiwiZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMiLCJmaW5kRGl2aXNpb25UcmFuc2Zvcm1zIiwiRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSIsImZvckVhY2giLCJmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtIiwiZm9vdG5vdGVUcmFuc2Zvcm0iLCJGb290bm90ZVRyYW5zZm9ybSIsImZyb21Gb290bm90ZURpdmlzaW9uVHJhbnNmb3JtIiwiaWRlbnRpZmllciIsImZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSIsIkZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7eUJBWFU7K0RBRU47K0RBQ0s7b0VBQ0s7Z0VBQ0c7cUJBRWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBTSxBQUFFQyxtQkFBcUJDLHlCQUFjLENBQW5DRDtBQUVPLElBQUEsQUFBTUQsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDN0MsSUFBSUMscUJBQXFCO2dCQUV6QixJQUFNQyxPQUFPLElBQUksRUFDWEMsOEJBQThCQyxJQUFBQSwwQ0FBbUMsRUFBQ0YsT0FDbEVHLDJCQUEyQkYsNEJBQTRCRyxNQUFNLENBQUMsU0FBQ0QsMEJBQTBCRTtvQkFDdkYsSUFBTUMsMEJBQTBCRCwyQkFBMkJFLGdCQUFnQixDQUFDVDtvQkFFNUUsSUFBSVEsNEJBQTRCLE1BQU07d0JBQ3BDSCx5QkFBeUJLLElBQUksQ0FBQ0Y7b0JBQ2hDO29CQUVBLE9BQU9IO2dCQUNULEdBQUcsRUFBRSxHQUNMTSxpQ0FBaUNOLHlCQUF5Qk8sTUFBTTtnQkFFdEUsSUFBSUQsaUNBQWlDLEdBQUc7b0JBQ3RDLElBQU1FLDBCQUEwQixJQUFJLEVBQUUsR0FBRztvQkFFekNqQixpQkFBaUJTLDBCQUEwQixTQUFDRzt3QkFDMUNBLHdCQUF3Qk0sK0JBQStCLENBQUNELHlCQUF5QmQsc0JBQXNCQztvQkFDekc7b0JBRUFDLHFCQUFxQjtnQkFDdkI7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkJDLG9CQUFvQixFQUFFaEIsT0FBTztnQkFDeEQsSUFBTWlCLDZCQUE2QixJQUFJLENBQUNDLHNCQUFzQixDQUFDQyxrQkFBeUIsRUFBRW5CO2dCQUUxRmlCLDJCQUEyQkcsT0FBTyxDQUFDLFNBQUNDO29CQUNsQyxJQUFNQyxvQkFBb0JDLGlCQUFpQixDQUFDQyw2QkFBNkIsQ0FBQ0gsNEJBQ3BFSSxhQUFhSiwwQkFBMEJJLFVBQVUsQ0FBQ3pCO29CQUV4RGdCLG9CQUFvQixDQUFDUyxXQUFXLEdBQUdIO2dCQUNyQztnQkFFQSxJQUFNdkIsdUJBQXVCLElBQUksRUFDM0IyQixpQ0FBaUNDLHNCQUFzQixDQUFDQywrQ0FBK0MsQ0FBQzdCLHNCQUFzQmlCLHNCQUFzQmhCO2dCQUUxSixPQUFPMEI7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQTlDMUdsQyx5QkE4Q29JbUMsVUFBVUMsWUFBWUM7WUFBVTs7O1dBOUNwS3JDO0VBQWdDc0MsaUJBQVkifQ==
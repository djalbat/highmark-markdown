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
var _markdown1 = require("../../utilities/markdown");
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
                var node = this, embedDirectiveMarkdownNodes = (0, _markdown1.embedDirectiveMarkdownNodesFromNode)(node), embedDirectiveMarkdownTransforms = embedDirectiveMarkdownNodes.reduce(function(embedDirectiveMarkdownTransforms, embedDirectiveMarkdownNode) {
                    var embedDirectiveTransform = embedDirectiveMarkdownNode.resolveEmbedding(context);
                    if (embedDirectiveTransform !== null) {
                        embedDirectiveMarkdownTransforms.push(embedDirectiveTransform);
                    }
                    return embedDirectiveMarkdownTransforms;
                }, []), embedDirectiveMarkdownTransformsLength = embedDirectiveMarkdownTransforms.length;
                if (embedDirectiveMarkdownTransformsLength > 0) {
                    var subDivisionMarkdownNode = this; ///
                    backwardsForEach(embedDirectiveMarkdownTransforms, function(embedDirectiveTransform) {
                        embedDirectiveTransform.addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
                    });
                    embeddingsResolved = true;
                }
                return embeddingsResolved;
            }
        },
        {
            key: "createFootnotesListTransform",
            value: function createFootnotesListTransform(footnoteTransformMap, context) {
                var footnoteDivisionTransforms = this.findDivisionTransforms(FootnoteDivisionTransform, context);
                footnoteDivisionTransforms.forEach(function(footnoteDivisionTransform) {
                    var footnoteTransform = FootnoteTransform.fromFootnoteDivisionTransform(footnoteDivisionTransform), identifier = footnoteDivisionTransform.identifier(context);
                    footnoteTransformMap[identifier] = footnoteTransform;
                });
                var divisionMarkdownNode = this, footnotesListDivisionTransform = FootnotesListTransform.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3N1YkRpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWFya2Rvd25cIjtcblxuY29uc3QgeyBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICByZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBlbWJlZGRpbmdzUmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXMgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMucmVkdWNlKChlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcywgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUucmVzb2x2ZUVtYmVkZGluZyhjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zLnB1c2goZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zTGVuZ3RoID0gZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXMubGVuZ3RoO1xuXG4gICAgaWYgKGVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzOyAvLy9cblxuICAgICAgYmFja3dhcmRzRm9yRWFjaChlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcywgKGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgIGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtLmFkZEFmdGVyU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgICAgfSk7XG5cbiAgICAgIGVtYmVkZGluZ3NSZXNvbHZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtYmVkZGluZ3NSZXNvbHZlZDtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0oZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtcyA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtcyhGb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcblxuICAgIGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgICAgIGNvbnN0IGZvb3Rub3RlVHJhbnNmb3JtID0gRm9vdG5vdGVUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0oZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICBmb290bm90ZVRyYW5zZm9ybU1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlVHJhbnNmb3JtO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcChkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImJhY2t3YXJkc0ZvckVhY2giLCJhcnJheVV0aWxpdGllcyIsInJlc29sdmVFbWJlZGRpbmdzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiZW1iZWRkaW5nc1Jlc29sdmVkIiwibm9kZSIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXMiLCJyZWR1Y2UiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtIiwicmVzb2x2ZUVtYmVkZGluZyIsInB1c2giLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3Jtc0xlbmd0aCIsImxlbmd0aCIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiYWRkQWZ0ZXJTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImNyZWF0ZUZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0iLCJmb290bm90ZVRyYW5zZm9ybU1hcCIsImZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zIiwiZmluZERpdmlzaW9uVHJhbnNmb3JtcyIsIkZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0iLCJmb3JFYWNoIiwiZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSIsImZvb3Rub3RlVHJhbnNmb3JtIiwiRm9vdG5vdGVUcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSIsImlkZW50aWZpZXIiLCJmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm0iLCJGb290bm90ZXNMaXN0VHJhbnNmb3JtIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVUcmFuc2Zvcm1NYXAiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOytEQUVOO3lCQUUyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFNLEFBQUVDLG1CQUFxQkMseUJBQWMsQ0FBbkNEO0FBRU8sSUFBQSxBQUFNRCx3Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQzdDLElBQUlDLHFCQUFxQjtnQkFFekIsSUFBTUMsT0FBTyxJQUFJLEVBQ1hDLDhCQUE4QkMsSUFBQUEsOENBQW1DLEVBQUNGLE9BQ2xFRyxtQ0FBbUNGLDRCQUE0QkcsTUFBTSxDQUFDLFNBQUNELGtDQUFrQ0U7b0JBQ3ZHLElBQU1DLDBCQUEwQkQsMkJBQTJCRSxnQkFBZ0IsQ0FBQ1Q7b0JBRTVFLElBQUlRLDRCQUE0QixNQUFNO3dCQUNwQ0gsaUNBQWlDSyxJQUFJLENBQUNGO29CQUN4QztvQkFFQSxPQUFPSDtnQkFDVCxHQUFHLEVBQUUsR0FDTE0seUNBQXlDTixpQ0FBaUNPLE1BQU07Z0JBRXRGLElBQUlELHlDQUF5QyxHQUFHO29CQUM5QyxJQUFNRSwwQkFBMEIsSUFBSSxFQUFFLEdBQUc7b0JBRXpDakIsaUJBQWlCUyxrQ0FBa0MsU0FBQ0c7d0JBQ2xEQSx3QkFBd0JNLCtCQUErQixDQUFDRCx5QkFBeUJiO29CQUNuRjtvQkFFQUMscUJBQXFCO2dCQUN2QjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBLDZCQUE2QkMsb0JBQW9CLEVBQUVoQixPQUFPO2dCQUN4RCxJQUFNaUIsNkJBQTZCLElBQUksQ0FBQ0Msc0JBQXNCLENBQUNDLDJCQUEyQm5CO2dCQUUxRmlCLDJCQUEyQkcsT0FBTyxDQUFDLFNBQUNDO29CQUNsQyxJQUFNQyxvQkFBb0JDLGtCQUFrQkMsNkJBQTZCLENBQUNILDRCQUNwRUksYUFBYUosMEJBQTBCSSxVQUFVLENBQUN6QjtvQkFFeERnQixvQkFBb0IsQ0FBQ1MsV0FBVyxHQUFHSDtnQkFDckM7Z0JBRUEsSUFBTXZCLHVCQUF1QixJQUFJLEVBQzNCMkIsaUNBQWlDQyx1QkFBdUJDLCtDQUErQyxDQUFDN0Isc0JBQXNCaUIsc0JBQXNCaEI7Z0JBRTFKLE9BQU8wQjtZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0osZ0NBQWdDLENBOUMxR2xDLHlCQThDb0ltQyxVQUFVQyxZQUFZQztZQUFVOzs7V0E5Q3BLckM7RUFBZ0NzQyxpQkFBWSJ9
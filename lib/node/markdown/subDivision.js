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
                var node = this, embedDirectiveMarkdownNodes = (0, _query.embedDirectiveMarkdownNodesFromNode)(node), embedDirectiveMarkdownTransforms = embedDirectiveMarkdownNodes.reduce(function(embedDirectiveMarkdownTransforms, embedDirectiveMarkdownNode) {
                    var embedDirectiveTransform = embedDirectiveMarkdownNode.resolveEmbedding(context);
                    if (embedDirectiveTransform !== null) {
                        embedDirectiveMarkdownTransforms.push(embedDirectiveTransform);
                    }
                    return embedDirectiveMarkdownTransforms;
                }, []), embedDirectiveMarkdownTransformsLength = embedDirectiveMarkdownTransforms.length;
                if (embedDirectiveMarkdownTransformsLength > 0) {
                    var subDivisionMarkdownNode = this; ///
                    backwardsForEach(embedDirectiveMarkdownTransforms, function(embedDirectiveTransform) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3N1YkRpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICByZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBlbWJlZGRpbmdzUmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXMgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMucmVkdWNlKChlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcywgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUucmVzb2x2ZUVtYmVkZGluZyhjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zLnB1c2goZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zTGVuZ3RoID0gZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXMubGVuZ3RoO1xuXG4gICAgaWYgKGVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzOyAvLy9cblxuICAgICAgYmFja3dhcmRzRm9yRWFjaChlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcywgKGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgIGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtLmFkZEFmdGVyU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0pO1xuXG4gICAgICBlbWJlZGRpbmdzUmVzb2x2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBlbWJlZGRpbmdzUmVzb2x2ZWQ7XG4gIH1cblxuICBjcmVhdGVGb290bm90ZXNMaXN0VHJhbnNmb3JtKGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMgPSB0aGlzLmZpbmREaXZpc2lvblRyYW5zZm9ybXMoRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG5cbiAgICBmb290bm90ZURpdmlzaW9uVHJhbnNmb3Jtcy5mb3JFYWNoKChmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSA9PiB7XG4gICAgICBjb25zdCBmb290bm90ZVRyYW5zZm9ybSA9IEZvb3Rub3RlVHJhbnNmb3JtLmZyb21Gb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pLFxuICAgICAgICAgICAgaWRlbnRpZmllciA9IGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0uaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgICAgZm9vdG5vdGVUcmFuc2Zvcm1NYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZVRyYW5zZm9ybTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSA9IEZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVUcmFuc2Zvcm1NYXAoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJiYWNrd2FyZHNGb3JFYWNoIiwiYXJyYXlVdGlsaXRpZXMiLCJyZXNvbHZlRW1iZWRkaW5ncyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsImVtYmVkZGluZ3NSZXNvbHZlZCIsIm5vZGUiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zIiwicmVkdWNlIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJlbWJlZERpcmVjdGl2ZVRyYW5zZm9ybSIsInJlc29sdmVFbWJlZGRpbmciLCJwdXNoIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXNMZW5ndGgiLCJsZW5ndGgiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImFkZEFmdGVyU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjcmVhdGVGb290bm90ZXNMaXN0VHJhbnNmb3JtIiwiZm9vdG5vdGVUcmFuc2Zvcm1NYXAiLCJmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtcyIsImZpbmREaXZpc2lvblRyYW5zZm9ybXMiLCJGb290bm90ZURpdmlzaW9uVHJhbnNmb3JtIiwiZm9yRWFjaCIsImZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0iLCJmb290bm90ZVRyYW5zZm9ybSIsIkZvb3Rub3RlVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0iLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtIiwiRm9vdG5vdGVzTGlzdFRyYW5zZm9ybSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlVHJhbnNmb3JtTWFwIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsrREFFTjtxQkFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBTSxBQUFFQyxtQkFBcUJDLHlCQUFjLENBQW5DRDtBQUVPLElBQUEsQUFBTUQsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDN0MsSUFBSUMscUJBQXFCO2dCQUV6QixJQUFNQyxPQUFPLElBQUksRUFDWEMsOEJBQThCQyxJQUFBQSwwQ0FBbUMsRUFBQ0YsT0FDbEVHLG1DQUFtQ0YsNEJBQTRCRyxNQUFNLENBQUMsU0FBQ0Qsa0NBQWtDRTtvQkFDdkcsSUFBTUMsMEJBQTBCRCwyQkFBMkJFLGdCQUFnQixDQUFDVDtvQkFFNUUsSUFBSVEsNEJBQTRCLE1BQU07d0JBQ3BDSCxpQ0FBaUNLLElBQUksQ0FBQ0Y7b0JBQ3hDO29CQUVBLE9BQU9IO2dCQUNULEdBQUcsRUFBRSxHQUNMTSx5Q0FBeUNOLGlDQUFpQ08sTUFBTTtnQkFFdEYsSUFBSUQseUNBQXlDLEdBQUc7b0JBQzlDLElBQU1FLDBCQUEwQixJQUFJLEVBQUUsR0FBRztvQkFFekNqQixpQkFBaUJTLGtDQUFrQyxTQUFDRzt3QkFDbERBLHdCQUF3Qk0sK0JBQStCLENBQUNELHlCQUF5QmQsc0JBQXNCQztvQkFDekc7b0JBRUFDLHFCQUFxQjtnQkFDdkI7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkJDLG9CQUFvQixFQUFFaEIsT0FBTztnQkFDeEQsSUFBTWlCLDZCQUE2QixJQUFJLENBQUNDLHNCQUFzQixDQUFDQywyQkFBMkJuQjtnQkFFMUZpQiwyQkFBMkJHLE9BQU8sQ0FBQyxTQUFDQztvQkFDbEMsSUFBTUMsb0JBQW9CQyxrQkFBa0JDLDZCQUE2QixDQUFDSCw0QkFDcEVJLGFBQWFKLDBCQUEwQkksVUFBVSxDQUFDekI7b0JBRXhEZ0Isb0JBQW9CLENBQUNTLFdBQVcsR0FBR0g7Z0JBQ3JDO2dCQUVBLElBQU12Qix1QkFBdUIsSUFBSSxFQUMzQjJCLGlDQUFpQ0MsdUJBQXVCQywrQ0FBK0MsQ0FBQzdCLHNCQUFzQmlCLHNCQUFzQmhCO2dCQUUxSixPQUFPMEI7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQTlDMUdsQyx5QkE4Q29JbUMsVUFBVUMsWUFBWUM7WUFBVTs7O1dBOUNwS3JDO0VBQWdDc0MsaUJBQVkifQ==
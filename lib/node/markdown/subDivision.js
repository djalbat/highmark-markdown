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
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(SubDivisionMarkdownNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return SubDivisionMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3N1YkRpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWFya2Rvd25cIjtcblxuY29uc3QgeyBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICByZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBlbWJlZGRpbmdzUmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXMgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMucmVkdWNlKChlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcywgZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtID0gZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUucmVzb2x2ZUVtYmVkZGluZyhjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zLnB1c2goZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zTGVuZ3RoID0gZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXMubGVuZ3RoO1xuXG4gICAgaWYgKGVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzOyAvLy9cblxuICAgICAgYmFja3dhcmRzRm9yRWFjaChlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcywgKGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgIGVtYmVkRGlyZWN0aXZlVHJhbnNmb3JtLmFkZEFmdGVyU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgICAgfSk7XG5cbiAgICAgIGVtYmVkZGluZ3NSZXNvbHZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtYmVkZGluZ3NSZXNvbHZlZDtcbiAgfVxuXG4gIGNyZWF0ZUZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0oZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtcyA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtcyhGb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcblxuICAgIGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgICAgIGNvbnN0IGZvb3Rub3RlVHJhbnNmb3JtID0gRm9vdG5vdGVUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0oZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICBmb290bm90ZVRyYW5zZm9ybU1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlVHJhbnNmb3JtO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtID0gRm9vdG5vdGVzTGlzdFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcChkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoU3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiYmFja3dhcmRzRm9yRWFjaCIsImFycmF5VXRpbGl0aWVzIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJlbWJlZGRpbmdzUmVzb2x2ZWQiLCJub2RlIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcyIsInJlZHVjZSIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiZW1iZWREaXJlY3RpdmVUcmFuc2Zvcm0iLCJyZXNvbHZlRW1iZWRkaW5nIiwicHVzaCIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zTGVuZ3RoIiwibGVuZ3RoIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJhZGRBZnRlclN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY3JlYXRlRm9vdG5vdGVzTGlzdFRyYW5zZm9ybSIsImZvb3Rub3RlVHJhbnNmb3JtTWFwIiwiZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMiLCJmaW5kRGl2aXNpb25UcmFuc2Zvcm1zIiwiRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSIsImZvckVhY2giLCJmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtIiwiZm9vdG5vdGVUcmFuc2Zvcm0iLCJGb290bm90ZVRyYW5zZm9ybSIsImZyb21Gb290bm90ZURpdmlzaW9uVHJhbnNmb3JtIiwiaWRlbnRpZmllciIsImZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSIsIkZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsrREFFTjt5QkFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBTSxBQUFFQyxtQkFBcUJDLHlCQUFjLENBQW5DRDtBQUVPLElBQUEsQUFBTUQsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLG9CQUFvQixFQUFFQyxPQUFPO2dCQUM3QyxJQUFJQyxxQkFBcUI7Z0JBRXpCLElBQU1DLE9BQU8sSUFBSSxFQUNYQyw4QkFBOEJDLElBQUFBLDhDQUFtQyxFQUFDRixPQUNsRUcsbUNBQW1DRiw0QkFBNEJHLE1BQU0sQ0FBQyxTQUFDRCxrQ0FBa0NFO29CQUN2RyxJQUFNQywwQkFBMEJELDJCQUEyQkUsZ0JBQWdCLENBQUNUO29CQUU1RSxJQUFJUSw0QkFBNEIsTUFBTTt3QkFDcENILGlDQUFpQ0ssSUFBSSxDQUFDRjtvQkFDeEM7b0JBRUEsT0FBT0g7Z0JBQ1QsR0FBRyxFQUFFLEdBQ0xNLHlDQUF5Q04saUNBQWlDTyxNQUFNO2dCQUV0RixJQUFJRCx5Q0FBeUMsR0FBRztvQkFDOUMsSUFBTUUsMEJBQTBCLElBQUksRUFBRSxHQUFHO29CQUV6Q2pCLGlCQUFpQlMsa0NBQWtDLFNBQUNHO3dCQUNsREEsd0JBQXdCTSwrQkFBK0IsQ0FBQ0QseUJBQXlCYjtvQkFDbkY7b0JBRUFDLHFCQUFxQjtnQkFDdkI7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkJDLG9CQUFvQixFQUFFaEIsT0FBTztnQkFDeEQsSUFBTWlCLDZCQUE2QixJQUFJLENBQUNDLHNCQUFzQixDQUFDQywyQkFBMkJuQjtnQkFFMUZpQiwyQkFBMkJHLE9BQU8sQ0FBQyxTQUFDQztvQkFDbEMsSUFBTUMsb0JBQW9CQyxrQkFBa0JDLDZCQUE2QixDQUFDSCw0QkFDcEVJLGFBQWFKLDBCQUEwQkksVUFBVSxDQUFDekI7b0JBRXhEZ0Isb0JBQW9CLENBQUNTLFdBQVcsR0FBR0g7Z0JBQ3JDO2dCQUVBLElBQU12Qix1QkFBdUIsSUFBSSxFQUMzQjJCLGlDQUFpQ0MsdUJBQXVCQywrQ0FBK0MsQ0FBQzdCLHNCQUFzQmlCLHNCQUFzQmhCO2dCQUUxSixPQUFPMEI7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsaUJBQVksQ0FBQ0wsMENBQTBDLENBOUMxSWxDLHlCQThDb0ttQyxVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0E5Q2hOdEM7RUFBZ0N1QyxpQkFBWSJ9
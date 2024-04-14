"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsListMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _contentsItem = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/contentsItem"));
var _contents = require("../../utilities/contents");
var _ruleNames = require("../../ruleNames");
var _query = require("../../utilities/query");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var filter = _necessary.arrayUtilities.filter;
var ContentsListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ContentsListMarkdownNode, MarkdownNode);
    var _super = _create_super(ContentsListMarkdownNode);
    function ContentsListMarkdownNode() {
        _class_call_check(this, ContentsListMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ContentsListMarkdownNode, null, [
        {
            key: "fromDivisionMarkdownNode",
            value: function fromDivisionMarkdownNode(divisionMarkdownNode, context) {
                var node = divisionMarkdownNode, contentsMarkdownNode = (0, _query.contentsMarkdownNodeFromNode)(node);
                if (contentsMarkdownNode === null) {
                    return;
                }
                var headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodeAndContentsMarkdownNode(divisionMarkdownNode, contentsMarkdownNode, context), headingMarkdownNodesLength = headingMarkdownNodes.length;
                if (headingMarkdownNodesLength === 0) {
                    return;
                }
                var ruleName = _ruleNames.CONTENTS_LIST_RULE_NAME, childNodes = childNodesFromHeadingMarkdownNodes(headingMarkdownNodes, context), opacity = null, contentsListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity), replacementChildNode = contentsListMarkdownNode, replacedChildNode = contentsMarkdownNode; ///
                Object.assign(context, {
                    replacedChildNode: replacedChildNode,
                    replacementChildNode: replacementChildNode
                });
            }
        }
    ]);
    return ContentsListMarkdownNode;
}(_markdown.default);
function childNodesFromHeadingMarkdownNodes(headingMarkdownNodes, context) {
    var nodes = headingMarkdownNodes, nestedNode = (0, _contents.nestNodes)(nodes), childNestedNodes = nestedNode.getChildNestedNodes(), childNodes = childNestedNodes.map(function(childNestedNode) {
        var nestedHeadingMarkdownNode = childNestedNode, contentsItemMarkdownNode = _contentsItem.default.fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode(ContentsListMarkdownNode, nestedHeadingMarkdownNode, context), childNode = contentsItemMarkdownNode; ///
        return childNode;
    });
    return childNodes;
}
function headingMarkdownNodesFromDivisionMarkdownNodeAndContentsMarkdownNode(divisionMarkdownNode, contentsMarkdownNode, context) {
    var node = divisionMarkdownNode, maximumLevel = contentsMarkdownNode.maximumLevel(context), headingMarkdownNodes = (0, _query.headingMarkdownNodesFromNode)(node);
    filter(headingMarkdownNodes, function(headingMarkdownNode) {
        var level = headingMarkdownNode.getLevel();
        if (level <= maximumLevel) {
            return true;
        }
    });
    return headingMarkdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vY29udGVudHNJdGVtXCI7XG5cbmltcG9ydCB7IG5lc3ROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGVudHNcIjtcbmltcG9ydCB7IENPTlRFTlRTX0xJU1RfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSwgY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgY29udGVudHNNYXJrZG93bk5vZGUgPSBjb250ZW50c01hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGNvbnRlbnRzTWFya2Rvd25Ob2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZENvbnRlbnRzTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZW50c01hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPSBoZWFkaW5nTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IENPTlRFTlRTX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzRnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzKGhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSksXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gY29udGVudHNNYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgcmVwbGFjZWRDaGlsZE5vZGUsXG4gICAgICByZXBsYWNlbWVudENoaWxkTm9kZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoaWxkTm9kZXNGcm9tSGVhZGluZ01hcmtkb3duTm9kZXMoaGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgIG5lc3RlZE5vZGUgPSBuZXN0Tm9kZXMobm9kZXMpLFxuICAgICAgICBjaGlsZE5lc3RlZE5vZGVzID0gbmVzdGVkTm9kZS5nZXRDaGlsZE5lc3RlZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9kZXMgPSBjaGlsZE5lc3RlZE5vZGVzLm1hcCgoY2hpbGROZXN0ZWROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSA9IGNoaWxkTmVzdGVkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSA9IENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZS5mcm9tQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlQW5kTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShDb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cblxuZnVuY3Rpb24gaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c01hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGVudHNNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgIG1heGltdW1MZXZlbCA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlLm1heGltdW1MZXZlbChjb250ZXh0KSxcbiAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gIGZpbHRlcihoZWFkaW5nTWFya2Rvd25Ob2RlcywgKGhlYWRpbmdNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBsZXZlbCA9IGhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0TGV2ZWwoKTtcblxuICAgIGlmIChsZXZlbCA8PSBtYXhpbXVtTGV2ZWwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRpbmdNYXJrZG93bk5vZGVzO1xufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0Iiwibm9kZSIsImNvbnRlbnRzTWFya2Rvd25Ob2RlIiwiY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c01hcmtkb3duTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJDT05URU5UU19MSVNUX1JVTEVfTkFNRSIsImNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzRnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzIiwib3BhY2l0eSIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicmVwbGFjZW1lbnRDaGlsZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsIm5vZGVzIiwibmVzdGVkTm9kZSIsIm5lc3ROb2RlcyIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwibWFwIiwiY2hpbGROZXN0ZWROb2RlIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsImNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsIkNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsImZyb21Db250ZW50c0xpc3RNYXJrZG93bk5vZGVBbmROZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiY2hpbGROb2RlIiwibWF4aW11bUxldmVsIiwiaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJsZXZlbCIsImdldExldmVsIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7Ozt5QkFYVTsrREFFTjttRUFDWTt3QkFFWDt5QkFDYztxQkFDbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxJQUFBLEFBQU1ELHlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDM0QsSUFBTUMsT0FBT0Ysc0JBQ1BHLHVCQUF1QkMsSUFBQUEsbUNBQTRCLEVBQUNGO2dCQUUxRCxJQUFJQyx5QkFBeUIsTUFBTTtvQkFDakM7Z0JBQ0Y7Z0JBRUEsSUFBTUUsdUJBQXVCQyxvRUFBb0VOLHNCQUFzQkcsc0JBQXNCRixVQUN2SU0sNkJBQTZCRixxQkFBcUJHLE1BQU07Z0JBRTlELElBQUlELCtCQUErQixHQUFHO29CQUNwQztnQkFDRjtnQkFFQSxJQUFNRSxXQUFXQyxrQ0FBdUIsRUFDbENDLGFBQWFDLG1DQUFtQ1Asc0JBQXNCSixVQUN0RVksVUFBVSxNQUNWQywyQkFBMkJDLGlCQUFZLENBQUNDLGdDQUFnQyxDQW5CN0RwQiwwQkFtQndGYSxVQUFVRSxZQUFZRSxVQUN6SEksdUJBQXVCSCwwQkFDdkJJLG9CQUFvQmYsc0JBQXVCLEdBQUc7Z0JBRXBEZ0IsT0FBT0MsTUFBTSxDQUFDbkIsU0FBUztvQkFDckJpQixtQkFBQUE7b0JBQ0FELHNCQUFBQTtnQkFDRjtZQUNGOzs7V0EzQm1CckI7RUFBaUNtQixpQkFBWTtBQThCbEUsU0FBU0gsbUNBQW1DUCxvQkFBb0IsRUFBRUosT0FBTztJQUN2RSxJQUFNb0IsUUFBUWhCLHNCQUNSaUIsYUFBYUMsSUFBQUEsbUJBQVMsRUFBQ0YsUUFDdkJHLG1CQUFtQkYsV0FBV0csbUJBQW1CLElBQ2pEZCxhQUFhYSxpQkFBaUJFLEdBQUcsQ0FBQyxTQUFDQztRQUNqQyxJQUFNQyw0QkFBNEJELGlCQUM1QkUsMkJBQTJCQyxxQkFBd0IsQ0FBQ0Msd0RBQXdELENBQUNuQywwQkFBMEJnQywyQkFBMkIzQixVQUNsSytCLFlBQVlILDBCQUEwQixHQUFHO1FBRS9DLE9BQU9HO0lBQ1Q7SUFFTixPQUFPckI7QUFDVDtBQUVBLFNBQVNMLG9FQUFvRU4sb0JBQW9CLEVBQUVHLG9CQUFvQixFQUFFRixPQUFPO0lBQzlILElBQU1DLE9BQU9GLHNCQUNQaUMsZUFBZTlCLHFCQUFxQjhCLFlBQVksQ0FBQ2hDLFVBQ2pESSx1QkFBdUI2QixJQUFBQSxtQ0FBNEIsRUFBQ2hDO0lBRTFETCxPQUFPUSxzQkFBc0IsU0FBQzhCO1FBQzVCLElBQU1DLFFBQVFELG9CQUFvQkUsUUFBUTtRQUUxQyxJQUFJRCxTQUFTSCxjQUFjO1lBQ3pCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBTzVCO0FBQ1QifQ==
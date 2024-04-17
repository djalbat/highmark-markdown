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
            key: "fromDivisionMarkdownNodeAndContentsMarkdownNode",
            value: function fromDivisionMarkdownNodeAndContentsMarkdownNode(divisionMarkdownNode, contentsMarkdownNode, context) {
                var contentsListMarkdownNode = null;
                var headingMarkdownNodes = headingMarkdownNodesFromDivisionMarkdownNodeAndContentsMarkdownNode(divisionMarkdownNode, contentsMarkdownNode, context), headingMarkdownNodesLength = headingMarkdownNodes.length;
                if (headingMarkdownNodesLength > 0) {
                    var ruleName = _ruleNames.CONTENTS_LIST_RULE_NAME, childNodes = childNodesFromHeadingMarkdownNodes(headingMarkdownNodes, context), opacity = null;
                    contentsListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);
                }
                return contentsListMarkdownNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd24vY29udGVudHNJdGVtXCI7XG5cbmltcG9ydCB7IG5lc3ROb2RlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGVudHNcIjtcbmltcG9ydCB7IENPTlRFTlRTX0xJU1RfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgaGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kQ29udGVudHNNYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRlbnRzTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kQ29udGVudHNNYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRlbnRzTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChoZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gQ09OVEVOVFNfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc0Zyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyhoZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgICBvcGFjaXR5ID0gbnVsbDtcblxuICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hpbGROb2Rlc0Zyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyhoZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBub2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzLCAvLy9cbiAgICAgICAgbmVzdGVkTm9kZSA9IG5lc3ROb2Rlcyhub2RlcyksXG4gICAgICAgIGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWROb2RlLmdldENoaWxkTmVzdGVkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2RlcyA9IGNoaWxkTmVzdGVkTm9kZXMubWFwKChjaGlsZE5lc3RlZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlID0gY2hpbGROZXN0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgY29udGVudHNJdGVtTWFya2Rvd25Ob2RlID0gQ29udGVudHNJdGVtTWFya2Rvd25Ob2RlLmZyb21Db250ZW50c0xpc3RNYXJrZG93bk5vZGVBbmROZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlID0gY29udGVudHNJdGVtTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBjaGlsZE5vZGVzO1xufVxuXG5mdW5jdGlvbiBoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZENvbnRlbnRzTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZW50c01hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgbWF4aW11bUxldmVsID0gY29udGVudHNNYXJrZG93bk5vZGUubWF4aW11bUxldmVsKGNvbnRleHQpLFxuICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgZmlsdGVyKGhlYWRpbmdNYXJrZG93bk5vZGVzLCAoaGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGxldmVsID0gaGVhZGluZ01hcmtkb3duTm9kZS5nZXRMZXZlbCgpO1xuXG4gICAgaWYgKGxldmVsIDw9IG1heGltdW1MZXZlbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaGVhZGluZ01hcmtkb3duTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRDb250ZW50c01hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGVudHNNYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXMiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZENvbnRlbnRzTWFya2Rvd25Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsIkNPTlRFTlRTX0xJU1RfUlVMRV9OQU1FIiwiY2hpbGROb2RlcyIsImNoaWxkTm9kZXNGcm9tSGVhZGluZ01hcmtkb3duTm9kZXMiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJub2RlcyIsIm5lc3RlZE5vZGUiLCJuZXN0Tm9kZXMiLCJjaGlsZE5lc3RlZE5vZGVzIiwiZ2V0Q2hpbGROZXN0ZWROb2RlcyIsIm1hcCIsImNoaWxkTmVzdGVkTm9kZSIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJmcm9tQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlQW5kTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsImNoaWxkTm9kZSIsIm5vZGUiLCJtYXhpbXVtTGV2ZWwiLCJoZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImxldmVsIiwiZ2V0TGV2ZWwiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7O3lCQVhVOytEQUVOO21FQUNZO3dCQUVYO3lCQUNjO3FCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCx5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BLGdEQUFnREMsb0JBQW9CLEVBQUVDLG9CQUFvQixFQUFFQyxPQUFPO2dCQUN4RyxJQUFJQywyQkFBMkI7Z0JBRS9CLElBQU1DLHVCQUF1QkMsb0VBQW9FTCxzQkFBc0JDLHNCQUFzQkMsVUFDdklJLDZCQUE2QkYscUJBQXFCRyxNQUFNO2dCQUU5RCxJQUFJRCw2QkFBNkIsR0FBRztvQkFDbEMsSUFBTUUsV0FBV0Msa0NBQXVCLEVBQ2xDQyxhQUFhQyxtQ0FBbUNQLHNCQUFzQkYsVUFDdEVVLFVBQVU7b0JBRWhCVCwyQkFBMkJVLGlCQUFZLENBQUNDLGdDQUFnQyxDQVp6RGxCLDBCQVlvRlksVUFBVUUsWUFBWUU7Z0JBQzNIO2dCQUVBLE9BQU9UO1lBQ1Q7OztXQWhCbUJQO0VBQWlDaUIsaUJBQVk7QUFtQmxFLFNBQVNGLG1DQUFtQ1Asb0JBQW9CLEVBQUVGLE9BQU87SUFDdkUsSUFBTWEsUUFBUVgsc0JBQ1JZLGFBQWFDLElBQUFBLG1CQUFTLEVBQUNGLFFBQ3ZCRyxtQkFBbUJGLFdBQVdHLG1CQUFtQixJQUNqRFQsYUFBYVEsaUJBQWlCRSxHQUFHLENBQUMsU0FBQ0M7UUFDakMsSUFBTUMsNEJBQTRCRCxpQkFDNUJFLDJCQUEyQkMscUJBQXdCLENBQUNDLHdEQUF3RCxDQUFDN0IsMEJBQTBCMEIsMkJBQTJCcEIsVUFDbEt3QixZQUFZSCwwQkFBMEIsR0FBRztRQUUvQyxPQUFPRztJQUNUO0lBRU4sT0FBT2hCO0FBQ1Q7QUFFQSxTQUFTTCxvRUFBb0VMLG9CQUFvQixFQUFFQyxvQkFBb0IsRUFBRUMsT0FBTztJQUM5SCxJQUFNeUIsT0FBTzNCLHNCQUNQNEIsZUFBZTNCLHFCQUFxQjJCLFlBQVksQ0FBQzFCLFVBQ2pERSx1QkFBdUJ5QixJQUFBQSxtQ0FBNEIsRUFBQ0Y7SUFFMUQ5QixPQUFPTyxzQkFBc0IsU0FBQzBCO1FBQzVCLElBQU1DLFFBQVFELG9CQUFvQkUsUUFBUTtRQUUxQyxJQUFJRCxTQUFTSCxjQUFjO1lBQ3pCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT3hCO0FBQ1QifQ==
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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _contentsItem = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/contentsItem"));
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
                var contentsListMarkdownNode = null;
                var node = divisionMarkdownNode, contentsMarkdownNode = (0, _query.contentsMarkdownNodeFromNode)(node, context);
                if (contentsMarkdownNode !== null) {
                    var level = contentsMarkdownNode.level(context), contentsItemMarkdownNodes = contentsItemMarkdownNodesFromNodeAndLevel(node, level), ruleName = _ruleNames.CONTENTS_LIST_RULE_NAME, childNodes = contentsItemMarkdownNodes, opacity = null;
                    contentsListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);
                }
                return contentsListMarkdownNode;
            }
        }
    ]);
    return ContentsListMarkdownNode;
}(_markdown.default);
function contentsItemMarkdownNodesFromNodeAndLevel(node, level, context) {
    var primaryHeadingMarkdownNodes = (0, _query.primaryHeadingMarkdownNodesFromNode)(node, context), contentsItemMarkdownNodes = primaryHeadingMarkdownNodes.map(function(primaryHeadingMarkdownNode) {
        var contentsItemMarkdownNode = _contentsItem.default.fromPrimaryHeadingMarkdownNode(primaryHeadingMarkdownNode, context);
        return contentsItemMarkdownNode;
    });
    return contentsItemMarkdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0l0ZW1cIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfTElTVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBjb250ZW50c01hcmtkb3duTm9kZUZyb21Ob2RlLCBwcmltYXJ5SGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgY29udGVudHNNYXJrZG93bk5vZGUgPSBjb250ZW50c01hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRlbnRzTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsZXZlbCA9IGNvbnRlbnRzTWFya2Rvd25Ob2RlLmxldmVsKGNvbnRleHQpLFxuICAgICAgICAgICAgY29udGVudHNJdGVtTWFya2Rvd25Ob2RlcyA9IGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZXNGcm9tTm9kZUFuZExldmVsKG5vZGUsIGxldmVsKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gQ09OVEVOVFNfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gY29udGVudHNJdGVtTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgICAgICBvcGFjaXR5ID0gbnVsbDtcblxuICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50c0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udGVudHNJdGVtTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlQW5kTGV2ZWwobm9kZSwgbGV2ZWwsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJpbWFyeUhlYWRpbmdNYXJrZG93bk5vZGVzID0gcHJpbWFyeUhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZXMgPSBwcmltYXJ5SGVhZGluZ01hcmtkb3duTm9kZXMubWFwKChwcmltYXJ5SGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSA9IENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZS5mcm9tUHJpbWFyeUhlYWRpbmdNYXJrZG93bk5vZGUocHJpbWFyeUhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwibm9kZSIsImNvbnRlbnRzTWFya2Rvd25Ob2RlIiwiY29udGVudHNNYXJrZG93bk5vZGVGcm9tTm9kZSIsImxldmVsIiwiY29udGVudHNJdGVtTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZXNGcm9tTm9kZUFuZExldmVsIiwicnVsZU5hbWUiLCJDT05URU5UU19MSVNUX1JVTEVfTkFNRSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJwcmltYXJ5SGVhZGluZ01hcmtkb3duTm9kZXMiLCJwcmltYXJ5SGVhZGluZ01hcmtkb3duTm9kZXNGcm9tTm9kZSIsIm1hcCIsInByaW1hcnlIZWFkaW5nTWFya2Rvd25Ob2RlIiwiY29udGVudHNJdGVtTWFya2Rvd25Ob2RlIiwiQ29udGVudHNJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbVByaW1hcnlIZWFkaW5nTWFya2Rvd25Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OytEQU5JO21FQUNZO3lCQUVHO3FCQUMwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRSxJQUFBLEFBQU1BLHlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDM0QsSUFBSUMsMkJBQTJCO2dCQUUvQixJQUFNQyxPQUFPSCxzQkFDUEksdUJBQXVCQyxJQUFBQSxtQ0FBNEIsRUFBQ0YsTUFBTUY7Z0JBRWhFLElBQUlHLHlCQUF5QixNQUFNO29CQUNqQyxJQUFNRSxRQUFRRixxQkFBcUJFLEtBQUssQ0FBQ0wsVUFDbkNNLDRCQUE0QkMsMENBQTBDTCxNQUFNRyxRQUM1RUcsV0FBV0Msa0NBQXVCLEVBQ2xDQyxhQUFhSiwyQkFDYkssVUFBVTtvQkFFaEJWLDJCQUEyQlcsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBZHpEaEIsMEJBY29GVyxVQUFVRSxZQUFZQztnQkFDM0g7Z0JBRUEsT0FBT1Y7WUFDVDs7O1dBbEJtQko7RUFBaUNlLGlCQUFZO0FBcUJsRSxTQUFTTCwwQ0FBMENMLElBQUksRUFBRUcsS0FBSyxFQUFFTCxPQUFPO0lBQ3JFLElBQU1jLDhCQUE4QkMsSUFBQUEsMENBQW1DLEVBQUNiLE1BQU1GLFVBQ3hFTSw0QkFBNEJRLDRCQUE0QkUsR0FBRyxDQUFDLFNBQUNDO1FBQzNELElBQU1DLDJCQUEyQkMscUJBQXdCLENBQUNDLDhCQUE4QixDQUFDSCw0QkFBNEJqQjtRQUVySCxPQUFPa0I7SUFDVDtJQUVOLE9BQU9aO0FBQ1QifQ==
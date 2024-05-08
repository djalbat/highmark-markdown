"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsItemMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _contentsLink = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/contentsLink"));
var _ruleNames = require("../../ruleNames");
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
var ContentsItemMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ContentsItemMarkdownNode, MarkdownNode);
    var _super = _create_super(ContentsItemMarkdownNode);
    function ContentsItemMarkdownNode() {
        _class_call_check(this, ContentsItemMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ContentsItemMarkdownNode, [
        {
            key: "getTokens",
            value: function getTokens() {
                var tokens = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                var childNodes = this.getChildNodes(), contentsItemMarkdownNodes = childNodes; ///
                contentsItemMarkdownNodes.forEach(function(contentsItemMarkdownNode) {
                    contentsItemMarkdownNode.getTokens(tokens);
                });
                return tokens;
            }
        }
    ], [
        {
            key: "fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode",
            value: function fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode(ContentsListMarkdownNode, nestedHeadingMarkdownNode, context) {
                var ruleName = _ruleNames.CONTENTS_ITEM_RULE_NAME, childNodes = [], contentsLinkMarkdownNode = _contentsLink.default.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);
                if (contentsLinkMarkdownNode !== null) {
                    var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                    headingMarkdownNode.addAnchor(context);
                    var childNode = contentsLinkMarkdownNode; ///
                    childNodes.push(childNode);
                }
                var childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes, nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;
                if (nestedHeadingMarkdownNodesLength > 0) {
                    var contentsListMarkdownNode = ContentsListMarkdownNode.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), childNode1 = contentsListMarkdownNode; ///
                    childNodes.push(childNode1);
                }
                var opacity = null, contentsItemMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsItemMarkdownNode, ruleName, childNodes, opacity);
                return contentsItemMarkdownNode;
            }
        }
    ]);
    return ContentsItemMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlua01hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpbmtcIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfSVRFTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGdldFRva2Vucyh0b2tlbnMgPSBbXSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgY29udGVudHNJdGVtTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZS5nZXRUb2tlbnModG9rZW5zKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZUFuZE5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUoQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBDT05URU5UU19JVEVNX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgY29udGVudHNMaW5rTWFya2Rvd25Ob2RlID0gQ29udGVudHNMaW5rTWFya2Rvd25Ob2RlLmZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRlbnRzTGlua01hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgaGVhZGluZ01hcmtkb3duTm9kZS5hZGRBbmNob3IoY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGNvbnRlbnRzTGlua01hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMucHVzaChjaGlsZE5vZGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkTmVzdGVkTm9kZXMgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLmdldENoaWxkTmVzdGVkTm9kZXMoKSxcbiAgICAgICAgICBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGNoaWxkTmVzdGVkTm9kZXMsICAvLy9cbiAgICAgICAgICBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgY2hpbGROb2RlID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgY2hpbGROb2Rlcy5wdXNoKGNoaWxkTm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgY29udGVudHNJdGVtTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsImdldFRva2VucyIsInRva2VucyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY29udGVudHNJdGVtTWFya2Rvd25Ob2RlcyIsImZvckVhY2giLCJjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJmcm9tQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlQW5kTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJjb250ZXh0IiwicnVsZU5hbWUiLCJDT05URU5UU19JVEVNX1JVTEVfTkFNRSIsImNvbnRlbnRzTGlua01hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlua01hcmtkb3duTm9kZSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwiYWRkQW5jaG9yIiwiY2hpbGROb2RlIiwicHVzaCIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OytEQUxJO21FQUNZO3lCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEseUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFVQyxTQUFBQSxpRUFBUyxFQUFFO2dCQUNuQixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsNEJBQTRCRixZQUFhLEdBQUc7Z0JBRWxERSwwQkFBMEJDLE9BQU8sQ0FBQyxTQUFDQztvQkFDakNBLHlCQUF5Qk4sU0FBUyxDQUFDQztnQkFDckM7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSx5REFBeURDLHdCQUF3QixFQUFFQyx5QkFBeUIsRUFBRUMsT0FBTztnQkFDMUgsSUFBTUMsV0FBV0Msa0NBQXVCLEVBQ2xDVixhQUFhLEVBQUUsRUFDZlcsMkJBQTJCQyxxQkFBd0IsQ0FBQ0MsNkJBQTZCLENBQUNOLDJCQUEyQkM7Z0JBRW5ILElBQUlHLDZCQUE2QixNQUFNO29CQUNyQyxJQUFNRyxPQUFPUCwwQkFBMEJRLE9BQU8sSUFDeENDLHNCQUFzQkYsTUFBTyxHQUFHO29CQUV0Q0Usb0JBQW9CQyxTQUFTLENBQUNUO29CQUU5QixJQUFNVSxZQUFZUCwwQkFBMEIsR0FBRztvQkFFL0NYLFdBQVdtQixJQUFJLENBQUNEO2dCQUNsQjtnQkFFQSxJQUFNRSxtQkFBbUJiLDBCQUEwQmMsbUJBQW1CLElBQ2hFQyw2QkFBNkJGLGtCQUM3QkcsbUNBQW1DRCwyQkFBMkJFLE1BQU07Z0JBRTFFLElBQUlELG1DQUFtQyxHQUFHO29CQUN4QyxJQUFNRSwyQkFBMkJuQix5QkFBeUJvQiw4QkFBOEIsQ0FBQ0osNEJBQTRCZCxVQUMvR1UsYUFBWU8sMEJBQTBCLEdBQUc7b0JBRS9DekIsV0FBV21CLElBQUksQ0FBQ0Q7Z0JBQ2xCO2dCQUVBLElBQU1TLFVBQVUsTUFDVnZCLDJCQUEyQndCLGlCQUFZLENBQUNDLGdDQUFnQyxDQXhDN0RoQywwQkF3Q3dGWSxVQUFVVCxZQUFZMkI7Z0JBRS9ILE9BQU92QjtZQUNUOzs7V0EzQ21CUDtFQUFpQytCLGlCQUFZIn0=
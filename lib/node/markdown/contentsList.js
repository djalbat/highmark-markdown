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
var _contents = require("../../utilities/contents");
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
var ContentsListMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ContentsListMarkdownNode, MarkdownNode);
    var _super = _create_super(ContentsListMarkdownNode);
    function ContentsListMarkdownNode() {
        _class_call_check(this, ContentsListMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ContentsListMarkdownNode, [
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
            key: "fromHeadingMarkdownNodes",
            value: function fromHeadingMarkdownNodes(headingMarkdownNodes, context) {
                var nodes = headingMarkdownNodes, nestedNode = (0, _contents.nestNodes)(nodes), childNestedNodes = nestedNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes, ruleName = _ruleNames.CONTENTS_LIST_RULE_NAME, childNodes = childNodesFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), opacity = null, contentsListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);
                return contentsListMarkdownNode;
            }
        },
        {
            key: "fromNestedHeadingMarkdownNodes",
            value: function fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
                var ruleName = _ruleNames.CONTENTS_LIST_RULE_NAME, childNodes = childNodesFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), opacity = null, contentsListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);
                return contentsListMarkdownNode;
            }
        }
    ]);
    return ContentsListMarkdownNode;
}(_markdown.default);
function childNodesFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
    var childNodes = nestedHeadingMarkdownNodes.map(function(nestedHeadingMarkdownNode) {
        var contentsItemMarkdownNode = _contentsItem.default.fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode(ContentsListMarkdownNode, nestedHeadingMarkdownNode, context), childNode = contentsItemMarkdownNode; ///
        return childNode;
    });
    return childNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0l0ZW1cIjtcblxuaW1wb3J0IHsgbmVzdE5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZW50c1wiO1xuaW1wb3J0IHsgQ09OVEVOVFNfTElTVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIGdldFRva2Vucyh0b2tlbnMgPSBbXSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgY29udGVudHNJdGVtTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZS5nZXRUb2tlbnModG9rZW5zKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzKGhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgICAgbmVzdGVkTm9kZSA9IG5lc3ROb2Rlcyhub2RlcyksXG4gICAgICAgICAgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZE5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gY2hpbGROZXN0ZWROb2RlcywgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gQ09OVEVOVFNfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcblxuICAgIHJldHVybiBjb250ZW50c0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBDT05URU5UU19MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGlsZE5vZGVzRnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlcy5tYXAoKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUgPSBDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUuZnJvbUNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZUFuZE5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUoQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLCBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZ2V0VG9rZW5zIiwidG9rZW5zIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjb250ZW50c0l0ZW1NYXJrZG93bk5vZGVzIiwiZm9yRWFjaCIsImNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsImZyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGVzIiwiY29udGV4dCIsIm5vZGVzIiwibmVzdGVkTm9kZSIsIm5lc3ROb2RlcyIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJydWxlTmFtZSIsIkNPTlRFTlRTX0xJU1RfUlVMRV9OQU1FIiwiY2hpbGROb2Rlc0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIm9wYWNpdHkiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIm1hcCIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJmcm9tQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlQW5kTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsImNoaWxkTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OytEQU5JO21FQUNZO3dCQUVYO3lCQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEseUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFVQyxTQUFBQSxpRUFBUyxFQUFFO2dCQUNuQixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsNEJBQTRCRixZQUFhLEdBQUc7Z0JBRWxERSwwQkFBMEJDLE9BQU8sQ0FBQyxTQUFDQztvQkFDakNBLHlCQUF5Qk4sU0FBUyxDQUFDQztnQkFDckM7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJDLG9CQUFvQixFQUFFQyxPQUFPO2dCQUMzRCxJQUFNQyxRQUFRRixzQkFDUkcsYUFBYUMsSUFBQUEsbUJBQVMsRUFBQ0YsUUFDdkJHLG1CQUFtQkYsV0FBV0csbUJBQW1CLElBQ2pEQyw2QkFBNkJGLGtCQUM3QkcsV0FBV0Msa0NBQXVCLEVBQ2xDZixhQUFhZ0IseUNBQXlDSCw0QkFBNEJOLFVBQ2xGVSxVQUFVLE1BQ1ZDLDJCQUEyQkMsaUJBQVksQ0FBQ0MsZ0NBQWdDLENBcEI3RHZCLDBCQW9Cd0ZpQixVQUFVZCxZQUFZaUI7Z0JBRS9ILE9BQU9DO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JSLDBCQUEwQixFQUFFTixPQUFPO2dCQUN2RSxJQUFNTyxXQUFXQyxrQ0FBdUIsRUFDbENmLGFBQWFnQix5Q0FBeUNILDRCQUE0Qk4sVUFDbEZVLFVBQVUsTUFDVkMsMkJBQTJCQyxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0E3QjdEdkIsMEJBNkJ3RmlCLFVBQVVkLFlBQVlpQjtnQkFFL0gsT0FBT0M7WUFDVDs7O1dBaENtQnJCO0VBQWlDc0IsaUJBQVk7QUFtQ2xFLFNBQVNILHlDQUF5Q0gsMEJBQTBCLEVBQUVOLE9BQU87SUFDbkYsSUFBTVAsYUFBYWEsMkJBQTJCUyxHQUFHLENBQUMsU0FBQ0M7UUFDakQsSUFBTW5CLDJCQUEyQm9CLHFCQUF3QixDQUFDQyx3REFBd0QsQ0FBQzVCLDBCQUEwQjBCLDJCQUEyQmhCLFVBQ2xLbUIsWUFBWXRCLDBCQUEwQixHQUFHO1FBRS9DLE9BQU9zQjtJQUNUO0lBRUEsT0FBTzFCO0FBQ1QifQ==
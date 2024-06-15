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
    _create_class(ContentsListMarkdownNode, null, [
        {
            key: "fromHeadingMarkdownNodes",
            value: // getTokens(tokens = []) {
            //   const childNodes = this.getChildNodes(),
            //         contentsItemMarkdownNodes = childNodes;  ///
            //
            //   contentsItemMarkdownNodes.forEach((contentsItemMarkdownNode) => {
            //     contentsItemMarkdownNode.getTokens(tokens);
            //   });
            //
            //   return tokens;
            // }
            function fromHeadingMarkdownNodes(headingMarkdownNodes, context) {
                var nestedHeadingMarkdownNodes = nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes), contentsItemReplacements = contentsItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), ruleName = _ruleNames.CONTENTS_LIST_RULE_NAME, childNodes = [], opacity = null, contentsListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);
                contentsItemReplacements.forEach(function(contentsItemReplacement) {
                    var parentNode = contentsListMarkdownNode; ///
                    contentsItemReplacement.appendTo(parentNode, context);
                });
                return contentsListMarkdownNode;
            }
        },
        {
            key: "fromNestedHeadingMarkdownNodes",
            value: function fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
                var contentsItemReplacements = contentsItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), ruleName = _ruleNames.CONTENTS_LIST_RULE_NAME, childNodes = [], opacity = null, contentsListMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsListMarkdownNode, ruleName, childNodes, opacity);
                contentsItemReplacements.forEach(function(contentsItemReplacement) {
                    var parentNode = contentsListMarkdownNode; ///
                    contentsItemReplacement.appendTo(parentNode, context);
                });
                return contentsListMarkdownNode;
            }
        }
    ]);
    return ContentsListMarkdownNode;
}(_markdown.default);
// function childNodesFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context) {
//   const childNodes = nestedHeadingMarkdownNodes.map((nestedHeadingMarkdownNode) => {
//     const contentsItemMarkdownNode = ContentsItemMarkdownNode.fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode(ContentsListMarkdownNode, nestedHeadingMarkdownNode, context),
//           childNode = contentsItemMarkdownNode; ///
//
//     return childNode;
//   });
//
//   return childNodes;
// }
function nestedHeadingMarkdownNodesFromHeadingMarkdownNodes(headingMarkdownNodes) {
    var nodes = headingMarkdownNodes, nestedNode = (0, _contents.nestNodes)(nodes), childNestedNodes = nestedNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes; ///
    return nestedHeadingMarkdownNodes;
}
function contentsItemReplacementsFromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes) {
// const contentsItemReplacements = nestedHeadingMarkdownNodes.map((nestedHeadingMarkdownNode) => {
//   const contentsItemMarkdownNode = ContentsItemMarkdownNode.fromContentsListMarkdownNodeAndNestedHeadingMarkdownNode(ContentsListMarkdownNode, nestedHeadingMarkdownNode, context),
//           childNode = contentsItemMarkdownNode; ///
//
//   return childNode;
// });
//
// return childNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0l0ZW1cIjtcblxuaW1wb3J0IHsgbmVzdE5vZGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZW50c1wiO1xuaW1wb3J0IHsgQ09OVEVOVFNfTElTVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIC8vIGdldFRva2Vucyh0b2tlbnMgPSBbXSkge1xuICAvLyAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgLy8gICAgICAgICBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuICAvL1xuICAvLyAgIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZXMuZm9yRWFjaCgoY29udGVudHNJdGVtTWFya2Rvd25Ob2RlKSA9PiB7XG4gIC8vICAgICBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUuZ2V0VG9rZW5zKHRva2Vucyk7XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIHRva2VucztcbiAgLy8gfVxuXG4gIHN0YXRpYyBmcm9tSGVhZGluZ01hcmtkb3duTm9kZXMoaGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzRnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzKGhlYWRpbmdNYXJrZG93bk5vZGVzKSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cyA9IGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50c0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBDT05URU5UU19MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW10sXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuXG4gICAgY29udGVudHNJdGVtUmVwbGFjZW1lbnRzLmZvckVhY2goKGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnROb2RlID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICAgIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50LmFwcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50c0l0ZW1SZXBsYWNlbWVudHMgPSBjb250ZW50c0l0ZW1SZXBsYWNlbWVudHNGcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gQ09OVEVOVFNfTElTVF9SVUxFX05BTUUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcblxuICAgIGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cy5mb3JFYWNoKChjb250ZW50c0l0ZW1SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgICBjb250ZW50c0l0ZW1SZXBsYWNlbWVudC5hcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZW50c0xpc3RNYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gY2hpbGROb2Rlc0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuLy8gICBjb25zdCBjaGlsZE5vZGVzID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMubWFwKChuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKSA9PiB7XG4vLyAgICAgY29uc3QgY29udGVudHNJdGVtTWFya2Rvd25Ob2RlID0gQ29udGVudHNJdGVtTWFya2Rvd25Ob2RlLmZyb21Db250ZW50c0xpc3RNYXJrZG93bk5vZGVBbmROZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSwgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCksXG4vLyAgICAgICAgICAgY2hpbGROb2RlID0gY29udGVudHNJdGVtTWFya2Rvd25Ob2RlOyAvLy9cbi8vXG4vLyAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbi8vICAgfSk7XG4vL1xuLy8gICByZXR1cm4gY2hpbGROb2Rlcztcbi8vIH1cblxuZnVuY3Rpb24gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNGcm9tSGVhZGluZ01hcmtkb3duTm9kZXMoaGVhZGluZ01hcmtkb3duTm9kZXMpIHtcbiAgY29uc3Qgbm9kZXMgPSBoZWFkaW5nTWFya2Rvd25Ob2RlcywgLy8vXG4gICAgICAgIG5lc3RlZE5vZGUgPSBuZXN0Tm9kZXMobm9kZXMpLFxuICAgICAgICBjaGlsZE5lc3RlZE5vZGVzID0gbmVzdGVkTm9kZS5nZXRDaGlsZE5lc3RlZE5vZGVzKCksXG4gICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gY2hpbGROZXN0ZWROb2RlczsgIC8vL1xuXG4gIHJldHVybiBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlcztcbn1cblxuZnVuY3Rpb24gY29udGVudHNJdGVtUmVwbGFjZW1lbnRzRnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKSB7XG4gIC8vIGNvbnN0IGNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLm1hcCgobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSkgPT4ge1xuICAvLyAgIGNvbnN0IGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSA9IENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZS5mcm9tQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlQW5kTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShDb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAvLyAgICAgICAgICAgY2hpbGROb2RlID0gY29udGVudHNJdGVtTWFya2Rvd25Ob2RlOyAvLy9cbiAgLy9cbiAgLy8gICByZXR1cm4gY2hpbGROb2RlO1xuICAvLyB9KTtcbiAgLy9cbiAgLy8gcmV0dXJuIGNoaWxkTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUhlYWRpbmdNYXJrZG93bk5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZXMiLCJjb250ZXh0IiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlc0Zyb21IZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzSXRlbVJlcGxhY2VtZW50cyIsImNvbnRlbnRzSXRlbVJlcGxhY2VtZW50c0Zyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsInJ1bGVOYW1lIiwiQ09OVEVOVFNfTElTVF9SVUxFX05BTUUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsImNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiZm9yRWFjaCIsImNvbnRlbnRzSXRlbVJlcGxhY2VtZW50IiwicGFyZW50Tm9kZSIsImFwcGVuZFRvIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwibm9kZXMiLCJuZXN0ZWROb2RlIiwibmVzdE5vZGVzIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OytEQU5JO21FQUNZO3dCQUVYO3lCQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEseUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQVlaQyxLQUFBQTttQkFBUCxBQVhBLDJCQUEyQjtZQUMzQiw2Q0FBNkM7WUFDN0MsdURBQXVEO1lBQ3ZELEVBQUU7WUFDRixzRUFBc0U7WUFDdEUsa0RBQWtEO1lBQ2xELFFBQVE7WUFDUixFQUFFO1lBQ0YsbUJBQW1CO1lBQ25CLElBQUk7WUFFSixTQUFPQSx5QkFBeUJDLG9CQUFvQixFQUFFQyxPQUFPO2dCQUMzRCxJQUFNQyw2QkFBNkJDLG1EQUFtREgsdUJBQ2hGSSwyQkFBMkJDLHVEQUF1REgsNEJBQTRCRCxVQUM5R0ssV0FBV0Msa0NBQXVCLEVBQ2xDQyxhQUFhLEVBQUUsRUFDZkMsVUFBVSxNQUNWQywyQkFBMkJDLGlCQUFZLENBQUNDLGdDQUFnQyxDQWxCN0RkLDBCQWtCd0ZRLFVBQVVFLFlBQVlDO2dCQUUvSEwseUJBQXlCUyxPQUFPLENBQUMsU0FBQ0M7b0JBQ2hDLElBQU1DLGFBQWFMLDBCQUEyQixHQUFHO29CQUVqREksd0JBQXdCRSxRQUFRLENBQUNELFlBQVlkO2dCQUMvQztnQkFFQSxPQUFPUztZQUNUOzs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCZiwwQkFBMEIsRUFBRUQsT0FBTztnQkFDdkUsSUFBTUcsMkJBQTJCQyx1REFBdURILDRCQUE0QkQsVUFDOUdLLFdBQVdDLGtDQUF1QixFQUNsQ0MsYUFBYSxFQUFFLEVBQ2ZDLFVBQVUsTUFDVkMsMkJBQTJCQyxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0FsQzdEZCwwQkFrQ3dGUSxVQUFVRSxZQUFZQztnQkFFL0hMLHlCQUF5QlMsT0FBTyxDQUFDLFNBQUNDO29CQUNoQyxJQUFNQyxhQUFhTCwwQkFBMkIsR0FBRztvQkFFakRJLHdCQUF3QkUsUUFBUSxDQUFDRCxZQUFZZDtnQkFDL0M7Z0JBRUEsT0FBT1M7WUFDVDs7O1dBM0NtQlo7RUFBaUNhLGlCQUFZO0FBOENsRSwyRkFBMkY7QUFDM0YsdUZBQXVGO0FBQ3ZGLHdMQUF3TDtBQUN4TCxzREFBc0Q7QUFDdEQsRUFBRTtBQUNGLHdCQUF3QjtBQUN4QixRQUFRO0FBQ1IsRUFBRTtBQUNGLHVCQUF1QjtBQUN2QixJQUFJO0FBRUosU0FBU1IsbURBQW1ESCxvQkFBb0I7SUFDOUUsSUFBTWtCLFFBQVFsQixzQkFDUm1CLGFBQWFDLElBQUFBLG1CQUFTLEVBQUNGLFFBQ3ZCRyxtQkFBbUJGLFdBQVdHLG1CQUFtQixJQUNqRHBCLDZCQUE2Qm1CLGtCQUFtQixHQUFHO0lBRXpELE9BQU9uQjtBQUNUO0FBRUEsU0FBU0csdURBQXVESCwwQkFBMEI7QUFDeEYsbUdBQW1HO0FBQ25HLHNMQUFzTDtBQUN0TCxzREFBc0Q7QUFDdEQsRUFBRTtBQUNGLHNCQUFzQjtBQUN0QixNQUFNO0FBQ04sRUFBRTtBQUNGLHFCQUFxQjtBQUN2QiJ9
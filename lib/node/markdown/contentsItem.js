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
    _create_class(ContentsItemMarkdownNode, null, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlua01hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpbmtcIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfSVRFTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHN0YXRpYyBmcm9tQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlQW5kTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShDb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTlRFTlRTX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXSxcbiAgICAgICAgICBjb250ZW50c0xpbmtNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpbmtNYXJrZG93bk5vZGUuZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoY29udGVudHNMaW5rTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXROb2RlKCksXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlLmFkZEFuY2hvcihjb250ZXh0KTtcblxuICAgICAgY29uc3QgY2hpbGROb2RlID0gY29udGVudHNMaW5rTWFya2Rvd25Ob2RlOyAvLy9cblxuICAgICAgY2hpbGROb2Rlcy5wdXNoKGNoaWxkTm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gY2hpbGROZXN0ZWROb2RlcywgIC8vL1xuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICBjaGlsZE5vZGVzLnB1c2goY2hpbGROb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ29udGVudHNJdGVtTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7XG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtTWFya2Rvd25Ob2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZUFuZE5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJDb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInJ1bGVOYW1lIiwiQ09OVEVOVFNfSVRFTV9SVUxFX05BTUUiLCJjaGlsZE5vZGVzIiwiY29udGVudHNMaW5rTWFya2Rvd25Ob2RlIiwiQ29udGVudHNMaW5rTWFya2Rvd25Ob2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJhZGRBbmNob3IiLCJjaGlsZE5vZGUiLCJwdXNoIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwib3BhY2l0eSIsImNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7K0RBTEk7bUVBQ1k7eUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBQSxBQUFNQSx5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLHlEQUF5REMsd0JBQXdCLEVBQUVDLHlCQUF5QixFQUFFQyxPQUFPO2dCQUMxSCxJQUFNQyxXQUFXQyxrQ0FBdUIsRUFDbENDLGFBQWEsRUFBRSxFQUNmQywyQkFBMkJDLHFCQUF3QixDQUFDQyw2QkFBNkIsQ0FBQ1AsMkJBQTJCQztnQkFFbkgsSUFBSUksNkJBQTZCLE1BQU07b0JBQ3JDLElBQU1HLE9BQU9SLDBCQUEwQlMsT0FBTyxJQUN4Q0Msc0JBQXNCRixNQUFPLEdBQUc7b0JBRXRDRSxvQkFBb0JDLFNBQVMsQ0FBQ1Y7b0JBRTlCLElBQU1XLFlBQVlQLDBCQUEwQixHQUFHO29CQUUvQ0QsV0FBV1MsSUFBSSxDQUFDRDtnQkFDbEI7Z0JBRUEsSUFBTUUsbUJBQW1CZCwwQkFBMEJlLG1CQUFtQixJQUNoRUMsNkJBQTZCRixrQkFDN0JHLG1DQUFtQ0QsMkJBQTJCRSxNQUFNO2dCQUUxRSxJQUFJRCxtQ0FBbUMsR0FBRztvQkFDeEMsSUFBTUUsMkJBQTJCcEIseUJBQXlCcUIsOEJBQThCLENBQUNKLDRCQUE0QmYsVUFDL0dXLGFBQVlPLDBCQUEwQixHQUFHO29CQUUvQ2YsV0FBV1MsSUFBSSxDQUFDRDtnQkFDbEI7Z0JBRUEsSUFBTVMsVUFBVSxNQUNWQywyQkFBMkJDLGlCQUFZLENBQUNDLGdDQUFnQyxDQTdCN0QzQiwwQkE2QndGSyxVQUFVRSxZQUFZaUI7Z0JBRS9ILE9BQU9DO1lBQ1Q7OztXQWhDbUJ6QjtFQUFpQzBCLGlCQUFZIn0=
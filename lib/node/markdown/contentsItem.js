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
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var push = _necessary.arrayUtilities.push;
var ContentsItemMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ContentsItemMarkdownNode, MarkdownNode);
    var _super = _create_super(ContentsItemMarkdownNode);
    function ContentsItemMarkdownNode() {
        _class_call_check(this, ContentsItemMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ContentsItemMarkdownNode, null, [
        {
            key: "fromNestedHeadingMarkdownNodeAndContentsListMarkdownNode",
            value: function fromNestedHeadingMarkdownNodeAndContentsListMarkdownNode(nestedHeadingMarkdownNode, ContentsListMarkdownNode, context) {
                var node = nestedHeadingMarkdownNode.getNode(), childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes, contentsListMarkdownNode = ContentsListMarkdownNode.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes);
                var ruleName = _ruleNames.CONTENTS_ITEM_RULE_NAME, childNodes = [];
                if (node !== null) {
                    var headingMarkdownNode = node, headingMarkdownNodeChildNodes = clone(headingMarkdownNode.getChildNodes()); ///
                    push(childNodes, headingMarkdownNodeChildNodes);
                }
                if (contentsListMarkdownNode !== null) {
                    var childNode = contentsListMarkdownNode; ///
                    childNodes.push(childNode);
                }
                var opacity = null, contentsItemMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsItemMarkdownNode, ruleName, childNodes, opacity);
                return contentsItemMarkdownNode;
            }
        }
    ]);
    return ContentsItemMarkdownNode;
}(_markdown.default);
function clone(nodes) {
    nodes = nodes.map(function(node) {
        node = node.clone(); ///
        return node;
    });
    return nodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfSVRFTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZUFuZENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXROb2RlKCksXG4gICAgICAgICAgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gY2hpbGROZXN0ZWROb2RlcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMpO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBDT05URU5UU19JVEVNX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW107XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaGVhZGluZ01hcmtkb3duTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZUNoaWxkTm9kZXMgPSBjbG9uZShoZWFkaW5nTWFya2Rvd25Ob2RlLmdldENoaWxkTm9kZXMoKSk7IC8vL1xuXG4gICAgICBwdXNoKGNoaWxkTm9kZXMsIGhlYWRpbmdNYXJrZG93bk5vZGVDaGlsZE5vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGVudHNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICBjaGlsZE5vZGVzLnB1c2goY2hpbGROb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ29udGVudHNJdGVtTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7XG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtTWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lKG5vZGVzKSB7XG4gIG5vZGVzID0gbm9kZXMubWFwKChub2RlKSA9PiB7IC8vL1xuICAgIG5vZGUgPSBub2RlLmNsb25lKCk7ICAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9KTtcblxuICByZXR1cm4gbm9kZXM7XG59Il0sIm5hbWVzIjpbIkNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlQW5kQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJub2RlIiwiZ2V0Tm9kZSIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJydWxlTmFtZSIsIkNPTlRFTlRTX0lURU1fUlVMRV9OQU1FIiwiY2hpbGROb2RlcyIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlQ2hpbGROb2RlcyIsImNsb25lIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZSIsIm9wYWNpdHkiLCJjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsIm5vZGVzIiwibWFwIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7K0RBRU47eUJBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELHlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0EseURBQXlEQyx5QkFBeUIsRUFBRUMsd0JBQXdCLEVBQUVDLE9BQU87Z0JBQzFILElBQU1DLE9BQU9ILDBCQUEwQkksT0FBTyxJQUN4Q0MsbUJBQW1CTCwwQkFBMEJNLG1CQUFtQixJQUNoRUMsNkJBQTZCRixrQkFDN0JHLDJCQUEyQlAseUJBQXlCUSw4QkFBOEIsQ0FBQ0Y7Z0JBRXpGLElBQU1HLFdBQVdDLGtDQUF1QixFQUNsQ0MsYUFBYSxFQUFFO2dCQUVyQixJQUFJVCxTQUFTLE1BQU07b0JBQ2pCLElBQU1VLHNCQUFzQlYsTUFDdEJXLGdDQUFnQ0MsTUFBTUYsb0JBQW9CRyxhQUFhLEtBQUssR0FBRztvQkFFckZuQixLQUFLZSxZQUFZRTtnQkFDbkI7Z0JBRUEsSUFBSU4sNkJBQTZCLE1BQU07b0JBQ3JDLElBQU1TLFlBQVlULDBCQUEwQixHQUFHO29CQUUvQ0ksV0FBV2YsSUFBSSxDQUFDb0I7Z0JBQ2xCO2dCQUVBLElBQU1DLFVBQVUsTUFDVkMsMkJBQTJCQyxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0F4QjdEekIsMEJBd0J3RmMsVUFBVUUsWUFBWU07Z0JBRS9ILE9BQU9DO1lBQ1Q7OztXQTNCbUJ2QjtFQUFpQ3dCLGlCQUFZO0FBOEJsRSxTQUFTTCxNQUFNTyxLQUFLO0lBQ2xCQSxRQUFRQSxNQUFNQyxHQUFHLENBQUMsU0FBQ3BCO1FBQ2pCQSxPQUFPQSxLQUFLWSxLQUFLLElBQUssR0FBRztRQUV6QixPQUFPWjtJQUNUO0lBRUEsT0FBT21CO0FBQ1QifQ==
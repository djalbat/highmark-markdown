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
                var contentsLinkMarkdownNode = _contentsLink.default.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context), contentsListMarkdownNode = ContentsListMarkdownNode.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context), childNodes = [];
                if (contentsLinkMarkdownNode !== null) {
                    var childNode = contentsLinkMarkdownNode; ///
                    childNodes.push(childNode);
                    var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                    headingMarkdownNode.addAnchor(context);
                }
                if (contentsListMarkdownNode !== null) {
                    var childNode1 = contentsListMarkdownNode; ///
                    childNodes.push(childNode1);
                }
                var ruleName = _ruleNames.CONTENTS_ITEM_RULE_NAME, opacity = null, contentsItemMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsItemMarkdownNode, ruleName, childNodes, opacity);
                return contentsItemMarkdownNode;
            }
        }
    ]);
    return ContentsItemMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuaW1wb3J0IENvbnRlbnRzTGlua01hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9jb250ZW50c0xpbmtcIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfSVRFTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHN0YXRpYyBmcm9tQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlQW5kTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShDb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50c0xpbmtNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpbmtNYXJrZG93bk5vZGUuZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXTtcblxuICAgIGlmIChjb250ZW50c0xpbmtNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGNvbnRlbnRzTGlua01hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMucHVzaChjaGlsZE5vZGUpO1xuXG4gICAgICBjb25zdCBub2RlID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXROb2RlKCksXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlLmFkZEFuY2hvcihjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoY29udGVudHNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBjb250ZW50c0xpc3RNYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgICBjaGlsZE5vZGVzLnB1c2goY2hpbGROb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IENPTlRFTlRTX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcblxuICAgIHJldHVybiBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJmcm9tQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlQW5kTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiY29udGVudHNMaW5rTWFya2Rvd25Ob2RlIiwiQ29udGVudHNMaW5rTWFya2Rvd25Ob2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJjaGlsZE5vZGVzIiwiY2hpbGROb2RlIiwicHVzaCIsIm5vZGUiLCJnZXROb2RlIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsImFkZEFuY2hvciIsInJ1bGVOYW1lIiwiQ09OVEVOVFNfSVRFTV9SVUxFX05BTUUiLCJvcGFjaXR5IiwiY29udGVudHNJdGVtTWFya2Rvd25Ob2RlIiwiTWFya2Rvd25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OytEQUxJO21FQUNZO3lCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEseUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSx5REFBeURDLHdCQUF3QixFQUFFQyx5QkFBeUIsRUFBRUMsT0FBTztnQkFDMUgsSUFBTUMsMkJBQTJCQyxxQkFBd0IsQ0FBQ0MsNkJBQTZCLENBQUNKLDJCQUEyQkMsVUFDN0dJLDJCQUEyQk4seUJBQXlCSyw2QkFBNkIsQ0FBQ0osMkJBQTJCQyxVQUM3R0ssYUFBYSxFQUFFO2dCQUVyQixJQUFJSiw2QkFBNkIsTUFBTTtvQkFDckMsSUFBTUssWUFBWUwsMEJBQTBCLEdBQUc7b0JBRS9DSSxXQUFXRSxJQUFJLENBQUNEO29CQUVoQixJQUFNRSxPQUFPVCwwQkFBMEJVLE9BQU8sSUFDeENDLHNCQUFzQkYsTUFBTyxHQUFHO29CQUV0Q0Usb0JBQW9CQyxTQUFTLENBQUNYO2dCQUNoQztnQkFFQSxJQUFJSSw2QkFBNkIsTUFBTTtvQkFDckMsSUFBTUUsYUFBWUYsMEJBQTBCLEdBQUc7b0JBRS9DQyxXQUFXRSxJQUFJLENBQUNEO2dCQUNsQjtnQkFFQSxJQUFNTSxXQUFXQyxrQ0FBdUIsRUFDbENDLFVBQVUsTUFDVkMsMkJBQTJCQyxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0F6QjdEckIsMEJBeUJ3RmdCLFVBQVVQLFlBQVlTO2dCQUUvSCxPQUFPQztZQUNUOzs7V0E1Qm1CbkI7RUFBaUNvQixpQkFBWSJ9
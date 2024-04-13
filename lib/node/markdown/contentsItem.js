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
                    var replacementTokens = context.replacementTokens, headingMarkdownNode = node, headingMarkdownNodeOffset = offsetFromNode(headingMarkdownNode, context), headingMarkdownNodeTokens = tokensFromNode(headingMarkdownNode, context), headingMarkdownNodeChildNodes = childNodesFromNode(headingMarkdownNode);
                    push(childNodes, headingMarkdownNodeChildNodes);
                    push(replacementTokens, headingMarkdownNodeTokens);
                    replaceChildNodesTokens(headingMarkdownNodeChildNodes, headingMarkdownNodeTokens, headingMarkdownNodeOffset, context);
                }
                if (contentsListMarkdownNode !== null) {
                    childNodes.push(contentsListMarkdownNode);
                }
                var opacity = null, contentsItemMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsItemMarkdownNode, ruleName, childNodes, opacity);
                return contentsItemMarkdownNode;
            }
        }
    ]);
    return ContentsItemMarkdownNode;
}(_markdown.default);
function offsetFromNode(node, context) {
    var tokens = context.tokens, nonTerminalNode = node, firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), offset = firstSignificantTokenIndex; ///
    return offset;
}
function tokensFromNode(node, context) {
    var tokens;
    tokens = context.tokens;
    var nonTerminalNode = node, lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end);
    tokens = tokens.map(function(token) {
        token = token.clone(); ///
        return token;
    });
    return tokens;
}
function childNodesFromNode(node) {
    var childNodes;
    var nonTerminalNode = node; ///
    childNodes = nonTerminalNode.getChildNodes();
    childNodes = childNodes.map(function(childNode) {
        childNode = childNode.clone(); ///
        return childNode;
    });
    return childNodes;
}
function replaceNodeTokens(node, replacementTokens, offset, context) {
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node; ///
        replaceTerminalNodeTokens(terminalNode, replacementTokens, offset, context);
    } else {
        var nonTerminalNode = node; ///
        replaceNonTerminalNodeTokens(nonTerminalNode, replacementTokens, offset, context);
    }
}
function replaceChildNodesTokens(childNodes, tokens, offset, context) {
    childNodes.forEach(function(childNode) {
        var node = childNode; ///
        replaceNodeTokens(node, tokens, offset, context);
    });
}
function replaceTerminalNodeTokens(terminalNode, tokens, offset, context) {
    var index, significantToken;
    var temporaryTokens = tokens; ///
    tokens = context.tokens;
    significantToken = terminalNode.getSignificantToken();
    index = tokens.indexOf(significantToken);
    index -= offset;
    tokens = temporaryTokens; ///
    var token = tokens[index];
    significantToken = token; ///
    terminalNode.setSignificantToken(significantToken);
}
function replaceNonTerminalNodeTokens(nonTerminalNode, tokens, offset, context) {
    var childNodes = nonTerminalNode.getChildNodes();
    replaceChildNodesTokens(childNodes, tokens, offset, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfSVRFTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZUFuZENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXROb2RlKCksXG4gICAgICAgICAgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICAgIG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzID0gY2hpbGROZXN0ZWROb2RlcywgIC8vL1xuICAgICAgICAgIGNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSA9IENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZS5mcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMpO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBDT05URU5UU19JVEVNX1JVTEVfTkFNRSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gW107XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyByZXBsYWNlbWVudFRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGUgPSBub2RlLFxuICAgICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZU9mZnNldCA9IG9mZnNldEZyb21Ob2RlKGhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpLCAvLy9cbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVUb2tlbnMgPSB0b2tlbnNGcm9tTm9kZShoZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVDaGlsZE5vZGVzID0gY2hpbGROb2Rlc0Zyb21Ob2RlKGhlYWRpbmdNYXJrZG93bk5vZGUpO1xuXG4gICAgICBwdXNoKGNoaWxkTm9kZXMsIGhlYWRpbmdNYXJrZG93bk5vZGVDaGlsZE5vZGVzKTtcblxuICAgICAgcHVzaChyZXBsYWNlbWVudFRva2VucywgaGVhZGluZ01hcmtkb3duTm9kZVRva2Vucyk7XG5cbiAgICAgIHJlcGxhY2VDaGlsZE5vZGVzVG9rZW5zKGhlYWRpbmdNYXJrZG93bk5vZGVDaGlsZE5vZGVzLCBoZWFkaW5nTWFya2Rvd25Ob2RlVG9rZW5zLCBoZWFkaW5nTWFya2Rvd25Ob2RlT2Zmc2V0LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoY29udGVudHNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjaGlsZE5vZGVzLnB1c2goY29udGVudHNMaXN0TWFya2Rvd25Ob2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ29udGVudHNJdGVtTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSk7XG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtTWFya2Rvd25Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9mZnNldEZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgIG9mZnNldCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4OyAgLy8vXG5cbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gdG9rZW5zRnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICBsZXQgdG9rZW5zO1xuXG4gICh7IHRva2VucyB9ID0gY29udGV4dCk7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsYXN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RTaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgc3RhcnQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggKyAxO1xuXG4gIHRva2VucyA9IHRva2Vucy5zbGljZShzdGFydCwgZW5kKTtcblxuICB0b2tlbnMgPSB0b2tlbnMubWFwKCh0b2tlbikgPT4geyAgLy8vXG4gICAgdG9rZW4gPSB0b2tlbi5jbG9uZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIGNoaWxkTm9kZXNGcm9tTm9kZShub2RlKSB7XG4gIGxldCBjaGlsZE5vZGVzO1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5tYXAoKGNoaWxkTm9kZSkgPT4geyAvLy9cbiAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXM7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VOb2RlVG9rZW5zKG5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJlcGxhY2VUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCByZXBsYWNlbWVudFRva2Vucywgb2Zmc2V0LCBjb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXBsYWNlTm9uVGVybWluYWxOb2RlVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIG9mZnNldCwgY29udGV4dCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXNUb2tlbnMoY2hpbGROb2RlcywgdG9rZW5zLCBvZmZzZXQsIGNvbnRleHQpIHtcbiAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgIHJlcGxhY2VOb2RlVG9rZW5zKG5vZGUsIHRva2Vucywgb2Zmc2V0LCBjb250ZXh0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VUZXJtaW5hbE5vZGVUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMsIG9mZnNldCwgY29udGV4dCkge1xuICBsZXQgaW5kZXgsXG4gICAgICBzaWduaWZpY2FudFRva2VuO1xuXG4gIGNvbnN0IHRlbXBvcmFyeVRva2VucyA9IHRva2VuczsgLy8vXG5cbiAgKHsgdG9rZW5zIH0gPSBjb250ZXh0KTtcblxuICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gIGluZGV4IC09IG9mZnNldDtcblxuICB0b2tlbnMgPSB0ZW1wb3JhcnlUb2tlbnM7IC8vL1xuXG4gIGNvbnN0IHRva2VuID0gdG9rZW5zW2luZGV4XTtcblxuICBzaWduaWZpY2FudFRva2VuID0gdG9rZW47ICAvLy9cblxuICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucywgb2Zmc2V0LCBjb250ZXh0KSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIHJlcGxhY2VDaGlsZE5vZGVzVG9rZW5zKGNoaWxkTm9kZXMsIHRva2Vucywgb2Zmc2V0LCBjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZUFuZENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJDb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJjb250ZXh0Iiwibm9kZSIsImdldE5vZGUiLCJjaGlsZE5lc3RlZE5vZGVzIiwiZ2V0Q2hpbGROZXN0ZWROb2RlcyIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwicnVsZU5hbWUiLCJDT05URU5UU19JVEVNX1JVTEVfTkFNRSIsImNoaWxkTm9kZXMiLCJyZXBsYWNlbWVudFRva2VucyIsImhlYWRpbmdNYXJrZG93bk5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlT2Zmc2V0Iiwib2Zmc2V0RnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlVG9rZW5zIiwidG9rZW5zRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlQ2hpbGROb2RlcyIsImNoaWxkTm9kZXNGcm9tTm9kZSIsInJlcGxhY2VDaGlsZE5vZGVzVG9rZW5zIiwib3BhY2l0eSIsImNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwidG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJpbmRleE9mIiwib2Zmc2V0IiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJzdGFydCIsImVuZCIsInNsaWNlIiwibWFwIiwidG9rZW4iLCJjbG9uZSIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGUiLCJyZXBsYWNlTm9kZVRva2VucyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVUb2tlbnMiLCJyZXBsYWNlTm9uVGVybWluYWxOb2RlVG9rZW5zIiwiZm9yRWFjaCIsImluZGV4Iiwic2lnbmlmaWNhbnRUb2tlbiIsInRlbXBvcmFyeVRva2VucyIsImdldFNpZ25pZmljYW50VG9rZW4iLCJzZXRTaWduaWZpY2FudFRva2VuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7K0RBRU47eUJBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELHlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0EseURBQXlEQyx5QkFBeUIsRUFBRUMsd0JBQXdCLEVBQUVDLE9BQU87Z0JBQzFILElBQU1DLE9BQU9ILDBCQUEwQkksT0FBTyxJQUN4Q0MsbUJBQW1CTCwwQkFBMEJNLG1CQUFtQixJQUNoRUMs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
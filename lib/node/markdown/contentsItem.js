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
                var node = nestedHeadingMarkdownNode.getNode(), childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(), headingMarkdownNode = node, nestedHeadingMarkdownNodes = childNestedNodes; ///
                var childNodes = [];
                if (headingMarkdownNode !== null) {
                    var replacementTokens = context.replacementTokens, headingMarkdownNodeOffset = offsetFromNode(headingMarkdownNode, context), headingMarkdownNodeTokens = tokensFromNode(headingMarkdownNode, context), headingMarkdownNodeChildNodes = childNodesFromNode(headingMarkdownNode);
                    push(childNodes, headingMarkdownNodeChildNodes);
                    push(replacementTokens, headingMarkdownNodeTokens);
                    replaceChildNodesTokens(headingMarkdownNodeChildNodes, headingMarkdownNodeTokens, headingMarkdownNodeOffset, context);
                }
                var contentsListMarkdownNode = ContentsListMarkdownNode.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context);
                if (contentsListMarkdownNode !== null) {
                    childNodes.push(contentsListMarkdownNode);
                }
                var ruleName = _ruleNames.CONTENTS_ITEM_RULE_NAME, opacity = null, contentsItemMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(ContentsItemMarkdownNode, ruleName, childNodes, opacity);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfSVRFTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZUFuZENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXROb2RlKCksXG4gICAgICAgICAgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGNoaWxkTmVzdGVkTm9kZXM7ICAvLy9cblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBbXTtcblxuICAgIGlmIChoZWFkaW5nTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHJlcGxhY2VtZW50VG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZU9mZnNldCA9IG9mZnNldEZyb21Ob2RlKGhlYWRpbmdNYXJrZG93bk5vZGUsIGNvbnRleHQpLCAvLy9cbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVUb2tlbnMgPSB0b2tlbnNGcm9tTm9kZShoZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVDaGlsZE5vZGVzID0gY2hpbGROb2Rlc0Zyb21Ob2RlKGhlYWRpbmdNYXJrZG93bk5vZGUpO1xuXG4gICAgICBwdXNoKGNoaWxkTm9kZXMsIGhlYWRpbmdNYXJrZG93bk5vZGVDaGlsZE5vZGVzKTtcblxuICAgICAgcHVzaChyZXBsYWNlbWVudFRva2VucywgaGVhZGluZ01hcmtkb3duTm9kZVRva2Vucyk7XG5cbiAgICAgIHJlcGxhY2VDaGlsZE5vZGVzVG9rZW5zKGhlYWRpbmdNYXJrZG93bk5vZGVDaGlsZE5vZGVzLCBoZWFkaW5nTWFya2Rvd25Ob2RlVG9rZW5zLCBoZWFkaW5nTWFya2Rvd25Ob2RlT2Zmc2V0LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgPSBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUuZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0xpc3RNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNoaWxkTm9kZXMucHVzaChjb250ZW50c0xpc3RNYXJrZG93bk5vZGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gQ09OVEVOVFNfSVRFTV9SVUxFX05BTUUsXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgY29udGVudHNJdGVtTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmZzZXRGcm9tTm9kZShub2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgdG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICBvZmZzZXQgPSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDsgIC8vL1xuXG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIHRva2Vuc0Zyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRva2VucztcblxuICAoeyB0b2tlbnMgfSA9IGNvbnRleHQpO1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YobGFzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgIHN0YXJ0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICsgMTtcblxuICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgdG9rZW5zID0gdG9rZW5zLm1hcCgodG9rZW4pID0+IHsgIC8vL1xuICAgIHRva2VuID0gdG9rZW4uY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9KTtcblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiBjaGlsZE5vZGVzRnJvbU5vZGUobm9kZSkge1xuICBsZXQgY2hpbGROb2RlcztcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMubWFwKChjaGlsZE5vZGUpID0+IHsgLy8vXG4gICAgY2hpbGROb2RlID0gY2hpbGROb2RlLmNsb25lKCk7ICAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGU7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZE5vZGVzO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlTm9kZVRva2Vucyhub2RlLCByZXBsYWNlbWVudFRva2Vucywgb2Zmc2V0LCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXBsYWNlVGVybWluYWxOb2RlVG9rZW5zKHRlcm1pbmFsTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIG9mZnNldCwgY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2Vucyhub25UZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIGNvbnRleHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGVzVG9rZW5zKGNoaWxkTm9kZXMsIHRva2Vucywgb2Zmc2V0LCBjb250ZXh0KSB7XG4gIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICByZXBsYWNlTm9kZVRva2Vucyhub2RlLCB0b2tlbnMsIG9mZnNldCwgY29udGV4dCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGVybWluYWxOb2RlVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBvZmZzZXQsIGNvbnRleHQpIHtcbiAgbGV0IGluZGV4LFxuICAgICAgc2lnbmlmaWNhbnRUb2tlbjtcblxuICBjb25zdCB0ZW1wb3JhcnlUb2tlbnMgPSB0b2tlbnM7IC8vL1xuXG4gICh7IHRva2VucyB9ID0gY29udGV4dCk7XG5cbiAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgaW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKTtcblxuICBpbmRleCAtPSBvZmZzZXQ7XG5cbiAgdG9rZW5zID0gdGVtcG9yYXJ5VG9rZW5zOyAvLy9cblxuICBjb25zdCB0b2tlbiA9IHRva2Vuc1tpbmRleF07XG5cbiAgc2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuOyAgLy8vXG5cbiAgdGVybWluYWxOb2RlLnNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VOb25UZXJtaW5hbE5vZGVUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIG9mZnNldCwgY29udGV4dCkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICByZXBsYWNlQ2hpbGROb2Rlc1Rva2VucyhjaGlsZE5vZGVzLCB0b2tlbnMsIG9mZnNldCwgY29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNJdGVtTWFya2Rvd25Ob2RlIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVBbmRDb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwiQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiY29udGV4dCIsIm5vZGUiLCJnZXROb2RlIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJjaGlsZE5vZGVzIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJoZWFkaW5nTWFya2Rvd25Ob2RlT2Zmc2V0Iiwib2Zmc2V0RnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlVG9rZW5zIiwidG9rZW5zRnJvbU5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlQ2hpbGROb2RlcyIsImNoaWxkTm9kZXNGcm9tTm9kZSIsInJlcGxhY2VDaGlsZE5vZGVzVG9rZW5zIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwicnVsZU5hbWUiLCJDT05URU5UU19JVEVNX1JVTEVfTkFNRSIsIm9wYWNpdHkiLCJjb250ZW50c0l0ZW1NYXJrZG93bk5vZGUiLCJNYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiaW5kZXhPZiIsIm9mZnNldCIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSIsIm1hcCIsInRva2VuIiwiY2xvbmUiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2RlIiwicmVwbGFjZU5vZGVUb2tlbnMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJyZXBsYWNlVGVybWluYWxOb2RlVG9rZW5zIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZVRva2VucyIsImZvckVhY2giLCJpbmRleCIsInNpZ25pZmljYW50VG9rZW4iLCJ0ZW1wb3JhcnlUb2tlbnMiLCJnZXRTaWduaWZpY2FudFRva2VuIiwic2V0U2lnbmlmaWNhbnRUb2tlbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsrREFFTjt5QkFFZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUQseUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQSx5REFBeURDLHlCQUF5QixFQUFFQyx3QkFBd0IsRUFBRUMsT0FBTztnQkFDMUgsSUFBTUMsT0FBT0gsMEJBQTBCSSxPQUFPLElBQ3hDQyxt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
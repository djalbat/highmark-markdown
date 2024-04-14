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
                    var replacementTokens = context.replacementTokens, identifier = headingMarkdownNode.identifier(context), headingMarkdownNodeOffset = offsetFromNode(headingMarkdownNode, context), headingMarkdownNodeTokens = tokensFromNode(headingMarkdownNode, context), headingMarkdownNodeChildNodes = childNodesFromNode(headingMarkdownNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2NvbnRlbnRzSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfSVRFTV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZUFuZENvbnRlbnRzTGlzdE1hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBDb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXROb2RlKCksXG4gICAgICAgICAgY2hpbGROZXN0ZWROb2RlcyA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Q2hpbGROZXN0ZWROb2RlcygpLFxuICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyA9IGNoaWxkTmVzdGVkTm9kZXM7ICAvLy9cblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBbXTtcblxuICAgIGlmIChoZWFkaW5nTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHJlcGxhY2VtZW50VG9rZW5zIH0gPSBjb250ZXh0LFxuICAgICAgICAgICAgaWRlbnRpZmllciA9IGhlYWRpbmdNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICAgIGhlYWRpbmdNYXJrZG93bk5vZGVPZmZzZXQgPSBvZmZzZXRGcm9tTm9kZShoZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KSwgLy8vXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlVG9rZW5zID0gdG9rZW5zRnJvbU5vZGUoaGVhZGluZ01hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBoZWFkaW5nTWFya2Rvd25Ob2RlQ2hpbGROb2RlcyA9IGNoaWxkTm9kZXNGcm9tTm9kZShoZWFkaW5nTWFya2Rvd25Ob2RlKTtcblxuICAgICAgcHVzaChjaGlsZE5vZGVzLCBoZWFkaW5nTWFya2Rvd25Ob2RlQ2hpbGROb2Rlcyk7XG5cbiAgICAgIHB1c2gocmVwbGFjZW1lbnRUb2tlbnMsIGhlYWRpbmdNYXJrZG93bk5vZGVUb2tlbnMpO1xuXG4gICAgICByZXBsYWNlQ2hpbGROb2Rlc1Rva2VucyhoZWFkaW5nTWFya2Rvd25Ob2RlQ2hpbGROb2RlcywgaGVhZGluZ01hcmtkb3duTm9kZVRva2VucywgaGVhZGluZ01hcmtkb3duTm9kZU9mZnNldCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudHNMaXN0TWFya2Rvd25Ob2RlID0gQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlLmZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyhuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcywgY29udGV4dCk7XG5cbiAgICBpZiAoY29udGVudHNMaXN0TWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjaGlsZE5vZGVzLnB1c2goY29udGVudHNMaXN0TWFya2Rvd25Ob2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IENPTlRFTlRTX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDb250ZW50c0l0ZW1NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcblxuICAgIHJldHVybiBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gb2Zmc2V0RnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RTaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgb2Zmc2V0ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7ICAvLy9cblxuICByZXR1cm4gb2Zmc2V0O1xufVxuXG5mdW5jdGlvbiB0b2tlbnNGcm9tTm9kZShub2RlLCBjb250ZXh0KSB7XG4gIGxldCB0b2tlbnM7XG5cbiAgKHsgdG9rZW5zIH0gPSBjb250ZXh0KTtcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGxhc3RTaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCAvLy9cbiAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXG4gIHRva2VucyA9IHRva2Vucy5tYXAoKHRva2VuKSA9PiB7ICAvLy9cbiAgICB0b2tlbiA9IHRva2VuLmNsb25lKCk7ICAvLy9cblxuICAgIHJldHVybiB0b2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gY2hpbGROb2Rlc0Zyb21Ob2RlKG5vZGUpIHtcbiAgbGV0IGNoaWxkTm9kZXM7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLm1hcCgoY2hpbGROb2RlKSA9PiB7IC8vL1xuICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2RlO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZU5vZGVUb2tlbnMobm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIG9mZnNldCwgY29udGV4dCkge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmVwbGFjZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBvZmZzZXQsIGNvbnRleHQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJlcGxhY2VOb25UZXJtaW5hbE5vZGVUb2tlbnMobm9uVGVybWluYWxOb2RlLCByZXBsYWNlbWVudFRva2Vucywgb2Zmc2V0LCBjb250ZXh0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGROb2Rlc1Rva2VucyhjaGlsZE5vZGVzLCB0b2tlbnMsIG9mZnNldCwgY29udGV4dCkge1xuICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgcmVwbGFjZU5vZGVUb2tlbnMobm9kZSwgdG9rZW5zLCBvZmZzZXQsIGNvbnRleHQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRlcm1pbmFsTm9kZVRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucywgb2Zmc2V0LCBjb250ZXh0KSB7XG4gIGxldCBpbmRleCxcbiAgICAgIHNpZ25pZmljYW50VG9rZW47XG5cbiAgY29uc3QgdGVtcG9yYXJ5VG9rZW5zID0gdG9rZW5zOyAvLy9cblxuICAoeyB0b2tlbnMgfSA9IGNvbnRleHQpO1xuXG4gIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgaW5kZXggLT0gb2Zmc2V0O1xuXG4gIHRva2VucyA9IHRlbXBvcmFyeVRva2VuczsgLy8vXG5cbiAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaW5kZXhdO1xuXG4gIHNpZ25pZmljYW50VG9rZW4gPSB0b2tlbjsgIC8vL1xuXG4gIHRlcm1pbmFsTm9kZS5zZXRTaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlTm9uVGVybWluYWxOb2RlVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zLCBvZmZzZXQsIGNvbnRleHQpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgcmVwbGFjZUNoaWxkTm9kZXNUb2tlbnMoY2hpbGROb2RlcywgdG9rZW5zLCBvZmZzZXQsIGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlQW5kQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwibmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZSIsIkNvbnRlbnRzTGlzdE1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJub2RlIiwiZ2V0Tm9kZSIsImNoaWxkTmVzdGVkTm9kZXMiLCJnZXRDaGlsZE5lc3RlZE5vZGVzIiwiaGVhZGluZ01hcmtkb3duTm9kZSIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzIiwiY2hpbGROb2RlcyIsInJlcGxhY2VtZW50VG9rZW5zIiwiaWRlbnRpZmllciIsImhlYWRpbmdNYXJrZG93bk5vZGVPZmZzZXQiLCJvZmZzZXRGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVUb2tlbnMiLCJ0b2tlbnNGcm9tTm9kZSIsImhlYWRpbmdNYXJrZG93bk5vZGVDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0Zyb21Ob2RlIiwicmVwbGFjZUNoaWxkTm9kZXNUb2tlbnMiLCJjb250ZW50c0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMiLCJydWxlTmFtZSIsIkNPTlRFTlRTX0lURU1fUlVMRV9OQU1FIiwib3BhY2l0eSIsImNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwidG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJpbmRleE9mIiwib2Zmc2V0IiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJzdGFydCIsImVuZCIsInNsaWNlIiwibWFwIiwidG9rZW4iLCJjbG9uZSIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGUiLCJyZXBsYWNlTm9kZVRva2VucyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVUb2tlbnMiLCJyZXBsYWNlTm9uVGVybWluYWxOb2RlVG9rZW5zIiwiZm9yRWFjaCIsImluZGV4Iiwic2lnbmlmaWNhbnRUb2tlbiIsInRlbXBvcmFyeVRva2VucyIsImdldFNpZ25pZmljYW50VG9rZW4iLCJzZXRTaWduaWZpY2FudFRva2VuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOytEQUVOO3lCQUVlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCx5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BLHlEQUF5REMseUJBQXlCLEVBQUVDLHdCQUF3QixFQUFFQyxPQUFPO2dCQUMxSCxJQUFNQyxPQUFPSCwwQkFBMEJJLE9BQU8sSUFDeENDLG1CQUFtQkwsMEJBQTBCTSxtQkFBbUIsSUFDaEVDLHNCQUFzQkosTUFDdEJLLDZCQUE2Qkgsa0JBQW1CLEdBQUc7Z0JBRXpELElBQU1JLGFBQWEsRUFBRTtnQkFFckIsSUFBSUYsd0JBQXdCLE1BQU07b0JBQ2hDLElBQU0sQUFBRUcsb0JBQXNCUixRQUF0QlEsbUJBQ0ZDLGFBQWFKLG9CQUFvQkksVUFBVSxDQUFDVCxVQUM1Q1UsNEJBQTRCQyxlQUFlTixxQkFBcUJMLFVBQ2hFWSw0QkFBNEJDLGVBQWVSLHFCQUFxQkwsVUFDaEVjLGdDQUFnQ0MsbUJBQW1CVjtvQkFFekRWLEtBQUtZLFlBQVlPO29CQUVqQm5CLEtBQUthLG1CQUFtQkk7b0JBRXhCSSx3QkFBd0JGLCtCQUErQkYsMkJBQTJCRiwyQkFBMkJWO2dCQUMvRztnQkFFQSxJQUFNaUIsMkJBQTJCbEIseUJBQXlCbUIsOEJBQThCLENBQUNaLDRCQUE0Qk47Z0JBRXJILElBQUlpQiw2QkFBNkIsTUFBTTtvQkFDckNWLFdBQVdaLElBQUksQ0FBQ3NCO2dCQUNsQjtnQkFFQSxJQUFNRSxXQUFXQyxrQ0FBdUIsRUFDbENDLFVBQVUsTUFDVkMsMkJBQTJCQyxpQkFBWSxDQUFDQyxnQ0FBZ0MsQ0EvQjdEOUIsMEJBK0J3RnlCLFVBQVVaLFlBQVljO2dCQUUvSCxPQUFPQztZQUNUOzs7V0FsQ21CNUI7RUFBaUM2QixpQkFBWTtBQXFDbEUsU0FBU1osZUFBZVYsSUFBSSxFQUFFRCxPQUFPO0lBQ25DLElBQU0sQUFBRXlCLFNBQVd6QixRQUFYeUIsUUFDRkMsa0JBQWtCekIsTUFDbEIwQix3QkFBd0JELGdCQUFnQkUsd0JBQXdCLElBQ2hFQyw2QkFBNkJKLE9BQU9LLE9BQU8sQ0FBQ0gsd0JBQzVDSSxTQUFTRiw0QkFBNkIsR0FBRztJQUUvQyxPQUFPRTtBQUNUO0FBRUEsU0FBU2xCLGVBQWVaLElBQUksRUFBRUQsT0FBTztJQUNuQyxJQUFJeUI7SUFFREEsU0FBV3pCLFFBQVh5QjtJQUVILElBQU1DLGtCQUFrQnpCLE1BQ2xCK0IsdUJBQXVCTixnQkFBZ0JPLHVCQUF1QixJQUM5RE4sd0JBQXdCRCxnQkFBZ0JFLHdCQUF3QixJQUNoRU0sNEJBQTRCVCxPQUFPSyxPQUFPLENBQUNFLHVCQUMzQ0gsNkJBQTZCSixPQUFPSyxPQUFPLENBQUNILHdCQUM1Q1EsUUFBUU4sNEJBQ1JPLE1BQU1GLDRCQUE0QjtJQUV4Q1QsU0FBU0EsT0FBT1ksS0FBSyxDQUFDRixPQUFPQztJQUU3QlgsU0FBU0EsT0FBT2EsR0FBRyxDQUFDLFNBQUNDO1FBQ25CQSxRQUFRQSxNQUFNQyxLQUFLLElBQUssR0FBRztRQUUzQixPQUFPRDtJQUNUO0lBRUEsT0FBT2Q7QUFDVDtBQUVBLFNBQVNWLG1CQUFtQmQsSUFBSTtJQUM5QixJQUFJTTtJQUVKLElBQU1tQixrQkFBa0J6QixNQUFPLEdBQUc7SUFFbENNLGFBQWFtQixnQkFBZ0JlLGFBQWE7SUFFMUNsQyxhQUFhQSxXQUFXK0IsR0FBRyxDQUFDLFNBQUNJO1FBQzNCQSxZQUFZQSxVQUFVRixLQUFLLElBQUssR0FBRztRQUVuQyxPQUFPRTtJQUNUO0lBRUEsT0FBT25DO0FBQ1Q7QUFFQSxTQUFTb0Msa0JBQWtCMUMsSUFBSSxFQUFFTyxpQkFBaUIsRUFBRXVCLE1BQU0sRUFBRS9CLE9BQU87SUFDakUsSUFBTTRDLG1CQUFtQjNDLEtBQUs0QyxjQUFjO0lBRTVDLElBQUlELGtCQUFrQjtRQUNwQixJQUFNRSxlQUFlN0MsTUFBTyxHQUFHO1FBRS9COEMsMEJBQTBCRCxjQUFjdEMsbUJBQW1CdUIsUUFBUS9CO0lBQ3JFLE9BQU87UUFDTCxJQUFNMEIsa0JBQWtCekIsTUFBTyxHQUFHO1FBRWxDK0MsNkJBQTZCdEIsaUJBQWlCbEIsbUJBQW1CdUIsUUFBUS9CO0lBQzNFO0FBQ0Y7QUFFQSxTQUFTZ0Isd0JBQXdCVCxVQUFVLEVBQUVrQixNQUFNLEVBQUVNLE1BQU0sRUFBRS9CLE9BQU87SUFDbEVPLFdBQVcwQyxPQUFPLENBQUMsU0FBQ1A7UUFDbEIsSUFBTXpDLE9BQU95QyxXQUFXLEdBQUc7UUFFM0JDLGtCQUFrQjFDLE1BQU13QixRQUFRTSxRQUFRL0I7SUFDMUM7QUFDRjtBQUVBLFNBQVMrQywwQkFBMEJELFlBQVksRUFBRXJCLE1BQU0sRUFBRU0sTUFBTSxFQUFFL0IsT0FBTztJQUN0RSxJQUFJa0QsT0FDQUM7SUFFSixJQUFNQyxrQkFBa0IzQixRQUFRLEdBQUc7SUFFaENBLFNBQVd6QixRQUFYeUI7SUFFSDBCLG1CQUFtQkwsYUFBYU8sbUJBQW1CO0lBRW5ESCxRQUFRekIsT0FBT0ssT0FBTyxDQUFDcUI7SUFFdkJELFNBQVNuQjtJQUVUTixTQUFTMkIsaUJBQWlCLEdBQUc7SUFFN0IsSUFBTWIsUUFBUWQsTUFBTSxDQUFDeUIsTUFBTTtJQUUzQkMsbUJBQW1CWixPQUFRLEdBQUc7SUFFOUJPLGFBQWFRLG1CQUFtQixDQUFDSDtBQUNuQztBQUVBLFNBQVNILDZCQUE2QnRCLGVBQWUsRUFBRUQsTUFBTSxFQUFFTSxNQUFNLEVBQUUvQixPQUFPO0lBQzVFLElBQU1PLGFBQWFtQixnQkFBZ0JlLGFBQWE7SUFFaER6Qix3QkFBd0JULFlBQVlrQixRQUFRTSxRQUFRL0I7QUFDdEQifQ==
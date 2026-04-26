"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockListingMarkdownNode;
    }
});
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../../node/markdown"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BlockListingMarkdownNode extends _markdown.default {
    releaseName(context) {
        const releaseName = this.fromFirstChildNode((firstChildNode)=>{
            const blockStartMarkdownNode = firstChildNode, releaseName = blockStartMarkdownNode.releaseName(context);
            return releaseName;
        });
        return releaseName;
    }
    languageName(context) {
        const languageName = this.fromFirstChildNode((firstChildNode)=>{
            const blockStartMarkdownNode = firstChildNode, languageName = blockStartMarkdownNode.languageName(context);
            return languageName;
        });
        return languageName;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(BlockListingMarkdownNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2xpc3RuZy9ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9tYXJrZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICByZWxlYXNlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgcmVsZWFzZU5hbWUgPSB0aGlzLmZyb21GaXJzdENoaWxkTm9kZSgoZmlyc3RDaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGJsb2NrU3RhcnRNYXJrZG93bk5vZGUgPSBmaXJzdENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICByZWxlYXNlTmFtZSA9IGJsb2NrU3RhcnRNYXJrZG93bk5vZGUucmVsZWFzZU5hbWUoY29udGV4dCk7XG5cbiAgICAgIHJldHVybiByZWxlYXNlTmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZWxlYXNlTmFtZTtcbiAgfVxuXG4gIGxhbmd1YWdlTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgbGFuZ3VhZ2VOYW1lID0gdGhpcy5mcm9tRmlyc3RDaGlsZE5vZGUoKGZpcnN0Q2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBibG9ja1N0YXJ0TWFya2Rvd25Ob2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgbGFuZ3VhZ2VOYW1lID0gYmxvY2tTdGFydE1hcmtkb3duTm9kZS5sYW5ndWFnZU5hbWUoY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYW5ndWFnZU5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFuZ3VhZ2VOYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShCbG9ja0xpc3RpbmdNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrTGlzdGluZ01hcmtkb3duTm9kZSIsIk1hcmtkb3duTm9kZSIsInJlbGVhc2VOYW1lIiwiY29udGV4dCIsImZyb21GaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlIiwiYmxvY2tTdGFydE1hcmtkb3duTm9kZSIsImxhbmd1YWdlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O2lFQUZJOzs7Ozs7QUFFVixNQUFNQSxpQ0FBaUNDLGlCQUFZO0lBQ2hFQyxZQUFZQyxPQUFPLEVBQUU7UUFDbkIsTUFBTUQsY0FBYyxJQUFJLENBQUNFLGtCQUFrQixDQUFDLENBQUNDO1lBQzNDLE1BQU1DLHlCQUF5QkQsZ0JBQ3pCSCxjQUFjSSx1QkFBdUJKLFdBQVcsQ0FBQ0M7WUFFdkQsT0FBT0Q7UUFDVDtRQUVBLE9BQU9BO0lBQ1Q7SUFFQUssYUFBYUosT0FBTyxFQUFFO1FBQ3BCLE1BQU1JLGVBQWUsSUFBSSxDQUFDSCxrQkFBa0IsQ0FBQyxDQUFDQztZQUM1QyxNQUFNQyx5QkFBeUJELGdCQUN6QkUsZUFBZUQsdUJBQXVCQyxZQUFZLENBQUNKO1lBRXpELE9BQU9JO1FBQ1Q7UUFFQSxPQUFPQTtJQUNUO0lBRUEsT0FBT0MsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPWCxpQkFBWSxDQUFDTywwQ0FBMEMsQ0FBQ1IsMEJBQTBCUyxVQUFVQyxZQUFZQyxTQUFTQztJQUFhO0FBQ3RPIn0=
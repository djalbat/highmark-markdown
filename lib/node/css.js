"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _occamdom = require("occam-dom");
const _node = /*#__PURE__*/ _interop_require_default(require("../mixins/node"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CSSNode extends _occamdom.Node {
    matchMarkdownStyleRuleName(markdownStyleRuleName) {
        const markdownStyleRuleNameA = markdownStyleRuleName; ///
        markdownStyleRuleName = this.getMarkdownStyleRuleName();
        const markdownStyleRuleNameB = markdownStyleRuleName, markdownStyleRuleNameMatches = markdownStyleRuleNameA === markdownStyleRuleNameB;
        return markdownStyleRuleNameMatches;
    }
    getMarkdownStyleRuleName() {
        const markdownStyleNode = this.getMarkdownStyleNode(), markdownStyleNodeRuleName = markdownStyleNode.getRuleName(), markdownStyleRuleName = markdownStyleNodeRuleName; ///
        return markdownStyleRuleName;
    }
    getMarkdownStyleNode() {
        const outerNode = this.getOuterNode(), markdownStyleNode = outerNode; ///
        return markdownStyleNode;
    }
    getParentCSSNode() {
        const parentNode = this.getParentNode(), parentCSSNode = parentNode; ///
        return parentCSSNode;
    }
    getChildCSSNodes() {
        const childNodes = this.getChildNodes(), childCSSNodes = childNodes; ///
        return childCSSNodes;
    }
    getRuleName() {
        const markdownStyleNode = this.getMarkdownStyleNode(), ruleName = markdownStyleNode.getRuleName();
        return ruleName;
    }
    isTerminalNode() {
        const terminalNode = false;
        return terminalNode;
    }
    isNonTerminalNode() {
        const nonTerminalNode = true;
        return nonTerminalNode;
    }
    asCSS(context) {
        const css = this.reduceChildNode((css, childNode)=>{
            const childNodeCSS = childNode.asCSS(context);
            css = `${css}${childNodeCSS}`;
            return css;
        }, _constants.EMPTY_STRING);
        return css;
    }
    static fromNothing(Class, ...remainingArguments) {
        if (Class === undefined) {
            Class = CSSNode; ///
        }
        const cssNode = _occamdom.Node.fromNothing(Class, ...remainingArguments);
        return cssNode;
    }
    static fromOuterNode(Class, outerNode, ...remainingArguments) {
        if (outerNode === undefined) {
            outerNode = Class; ///
            Class = CSSNode; ///
        }
        const cssNode = _occamdom.Node.fromOuterNode(Class, outerNode, ...remainingArguments);
        return cssNode;
    }
    static fromChildCSSNodes(Class, childCssNodes, ...remainingArguments) {
        if (childCssNodes === undefined) {
            childCssNodes = Class; ///
            Class = CSSNode; ///
        }
        const childNodes = childCssNodes, cssNode = _occamdom.Node.fromChildNodes(Class, childNodes, ...remainingArguments);
        return cssNode;
    }
}
Object.assign(CSSNode.prototype, _node.default);
const _default = CSSNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2Nzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IG5vZGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9ub2RlXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY2xhc3MgQ1NTTm9kZSBleHRlbmRzIE5vZGUge1xuICBtYXRjaE1hcmtkb3duU3R5bGVSdWxlTmFtZShtYXJrZG93blN0eWxlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlUnVsZU5hbWVBID0gbWFya2Rvd25TdHlsZVJ1bGVOYW1lOyAvLy9cblxuICAgIG1hcmtkb3duU3R5bGVSdWxlTmFtZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZVJ1bGVOYW1lKCk7XG5cbiAgICBjb25zdCBtYXJrZG93blN0eWxlUnVsZU5hbWVCID0gbWFya2Rvd25TdHlsZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBtYXJrZG93blN0eWxlUnVsZU5hbWVNYXRjaGVzID0gKG1hcmtkb3duU3R5bGVSdWxlTmFtZUEgPT09IG1hcmtkb3duU3R5bGVSdWxlTmFtZUIpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVSdWxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBnZXRNYXJrZG93blN0eWxlUnVsZU5hbWUoKSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZU5vZGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVOb2RlKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZU5vZGVSdWxlTmFtZSA9IG1hcmtkb3duU3R5bGVOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZVJ1bGVOYW1lID0gbWFya2Rvd25TdHlsZU5vZGVSdWxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVSdWxlTmFtZTtcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVOb2RlKCkge1xuICAgIGNvbnN0IG91dGVyTm9kZSA9IHRoaXMuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZU5vZGUgPSBvdXRlck5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVOb2RlO1xuICB9XG5cbiAgZ2V0UGFyZW50Q1NTTm9kZSgpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgcGFyZW50Q1NTTm9kZSA9IHBhcmVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHBhcmVudENTU05vZGU7XG4gIH1cblxuICBnZXRDaGlsZENTU05vZGVzKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZENTU05vZGVzID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRDU1NOb2RlcztcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVOb2RlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlTm9kZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gbWFya2Rvd25TdHlsZU5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYXNDU1MoY29udGV4dCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMucmVkdWNlQ2hpbGROb2RlKChjc3MsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlQ1NTID0gY2hpbGROb2RlLmFzQ1NTKGNvbnRleHQpO1xuXG4gICAgICBjc3MgPSBgJHtjc3N9JHtjaGlsZE5vZGVDU1N9YDtcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gQ1NTTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY3NzTm9kZSA9IE5vZGUuZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY3NzTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChvdXRlck5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3V0ZXJOb2RlID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBDU1NOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjc3NOb2RlID0gTm9kZS5mcm9tT3V0ZXJOb2RlKENsYXNzLCBvdXRlck5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY3NzTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2hpbGRDU1NOb2RlcyhDbGFzcywgY2hpbGRDc3NOb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGNoaWxkQ3NzTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGRDc3NOb2RlcyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gQ1NTTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkQ3NzTm9kZXMsIC8vL1xuICAgICAgICAgIGNzc05vZGUgPSBOb2RlLmZyb21DaGlsZE5vZGVzKENsYXNzLCBjaGlsZE5vZGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNzc05vZGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDU1NOb2RlLnByb3RvdHlwZSwgbm9kZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IENTU05vZGU7XG4iXSwibmFtZXMiOlsiQ1NTTm9kZSIsIk5vZGUiLCJtYXRjaE1hcmtkb3duU3R5bGVSdWxlTmFtZSIsIm1hcmtkb3duU3R5bGVSdWxlTmFtZSIsIm1hcmtkb3duU3R5bGVSdWxlTmFtZUEiLCJnZXRNYXJrZG93blN0eWxlUnVsZU5hbWUiLCJtYXJrZG93blN0eWxlUnVsZU5hbWVCIiwibWFya2Rvd25TdHlsZVJ1bGVOYW1lTWF0Y2hlcyIsIm1hcmtkb3duU3R5bGVOb2RlIiwiZ2V0TWFya2Rvd25TdHlsZU5vZGUiLCJtYXJrZG93blN0eWxlTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJvdXRlck5vZGUiLCJnZXRPdXRlck5vZGUiLCJnZXRQYXJlbnRDU1NOb2RlIiwicGFyZW50Tm9kZSIsImdldFBhcmVudE5vZGUiLCJwYXJlbnRDU1NOb2RlIiwiZ2V0Q2hpbGRDU1NOb2RlcyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGRDU1NOb2RlcyIsInJ1bGVOYW1lIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImFzQ1NTIiwiY29udGV4dCIsImNzcyIsInJlZHVjZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUNTUyIsIkVNUFRZX1NUUklORyIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJjc3NOb2RlIiwiZnJvbU91dGVyTm9kZSIsImZyb21DaGlsZENTU05vZGVzIiwiY2hpbGRDc3NOb2RlcyIsImZyb21DaGlsZE5vZGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibm9kZU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0hBOzs7ZUFBQTs7OzBCQXBIcUI7NkRBRUU7MkJBRU07Ozs7OztBQUU3QixNQUFNQSxnQkFBZ0JDLGNBQUk7SUFDeEJDLDJCQUEyQkMscUJBQXFCLEVBQUU7UUFDaEQsTUFBTUMseUJBQXlCRCx1QkFBdUIsR0FBRztRQUV6REEsd0JBQXdCLElBQUksQ0FBQ0Usd0JBQXdCO1FBRXJELE1BQU1DLHlCQUF5QkgsdUJBQ3pCSSwrQkFBZ0NILDJCQUEyQkU7UUFFakUsT0FBT0M7SUFDVDtJQUVBRiwyQkFBMkI7UUFDekIsTUFBTUcsb0JBQW9CLElBQUksQ0FBQ0Msb0JBQW9CLElBQzdDQyw0QkFBNEJGLGtCQUFrQkcsV0FBVyxJQUN6RFIsd0JBQXdCTywyQkFBNEIsR0FBRztRQUU3RCxPQUFPUDtJQUNUO0lBRUFNLHVCQUF1QjtRQUNyQixNQUFNRyxZQUFZLElBQUksQ0FBQ0MsWUFBWSxJQUM3Qkwsb0JBQW9CSSxXQUFXLEdBQUc7UUFFeEMsT0FBT0o7SUFDVDtJQUVBTSxtQkFBbUI7UUFDakIsTUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGdCQUFnQkYsWUFBWSxHQUFHO1FBRXJDLE9BQU9FO0lBQ1Q7SUFFQUMsbUJBQW1CO1FBQ2pCLE1BQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxnQkFBZ0JGLFlBQVksR0FBRztRQUVyQyxPQUFPRTtJQUNUO0lBRUFWLGNBQWM7UUFDWixNQUFNSCxvQkFBb0IsSUFBSSxDQUFDQyxvQkFBb0IsSUFDN0NhLFdBQVdkLGtCQUFrQkcsV0FBVztRQUU5QyxPQUFPVztJQUNUO0lBRUFDLGlCQUFpQjtRQUNmLE1BQU1DLGVBQWU7UUFFckIsT0FBT0E7SUFDVDtJQUVBQyxvQkFBb0I7UUFDbEIsTUFBTUMsa0JBQWtCO1FBRXhCLE9BQU9BO0lBQ1Q7SUFFQUMsTUFBTUMsT0FBTyxFQUFFO1FBQ2IsTUFBTUMsTUFBTSxJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDRCxLQUFLRTtZQUNyQyxNQUFNQyxlQUFlRCxVQUFVSixLQUFLLENBQUNDO1lBRXJDQyxNQUFNLEdBQUdBLE1BQU1HLGNBQWM7WUFFN0IsT0FBT0g7UUFDVCxHQUFHSSx1QkFBWTtRQUVmLE9BQU9KO0lBQ1Q7SUFFQSxPQUFPSyxZQUFZQyxLQUFLLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7UUFDL0MsSUFBSUQsVUFBVUUsV0FBVztZQUN2QkYsUUFBUW5DLFNBQVMsR0FBRztRQUN0QjtRQUVBLE1BQU1zQyxVQUFVckMsY0FBSSxDQUFDaUMsV0FBVyxDQUFDQyxVQUFVQztRQUUzQyxPQUFPRTtJQUNUO0lBRUEsT0FBT0MsY0FBY0osS0FBSyxFQUFFdkIsU0FBUyxFQUFFLEdBQUd3QixrQkFBa0IsRUFBRTtRQUM1RCxJQUFJeEIsY0FBY3lCLFdBQVc7WUFDM0J6QixZQUFZdUIsT0FBUSxHQUFHO1lBRXZCQSxRQUFRbkMsU0FBUyxHQUFHO1FBQ3RCO1FBRUEsTUFBTXNDLFVBQVVyQyxjQUFJLENBQUNzQyxhQUFhLENBQUNKLE9BQU92QixjQUFjd0I7UUFFeEQsT0FBT0U7SUFDVDtJQUVBLE9BQU9FLGtCQUFrQkwsS0FBSyxFQUFFTSxhQUFhLEVBQUUsR0FBR0wsa0JBQWtCLEVBQUU7UUFDcEUsSUFBSUssa0JBQWtCSixXQUFXO1lBQy9CSSxnQkFBZ0JOLE9BQVEsR0FBRztZQUUzQkEsUUFBUW5DLFNBQVMsR0FBRztRQUN0QjtRQUVBLE1BQU1tQixhQUFhc0IsZUFDYkgsVUFBVXJDLGNBQUksQ0FBQ3lDLGNBQWMsQ0FBQ1AsT0FBT2hCLGVBQWVpQjtRQUUxRCxPQUFPRTtJQUNUO0FBQ0Y7QUFFQUssT0FBT0MsTUFBTSxDQUFDNUMsUUFBUTZDLFNBQVMsRUFBRUMsYUFBVTtNQUUzQyxXQUFlOUMifQ==
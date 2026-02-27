"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsListHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
const _markdown = require("../../../ruleNames/markdown");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContentsListHTMLNode extends _html.default {
    getRuleName() {
        const ruleName = _markdown.CONTENTS_LIST_MARKDOWN_RULE_NAME;
        return ruleName;
    }
    asString() {
        const ruleName = this.getRuleName(), string = ruleName; ///
        return string;
    }
    static tagName = "ul";
    static className = "contents";
    static fromContentsItemHTMLTransforms(contentsItemHTMLTransforms) {
        const contentsItemHTMLNodes = contentsItemHTMLTransforms.map((contentsItemHTMLTransform)=>{
            const contentsItemHTMLNode = contentsItemHTMLTransform.getContentsItemHTMLNode();
            return contentsItemHTMLNode;
        }), childHTMLNodes = contentsItemHTMLNodes, contentsListHTMLNode = _html.default.fromChildHTMLNodes(ContentsListHTMLNode, childHTMLNodes);
        return contentsListHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdC9jb250ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlzdEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTlRFTlRTX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJjb250ZW50c1wiO1xuXG4gIHN0YXRpYyBmcm9tQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMoY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCBjb250ZW50c0l0ZW1IVE1MTm9kZXMgPSBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtcy5tYXAoKGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZW50c0l0ZW1IVE1MTm9kZSA9IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0uZ2V0Q29udGVudHNJdGVtSFRNTE5vZGUoKTtcblxuICAgICAgICAgIHJldHVybiBjb250ZW50c0l0ZW1IVE1MTm9kZTtcbiAgICAgICAgfSksXG4gICAgICAgIGNoaWxkSFRNTE5vZGVzID0gY29udGVudHNJdGVtSFRNTE5vZGVzLCAvLy9cbiAgICAgICAgY29udGVudHNMaXN0SFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGRIVE1MTm9kZXMoQ29udGVudHNMaXN0SFRNTE5vZGUsIGNoaWxkSFRNTE5vZGVzKTtcblxuICAgIHJldHVybiBjb250ZW50c0xpc3RIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzTGlzdEhUTUxOb2RlIiwiSFRNTE5vZGUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiQ09OVEVOVFNfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUiLCJhc1N0cmluZyIsInN0cmluZyIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJmcm9tQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMiLCJjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtcyIsImNvbnRlbnRzSXRlbUhUTUxOb2RlcyIsIm1hcCIsImNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0iLCJjb250ZW50c0l0ZW1IVE1MTm9kZSIsImdldENvbnRlbnRzSXRlbUhUTUxOb2RlIiwiY2hpbGRIVE1MTm9kZXMiLCJjb250ZW50c0xpc3RIVE1MTm9kZSIsImZyb21DaGlsZEhUTUxOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozs2REFKQTswQkFFNEI7Ozs7OztBQUVsQyxNQUFNQSw2QkFBNkJDLGFBQVE7SUFDeERDLGNBQWM7UUFDWixNQUFNQyxXQUFXQywwQ0FBZ0M7UUFFakQsT0FBT0Q7SUFDVDtJQUVBRSxXQUFXO1FBQ1QsTUFBTUYsV0FBVyxJQUFJLENBQUNELFdBQVcsSUFDM0JJLFNBQVNILFVBQVcsR0FBRztRQUU3QixPQUFPRztJQUNUO0lBRUEsT0FBT0MsVUFBVSxLQUFLO0lBRXRCLE9BQU9DLFlBQVksV0FBVztJQUU5QixPQUFPQywrQkFBK0JDLDBCQUEwQixFQUFFO1FBQ2hFLE1BQU1DLHdCQUF3QkQsMkJBQTJCRSxHQUFHLENBQUMsQ0FBQ0M7WUFDeEQsTUFBTUMsdUJBQXVCRCwwQkFBMEJFLHVCQUF1QjtZQUU5RSxPQUFPRDtRQUNULElBQ0FFLGlCQUFpQkwsdUJBQ2pCTSx1QkFBdUJoQixhQUFRLENBQUNpQixrQkFBa0IsQ0FBQ2xCLHNCQUFzQmdCO1FBRTdFLE9BQU9DO0lBQ1Q7QUFDRiJ9
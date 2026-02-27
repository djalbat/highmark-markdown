"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsItemHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
const _markdown = require("../../../ruleNames/markdown");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContentsItemHTMLNode extends _html.default {
    getRuleName() {
        const ruleName = _markdown.CONTENTS_ITEM_MARKDOWN_RULE_NAME;
        return ruleName;
    }
    asString() {
        const ruleName = this.getRuleName(), string = ruleName; ///
        return string;
    }
    static tagName = "li";
    static className = "contents";
    static fromHTMLTransforms(htmlTransforms) {
        const htmlNodes = htmlTransforms.map((htmlTransform)=>{
            const htmlNode = htmlTransform.getHTMLNode();
            return htmlNode;
        }), childHTMLNodes = htmlNodes, contentsItemHTMLNode = _html.default.fromChildHTMLNodes(ContentsItemHTMLNode, childHTMLNodes);
        return contentsItemHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9jb250ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzSXRlbUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTlRFTlRTX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwibGlcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJjb250ZW50c1wiO1xuXG4gIHN0YXRpYyBmcm9tSFRNTFRyYW5zZm9ybXMoaHRtbFRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCBodG1sTm9kZXMgPSBodG1sVHJhbnNmb3Jtcy5tYXAoKGh0bWxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGh0bWxOb2RlID0gaHRtbFRyYW5zZm9ybS5nZXRIVE1MTm9kZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gaHRtbE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRIVE1MTm9kZXMgPSBodG1sTm9kZXMsIC8vL1xuICAgICAgICAgIGNvbnRlbnRzSXRlbUhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkSFRNTE5vZGVzKENvbnRlbnRzSXRlbUhUTUxOb2RlLCBjaGlsZEhUTUxOb2Rlcyk7XG5cbiAgICByZXR1cm4gY29udGVudHNJdGVtSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0l0ZW1IVE1MTm9kZSIsIkhUTUxOb2RlIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIkNPTlRFTlRTX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FIiwiYXNTdHJpbmciLCJzdHJpbmciLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiZnJvbUhUTUxUcmFuc2Zvcm1zIiwiaHRtbFRyYW5zZm9ybXMiLCJodG1sTm9kZXMiLCJtYXAiLCJodG1sVHJhbnNmb3JtIiwiaHRtbE5vZGUiLCJnZXRIVE1MTm9kZSIsImNoaWxkSFRNTE5vZGVzIiwiY29udGVudHNJdGVtSFRNTE5vZGUiLCJmcm9tQ2hpbGRIVE1MTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7NkRBSkE7MEJBRTRCOzs7Ozs7QUFFbEMsTUFBTUEsNkJBQTZCQyxhQUFRO0lBQ3hEQyxjQUFjO1FBQ1osTUFBTUMsV0FBV0MsMENBQWdDO1FBRWpELE9BQU9EO0lBQ1Q7SUFFQUUsV0FBVztRQUNULE1BQU1GLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCSSxTQUFTSCxVQUFXLEdBQUc7UUFFN0IsT0FBT0c7SUFDVDtJQUVBLE9BQU9DLFVBQVUsS0FBSztJQUV0QixPQUFPQyxZQUFZLFdBQVc7SUFFOUIsT0FBT0MsbUJBQW1CQyxjQUFjLEVBQUU7UUFDeEMsTUFBTUMsWUFBWUQsZUFBZUUsR0FBRyxDQUFDLENBQUNDO1lBQzlCLE1BQU1DLFdBQVdELGNBQWNFLFdBQVc7WUFFMUMsT0FBT0Q7UUFDVCxJQUNBRSxpQkFBaUJMLFdBQ2pCTSx1QkFBdUJoQixhQUFRLENBQUNpQixrQkFBa0IsQ0FBQ2xCLHNCQUFzQmdCO1FBRS9FLE9BQU9DO0lBQ1Q7QUFDRiJ9
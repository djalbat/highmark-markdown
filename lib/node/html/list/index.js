"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexListHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
const _markdown = require("../../../ruleNames/markdown");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class IndexListHTMLNode extends _html.default {
    getRuleName() {
        const ruleName = _markdown.INDEX_LIST_MARKDOWN_RULE_NAME;
        return ruleName;
    }
    asString() {
        const ruleName = this.getRuleName(), string = ruleName; ///
        return string;
    }
    static tagName = "ul";
    static className = "index";
    static fromIndexItemHTMLTransforms(indexItemHTMLTransforms) {
        const indexItemHTMLNodes = indexItemHTMLTransforms.map((indexItemHTMLTransform)=>{
            const indexListHTMLNode = indexItemHTMLTransform.getIndexItemHTMLNode();
            return indexListHTMLNode;
        }), childHTMLNodes = indexItemHTMLNodes, indexListHTMLNode = _html.default.fromChildHTMLNodes(IndexListHTMLNode, childHTMLNodes);
        return indexListHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSU5ERVhfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4TGlzdEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IElOREVYX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJpbmRleFwiO1xuXG4gIHN0YXRpYyBmcm9tSW5kZXhJdGVtSFRNTFRyYW5zZm9ybXMoaW5kZXhJdGVtSFRNTFRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCBpbmRleEl0ZW1IVE1MTm9kZXMgPSBpbmRleEl0ZW1IVE1MVHJhbnNmb3Jtcy5tYXAoKGluZGV4SXRlbUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4TGlzdEhUTUxOb2RlID0gaW5kZXhJdGVtSFRNTFRyYW5zZm9ybS5nZXRJbmRleEl0ZW1IVE1MTm9kZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5kZXhMaXN0SFRNTE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRIVE1MTm9kZXMgPSBpbmRleEl0ZW1IVE1MTm9kZXMsXG4gICAgICAgICAgaW5kZXhMaXN0SFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGRIVE1MTm9kZXMoSW5kZXhMaXN0SFRNTE5vZGUsIGNoaWxkSFRNTE5vZGVzKTtcblxuICAgIHJldHVybiBpbmRleExpc3RIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4TGlzdEhUTUxOb2RlIiwiSFRNTE5vZGUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiSU5ERVhfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUiLCJhc1N0cmluZyIsInN0cmluZyIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJmcm9tSW5kZXhJdGVtSFRNTFRyYW5zZm9ybXMiLCJpbmRleEl0ZW1IVE1MVHJhbnNmb3JtcyIsImluZGV4SXRlbUhUTUxOb2RlcyIsIm1hcCIsImluZGV4SXRlbUhUTUxUcmFuc2Zvcm0iLCJpbmRleExpc3RIVE1MTm9kZSIsImdldEluZGV4SXRlbUhUTUxOb2RlIiwiY2hpbGRIVE1MTm9kZXMiLCJmcm9tQ2hpbGRIVE1MTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7NkRBSkE7MEJBRXlCOzs7Ozs7QUFFL0IsTUFBTUEsMEJBQTBCQyxhQUFRO0lBQ3JEQyxjQUFjO1FBQ1osTUFBTUMsV0FBV0MsdUNBQTZCO1FBRTlDLE9BQU9EO0lBQ1Q7SUFFQUUsV0FBVztRQUNULE1BQU1GLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCSSxTQUFTSCxVQUFXLEdBQUc7UUFFN0IsT0FBT0c7SUFDVDtJQUVBLE9BQU9DLFVBQVUsS0FBSztJQUV0QixPQUFPQyxZQUFZLFFBQVE7SUFFM0IsT0FBT0MsNEJBQTRCQyx1QkFBdUIsRUFBRTtRQUMxRCxNQUFNQyxxQkFBcUJELHdCQUF3QkUsR0FBRyxDQUFDLENBQUNDO1lBQ2hELE1BQU1DLG9CQUFvQkQsdUJBQXVCRSxvQkFBb0I7WUFFckUsT0FBT0Q7UUFDVCxJQUNBRSxpQkFBaUJMLG9CQUNqQkcsb0JBQW9CYixhQUFRLENBQUNnQixrQkFBa0IsQ0FBQ2pCLG1CQUFtQmdCO1FBRXpFLE9BQU9GO0lBQ1Q7QUFDRiJ9
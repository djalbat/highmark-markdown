"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexItemHTMLNode;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
const _comma = /*#__PURE__*/ _interop_require_default(require("../../../node/html/text/comma"));
const _index = /*#__PURE__*/ _interop_require_default(require("../../../node/html/text/index"));
const _index1 = /*#__PURE__*/ _interop_require_default(require("../../../node/html/link/index"));
const _markdown = require("../../../ruleNames/markdown");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class IndexItemHTMLNode extends _html.default {
    getRuleName() {
        const ruleName = _markdown.INDEX_ITEM_MARKDOWN_RULE_NAME;
        return ruleName;
    }
    asHTML(indent, context) {
        let html;
        indent = this.adjustIndent(indent);
        const childNodesHTML = this.childNodesAsHTML(indent, context);
        const startingTag = this.startingTag(context), closingTag = this.closingTag(context);
        html = `${indent}${startingTag}${childNodesHTML}${closingTag}
`;
        return html;
    }
    asString() {
        const ruleName = this.getRuleName(), string = ruleName; ///
        return string;
    }
    static tagName = "li";
    static className = "index";
    static fromIndexItem(indexItem) {
        const wordOrPhrase = indexItem.getWordOrPhrase(), pageNumbers = indexItem.getPageNumbers(), indexSpanHTMLNode = _index.default.fromWordOrPhrase(wordOrPhrase), childNHTMLodes = [
            indexSpanHTMLNode
        ];
        pageNumbers.forEach((pageNumber)=>{
            const indexLinkHTMLNOde = _index1.default.fromPageNumber(pageNumber);
            childNHTMLodes.push(indexLinkHTMLNOde);
            const commaTextHTMLNode = _comma.default.fromNothing();
            childNHTMLodes.push(commaTextHTMLNode);
        });
        childNHTMLodes.pop();
        const indexItemHTMLNode = _html.default.fromChildHTMLNodes(IndexItemHTMLNode, childNHTMLodes);
        return indexItemHTMLNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvaXRlbS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBDb21tYVRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL3RleHQvY29tbWFcIjtcbmltcG9ydCBJbmRleFRleHRIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL3RleHQvaW5kZXhcIjtcbmltcG9ydCBJbmRleExpbmtIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpbmsvaW5kZXhcIjtcblxuaW1wb3J0IHsgSU5ERVhfSVRFTV9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SXRlbUhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IElOREVYX0lURU1fTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXNIVE1MKGluZGVudCwgY29udGV4dCkge1xuICAgIGxldCBodG1sO1xuXG4gICAgaW5kZW50ID0gdGhpcy5hZGp1c3RJbmRlbnQoaW5kZW50KTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNIVE1MID0gdGhpcy5jaGlsZE5vZGVzQXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGFydGluZ1RhZyA9IHRoaXMuc3RhcnRpbmdUYWcoY29udGV4dCksXG4gICAgICAgICAgY2xvc2luZ1RhZyA9IHRoaXMuY2xvc2luZ1RhZyhjb250ZXh0KTtcblxuICAgIGh0bWwgPSBgJHtpbmRlbnR9JHtzdGFydGluZ1RhZ30ke2NoaWxkTm9kZXNIVE1MfSR7Y2xvc2luZ1RhZ31cbmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImxpXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IFwiaW5kZXhcIjtcblxuICBzdGF0aWMgZnJvbUluZGV4SXRlbShpbmRleEl0ZW0pIHtcbiAgICBjb25zdCB3b3JkT3JQaHJhc2UgPSBpbmRleEl0ZW0uZ2V0V29yZE9yUGhyYXNlKCksXG4gICAgICAgICAgcGFnZU51bWJlcnMgPSBpbmRleEl0ZW0uZ2V0UGFnZU51bWJlcnMoKSxcbiAgICAgICAgICBpbmRleFNwYW5IVE1MTm9kZSA9IEluZGV4VGV4dEhUTUxOb2RlLmZyb21Xb3JkT3JQaHJhc2Uod29yZE9yUGhyYXNlKSxcbiAgICAgICAgICBjaGlsZE5IVE1Mb2RlcyA9IFtcbiAgICAgICAgICAgIGluZGV4U3BhbkhUTUxOb2RlXG4gICAgICAgICAgXTtcblxuICAgIHBhZ2VOdW1iZXJzLmZvckVhY2goKHBhZ2VOdW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4TGlua0hUTUxOT2RlID0gSW5kZXhMaW5rSFRNTE5vZGUuZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgICAgIGNoaWxkTkhUTUxvZGVzLnB1c2goaW5kZXhMaW5rSFRNTE5PZGUpO1xuXG4gICAgICBjb25zdCBjb21tYVRleHRIVE1MTm9kZSA9IENvbW1hVGV4dEhUTUxOb2RlLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIGNoaWxkTkhUTUxvZGVzLnB1c2goY29tbWFUZXh0SFRNTE5vZGUpO1xuICAgIH0pO1xuXG4gICAgY2hpbGROSFRNTG9kZXMucG9wKCk7XG5cbiAgICBjb25zdCBpbmRleEl0ZW1IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21DaGlsZEhUTUxOb2RlcyhJbmRleEl0ZW1IVE1MTm9kZSwgY2hpbGROSFRNTG9kZXMpO1xuXG4gICAgcmV0dXJuIGluZGV4SXRlbUhUTUxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhJdGVtSFRNTE5vZGUiLCJIVE1MTm9kZSIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJJTkRFWF9JVEVNX01BUktET1dOX1JVTEVfTkFNRSIsImFzSFRNTCIsImluZGVudCIsImNvbnRleHQiLCJodG1sIiwiYWRqdXN0SW5kZW50IiwiY2hpbGROb2Rlc0hUTUwiLCJjaGlsZE5vZGVzQXNIVE1MIiwic3RhcnRpbmdUYWciLCJjbG9zaW5nVGFnIiwiYXNTdHJpbmciLCJzdHJpbmciLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiZnJvbUluZGV4SXRlbSIsImluZGV4SXRlbSIsIndvcmRPclBocmFzZSIsImdldFdvcmRPclBocmFzZSIsInBhZ2VOdW1iZXJzIiwiZ2V0UGFnZU51bWJlcnMiLCJpbmRleFNwYW5IVE1MTm9kZSIsIkluZGV4VGV4dEhUTUxOb2RlIiwiZnJvbVdvcmRPclBocmFzZSIsImNoaWxkTkhUTUxvZGVzIiwiZm9yRWFjaCIsInBhZ2VOdW1iZXIiLCJpbmRleExpbmtIVE1MTk9kZSIsIkluZGV4TGlua0hUTUxOb2RlIiwiZnJvbVBhZ2VOdW1iZXIiLCJwdXNoIiwiY29tbWFUZXh0SFRNTE5vZGUiLCJDb21tYVRleHRIVE1MTm9kZSIsImZyb21Ob3RoaW5nIiwicG9wIiwiaW5kZXhJdGVtSFRNTE5vZGUiLCJmcm9tQ2hpbGRIVE1MTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7NkRBUEE7OERBQ1M7OERBQ0E7K0RBQ0E7MEJBRWdCOzs7Ozs7QUFFL0IsTUFBTUEsMEJBQTBCQyxhQUFRO0lBQ3JEQyxjQUFjO1FBQ1osTUFBTUMsV0FBV0MsdUNBQTZCO1FBRTlDLE9BQU9EO0lBQ1Q7SUFFQUUsT0FBT0MsTUFBTSxFQUFFQyxPQUFPLEVBQUU7UUFDdEIsSUFBSUM7UUFFSkYsU0FBUyxJQUFJLENBQUNHLFlBQVksQ0FBQ0g7UUFFM0IsTUFBTUksaUJBQWlCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNMLFFBQVFDO1FBRXJELE1BQU1LLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNMLFVBQy9CTSxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDTjtRQUVuQ0MsT0FBTyxHQUFHRixTQUFTTSxjQUFjRixpQkFBaUJHLFdBQVc7QUFDakUsQ0FBQztRQUVHLE9BQU9MO0lBQ1Q7SUFFQU0sV0FBVztRQUNULE1BQU1YLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCYSxTQUFTWixVQUFXLEdBQUc7UUFFN0IsT0FBT1k7SUFDVDtJQUVBLE9BQU9DLFVBQVUsS0FBSztJQUV0QixPQUFPQyxZQUFZLFFBQVE7SUFFM0IsT0FBT0MsY0FBY0MsU0FBUyxFQUFFO1FBQzlCLE1BQU1DLGVBQWVELFVBQVVFLGVBQWUsSUFDeENDLGNBQWNILFVBQVVJLGNBQWMsSUFDdENDLG9CQUFvQkMsY0FBaUIsQ0FBQ0MsZ0JBQWdCLENBQUNOLGVBQ3ZETyxpQkFBaUI7WUFDZkg7U0FDRDtRQUVQRixZQUFZTSxPQUFPLENBQUMsQ0FBQ0M7WUFDbkIsTUFBTUMsb0JBQW9CQyxlQUFpQixDQUFDQyxjQUFjLENBQUNIO1lBRTNERixlQUFlTSxJQUFJLENBQUNIO1lBRXBCLE1BQU1JLG9CQUFvQkMsY0FBaUIsQ0FBQ0MsV0FBVztZQUV2RFQsZUFBZU0sSUFBSSxDQUFDQztRQUN0QjtRQUVBUCxlQUFlVSxHQUFHO1FBRWxCLE1BQU1DLG9CQUFvQnJDLGFBQVEsQ0FBQ3NDLGtCQUFrQixDQUFDdkMsbUJBQW1CMkI7UUFFekUsT0FBT1c7SUFDVDtBQUNGIn0=
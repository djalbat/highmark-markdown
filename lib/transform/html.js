"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HTMLTransform;
    }
});
class HTMLTransform {
    constructor(htmlNode){
        this.htmlNode = htmlNode;
    }
    getHTMLNode() {
        return this.htmlNode;
    }
    appendTo(parentHTMLNode) {
        const childNode = this.htmlNode, parentNode = parentHTMLNode; ///
        parentNode.appendChildNode(childNode);
    }
    prependTo(parentHTMLNode) {
        const childNode = this.htmlNode, parentNode = parentHTMLNode; ///
        parentNode.prependChildNode(childNode);
    }
    addAfter(siblingHTMLNode) {
        const childNode = siblingHTMLNode, parentNode = childNode.getParentNode(), index = parentNode.indexOfChildNode(childNode), startIndex = index + 1, addedChildNode = this.htmlNode; ///
        parentNode.addChildNode(addedChildNode, startIndex);
    }
    remove() {
        const childNode = this.htmlNode, parentNode = childNode.getParentNode();
        parentNode.removeChildNode(childNode);
    }
    static fromHTMLNode(Class, htmlNode, ...remainingArguments) {
        if (htmlNode === undefined) {
            htmlNode = Class; ///
            Class = HTMLTransform; ///
        }
        const htmlTransform = new Class(htmlNode, ...remainingArguments);
        return htmlTransform;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRNTFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKGh0bWxOb2RlKSB7XG4gICAgdGhpcy5odG1sTm9kZSA9IGh0bWxOb2RlO1xuICB9XG5cbiAgZ2V0SFRNTE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbE5vZGU7XG4gIH1cblxuICBhcHBlbmRUbyhwYXJlbnRIVE1MTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuaHRtbE5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnRIVE1MTm9kZTsgIC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRIVE1MTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuaHRtbE5vZGUsIC8vL1xuICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50SFRNTE5vZGU7ICAvLy9cblxuICAgIHBhcmVudE5vZGUucHJlcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgYWRkQWZ0ZXIoc2libGluZ0hUTUxOb2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gc2libGluZ0hUTUxOb2RlLCAgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGNoaWxkTm9kZS5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgaW5kZXggPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIGFkZGVkQ2hpbGROb2RlID0gdGhpcy5odG1sTm9kZTsgIC8vL1xuXG4gICAgcGFyZW50Tm9kZS5hZGRDaGlsZE5vZGUoYWRkZWRDaGlsZE5vZGUsIHN0YXJ0SW5kZXgpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IHRoaXMuaHRtbE5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBjaGlsZE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuXG4gICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTE5vZGUoQ2xhc3MsIGh0bWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoaHRtbE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaHRtbE5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gSFRNTFRyYW5zZm9ybTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWxUcmFuc2Zvcm0gPSBuZXcgQ2xhc3MoaHRtbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gaHRtbFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkhUTUxUcmFuc2Zvcm0iLCJodG1sTm9kZSIsImdldEhUTUxOb2RlIiwiYXBwZW5kVG8iLCJwYXJlbnRIVE1MTm9kZSIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJwcmVwZW5kVG8iLCJwcmVwZW5kQ2hpbGROb2RlIiwiYWRkQWZ0ZXIiLCJzaWJsaW5nSFRNTE5vZGUiLCJnZXRQYXJlbnROb2RlIiwiaW5kZXgiLCJpbmRleE9mQ2hpbGROb2RlIiwic3RhcnRJbmRleCIsImFkZGVkQ2hpbGROb2RlIiwiYWRkQ2hpbGROb2RlIiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGROb2RlIiwiZnJvbUhUTUxOb2RlIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJodG1sVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXFCQTs7O0FBQU4sTUFBTUE7SUFDbkIsWUFBWUMsUUFBUSxDQUFFO1FBQ3BCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQTtJQUNsQjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNELFFBQVE7SUFDdEI7SUFFQUUsU0FBU0MsY0FBYyxFQUFFO1FBQ3ZCLE1BQU1DLFlBQVksSUFBSSxDQUFDSixRQUFRLEVBQ3pCSyxhQUFhRixnQkFBaUIsR0FBRztRQUV2Q0UsV0FBV0MsZUFBZSxDQUFDRjtJQUM3QjtJQUVBRyxVQUFVSixjQUFjLEVBQUU7UUFDeEIsTUFBTUMsWUFBWSxJQUFJLENBQUNKLFFBQVEsRUFDM0JLLGFBQWFGLGdCQUFpQixHQUFHO1FBRXJDRSxXQUFXRyxnQkFBZ0IsQ0FBQ0o7SUFDOUI7SUFFQUssU0FBU0MsZUFBZSxFQUFFO1FBQ3hCLE1BQU1OLFlBQVlNLGlCQUNaTCxhQUFhRCxVQUFVTyxhQUFhLElBQ3BDQyxRQUFRUCxXQUFXUSxnQkFBZ0IsQ0FBQ1QsWUFDcENVLGFBQWFGLFFBQVEsR0FDckJHLGlCQUFpQixJQUFJLENBQUNmLFFBQVEsRUFBRyxHQUFHO1FBRTFDSyxXQUFXVyxZQUFZLENBQUNELGdCQUFnQkQ7SUFDMUM7SUFFQUcsU0FBUztRQUNQLE1BQU1iLFlBQVksSUFBSSxDQUFDSixRQUFRLEVBQ3pCSyxhQUFhRCxVQUFVTyxhQUFhO1FBRTFDTixXQUFXYSxlQUFlLENBQUNkO0lBQzdCO0lBRUEsT0FBT2UsYUFBYUMsS0FBSyxFQUFFcEIsUUFBUSxFQUFFLEdBQUdxQixrQkFBa0IsRUFBRTtRQUMxRCxJQUFJckIsYUFBYXNCLFdBQVc7WUFDMUJ0QixXQUFXb0IsT0FBTyxHQUFHO1lBRXJCQSxRQUFRckIsZUFBZ0IsR0FBRztRQUM3QjtRQUVBLE1BQU13QixnQkFBZ0IsSUFBSUgsTUFBTXBCLGFBQWFxQjtRQUU3QyxPQUFPRTtJQUNUO0FBQ0YifQ==
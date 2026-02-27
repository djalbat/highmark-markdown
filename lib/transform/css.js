"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CSSTransform;
    }
});
class CSSTransform {
    constructor(cssNode){
        this.cssNode = cssNode;
    }
    getCSSNode() {
        return this.cssNode;
    }
    appendTo(parentCSSNode) {
        const parentNode = parentCSSNode, childNode = this.cssNode; ///
        parentNode.appendChildNode(childNode);
    }
    prependTo(parentCSSNode) {
        const parentNode = parentCSSNode, childNode = this.cssNode; ///
        parentNode.prependChildNode(childNode);
    }
    mergeWith(cssNode) {
        cssNode = cssNode.clone(); ///
        const parentNode = cssNode; ///
        let childCSSNodes;
        childCSSNodes = this.cssNode.getChildCSSNodes();
        childCSSNodes = cloneChildCSSNodes(childCSSNodes); ///
        const childNodes = childCSSNodes; ///
        parentNode.prependChildNodes(childNodes);
        return cssNode;
    }
    remove() {
        const parentCSSNode = this.cssNode.getParentCSSNode(), parentNode = parentCSSNode, childNode = this.cssNode; ///
        parentNode.removeChildNode(childNode);
    }
    static fromCSSNode(Class, cssNode, ...remainingArguments) {
        if (cssNode === undefined) {
            cssNode = Class; ///
            Class = CSSTransform; ///
        }
        const cssTransform = new Class(cssNode, ...remainingArguments);
        return cssTransform;
    }
}
function cloneChildCSSNodes(childCSSNodes) {
    childCSSNodes = childCSSNodes.map((childCSSNode)=>{
        childCSSNode = childCSSNode.clone(); ///
        return childCSSNode;
    });
    return childCSSNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDU1NUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihjc3NOb2RlKSB7XG4gICAgdGhpcy5jc3NOb2RlID0gY3NzTm9kZTtcbiAgfVxuXG4gIGdldENTU05vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3NzTm9kZTtcbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudENTU05vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gcGFyZW50Q1NTTm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZSA9IHRoaXMuY3NzTm9kZTsgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudENTU05vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gcGFyZW50Q1NTTm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZSA9IHRoaXMuY3NzTm9kZTsgLy8vXG5cbiAgICBwYXJlbnROb2RlLnByZXBlbmRDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIG1lcmdlV2l0aChjc3NOb2RlKSB7XG4gICAgY3NzTm9kZSA9IGNzc05vZGUuY2xvbmUoKTsgIC8vL1xuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGNzc05vZGU7IC8vL1xuXG4gICAgbGV0IGNoaWxkQ1NTTm9kZXM7XG5cbiAgICBjaGlsZENTU05vZGVzID0gdGhpcy5jc3NOb2RlLmdldENoaWxkQ1NTTm9kZXMoKTtcblxuICAgIGNoaWxkQ1NTTm9kZXMgPSBjbG9uZUNoaWxkQ1NTTm9kZXMoY2hpbGRDU1NOb2Rlcyk7ICAvLy9cblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBjaGlsZENTU05vZGVzOyAvLy9cblxuICAgIHBhcmVudE5vZGUucHJlcGVuZENoaWxkTm9kZXMoY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gY3NzTm9kZTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBjb25zdCBwYXJlbnRDU1NOb2RlID0gdGhpcy5jc3NOb2RlLmdldFBhcmVudENTU05vZGUoKSxcbiAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Q1NTTm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlID0gdGhpcy5jc3NOb2RlOyAvLy9cblxuICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNTU05vZGUoQ2xhc3MsIGNzc05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjc3NOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNzc05vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gQ1NTVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY3NzVHJhbnNmb3JtID0gbmV3IENsYXNzKGNzc05vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY3NzVHJhbnNmb3JtO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lQ2hpbGRDU1NOb2RlcyhjaGlsZENTU05vZGVzKSB7XG4gIGNoaWxkQ1NTTm9kZXMgPSBjaGlsZENTU05vZGVzLm1hcCgoY2hpbGRDU1NOb2RlKSA9PiB7ICAvLy9cbiAgICBjaGlsZENTU05vZGUgPSBjaGlsZENTU05vZGUuY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkQ1NTTm9kZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkQ1NTTm9kZXM7XG59XG5cbiJdLCJuYW1lcyI6WyJDU1NUcmFuc2Zvcm0iLCJjc3NOb2RlIiwiZ2V0Q1NTTm9kZSIsImFwcGVuZFRvIiwicGFyZW50Q1NTTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJwcmVwZW5kVG8iLCJwcmVwZW5kQ2hpbGROb2RlIiwibWVyZ2VXaXRoIiwiY2xvbmUiLCJjaGlsZENTU05vZGVzIiwiZ2V0Q2hpbGRDU1NOb2RlcyIsImNsb25lQ2hpbGRDU1NOb2RlcyIsImNoaWxkTm9kZXMiLCJwcmVwZW5kQ2hpbGROb2RlcyIsInJlbW92ZSIsImdldFBhcmVudENTU05vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJmcm9tQ1NTTm9kZSIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY3NzVHJhbnNmb3JtIiwibWFwIiwiY2hpbGRDU1NOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXFCQTs7O0FBQU4sTUFBTUE7SUFDbkIsWUFBWUMsT0FBTyxDQUFFO1FBQ25CLElBQUksQ0FBQ0EsT0FBTyxHQUFHQTtJQUNqQjtJQUVBQyxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNELE9BQU87SUFDckI7SUFFQUUsU0FBU0MsYUFBYSxFQUFFO1FBQ3RCLE1BQU1DLGFBQWFELGVBQ2JFLFlBQVksSUFBSSxDQUFDTCxPQUFPLEVBQUUsR0FBRztRQUVuQ0ksV0FBV0UsZUFBZSxDQUFDRDtJQUM3QjtJQUVBRSxVQUFVSixhQUFhLEVBQUU7UUFDdkIsTUFBTUMsYUFBYUQsZUFDYkUsWUFBWSxJQUFJLENBQUNMLE9BQU8sRUFBRSxHQUFHO1FBRW5DSSxXQUFXSSxnQkFBZ0IsQ0FBQ0g7SUFDOUI7SUFFQUksVUFBVVQsT0FBTyxFQUFFO1FBQ2pCQSxVQUFVQSxRQUFRVSxLQUFLLElBQUssR0FBRztRQUUvQixNQUFNTixhQUFhSixTQUFTLEdBQUc7UUFFL0IsSUFBSVc7UUFFSkEsZ0JBQWdCLElBQUksQ0FBQ1gsT0FBTyxDQUFDWSxnQkFBZ0I7UUFFN0NELGdCQUFnQkUsbUJBQW1CRixnQkFBaUIsR0FBRztRQUV2RCxNQUFNRyxhQUFhSCxlQUFlLEdBQUc7UUFFckNQLFdBQVdXLGlCQUFpQixDQUFDRDtRQUU3QixPQUFPZDtJQUNUO0lBRUFnQixTQUFTO1FBQ1AsTUFBTWIsZ0JBQWdCLElBQUksQ0FBQ0gsT0FBTyxDQUFDaUIsZ0JBQWdCLElBQzdDYixhQUFhRCxlQUNiRSxZQUFZLElBQUksQ0FBQ0wsT0FBTyxFQUFFLEdBQUc7UUFFbkNJLFdBQVdjLGVBQWUsQ0FBQ2I7SUFDN0I7SUFFQSxPQUFPYyxZQUFZQyxLQUFLLEVBQUVwQixPQUFPLEVBQUUsR0FBR3FCLGtCQUFrQixFQUFFO1FBQ3hELElBQUlyQixZQUFZc0IsV0FBVztZQUN6QnRCLFVBQVVvQixPQUFPLEdBQUc7WUFFcEJBLFFBQVFyQixjQUFlLEdBQUc7UUFDNUI7UUFFQSxNQUFNd0IsZUFBZSxJQUFJSCxNQUFNcEIsWUFBWXFCO1FBRTNDLE9BQU9FO0lBQ1Q7QUFDRjtBQUVBLFNBQVNWLG1CQUFtQkYsYUFBYTtJQUN2Q0EsZ0JBQWdCQSxjQUFjYSxHQUFHLENBQUMsQ0FBQ0M7UUFDakNBLGVBQWVBLGFBQWFmLEtBQUssSUFBSyxHQUFHO1FBRXpDLE9BQU9lO0lBQ1Q7SUFFQSxPQUFPZDtBQUNUIn0=
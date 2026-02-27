"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DivisionHTMLTransform;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DivisionHTMLTransform extends _html.default {
    getDivisionHTMLNode() {
        const htmlNode = this.getHTMLNode(), divisionHTMLNode = htmlNode; ///;
        return divisionHTMLNode;
    }
    appendToTopmostHTMLNode(topmostHTMLNode) {
        const htmlNode = this.getHTMLNode(), childNode = htmlNode, parentNode = topmostHTMLNode; ///
        parentNode.appendChildNode(childNode);
    }
    paginate(divisionHTMLNodes, context) {
        const divisionHTMLNode = this.getDivisionHTMLNode();
        divisionHTMLNode.paginate(divisionHTMLNodes, context);
    }
    static fromDivisionHTMLNode(divisionHTMLNode) {
        const htmlNode = divisionHTMLNode, paragraphHTMLTransform = _html.default.fromHTMLNode(DivisionHTMLTransform, htmlNode);
        return paragraphHTMLTransform;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9kaXZpc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25IVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIGdldERpdmlzaW9uSFRNTE5vZGUoKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSB0aGlzLmdldEhUTUxOb2RlKCksXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IGh0bWxOb2RlOyAgLy8vO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBhcHBlbmRUb1RvcG1vc3RIVE1MTm9kZSh0b3Btb3N0SFRNTE5vZGUpIHtcbiAgICBjb25zdCBodG1sTm9kZSA9IHRoaXMuZ2V0SFRNTE5vZGUoKSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBodG1sTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHRvcG1vc3RIVE1MTm9kZTsgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgcGFnaW5hdGUoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlKCk7XG5cbiAgICBkaXZpc2lvbkhUTUxOb2RlLnBhZ2luYXRlKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSBkaXZpc2lvbkhUTUxOb2RlLCAvLy9cbiAgICAgICAgICBwYXJhZ3JhcGhIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoRGl2aXNpb25IVE1MVHJhbnNmb3JtLCBodG1sTm9kZSk7XG5cbiAgICByZXR1cm4gcGFyYWdyYXBoSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uSFRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJnZXREaXZpc2lvbkhUTUxOb2RlIiwiaHRtbE5vZGUiLCJnZXRIVE1MTm9kZSIsImRpdmlzaW9uSFRNTE5vZGUiLCJhcHBlbmRUb1RvcG1vc3RIVE1MTm9kZSIsInRvcG1vc3RIVE1MTm9kZSIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZE5vZGUiLCJwYWdpbmF0ZSIsImRpdmlzaW9uSFRNTE5vZGVzIiwiY29udGV4dCIsImZyb21EaXZpc2lvbkhUTUxOb2RlIiwicGFyYWdyYXBoSFRNTFRyYW5zZm9ybSIsImZyb21IVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozs2REFGSzs7Ozs7O0FBRVgsTUFBTUEsOEJBQThCQyxhQUFhO0lBQzlEQyxzQkFBc0I7UUFDcEIsTUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JDLG1CQUFtQkYsVUFBVyxJQUFJO1FBRXhDLE9BQU9FO0lBQ1Q7SUFFQUMsd0JBQXdCQyxlQUFlLEVBQUU7UUFDdkMsTUFBTUosV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JJLFlBQVlMLFVBQ1pNLGFBQWFGLGlCQUFpQixHQUFHO1FBRXZDRSxXQUFXQyxlQUFlLENBQUNGO0lBQzdCO0lBRUFHLFNBQVNDLGlCQUFpQixFQUFFQyxPQUFPLEVBQUU7UUFDbkMsTUFBTVIsbUJBQW1CLElBQUksQ0FBQ0gsbUJBQW1CO1FBRWpERyxpQkFBaUJNLFFBQVEsQ0FBQ0MsbUJBQW1CQztJQUMvQztJQUVBLE9BQU9DLHFCQUFxQlQsZ0JBQWdCLEVBQUU7UUFDNUMsTUFBTUYsV0FBV0Usa0JBQ1hVLHlCQUF5QmQsYUFBYSxDQUFDZSxZQUFZLENBQUNoQix1QkFBdUJHO1FBRWpGLE9BQU9ZO0lBQ1Q7QUFDRiJ9
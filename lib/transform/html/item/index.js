"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexItemHTMLTransform;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
const _item = /*#__PURE__*/ _interop_require_default(require("../../../node/html/item"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class IndexItemHTMLTransform extends _html.default {
    getIndexItemHTMLNode() {
        const htmlNode = this.getHTMLNode(), indexItemHTMLNode = htmlNode; ///
        return indexItemHTMLNode;
    }
    static fromIndexItem(indexItem) {
        const indexItemHTMLMode = _item.default.fromIndexItem(indexItem), htmlNode = indexItemHTMLMode, indexItemHTMLTransform = _html.default.fromHTMLNode(IndexItemHTMLTransform, htmlNode);
        return indexItemHTMLTransform;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pdGVtL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBJbmRleEl0ZW1IVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhJdGVtSFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBnZXRJbmRleEl0ZW1IVE1MTm9kZSgpIHtcbiAgICBjb25zdCBodG1sTm9kZSA9IHRoaXMuZ2V0SFRNTE5vZGUoKSxcbiAgICAgICAgICBpbmRleEl0ZW1IVE1MTm9kZSA9IGh0bWxOb2RlOyAvLy9cblxuICAgIHJldHVybiBpbmRleEl0ZW1IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kZXhJdGVtKGluZGV4SXRlbSkge1xuICAgIGNvbnN0IGluZGV4SXRlbUhUTUxNb2RlID0gSW5kZXhJdGVtSFRNTE5vZGUuZnJvbUluZGV4SXRlbShpbmRleEl0ZW0pLFxuICAgICAgICAgIGh0bWxOb2RlID0gaW5kZXhJdGVtSFRNTE1vZGUsIC8vL1xuICAgICAgICAgIGluZGV4SXRlbUhUTUxUcmFuc2Zvcm0gPSBIVE1MVHJhbnNmb3JtLmZyb21IVE1MTm9kZShJbmRleEl0ZW1IVE1MVHJhbnNmb3JtLCBodG1sTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kZXhJdGVtSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4SXRlbUhUTUxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZ2V0SW5kZXhJdGVtSFRNTE5vZGUiLCJodG1sTm9kZSIsImdldEhUTUxOb2RlIiwiaW5kZXhJdGVtSFRNTE5vZGUiLCJmcm9tSW5kZXhJdGVtIiwiaW5kZXhJdGVtIiwiaW5kZXhJdGVtSFRNTE1vZGUiLCJJbmRleEl0ZW1IVE1MTm9kZSIsImluZGV4SXRlbUhUTUxUcmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBcUJBOzs7NkRBSEs7NkRBQ0k7Ozs7OztBQUVmLE1BQU1BLCtCQUErQkMsYUFBYTtJQUMvREMsdUJBQXVCO1FBQ3JCLE1BQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxvQkFBb0JGLFVBQVUsR0FBRztRQUV2QyxPQUFPRTtJQUNUO0lBRUEsT0FBT0MsY0FBY0MsU0FBUyxFQUFFO1FBQzlCLE1BQU1DLG9CQUFvQkMsYUFBaUIsQ0FBQ0gsYUFBYSxDQUFDQyxZQUNwREosV0FBV0ssbUJBQ1hFLHlCQUF5QlQsYUFBYSxDQUFDVSxZQUFZLENBQUNYLHdCQUF3Qkc7UUFFbEYsT0FBT087SUFDVDtBQUNGIn0=
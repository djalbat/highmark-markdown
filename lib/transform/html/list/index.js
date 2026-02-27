"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexListHTMLTransform;
    }
});
const _html = /*#__PURE__*/ _interop_require_default(require("../../../transform/html"));
const _index = /*#__PURE__*/ _interop_require_default(require("../../../node/html/list/index"));
const _index1 = /*#__PURE__*/ _interop_require_default(require("../../../transform/html/item/index"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class IndexListHTMLTransform extends _html.default {
    static fromIndexListAndLetter(indexList, letter) {
        let indexListHTMLTransform = null;
        const indexItemHTMLTransforms = indexList.reduceIndexItemByLetter(letter, (indexItem)=>{
            const indexItemHTMLTransform = _index1.default.fromIndexItem(indexItem);
            return indexItemHTMLTransform;
        }), indexItemHTMLTransformsLength = indexItemHTMLTransforms.length;
        if (indexItemHTMLTransformsLength > 0) {
            const indexListHTMLNode = _index.default.fromIndexItemHTMLTransforms(indexItemHTMLTransforms), htmlNode = indexListHTMLNode; ///
            indexListHTMLTransform = _html.default.fromHTMLNode(IndexListHTMLTransform, htmlNode);
        }
        return indexListHTMLTransform;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9saXN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBJbmRleExpc3RIVE1MTm9kZSBmcm9tIFwiLi4vLi4vLi4vbm9kZS9odG1sL2xpc3QvaW5kZXhcIjtcbmltcG9ydCBJbmRleEl0ZW1IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vaHRtbC9pdGVtL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4TGlzdEhUTUxUcmFuc2Zvcm0gZXh0ZW5kcyBIVE1MVHJhbnNmb3JtIHtcbiAgc3RhdGljIGZyb21JbmRleExpc3RBbmRMZXR0ZXIoaW5kZXhMaXN0LCBsZXR0ZXIpIHtcbiAgICBsZXQgaW5kZXhMaXN0SFRNTFRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRleEl0ZW1IVE1MVHJhbnNmb3JtcyA9IGluZGV4TGlzdC5yZWR1Y2VJbmRleEl0ZW1CeUxldHRlcihsZXR0ZXIsIChpbmRleEl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4SXRlbUhUTUxUcmFuc2Zvcm0gPSBJbmRleEl0ZW1IVE1MVHJhbnNmb3JtLmZyb21JbmRleEl0ZW0oaW5kZXhJdGVtKTtcblxuICAgICAgICAgICAgcmV0dXJuIGluZGV4SXRlbUhUTUxUcmFuc2Zvcm07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgaW5kZXhJdGVtSFRNTFRyYW5zZm9ybXNMZW5ndGggPSBpbmRleEl0ZW1IVE1MVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXhJdGVtSFRNTFRyYW5zZm9ybXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpbmRleExpc3RIVE1MTm9kZSA9IEluZGV4TGlzdEhUTUxOb2RlLmZyb21JbmRleEl0ZW1IVE1MVHJhbnNmb3JtcyhpbmRleEl0ZW1IVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgICBodG1sTm9kZSA9IGluZGV4TGlzdEhUTUxOb2RlOyAvLy9cblxuICAgICAgaW5kZXhMaXN0SFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKEluZGV4TGlzdEhUTUxUcmFuc2Zvcm0sIGh0bWxOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4TGlzdEhUTUxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUluZGV4TGlzdEFuZExldHRlciIsImluZGV4TGlzdCIsImxldHRlciIsImluZGV4TGlzdEhUTUxUcmFuc2Zvcm0iLCJpbmRleEl0ZW1IVE1MVHJhbnNmb3JtcyIsInJlZHVjZUluZGV4SXRlbUJ5TGV0dGVyIiwiaW5kZXhJdGVtIiwiaW5kZXhJdGVtSFRNTFRyYW5zZm9ybSIsIkluZGV4SXRlbUhUTUxUcmFuc2Zvcm0iLCJmcm9tSW5kZXhJdGVtIiwiaW5kZXhJdGVtSFRNTFRyYW5zZm9ybXNMZW5ndGgiLCJsZW5ndGgiLCJpbmRleExpc3RIVE1MTm9kZSIsIkluZGV4TGlzdEhUTUxOb2RlIiwiZnJvbUluZGV4SXRlbUhUTUxUcmFuc2Zvcm1zIiwiaHRtbE5vZGUiLCJmcm9tSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7NkRBSks7OERBQ0k7K0RBQ0s7Ozs7OztBQUVwQixNQUFNQSwrQkFBK0JDLGFBQWE7SUFDL0QsT0FBT0MsdUJBQXVCQyxTQUFTLEVBQUVDLE1BQU0sRUFBRTtRQUMvQyxJQUFJQyx5QkFBeUI7UUFFN0IsTUFBTUMsMEJBQTBCSCxVQUFVSSx1QkFBdUIsQ0FBQ0gsUUFBUSxDQUFDSTtZQUNuRSxNQUFNQyx5QkFBeUJDLGVBQXNCLENBQUNDLGFBQWEsQ0FBQ0g7WUFFcEUsT0FBT0M7UUFDVCxJQUNBRyxnQ0FBZ0NOLHdCQUF3Qk8sTUFBTTtRQUVwRSxJQUFJRCxnQ0FBZ0MsR0FBRztZQUNyQyxNQUFNRSxvQkFBb0JDLGNBQWlCLENBQUNDLDJCQUEyQixDQUFDViwwQkFDbEVXLFdBQVdILG1CQUFtQixHQUFHO1lBRXZDVCx5QkFBeUJKLGFBQWEsQ0FBQ2lCLFlBQVksQ0FBQ2xCLHdCQUF3QmlCO1FBQzlFO1FBRUEsT0FBT1o7SUFDVDtBQUNGIn0=
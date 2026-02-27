"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexHTMLTransform;
    }
});
const _letters = /*#__PURE__*/ _interop_require_default(require("../../letters"));
const _list = /*#__PURE__*/ _interop_require_default(require("../../index/list"));
const _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
const _index = /*#__PURE__*/ _interop_require_default(require("../../transform/html/list/index"));
const _index1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/heading/index"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class IndexHTMLTransform extends _html.default {
    constructor(htmlNode, htmlNodes){
        super(htmlNode);
        this.htmlNodes = htmlNodes;
    }
    getHTMLNodes() {
        return this.htmlNodes;
    }
    addAfter(siblingHTMLNode) {
        const childNode = siblingHTMLNode, parentNode = childNode.getParentNode(), index = parentNode.indexOfChildNode(childNode), startIndex = index + 1, addedChildNodes = this.htmlNodes; ///
        parentNode.addChildNodes(addedChildNodes, startIndex);
    }
    addAfterIndexDirectiveHTMLNode(indexDirectiveHTMLNode) {
        const siblingHTMLNode = indexDirectiveHTMLNode; ///
        this.addAfter(siblingHTMLNode);
    }
    static fromIndexDirectiveHTMLNodeAndDivisionHTMLNodes(indexDirectiveHTMLNode, divisionHTMLNodes, context) {
        let indexHTMLTransform = null;
        const indexList = _list.default.fromIndexDirectiveHTMLNodeAndDivisionHTMLNodes(indexDirectiveHTMLNode, divisionHTMLNodes, context), indexHTMLTransforms = [];
        _letters.default.forEach((letter)=>{
            const indexListHTMLTransform = _index.default.fromIndexListAndLetter(indexList, letter);
            if (indexListHTMLTransform !== null) {
                let indexHTMLTransform;
                const indexHeadingHTMLTransform = _index1.default.fromLetter(letter);
                indexHTMLTransform = indexHeadingHTMLTransform; ///
                indexHTMLTransforms.push(indexHTMLTransform);
                indexHTMLTransform = indexListHTMLTransform; ///
                indexHTMLTransforms.push(indexHTMLTransform);
            }
        });
        const indexListHTMLTransformsLength = indexHTMLTransforms.length;
        if (indexListHTMLTransformsLength > 0) {
            const htmlNode = null, htmlNodes = [];
            indexHTMLTransforms.forEach((indexHTMLTransform)=>{
                const htmlNode = indexHTMLTransform.getHTMLNode();
                htmlNodes.push(htmlNode);
            });
            indexHTMLTransform = _html.default.fromHTMLNode(IndexHTMLTransform, htmlNode, htmlNodes);
        }
        return indexHTMLTransform;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxldHRlcnMgZnJvbSBcIi4uLy4uL2xldHRlcnNcIjtcbmltcG9ydCBJbmRleExpc3QgZnJvbSBcIi4uLy4uL2luZGV4L2xpc3RcIjtcbmltcG9ydCBIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbFwiO1xuaW1wb3J0IEluZGV4TGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvaW5kZXhcIjtcbmltcG9ydCBJbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9oZWFkaW5nL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihodG1sTm9kZSwgaHRtbE5vZGVzKSB7XG4gICAgc3VwZXIoaHRtbE5vZGUpO1xuXG4gICAgdGhpcy5odG1sTm9kZXMgPSBodG1sTm9kZXM7XG4gIH1cblxuICBnZXRIVE1MTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbE5vZGVzO1xuICB9XG5cbiAgYWRkQWZ0ZXIoc2libGluZ0hUTUxOb2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gc2libGluZ0hUTUxOb2RlLCAgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGNoaWxkTm9kZS5nZXRQYXJlbnROb2RlKCksXG4gICAgICAgICAgaW5kZXggPSBwYXJlbnROb2RlLmluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIGFkZGVkQ2hpbGROb2RlcyA9IHRoaXMuaHRtbE5vZGVzOyAgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFkZENoaWxkTm9kZXMoYWRkZWRDaGlsZE5vZGVzLCBzdGFydEluZGV4KTtcbiAgfVxuXG4gIGFkZEFmdGVySW5kZXhEaXJlY3RpdmVIVE1MTm9kZShpbmRleERpcmVjdGl2ZUhUTUxOb2RlKSB7XG4gICAgY29uc3Qgc2libGluZ0hUTUxOb2RlID0gaW5kZXhEaXJlY3RpdmVIVE1MTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5hZGRBZnRlcihzaWJsaW5nSFRNTE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbmRleERpcmVjdGl2ZUhUTUxOb2RlQW5kRGl2aXNpb25IVE1MTm9kZXMoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSwgZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXhIVE1MVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IGluZGV4TGlzdCA9IEluZGV4TGlzdC5mcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZUFuZERpdmlzaW9uSFRNTE5vZGVzKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm1zID0gW107XG5cbiAgICBsZXR0ZXJzLmZvckVhY2goKGxldHRlcikgPT4ge1xuICAgICAgY29uc3QgaW5kZXhMaXN0SFRNTFRyYW5zZm9ybSA9IEluZGV4TGlzdEhUTUxUcmFuc2Zvcm0uZnJvbUluZGV4TGlzdEFuZExldHRlcihpbmRleExpc3QsIGxldHRlcik7XG5cbiAgICAgIGlmIChpbmRleExpc3RIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBpbmRleEhUTUxUcmFuc2Zvcm07XG5cbiAgICAgICAgY29uc3QgaW5kZXhIZWFkaW5nSFRNTFRyYW5zZm9ybSA9IEluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm0uZnJvbUxldHRlcihsZXR0ZXIpO1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IGluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm07IC8vL1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybXMucHVzaChpbmRleEhUTUxUcmFuc2Zvcm0pO1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IGluZGV4TGlzdEhUTUxUcmFuc2Zvcm07ICAvLy9cblxuICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm1zLnB1c2goaW5kZXhIVE1MVHJhbnNmb3JtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGluZGV4TGlzdEhUTUxUcmFuc2Zvcm1zTGVuZ3RoID0gaW5kZXhIVE1MVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXhMaXN0SFRNTFRyYW5zZm9ybXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBodG1sTm9kZSA9IG51bGwsXG4gICAgICAgICAgICBodG1sTm9kZXMgPSBbXTtcblxuICAgICAgaW5kZXhIVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChpbmRleEhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgY29uc3QgaHRtbE5vZGUgPSBpbmRleEhUTUxUcmFuc2Zvcm0uZ2V0SFRNTE5vZGUoKTtcblxuICAgICAgICBodG1sTm9kZXMucHVzaChodG1sTm9kZSk7XG4gICAgICB9KTtcblxuICAgICAgaW5kZXhIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoSW5kZXhIVE1MVHJhbnNmb3JtLCBodG1sTm9kZSwgaHRtbE5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhIVE1MVHJhbnNmb3JtIiwiSFRNTFRyYW5zZm9ybSIsImh0bWxOb2RlIiwiaHRtbE5vZGVzIiwiZ2V0SFRNTE5vZGVzIiwiYWRkQWZ0ZXIiLCJzaWJsaW5nSFRNTE5vZGUiLCJjaGlsZE5vZGUiLCJwYXJlbnROb2RlIiwiZ2V0UGFyZW50Tm9kZSIsImluZGV4IiwiaW5kZXhPZkNoaWxkTm9kZSIsInN0YXJ0SW5kZXgiLCJhZGRlZENoaWxkTm9kZXMiLCJhZGRDaGlsZE5vZGVzIiwiYWRkQWZ0ZXJJbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwiaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSIsImZyb21JbmRleERpcmVjdGl2ZUhUTUxOb2RlQW5kRGl2aXNpb25IVE1MTm9kZXMiLCJkaXZpc2lvbkhUTUxOb2RlcyIsImNvbnRleHQiLCJpbmRleEhUTUxUcmFuc2Zvcm0iLCJpbmRleExpc3QiLCJJbmRleExpc3QiLCJpbmRleEhUTUxUcmFuc2Zvcm1zIiwibGV0dGVycyIsImZvckVhY2giLCJsZXR0ZXIiLCJpbmRleExpc3RIVE1MVHJhbnNmb3JtIiwiSW5kZXhMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21JbmRleExpc3RBbmRMZXR0ZXIiLCJpbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtIiwiSW5kZXhIZWFkaW5nSFRNTFRyYW5zZm9ybSIsImZyb21MZXR0ZXIiLCJwdXNoIiwiaW5kZXhMaXN0SFRNTFRyYW5zZm9ybXNMZW5ndGgiLCJsZW5ndGgiLCJnZXRIVE1MTm9kZSIsImZyb21IVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7OztnRUFORDs2REFDRTs2REFDSTs4REFDUzsrREFDRzs7Ozs7O0FBRXZCLE1BQU1BLDJCQUEyQkMsYUFBYTtJQUMzRCxZQUFZQyxRQUFRLEVBQUVDLFNBQVMsQ0FBRTtRQUMvQixLQUFLLENBQUNEO1FBRU4sSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0QsU0FBUztJQUN2QjtJQUVBRSxTQUFTQyxlQUFlLEVBQUU7UUFDeEIsTUFBTUMsWUFBWUQsaUJBQ1pFLGFBQWFELFVBQVVFLGFBQWEsSUFDcENDLFFBQVFGLFdBQVdHLGdCQUFnQixDQUFDSixZQUNwQ0ssYUFBYUYsUUFBUSxHQUNyQkcsa0JBQWtCLElBQUksQ0FBQ1YsU0FBUyxFQUFHLEdBQUc7UUFFNUNLLFdBQVdNLGFBQWEsQ0FBQ0QsaUJBQWlCRDtJQUM1QztJQUVBRywrQkFBK0JDLHNCQUFzQixFQUFFO1FBQ3JELE1BQU1WLGtCQUFrQlUsd0JBQXlCLEdBQUc7UUFFcEQsSUFBSSxDQUFDWCxRQUFRLENBQUNDO0lBQ2hCO0lBRUEsT0FBT1csK0NBQStDRCxzQkFBc0IsRUFBRUUsaUJBQWlCLEVBQUVDLE9BQU8sRUFBRTtRQUN4RyxJQUFJQyxxQkFBcUI7UUFFekIsTUFBTUMsWUFBWUMsYUFBUyxDQUFDTCw4Q0FBOEMsQ0FBQ0Qsd0JBQXdCRSxtQkFBbUJDLFVBQ2hISSxzQkFBc0IsRUFBRTtRQUU5QkMsZ0JBQU8sQ0FBQ0MsT0FBTyxDQUFDLENBQUNDO1lBQ2YsTUFBTUMseUJBQXlCQyxjQUFzQixDQUFDQyxzQkFBc0IsQ0FBQ1IsV0FBV0s7WUFFeEYsSUFBSUMsMkJBQTJCLE1BQU07Z0JBQ25DLElBQUlQO2dCQUVKLE1BQU1VLDRCQUE0QkMsZUFBeUIsQ0FBQ0MsVUFBVSxDQUFDTjtnQkFFdkVOLHFCQUFxQlUsMkJBQTJCLEdBQUc7Z0JBRW5EUCxvQkFBb0JVLElBQUksQ0FBQ2I7Z0JBRXpCQSxxQkFBcUJPLHdCQUF5QixHQUFHO2dCQUVqREosb0JBQW9CVSxJQUFJLENBQUNiO1lBQzNCO1FBQ0Y7UUFFQSxNQUFNYyxnQ0FBZ0NYLG9CQUFvQlksTUFBTTtRQUVoRSxJQUFJRCxnQ0FBZ0MsR0FBRztZQUNyQyxNQUFNaEMsV0FBVyxNQUNYQyxZQUFZLEVBQUU7WUFFcEJvQixvQkFBb0JFLE9BQU8sQ0FBQyxDQUFDTDtnQkFDM0IsTUFBTWxCLFdBQVdrQixtQkFBbUJnQixXQUFXO2dCQUUvQ2pDLFVBQVU4QixJQUFJLENBQUMvQjtZQUNqQjtZQUVBa0IscUJBQXFCbkIsYUFBYSxDQUFDb0MsWUFBWSxDQUFDckMsb0JBQW9CRSxVQUFVQztRQUNoRjtRQUVBLE9BQU9pQjtJQUNUO0FBQ0YifQ==
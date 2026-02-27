"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PreviewDiv extends _easy.Element {
    getParentDOMElement() {
        const domElement = this.getDOMElement(), parentDOMElement = domElement; ///
        return parentDOMElement;
    }
    clear() {
        let divisionHTMLNode;
        divisionHTMLNode = this.getDivisionHTMLNode();
        if (divisionHTMLNode !== null) {
            const parentDOMElement = this.getParentDOMElement();
            divisionHTMLNode.unmount(parentDOMElement);
            divisionHTMLNode = null;
            this.setDivisionHTMLNode(divisionHTMLNode);
        }
    }
    update(divisionHTMLNode, context) {
        this.clear();
        const parentDOMElement = this.getParentDOMElement(), siblingDOMElement = null;
        divisionHTMLNode.mount(parentDOMElement, siblingDOMElement, context);
        this.setDivisionHTMLNode(divisionHTMLNode);
    }
    getDivisionHTMLNode() {
        const { divisionHTMLNode } = this.getState();
        return divisionHTMLNode;
    }
    setDivisionHTMLNode(divisionHTMLNode) {
        this.updateState({
            divisionHTMLNode
        });
    }
    setInitialState() {
        const divisionHTMLNode = null;
        this.setState({
            divisionHTMLNode
        });
    }
    parentContext() {
        const context = this.getContext(), clearPreviewDiv = this.clear.bind(this), updatePreviewDiv = this.update.bind(this); ///
        return {
            ...context,
            clearPreviewDiv,
            updatePreviewDiv
        };
    }
    initialise() {
        this.setInitialState();
    }
    static tagName = "div";
    static defaultProperties = {
        className: "preview"
    };
}
const _default = (0, _easywithstyle.default)(PreviewDiv)`

  width: 100%;
  height: 100%;
  display: flex;
  overflow: scroll;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;  

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3ByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5jbGFzcyBQcmV2aWV3RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFBhcmVudERPTUVsZW1lbnQoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gcGFyZW50RE9NRWxlbWVudDtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGxldCBkaXZpc2lvbkhUTUxOb2RlO1xuXG4gICAgZGl2aXNpb25IVE1MTm9kZSA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZSgpO1xuXG4gICAgaWYgKGRpdmlzaW9uSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmdldFBhcmVudERPTUVsZW1lbnQoKTtcblxuICAgICAgZGl2aXNpb25IVE1MTm9kZS51bm1vdW50KHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgICBkaXZpc2lvbkhUTUxOb2RlID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXREaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkaXZpc2lvbkhUTUxOb2RlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZ2V0UGFyZW50RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gbnVsbDtcblxuICAgIGRpdmlzaW9uSFRNTE5vZGUubW91bnQocGFyZW50RE9NRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5zZXREaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25IVE1MTm9kZSgpIHtcbiAgICBjb25zdCB7IGRpdmlzaW9uSFRNTE5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgc2V0RGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBkaXZpc2lvbkhUTUxOb2RlXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpdmlzaW9uSFRNTE5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNsZWFyUHJldmlld0RpdiA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlUHJldmlld0RpdiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIGNsZWFyUHJldmlld0RpdixcbiAgICAgIHVwZGF0ZVByZXZpZXdEaXZcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInByZXZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUHJldmlld0RpdilgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICBcblxuYDtcbiJdLCJuYW1lcyI6WyJQcmV2aWV3RGl2IiwiRWxlbWVudCIsImdldFBhcmVudERPTUVsZW1lbnQiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInBhcmVudERPTUVsZW1lbnQiLCJjbGVhciIsImRpdmlzaW9uSFRNTE5vZGUiLCJnZXREaXZpc2lvbkhUTUxOb2RlIiwidW5tb3VudCIsInNldERpdmlzaW9uSFRNTE5vZGUiLCJ1cGRhdGUiLCJjb250ZXh0Iiwic2libGluZ0RPTUVsZW1lbnQiLCJtb3VudCIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsInBhcmVudENvbnRleHQiLCJnZXRDb250ZXh0IiwiY2xlYXJQcmV2aWV3RGl2IiwiYmluZCIsInVwZGF0ZVByZXZpZXdEaXYiLCJpbml0aWFsaXNlIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvRkE7OztlQUFBOzs7c0VBbEZzQjtzQkFFRTs7Ozs7O0FBRXhCLE1BQU1BLG1CQUFtQkMsYUFBTztJQUM5QkMsc0JBQXNCO1FBQ3BCLE1BQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxtQkFBbUJGLFlBQWEsR0FBRztRQUV6QyxPQUFPRTtJQUNUO0lBRUFDLFFBQVE7UUFDTixJQUFJQztRQUVKQSxtQkFBbUIsSUFBSSxDQUFDQyxtQkFBbUI7UUFFM0MsSUFBSUQscUJBQXFCLE1BQU07WUFDN0IsTUFBTUYsbUJBQW1CLElBQUksQ0FBQ0gsbUJBQW1CO1lBRWpESyxpQkFBaUJFLE9BQU8sQ0FBQ0o7WUFFekJFLG1CQUFtQjtZQUVuQixJQUFJLENBQUNHLG1CQUFtQixDQUFDSDtRQUMzQjtJQUNGO0lBRUFJLE9BQU9KLGdCQUFnQixFQUFFSyxPQUFPLEVBQUU7UUFDaEMsSUFBSSxDQUFDTixLQUFLO1FBRVYsTUFBTUQsbUJBQW1CLElBQUksQ0FBQ0gsbUJBQW1CLElBQzNDVyxvQkFBb0I7UUFFMUJOLGlCQUFpQk8sS0FBSyxDQUFDVCxrQkFBa0JRLG1CQUFtQkQ7UUFFNUQsSUFBSSxDQUFDRixtQkFBbUIsQ0FBQ0g7SUFDM0I7SUFFQUMsc0JBQXNCO1FBQ3BCLE1BQU0sRUFBRUQsZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLENBQUNRLFFBQVE7UUFFMUMsT0FBT1I7SUFDVDtJQUVBRyxvQkFBb0JILGdCQUFnQixFQUFFO1FBQ3BDLElBQUksQ0FBQ1MsV0FBVyxDQUFDO1lBQ2ZUO1FBQ0Y7SUFDRjtJQUVBVSxrQkFBa0I7UUFDaEIsTUFBTVYsbUJBQW1CO1FBRXpCLElBQUksQ0FBQ1csUUFBUSxDQUFDO1lBQ1pYO1FBQ0Y7SUFDRjtJQUVBWSxnQkFBZ0I7UUFDZCxNQUFNUCxVQUFVLElBQUksQ0FBQ1EsVUFBVSxJQUN6QkMsa0JBQWtCLElBQUksQ0FBQ2YsS0FBSyxDQUFDZ0IsSUFBSSxDQUFDLElBQUksR0FDdENDLG1CQUFtQixJQUFJLENBQUNaLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO1FBRXJELE9BQVE7WUFDTixHQUFHVixPQUFPO1lBQ1ZTO1lBQ0FFO1FBQ0Y7SUFDRjtJQUVBQyxhQUFhO1FBQ1gsSUFBSSxDQUFDUCxlQUFlO0lBQ3RCO0lBRUEsT0FBT1EsVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUM1QixXQUFXLENBQUM7Ozs7Ozs7Ozs7O0FBV3JDLENBQUMifQ==
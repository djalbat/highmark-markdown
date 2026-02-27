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
const _page = /*#__PURE__*/ _interop_require_default(require("../button/page"));
const _customEventTypes = require("../../customEventTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PageButtonsDiv extends _easy.Element {
    pageButtonClickHandler = (event, element)=>{
        const pageButton = element, index = pageButton.getIndex(), customEventType = _customEventTypes.PAGE_UPDATE_CUSTOM_EVENT_TYPE;
        this.callCustomHandlers(customEventType, event, element, index);
    };
    unmountPageButtons() {
        const pageButtons = this.getPageButtons();
        pageButtons.forEach((pageButton)=>{
            this.unmount(pageButton);
        });
    }
    mountPageButtons(length) {
        const pageButtons = [];
        for(let index = 0; index < length; index++){
            const pageButton = /*#__PURE__*/ React.createElement(_page.default, {
                index: index,
                onClick: this.pageButtonClickHandler
            });
            pageButtons.push(pageButton);
        }
        pageButtons.forEach((pageButton)=>{
            this.mount(pageButton);
        });
    }
    getPageButtons() {
        const pageButtonChildElements = this.getChildElements("button.page"), pageButtons = pageButtonChildElements; ///
        return pageButtons;
    }
    update(length, index) {
        let pageButtons;
        pageButtons = this.getPageButtons();
        const pageButtonsLength = pageButtons.length;
        if (length !== pageButtonsLength) {
            this.unmountPageButtons();
            this.mountPageButtons(length);
        }
        pageButtons = this.getPageButtons();
        const currentIndex = index; ///
        pageButtons.forEach((pageButton, index)=>{
            index === currentIndex ? pageButton.disable() : pageButton.enable();
        });
    }
    clear() {
        this.unmountPageButtons();
    }
    parentContext() {
        const clearPageButtonsDiv = this.clear.bind(this), updatePageButtonsDiv = this.update.bind(this); ///
        return {
            clearPageButtonsDiv,
            updatePageButtonsDiv
        };
    }
    static tagName = "div";
    static defaultProperties = {
        className: "page-buttons"
    };
}
const _default = (0, _easywithstyle.default)(PageButtonsDiv)`

  top: 7rem;
  right: 3rem;
  z-index: 1;
  position: absolute;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3BhZ2VCdXR0b25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFBhZ2VCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9wYWdlXCI7XG5cbmltcG9ydCB7IFBBR0VfVVBEQVRFX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uLy4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY2xhc3MgUGFnZUJ1dHRvbnNEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcGFnZUJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VCdXR0b24gPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBpbmRleCA9IHBhZ2VCdXR0b24uZ2V0SW5kZXgoKSxcbiAgICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBQQUdFX1VQREFURV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHVubW91bnRQYWdlQnV0dG9ucygpIHtcbiAgICBjb25zdCBwYWdlQnV0dG9ucyA9IHRoaXMuZ2V0UGFnZUJ1dHRvbnMoKTtcblxuICAgIHBhZ2VCdXR0b25zLmZvckVhY2goKHBhZ2VCdXR0b24pID0+IHtcbiAgICAgIHRoaXMudW5tb3VudChwYWdlQnV0dG9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1vdW50UGFnZUJ1dHRvbnMobGVuZ3RoKSB7XG4gICAgY29uc3QgcGFnZUJ1dHRvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHBhZ2VCdXR0b24gPVxuXG4gICAgICAgIDxQYWdlQnV0dG9uIGluZGV4PXtpbmRleH0gb25DbGljaz17dGhpcy5wYWdlQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPlxuXG4gICAgICA7XG5cbiAgICAgIHBhZ2VCdXR0b25zLnB1c2gocGFnZUJ1dHRvbik7XG4gICAgfVxuXG4gICAgcGFnZUJ1dHRvbnMuZm9yRWFjaCgocGFnZUJ1dHRvbikgPT4ge1xuICAgICAgdGhpcy5tb3VudChwYWdlQnV0dG9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBhZ2VCdXR0b25zKCkge1xuICAgIGNvbnN0IHBhZ2VCdXR0b25DaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKFwiYnV0dG9uLnBhZ2VcIiksXG4gICAgICAgICAgcGFnZUJ1dHRvbnMgPSBwYWdlQnV0dG9uQ2hpbGRFbGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIHBhZ2VCdXR0b25zO1xuICB9XG5cbiAgdXBkYXRlKGxlbmd0aCwgaW5kZXgpIHtcbiAgICBsZXQgcGFnZUJ1dHRvbnM7XG5cbiAgICBwYWdlQnV0dG9ucyA9IHRoaXMuZ2V0UGFnZUJ1dHRvbnMoKTtcblxuICAgIGNvbnN0IHBhZ2VCdXR0b25zTGVuZ3RoID0gcGFnZUJ1dHRvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCAhPT0gcGFnZUJ1dHRvbnNMZW5ndGgpIHtcbiAgICAgIHRoaXMudW5tb3VudFBhZ2VCdXR0b25zKCk7XG5cbiAgICAgIHRoaXMubW91bnRQYWdlQnV0dG9ucyhsZW5ndGgpO1xuICAgIH1cblxuICAgIHBhZ2VCdXR0b25zID0gdGhpcy5nZXRQYWdlQnV0dG9ucygpO1xuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gaW5kZXg7IC8vL1xuXG4gICAgcGFnZUJ1dHRvbnMuZm9yRWFjaCgocGFnZUJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgIChpbmRleCA9PT0gY3VycmVudEluZGV4KSA/XG4gICAgICAgIHBhZ2VCdXR0b24uZGlzYWJsZSgpIDpcbiAgICAgICAgICBwYWdlQnV0dG9uLmVuYWJsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy51bm1vdW50UGFnZUJ1dHRvbnMoKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY2xlYXJQYWdlQnV0dG9uc0RpdiA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHVwZGF0ZVBhZ2VCdXR0b25zRGl2ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGNsZWFyUGFnZUJ1dHRvbnNEaXYsXG4gICAgICB1cGRhdGVQYWdlQnV0dG9uc0RpdlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGFnZS1idXR0b25zXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFBhZ2VCdXR0b25zRGl2KWBcblxuICB0b3A6IDdyZW07XG4gIHJpZ2h0OiAzcmVtO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJQYWdlQnV0dG9uc0RpdiIsIkVsZW1lbnQiLCJwYWdlQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwicGFnZUJ1dHRvbiIsImluZGV4IiwiZ2V0SW5kZXgiLCJjdXN0b21FdmVudFR5cGUiLCJQQUdFX1VQREFURV9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVycyIsInVubW91bnRQYWdlQnV0dG9ucyIsInBhZ2VCdXR0b25zIiwiZ2V0UGFnZUJ1dHRvbnMiLCJmb3JFYWNoIiwidW5tb3VudCIsIm1vdW50UGFnZUJ1dHRvbnMiLCJsZW5ndGgiLCJQYWdlQnV0dG9uIiwib25DbGljayIsInB1c2giLCJtb3VudCIsInBhZ2VCdXR0b25DaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsInVwZGF0ZSIsInBhZ2VCdXR0b25zTGVuZ3RoIiwiY3VycmVudEluZGV4IiwiZGlzYWJsZSIsImVuYWJsZSIsImNsZWFyIiwicGFyZW50Q29udGV4dCIsImNsZWFyUGFnZUJ1dHRvbnNEaXYiLCJiaW5kIiwidXBkYXRlUGFnZUJ1dHRvbnNEaXYiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlHQTs7O2VBQUE7OztzRUEvRnNCO3NCQUVFOzZEQUVEO2tDQUV1Qjs7Ozs7O0FBRTlDLE1BQU1BLHVCQUF1QkMsYUFBTztJQUNsQ0MseUJBQXlCLENBQUNDLE9BQU9DO1FBQy9CLE1BQU1DLGFBQWFELFNBQ2JFLFFBQVFELFdBQVdFLFFBQVEsSUFDM0JDLGtCQUFrQkMsK0NBQTZCO1FBRXJELElBQUksQ0FBQ0Msa0JBQWtCLENBQUNGLGlCQUFpQkwsT0FBT0MsU0FBU0U7SUFDM0QsRUFBQztJQUVESyxxQkFBcUI7UUFDbkIsTUFBTUMsY0FBYyxJQUFJLENBQUNDLGNBQWM7UUFFdkNELFlBQVlFLE9BQU8sQ0FBQyxDQUFDVDtZQUNuQixJQUFJLENBQUNVLE9BQU8sQ0FBQ1Y7UUFDZjtJQUNGO0lBRUFXLGlCQUFpQkMsTUFBTSxFQUFFO1FBQ3ZCLE1BQU1MLGNBQWMsRUFBRTtRQUV0QixJQUFLLElBQUlOLFFBQVEsR0FBR0EsUUFBUVcsUUFBUVgsUUFBUztZQUMzQyxNQUFNRCwyQkFFSixvQkFBQ2EsYUFBVTtnQkFBQ1osT0FBT0E7Z0JBQU9hLFNBQVMsSUFBSSxDQUFDakIsc0JBQXNCOztZQUloRVUsWUFBWVEsSUFBSSxDQUFDZjtRQUNuQjtRQUVBTyxZQUFZRSxPQUFPLENBQUMsQ0FBQ1Q7WUFDbkIsSUFBSSxDQUFDZ0IsS0FBSyxDQUFDaEI7UUFDYjtJQUNGO0lBRUFRLGlCQUFpQjtRQUNmLE1BQU1TLDBCQUEwQixJQUFJLENBQUNDLGdCQUFnQixDQUFDLGdCQUNoRFgsY0FBY1UseUJBQTBCLEdBQUc7UUFFakQsT0FBT1Y7SUFDVDtJQUVBWSxPQUFPUCxNQUFNLEVBQUVYLEtBQUssRUFBRTtRQUNwQixJQUFJTTtRQUVKQSxjQUFjLElBQUksQ0FBQ0MsY0FBYztRQUVqQyxNQUFNWSxvQkFBb0JiLFlBQVlLLE1BQU07UUFFNUMsSUFBSUEsV0FBV1EsbUJBQW1CO1lBQ2hDLElBQUksQ0FBQ2Qsa0JBQWtCO1lBRXZCLElBQUksQ0FBQ0ssZ0JBQWdCLENBQUNDO1FBQ3hCO1FBRUFMLGNBQWMsSUFBSSxDQUFDQyxjQUFjO1FBRWpDLE1BQU1hLGVBQWVwQixPQUFPLEdBQUc7UUFFL0JNLFlBQVlFLE9BQU8sQ0FBQyxDQUFDVCxZQUFZQztZQUM5QkEsVUFBVW9CLGVBQ1RyQixXQUFXc0IsT0FBTyxLQUNoQnRCLFdBQVd1QixNQUFNO1FBQ3ZCO0lBQ0Y7SUFFQUMsUUFBUTtRQUNOLElBQUksQ0FBQ2xCLGtCQUFrQjtJQUN6QjtJQUVBbUIsZ0JBQWdCO1FBQ2QsTUFBTUMsc0JBQXNCLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUMsSUFBSSxHQUMxQ0MsdUJBQXVCLElBQUksQ0FBQ1QsTUFBTSxDQUFDUSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7UUFFeEQsT0FBUTtZQUNORDtZQUNBRTtRQUNGO0lBQ0Y7SUFFQSxPQUFPQyxVQUFVLE1BQU07SUFFdkIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3JDLGVBQWUsQ0FBQzs7Ozs7OztBQU96QyxDQUFDIn0=
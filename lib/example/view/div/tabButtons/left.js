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
const _tabButtons = /*#__PURE__*/ _interop_require_default(require("../../div/tabButtons"));
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../button/tab/markdown"));
const _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../../button/tab/markdownStyle"));
const _customEventTypes = require("../../../customEventTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class LeftTabButtonsDiv extends _tabButtons.default {
    markdownStyleTabButtonClickHandler = (event, element)=>{
        this.markdownStyle(event, element);
    };
    markdownTabButtonClickHandler = (event, element)=>{
        this.markdown(event, element);
    };
    markdownStyle(event, element) {
        const eventType = _customEventTypes.MARKDOWN_STYLE_CUSTOM_EVENT_TYPE;
        this.enableMarkdownTabButton();
        this.disableMarkdownStyleTabButton();
        this.callCustomHandlers(eventType, event, element);
    }
    markdown(event = null, element = null) {
        const eventType = _customEventTypes.MARKDOWN_CUSTOM_EVENT_TYPE;
        this.disableMarkdownTabButton();
        this.enableMarkdownStyleTabButton();
        this.callCustomHandlers(eventType, event, element);
    }
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_markdown.default, {
                onClick: this.markdownTabButtonClickHandler,
                disabled: true
            }),
            /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                onClick: this.markdownStyleTabButtonClickHandler
            })
        ];
    }
    static defaultProperties = {
        className: "left"
    };
}
const _default = (0, _easywithstyle.default)(LeftTabButtonsDiv)`

  grid-template-columns: 1fr 1fr;  

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvbGVmdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4uLy4uL2Rpdi90YWJCdXR0b25zXCI7XG5pbXBvcnQgTWFya2Rvd25UYWJCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi90YWIvbWFya2Rvd25cIjtcbmltcG9ydCBNYXJrZG93blN0eWxlVGFiQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vdGFiL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgTUFSS0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsIE1BUktET1dOX1NUWUxFX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uLy4uLy4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY2xhc3MgTGVmdFRhYkJ1dHRvbnNEaXYgZXh0ZW5kcyBUYWJCdXR0b25zRGl2IHtcbiAgbWFya2Rvd25TdHlsZVRhYkJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd25TdHlsZShldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBtYXJrZG93blRhYkJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd24oZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZShldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IE1BUktET1dOX1NUWUxFX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5lbmFibGVNYXJrZG93blRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5kaXNhYmxlTWFya2Rvd25TdHlsZVRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoZXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBtYXJrZG93bihldmVudCA9IG51bGwsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gTUFSS0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmRpc2FibGVNYXJrZG93blRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5lbmFibGVNYXJrZG93blN0eWxlVGFiQnV0dG9uKCk7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhldmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxNYXJrZG93blRhYkJ1dHRvbiBvbkNsaWNrPXt0aGlzLm1hcmtkb3duVGFiQnV0dG9uQ2xpY2tIYW5kbGVyfSBkaXNhYmxlZCAvPixcbiAgICAgIDxNYXJrZG93blN0eWxlVGFiQnV0dG9uIG9uQ2xpY2s9e3RoaXMubWFya2Rvd25TdHlsZVRhYkJ1dHRvbkNsaWNrSGFuZGxlcn0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJsZWZ0XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKExlZnRUYWJCdXR0b25zRGl2KWBcblxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7ICBcblxuYDtcbiJdLCJuYW1lcyI6WyJMZWZ0VGFiQnV0dG9uc0RpdiIsIlRhYkJ1dHRvbnNEaXYiLCJtYXJrZG93blN0eWxlVGFiQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibWFya2Rvd25TdHlsZSIsIm1hcmtkb3duVGFiQnV0dG9uQ2xpY2tIYW5kbGVyIiwibWFya2Rvd24iLCJldmVudFR5cGUiLCJNQVJLRE9XTl9TVFlMRV9DVVNUT01fRVZFTlRfVFlQRSIsImVuYWJsZU1hcmtkb3duVGFiQnV0dG9uIiwiZGlzYWJsZU1hcmtkb3duU3R5bGVUYWJCdXR0b24iLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJNQVJLRE9XTl9DVVNUT01fRVZFTlRfVFlQRSIsImRpc2FibGVNYXJrZG93blRhYkJ1dHRvbiIsImVuYWJsZU1hcmtkb3duU3R5bGVUYWJCdXR0b24iLCJjaGlsZEVsZW1lbnRzIiwiTWFya2Rvd25UYWJCdXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJNYXJrZG93blN0eWxlVGFiQnV0dG9uIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFEQTs7O2VBQUE7OztzRUFuRHNCO21FQUVJO2lFQUNJO3NFQUNLO2tDQUUwQzs7Ozs7O0FBRTdFLE1BQU1BLDBCQUEwQkMsbUJBQWE7SUFDM0NDLHFDQUFxQyxDQUFDQyxPQUFPQztRQUMzQyxJQUFJLENBQUNDLGFBQWEsQ0FBQ0YsT0FBT0M7SUFDNUIsRUFBQztJQUVERSxnQ0FBZ0MsQ0FBQ0gsT0FBT0M7UUFDdEMsSUFBSSxDQUFDRyxRQUFRLENBQUNKLE9BQU9DO0lBQ3ZCLEVBQUM7SUFFREMsY0FBY0YsS0FBSyxFQUFFQyxPQUFPLEVBQUU7UUFDNUIsTUFBTUksWUFBWUMsa0RBQWdDO1FBRWxELElBQUksQ0FBQ0MsdUJBQXVCO1FBRTVCLElBQUksQ0FBQ0MsNkJBQTZCO1FBRWxDLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNKLFdBQVdMLE9BQU9DO0lBQzVDO0lBRUFHLFNBQVNKLFFBQVEsSUFBSSxFQUFFQyxVQUFVLElBQUksRUFBRTtRQUNyQyxNQUFNSSxZQUFZSyw0Q0FBMEI7UUFFNUMsSUFBSSxDQUFDQyx3QkFBd0I7UUFFN0IsSUFBSSxDQUFDQyw0QkFBNEI7UUFFakMsSUFBSSxDQUFDSCxrQkFBa0IsQ0FBQ0osV0FBV0wsT0FBT0M7SUFDNUM7SUFFQVksZ0JBQWdCO1FBQ2QsT0FBUTswQkFFTixvQkFBQ0MsaUJBQWlCO2dCQUFDQyxTQUFTLElBQUksQ0FBQ1osNkJBQTZCO2dCQUFFYSxVQUFBQTs7MEJBQ2hFLG9CQUFDQyxzQkFBc0I7Z0JBQUNGLFNBQVMsSUFBSSxDQUFDaEIsa0NBQWtDOztTQUV6RTtJQUNIO0lBRUEsT0FBT21CLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN2QixrQkFBa0IsQ0FBQzs7OztBQUk1QyxDQUFDIn0=
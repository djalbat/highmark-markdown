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
const _css = /*#__PURE__*/ _interop_require_default(require("../../button/tab/css"));
const _html = /*#__PURE__*/ _interop_require_default(require("../../button/tab/html"));
const _tabButtons = /*#__PURE__*/ _interop_require_default(require("../../div/tabButtons"));
const _preview = /*#__PURE__*/ _interop_require_default(require("../../button/tab/preview"));
const _plainText = /*#__PURE__*/ _interop_require_default(require("../../button/tab/plainText"));
const _customEventTypes = require("../../../customEventTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RightTabButtonsDiv extends _tabButtons.default {
    cssTabButtonClickHandler = (event, element)=>{
        this.css(event, element);
    };
    htmlTabButtonClickHandler = (event, element)=>{
        this.html(event, element);
    };
    previewTabButtonClickHandler = (event, element)=>{
        this.preview(event, element);
    };
    plainTextTabButtonClickHandler = (event, element)=>{
        this.plainText(event, element);
    };
    css(event = null, element = null) {
        const eventType = _customEventTypes.CSS_CUSTOM_EVENT_TYPE;
        this.disableCSSTabButton();
        this.enableHTMLTabButton();
        this.enablePreviewTabButton();
        this.enablePlainTextTabButton();
        this.callCustomHandlers(eventType, event, element);
    }
    html(event, element) {
        const eventType = _customEventTypes.HTML_CUSTOM_EVENT_TYPE;
        this.disableHTMLTabButton();
        this.enableCSSTabButton();
        this.enablePreviewTabButton();
        this.enablePlainTextTabButton();
        this.callCustomHandlers(eventType, event, element);
    }
    preview(event, element) {
        const eventType = _customEventTypes.PREVIEW_CUSTOM_EVENT_TYPE;
        this.disablePreviewTabButton();
        this.enableCSSTabButton();
        this.enableHTMLTabButton();
        this.enablePlainTextTabButton();
        this.callCustomHandlers(eventType, event, element);
    }
    plainText(event, element) {
        const eventType = _customEventTypes.PLAIN_TEXT_CUSTOM_EVENT_TYPE;
        this.disablePlainTextTabButton();
        this.enableCSSTabButton();
        this.enableHTMLTabButton();
        this.enablePreviewTabButton();
        this.callCustomHandlers(eventType, event, element);
    }
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_css.default, {
                onClick: this.cssTabButtonClickHandler
            }),
            /*#__PURE__*/ React.createElement(_html.default, {
                onClick: this.htmlTabButtonClickHandler,
                disabled: true
            }),
            /*#__PURE__*/ React.createElement(_preview.default, {
                onClick: this.previewTabButtonClickHandler
            }),
            /*#__PURE__*/ React.createElement(_plainText.default, {
                onClick: this.plainTextTabButtonClickHandler
            })
        ];
    }
    static defaultProperties = {
        className: "right"
    };
}
const _default = (0, _easywithstyle.default)(RightTabButtonsDiv)`

  grid-template-columns: 1fr 1fr 1fr 1fr;  

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvcmlnaHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBDU1NUYWJCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi90YWIvY3NzXCI7XG5pbXBvcnQgSFRNTFRhYkJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL3RhYi9odG1sXCI7XG5pbXBvcnQgVGFiQnV0dG9uc0RpdiBmcm9tIFwiLi4vLi4vZGl2L3RhYkJ1dHRvbnNcIjtcbmltcG9ydCBQcmV2aWV3VGFiQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vdGFiL3ByZXZpZXdcIjtcbmltcG9ydCBQbGFpblRleHRUYWJCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi90YWIvcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IENTU19DVVNUT01fRVZFTlRfVFlQRSwgSFRNTF9DVVNUT01fRVZFTlRfVFlQRSwgUFJFVklFV19DVVNUT01fRVZFTlRfVFlQRSwgUExBSU5fVEVYVF9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi8uLi8uLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNsYXNzIFJpZ2h0VGFiQnV0dG9uc0RpdiBleHRlbmRzIFRhYkJ1dHRvbnNEaXYge1xuICBjc3NUYWJCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmNzcyhldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBodG1sVGFiQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5odG1sKGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHByZXZpZXdUYWJCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnByZXZpZXcoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcGxhaW5UZXh0VGFiQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wbGFpblRleHQoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgY3NzKGV2ZW50ID0gbnVsbCwgZWxlbWVudCA9IG51bGwpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBDU1NfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmRpc2FibGVDU1NUYWJCdXR0b24oKTtcblxuICAgIHRoaXMuZW5hYmxlSFRNTFRhYkJ1dHRvbigpO1xuICAgIHRoaXMuZW5hYmxlUHJldmlld1RhYkJ1dHRvbigpO1xuICAgIHRoaXMuZW5hYmxlUGxhaW5UZXh0VGFiQnV0dG9uKCk7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhldmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGh0bWwoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBIVE1MX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5kaXNhYmxlSFRNTFRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5lbmFibGVDU1NUYWJCdXR0b24oKTtcbiAgICB0aGlzLmVuYWJsZVByZXZpZXdUYWJCdXR0b24oKTtcbiAgICB0aGlzLmVuYWJsZVBsYWluVGV4dFRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoZXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBwcmV2aWV3KGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUFJFVklFV19DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuZGlzYWJsZVByZXZpZXdUYWJCdXR0b24oKTtcblxuICAgIHRoaXMuZW5hYmxlQ1NTVGFiQnV0dG9uKCk7XG4gICAgdGhpcy5lbmFibGVIVE1MVGFiQnV0dG9uKCk7XG4gICAgdGhpcy5lbmFibGVQbGFpblRleHRUYWJCdXR0b24oKTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcGxhaW5UZXh0KGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUExBSU5fVEVYVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuZGlzYWJsZVBsYWluVGV4dFRhYkJ1dHRvbigpO1xuXG4gICAgdGhpcy5lbmFibGVDU1NUYWJCdXR0b24oKTtcbiAgICB0aGlzLmVuYWJsZUhUTUxUYWJCdXR0b24oKTtcbiAgICB0aGlzLmVuYWJsZVByZXZpZXdUYWJCdXR0b24oKTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENTU1RhYkJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNzc1RhYkJ1dHRvbkNsaWNrSGFuZGxlcn0gLz4sXG4gICAgICA8SFRNTFRhYkJ1dHRvbiBvbkNsaWNrPXt0aGlzLmh0bWxUYWJCdXR0b25DbGlja0hhbmRsZXJ9IGRpc2FibGVkIC8+LFxuICAgICAgPFByZXZpZXdUYWJCdXR0b24gb25DbGljaz17dGhpcy5wcmV2aWV3VGFiQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPixcbiAgICAgIDxQbGFpblRleHRUYWJCdXR0b24gb25DbGljaz17dGhpcy5wbGFpblRleHRUYWJCdXR0b25DbGlja0hhbmRsZXJ9IC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmlnaHRcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUmlnaHRUYWJCdXR0b25zRGl2KWBcblxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjsgIFxuXG5gO1xuIl0sIm5hbWVzIjpbIlJpZ2h0VGFiQnV0dG9uc0RpdiIsIlRhYkJ1dHRvbnNEaXYiLCJjc3NUYWJCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjc3MiLCJodG1sVGFiQnV0dG9uQ2xpY2tIYW5kbGVyIiwiaHRtbCIsInByZXZpZXdUYWJCdXR0b25DbGlja0hhbmRsZXIiLCJwcmV2aWV3IiwicGxhaW5UZXh0VGFiQnV0dG9uQ2xpY2tIYW5kbGVyIiwicGxhaW5UZXh0IiwiZXZlbnRUeXBlIiwiQ1NTX0NVU1RPTV9FVkVOVF9UWVBFIiwiZGlzYWJsZUNTU1RhYkJ1dHRvbiIsImVuYWJsZUhUTUxUYWJCdXR0b24iLCJlbmFibGVQcmV2aWV3VGFiQnV0dG9uIiwiZW5hYmxlUGxhaW5UZXh0VGFiQnV0dG9uIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwiSFRNTF9DVVNUT01fRVZFTlRfVFlQRSIsImRpc2FibGVIVE1MVGFiQnV0dG9uIiwiZW5hYmxlQ1NTVGFiQnV0dG9uIiwiUFJFVklFV19DVVNUT01fRVZFTlRfVFlQRSIsImRpc2FibGVQcmV2aWV3VGFiQnV0dG9uIiwiUExBSU5fVEVYVF9DVVNUT01fRVZFTlRfVFlQRSIsImRpc2FibGVQbGFpblRleHRUYWJCdXR0b24iLCJjaGlsZEVsZW1lbnRzIiwiQ1NTVGFiQnV0dG9uIiwib25DbGljayIsIkhUTUxUYWJCdXR0b24iLCJkaXNhYmxlZCIsIlByZXZpZXdUYWJCdXR0b24iLCJQbGFpblRleHRUYWJCdXR0b24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkZBOzs7ZUFBQTs7O3NFQTNGc0I7NERBRUc7NkRBQ0M7bUVBQ0E7Z0VBQ0c7a0VBQ0U7a0NBRXdGOzs7Ozs7QUFFdkgsTUFBTUEsMkJBQTJCQyxtQkFBYTtJQUM1Q0MsMkJBQTJCLENBQUNDLE9BQU9DO1FBQ2pDLElBQUksQ0FBQ0MsR0FBRyxDQUFDRixPQUFPQztJQUNsQixFQUFDO0lBRURFLDRCQUE0QixDQUFDSCxPQUFPQztRQUNsQyxJQUFJLENBQUNHLElBQUksQ0FBQ0osT0FBT0M7SUFDbkIsRUFBQztJQUVESSwrQkFBK0IsQ0FBQ0wsT0FBT0M7UUFDckMsSUFBSSxDQUFDSyxPQUFPLENBQUNOLE9BQU9DO0lBQ3RCLEVBQUM7SUFFRE0saUNBQWlDLENBQUNQLE9BQU9DO1FBQ3ZDLElBQUksQ0FBQ08sU0FBUyxDQUFDUixPQUFPQztJQUN4QixFQUFDO0lBRURDLElBQUlGLFFBQVEsSUFBSSxFQUFFQyxVQUFVLElBQUksRUFBRTtRQUNoQyxNQUFNUSxZQUFZQyx1Q0FBcUI7UUFFdkMsSUFBSSxDQUFDQyxtQkFBbUI7UUFFeEIsSUFBSSxDQUFDQyxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDQyxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDQyx3QkFBd0I7UUFFN0IsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ04sV0FBV1QsT0FBT0M7SUFDNUM7SUFFQUcsS0FBS0osS0FBSyxFQUFFQyxPQUFPLEVBQUU7UUFDbkIsTUFBTVEsWUFBWU8sd0NBQXNCO1FBRXhDLElBQUksQ0FBQ0Msb0JBQW9CO1FBRXpCLElBQUksQ0FBQ0Msa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQ0wsc0JBQXNCO1FBQzNCLElBQUksQ0FBQ0Msd0JBQXdCO1FBRTdCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNOLFdBQVdULE9BQU9DO0lBQzVDO0lBRUFLLFFBQVFOLEtBQUssRUFBRUMsT0FBTyxFQUFFO1FBQ3RCLE1BQU1RLFlBQVlVLDJDQUF5QjtRQUUzQyxJQUFJLENBQUNDLHVCQUF1QjtRQUU1QixJQUFJLENBQUNGLGtCQUFrQjtRQUN2QixJQUFJLENBQUNOLG1CQUFtQjtRQUN4QixJQUFJLENBQUNFLHdCQUF3QjtRQUU3QixJQUFJLENBQUNDLGtCQUFrQixDQUFDTixXQUFXVCxPQUFPQztJQUM1QztJQUVBTyxVQUFVUixLQUFLLEVBQUVDLE9BQU8sRUFBRTtRQUN4QixNQUFNUSxZQUFZWSw4Q0FBNEI7UUFFOUMsSUFBSSxDQUFDQyx5QkFBeUI7UUFFOUIsSUFBSSxDQUFDSixrQkFBa0I7UUFDdkIsSUFBSSxDQUFDTixtQkFBbUI7UUFDeEIsSUFBSSxDQUFDQyxzQkFBc0I7UUFFM0IsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQ04sV0FBV1QsT0FBT0M7SUFDNUM7SUFFQXNCLGdCQUFnQjtRQUNkLE9BQVE7MEJBRU4sb0JBQUNDLFlBQVk7Z0JBQUNDLFNBQVMsSUFBSSxDQUFDMUIsd0JBQXdCOzswQkFDcEQsb0JBQUMyQixhQUFhO2dCQUFDRCxTQUFTLElBQUksQ0FBQ3RCLHlCQUF5QjtnQkFBRXdCLFVBQUFBOzswQkFDeEQsb0JBQUNDLGdCQUFnQjtnQkFBQ0gsU0FBUyxJQUFJLENBQUNwQiw0QkFBNEI7OzBCQUM1RCxvQkFBQ3dCLGtCQUFrQjtnQkFBQ0osU0FBUyxJQUFJLENBQUNsQiw4QkFBOEI7O1NBRWpFO0lBQ0g7SUFFQSxPQUFPdUIsb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ25DLG1CQUFtQixDQUFDOzs7O0FBSTdDLENBQUMifQ==
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "replaceEntities", {
    enumerable: true,
    get: function() {
        return replaceEntities;
    }
});
var _constants = require("../constants");
function replaceEntities(content) {
    content = content.replace(/&lt;?/g, _constants.LESS_THAN).replace(/&gt;?/g, _constants.GREATER_THAN);
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTEVTU19USEFOLCBHUkVBVEVSX1RIQU4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlRW50aXRpZXMoY29udGVudCkge1xuICBjb250ZW50ID0gY29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgvJmx0Oz8vZywgTEVTU19USEFOKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvJmd0Oz8vZywgR1JFQVRFUl9USEFOKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cbiJdLCJuYW1lcyI6WyJyZXBsYWNlRW50aXRpZXMiLCJjb250ZW50IiwicmVwbGFjZSIsIkxFU1NfVEhBTiIsIkdSRUFURVJfVEhBTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSWdCQTs7O2VBQUFBOzs7eUJBRndCO0FBRWpDLFNBQVNBLGdCQUFnQkMsT0FBTztJQUNyQ0EsVUFBVUEsUUFDR0MsT0FBTyxDQUFDLFVBQVVDLG9CQUFTLEVBQzNCRCxPQUFPLENBQUMsVUFBVUUsdUJBQVk7SUFFM0MsT0FBT0g7QUFDVCJ9
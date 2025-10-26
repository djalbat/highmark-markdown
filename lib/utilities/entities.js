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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZW50aXRpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IExFU1NfVEhBTiwgR1JFQVRFUl9USEFOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUVudGl0aWVzKGNvbnRlbnQpIHtcbiAgY29udGVudCA9IGNvbnRlbnRcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLyZsdDs/L2csIExFU1NfVEhBTilcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLyZndDs/L2csIEdSRUFURVJfVEhBTik7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iXSwibmFtZXMiOlsicmVwbGFjZUVudGl0aWVzIiwiY29udGVudCIsInJlcGxhY2UiLCJMRVNTX1RIQU4iLCJHUkVBVEVSX1RIQU4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlnQkE7OztlQUFBQTs7O3lCQUZ3QjtBQUVqQyxTQUFTQSxnQkFBZ0JDLE9BQU87SUFDckNBLFVBQVVBLFFBQ0dDLE9BQU8sQ0FBQyxVQUFVQyxvQkFBUyxFQUMzQkQsT0FBTyxDQUFDLFVBQVVFLHVCQUFZO0lBRTNDLE9BQU9IO0FBQ1QifQ==
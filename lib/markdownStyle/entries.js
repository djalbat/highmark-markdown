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
var _tagName = /*#__PURE__*/ _interop_require_default(require("../map/tagName"));
var _entries = require("../utilities/entries");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ruleNamesExpression = (0, _entries.ruleNamesExpressionFromTagNameMap)(_tagName.default);
var entries = [
    {
        "escaped": "^\\\\[^\\s]"
    },
    {
        "rule-name": "^(?:".concat(ruleNamesExpression, ")")
    },
    {
        "target": "^(?:web|odf)"
    },
    {
        "number": "^(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?"
    },
    {
        "colour": "^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})"
    },
    {
        "unit": "^(?:deg|%|rem|em|pt|px)"
    },
    {
        "name": "^[_a-zA-Z0-9]+"
    },
    {
        "bracket": "^(?:\\{|\\})"
    },
    {
        "backticks": "^```"
    },
    {
        "special": "^(?:,|:|;|-|\\.|\\(|\\)|\\[|\\])"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgdGFnTmFtZU1hcCBmcm9tIFwiLi4vbWFwL3RhZ05hbWVcIjtcclxuXHJcbmltcG9ydCB7IHJ1bGVOYW1lc0V4cHJlc3Npb25Gcm9tVGFnTmFtZU1hcCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZW50cmllc1wiO1xyXG5cclxuY29uc3QgcnVsZU5hbWVzRXhwcmVzc2lvbiA9IHJ1bGVOYW1lc0V4cHJlc3Npb25Gcm9tVGFnTmFtZU1hcCh0YWdOYW1lTWFwKTtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJlc2NhcGVkXCI6IFwiXlxcXFxcXFxcW15cXFxcc11cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJydWxlLW5hbWVcIjogYF4oPzoke3J1bGVOYW1lc0V4cHJlc3Npb259KWBcclxuICB9LFxyXG4gIHtcclxuICAgIFwidGFyZ2V0XCI6IGBeKD86d2VifG9kZilgXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBcIl4oPzowfFsxLTldWzAtOV0qKSg/OlxcXFwuWzAtOV0rKT9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJjb2xvdXJcIjogXCJeIyg/OlswLTlhLWZBLUZdezZ9fFswLTlhLWZBLUZdezN9KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuaXRcIjogXCJeKD86ZGVnfCV8cmVtfGVtfHB0fHB4KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm5hbWVcIjogXCJeW19hLXpBLVowLTldK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJyYWNrZXRcIjogXCJeKD86XFxcXHt8XFxcXH0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiYmFja3RpY2tzXCI6IFwiXmBgYFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeKD86LHw6fDt8LXxcXFxcLnxcXFxcKHxcXFxcKXxcXFxcW3xcXFxcXSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl0sIm5hbWVzIjpbInJ1bGVOYW1lc0V4cHJlc3Npb24iLCJydWxlTmFtZXNFeHByZXNzaW9uRnJvbVRhZ05hbWVNYXAiLCJ0YWdOYW1lTWFwIiwiZW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNENBOzs7ZUFBQTs7OzhEQTFDdUI7dUJBRTJCOzs7Ozs7QUFFbEQsSUFBTUEsc0JBQXNCQyxJQUFBQSwwQ0FBaUMsRUFBQ0MsZ0JBQVU7QUFFeEUsSUFBTUMsVUFBVTtJQUNkO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxhQUFhLEFBQUMsT0FBMEIsT0FBcEJILHFCQUFvQjtJQUMxQztJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxVQUFVO0lBQ1o7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtJQUVELFdBQWVHIn0=
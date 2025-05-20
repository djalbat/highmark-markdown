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
        "special": "^(?:,|:|;|-|\\.|\\(|\\)|\\[|\\])"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgdGFnTmFtZU1hcCBmcm9tIFwiLi4vbWFwL3RhZ05hbWVcIjtcclxuXHJcbmltcG9ydCB7IHJ1bGVOYW1lc0V4cHJlc3Npb25Gcm9tVGFnTmFtZU1hcCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZW50cmllc1wiO1xyXG5cclxuY29uc3QgcnVsZU5hbWVzRXhwcmVzc2lvbiA9IHJ1bGVOYW1lc0V4cHJlc3Npb25Gcm9tVGFnTmFtZU1hcCh0YWdOYW1lTWFwKTtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJlc2NhcGVkXCI6IFwiXlxcXFxcXFxcW15cXFxcc11cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJydWxlLW5hbWVcIjogYF4oPzoke3J1bGVOYW1lc0V4cHJlc3Npb259KWBcclxuICB9LFxyXG4gIHtcclxuICAgIFwibnVtYmVyXCI6IFwiXig/OjB8WzEtOV1bMC05XSopKD86XFxcXC5bMC05XSspP1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImNvbG91clwiOiBcIl4jKD86WzAtOWEtZkEtRl17Nn18WzAtOWEtZkEtRl17M30pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5pdFwiOiBcIl4oPzpkZWd8JXxyZW18ZW18cHR8cHgpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOiBcIl5bX2EtekEtWjAtOV0rXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiYnJhY2tldFwiOiBcIl4oPzpcXFxce3xcXFxcfSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXig/Oix8Onw7fC18XFxcXC58XFxcXCh8XFxcXCl8XFxcXFt8XFxcXF0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJydWxlTmFtZXNFeHByZXNzaW9uIiwicnVsZU5hbWVzRXhwcmVzc2lvbkZyb21UYWdOYW1lTWFwIiwidGFnTmFtZU1hcCIsImVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNDQTs7O2VBQUE7Ozs4REFwQ3VCO3VCQUUyQjs7Ozs7O0FBRWxELElBQU1BLHNCQUFzQkMsSUFBQUEsMENBQWlDLEVBQUNDLGdCQUFVO0FBRXhFLElBQU1DLFVBQVU7SUFDZDtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsYUFBYSxBQUFDLE9BQTBCLE9BQXBCSCxxQkFBb0I7SUFDMUM7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtJQUVELFdBQWVHIn0=
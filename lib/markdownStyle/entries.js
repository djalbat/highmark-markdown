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
var _elementMap = /*#__PURE__*/ _interop_require_default(require("../elementMap"));
var _entries = require("../utilities/entries");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ruleNamesExpression = (0, _entries.ruleNamesExpressionFromElementMap)(_elementMap.default);
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
        "unit": "^(?:deg|%)"
    },
    {
        "name": "^[_a-zA-Z0-9]+"
    },
    {
        "bracket": "^(?:\\{|\\})"
    },
    {
        "special": "^(?:,|:|;|-|\\.|\\(|\\)|\\[|\\]|@)"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgZWxlbWVudE1hcCBmcm9tIFwiLi4vZWxlbWVudE1hcFwiO1xyXG5cclxuaW1wb3J0IHsgcnVsZU5hbWVzRXhwcmVzc2lvbkZyb21FbGVtZW50TWFwIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbnRyaWVzXCI7XHJcblxyXG5jb25zdCBydWxlTmFtZXNFeHByZXNzaW9uID0gcnVsZU5hbWVzRXhwcmVzc2lvbkZyb21FbGVtZW50TWFwKGVsZW1lbnRNYXApO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImVzY2FwZWRcIjogXCJeXFxcXFxcXFxbXlxcXFxzXVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInJ1bGUtbmFtZVwiOiBgXig/OiR7cnVsZU5hbWVzRXhwcmVzc2lvbn0pYFxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJudW1iZXJcIjogXCJeKD86MHxbMS05XVswLTldKikoPzpcXFxcLlswLTldKyk/XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY29sb3VyXCI6IFwiXiMoPzpbMC05YS1mQS1GXXs2fXxbMC05YS1mQS1GXXszfSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bml0XCI6IFwiXig/OmRlZ3wlKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm5hbWVcIjogXCJeW19hLXpBLVowLTldK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJyYWNrZXRcIjogXCJeKD86XFxcXHt8XFxcXH0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzosfDp8O3wtfFxcXFwufFxcXFwofFxcXFwpfFxcXFxbfFxcXFxdfEApXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJydWxlTmFtZXNFeHByZXNzaW9uIiwicnVsZU5hbWVzRXhwcmVzc2lvbkZyb21FbGVtZW50TWFwIiwiZWxlbWVudE1hcCIsImVudHJpZXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNDQTs7O2VBQUE7OztpRUFwQ3VCO3VCQUUyQjs7Ozs7O0FBRWxELElBQU1BLHNCQUFzQkMsSUFBQUEsMENBQWlDLEVBQUNDLG1CQUFVO0FBRXhFLElBQU1DLFVBQVU7SUFDZDtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsYUFBYSxBQUFDLE9BQTBCLE9BQXBCSCxxQkFBb0I7SUFDMUM7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtJQUVELFdBQWVHIn0=
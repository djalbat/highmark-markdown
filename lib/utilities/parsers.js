"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get markdownParserFromNothing () {
        return markdownParserFromNothing;
    },
    get markdownStyleParserFromNothing () {
        return markdownStyleParserFromNothing;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../node/markdown"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../markdown/parser"));
var _markdown1 = /*#__PURE__*/ _interop_require_default(require("../map/node/markdown"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../node/markdownStyle"));
var _parser1 = /*#__PURE__*/ _interop_require_default(require("../markdownStyle/parser"));
var _markdownStyle1 = /*#__PURE__*/ _interop_require_default(require("../map/node/markdownStyle"));
var _parser2 = require("../utilities/parser");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function markdownParserFromNothing() {
    var markdownParser = _parser.default.fromNothing(), parser = markdownParser, nodeMap = _markdown1.default, DefaultNonTerminalNode = _markdown.default; ///
    (0, _parser2.setNonTerminalNodes)(parser, nodeMap, DefaultNonTerminalNode);
    return markdownParser;
}
function markdownStyleParserFromNothing() {
    var markdownStyleParser = _parser1.default.fromNothing(), parser = markdownStyleParser, nodeMap = _markdownStyle1.default, DefaultNonTerminalNode = _markdownStyle.default; ///
    (0, _parser2.setNonTerminalNodes)(parser, nodeMap, DefaultNonTerminalNode);
    return markdownStyleParser;
}
var _default = {
    markdownParserFromNothing: markdownParserFromNothing,
    markdownStyleParserFromNothing: markdownStyleParserFromNothing
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93blwiXG5pbXBvcnQgTWFya2Rvd25QYXJzZXIgZnJvbSBcIi4uL21hcmtkb3duL3BhcnNlclwiO1xuaW1wb3J0IG1hcmtkb3duTm9kZU1hcCBmcm9tIFwiLi4vbWFwL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBNYXJrZG93blN0eWxlTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93blN0eWxlXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZVBhcnNlciBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9wYXJzZXJcIjtcbmltcG9ydCBtYXJrZG93blN0eWxlTm9kZU1hcCBmcm9tIFwiLi4vbWFwL25vZGUvbWFya2Rvd25TdHlsZVwiO1xuXG5pbXBvcnQgeyBzZXROb25UZXJtaW5hbE5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duUGFyc2VyRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcGFyc2VyID0gbWFya2Rvd25QYXJzZXIsICAvLy9cbiAgICAgICAgbm9kZU1hcCA9IG1hcmtkb3duTm9kZU1hcCwgIC8vL1xuICAgICAgICBEZWZhdWx0Tm9uVGVybWluYWxOb2RlID0gTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgc2V0Tm9uVGVybWluYWxOb2RlcyhwYXJzZXIsIG5vZGVNYXAsIERlZmF1bHROb25UZXJtaW5hbE5vZGUpO1xuXG4gIHJldHVybiBtYXJrZG93blBhcnNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duU3R5bGVQYXJzZXJGcm9tTm90aGluZygpIHtcbiAgY29uc3QgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcGFyc2VyID0gbWFya2Rvd25TdHlsZVBhcnNlciwgIC8vL1xuICAgICAgICBub2RlTWFwID0gbWFya2Rvd25TdHlsZU5vZGVNYXAsICAvLy9cbiAgICAgICAgRGVmYXVsdE5vblRlcm1pbmFsTm9kZSA9IE1hcmtkb3duU3R5bGVOb2RlOyAgLy8vXG5cbiAgc2V0Tm9uVGVybWluYWxOb2RlcyhwYXJzZXIsIG5vZGVNYXAsIERlZmF1bHROb25UZXJtaW5hbE5vZGUpO1xuXG4gIHJldHVybiBtYXJrZG93blN0eWxlUGFyc2VyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1hcmtkb3duUGFyc2VyRnJvbU5vdGhpbmcsXG4gIG1hcmtkb3duU3R5bGVQYXJzZXJGcm9tTm90aGluZ1xufTtcbiJdLCJuYW1lcyI6WyJtYXJrZG93blBhcnNlckZyb21Ob3RoaW5nIiwibWFya2Rvd25TdHlsZVBhcnNlckZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsImZyb21Ob3RoaW5nIiwicGFyc2VyIiwibm9kZU1hcCIsIm1hcmtkb3duTm9kZU1hcCIsIkRlZmF1bHROb25UZXJtaW5hbE5vZGUiLCJNYXJrZG93bk5vZGUiLCJzZXROb25UZXJtaW5hbE5vZGVzIiwibWFya2Rvd25TdHlsZVBhcnNlciIsIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJtYXJrZG93blN0eWxlTm9kZU1hcCIsIk1hcmtkb3duU3R5bGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFpQ0E7ZUFBQTs7UUF0QmdCQTtlQUFBQTs7UUFXQUM7ZUFBQUE7OzsrREFwQlM7NkRBQ0U7Z0VBQ0M7b0VBQ0U7OERBQ0U7cUVBQ0M7dUJBRUc7Ozs7OztBQUU3QixTQUFTRDtJQUNkLElBQU1FLGlCQUFpQkMsZUFBYyxDQUFDQyxXQUFXLElBQzNDQyxTQUFTSCxnQkFDVEksVUFBVUMsa0JBQWUsRUFDekJDLHlCQUF5QkMsaUJBQVksRUFBRyxHQUFHO0lBRWpEQyxJQUFBQSw0QkFBbUIsRUFBQ0wsUUFBUUMsU0FBU0U7SUFFckMsT0FBT047QUFDVDtBQUVPLFNBQVNEO0lBQ2QsSUFBTVUsc0JBQXNCQyxnQkFBbUIsQ0FBQ1IsV0FBVyxJQUNyREMsU0FBU00scUJBQ1RMLFVBQVVPLHVCQUFvQixFQUM5QkwseUJBQXlCTSxzQkFBaUIsRUFBRyxHQUFHO0lBRXRESixJQUFBQSw0QkFBbUIsRUFBQ0wsUUFBUUMsU0FBU0U7SUFFckMsT0FBT0c7QUFDVDtJQUVBLFdBQWU7SUFDYlgsMkJBQUFBO0lBQ0FDLGdDQUFBQTtBQUNGIn0=
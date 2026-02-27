"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownStyleParser;
    }
});
const _occamparsers = require("occam-parsers");
const _bnf = /*#__PURE__*/ _interop_require_default(require("./bnf"));
const _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../node/markdownStyle"));
const _markdownStyle1 = /*#__PURE__*/ _interop_require_default(require("../map/nonTerminalNode/markdownStyle"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const NonTerminalNodeMap = _markdownStyle1.default, defaultNonTerminalNode = _markdownStyle.default; ///
class MarkdownStyleParser extends _occamparsers.CommonParser {
    static bnf = _bnf.default;
    static NonTerminalNodeMap = NonTerminalNodeMap;
    static defaultNonTerminalNode = defaultNonTerminalNode;
    static fromBNF(bnf) {
        return _occamparsers.CommonParser.fromBNF(MarkdownStyleParser, bnf);
    }
    static fromRules(rules) {
        return _occamparsers.CommonParser.fromRules(MarkdownStyleParser, rules);
    }
    static fromNothing() {
        return _occamparsers.CommonParser.fromNothing(MarkdownStyleParser);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlTk9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93blN0eWxlXCI7XG5pbXBvcnQgbWFya2Rvd25TdHlsZU5vblRlcm1pbmFsTm9kZU1hcCBmcm9tIFwiLi4vbWFwL25vblRlcm1pbmFsTm9kZS9tYXJrZG93blN0eWxlXCI7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZU1hcCA9IG1hcmtkb3duU3R5bGVOb25UZXJtaW5hbE5vZGVNYXAsICAvLy9cbiAgICAgIGRlZmF1bHROb25UZXJtaW5hbE5vZGUgPSBNYXJrZG93blN0eWxlTk9kZTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blN0eWxlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgTm9uVGVybWluYWxOb2RlTWFwID0gTm9uVGVybWluYWxOb2RlTWFwO1xuXG4gIHN0YXRpYyBkZWZhdWx0Tm9uVGVybWluYWxOb2RlID0gZGVmYXVsdE5vblRlcm1pbmFsTm9kZTtcblxuICBzdGF0aWMgZnJvbUJORihibmYpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tQk5GKE1hcmtkb3duU3R5bGVQYXJzZXIsIGJuZik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKE1hcmtkb3duU3R5bGVQYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tTm90aGluZyhNYXJrZG93blN0eWxlUGFyc2VyKTsgfVxufVxuIl0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJOb25UZXJtaW5hbE5vZGVNYXAiLCJtYXJrZG93blN0eWxlTm9uVGVybWluYWxOb2RlTWFwIiwiZGVmYXVsdE5vblRlcm1pbmFsTm9kZSIsIk1hcmtkb3duU3R5bGVOT2RlIiwiQ29tbW9uUGFyc2VyIiwiYm5mIiwiZnJvbUJORiIsImZyb21SdWxlcyIsInJ1bGVzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBcUJBOzs7OEJBVFE7NERBRWI7c0VBQ2M7dUVBQ2M7Ozs7OztBQUU1QyxNQUFNQyxxQkFBcUJDLHVCQUErQixFQUNwREMseUJBQXlCQyxzQkFBaUIsRUFBRyxHQUFHO0FBRXZDLE1BQU1KLDRCQUE0QkssMEJBQVk7SUFDM0QsT0FBT0MsTUFBTUEsWUFBRyxDQUFDO0lBRWpCLE9BQU9MLHFCQUFxQkEsbUJBQW1CO0lBRS9DLE9BQU9FLHlCQUF5QkEsdUJBQXVCO0lBRXZELE9BQU9JLFFBQVFELEdBQUcsRUFBRTtRQUFFLE9BQU9ELDBCQUFZLENBQUNFLE9BQU8sQ0FBQ1AscUJBQXFCTTtJQUFNO0lBRTdFLE9BQU9FLFVBQVVDLEtBQUssRUFBRTtRQUFFLE9BQU9KLDBCQUFZLENBQUNHLFNBQVMsQ0FBQ1IscUJBQXFCUztJQUFRO0lBRXJGLE9BQU9DLGNBQWM7UUFBRSxPQUFPTCwwQkFBWSxDQUFDSyxXQUFXLENBQUNWO0lBQXNCO0FBQy9FIn0=
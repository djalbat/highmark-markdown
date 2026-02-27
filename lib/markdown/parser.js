"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownParser;
    }
});
const _occamparsers = require("occam-parsers");
const _bnf = /*#__PURE__*/ _interop_require_default(require("./bnf"));
const _markdown = /*#__PURE__*/ _interop_require_default(require("../node/markdown"));
const _markdown1 = /*#__PURE__*/ _interop_require_default(require("../map/nonTerminalNode/markdown"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const NonTerminalNodeMap = _markdown1.default, defaultNonTerminalNode = _markdown.default; ///
class MarkdownParser extends _occamparsers.CommonParser {
    static bnf = _bnf.default;
    static NonTerminalNodeMap = NonTerminalNodeMap;
    static defaultNonTerminalNode = defaultNonTerminalNode;
    static fromBNF(bnf) {
        return _occamparsers.CommonParser.fromBNF(MarkdownParser, bnf);
    }
    static fromRules(rules) {
        return _occamparsers.CommonParser.fromRules(MarkdownParser, rules);
    }
    static fromNothing() {
        return _occamparsers.CommonParser.fromNothing(MarkdownParser);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgTWFya2Rvd25OT2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgbWFya2Rvd25Ob25UZXJtaW5hbE5vZGVNYXAgZnJvbSBcIi4uL21hcC9ub25UZXJtaW5hbE5vZGUvbWFya2Rvd25cIjtcblxuY29uc3QgTm9uVGVybWluYWxOb2RlTWFwID0gbWFya2Rvd25Ob25UZXJtaW5hbE5vZGVNYXAsICAvLy9cbiAgICAgIGRlZmF1bHROb25UZXJtaW5hbE5vZGUgPSBNYXJrZG93bk5PZGU7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25QYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBOb25UZXJtaW5hbE5vZGVNYXAgPSBOb25UZXJtaW5hbE5vZGVNYXA7XG5cbiAgc3RhdGljIGRlZmF1bHROb25UZXJtaW5hbE5vZGUgPSBkZWZhdWx0Tm9uVGVybWluYWxOb2RlO1xuXG4gIHN0YXRpYyBmcm9tQk5GKGJuZikgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21CTkYoTWFya2Rvd25QYXJzZXIsIGJuZik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKE1hcmtkb3duUGFyc2VyLCBydWxlcyk7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbU5vdGhpbmcoTWFya2Rvd25QYXJzZXIpOyB9XG59XG4iXSwibmFtZXMiOlsiTWFya2Rvd25QYXJzZXIiLCJOb25UZXJtaW5hbE5vZGVNYXAiLCJtYXJrZG93bk5vblRlcm1pbmFsTm9kZU1hcCIsImRlZmF1bHROb25UZXJtaW5hbE5vZGUiLCJNYXJrZG93bk5PZGUiLCJDb21tb25QYXJzZXIiLCJibmYiLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFxQkE7Ozs4QkFUUTs0REFFYjtpRUFDUztrRUFDYzs7Ozs7O0FBRXZDLE1BQU1DLHFCQUFxQkMsa0JBQTBCLEVBQy9DQyx5QkFBeUJDLGlCQUFZLEVBQUcsR0FBRztBQUVsQyxNQUFNSix1QkFBdUJLLDBCQUFZO0lBQ3RELE9BQU9DLE1BQU1BLFlBQUcsQ0FBQztJQUVqQixPQUFPTCxxQkFBcUJBLG1CQUFtQjtJQUUvQyxPQUFPRSx5QkFBeUJBLHVCQUF1QjtJQUV2RCxPQUFPSSxRQUFRRCxHQUFHLEVBQUU7UUFBRSxPQUFPRCwwQkFBWSxDQUFDRSxPQUFPLENBQUNQLGdCQUFnQk07SUFBTTtJQUV4RSxPQUFPRSxVQUFVQyxLQUFLLEVBQUU7UUFBRSxPQUFPSiwwQkFBWSxDQUFDRyxTQUFTLENBQUNSLGdCQUFnQlM7SUFBUTtJQUVoRixPQUFPQyxjQUFjO1FBQUUsT0FBT0wsMEJBQVksQ0FBQ0ssV0FBVyxDQUFDVjtJQUFpQjtBQUMxRSJ9
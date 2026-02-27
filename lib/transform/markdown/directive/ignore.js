"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IgnoreDirectiveMarkdownTransform;
    }
});
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../../transform/markdown"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class IgnoreDirectiveMarkdownTransform extends _markdown.default {
    static fromDivisionMarkdownNode(divisionMarkdownNode) {
        const node = divisionMarkdownNode, tokens = null, ignoredDirectiveMarkdownTransform = _markdown.default.fromNodeAndTokens(IgnoreDirectiveMarkdownTransform, node, tokens);
        return ignoredDirectiveMarkdownTransform;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vbWFya2Rvd24vZGlyZWN0aXZlL2lnbm9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duVHJhbnNmb3JtIGZyb20gXCIuLi8uLi8uLi90cmFuc2Zvcm0vbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWdub3JlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0gZXh0ZW5kcyBNYXJrZG93blRyYW5zZm9ybSB7XG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIGlnbm9yZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSA9IE1hcmtkb3duVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKElnbm9yZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIklnbm9yZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIiwiTWFya2Rvd25UcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsIm5vZGUiLCJ0b2tlbnMiLCJpZ25vcmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztpRUFGUzs7Ozs7O0FBRWYsTUFBTUEseUNBQXlDQyxpQkFBaUI7SUFDN0UsT0FBT0MseUJBQXlCQyxvQkFBb0IsRUFBRTtRQUNwRCxNQUFNQyxPQUFPRCxzQkFDUEUsU0FBUyxNQUNUQyxvQ0FBb0NMLGlCQUFpQixDQUFDTSxpQkFBaUIsQ0FBQ1Asa0NBQWtDSSxNQUFNQztRQUV0SCxPQUFPQztJQUNUO0FBQ0YifQ==
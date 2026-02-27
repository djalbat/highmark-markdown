"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubdivisionMarkdownTransform;
    }
});
const _markdown = /*#__PURE__*/ _interop_require_default(require("../../transform/markdown"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SubdivisionMarkdownTransform extends _markdown.default {
    static fromSubDivisionMarkdownNode(subDivisionMarkdownNode) {
        const node = subDivisionMarkdownNode, tokens = null, embedDirectiveMarkdownTransform = _markdown.default.fromNodeAndTokens(SubdivisionMarkdownTransform, node, tokens);
        return embedDirectiveMarkdownTransform;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vbWFya2Rvd24vc3ViRGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93blRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YmRpdmlzaW9uTWFya2Rvd25UcmFuc2Zvcm0gZXh0ZW5kcyBNYXJrZG93blRyYW5zZm9ybSB7XG4gIHN0YXRpYyBmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0gPSBNYXJrZG93blRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhTdWJkaXZpc2lvbk1hcmtkb3duVHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJkaXZpc2lvbk1hcmtkb3duVHJhbnNmb3JtIiwiTWFya2Rvd25UcmFuc2Zvcm0iLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsIm5vZGUiLCJ0b2tlbnMiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7aUVBRlM7Ozs7OztBQUVmLE1BQU1BLHFDQUFxQ0MsaUJBQWlCO0lBQ3pFLE9BQU9DLDRCQUE0QkMsdUJBQXVCLEVBQUU7UUFDMUQsTUFBTUMsT0FBT0QseUJBQ1BFLFNBQVMsTUFDVEMsa0NBQWtDTCxpQkFBaUIsQ0FBQ00saUJBQWlCLENBQUNQLDhCQUE4QkksTUFBTUM7UUFFaEgsT0FBT0M7SUFDVDtBQUNGIn0=
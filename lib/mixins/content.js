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
var _content = require("../utilities/content");
function content(context) {
    var trimmed = true, markdownNode = this, markdownNodes = [
        markdownNode
    ], _$content = (0, _content.contentFromMarkdownNodes)(markdownNodes, context, trimmed);
    return _$content;
}
var contentMixins = {
    content: content
};
var _default = contentMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21NYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmZ1bmN0aW9uIGNvbnRlbnQoY29udGV4dCkge1xuICBjb25zdCB0cmltbWVkID0gdHJ1ZSxcbiAgICAgICAgbWFya2Rvd25Ob2RlID0gdGhpcywgLy8vXG4gICAgICAgIG1hcmtkb3duTm9kZXMgPSBbXG4gICAgICAgICAgbWFya2Rvd25Ob2RlXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbU1hcmtkb3duTm9kZXMobWFya2Rvd25Ob2RlcywgY29udGV4dCwgdHJpbW1lZCk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmNvbnN0IGNvbnRlbnRNaXhpbnMgPSB7XG4gIGNvbnRlbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnRNaXhpbnM7XG4iXSwibmFtZXMiOlsiY29udGVudCIsImNvbnRleHQiLCJ0cmltbWVkIiwibWFya2Rvd25Ob2RlIiwibWFya2Rvd25Ob2RlcyIsImNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRNaXhpbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1CQTs7O2VBQUE7Ozt1QkFqQnlDO0FBRXpDLFNBQVNBLFFBQVFDLE9BQU87SUFDdEIsSUFBTUMsVUFBVSxNQUNWQyxlQUFlLElBQUksRUFDbkJDLGdCQUFnQjtRQUNkRDtLQUNELEVBQ0RILFlBQVVLLElBQUFBLGlDQUF3QixFQUFDRCxlQUFlSCxTQUFTQztJQUVqRSxPQUFPRjtBQUNUO0FBRUEsSUFBTU0sZ0JBQWdCO0lBQ3BCTixTQUFBQTtBQUNGO0lBRUEsV0FBZU0ifQ==
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
    var trimmed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var markdownNode = this, markdownNodes = [
        markdownNode
    ], _$content = (0, _content.contentFromMarkdownNodes)(markdownNodes, context, trimmed);
    return _$content;
}
var contentMixins = {
    content: content
};
var _default = contentMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21NYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmZ1bmN0aW9uIGNvbnRlbnQoY29udGV4dCwgdHJpbW1lZCA9IHRydWUpIHtcbiAgY29uc3QgbWFya2Rvd25Ob2RlID0gdGhpcywgLy8vXG4gICAgICAgIG1hcmtkb3duTm9kZXMgPSBbXG4gICAgICAgICAgbWFya2Rvd25Ob2RlXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbU1hcmtkb3duTm9kZXMobWFya2Rvd25Ob2RlcywgY29udGV4dCwgdHJpbW1lZCk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmNvbnN0IGNvbnRlbnRNaXhpbnMgPSB7XG4gIGNvbnRlbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnRNaXhpbnM7XG4iXSwibmFtZXMiOlsiY29udGVudCIsImNvbnRleHQiLCJ0cmltbWVkIiwibWFya2Rvd25Ob2RlIiwibWFya2Rvd25Ob2RlcyIsImNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRNaXhpbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUFBOzs7dUJBaEJ5QztBQUV6QyxTQUFTQSxRQUFRQyxPQUFPO1FBQUVDLFVBQUFBLGlFQUFVO0lBQ2xDLElBQU1DLGVBQWUsSUFBSSxFQUNuQkMsZ0JBQWdCO1FBQ2REO0tBQ0QsRUFDREgsWUFBVUssSUFBQUEsaUNBQXdCLEVBQUNELGVBQWVILFNBQVNDO0lBRWpFLE9BQU9GO0FBQ1Q7QUFFQSxJQUFNTSxnQkFBZ0I7SUFDcEJOLFNBQUFBO0FBQ0Y7SUFFQSxXQUFlTSJ9
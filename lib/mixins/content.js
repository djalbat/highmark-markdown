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
    var leftTrimmed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, rightTrimmed = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    var markdownNode = this, markdownNodes = [
        markdownNode
    ], _$content = (0, _content.contentFromMarkdownNodes)(markdownNodes, context, leftTrimmed, rightTrimmed);
    return _$content;
}
var contentMixins = {
    content: content
};
var _default = contentMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21NYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmZ1bmN0aW9uIGNvbnRlbnQoY29udGV4dCwgbGVmdFRyaW1tZWQgPSB0cnVlLCByaWdodFRyaW1tZWQgPSB0cnVlKSB7XG4gIGNvbnN0IG1hcmtkb3duTm9kZSA9IHRoaXMsIC8vL1xuICAgICAgICBtYXJrZG93bk5vZGVzID0gW1xuICAgICAgICAgIG1hcmtkb3duTm9kZVxuICAgICAgICBdLFxuICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21NYXJrZG93bk5vZGVzKG1hcmtkb3duTm9kZXMsIGNvbnRleHQsIGxlZnRUcmltbWVkLCByaWdodFRyaW1tZWQpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5jb25zdCBjb250ZW50TWl4aW5zID0ge1xuICBjb250ZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50TWl4aW5zO1xuIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJjb250ZXh0IiwibGVmdFRyaW1tZWQiLCJyaWdodFRyaW1tZWQiLCJtYXJrZG93bk5vZGUiLCJtYXJrZG93bk5vZGVzIiwiY29udGVudEZyb21NYXJrZG93bk5vZGVzIiwiY29udGVudE1peGlucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQUE7Ozt1QkFoQnlDO0FBRXpDLFNBQVNBLFFBQVFDLE9BQU87UUFBRUMsY0FBQUEsaUVBQWMsTUFBTUMsZUFBQUEsaUVBQWU7SUFDM0QsSUFBTUMsZUFBZSxJQUFJLEVBQ25CQyxnQkFBZ0I7UUFDZEQ7S0FDRCxFQUNESixZQUFVTSxJQUFBQSxpQ0FBd0IsRUFBQ0QsZUFBZUosU0FBU0MsYUFBYUM7SUFFOUUsT0FBT0g7QUFDVDtBQUVBLElBQU1PLGdCQUFnQjtJQUNwQlAsU0FBQUE7QUFDRjtJQUVBLFdBQWVPIn0=
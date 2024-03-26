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
    var markdownNode = this, markdownNodes = [
        markdownNode
    ], _$content = (0, _content.contentFromMarkdownNodes)(markdownNodes, context);
    return _$content;
}
var contentMixins = {
    content: content
};
var _default = contentMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21NYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmZ1bmN0aW9uIGNvbnRlbnQoY29udGV4dCkge1xuICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgbWFya2Rvd25Ob2RlcyA9IFtcbiAgICAgICAgICBtYXJrZG93bk5vZGVcbiAgICAgICAgXSxcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuY29uc3QgY29udGVudE1peGlucyA9IHtcbiAgY29udGVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGVudE1peGlucztcbiJdLCJuYW1lcyI6WyJjb250ZW50IiwiY29udGV4dCIsIm1hcmtkb3duTm9kZSIsIm1hcmtkb3duTm9kZXMiLCJjb250ZW50RnJvbU1hcmtkb3duTm9kZXMiLCJjb250ZW50TWl4aW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUFBOzs7dUJBaEJ5QztBQUV6QyxTQUFTQSxRQUFRQyxPQUFPO0lBQ3RCLElBQU1DLGVBQWUsSUFBSSxFQUNuQkMsZ0JBQWdCO1FBQ2REO0tBQ0QsRUFDREYsWUFBVUksSUFBQUEsaUNBQXdCLEVBQUNELGVBQWVGO0lBRXhELE9BQU9EO0FBQ1Q7QUFFQSxJQUFNSyxnQkFBZ0I7SUFDcEJMLFNBQUFBO0FBQ0Y7SUFFQSxXQUFlSyJ9
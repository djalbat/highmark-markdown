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
function getContent(context) {
    var markdownNode = this, markdownNodes = [
        markdownNode
    ], content = (0, _content.contentFromMarkdownNodes)(markdownNodes, context);
    return content;
}
var contentMixins = {
    getContent: getContent
};
var _default = contentMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21NYXJrZG93bk5vZGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmZ1bmN0aW9uIGdldENvbnRlbnQoY29udGV4dCkge1xuICBjb25zdCBtYXJrZG93bk5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgbWFya2Rvd25Ob2RlcyA9IFtcbiAgICAgICAgICBtYXJrZG93bk5vZGVcbiAgICAgICAgXSxcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuY29uc3QgY29udGVudE1peGlucyA9IHtcbiAgZ2V0Q29udGVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGVudE1peGlucztcbiJdLCJuYW1lcyI6WyJnZXRDb250ZW50IiwiY29udGV4dCIsIm1hcmtkb3duTm9kZSIsIm1hcmtkb3duTm9kZXMiLCJjb250ZW50IiwiY29udGVudEZyb21NYXJrZG93bk5vZGVzIiwiY29udGVudE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7O3VCQWhCeUM7QUFFekMsU0FBU0EsV0FBV0MsT0FBTztJQUN6QixJQUFNQyxlQUFlLElBQUksRUFDbkJDLGdCQUFnQjtRQUNkRDtLQUNELEVBQ0RFLFVBQVVDLElBQUFBLGlDQUF3QixFQUFDRixlQUFlRjtJQUV4RCxPQUFPRztBQUNUO0FBRUEsSUFBTUUsZ0JBQWdCO0lBQ3BCTixZQUFBQTtBQUNGO0lBRUEsV0FBZU0ifQ==
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "postprocess", {
    enumerable: true,
    get: function() {
        return postprocess;
    }
});
function postprocess(divisionMarkdownNode, context) {
    var divisionMarkdownNodes = [
        divisionMarkdownNode
    ];
    Object.assign(context, {
        divisionMarkdownNodes: divisionMarkdownNodes
    });
    divisionMarkdownNode.resolveIncludes(context);
    delete context.divisionMarkdownNodes;
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        divisionMarkdownNode.resolveEmbeddings(context);
    });
    var _context_linesPerPage = context.linesPerPage, linesPerPage = _context_linesPerPage === void 0 ? null : _context_linesPerPage;
    if (linesPerPage !== null) {
        var pageDivisionMarkdownNodes = [];
        Object.assign(context, {
            pageDivisionMarkdownNodes: pageDivisionMarkdownNodes
        });
        divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
            divisionMarkdownNode.paginate(context);
        });
        delete context.pageDivisionMarkdownNodes;
        divisionMarkdownNodes = pageDivisionMarkdownNodes; ///
    }
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        divisionMarkdownNode.createFootnotes(context);
    });
    divisionMarkdownNodes.some(function(divisionMarkdownNode) {
        var contentsCreated = divisionMarkdownNode.createContents(context);
        if (contentsCreated) {
            return true;
        }
    });
    return divisionMarkdownNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0cHJvY2VzcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICBsZXQgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gW1xuICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlXG4gIF07XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gIH0pO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVJbmNsdWRlcyhjb250ZXh0KTtcblxuICBkZWxldGUgY29udGV4dC5kaXZpc2lvbk1hcmtkb3duTm9kZXM7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCk7XG4gIH0pO1xuXG4gIGNvbnN0IHsgbGluZXNQZXJQYWdlID0gbnVsbCB9ID0gY29udGV4dDtcblxuICBpZiAobGluZXNQZXJQYWdlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICBwYWdlRGl2aXNpb25NYXJrZG93bk5vZGVzXG4gICAgfSk7XG5cbiAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnBhZ2luYXRlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlIGNvbnRleHQucGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlcztcblxuICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZXM7ICAvLy9cbiAgfVxuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZUZvb3Rub3Rlcyhjb250ZXh0KTtcbiAgfSk7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgY29udGVudHNDcmVhdGVkID0gZGl2aXNpb25NYXJrZG93bk5vZGUuY3JlYXRlQ29udGVudHMoY29udGV4dCk7XG5cbiAgICBpZiAoY29udGVudHNDcmVhdGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZXM7XG59XG4iXSwibmFtZXMiOlsicG9zdHByb2Nlc3MiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJyZXNvbHZlSW5jbHVkZXMiLCJmb3JFYWNoIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJsaW5lc1BlclBhZ2UiLCJwYWdlRGl2aXNpb25NYXJrZG93bk5vZGVzIiwicGFnaW5hdGUiLCJjcmVhdGVGb290bm90ZXMiLCJzb21lIiwiY29udGVudHNDcmVhdGVkIiwiY3JlYXRlQ29udGVudHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVnQkE7OztlQUFBQTs7O0FBQVQsU0FBU0EsWUFBWUMsb0JBQW9CLEVBQUVDLE9BQU87SUFDdkQsSUFBSUMsd0JBQXdCO1FBQzFCRjtLQUNEO0lBRURHLE9BQU9DLE1BQU0sQ0FBQ0gsU0FBUztRQUNyQkMsdUJBQUFBO0lBQ0Y7SUFFQUYscUJBQXFCSyxlQUFlLENBQUNKO0lBRXJDLE9BQU9BLFFBQVFDLHFCQUFxQjtJQUVwQ0Esc0JBQXNCSSxPQUFPLENBQUMsU0FBQ047UUFDN0JBLHFCQUFxQk8saUJBQWlCLENBQUNOO0lBQ3pDO0lBRUEsNEJBQWdDQSxRQUF4Qk8sY0FBQUEsa0RBQWU7SUFFdkIsSUFBSUEsaUJBQWlCLE1BQU07UUFDekIsSUFBTUMsNEJBQTRCLEVBQUU7UUFFcENOLE9BQU9DLE1BQU0sQ0FBQ0gsU0FBUztZQUNyQlEsMkJBQUFBO1FBQ0Y7UUFFQVAsc0JBQXNCSSxPQUFPLENBQUMsU0FBQ047WUFDN0JBLHFCQUFxQlUsUUFBUSxDQUFDVDtRQUNoQztRQUVBLE9BQU9BLFFBQVFRLHlCQUF5QjtRQUV4Q1Asd0JBQXdCTywyQkFBNEIsR0FBRztJQUN6RDtJQUVBUCxzQkFBc0JJLE9BQU8sQ0FBQyxTQUFDTjtRQUM3QkEscUJBQXFCVyxlQUFlLENBQUNWO0lBQ3ZDO0lBRUFDLHNCQUFzQlUsSUFBSSxDQUFDLFNBQUNaO1FBQzFCLElBQU1hLGtCQUFrQmIscUJBQXFCYyxjQUFjLENBQUNiO1FBRTVELElBQUlZLGlCQUFpQjtZQUNuQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9YO0FBQ1QifQ==
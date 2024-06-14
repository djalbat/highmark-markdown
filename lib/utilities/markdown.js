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
        divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
            divisionMarkdownNode.paginate(pageDivisionMarkdownNodes, context);
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0cHJvY2VzcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICBsZXQgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gW1xuICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlXG4gIF07XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gIH0pO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVJbmNsdWRlcyhjb250ZXh0KTtcblxuICBkZWxldGUgY29udGV4dC5kaXZpc2lvbk1hcmtkb3duTm9kZXM7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCk7XG4gIH0pO1xuXG4gIGNvbnN0IHsgbGluZXNQZXJQYWdlID0gbnVsbCB9ID0gY29udGV4dDtcblxuICBpZiAobGluZXNQZXJQYWdlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcGFnZURpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IFtdO1xuXG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5wYWdpbmF0ZShwYWdlRGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHBhZ2VEaXZpc2lvbk1hcmtkb3duTm9kZXM7ICAvLy9cbiAgfVxuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZUZvb3Rub3Rlcyhjb250ZXh0KTtcbiAgfSk7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgY29udGVudHNDcmVhdGVkID0gZGl2aXNpb25NYXJrZG93bk5vZGUuY3JlYXRlQ29udGVudHMoY29udGV4dCk7XG5cbiAgICBpZiAoY29udGVudHNDcmVhdGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZXM7XG59XG4iXSwibmFtZXMiOlsicG9zdHByb2Nlc3MiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJyZXNvbHZlSW5jbHVkZXMiLCJmb3JFYWNoIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJsaW5lc1BlclBhZ2UiLCJwYWdlRGl2aXNpb25NYXJrZG93bk5vZGVzIiwicGFnaW5hdGUiLCJjcmVhdGVGb290bm90ZXMiLCJzb21lIiwiY29udGVudHNDcmVhdGVkIiwiY3JlYXRlQ29udGVudHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWdCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSxZQUFZQyxvQkFBb0IsRUFBRUMsT0FBTztJQUN2RCxJQUFJQyx3QkFBd0I7UUFDMUJGO0tBQ0Q7SUFFREcsT0FBT0MsTUFBTSxDQUFDSCxTQUFTO1FBQ3JCQyx1QkFBQUE7SUFDRjtJQUVBRixxQkFBcUJLLGVBQWUsQ0FBQ0o7SUFFckMsT0FBT0EsUUFBUUMscUJBQXFCO0lBRXBDQSxzQkFBc0JJLE9BQU8sQ0FBQyxTQUFDTjtRQUM3QkEscUJBQXFCTyxpQkFBaUIsQ0FBQ047SUFDekM7SUFFQSw0QkFBZ0NBLFFBQXhCTyxjQUFBQSxrREFBZTtJQUV2QixJQUFJQSxpQkFBaUIsTUFBTTtRQUN6QixJQUFNQyw0QkFBNEIsRUFBRTtRQUVwQ1Asc0JBQXNCSSxPQUFPLENBQUMsU0FBQ047WUFDN0JBLHFCQUFxQlUsUUFBUSxDQUFDRCwyQkFBMkJSO1FBQzNEO1FBRUFDLHdCQUF3Qk8sMkJBQTRCLEdBQUc7SUFDekQ7SUFFQVAsc0JBQXNCSSxPQUFPLENBQUMsU0FBQ047UUFDN0JBLHFCQUFxQlcsZUFBZSxDQUFDVjtJQUN2QztJQUVBQyxzQkFBc0JVLElBQUksQ0FBQyxTQUFDWjtRQUMxQixJQUFNYSxrQkFBa0JiLHFCQUFxQmMsY0FBYyxDQUFDYjtRQUU1RCxJQUFJWSxpQkFBaUI7WUFDbkIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPWDtBQUNUIn0=
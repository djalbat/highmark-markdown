"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "preprocess", {
    enumerable: true,
    get: function() {
        return preprocess;
    }
});
function preprocess(divisionMarkdownNode, context) {
    var pageNumber = 1, divisionMarkdownNodes = [
        divisionMarkdownNode
    ];
    Object.assign(context, {
        pageNumber: pageNumber,
        divisionMarkdownNodes: divisionMarkdownNodes
    });
    divisionMarkdownNode.resolveIncludes(context);
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        divisionMarkdownNode.resolveEmbeddings(context);
    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwcm9jZXNzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhZ2VOdW1iZXIgPSAxLFxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBbXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVcbiAgICAgICAgXTtcblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICBwYWdlTnVtYmVyLFxuICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlc1xuICB9KTtcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXMoY29udGV4dCk7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCk7XG4gIH0pO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZUZvb3Rub3Rlcyhjb250ZXh0KTtcbiAgfSk7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgY29udGVudHNDcmVhdGVkID0gZGl2aXNpb25NYXJrZG93bk5vZGUuY3JlYXRlQ29udGVudHMoY29udGV4dCk7XG5cbiAgICBpZiAoY29udGVudHNDcmVhdGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZXM7XG59XG4iXSwibmFtZXMiOlsicHJlcHJvY2VzcyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInBhZ2VOdW1iZXIiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJyZXNvbHZlSW5jbHVkZXMiLCJmb3JFYWNoIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJjcmVhdGVGb290bm90ZXMiLCJzb21lIiwiY29udGVudHNDcmVhdGVkIiwiY3JlYXRlQ29udGVudHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVnQkE7OztlQUFBQTs7O0FBQVQsU0FBU0EsV0FBV0Msb0JBQW9CLEVBQUVDLE9BQU87SUFDdEQsSUFBTUMsYUFBYSxHQUNiQyx3QkFBd0I7UUFDdEJIO0tBQ0Q7SUFFUEksT0FBT0MsTUFBTSxDQUFDSixTQUFTO1FBQ3JCQyxZQUFBQTtRQUNBQyx1QkFBQUE7SUFDRjtJQUVBSCxxQkFBcUJNLGVBQWUsQ0FBQ0w7SUFFckNFLHNCQUFzQkksT0FBTyxDQUFDLFNBQUNQO1FBQzdCQSxxQkFBcUJRLGlCQUFpQixDQUFDUDtJQUN6QztJQUVBRSxzQkFBc0JJLE9BQU8sQ0FBQyxTQUFDUDtRQUM3QkEscUJBQXFCUyxlQUFlLENBQUNSO0lBQ3ZDO0lBRUFFLHNCQUFzQk8sSUFBSSxDQUFDLFNBQUNWO1FBQzFCLElBQU1XLGtCQUFrQlgscUJBQXFCWSxjQUFjLENBQUNYO1FBRTVELElBQUlVLGlCQUFpQjtZQUNuQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9SO0FBQ1QifQ==
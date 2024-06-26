"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    divisionMarkdownNodesFromMarkdownNodes: function() {
        return divisionMarkdownNodesFromMarkdownNodes;
    },
    postprocess: function() {
        return postprocess;
    }
});
function postprocess(divisionMarkdownNode, context) {
    var divisionMarkdownNodes;
    divisionMarkdownNodes = resolveIncludes(divisionMarkdownNode, context);
    resolveEmbeddings(divisionMarkdownNodes, context);
    var footnoteReplacementMap = prepareFootnotes(divisionMarkdownNodes, context), markdownNodes = paginate(divisionMarkdownNodes, context);
    divisionMarkdownNodes = divisionMarkdownNodesFromMarkdownNodes(markdownNodes); ///
    createFootnotes(divisionMarkdownNodes, footnoteReplacementMap, context);
    createContents(divisionMarkdownNodes, context);
    createIndex(divisionMarkdownNodes, context);
    return markdownNodes;
}
function paginate(divisionMarkdownNodes, context) {
    var pageNumber = 1, markdownNOdes = [];
    Object.assign(context, {
        pageNumber: pageNumber
    });
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        divisionMarkdownNode.paginate(markdownNOdes, context);
    });
    delete context.pageNumber;
    return markdownNOdes;
}
function createIndex(divisionMarkdownNodes, context) {
    divisionMarkdownNodes.some(function(divisionMarkdownNode) {
        var indexCreated = divisionMarkdownNode.createIndex(divisionMarkdownNodes, context);
        if (indexCreated) {
            return true;
        }
    });
}
function createContents(divisionMarkdownNodes, context) {
    divisionMarkdownNodes.some(function(divisionMarkdownNode) {
        var contentsCreated = divisionMarkdownNode.createContents(divisionMarkdownNodes, context);
        if (contentsCreated) {
            return true;
        }
    });
}
function createFootnotes(divisionMarkdownNodes, footnoteReplacementMap, context) {
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        divisionMarkdownNode.createFootnotes(footnoteReplacementMap, context);
    });
}
function resolveIncludes(divisionMarkdownNode, context) {
    var divisionMarkdownNodes = [];
    Object.assign(context, {
        divisionMarkdownNodes: divisionMarkdownNodes
    });
    var divisionMarkdownNodeIgnored = divisionMarkdownNode.isIgnored();
    if (!divisionMarkdownNodeIgnored) {
        divisionMarkdownNodes.push(divisionMarkdownNode);
    }
    divisionMarkdownNode.resolveIncludes(context);
    delete context.divisionMarkdownNodes;
    return divisionMarkdownNodes;
}
function prepareFootnotes(divisionMarkdownNodes, context) {
    var footnoteReplacementMap = {};
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        divisionMarkdownNode.prepareFootnotes(footnoteReplacementMap, context);
    });
    return footnoteReplacementMap;
}
function resolveEmbeddings(divisionMarkdownNodes, context) {
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        divisionMarkdownNode.resolveEmbeddings(context);
    });
}
function divisionMarkdownNodesFromMarkdownNodes(markdownNodes) {
    var divisionMarkdownNodes = markdownNodes.reduce(function(divisionMarkdownNodes, markdownNode) {
        var markdownNodeDivisionMarkdownNode = markdownNode.isDivisionMarkdownNode();
        if (markdownNodeDivisionMarkdownNode) {
            var divisionMarkdownNode = markdownNode; ///
            divisionMarkdownNodes.push(divisionMarkdownNode);
        }
        return divisionMarkdownNodes;
    }, []);
    return divisionMarkdownNodes;
}
var _default = {
    postprocess: postprocess,
    divisionMarkdownNodesFromMarkdownNodes: divisionMarkdownNodesFromMarkdownNodes
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcHJvY2Vzc2luZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3Rwcm9jZXNzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBkaXZpc2lvbk1hcmtkb3duTm9kZXM7XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gcmVzb2x2ZUluY2x1ZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICByZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpO1xuXG4gIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAgPSBwcmVwYXJlRm9vdG5vdGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCksXG4gICAgICAgIG1hcmtkb3duTm9kZXMgPSBwYWdpbmF0ZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21NYXJrZG93bk5vZGVzKG1hcmtkb3duTm9kZXMpOyAgLy8vXG5cbiAgY3JlYXRlRm9vdG5vdGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCk7XG5cbiAgY3JlYXRlQ29udGVudHMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcblxuICBjcmVhdGVJbmRleChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtYXJrZG93bk5vZGVzO1xufVxuXG5mdW5jdGlvbiBwYWdpbmF0ZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFnZU51bWJlciA9IDEsXG4gICAgICAgIG1hcmtkb3duTk9kZXMgPSBbXTtcblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICBwYWdlTnVtYmVyXG4gIH0pO1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnBhZ2luYXRlKG1hcmtkb3duTk9kZXMsIGNvbnRleHQpO1xuICB9KTtcblxuICBkZWxldGUgY29udGV4dC5wYWdlTnVtYmVyO1xuXG4gIHJldHVybiBtYXJrZG93bk5PZGVzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRleChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgaW5kZXhDcmVhdGVkID0gZGl2aXNpb25NYXJrZG93bk5vZGUuY3JlYXRlSW5kZXgoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChpbmRleENyZWF0ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICBjb25zdCBjb250ZW50c0NyZWF0ZWQgPSBkaXZpc2lvbk1hcmtkb3duTm9kZS5jcmVhdGVDb250ZW50cyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnRlbnRzQ3JlYXRlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdG5vdGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCkge1xuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5jcmVhdGVGb290bm90ZXMoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlSW5jbHVkZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gW107XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gIH0pO1xuXG4gIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlSWdub3JlZCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmlzSWdub3JlZCgpO1xuXG4gIGlmICghZGl2aXNpb25NYXJrZG93bk5vZGVJZ25vcmVkKSB7XG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2goZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuICB9XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUluY2x1ZGVzKGNvbnRleHQpO1xuXG4gIGRlbGV0ZSBjb250ZXh0LmRpdmlzaW9uTWFya2Rvd25Ob2RlcztcblxuICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlRm9vdG5vdGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50TWFwID0ge307XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGUucHJlcGFyZUZvb3Rub3Rlcyhmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXA7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5ncyhjb250ZXh0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzKSB7XG4gIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IG1hcmtkb3duTm9kZXMucmVkdWNlKChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIG1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZURpdmlzaW9uTWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlLmlzRGl2aXNpb25NYXJrZG93bk5vZGUoKTtcblxuICAgIGlmIChtYXJrZG93bk5vZGVEaXZpc2lvbk1hcmtkb3duTm9kZSkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7ICAvLy9cblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2goZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBvc3Rwcm9jZXNzLFxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2Rlc1xufSJdLCJuYW1lcyI6WyJkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2RlcyIsInBvc3Rwcm9jZXNzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwicmVzb2x2ZUluY2x1ZGVzIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJmb290bm90ZVJlcGxhY2VtZW50TWFwIiwicHJlcGFyZUZvb3Rub3RlcyIsIm1hcmtkb3duTm9kZXMiLCJwYWdpbmF0ZSIsImNyZWF0ZUZvb3Rub3RlcyIsImNyZWF0ZUNvbnRlbnRzIiwiY3JlYXRlSW5kZXgiLCJwYWdlTnVtYmVyIiwibWFya2Rvd25OT2RlcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJzb21lIiwiaW5kZXhDcmVhdGVkIiwiY29udGVudHNDcmVhdGVkIiwiZGl2aXNpb25NYXJrZG93bk5vZGVJZ25vcmVkIiwiaXNJZ25vcmVkIiwicHVzaCIsInJlZHVjZSIsIm1hcmtkb3duTm9kZSIsIm1hcmtkb3duTm9kZURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaXNEaXZpc2lvbk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBc0hBLE9BR0M7ZUFIRDs7SUFoQmdCQSxzQ0FBc0M7ZUFBdENBOztJQXBHQUMsV0FBVztlQUFYQTs7O0FBQVQsU0FBU0EsWUFBWUMsb0JBQW9CLEVBQUVDLE9BQU87SUFDdkQsSUFBSUM7SUFFSkEsd0JBQXdCQyxnQkFBZ0JILHNCQUFzQkM7SUFFOURHLGtCQUFrQkYsdUJBQXVCRDtJQUV6QyxJQUFNSSx5QkFBeUJDLGlCQUFpQkosdUJBQXVCRCxVQUNqRU0sZ0JBQWdCQyxTQUFTTix1QkFBdUJEO0lBRXREQyx3QkFBd0JKLHVDQUF1Q1MsZ0JBQWlCLEdBQUc7SUFFbkZFLGdCQUFnQlAsdUJBQXVCRyx3QkFBd0JKO0lBRS9EUyxlQUFlUix1QkFBdUJEO0lBRXRDVSxZQUFZVCx1QkFBdUJEO0lBRW5DLE9BQU9NO0FBQ1Q7QUFFQSxTQUFTQyxTQUFTTixxQkFBcUIsRUFBRUQsT0FBTztJQUM5QyxJQUFNVyxhQUFhLEdBQ2JDLGdCQUFnQixFQUFFO0lBRXhCQyxPQUFPQyxNQUFNLENBQUNkLFNBQVM7UUFDckJXLFlBQUFBO0lBQ0Y7SUFFQVYsc0JBQXNCYyxPQUFPLENBQUMsU0FBQ2hCO1FBQzdCQSxxQkFBcUJRLFFBQVEsQ0FBQ0ssZUFBZVo7SUFDL0M7SUFFQSxPQUFPQSxRQUFRVyxVQUFVO0lBRXpCLE9BQU9DO0FBQ1Q7QUFFQSxTQUFTRixZQUFZVCxxQkFBcUIsRUFBRUQsT0FBTztJQUNqREMsc0JBQXNCZSxJQUFJLENBQUMsU0FBQ2pCO1FBQzFCLElBQU1rQixlQUFlbEIscUJBQXFCVyxXQUFXLENBQUNULHVCQUF1QkQ7UUFFN0UsSUFBSWlCLGNBQWM7WUFDaEIsT0FBTztRQUNUO0lBQ0Y7QUFDRjtBQUVBLFNBQVNSLGVBQWVSLHFCQUFxQixFQUFFRCxPQUFPO0lBQ3BEQyxzQkFBc0JlLElBQUksQ0FBQyxTQUFDakI7UUFDMUIsSUFBTW1CLGtCQUFrQm5CLHFCQUFxQlUsY0FBYyxDQUFDUix1QkFBdUJEO1FBRW5GLElBQUlrQixpQkFBaUI7WUFDbkIsT0FBTztRQUNUO0lBQ0Y7QUFDRjtBQUVBLFNBQVNWLGdCQUFnQlAscUJBQXFCLEVBQUVHLHNCQUFzQixFQUFFSixPQUFPO0lBQzdFQyxzQkFBc0JjLE9BQU8sQ0FBQyxTQUFDaEI7UUFDN0JBLHFCQUFxQlMsZUFBZSxDQUFDSix3QkFBd0JKO0lBQy9EO0FBQ0Y7QUFFQSxTQUFTRSxnQkFBZ0JILG9CQUFvQixFQUFFQyxPQUFPO0lBQ3BELElBQU1DLHdCQUF3QixFQUFFO0lBRWhDWSxPQUFPQyxNQUFNLENBQUNkLFNBQVM7UUFDckJDLHVCQUFBQTtJQUNGO0lBRUEsSUFBTWtCLDhCQUE4QnBCLHFCQUFxQnFCLFNBQVM7SUFFbEUsSUFBSSxDQUFDRCw2QkFBNkI7UUFDaENsQixzQkFBc0JvQixJQUFJLENBQUN0QjtJQUM3QjtJQUVBQSxxQkFBcUJHLGVBQWUsQ0FBQ0Y7SUFFckMsT0FBT0EsUUFBUUMscUJBQXFCO0lBRXBDLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTSSxpQkFBaUJKLHFCQUFxQixFQUFFRCxPQUFPO0lBQ3RELElBQU1JLHlCQUF5QixDQUFDO0lBRWhDSCxzQkFBc0JjLE9BQU8sQ0FBQyxTQUFDaEI7UUFDN0JBLHFCQUFxQk0sZ0JBQWdCLENBQUNELHdCQUF3Qko7SUFDaEU7SUFFQSxPQUFPSTtBQUNUO0FBRUEsU0FBU0Qsa0JBQWtCRixxQkFBcUIsRUFBRUQsT0FBTztJQUN2REMsc0JBQXNCYyxPQUFPLENBQUMsU0FBQ2hCO1FBQzdCQSxxQkFBcUJJLGlCQUFpQixDQUFDSDtJQUN6QztBQUNGO0FBRU8sU0FBU0gsdUNBQXVDUyxhQUFhO0lBQ2xFLElBQU1MLHdCQUF3QkssY0FBY2dCLE1BQU0sQ0FBQyxTQUFDckIsdUJBQXVCc0I7UUFDekUsSUFBTUMsbUNBQW1DRCxhQUFhRSxzQkFBc0I7UUFFNUUsSUFBSUQsa0NBQWtDO1lBQ3BDLElBQU16Qix1QkFBdUJ3QixjQUFlLEdBQUc7WUFFL0N0QixzQkFBc0JvQixJQUFJLENBQUN0QjtRQUM3QjtRQUVBLE9BQU9FO0lBQ1QsR0FBRyxFQUFFO0lBRUwsT0FBT0E7QUFDVDtJQUVBLFdBQWU7SUFDYkgsYUFBQUE7SUFDQUQsd0NBQUFBO0FBQ0YifQ==
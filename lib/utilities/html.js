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
    postProcess: function() {
        return postProcess;
    }
});
function postProcess(divisionMarkdownNodes, context) {
    var footnoteReplacementMap = prepareFootnotes(divisionMarkdownNodes, context), markdownNodes = paginate(divisionMarkdownNodes, context);
    divisionMarkdownNodes = divisionMarkdownNodesFromMarkdownNodes(markdownNodes); ///
    createFootnotes(divisionMarkdownNodes, footnoteReplacementMap, context);
    createContents(divisionMarkdownNodes, context);
    createIndex(divisionMarkdownNodes, context);
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
function prepareFootnotes(divisionMarkdownNodes, context) {
    var footnoteReplacementMap = {};
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        divisionMarkdownNode.prepareFootnotes(footnoteReplacementMap, context);
    });
    return footnoteReplacementMap;
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
    postProcess: postProcess
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RQcm9jZXNzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50TWFwID0gcHJlcGFyZUZvb3Rub3RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBtYXJrZG93bk5vZGVzID0gcGFnaW5hdGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzKTsgIC8vL1xuXG4gIGNyZWF0ZUZvb3Rub3RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpO1xuXG4gIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCk7XG5cbiAgY3JlYXRlSW5kZXgoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gcGFnaW5hdGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhZ2VOdW1iZXIgPSAxLFxuICAgICAgICBtYXJrZG93bk5PZGVzID0gW107XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgcGFnZU51bWJlclxuICB9KTtcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5wYWdpbmF0ZShtYXJrZG93bk5PZGVzLCBjb250ZXh0KTtcbiAgfSk7XG5cbiAgZGVsZXRlIGNvbnRleHQucGFnZU51bWJlcjtcblxuICByZXR1cm4gbWFya2Rvd25OT2Rlcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5kZXgoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4Q3JlYXRlZCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZUluZGV4KGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCk7XG5cbiAgICBpZiAoaW5kZXhDcmVhdGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50cyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgY29uc3QgY29udGVudHNDcmVhdGVkID0gZGl2aXNpb25NYXJrZG93bk5vZGUuY3JlYXRlQ29udGVudHMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0NyZWF0ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rub3RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpIHtcbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGUuY3JlYXRlRm9vdG5vdGVzKGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUZvb3Rub3RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCA9IHt9O1xuXG4gIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnByZXBhcmVGb290bm90ZXMoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCk7XG4gIH0pO1xuXG4gIHJldHVybiBmb290bm90ZVJlcGxhY2VtZW50TWFwO1xufVxuXG5mdW5jdGlvbiBkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzKSB7XG4gIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IG1hcmtkb3duTm9kZXMucmVkdWNlKChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIG1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGNvbnN0IG1hcmtkb3duTm9kZURpdmlzaW9uTWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlLmlzRGl2aXNpb25NYXJrZG93bk5vZGUoKTtcblxuICAgIGlmIChtYXJrZG93bk5vZGVEaXZpc2lvbk1hcmtkb3duTm9kZSkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7ICAvLy9cblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2goZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBvc3RQcm9jZXNzXG59Il0sIm5hbWVzIjpbInBvc3RQcm9jZXNzIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiY29udGV4dCIsImZvb3Rub3RlUmVwbGFjZW1lbnRNYXAiLCJwcmVwYXJlRm9vdG5vdGVzIiwibWFya2Rvd25Ob2RlcyIsInBhZ2luYXRlIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU1hcmtkb3duTm9kZXMiLCJjcmVhdGVGb290bm90ZXMiLCJjcmVhdGVDb250ZW50cyIsImNyZWF0ZUluZGV4IiwicGFnZU51bWJlciIsIm1hcmtkb3duTk9kZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJzb21lIiwiaW5kZXhDcmVhdGVkIiwiY29udGVudHNDcmVhdGVkIiwicmVkdWNlIiwibWFya2Rvd25Ob2RlIiwibWFya2Rvd25Ob2RlRGl2aXNpb25NYXJrZG93bk5vZGUiLCJpc0RpdmlzaW9uTWFya2Rvd25Ob2RlIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBb0ZBLE9BRUM7ZUFGRDs7SUFsRmdCQSxXQUFXO2VBQVhBOzs7QUFBVCxTQUFTQSxZQUFZQyxxQkFBcUIsRUFBRUMsT0FBTztJQUN4RCxJQUFNQyx5QkFBeUJDLGlCQUFpQkgsdUJBQXVCQyxVQUNqRUcsZ0JBQWdCQyxTQUFTTCx1QkFBdUJDO0lBRXRERCx3QkFBd0JNLHVDQUF1Q0YsZ0JBQWlCLEdBQUc7SUFFbkZHLGdCQUFnQlAsdUJBQXVCRSx3QkFBd0JEO0lBRS9ETyxlQUFlUix1QkFBdUJDO0lBRXRDUSxZQUFZVCx1QkFBdUJDO0FBQ3JDO0FBRUEsU0FBU0ksU0FBU0wscUJBQXFCLEVBQUVDLE9BQU87SUFDOUMsSUFBTVMsYUFBYSxHQUNiQyxnQkFBZ0IsRUFBRTtJQUV4QkMsT0FBT0MsTUFBTSxDQUFDWixTQUFTO1FBQ3JCUyxZQUFBQTtJQUNGO0lBRUFWLHNCQUFzQmMsT0FBTyxDQUFDLFNBQUNDO1FBQzdCQSxxQkFBcUJWLFFBQVEsQ0FBQ00sZUFBZVY7SUFDL0M7SUFFQSxPQUFPQSxRQUFRUyxVQUFVO0lBRXpCLE9BQU9DO0FBQ1Q7QUFFQSxTQUFTRixZQUFZVCxxQkFBcUIsRUFBRUMsT0FBTztJQUNqREQsc0JBQXNCZ0IsSUFBSSxDQUFDLFNBQUNEO1FBQzFCLElBQU1FLGVBQWVGLHFCQUFxQk4sV0FBVyxDQUFDVCx1QkFBdUJDO1FBRTdFLElBQUlnQixjQUFjO1lBQ2hCLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFQSxTQUFTVCxlQUFlUixxQkFBcUIsRUFBRUMsT0FBTztJQUNwREQsc0JBQXNCZ0IsSUFBSSxDQUFDLFNBQUNEO1FBQzFCLElBQU1HLGtCQUFrQkgscUJBQXFCUCxjQUFjLENBQUNSLHVCQUF1QkM7UUFFbkYsSUFBSWlCLGlCQUFpQjtZQUNuQixPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRUEsU0FBU1gsZ0JBQWdCUCxxQkFBcUIsRUFBRUUsc0JBQXNCLEVBQUVELE9BQU87SUFDN0VELHNCQUFzQmMsT0FBTyxDQUFDLFNBQUNDO1FBQzdCQSxxQkFBcUJSLGVBQWUsQ0FBQ0wsd0JBQXdCRDtJQUMvRDtBQUNGO0FBRUEsU0FBU0UsaUJBQWlCSCxxQkFBcUIsRUFBRUMsT0FBTztJQUN0RCxJQUFNQyx5QkFBeUIsQ0FBQztJQUVoQ0Ysc0JBQXNCYyxPQUFPLENBQUMsU0FBQ0M7UUFDN0JBLHFCQUFxQlosZ0JBQWdCLENBQUNELHdCQUF3QkQ7SUFDaEU7SUFFQSxPQUFPQztBQUNUO0FBRUEsU0FBU0ksdUNBQXVDRixhQUFhO0lBQzNELElBQU1KLHdCQUF3QkksY0FBY2UsTUFBTSxDQUFDLFNBQUNuQix1QkFBdUJvQjtRQUN6RSxJQUFNQyxtQ0FBbUNELGFBQWFFLHNCQUFzQjtRQUU1RSxJQUFJRCxrQ0FBa0M7WUFDcEMsSUFBTU4sdUJBQXVCSyxjQUFlLEdBQUc7WUFFL0NwQixzQkFBc0J1QixJQUFJLENBQUNSO1FBQzdCO1FBRUEsT0FBT2Y7SUFDVCxHQUFHLEVBQUU7SUFFTCxPQUFPQTtBQUNUO0lBRUEsV0FBZTtJQUNiRCxhQUFBQTtBQUNGIn0=
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
    resolveEmbeddings: function() {
        return resolveEmbeddings;
    },
    resolveIncludes: function() {
        return resolveIncludes;
    }
});
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
function resolveEmbeddings(divisionMarkdownNodes, context) {
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        divisionMarkdownNode.resolveEmbeddings(context);
    });
}
var _default = {
    resolveIncludes: resolveIncludes,
    resolveEmbeddings: resolveEmbeddings
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSW5jbHVkZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gW107XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gIH0pO1xuXG4gIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlSWdub3JlZCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmlzSWdub3JlZCgpO1xuXG4gIGlmICghZGl2aXNpb25NYXJrZG93bk5vZGVJZ25vcmVkKSB7XG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2goZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuICB9XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUluY2x1ZGVzKGNvbnRleHQpO1xuXG4gIGRlbGV0ZSBjb250ZXh0LmRpdmlzaW9uTWFya2Rvd25Ob2RlcztcblxuICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUVtYmVkZGluZ3MoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVFbWJlZGRpbmdzKGNvbnRleHQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZXNvbHZlSW5jbHVkZXMsXG4gIHJlc29sdmVFbWJlZGRpbmdzXG59O1xuIl0sIm5hbWVzIjpbInJlc29sdmVFbWJlZGRpbmdzIiwicmVzb2x2ZUluY2x1ZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0IiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGl2aXNpb25NYXJrZG93bk5vZGVJZ25vcmVkIiwiaXNJZ25vcmVkIiwicHVzaCIsImZvckVhY2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTRCQSxPQUdFO2VBSEY7O0lBTmdCQSxpQkFBaUI7ZUFBakJBOztJQXBCQUMsZUFBZTtlQUFmQTs7O0FBQVQsU0FBU0EsZ0JBQWdCQyxvQkFBb0IsRUFBRUMsT0FBTztJQUMzRCxJQUFNQyx3QkFBd0IsRUFBRTtJQUVoQ0MsT0FBT0MsTUFBTSxDQUFDSCxTQUFTO1FBQ3JCQyx1QkFBQUE7SUFDRjtJQUVBLElBQU1HLDhCQUE4QkwscUJBQXFCTSxTQUFTO0lBRWxFLElBQUksQ0FBQ0QsNkJBQTZCO1FBQ2hDSCxzQkFBc0JLLElBQUksQ0FBQ1A7SUFDN0I7SUFFQUEscUJBQXFCRCxlQUFlLENBQUNFO0lBRXJDLE9BQU9BLFFBQVFDLHFCQUFxQjtJQUVwQyxPQUFPQTtBQUNUO0FBRU8sU0FBU0osa0JBQWtCSSxxQkFBcUIsRUFBRUQsT0FBTztJQUM5REMsc0JBQXNCTSxPQUFPLENBQUMsU0FBQ1I7UUFDN0JBLHFCQUFxQkYsaUJBQWlCLENBQUNHO0lBQ3pDO0FBQ0Y7SUFFQSxXQUFlO0lBQ2JGLGlCQUFBQTtJQUNBRCxtQkFBQUE7QUFDRiJ9
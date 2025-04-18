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
    resolve: function() {
        return resolve;
    }
});
var _topmost = /*#__PURE__*/ _interop_require_default(require("../node/markdown/topmost"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function resolve(divisionMarkdownNode, context) {
    var divisionMarkdownNodes;
    divisionMarkdownNodes = resolveIncludes(divisionMarkdownNode, context);
    resolveEmbeddings(divisionMarkdownNodes, context);
    var topmostMarkdownNode = _topmost.default.fromDivisionMarkdownNodes(divisionMarkdownNodes);
    return topmostMarkdownNode;
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
function resolveEmbeddings(divisionMarkdownNodes, context) {
    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
        divisionMarkdownNode.resolveEmbeddings(context);
    });
}
var _default = {
    resolve: resolve
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3Btb3N0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL3RvcG1vc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRpdmlzaW9uTWFya2Rvd25Ob2RlcztcblxuICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSByZXNvbHZlSW5jbHVkZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gIHJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgY29udGV4dCk7XG5cbiAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZSA9IFRvcG1vc3RNYXJrZG93bk5vZGUuZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMpO1xuXG4gIHJldHVybiB0b3Btb3N0TWFya2Rvd25Ob2RlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlSW5jbHVkZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gW107XG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gIH0pO1xuXG4gIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlSWdub3JlZCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmlzSWdub3JlZCgpO1xuXG4gIGlmICghZGl2aXNpb25NYXJrZG93bk5vZGVJZ25vcmVkKSB7XG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2goZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuICB9XG5cbiAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUluY2x1ZGVzKGNvbnRleHQpO1xuXG4gIGRlbGV0ZSBjb250ZXh0LmRpdmlzaW9uTWFya2Rvd25Ob2RlcztcblxuICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlc29sdmVcbn0iXSwibmFtZXMiOlsicmVzb2x2ZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInJlc29sdmVJbmNsdWRlcyIsInJlc29sdmVFbWJlZGRpbmdzIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsIlRvcG1vc3RNYXJrZG93bk5vZGUiLCJmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGl2aXNpb25NYXJrZG93bk5vZGVJZ25vcmVkIiwiaXNJZ25vcmVkIiwicHVzaCIsImZvckVhY2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTBDQSxPQUVDO2VBRkQ7O0lBdENnQkEsT0FBTztlQUFQQTs7OzhEQUZnQjs7Ozs7O0FBRXpCLFNBQVNBLFFBQVFDLG9CQUFvQixFQUFFQyxPQUFPO0lBQ25ELElBQUlDO0lBRUpBLHdCQUF3QkMsZ0JBQWdCSCxzQkFBc0JDO0lBRTlERyxrQkFBa0JGLHVCQUF1QkQ7SUFFekMsSUFBTUksc0JBQXNCQyxnQkFBbUIsQ0FBQ0MseUJBQXlCLENBQUNMO0lBRTFFLE9BQU9HO0FBQ1Q7QUFFQSxTQUFTRixnQkFBZ0JILG9CQUFvQixFQUFFQyxPQUFPO0lBQ3BELElBQU1DLHdCQUF3QixFQUFFO0lBRWhDTSxPQUFPQyxNQUFNLENBQUNSLFNBQVM7UUFDckJDLHVCQUFBQTtJQUNGO0lBRUEsSUFBTVEsOEJBQThCVixxQkFBcUJXLFNBQVM7SUFFbEUsSUFBSSxDQUFDRCw2QkFBNkI7UUFDaENSLHNCQUFzQlUsSUFBSSxDQUFDWjtJQUM3QjtJQUVBQSxxQkFBcUJHLGVBQWUsQ0FBQ0Y7SUFFckMsT0FBT0EsUUFBUUMscUJBQXFCO0lBRXBDLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTRSxrQkFBa0JGLHFCQUFxQixFQUFFRCxPQUFPO0lBQ3ZEQyxzQkFBc0JXLE9BQU8sQ0FBQyxTQUFDYjtRQUM3QkEscUJBQXFCSSxpQkFBaUIsQ0FBQ0g7SUFDekM7QUFDRjtJQUVBLFdBQWU7SUFDYkYsU0FBQUE7QUFDRiJ9
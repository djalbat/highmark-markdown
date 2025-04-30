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
    contentsDirectiveHTMLNodeFromNode: function() {
        return contentsDirectiveHTMLNodeFromNode;
    },
    default: function() {
        return _default // export function postProcess(divisionHTMLNodes, context) {
         //   const footnoteReplacementMap = prepareFootnotes(divisionHTMLNodes, context),
         //         markdownNodes = paginate(divisionHTMLNodes, context);
         //
         //   divisionHTMLNodes = divisionHTMLNodesFromHTMLNodes(markdownNodes);  ///
         //
         //   createFootnotes(divisionHTMLNodes, footnoteReplacementMap, context);
         //
         //   createContents(divisionHTMLNodes, context);
         //
         //   createIndex(divisionHTMLNodes, context);
         // }
         //
         // function paginate(divisionHTMLNodes, context) {
         //   const pageNumber = 1,
         //         markdownNOdes = [];
         //
         //   Object.assign(context, {
         //     pageNumber
         //   });
         //
         //   divisionHTMLNodes.forEach((divisionHTMLNode) => {
         //     divisionHTMLNode.paginate(markdownNOdes, context);
         //   });
         //
         //   delete context.pageNumber;
         //
         //   return markdownNOdes;
         // }
         //
         // function createIndex(divisionHTMLNodes, context) {
         //   divisionHTMLNodes.some((divisionHTMLNode) => {
         //     const indexCreated = divisionHTMLNode.createIndex(divisionHTMLNodes, context);
         //
         //     if (indexCreated) {
         //       return true;
         //     }
         //   });
         // }
         //
         // function createContents(divisionHTMLNodes, context) {
         //   divisionHTMLNodes.some((divisionHTMLNode) => {
         //     const contentsCreated = divisionHTMLNode.createContents(divisionHTMLNodes, context);
         //
         //     if (contentsCreated) {
         //       return true;
         //     }
         //   });
         // }
         //
         // function createFootnotes(divisionHTMLNodes, footnoteReplacementMap, context) {
         //   divisionHTMLNodes.forEach((divisionHTMLNode) => {
         //     divisionHTMLNode.createFootnotes(footnoteReplacementMap, context);
         //   });
         // }
         //
         // function prepareFootnotes(divisionHTMLNodes, context) {
         //   const footnoteReplacementMap = {};
         //
         //   divisionHTMLNodes.forEach((divisionHTMLNode) => {
         //     divisionHTMLNode.prepareFootnotes(footnoteReplacementMap, context);
         //   });
         //
         //   return footnoteReplacementMap;
         // }
         //
         // export default {
         //   postProcess
         // }
        ;
    },
    divisionHTMLNodesFromNode: function() {
        return divisionHTMLNodesFromNode;
    },
    footnoteHTMLNodesFromNode: function() {
        return footnoteHTMLNodesFromNode;
    },
    footnoteLinkHTMLNodesFromNode: function() {
        return footnoteLinkHTMLNodesFromNode;
    },
    footnotesDirectiveHTMLNodeFromNode: function() {
        return footnotesDirectiveHTMLNodeFromNode;
    },
    footnotesHTMLNodesFromNode: function() {
        return footnotesHTMLNodesFromNode;
    },
    headingHTMLNodesFromNode: function() {
        return headingHTMLNodesFromNode;
    },
    pageNumberDirectiveHTMLNodeFromNode: function() {
        return pageNumberDirectiveHTMLNodeFromNode;
    }
});
var _occamquery = require("occam-query");
var _query = require("../utilities/query");
var ignoreDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("/division/ignoreDirective"), contentsDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("/division/contentsDirective"), footnotesDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("/division/footnotesDirective"), pageNumberDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("//pageNumber"), headingHTMLNodesQuery = _occamquery.Query.fromExpressionString("/division/primaryHeading|secondaryHeading|tertiaryHeading|quaternaryHeading"), divisionHTMLNodesQuery = _occamquery.Query.fromExpressionString("/html/division"), footnoteHTMLNodesQuery = _occamquery.Query.fromExpressionString("/division/footnote"), footnotesHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnote"), footnoteLinkHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnoteLink");
function contentsDirectiveHTMLNodeFromNode(node) {
    var contentsDirectiveHTMLNode = (0, _query.nodeFromNodeAndQuery)(node, contentsDirectiveHTMLNodeQuery);
    return contentsDirectiveHTMLNode;
}
function footnotesDirectiveHTMLNodeFromNode(node) {
    var footnotesDirectiveHTMLNode = (0, _query.nodeFromNodeAndQuery)(node, footnotesDirectiveHTMLNodeQuery);
    return footnotesDirectiveHTMLNode;
}
function pageNumberDirectiveHTMLNodeFromNode(node) {
    var pageNumberDirectiveHTMLNode = (0, _query.nodeFromNodeAndQuery)(node, pageNumberDirectiveHTMLNodeQuery);
    return pageNumberDirectiveHTMLNode;
}
function headingHTMLNodesFromNode(node) {
    var headingHTMLNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, headingHTMLNodesQuery, headingHTMLNodes);
    return headingHTMLNodes;
}
function divisionHTMLNodesFromNode(node) {
    var divisionHTMLNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, divisionHTMLNodesQuery, divisionHTMLNodes);
    return divisionHTMLNodes;
}
function footnoteHTMLNodesFromNode(node) {
    var footnoteHTMLNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, footnoteHTMLNodesQuery, footnoteHTMLNodes);
    return footnoteHTMLNodes;
}
function footnotesHTMLNodesFromNode(node) {
    var footnotesHTMLNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, footnotesHTMLNodesQuery, footnotesHTMLNodes);
    return footnotesHTMLNodes;
}
function footnoteLinkHTMLNodesFromNode(node) {
    var linkHTMLNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, footnoteLinkHTMLNodesQuery, linkHTMLNodes);
    return linkHTMLNodes;
}
var _default = {
    contentsDirectiveHTMLNodeFromNode: contentsDirectiveHTMLNodeFromNode,
    footnotesDirectiveHTMLNodeFromNode: footnotesDirectiveHTMLNodeFromNode,
    pageNumberDirectiveHTMLNodeFromNode: pageNumberDirectiveHTMLNodeFromNode,
    headingHTMLNodesFromNode: headingHTMLNodesFromNode,
    divisionHTMLNodesFromNode: divisionHTMLNodesFromNode,
    footnoteHTMLNodesFromNode: footnoteHTMLNodesFromNode,
    footnotesHTMLNodesFromNode: footnotesHTMLNodesFromNode,
    footnoteLinkHTMLNodesFromNode: footnoteLinkHTMLNodesFromNode
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IHsgbm9kZUZyb21Ob2RlQW5kUXVlcnksIG5vZGVzRnJvbU5vZGVBbmRRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgaWdub3JlRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL2RpdmlzaW9uL2lnbm9yZURpcmVjdGl2ZVwiKSxcbiAgICAgIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL2RpdmlzaW9uL2NvbnRlbnRzRGlyZWN0aXZlXCIpLFxuICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL2RpdmlzaW9uL2Zvb3Rub3Rlc0RpcmVjdGl2ZVwiKSxcbiAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL3BhZ2VOdW1iZXJcIiksXG4gICAgICBoZWFkaW5nSFRNTE5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi9kaXZpc2lvbi9wcmltYXJ5SGVhZGluZ3xzZWNvbmRhcnlIZWFkaW5nfHRlcnRpYXJ5SGVhZGluZ3xxdWF0ZXJuYXJ5SGVhZGluZ1wiKSxcbiAgICAgIGRpdmlzaW9uSFRNTE5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi9odG1sL2RpdmlzaW9uXCIpLFxuICAgICAgZm9vdG5vdGVIVE1MTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL2RpdmlzaW9uL2Zvb3Rub3RlXCIpLFxuICAgICAgZm9vdG5vdGVzSFRNTE5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vZm9vdG5vdGVcIiksXG4gICAgICBmb290bm90ZUxpbmtIVE1MTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy9mb290bm90ZUxpbmtcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlID0gbm9kZUZyb21Ob2RlQW5kUXVlcnkobm9kZSwgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5KTtcblxuICByZXR1cm4gY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9IG5vZGVGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlUXVlcnkpO1xuXG4gIHJldHVybiBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlID0gbm9kZUZyb21Ob2RlQW5kUXVlcnkobm9kZSwgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlUXVlcnkpO1xuXG4gIHJldHVybiBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkaW5nSFRNTE5vZGVzRnJvbU5vZGUobm9kZSwgaGVhZGluZ0hUTUxOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBoZWFkaW5nSFRNTE5vZGVzUXVlcnksIGhlYWRpbmdIVE1MTm9kZXMpO1xuXG4gIHJldHVybiBoZWFkaW5nSFRNTE5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZShub2RlLCBkaXZpc2lvbkhUTUxOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBkaXZpc2lvbkhUTUxOb2Rlc1F1ZXJ5LCBkaXZpc2lvbkhUTUxOb2Rlcyk7XG5cbiAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZShub2RlLCBmb290bm90ZUhUTUxOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBmb290bm90ZUhUTUxOb2Rlc1F1ZXJ5LCBmb290bm90ZUhUTUxOb2Rlcyk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSFRNTE5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdG5vdGVzSFRNTE5vZGVzRnJvbU5vZGUobm9kZSwgZm9vdG5vdGVzSFRNTE5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGZvb3Rub3Rlc0hUTUxOb2Rlc1F1ZXJ5LCBmb290bm90ZXNIVE1MTm9kZXMpO1xuXG4gIHJldHVybiBmb290bm90ZXNIVE1MTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlLCBsaW5rSFRNTE5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGZvb3Rub3RlTGlua0hUTUxOb2Rlc1F1ZXJ5LCBsaW5rSFRNTE5vZGVzKTtcblxuICByZXR1cm4gbGlua0hUTUxOb2Rlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsXG4gIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsXG4gIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlLFxuICBoZWFkaW5nSFRNTE5vZGVzRnJvbU5vZGUsXG4gIGRpdmlzaW9uSFRNTE5vZGVzRnJvbU5vZGUsXG4gIGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUsXG4gIGZvb3Rub3Rlc0hUTUxOb2Rlc0Zyb21Ob2RlLFxuICBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZVxufTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHBvc3RQcm9jZXNzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4vLyAgIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAgPSBwcmVwYXJlRm9vdG5vdGVzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSxcbi8vICAgICAgICAgbWFya2Rvd25Ob2RlcyA9IHBhZ2luYXRlKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbi8vXG4vLyAgIGRpdmlzaW9uSFRNTE5vZGVzID0gZGl2aXNpb25IVE1MTm9kZXNGcm9tSFRNTE5vZGVzKG1hcmtkb3duTm9kZXMpOyAgLy8vXG4vL1xuLy8gICBjcmVhdGVGb290bm90ZXMoZGl2aXNpb25IVE1MTm9kZXMsIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpO1xuLy9cbi8vICAgY3JlYXRlQ29udGVudHMoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuLy9cbi8vICAgY3JlYXRlSW5kZXgoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIHBhZ2luYXRlKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4vLyAgIGNvbnN0IHBhZ2VOdW1iZXIgPSAxLFxuLy8gICAgICAgICBtYXJrZG93bk5PZGVzID0gW107XG4vL1xuLy8gICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbi8vICAgICBwYWdlTnVtYmVyXG4vLyAgIH0pO1xuLy9cbi8vICAgZGl2aXNpb25IVE1MTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25IVE1MTm9kZSkgPT4ge1xuLy8gICAgIGRpdmlzaW9uSFRNTE5vZGUucGFnaW5hdGUobWFya2Rvd25OT2RlcywgY29udGV4dCk7XG4vLyAgIH0pO1xuLy9cbi8vICAgZGVsZXRlIGNvbnRleHQucGFnZU51bWJlcjtcbi8vXG4vLyAgIHJldHVybiBtYXJrZG93bk5PZGVzO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIGNyZWF0ZUluZGV4KGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4vLyAgIGRpdmlzaW9uSFRNTE5vZGVzLnNvbWUoKGRpdmlzaW9uSFRNTE5vZGUpID0+IHtcbi8vICAgICBjb25zdCBpbmRleENyZWF0ZWQgPSBkaXZpc2lvbkhUTUxOb2RlLmNyZWF0ZUluZGV4KGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgaWYgKGluZGV4Q3JlYXRlZCkge1xuLy8gICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBjcmVhdGVDb250ZW50cyhkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuLy8gICBkaXZpc2lvbkhUTUxOb2Rlcy5zb21lKChkaXZpc2lvbkhUTUxOb2RlKSA9PiB7XG4vLyAgICAgY29uc3QgY29udGVudHNDcmVhdGVkID0gZGl2aXNpb25IVE1MTm9kZS5jcmVhdGVDb250ZW50cyhkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG4vL1xuLy8gICAgIGlmIChjb250ZW50c0NyZWF0ZWQpIHtcbi8vICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gY3JlYXRlRm9vdG5vdGVzKGRpdmlzaW9uSFRNTE5vZGVzLCBmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KSB7XG4vLyAgIGRpdmlzaW9uSFRNTE5vZGVzLmZvckVhY2goKGRpdmlzaW9uSFRNTE5vZGUpID0+IHtcbi8vICAgICBkaXZpc2lvbkhUTUxOb2RlLmNyZWF0ZUZvb3Rub3Rlcyhmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KTtcbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gcHJlcGFyZUZvb3Rub3RlcyhkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuLy8gICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50TWFwID0ge307XG4vL1xuLy8gICBkaXZpc2lvbkhUTUxOb2Rlcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxOb2RlKSA9PiB7XG4vLyAgICAgZGl2aXNpb25IVE1MTm9kZS5wcmVwYXJlRm9vdG5vdGVzKGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpO1xuLy8gICB9KTtcbi8vXG4vLyAgIHJldHVybiBmb290bm90ZVJlcGxhY2VtZW50TWFwO1xuLy8gfVxuLy9cbi8vIGV4cG9ydCBkZWZhdWx0IHtcbi8vICAgcG9zdFByb2Nlc3Ncbi8vIH0iXSwibmFtZXMiOlsiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUiLCJmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJmb290bm90ZXNIVE1MTm9kZXNGcm9tTm9kZSIsImhlYWRpbmdIVE1MTm9kZXNGcm9tTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiaWdub3JlRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlUXVlcnkiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5IiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlUXVlcnkiLCJoZWFkaW5nSFRNTE5vZGVzUXVlcnkiLCJkaXZpc2lvbkhUTUxOb2Rlc1F1ZXJ5IiwiZm9vdG5vdGVIVE1MTm9kZXNRdWVyeSIsImZvb3Rub3Rlc0hUTUxOb2Rlc1F1ZXJ5IiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzUXVlcnkiLCJub2RlIiwiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSIsIm5vZGVGcm9tTm9kZUFuZFF1ZXJ5IiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiLCJoZWFkaW5nSFRNTE5vZGVzIiwibm9kZXNGcm9tTm9kZUFuZFF1ZXJ5IiwiZGl2aXNpb25IVE1MTm9kZXMiLCJmb290bm90ZUhUTUxOb2RlcyIsImZvb3Rub3Rlc0hUTUxOb2RlcyIsImxpbmtIVE1MTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWdCZ0JBLGlDQUFpQztlQUFqQ0E7O0lBZ0RoQixPQVNFO2VBVEYsU0FXQSw0REFBNEQ7U0FDNUQsaUZBQWlGO1NBQ2pGLGdFQUFnRTtTQUNoRSxFQUFFO1NBQ0YsNEVBQTRFO1NBQzVFLEVBQUU7U0FDRix5RUFBeUU7U0FDekUsRUFBRTtTQUNGLGdEQUFnRDtTQUNoRCxFQUFFO1NBQ0YsNkNBQTZDO1NBQzdDLElBQUk7U0FDSixFQUFFO1NBQ0Ysa0RBQWtEO1NBQ2xELDBCQUEwQjtTQUMxQiw4QkFBOEI7U0FDOUIsRUFBRTtTQUNGLDZCQUE2QjtTQUM3QixpQkFBaUI7U0FDakIsUUFBUTtTQUNSLEVBQUU7U0FDRixzREFBc0Q7U0FDdEQseURBQXlEO1NBQ3pELFFBQVE7U0FDUixFQUFFO1NBQ0YsK0JBQStCO1NBQy9CLEVBQUU7U0FDRiwwQkFBMEI7U0FDMUIsSUFBSTtTQUNKLEVBQUU7U0FDRixxREFBcUQ7U0FDckQsbURBQW1EO1NBQ25ELHFGQUFxRjtTQUNyRixFQUFFO1NBQ0YsMEJBQTBCO1NBQzFCLHFCQUFxQjtTQUNyQixRQUFRO1NBQ1IsUUFBUTtTQUNSLElBQUk7U0FDSixFQUFFO1NBQ0Ysd0RBQXdEO1NBQ3hELG1EQUFtRDtTQUNuRCwyRkFBMkY7U0FDM0Ys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
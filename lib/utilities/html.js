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
    htmlNodesFromNode: function() {
        return htmlNodesFromNode;
    },
    nestedFootnoteLinkHTMLNodesFromNode: function() {
        return nestedFootnoteLinkHTMLNodesFromNode;
    },
    pageNumberDirectiveHTMLNodeFromNode: function() {
        return pageNumberDirectiveHTMLNodeFromNode;
    }
});
var _occamquery = require("occam-query");
var _query = require("../utilities/query");
var contentsDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("/division/contentsDirective"), footnotesDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("/division/footnotesDirective"), pageNumberDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("//pageNumber"), htmlNodesQuery = _occamquery.Query.fromExpressionString("/division/*"), divisionHTMLNodesQuery = _occamquery.Query.fromExpressionString("/html/division"), footnoteHTMLNodesQuery = _occamquery.Query.fromExpressionString("/division/footnote"), footnotesHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnote"), footnoteLinkHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnoteLink"), nestedFootnoteLinkHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnote//footnoteLink");
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
function htmlNodesFromNode(node) {
    var htmlNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, htmlNodesQuery, htmlNodes);
    return htmlNodes;
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
function nestedFootnoteLinkHTMLNodesFromNode(node) {
    var nestedFootnoteLinkHTMLNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, nestedFootnoteLinkHTMLNodesQuery, nestedFootnoteLinkHTMLNodes);
    return nestedFootnoteLinkHTMLNodes;
}
var _default = {
    contentsDirectiveHTMLNodeFromNode: contentsDirectiveHTMLNodeFromNode,
    footnotesDirectiveHTMLNodeFromNode: footnotesDirectiveHTMLNodeFromNode,
    pageNumberDirectiveHTMLNodeFromNode: pageNumberDirectiveHTMLNodeFromNode,
    divisionHTMLNodesFromNode: divisionHTMLNodesFromNode,
    footnoteHTMLNodesFromNode: footnoteHTMLNodesFromNode,
    footnotesHTMLNodesFromNode: footnotesHTMLNodesFromNode,
    footnoteLinkHTMLNodesFromNode: footnoteLinkHTMLNodesFromNode,
    nestedFootnoteLinkHTMLNodesFromNode: nestedFootnoteLinkHTMLNodesFromNode
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IHsgbm9kZUZyb21Ob2RlQW5kUXVlcnksIG5vZGVzRnJvbU5vZGVBbmRRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvZGl2aXNpb24vY29udGVudHNEaXJlY3RpdmVcIiksXG4gICAgICBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvZGl2aXNpb24vZm9vdG5vdGVzRGlyZWN0aXZlXCIpLFxuICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vcGFnZU51bWJlclwiKSxcbiAgICAgIGh0bWxOb2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvZGl2aXNpb24vKlwiKSxcbiAgICAgIGRpdmlzaW9uSFRNTE5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi9odG1sL2RpdmlzaW9uXCIpLFxuICAgICAgZm9vdG5vdGVIVE1MTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL2RpdmlzaW9uL2Zvb3Rub3RlXCIpLFxuICAgICAgZm9vdG5vdGVzSFRNTE5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vZm9vdG5vdGVcIiksXG4gICAgICBmb290bm90ZUxpbmtIVE1MTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy9mb290bm90ZUxpbmtcIiksXG4gICAgICBuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy9mb290bm90ZS8vZm9vdG5vdGVMaW5rXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSA9IG5vZGVGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSk7XG5cbiAgcmV0dXJuIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSBub2RlRnJvbU5vZGVBbmRRdWVyeShub2RlLCBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5KTtcblxuICByZXR1cm4gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSA9IG5vZGVGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5KTtcblxuICByZXR1cm4gcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbE5vZGVzRnJvbU5vZGUobm9kZSwgaHRtbE5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGh0bWxOb2Rlc1F1ZXJ5LCBodG1sTm9kZXMpO1xuXG4gIHJldHVybiBodG1sTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzUXVlcnksIGRpdmlzaW9uSFRNTE5vZGVzKTtcblxuICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUsIGZvb3Rub3RlSFRNTE5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGZvb3Rub3RlSFRNTE5vZGVzUXVlcnksIGZvb3Rub3RlSFRNTE5vZGVzKTtcblxuICByZXR1cm4gZm9vdG5vdGVIVE1MTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb290bm90ZXNIVE1MTm9kZXNGcm9tTm9kZShub2RlLCBmb290bm90ZXNIVE1MTm9kZXMgPSBbXSkge1xuICBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkobm9kZSwgZm9vdG5vdGVzSFRNTE5vZGVzUXVlcnksIGZvb3Rub3Rlc0hUTUxOb2Rlcyk7XG5cbiAgcmV0dXJuIGZvb3Rub3Rlc0hUTUxOb2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUsIGxpbmtIVE1MTm9kZXMgPSBbXSkge1xuICBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkobm9kZSwgZm9vdG5vdGVMaW5rSFRNTE5vZGVzUXVlcnksIGxpbmtIVE1MTm9kZXMpO1xuXG4gIHJldHVybiBsaW5rSFRNTE5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUobm9kZSwgbmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlc1F1ZXJ5LCBuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMpO1xuXG4gIHJldHVybiBuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlLFxuICBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlLFxuICBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSxcbiAgZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSxcbiAgZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSxcbiAgZm9vdG5vdGVzSFRNTE5vZGVzRnJvbU5vZGUsXG4gIGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlLFxuICBuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZVxufTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHBvc3RQcm9jZXNzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4vLyAgIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAgPSBwcmVwYXJlRm9vdG5vdGVzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSxcbi8vICAgICAgICAgbWFya2Rvd25Ob2RlcyA9IHBhZ2luYXRlKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbi8vXG4vLyAgIGRpdmlzaW9uSFRNTE5vZGVzID0gZGl2aXNpb25IVE1MTm9kZXNGcm9tSFRNTE5vZGVzKG1hcmtkb3duTm9kZXMpOyAgLy8vXG4vL1xuLy8gICBjcmVhdGVGb290bm90ZXMoZGl2aXNpb25IVE1MTm9kZXMsIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpO1xuLy9cbi8vICAgY3JlYXRlQ29udGVudHMoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuLy9cbi8vICAgY3JlYXRlSW5kZXgoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIHBhZ2luYXRlKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4vLyAgIGNvbnN0IHBhZ2VOdW1iZXIgPSAxLFxuLy8gICAgICAgICBtYXJrZG93bk5PZGVzID0gW107XG4vL1xuLy8gICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbi8vICAgICBwYWdlTnVtYmVyXG4vLyAgIH0pO1xuLy9cbi8vICAgZGl2aXNpb25IVE1MTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25IVE1MTm9kZSkgPT4ge1xuLy8gICAgIGRpdmlzaW9uSFRNTE5vZGUucGFnaW5hdGUobWFya2Rvd25OT2RlcywgY29udGV4dCk7XG4vLyAgIH0pO1xuLy9cbi8vICAgZGVsZXRlIGNvbnRleHQucGFnZU51bWJlcjtcbi8vXG4vLyAgIHJldHVybiBtYXJrZG93bk5PZGVzO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIGNyZWF0ZUluZGV4KGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4vLyAgIGRpdmlzaW9uSFRNTE5vZGVzLnNvbWUoKGRpdmlzaW9uSFRNTE5vZGUpID0+IHtcbi8vICAgICBjb25zdCBpbmRleENyZWF0ZWQgPSBkaXZpc2lvbkhUTUxOb2RlLmNyZWF0ZUluZGV4KGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgaWYgKGluZGV4Q3JlYXRlZCkge1xuLy8gICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBjcmVhdGVDb250ZW50cyhkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuLy8gICBkaXZpc2lvbkhUTUxOb2Rlcy5zb21lKChkaXZpc2lvbkhUTUxOb2RlKSA9PiB7XG4vLyAgICAgY29uc3QgY29udGVudHNDcmVhdGVkID0gZGl2aXNpb25IVE1MTm9kZS5jcmVhdGVDb250ZW50cyhkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG4vL1xuLy8gICAgIGlmIChjb250ZW50c0NyZWF0ZWQpIHtcbi8vICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gY3JlYXRlRm9vdG5vdGVzKGRpdmlzaW9uSFRNTE5vZGVzLCBmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KSB7XG4vLyAgIGRpdmlzaW9uSFRNTE5vZGVzLmZvckVhY2goKGRpdmlzaW9uSFRNTE5vZGUpID0+IHtcbi8vICAgICBkaXZpc2lvbkhUTUxOb2RlLmNyZWF0ZUZvb3Rub3Rlcyhmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KTtcbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gcHJlcGFyZUZvb3Rub3RlcyhkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuLy8gICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50TWFwID0ge307XG4vL1xuLy8gICBkaXZpc2lvbkhUTUxOb2Rlcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxOb2RlKSA9PiB7XG4vLyAgICAgZGl2aXNpb25IVE1MTm9kZS5wcmVwYXJlRm9vdG5vdGVzKGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpO1xuLy8gICB9KTtcbi8vXG4vLyAgIHJldHVybiBmb290bm90ZVJlcGxhY2VtZW50TWFwO1xuLy8gfVxuLy9cbi8vIGV4cG9ydCBkZWZhdWx0IHtcbi8vICAgcG9zdFByb2Nlc3Ncbi8vIH0iXSwibmFtZXMiOlsiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUiLCJmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJmb290bm90ZXNIVE1MTm9kZXNGcm9tTm9kZSIsImh0bWxOb2Rlc0Zyb21Ob2RlIiwibmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5IiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlUXVlcnkiLCJodG1sTm9kZXNRdWVyeSIsImRpdmlzaW9uSFRNTE5vZGVzUXVlcnkiLCJmb290bm90ZUhUTUxOb2Rlc1F1ZXJ5IiwiZm9vdG5vdGVzSFRNTE5vZGVzUXVlcnkiLCJmb290bm90ZUxpbmtIVE1MTm9kZXNRdWVyeSIsIm5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlc1F1ZXJ5Iiwibm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiLCJub2RlRnJvbU5vZGVBbmRRdWVyeSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlIiwiaHRtbE5vZGVzIiwibm9kZXNGcm9tTm9kZUFuZFF1ZXJ5IiwiZGl2aXNpb25IVE1MTm9kZXMiLCJmb290bm90ZUhUTUxOb2RlcyIsImZvb3Rub3Rlc0hUTUxOb2RlcyIsImxpbmtIVE1MTm9kZXMiLCJuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWdCZ0JBLGlDQUFpQztlQUFqQ0E7O0lBc0RoQixPQVNFO2VBVEYsU0FXQSw0REFBNEQ7U0FDNUQsaUZBQWlGO1NBQ2pGLGdFQUFnRTtTQUNoRSxFQUFFO1NBQ0YsNEVBQTRFO1NBQzVFLEVBQUU7U0FDRix5RUFBeUU7U0FDekUsRUFBRTtTQUNGLGdEQUFnRDtTQUNoRCxFQUFFO1NBQ0YsNkNBQTZDO1NBQzdDLElBQUk7U0FDSixFQUFFO1NBQ0Ysa0RBQWtEO1NBQ2xELDBCQUEwQjtTQUMxQiw4QkFBOEI7U0FDOUIsRUFBRTtTQUNGLDZCQUE2QjtTQUM3QixpQkFBaUI7U0FDakIsUUFBUTtTQUNSLEVBQUU7U0FDRixzREFBc0Q7U0FDdEQseURBQXlEO1NBQ3pELFFBQVE7U0FDUixFQUFFO1NBQ0YsK0JBQStCO1NBQy9CLEVBQUU7U0FDRiwwQkFBMEI7U0FDMUIsSUFBSTtTQUNKLEVBQUU7U0FDRixxREFBcUQ7U0FDckQsbURBQW1EO1NBQ25ELHFGQUFxRjtTQUNyRixFQUFFO1NBQ0YsMEJBQTBCO1NBQzFCLHFCQUFxQjtTQUNyQixRQUFRO1NBQ1IsUUFBUTtTQUNSLElBQUk7U0FDSixFQUFFO1NBQ0Ysd0RBQXdEO1NBQ3hELG1EQUFtRDtTQUNuRCwyRkFBMkY7U0FDM0YsRUFBRTtTQUNGLDZCQUE2QjtTQUM3QixxQkFBcUI7U0FDckIsUUFBUTtTQUNSLFFBQVE7U0FDUixJQUFJO1NBQ0osRUFBRTtTQUNGLGlGQUFpRjtTQUNqRixzREFBc0Q7U0FDdEQseUVBQXlFO1NBQ3pFLFFBQVE7U0FDUixJQUFJO1NBQ0osRUFBRTtTQUNGLDBEQUEwRDtTQUMxRCx1Q0FBdUM7U0FDdkMsRUFBRTtTQUNGLHNEQUFzRDtTQUN0RCwwRUFBMEU7U0FDMUUsUUFBUTtTQUNSLEVBQUU7U0FDRixtQ0FBbUM7U0FDbkMsSUFBSTtTQUNKLEVBQUU7U0FDRixtQkFBbUI7U0FDbkIsZ0JBQWdCO1NBQ2hCLElBQUk7OztJQTdHWUMseUJBQXlCO2VBQXpCQTs7SUFNQUMseUJBQXlCO2VBQXpCQTs7SUFZQUMsNkJBQTZCO2VBQTdCQTs7SUFwQ0FDLGtDQUFrQztlQUFsQ0E7O0lBOEJBQywwQkFBMEI7ZUFBMUJBOztJQWxCQUMsaUJBQWlCO2VBQWpCQTs7SUE4QkFDLG1DQUFtQztlQUFuQ0E7O0lBcENBQyxtQ0FBbUM7ZUFBbkNBOzs7MEJBMUJNO3FCQUVzQztBQUU1RCxJQUFNQyxpQ0FBaUNDLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLGdDQUM1REMsa0NBQWtDRixpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyxpQ0FDN0RFLG1DQUFtQ0gsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsaUJBQzlERyxpQkFBaUJKLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLGdCQUM1Q0kseUJBQXlCTCxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyxtQkFDcERLLHlCQUF5Qk4saUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsdUJBQ3BETSwwQkFBMEJQLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLGVBQ3JETyw2QkFBNkJSLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLG1CQUN4RFEsbUNBQW1DVCxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQztBQUU3RCxTQUFTWCxrQ0FBa0NvQixJQUFJO0lBQ3BELElBQU1DLDRCQUE0QkMsSUFBQUEsMkJBQW9CLEVBQUNGLE1BQU1YO0lBRTdELE9BQU9ZO0FBQ1Q7QUFFTyxTQUFTakIsbUNBQW1DZ0IsSUFBSTtJQUNyRCxJQUFNRyw2QkFBNkJELElBQUFBLDJCQUFvQixFQUFDRixNQUFNUjtJQUU5RCxPQUFPVztBQUNUO0FBRU8sU0FBU2Ysb0NBQW9DWSxJQUFJO0lBQ3RELElBQU1JLDhCQUE4QkYsSUFBQUEsMkJBQW9CLEVBQUNGLE1BQU1QO0lBRS9ELE9BQU9XO0FBQ1Q7QUFFTyxTQUFTbEIsa0JBQWtCYyxJQUFJO1FBQUVLLFlBQUFBLGlFQUFZLEVBQUU7SUFDcERDLElBQUFBLDRCQUFxQixFQUFDTixNQUFNTixnQkFBZ0JXO0lBRTVDLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTeEIsMEJBQTBCbUIsSUFBSTtRQUFFTyxvQkFBQUEsaUVBQW9CLEVBQUU7SUFDcEVELElBQUFBLDRCQUFxQixFQUFDTixNQUFNTCx3QkFBd0JZO0lBRXBELE9BQU9BO0FBQ1Q7QUFFTyxTQUFTekIsMEJBQTBCa0IsSUFBSTtRQUFFUSxvQkFBQUEsaUVBQW9CLEVBQUU7SUFDcEVGLElBQUFBLDRCQUFxQixFQUFDTixNQUFNSix3QkFBd0JZO0lBRXBELE9BQU9BO0FBQ1Q7QUFFTyxTQUFTdkIsMkJBQTJCZSxJQUFJO1FBQUVTLHFCQUFBQSxpRUFBcUIsRUFBRTtJQUN0RUgsSUFBQUEsNEJBQXFCLEVBQUNOLE1BQU1ILHlCQUF5Qlk7SUFFckQsT0FBT0E7QUFDVDtBQUVPLFNBQVMxQiw4QkFBOEJpQixJQUFJO1FBQUVVLGdCQUFBQSxpRUFBZ0IsRUFBRTtJQUNwRUosSUFBQUEsNEJBQXFCLEVBQUNOLE1BQU1GLDRCQUE0Qlk7SUFFeEQsT0FBT0E7QUFDVDtBQUVPLFNBQVN2QixvQ0FBb0NhLElBQUk7UUFBRVcsOEJBQUFBLGlFQUE4QixFQUFFO0lBQ3hGTCxJQUFBQSw0QkFBcUIsRUFBQ04sTUFBTUQsa0NBQWtDWTtJQUU5RCxPQUFPQTtBQUNUO0lBRUEsV0FBZTtJQUNiL0IsbUNBQUFBO0lBQ0FJLG9DQUFBQTtJQUNBSSxxQ0FBQUE7SUFDQVAsMkJBQUFBO0lBQ0FDLDJCQUFBQTtJQUNBRyw0QkFBQUE7SUFDQUYsK0JBQUFBO0lBQ0FJLHFDQUFBQTtBQUNGIn0=
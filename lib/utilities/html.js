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
    footnoteHTMLNodeFromNode: function() {
        return footnoteHTMLNodeFromNode;
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
var footnoteHTMLNodeQuery = _occamquery.Query.fromExpressionString("/division/footnote"), ignoreDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("/division/subDivision/directives/ignoreDirective"), contentsDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("/division/subDivision/directives/contentsDirective"), footnotesDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("/division/subDivision/directives/footnotesDirective"), pageNumberDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("//directives/pageNumber"), headingHTMLNodesQuery = _occamquery.Query.fromExpressionString("/division/primaryHeading|secondaryHeading|tertiaryHeading|quaternaryHeading"), divisionHTMLNodesQuery = _occamquery.Query.fromExpressionString("/html/division"), footnotesHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnote|footnoteLink|footnotesDirective"), footnoteLinkHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnoteLink");
function footnoteHTMLNodeFromNode(node) {
    var footnoteHTMLNode = (0, _query.nodeFromNodeAndQuery)(node, footnoteHTMLNodeQuery);
    return footnoteHTMLNode;
}
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
    footnoteHTMLNodeFromNode: footnoteHTMLNodeFromNode,
    contentsDirectiveHTMLNodeFromNode: contentsDirectiveHTMLNodeFromNode,
    footnotesDirectiveHTMLNodeFromNode: footnotesDirectiveHTMLNodeFromNode,
    pageNumberDirectiveHTMLNodeFromNode: pageNumberDirectiveHTMLNodeFromNode,
    headingHTMLNodesFromNode: headingHTMLNodesFromNode,
    divisionHTMLNodesFromNode: divisionHTMLNodesFromNode,
    footnotesHTMLNodesFromNode: footnotesHTMLNodesFromNode,
    footnoteLinkHTMLNodesFromNode: footnoteLinkHTMLNodesFromNode
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IHsgbm9kZUZyb21Ob2RlQW5kUXVlcnksIG5vZGVzRnJvbU5vZGVBbmRRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZm9vdG5vdGVIVE1MTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvZGl2aXNpb24vZm9vdG5vdGVcIiksXG4gICAgICBpZ25vcmVEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvZGl2aXNpb24vc3ViRGl2aXNpb24vZGlyZWN0aXZlcy9pZ25vcmVEaXJlY3RpdmVcIiksXG4gICAgICBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi9kaXZpc2lvbi9zdWJEaXZpc2lvbi9kaXJlY3RpdmVzL2NvbnRlbnRzRGlyZWN0aXZlXCIpLFxuICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL2RpdmlzaW9uL3N1YkRpdmlzaW9uL2RpcmVjdGl2ZXMvZm9vdG5vdGVzRGlyZWN0aXZlXCIpLFxuICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vZGlyZWN0aXZlcy9wYWdlTnVtYmVyXCIpLCAgLy8vXG4gICAgICBoZWFkaW5nSFRNTE5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi9kaXZpc2lvbi9wcmltYXJ5SGVhZGluZ3xzZWNvbmRhcnlIZWFkaW5nfHRlcnRpYXJ5SGVhZGluZ3xxdWF0ZXJuYXJ5SGVhZGluZ1wiKSwgIC8vL1xuICAgICAgZGl2aXNpb25IVE1MTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL2h0bWwvZGl2aXNpb25cIiksICAvLy9cbiAgICAgIGZvb3Rub3Rlc0hUTUxOb2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2Zvb3Rub3RlfGZvb3Rub3RlTGlua3xmb290bm90ZXNEaXJlY3RpdmVcIiksIC8vL1xuICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vZm9vdG5vdGVMaW5rXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9vdG5vdGVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgZm9vdG5vdGVIVE1MTm9kZSA9IG5vZGVGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGZvb3Rub3RlSFRNTE5vZGVRdWVyeSk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSFRNTE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlID0gbm9kZUZyb21Ob2RlQW5kUXVlcnkobm9kZSwgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5KTtcblxuICByZXR1cm4gY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9IG5vZGVGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlUXVlcnkpO1xuXG4gIHJldHVybiBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlID0gbm9kZUZyb21Ob2RlQW5kUXVlcnkobm9kZSwgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlUXVlcnkpO1xuXG4gIHJldHVybiBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkaW5nSFRNTE5vZGVzRnJvbU5vZGUobm9kZSwgaGVhZGluZ0hUTUxOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBoZWFkaW5nSFRNTE5vZGVzUXVlcnksIGhlYWRpbmdIVE1MTm9kZXMpO1xuXG4gIHJldHVybiBoZWFkaW5nSFRNTE5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZShub2RlLCBkaXZpc2lvbkhUTUxOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBkaXZpc2lvbkhUTUxOb2Rlc1F1ZXJ5LCBkaXZpc2lvbkhUTUxOb2Rlcyk7XG5cbiAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdG5vdGVzSFRNTE5vZGVzRnJvbU5vZGUobm9kZSwgZm9vdG5vdGVzSFRNTE5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGZvb3Rub3Rlc0hUTUxOb2Rlc1F1ZXJ5LCBmb290bm90ZXNIVE1MTm9kZXMpO1xuXG4gIHJldHVybiBmb290bm90ZXNIVE1MTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlLCBsaW5rSFRNTE5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGZvb3Rub3RlTGlua0hUTUxOb2Rlc1F1ZXJ5LCBsaW5rSFRNTE5vZGVzKTtcblxuICByZXR1cm4gbGlua0hUTUxOb2Rlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmb290bm90ZUhUTUxOb2RlRnJvbU5vZGUsXG4gIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSxcbiAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSxcbiAgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsXG4gIGhlYWRpbmdIVE1MTm9kZXNGcm9tTm9kZSxcbiAgZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSxcbiAgZm9vdG5vdGVzSFRNTE5vZGVzRnJvbU5vZGUsXG4gIGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlXG59O1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gcG9zdFByb2Nlc3MoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbi8vICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCA9IHByZXBhcmVGb290bm90ZXMoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpLFxuLy8gICAgICAgICBtYXJrZG93bk5vZGVzID0gcGFnaW5hdGUoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuLy9cbi8vICAgZGl2aXNpb25IVE1MTm9kZXMgPSBkaXZpc2lvbkhUTUxOb2Rlc0Zyb21IVE1MTm9kZXMobWFya2Rvd25Ob2Rlcyk7ICAvLy9cbi8vXG4vLyAgIGNyZWF0ZUZvb3Rub3RlcyhkaXZpc2lvbkhUTUxOb2RlcywgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCk7XG4vL1xuLy8gICBjcmVhdGVDb250ZW50cyhkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG4vL1xuLy8gICBjcmVhdGVJbmRleChkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gcGFnaW5hdGUoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbi8vICAgY29uc3QgcGFnZU51bWJlciA9IDEsXG4vLyAgICAgICAgIG1hcmtkb3duTk9kZXMgPSBbXTtcbi8vXG4vLyAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuLy8gICAgIHBhZ2VOdW1iZXJcbi8vICAgfSk7XG4vL1xuLy8gICBkaXZpc2lvbkhUTUxOb2Rlcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxOb2RlKSA9PiB7XG4vLyAgICAgZGl2aXNpb25IVE1MTm9kZS5wYWdpbmF0ZShtYXJrZG93bk5PZGVzLCBjb250ZXh0KTtcbi8vICAgfSk7XG4vL1xuLy8gICBkZWxldGUgY29udGV4dC5wYWdlTnVtYmVyO1xuLy9cbi8vICAgcmV0dXJuIG1hcmtkb3duTk9kZXM7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gY3JlYXRlSW5kZXgoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbi8vICAgZGl2aXNpb25IVE1MTm9kZXMuc29tZSgoZGl2aXNpb25IVE1MTm9kZSkgPT4ge1xuLy8gICAgIGNvbnN0IGluZGV4Q3JlYXRlZCA9IGRpdmlzaW9uSFRNTE5vZGUuY3JlYXRlSW5kZXgoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuLy9cbi8vICAgICBpZiAoaW5kZXhDcmVhdGVkKSB7XG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4vLyAgIGRpdmlzaW9uSFRNTE5vZGVzLnNvbWUoKGRpdmlzaW9uSFRNTE5vZGUpID0+IHtcbi8vICAgICBjb25zdCBjb250ZW50c0NyZWF0ZWQgPSBkaXZpc2lvbkhUTUxOb2RlLmNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgaWYgKGNvbnRlbnRzQ3JlYXRlZCkge1xuLy8gICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBjcmVhdGVGb290bm90ZXMoZGl2aXNpb25IVE1MTm9kZXMsIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpIHtcbi8vICAgZGl2aXNpb25IVE1MTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25IVE1MTm9kZSkgPT4ge1xuLy8gICAgIGRpdmlzaW9uSFRNTE5vZGUuY3JlYXRlRm9vdG5vdGVzKGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpO1xuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBwcmVwYXJlRm9vdG5vdGVzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4vLyAgIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAgPSB7fTtcbi8vXG4vLyAgIGRpdmlzaW9uSFRNTE5vZGVzLmZvckVhY2goKGRpdmlzaW9uSFRNTE5vZGUpID0+IHtcbi8vICAgICBkaXZpc2lvbkhUTUxOb2RlLnByZXBhcmVGb290bm90ZXMoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCk7XG4vLyAgIH0pO1xuLy9cbi8vICAgcmV0dXJuIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXA7XG4vLyB9XG4vL1xuLy8gZXhwb3J0IGRlZmF1bHQge1xuLy8gICBwb3N0UHJvY2Vzc1xuLy8gfSJdLCJuYW1lcyI6WyJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVIVE1MTm9kZUZyb21Ob2RlIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiZm9vdG5vdGVzSFRNTE5vZGVzRnJvbU5vZGUiLCJoZWFkaW5nSFRNTE5vZGVzRnJvbU5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImZvb3Rub3RlSFRNTE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJpZ25vcmVEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5IiwiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5IiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5IiwiaGVhZGluZ0hUTUxOb2Rlc1F1ZXJ5IiwiZGl2aXNpb25IVE1MTm9kZXNRdWVyeSIsImZvb3Rub3Rlc0hUTUxOb2Rlc1F1ZXJ5IiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzUXVlcnkiLCJub2RlIiwiZm9vdG5vdGVIVE1MTm9kZSIsIm5vZGVGcm9tTm9kZUFuZFF1ZXJ5IiwiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlIiwiaGVhZGluZ0hUTUxOb2RlcyIsIm5vZGVzRnJvbU5vZGVBbmRRdWVyeSIsImRpdmlzaW9uSFRNTE5vZGVzIiwiZm9vdG5vdGVzSFRNTE5vZGVzIiwibGlua0hUTUxOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBc0JnQkEsaUNBQWlDO2VBQWpDQTs7SUEwQ2hCLE9BU0U7ZUFURixTQVdBLDREQUE0RDtTQUM1RCxpRkFBaUY7U0FDakYsZ0VBQWdFO1NBQ2hFLEVBQUU7U0FDRiw0RUFBNEU7U0FDNUUsRUFBRTtTQUNGLHlFQUF5RTtTQUN6RSxFQUFFO1NBQ0YsZ0RBQWdEO1NBQ2hELEVBQUU7U0FDRiw2Q0FBNkM7U0FDN0MsSUFBSTtTQUNKLEVBQUU7U0FDRixrREFBa0Q7U0FDbEQsMEJBQTBCO1NBQzFCLDhCQUE4QjtTQUM5QixFQUFFO1NBQ0YsNkJBQTZCO1NBQzdCLGlCQUFpQjtTQUNqQixRQUFRO1NBQ1IsRUFBRTtTQUNGLHNEQUFzRDtTQUN0RCx5REFBeUQ7U0FDekQsUUFBUTtTQUNSLEVBQUU7U0FDRiwrQkFBK0I7U0FDL0IsRUFBRTtTQUNGLDBCQUEwQjtTQUMxQixJQUFJO1NBQ0osRUFBRTtTQUNGLHFEQUFxRDtTQUNyRCxtREFBbUQ7U0FDbkQscUZBQXFGO1NBQ3JGLEVBQUU7U0FDRiww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
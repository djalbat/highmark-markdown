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
var contentsDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("/division/contentsDirective"), footnotesDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("/division/footnotesDirective"), pageNumberDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("//pageNumber"), headingHTMLNodesQuery = _occamquery.Query.fromExpressionString("/division/primaryHeading|secondaryHeading|tertiaryHeading|quaternaryHeading"), divisionHTMLNodesQuery = _occamquery.Query.fromExpressionString("/html/division"), footnoteHTMLNodesQuery = _occamquery.Query.fromExpressionString("/division/footnote"), footnotesHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnote"), footnoteLinkHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnoteLink");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IHsgbm9kZUZyb21Ob2RlQW5kUXVlcnksIG5vZGVzRnJvbU5vZGVBbmRRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvZGl2aXNpb24vY29udGVudHNEaXJlY3RpdmVcIiksXG4gICAgICBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvZGl2aXNpb24vZm9vdG5vdGVzRGlyZWN0aXZlXCIpLFxuICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vcGFnZU51bWJlclwiKSxcbiAgICAgIGhlYWRpbmdIVE1MTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL2RpdmlzaW9uL3ByaW1hcnlIZWFkaW5nfHNlY29uZGFyeUhlYWRpbmd8dGVydGlhcnlIZWFkaW5nfHF1YXRlcm5hcnlIZWFkaW5nXCIpLFxuICAgICAgZGl2aXNpb25IVE1MTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL2h0bWwvZGl2aXNpb25cIiksXG4gICAgICBmb290bm90ZUhUTUxOb2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvZGl2aXNpb24vZm9vdG5vdGVcIiksXG4gICAgICBmb290bm90ZXNIVE1MTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy9mb290bm90ZVwiKSxcbiAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2Zvb3Rub3RlTGlua1wiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUgPSBub2RlRnJvbU5vZGVBbmRRdWVyeShub2RlLCBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlUXVlcnkpO1xuXG4gIHJldHVybiBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gbm9kZUZyb21Ob2RlQW5kUXVlcnkobm9kZSwgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSk7XG5cbiAgcmV0dXJuIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUgPSBub2RlRnJvbU5vZGVBbmRRdWVyeShub2RlLCBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSk7XG5cbiAgcmV0dXJuIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWRpbmdIVE1MTm9kZXNGcm9tTm9kZShub2RlLCBoZWFkaW5nSFRNTE5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGhlYWRpbmdIVE1MTm9kZXNRdWVyeSwgaGVhZGluZ0hUTUxOb2Rlcyk7XG5cbiAgcmV0dXJuIGhlYWRpbmdIVE1MTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzUXVlcnksIGRpdmlzaW9uSFRNTE5vZGVzKTtcblxuICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUsIGZvb3Rub3RlSFRNTE5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGZvb3Rub3RlSFRNTE5vZGVzUXVlcnksIGZvb3Rub3RlSFRNTE5vZGVzKTtcblxuICByZXR1cm4gZm9vdG5vdGVIVE1MTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb290bm90ZXNIVE1MTm9kZXNGcm9tTm9kZShub2RlLCBmb290bm90ZXNIVE1MTm9kZXMgPSBbXSkge1xuICBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkobm9kZSwgZm9vdG5vdGVzSFRNTE5vZGVzUXVlcnksIGZvb3Rub3Rlc0hUTUxOb2Rlcyk7XG5cbiAgcmV0dXJuIGZvb3Rub3Rlc0hUTUxOb2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUsIGxpbmtIVE1MTm9kZXMgPSBbXSkge1xuICBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkobm9kZSwgZm9vdG5vdGVMaW5rSFRNTE5vZGVzUXVlcnksIGxpbmtIVE1MTm9kZXMpO1xuXG4gIHJldHVybiBsaW5rSFRNTE5vZGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSxcbiAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSxcbiAgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsXG4gIGhlYWRpbmdIVE1MTm9kZXNGcm9tTm9kZSxcbiAgZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSxcbiAgZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSxcbiAgZm9vdG5vdGVzSFRNTE5vZGVzRnJvbU5vZGUsXG4gIGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlXG59O1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gcG9zdFByb2Nlc3MoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbi8vICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCA9IHByZXBhcmVGb290bm90ZXMoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpLFxuLy8gICAgICAgICBtYXJrZG93bk5vZGVzID0gcGFnaW5hdGUoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuLy9cbi8vICAgZGl2aXNpb25IVE1MTm9kZXMgPSBkaXZpc2lvbkhUTUxOb2Rlc0Zyb21IVE1MTm9kZXMobWFya2Rvd25Ob2Rlcyk7ICAvLy9cbi8vXG4vLyAgIGNyZWF0ZUZvb3Rub3RlcyhkaXZpc2lvbkhUTUxOb2RlcywgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCk7XG4vL1xuLy8gICBjcmVhdGVDb250ZW50cyhkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG4vL1xuLy8gICBjcmVhdGVJbmRleChkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gcGFnaW5hdGUoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbi8vICAgY29uc3QgcGFnZU51bWJlciA9IDEsXG4vLyAgICAgICAgIG1hcmtkb3duTk9kZXMgPSBbXTtcbi8vXG4vLyAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuLy8gICAgIHBhZ2VOdW1iZXJcbi8vICAgfSk7XG4vL1xuLy8gICBkaXZpc2lvbkhUTUxOb2Rlcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxOb2RlKSA9PiB7XG4vLyAgICAgZGl2aXNpb25IVE1MTm9kZS5wYWdpbmF0ZShtYXJrZG93bk5PZGVzLCBjb250ZXh0KTtcbi8vICAgfSk7XG4vL1xuLy8gICBkZWxldGUgY29udGV4dC5wYWdlTnVtYmVyO1xuLy9cbi8vICAgcmV0dXJuIG1hcmtkb3duTk9kZXM7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gY3JlYXRlSW5kZXgoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbi8vICAgZGl2aXNpb25IVE1MTm9kZXMuc29tZSgoZGl2aXNpb25IVE1MTm9kZSkgPT4ge1xuLy8gICAgIGNvbnN0IGluZGV4Q3JlYXRlZCA9IGRpdmlzaW9uSFRNTE5vZGUuY3JlYXRlSW5kZXgoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuLy9cbi8vICAgICBpZiAoaW5kZXhDcmVhdGVkKSB7XG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4vLyAgIGRpdmlzaW9uSFRNTE5vZGVzLnNvbWUoKGRpdmlzaW9uSFRNTE5vZGUpID0+IHtcbi8vICAgICBjb25zdCBjb250ZW50c0NyZWF0ZWQgPSBkaXZpc2lvbkhUTUxOb2RlLmNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgaWYgKGNvbnRlbnRzQ3JlYXRlZCkge1xuLy8gICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBjcmVhdGVGb290bm90ZXMoZGl2aXNpb25IVE1MTm9kZXMsIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpIHtcbi8vICAgZGl2aXNpb25IVE1MTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25IVE1MTm9kZSkgPT4ge1xuLy8gICAgIGRpdmlzaW9uSFRNTE5vZGUuY3JlYXRlRm9vdG5vdGVzKGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAsIGNvbnRleHQpO1xuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBwcmVwYXJlRm9vdG5vdGVzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4vLyAgIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnRNYXAgPSB7fTtcbi8vXG4vLyAgIGRpdmlzaW9uSFRNTE5vZGVzLmZvckVhY2goKGRpdmlzaW9uSFRNTE5vZGUpID0+IHtcbi8vICAgICBkaXZpc2lvbkhUTUxOb2RlLnByZXBhcmVGb290bm90ZXMoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCk7XG4vLyAgIH0pO1xuLy9cbi8vICAgcmV0dXJuIGZvb3Rub3RlUmVwbGFjZW1lbnRNYXA7XG4vLyB9XG4vL1xuLy8gZXhwb3J0IGRlZmF1bHQge1xuLy8gICBwb3N0UHJvY2Vzc1xuLy8gfSJdLCJuYW1lcyI6WyJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImZvb3Rub3Rlc0hUTUxOb2Rlc0Zyb21Ob2RlIiwiaGVhZGluZ0hUTUxOb2Rlc0Zyb21Ob2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5IiwiaGVhZGluZ0hUTUxOb2Rlc1F1ZXJ5IiwiZGl2aXNpb25IVE1MTm9kZXNRdWVyeSIsImZvb3Rub3RlSFRNTE5vZGVzUXVlcnkiLCJmb290bm90ZXNIVE1MTm9kZXNRdWVyeSIsImZvb3Rub3RlTGlua0hUTUxOb2Rlc1F1ZXJ5Iiwibm9kZSIsImNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiLCJub2RlRnJvbU5vZGVBbmRRdWVyeSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlIiwiaGVhZGluZ0hUTUxOb2RlcyIsIm5vZGVzRnJvbU5vZGVBbmRRdWVyeSIsImRpdmlzaW9uSFRNTE5vZGVzIiwiZm9vdG5vdGVIVE1MTm9kZXMiLCJmb290bm90ZXNIVE1MTm9kZXMiLCJsaW5rSFRNTE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFlZ0JBLGlDQUFpQztlQUFqQ0E7O0lBZ0RoQixPQVNFO2VBVEYsU0FXQSw0REFBNEQ7U0FDNUQsaUZBQWlGO1NBQ2pGLGdFQUFnRTtTQUNoRSxFQUFFO1NBQ0YsNEVBQTRFO1NBQzVFLEVBQUU7U0FDRix5RUFBeUU7U0FDekUsRUFBRTtTQUNGLGdEQUFnRDtTQUNoRCxFQUFFO1NBQ0YsNkNBQTZDO1NBQzdDLElBQUk7U0FDSixFQUFFO1NBQ0Ysa0RBQWtEO1NBQ2xELDBCQUEwQjtTQUMxQiw4QkFBOEI7U0FDOUIsRUFBRTtTQUNGLDZCQUE2QjtTQUM3QixpQkFBaUI7U0FDakIsUUFBUTtTQUNSLEVBQUU7U0FDRixzREFBc0Q7U0FDdEQseURBQXlEO1NBQ3pELFFBQVE7U0FDUixFQUFFO1NBQ0YsK0JBQStCO1NBQy9CLEVBQUU7U0FDRiwwQkFBMEI7U0FDMUIsSUFBSTtTQUNKLEVBQUU7U0FDRixxREFBcUQ7U0FDckQsbURBQW1EO1NBQ25ELHFGQUFxRjtTQUNyRixFQUFFO1NBQ0YsMEJBQTBCO1NBQzFCLHFCQUFxQjtTQUNyQixRQUFRO1NBQ1IsUUFBUTtTQUNSLElBQUk7U0FDSixFQUFFO1NBQ0Ysd0RBQXdEO1NBQ3hELG1EQUFtRDtTQUNuRCwyRkFBMkY7U0FDM0YsRUFBRTtTQUNGLDZCQUE2QjtTQUM3QixxQkFBcUI7U0FDckIsUUFBUTtTQUNSLFFBQVE7U0FDUixJQUFJO1NBQ0osRUFBRTtTQUNGLGlGQUFpRjtTQUNqRixzREFBc0Q7U0FDdEQseUVBQXlFO1NBQ3pFLFFBQVE7U0FDUixJQUFJ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
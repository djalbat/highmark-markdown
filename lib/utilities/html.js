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
var contentsDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("//contentsDirective"), footnotesDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("/division/footnotesDirective"), pageNumberDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("//pageNumberDirective"), htmlNodesQuery = _occamquery.Query.fromExpressionString("/division/*"), divisionHTMLNodesQuery = _occamquery.Query.fromExpressionString("/html/division"), footnoteHTMLNodesQuery = _occamquery.Query.fromExpressionString("/division/footnote"), footnotesHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnote"), footnoteLinkHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnoteLink"), nestedFootnoteLinkHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnote//footnoteLink");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IHsgbm9kZUZyb21Ob2RlQW5kUXVlcnksIG5vZGVzRnJvbU5vZGVBbmRRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2NvbnRlbnRzRGlyZWN0aXZlXCIpLFxuICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL2RpdmlzaW9uL2Zvb3Rub3Rlc0RpcmVjdGl2ZVwiKSxcbiAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL3BhZ2VOdW1iZXJEaXJlY3RpdmVcIiksXG4gICAgICBodG1sTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL2RpdmlzaW9uLypcIiksXG4gICAgICBkaXZpc2lvbkhUTUxOb2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvaHRtbC9kaXZpc2lvblwiKSxcbiAgICAgIGZvb3Rub3RlSFRNTE5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi9kaXZpc2lvbi9mb290bm90ZVwiKSxcbiAgICAgIGZvb3Rub3Rlc0hUTUxOb2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2Zvb3Rub3RlXCIpLFxuICAgICAgZm9vdG5vdGVMaW5rSFRNTE5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vZm9vdG5vdGVMaW5rXCIpLFxuICAgICAgbmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vZm9vdG5vdGUvL2Zvb3Rub3RlTGlua1wiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUgPSBub2RlRnJvbU5vZGVBbmRRdWVyeShub2RlLCBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlUXVlcnkpO1xuXG4gIHJldHVybiBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gbm9kZUZyb21Ob2RlQW5kUXVlcnkobm9kZSwgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSk7XG5cbiAgcmV0dXJuIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUgPSBub2RlRnJvbU5vZGVBbmRRdWVyeShub2RlLCBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSk7XG5cbiAgcmV0dXJuIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxOb2Rlc0Zyb21Ob2RlKG5vZGUsIGh0bWxOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBodG1sTm9kZXNRdWVyeSwgaHRtbE5vZGVzKTtcblxuICByZXR1cm4gaHRtbE5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZShub2RlLCBkaXZpc2lvbkhUTUxOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBkaXZpc2lvbkhUTUxOb2Rlc1F1ZXJ5LCBkaXZpc2lvbkhUTUxOb2Rlcyk7XG5cbiAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdG5vdGVIVE1MTm9kZXNGcm9tTm9kZShub2RlLCBmb290bm90ZUhUTUxOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBmb290bm90ZUhUTUxOb2Rlc1F1ZXJ5LCBmb290bm90ZUhUTUxOb2Rlcyk7XG5cbiAgcmV0dXJuIGZvb3Rub3RlSFRNTE5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdG5vdGVzSFRNTE5vZGVzRnJvbU5vZGUobm9kZSwgZm9vdG5vdGVzSFRNTE5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGZvb3Rub3Rlc0hUTUxOb2Rlc1F1ZXJ5LCBmb290bm90ZXNIVE1MTm9kZXMpO1xuXG4gIHJldHVybiBmb290bm90ZXNIVE1MTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlLCBsaW5rSFRNTE5vZGVzID0gW10pIHtcbiAgbm9kZXNGcm9tTm9kZUFuZFF1ZXJ5KG5vZGUsIGZvb3Rub3RlTGlua0hUTUxOb2Rlc1F1ZXJ5LCBsaW5rSFRNTE5vZGVzKTtcblxuICByZXR1cm4gbGlua0hUTUxOb2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUsIG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXNRdWVyeSwgbmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKTtcblxuICByZXR1cm4gbmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSxcbiAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSxcbiAgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsXG4gIGRpdmlzaW9uSFRNTE5vZGVzRnJvbU5vZGUsXG4gIGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUsXG4gIGZvb3Rub3Rlc0hUTUxOb2Rlc0Zyb21Ob2RlLFxuICBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSxcbiAgbmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGVcbn07XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBwb3N0UHJvY2VzcyhkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuLy8gICBjb25zdCBmb290bm90ZVJlcGxhY2VtZW50TWFwID0gcHJlcGFyZUZvb3Rub3RlcyhkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCksXG4vLyAgICAgICAgIG1hcmtkb3duTm9kZXMgPSBwYWdpbmF0ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG4vL1xuLy8gICBkaXZpc2lvbkhUTUxOb2RlcyA9IGRpdmlzaW9uSFRNTE5vZGVzRnJvbUhUTUxOb2RlcyhtYXJrZG93bk5vZGVzKTsgIC8vL1xuLy9cbi8vICAgY3JlYXRlRm9vdG5vdGVzKGRpdmlzaW9uSFRNTE5vZGVzLCBmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KTtcbi8vXG4vLyAgIGNyZWF0ZUNvbnRlbnRzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbi8vXG4vLyAgIGNyZWF0ZUluZGV4KGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBwYWdpbmF0ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuLy8gICBjb25zdCBwYWdlTnVtYmVyID0gMSxcbi8vICAgICAgICAgbWFya2Rvd25OT2RlcyA9IFtdO1xuLy9cbi8vICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4vLyAgICAgcGFnZU51bWJlclxuLy8gICB9KTtcbi8vXG4vLyAgIGRpdmlzaW9uSFRNTE5vZGVzLmZvckVhY2goKGRpdmlzaW9uSFRNTE5vZGUpID0+IHtcbi8vICAgICBkaXZpc2lvbkhUTUxOb2RlLnBhZ2luYXRlKG1hcmtkb3duTk9kZXMsIGNvbnRleHQpO1xuLy8gICB9KTtcbi8vXG4vLyAgIGRlbGV0ZSBjb250ZXh0LnBhZ2VOdW1iZXI7XG4vL1xuLy8gICByZXR1cm4gbWFya2Rvd25OT2Rlcztcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBjcmVhdGVJbmRleChkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuLy8gICBkaXZpc2lvbkhUTUxOb2Rlcy5zb21lKChkaXZpc2lvbkhUTUxOb2RlKSA9PiB7XG4vLyAgICAgY29uc3QgaW5kZXhDcmVhdGVkID0gZGl2aXNpb25IVE1MTm9kZS5jcmVhdGVJbmRleChkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG4vL1xuLy8gICAgIGlmIChpbmRleENyZWF0ZWQpIHtcbi8vICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gY3JlYXRlQ29udGVudHMoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbi8vICAgZGl2aXNpb25IVE1MTm9kZXMuc29tZSgoZGl2aXNpb25IVE1MTm9kZSkgPT4ge1xuLy8gICAgIGNvbnN0IGNvbnRlbnRzQ3JlYXRlZCA9IGRpdmlzaW9uSFRNTE5vZGUuY3JlYXRlQ29udGVudHMoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuLy9cbi8vICAgICBpZiAoY29udGVudHNDcmVhdGVkKSB7XG4vLyAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIGNyZWF0ZUZvb3Rub3RlcyhkaXZpc2lvbkhUTUxOb2RlcywgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCkge1xuLy8gICBkaXZpc2lvbkhUTUxOb2Rlcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxOb2RlKSA9PiB7XG4vLyAgICAgZGl2aXNpb25IVE1MTm9kZS5jcmVhdGVGb290bm90ZXMoZm9vdG5vdGVSZXBsYWNlbWVudE1hcCwgY29udGV4dCk7XG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIHByZXBhcmVGb290bm90ZXMoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbi8vICAgY29uc3QgZm9vdG5vdGVSZXBsYWNlbWVudE1hcCA9IHt9O1xuLy9cbi8vICAgZGl2aXNpb25IVE1MTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25IVE1MTm9kZSkgPT4ge1xuLy8gICAgIGRpdmlzaW9uSFRNTE5vZGUucHJlcGFyZUZvb3Rub3Rlcyhmb290bm90ZVJlcGxhY2VtZW50TWFwLCBjb250ZXh0KTtcbi8vICAgfSk7XG4vL1xuLy8gICByZXR1cm4gZm9vdG5vdGVSZXBsYWNlbWVudE1hcDtcbi8vIH1cbi8vXG4vLyBleHBvcnQgZGVmYXVsdCB7XG4vLyAgIHBvc3RQcm9jZXNzXG4vLyB9Il0sIm5hbWVzIjpbImNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImRpdmlzaW9uSFRNTE5vZGVzRnJvbU5vZGUiLCJmb290bm90ZUhUTUxOb2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiZm9vdG5vdGVzSFRNTE5vZGVzRnJvbU5vZGUiLCJodG1sTm9kZXNGcm9tTm9kZSIsIm5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5IiwiaHRtbE5vZGVzUXVlcnkiLCJkaXZpc2lvbkhUTUxOb2Rlc1F1ZXJ5IiwiZm9vdG5vdGVIVE1MTm9kZXNRdWVyeSIsImZvb3Rub3Rlc0hUTUxOb2Rlc1F1ZXJ5IiwiZm9vdG5vdGVMaW5rSFRNTE5vZGVzUXVlcnkiLCJuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXNRdWVyeSIsIm5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlIiwibm9kZUZyb21Ob2RlQW5kUXVlcnkiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSIsImh0bWxOb2RlcyIsIm5vZGVzRnJvbU5vZGVBbmRRdWVyeSIsImRpdmlzaW9uSFRNTE5vZGVzIiwiZm9vdG5vdGVIVE1MTm9kZXMiLCJmb290bm90ZXNIVE1MTm9kZXMiLCJsaW5rSFRNTE5vZGVzIiwibmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFnQmdCQSxpQ0FBaUM7ZUFBakNBOztJQXNEaEIsT0FTRTtlQVRGLFNBV0EsNERBQTREO1NBQzVELGlGQUFpRjtTQUNqRixnRUFBZ0U7U0FDaEUsRUFBRTtTQUNGLDRFQUE0RTtTQUM1RSxFQUFFO1NBQ0YseUVBQXlFO1NBQ3pFLEVBQUU7U0FDRixnREFBZ0Q7U0FDaEQsRUFBRTtTQUNGLDZDQUE2QztTQUM3QyxJQUFJO1NBQ0osRUFBRTtTQUNGLGtEQUFrRDtTQUNsRCwwQkFBMEI7U0FDMUIsOEJBQThCO1NBQzlCLEVBQUU7U0FDRiw2QkFBNkI7U0FDN0IsaUJBQWlCO1NBQ2pCLFFBQVE7U0FDUixFQUFFO1NBQ0Ysc0RBQXNEO1NBQ3RELHlEQUF5RDtTQUN6RCxRQUFRO1NBQ1IsRUFBRTtTQUNGLCtCQUErQjtTQUMvQixF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
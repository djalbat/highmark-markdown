"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get contentsDirectiveHTMLNodeFromNode () {
        return contentsDirectiveHTMLNodeFromNode;
    },
    get default () {
        return _default;
    },
    get divisionHTMLNodesFromNode () {
        return divisionHTMLNodesFromNode;
    },
    get footnoteHTMLNodesFromNode () {
        return footnoteHTMLNodesFromNode;
    },
    get footnoteLinkHTMLNodesFromNode () {
        return footnoteLinkHTMLNodesFromNode;
    },
    get footnotesDirectiveHTMLNodeFromNode () {
        return footnotesDirectiveHTMLNodeFromNode;
    },
    get footnotesHTMLNodesFromNode () {
        return footnotesHTMLNodesFromNode;
    },
    get headingHTMLNodesFromNode () {
        return headingHTMLNodesFromNode;
    },
    get htmlNodesFromNode () {
        return htmlNodesFromNode;
    },
    get indexDirectiveHTMLNodeFromNode () {
        return indexDirectiveHTMLNodeFromNode;
    },
    get nestedFootnoteLinkHTMLNodesFromNode () {
        return nestedFootnoteLinkHTMLNodesFromNode;
    },
    get pageNumberDirectiveHTMLNodeFromNode () {
        return pageNumberDirectiveHTMLNodeFromNode;
    }
});
var _occamquery = require("occam-query");
var _query = require("../utilities/query");
var indexDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("//indexDirective"), contentsDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("//contentsDirective"), footnotesDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("/division/footnotesDirective"), pageNumberDirectiveHTMLNodeQuery = _occamquery.Query.fromExpressionString("//pageNumberDirective"), htmlNodesQuery = _occamquery.Query.fromExpressionString("/division/*"), headingHTMLNodesQuery = _occamquery.Query.fromExpressionString("//primaryHeading|secondaryHeading|tertiaryHeading|tertiaryHeading"), divisionHTMLNodesQuery = _occamquery.Query.fromExpressionString("/html/division"), footnoteHTMLNodesQuery = _occamquery.Query.fromExpressionString("/division/footnote"), footnotesHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnote"), footnoteLinkHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnoteLink"), nestedFootnoteLinkHTMLNodesQuery = _occamquery.Query.fromExpressionString("//footnote//footnoteLink");
function indexDirectiveHTMLNodeFromNode(node) {
    var indexDirectiveHTMLNode = (0, _query.nodeFromNodeAndQuery)(node, indexDirectiveHTMLNodeQuery);
    return indexDirectiveHTMLNode;
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
function htmlNodesFromNode(node) {
    var htmlNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, htmlNodesQuery, htmlNodes);
    return htmlNodes;
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
function nestedFootnoteLinkHTMLNodesFromNode(node) {
    var nestedFootnoteLinkHTMLNodes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    (0, _query.nodesFromNodeAndQuery)(node, nestedFootnoteLinkHTMLNodesQuery, nestedFootnoteLinkHTMLNodes);
    return nestedFootnoteLinkHTMLNodes;
}
var _default = {
    indexDirectiveHTMLNodeFromNode: indexDirectiveHTMLNodeFromNode,
    contentsDirectiveHTMLNodeFromNode: contentsDirectiveHTMLNodeFromNode,
    footnotesDirectiveHTMLNodeFromNode: footnotesDirectiveHTMLNodeFromNode,
    pageNumberDirectiveHTMLNodeFromNode: pageNumberDirectiveHTMLNodeFromNode,
    htmlNodesFromNode: htmlNodesFromNode,
    headingHTMLNodesFromNode: headingHTMLNodesFromNode,
    divisionHTMLNodesFromNode: divisionHTMLNodesFromNode,
    footnoteHTMLNodesFromNode: footnoteHTMLNodesFromNode,
    footnotesHTMLNodesFromNode: footnotesHTMLNodesFromNode,
    footnoteLinkHTMLNodesFromNode: footnoteLinkHTMLNodesFromNode,
    nestedFootnoteLinkHTMLNodesFromNode: nestedFootnoteLinkHTMLNodesFromNode
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IHsgbm9kZUZyb21Ob2RlQW5kUXVlcnksIG5vZGVzRnJvbU5vZGVBbmRRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgaW5kZXhEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2luZGV4RGlyZWN0aXZlXCIpLFxuICAgICAgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2NvbnRlbnRzRGlyZWN0aXZlXCIpLFxuICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL2RpdmlzaW9uL2Zvb3Rub3Rlc0RpcmVjdGl2ZVwiKSxcbiAgICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL3BhZ2VOdW1iZXJEaXJlY3RpdmVcIiksXG4gICAgICBodG1sTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL2RpdmlzaW9uLypcIiksXG4gICAgICBoZWFkaW5nSFRNTE5vZGVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vcHJpbWFyeUhlYWRpbmd8c2Vjb25kYXJ5SGVhZGluZ3x0ZXJ0aWFyeUhlYWRpbmd8dGVydGlhcnlIZWFkaW5nXCIpLFxuICAgICAgZGl2aXNpb25IVE1MTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL2h0bWwvZGl2aXNpb25cIiksXG4gICAgICBmb290bm90ZUhUTUxOb2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvZGl2aXNpb24vZm9vdG5vdGVcIiksXG4gICAgICBmb290bm90ZXNIVE1MTm9kZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy9mb290bm90ZVwiKSxcbiAgICAgIGZvb3Rub3RlTGlua0hUTUxOb2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2Zvb3Rub3RlTGlua1wiKSxcbiAgICAgIG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2Zvb3Rub3RlLy9mb290bm90ZUxpbmtcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleERpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBpbmRleERpcmVjdGl2ZUhUTUxOb2RlID0gbm9kZUZyb21Ob2RlQW5kUXVlcnkobm9kZSwgaW5kZXhEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5KTtcblxuICByZXR1cm4gaW5kZXhEaXJlY3RpdmVIVE1MTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUgPSBub2RlRnJvbU5vZGVBbmRRdWVyeShub2RlLCBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlUXVlcnkpO1xuXG4gIHJldHVybiBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlID0gbm9kZUZyb21Ob2RlQW5kUXVlcnkobm9kZSwgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSk7XG5cbiAgcmV0dXJuIGZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUgPSBub2RlRnJvbU5vZGVBbmRRdWVyeShub2RlLCBwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVRdWVyeSk7XG5cbiAgcmV0dXJuIHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxOb2Rlc0Zyb21Ob2RlKG5vZGUsIGh0bWxOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBodG1sTm9kZXNRdWVyeSwgaHRtbE5vZGVzKTtcblxuICByZXR1cm4gaHRtbE5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhZGluZ0hUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUsIGhlYWRpbmdIVE1MTm9kZXMgPSBbXSkge1xuICBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkobm9kZSwgaGVhZGluZ0hUTUxOb2Rlc1F1ZXJ5LCBoZWFkaW5nSFRNTE5vZGVzKTtcblxuICByZXR1cm4gaGVhZGluZ0hUTUxOb2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlzaW9uSFRNTE5vZGVzRnJvbU5vZGUobm9kZSwgZGl2aXNpb25IVE1MTm9kZXMgPSBbXSkge1xuICBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkobm9kZSwgZGl2aXNpb25IVE1MTm9kZXNRdWVyeSwgZGl2aXNpb25IVE1MTm9kZXMpO1xuXG4gIHJldHVybiBkaXZpc2lvbkhUTUxOb2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUobm9kZSwgZm9vdG5vdGVIVE1MTm9kZXMgPSBbXSkge1xuICBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkobm9kZSwgZm9vdG5vdGVIVE1MTm9kZXNRdWVyeSwgZm9vdG5vdGVIVE1MTm9kZXMpO1xuXG4gIHJldHVybiBmb290bm90ZUhUTUxOb2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvb3Rub3Rlc0hUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUsIGZvb3Rub3Rlc0hUTUxOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBmb290bm90ZXNIVE1MTm9kZXNRdWVyeSwgZm9vdG5vdGVzSFRNTE5vZGVzKTtcblxuICByZXR1cm4gZm9vdG5vdGVzSFRNTE5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUobm9kZSwgbGlua0hUTUxOb2RlcyA9IFtdKSB7XG4gIG5vZGVzRnJvbU5vZGVBbmRRdWVyeShub2RlLCBmb290bm90ZUxpbmtIVE1MTm9kZXNRdWVyeSwgbGlua0hUTUxOb2Rlcyk7XG5cbiAgcmV0dXJuIGxpbmtIVE1MTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZShub2RlLCBuZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMgPSBbXSkge1xuICBub2Rlc0Zyb21Ob2RlQW5kUXVlcnkobm9kZSwgbmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzUXVlcnksIG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlcyk7XG5cbiAgcmV0dXJuIG5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbmRleERpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsXG4gIGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSxcbiAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSxcbiAgcGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUsXG4gIGh0bWxOb2Rlc0Zyb21Ob2RlLFxuICBoZWFkaW5nSFRNTE5vZGVzRnJvbU5vZGUsXG4gIGRpdmlzaW9uSFRNTE5vZGVzRnJvbU5vZGUsXG4gIGZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUsXG4gIGZvb3Rub3Rlc0hUTUxOb2Rlc0Zyb21Ob2RlLFxuICBmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSxcbiAgbmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGVcbn07XG4iXSwibmFtZXMiOlsiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3RlSFRNTE5vZGVzRnJvbU5vZGUiLCJmb290bm90ZUxpbmtIVE1MTm9kZXNGcm9tTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJmb290bm90ZXNIVE1MTm9kZXNGcm9tTm9kZSIsImhlYWRpbmdIVE1MTm9kZXNGcm9tTm9kZSIsImh0bWxOb2Rlc0Zyb21Ob2RlIiwiaW5kZXhEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwibmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImluZGV4RGlyZWN0aXZlSFRNTE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlUXVlcnkiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZVF1ZXJ5IiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlUXVlcnkiLCJodG1sTm9kZXNRdWVyeSIsImhlYWRpbmdIVE1MTm9kZXNRdWVyeSIsImRpdmlzaW9uSFRNTE5vZGVzUXVlcnkiLCJmb290bm90ZUhUTUxOb2Rlc1F1ZXJ5IiwiZm9vdG5vdGVzSFRNTE5vZGVzUXVlcnkiLCJmb290bm90ZUxpbmtIVE1MTm9kZXNRdWVyeSIsIm5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2Rlc1F1ZXJ5Iiwibm9kZSIsImluZGV4RGlyZWN0aXZlSFRNTE5vZGUiLCJub2RlRnJvbU5vZGVBbmRRdWVyeSIsImNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsInBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSIsImh0bWxOb2RlcyIsIm5vZGVzRnJvbU5vZGVBbmRRdWVyeSIsImhlYWRpbmdIVE1MTm9kZXMiLCJkaXZpc2lvbkhUTUxOb2RlcyIsImZvb3Rub3RlSFRNTE5vZGVzIiwiZm9vdG5vdGVzSFRNTE5vZGVzIiwibGlua0hUTUxOb2RlcyIsIm5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBd0JnQkE7ZUFBQUE7O1FBNERoQjtlQUFBOztRQTlCZ0JDO2VBQUFBOztRQU1BQztlQUFBQTs7UUFZQUM7ZUFBQUE7O1FBMUNBQztlQUFBQTs7UUFvQ0FDO2VBQUFBOztRQWxCQUM7ZUFBQUE7O1FBTkFDO2VBQUFBOztRQXhCQUM7ZUFBQUE7O1FBNERBQztlQUFBQTs7UUExQ0FDO2VBQUFBOzs7MEJBbENNO3FCQUVzQztBQUU1RCxJQUFNQyw4QkFBOEJDLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLHFCQUN6REMsaUNBQWlDRixpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyx3QkFDNURFLGtDQUFrQ0gsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsaUNBQzdERyxtQ0FBbUNKLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLDBCQUM5REksaUJBQWlCTCxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyxnQkFDNUNLLHdCQUF3Qk4saUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsc0VBQ25ETSx5QkFBeUJQLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLG1CQUNwRE8seUJBQXlCUixpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyx1QkFDcERRLDBCQUEwQlQsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsZUFDckRTLDZCQUE2QlYsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsbUJBQ3hEVSxtQ0FBbUNYLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDO0FBRTdELFNBQVNMLCtCQUErQmdCLElBQUk7SUFDakQsSUFBTUMseUJBQXlCQyxJQUFBQSwyQkFBb0IsRUFBQ0YsTUFBTWI7SUFFMUQsT0FBT2M7QUFDVDtBQUVPLFNBQVN6QixrQ0FBa0N3QixJQUFJO0lBQ3BELElBQU1HLDRCQUE0QkQsSUFBQUEsMkJBQW9CLEVBQUNGLE1BQU1WO0lBRTdELE9BQU9hO0FBQ1Q7QUFFTyxTQUFTdkIsbUNBQW1Db0IsSUFBSTtJQUNyRCxJQUFNSSw2QkFBNkJGLElBQUFBLDJCQUFvQixFQUFDRixNQUFNVDtJQUU5RCxPQUFPYTtBQUNUO0FBRU8sU0FBU2xCLG9DQUFvQ2MsSUFBSTtJQUN0RCxJQUFNSyw4QkFBOEJILElBQUFBLDJCQUFvQixFQUFDRixNQUFNUjtJQUUvRCxPQUFPYTtBQUNUO0FBRU8sU0FBU3RCLGtCQUFrQmlCLElBQUk7UUFBRU0sWUFBQUEsaUVBQVksRUFBRTtJQUNwREMsSUFBQUEsNEJBQXFCLEVBQUNQLE1BQU1QLGdCQUFnQmE7SUFFNUMsT0FBT0E7QUFDVDtBQUVPLFNBQVN4Qix5QkFBeUJrQixJQUFJO1FBQUVRLG1CQUFBQSxpRUFBbUIsRUFBRTtJQUNsRUQsSUFBQUEsNEJBQXFCLEVBQUNQLE1BQU1OLHVCQUF1QmM7SUFFbkQsT0FBT0E7QUFDVDtBQUVPLFNBQVMvQiwwQkFBMEJ1QixJQUFJO1FBQUVTLG9CQUFBQSxpRUFBb0IsRUFBRTtJQUNwRUYsSUFBQUEsNEJBQXFCLEVBQUNQLE1BQU1MLHdCQUF3QmM7SUFFcEQsT0FBT0E7QUFDVDtBQUVPLFNBQVMvQiwwQkFBMEJzQixJQUFJO1FBQUVVLG9CQUFBQSxpRUFBb0IsRUFBRTtJQUNwRUgsSUFBQUEsNEJBQXFCLEVBQUNQLE1BQU1KLHdCQUF3QmM7SUFFcEQsT0FBT0E7QUFDVDtBQUVPLFNBQVM3QiwyQkFBMkJtQixJQUFJO1FBQUVXLHFCQUFBQSxpRUFBcUIsRUFBRTtJQUN0RUosSUFBQUEsNEJBQXFCLEVBQUNQLE1BQU1ILHlCQUF5QmM7SUFFckQsT0FBT0E7QUFDVDtBQUVPLFNBQVNoQyw4QkFBOEJxQixJQUFJO1FBQUVZLGdCQUFBQSxpRUFBZ0IsRUFBRTtJQUNwRUwsSUFBQUEsNEJBQXFCLEVBQUNQLE1BQU1GLDRCQUE0QmM7SUFFeEQsT0FBT0E7QUFDVDtBQUVPLFNBQVMzQixvQ0FBb0NlLElBQUk7UUFBRWEsOEJBQUFBLGlFQUE4QixFQUFFO0lBQ3hGTixJQUFBQSw0QkFBcUIsRUFBQ1AsTUFBTUQsa0NBQWtDYztJQUU5RCxPQUFPQTtBQUNUO0lBRUEsV0FBZTtJQUNiN0IsZ0NBQUFBO0lBQ0FSLG1DQUFBQTtJQUNBSSxvQ0FBQUE7SUFDQU0scUNBQUFBO0lBQ0FILG1CQUFBQTtJQUNBRCwwQkFBQUE7SUFDQUwsMkJBQUFBO0lBQ0FDLDJCQUFBQTtJQUNBRyw0QkFBQUE7SUFDQUYsK0JBQUFBO0lBQ0FNLHFDQUFBQTtBQUNGIn0=
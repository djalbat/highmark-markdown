"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _comma = /*#__PURE__*/ _interop_require_default(require("./node/html/comma"));
var _anchor = /*#__PURE__*/ _interop_require_default(require("./node/html/anchor"));
var _className = /*#__PURE__*/ _interop_require_default(require("./node/html/className"));
var _blockLine = /*#__PURE__*/ _interop_require_default(require("./node/html/blockLine"));
var _ordered = /*#__PURE__*/ _interop_require_default(require("./node/html/item/ordered"));
var _contentsLink = /*#__PURE__*/ _interop_require_default(require("./node/html/contentsLink"));
var _blockListing = /*#__PURE__*/ _interop_require_default(require("./node/html/blockListing"));
var _blockListingEnd = /*#__PURE__*/ _interop_require_default(require("./node/html/blockListingEnd"));
var _blockListingStart = /*#__PURE__*/ _interop_require_default(require("./node/html/blockListingStart"));
var _pageNumber = /*#__PURE__*/ _interop_require_default(require("./node/html/directive/pageNumber"));
var _ruleNames = require("./ruleNames");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _obj;
var ruleNameToClassMap = (_obj = {}, _define_property(_obj, _ruleNames.COMMA_RULE_NAME, _comma.default), _define_property(_obj, _ruleNames.ANCHOR_RULE_NAME, _anchor.default), _define_property(_obj, _ruleNames.CLASS_NAME_RULE_NAME, _className.default), _define_property(_obj, _ruleNames.BLOCK_LINE_RULE_NAME, _blockLine.default), _define_property(_obj, _ruleNames.ORDERED_ITEM_RULE_NAME, _ordered.default), _define_property(_obj, _ruleNames.CONTENTS_LINK_RULE_NAME, _contentsLink.default), _define_property(_obj, _ruleNames.BLOCK_LISTING_RULE_NAME, _blockListing.default), _define_property(_obj, _ruleNames.BLOCK_LISTING_END_RULE_NAME, _blockListingEnd.default), _define_property(_obj, _ruleNames.BLOCK_LISTING_START_RULE_NAME, _blockListingStart.default), _define_property(_obj, _ruleNames.PAGE_NUMBER_DIRECTIVE_RULE_NAME, _pageNumber.default), _obj);
var _default = ruleNameToClassMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlTmFtZVRvQ2xhc3NNYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb21tYUhUTUxOb2RlIGZyb20gXCIuL25vZGUvaHRtbC9jb21tYVwiO1xuaW1wb3J0IEFuY2hvckhUTUxOb2RlIGZyb20gXCIuL25vZGUvaHRtbC9hbmNob3JcIjtcbmltcG9ydCBDbGFzc05hbWVIVE1MTm9kZSBmcm9tIFwiLi9ub2RlL2h0bWwvY2xhc3NOYW1lXCI7XG5pbXBvcnQgQmxvY2tMaW5lSFRNTE5vZGUgZnJvbSBcIi4vbm9kZS9odG1sL2Jsb2NrTGluZVwiO1xuaW1wb3J0IE9yZGVyZWRJdGVtSFRNTE5vZGUgZnJvbSBcIi4vbm9kZS9odG1sL2l0ZW0vb3JkZXJlZFwiO1xuaW1wb3J0IENvbnRlbnRzTGlua0hUTUxOb2RlIGZyb20gXCIuL25vZGUvaHRtbC9jb250ZW50c0xpbmtcIjtcbmltcG9ydCBCbG9ja0xpc3RpbmdIVE1MTm9kZSBmcm9tIFwiLi9ub2RlL2h0bWwvYmxvY2tMaXN0aW5nXCI7XG5pbXBvcnQgQmxvY2tMaXN0aW5nSEVuZEhUTUxOb2RlIGZyb20gXCIuL25vZGUvaHRtbC9ibG9ja0xpc3RpbmdFbmRcIjtcbmltcG9ydCBCbG9ja0xpc3RpbmdIU3RhcnRIVE1MTm9kZSBmcm9tIFwiLi9ub2RlL2h0bWwvYmxvY2tMaXN0aW5nU3RhcnRcIjtcbmltcG9ydCBQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUgZnJvbSBcIi4vbm9kZS9odG1sL2RpcmVjdGl2ZS9wYWdlTnVtYmVyXCI7XG5cbmltcG9ydCB7IENPTU1BX1JVTEVfTkFNRSxcbiAgICAgICAgIEFOQ0hPUl9SVUxFX05BTUUsXG4gICAgICAgICBDTEFTU19OQU1FX1JVTEVfTkFNRSxcbiAgICAgICAgIEJMT0NLX0xJTkVfUlVMRV9OQU1FLFxuICAgICAgICAgT1JERVJFRF9JVEVNX1JVTEVfTkFNRSxcbiAgICAgICAgIENPTlRFTlRTX0xJTktfUlVMRV9OQU1FLFxuICAgICAgICAgQkxPQ0tfTElTVElOR19SVUxFX05BTUUsXG4gICAgICAgICBCTE9DS19MSVNUSU5HX0VORF9SVUxFX05BTUUsXG4gICAgICAgICBCTE9DS19MSVNUSU5HX1NUQVJUX1JVTEVfTkFNRSxcbiAgICAgICAgIFBBR0VfTlVNQkVSX0RJUkVDVElWRV9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgcnVsZU5hbWVUb0NsYXNzTWFwID0ge1xuICBbQ09NTUFfUlVMRV9OQU1FXTogQ29tbWFIVE1MTm9kZSxcbiAgW0FOQ0hPUl9SVUxFX05BTUVdOiBBbmNob3JIVE1MTm9kZSxcbiAgW0NMQVNTX05BTUVfUlVMRV9OQU1FXTogQ2xhc3NOYW1lSFRNTE5vZGUsXG4gIFtCTE9DS19MSU5FX1JVTEVfTkFNRV06IEJsb2NrTGluZUhUTUxOb2RlLFxuICBbT1JERVJFRF9JVEVNX1JVTEVfTkFNRV06IE9yZGVyZWRJdGVtSFRNTE5vZGUsXG4gIFtDT05URU5UU19MSU5LX1JVTEVfTkFNRV06IENvbnRlbnRzTGlua0hUTUxOb2RlLFxuICBbQkxPQ0tfTElTVElOR19SVUxFX05BTUVdOiBCbG9ja0xpc3RpbmdIVE1MTm9kZSxcbiAgW0JMT0NLX0xJU1RJTkdfRU5EX1JVTEVfTkFNRV06IEJsb2NrTGlzdGluZ0hFbmRIVE1MTm9kZSxcbiAgW0JMT0NLX0xJU1RJTkdfU1RBUlRfUlVMRV9OQU1FXTogQmxvY2tMaXN0aW5nSFN0YXJ0SFRNTE5vZGUsXG4gIFtQQUdFX05VTUJFUl9ESVJFQ1RJVkVfUlVMRV9OQU1FXTogUGFnZU51bWJlckRpcmVjdGl2ZUhUTUxOb2RlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJ1bGVOYW1lVG9DbGFzc01hcDtcbiJdLCJuYW1lcyI6WyJydWxlTmFtZVRvQ2xhc3NNYXAiLCJDT01NQV9SVUxFX05BTUUiLCJDb21tYUhUTUxOb2RlIiwiQU5DSE9SX1JVTEVfTkFNRSIsIkFuY2hvckhUTUxOb2RlIiwiQ0xBU1NfTkFNRV9SVUxFX05BTUUiLCJDbGFzc05hbWVIVE1MTm9kZSIsIkJMT0NLX0xJTkVfUlVMRV9OQU1FIiwiQmxvY2tMaW5lSFRNTE5vZGUiLCJPUkRFUkVEX0lURU1fUlVMRV9OQU1FIiwiT3JkZXJlZEl0ZW1IVE1MTm9kZSIsIkNPTlRFTlRTX0xJTktfUlVMRV9OQU1FIiwiQ29udGVudHNMaW5rSFRNTE5vZGUiLCJCTE9DS19MSVNUSU5HX1JVTEVfTkFNRSIsIkJsb2NrTGlzdGluZ0hUTUxOb2RlIiwiQkxPQ0tfTElTVElOR19FTkRfUlVMRV9OQU1FIiwiQmxvY2tMaXN0aW5nSEVuZEhUTUxOb2RlIiwiQkxPQ0tfTElTVElOR19TVEFSVF9SVUxFX05BTUUiLCJCbG9ja0xpc3RpbmdIU3RhcnRIVE1MTm9kZSIsIlBBR0VfTlVNQkVSX0RJUkVDVElWRV9SVUxFX05BTUUiLCJQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFDQTs7O2VBQUE7Ozs0REFuQzBCOzZEQUNDO2dFQUNHO2dFQUNBOzhEQUNFO21FQUNDO21FQUNBO3NFQUNJO3dFQUNFO2lFQUNDO3lCQVdROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJCO0FBQTNCLElBQU1BLHNCQUFxQixXQUN6QixpQkFEeUIsTUFDeEJDLDBCQUFlLEVBQUdDLGNBQWEsR0FDaEMsaUJBRnlCLE1BRXhCQywyQkFBZ0IsRUFBR0MsZUFBYyxHQUNsQyxpQkFIeUIsTUFHeEJDLCtCQUFvQixFQUFHQyxrQkFBaUIsR0FDekMsaUJBSnlCLE1BSXhCQywrQkFBb0IsRUFBR0Msa0JBQWlCLEdBQ3pDLGlCQUx5QixNQUt4QkMsaUNBQXNCLEVBQUdDLGdCQUFtQixHQUM3QyxpQkFOeUIsTUFNeEJDLGtDQUF1QixFQUFHQyxxQkFBb0IsR0FDL0MsaUJBUHlCLE1BT3hCQyxrQ0FBdUIsRUFBR0MscUJBQW9CLEdBQy9DLGlCQVJ5QixNQVF4QkMsc0NBQTJCLEVBQUdDLHdCQUF3QixHQUN2RCxpQkFUeUIsTUFTeEJDLHdDQUE2QixFQUFHQywwQkFBMEIsR0FDM0QsaUJBVnlCLE1BVXhCQywwQ0FBK0IsRUFBR0MsbUJBQTJCLEdBVnJDO0lBYTNCLFdBQWVwQiJ9
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ImportMarkdownNode;
    }
});
var _necessary = require("necessary");
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _tokens = require("../../utilities/tokens");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var fourth = _necessary.arrayUtilities.fourth;
var ImportMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(ImportMarkdownNode, MarkdownNode);
    var _super = _create_super(ImportMarkdownNode);
    function ImportMarkdownNode() {
        _class_call_check(this, ImportMarkdownNode);
        return _super.apply(this, arguments);
    }
    _create_class(ImportMarkdownNode, [
        {
            key: "resolveImports",
            value: function resolveImports(parentNode, context) {
                var html = null;
                var _context_importer = context.importer, importer = _context_importer === void 0 ? null : _context_importer;
                if (importer !== null) {
                    var tokens = context.tokens, filePath = this.filePath(context);
                    importer(filePath, context);
                    var tmp = context.node, importedNode = tmp === void 0 ? null : tmp, tmp1 = context.tokens, importedTokens = tmp1 === void 0 ? null : tmp1, tmp2 = context.className, divisionClassName = tmp2 === void 0 ? null : tmp2;
                    Object.assign(context, {
                        tokens: tokens
                    });
                    delete context.node;
                    delete context.className;
                    if (importedNode !== null) {
                        var replacedChildNode = this, replacementTokens = importedTokens, replacementChildNode = importedNode; ///
                        parentNode.replaceChildNode(replacedChildNode, replacementChildNode);
                        (0, _tokens.replaceTokens)(replacedChildNode, replacementTokens, context);
                        parentNode = this; ///
                        var divisionMarkdownNode = importedNode; ///
                        divisionMarkdownNode.setDivisionClassName(divisionClassName);
                        divisionMarkdownNode.resolveImports(parentNode, context);
                    }
                }
                return html;
            }
        },
        {
            key: "filePath",
            value: function filePath(context) {
                var childNodes = this.getChildNodes(), fourthChildNode = fourth(childNodes), pathTerminalNode = fourthChildNode, pathTerminalNodeContent = pathTerminalNode.getContent(), filePath = pathTerminalNodeContent; ///
                return filePath;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(ImportMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return ImportMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltcG9ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgcmVwbGFjZVRva2VucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5cbmNvbnN0IHsgZm91cnRoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1wb3J0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgcmVzb2x2ZUltcG9ydHMocGFyZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBodG1sID0gbnVsbDtcblxuICAgIGNvbnN0IHsgaW1wb3J0ZXIgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgaWYgKGltcG9ydGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgICAgICAgICAgIGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aChjb250ZXh0KTtcblxuICAgICAgaW1wb3J0ZXIoZmlsZVBhdGgsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB7IG5vZGU6IGltcG9ydGVkTm9kZSA9IG51bGwsXG4gICAgICAgICAgICAgIHRva2VuczogaW1wb3J0ZWRUb2tlbnMgPSBudWxsLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCB9ID0gY29udGV4dDtcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHRva2Vuc1xuICAgICAgfSk7XG5cbiAgICAgIGRlbGV0ZSBjb250ZXh0Lm5vZGU7XG4gICAgICBkZWxldGUgY29udGV4dC5jbGFzc05hbWU7XG5cbiAgICAgIGlmIChpbXBvcnRlZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRUb2tlbnMgPSBpbXBvcnRlZFRva2VucywgLy8vXG4gICAgICAgICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gaW1wb3J0ZWROb2RlOyAgLy8vXG5cbiAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZSk7XG5cbiAgICAgICAgcmVwbGFjZVRva2VucyhyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRUb2tlbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIHBhcmVudE5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBpbXBvcnRlZE5vZGU7ICAvLy9cblxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5zZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUltcG9ydHMocGFyZW50Tm9kZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBmaWxlUGF0aChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZvdXJ0aENoaWxkTm9kZSA9IGZvdXJ0aChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBwYXRoVGVybWluYWxOb2RlICA9IGZvdXJ0aENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgcGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwYXRoVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IHBhdGhUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBmaWxlUGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEltcG9ydE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiSW1wb3J0TWFya2Rvd25Ob2RlIiwiZm91cnRoIiwiYXJyYXlVdGlsaXRpZXMiLCJyZXNvbHZlSW1wb3J0cyIsInBhcmVudE5vZGUiLCJjb250ZXh0IiwiaHRtbCIsImltcG9ydGVyIiwidG9rZW5zIiwiZmlsZVBhdGgiLCJpbXBvcnRlZE5vZGUiLCJub2RlIiwiaW1wb3J0ZWRUb2tlbnMiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInJlcGxhY2VkQ2hpbGROb2RlIiwicmVwbGFjZW1lbnRUb2tlbnMiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlVG9rZW5zIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm91cnRoQ2hpbGROb2RlIiwicGF0aFRlcm1pbmFsTm9kZSIsInBhdGhUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsrREFFTjtzQkFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVPLElBQUEsQUFBTUQsbUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFVBQVUsRUFBRUMsT0FBTztnQkFDaEMsSUFBSUMsT0FBTztnQkFFWCx3QkFBNEJELFFBQXBCRSxVQUFBQSwwQ0FBVztnQkFFbkIsSUFBSUEsYUFBYSxNQUFNO29CQUNyQixJQUFNLEFBQUVDLFNBQVdILFFBQVhHLFFBQ0ZDLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNKO29CQUUvQkUsU0FBU0UsVUFBVUo7b0JBRW5CLElBQWNLLE1BRWtDTCxRQUZ4Q00sTUFBTUQsZUFBQUEsaUJBQWUsT0FBZkEsS0FDRUUsT0FDZ0NQLFFBRHhDRyxRQUFRSSxpQkFBQUEsa0JBQWlCLE9BQWpCQSxNQUNHQyxPQUE2QlIsUUFBeENTLFdBQVdELG9CQUFBQSxrQkFBb0IsT0FBcEJBO29CQUVuQkUsT0FBT0MsTUFBTSxDQUFDWCxTQUFTO3dCQUNyQkcsUUFBQUE7b0JBQ0Y7b0JBRUEsT0FBT0gsUUFBUU0sSUFBSTtvQkFDbkIsT0FBT04sUUFBUVMsU0FBUztvQkFFeEIsSUFBSUosaUJBQWlCLE1BQU07d0JBQ3pCLElBQU1PLG9CQUFvQixJQUFJLEVBQ3hCQyxvQkFBb0JOLGdCQUNwQk8sdUJBQXVCVCxjQUFlLEdBQUc7d0JBRS9DTixXQUFXZ0IsZ0JBQWdCLENBQUNILG1CQUFtQkU7d0JBRS9DRSxJQUFBQSxxQkFBYSxFQUFDSixtQkFBbUJDLG1CQUFtQmI7d0JBRXBERCxhQUFhLElBQUksRUFBRyxHQUFHO3dCQUV2QixJQUFNa0IsdUJBQXVCWixjQUFlLEdBQUc7d0JBRS9DWSxxQkFBcUJDLG9CQUFvQixDQUFDVjt3QkFFMUNTLHFCQUFxQm5CLGNBQWMsQ0FBQ0MsWUFBWUM7b0JBQ2xEO2dCQUNGO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0osT0FBTztnQkFDZCxJQUFNbUIsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQnpCLE9BQU91QixhQUN6QkcsbUJBQW9CRCxpQkFDcEJFLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEcEIsV0FBV21CLHlCQUF5QixHQUFHO2dCQUU3QyxPQUFPbkI7WUFDVDs7OztZQUVPcUIsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVQLFVBQVUsRUFBRVEsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxnQ0FBZ0MsQ0F2RDFHOUIsb0JBdUQrSCtCLFVBQVVQLFlBQVlRO1lBQVU7OztXQXZEL0poQztFQUEyQmlDLGlCQUFZIn0=
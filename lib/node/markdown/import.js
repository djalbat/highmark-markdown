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
var push = _necessary.arrayUtilities.push, fourth = _necessary.arrayUtilities.fourth;
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
            value: function resolveImports(context) {
                var html = null;
                var _context_importer = context.importer, importer = _context_importer === void 0 ? null : _context_importer;
                if (importer !== null) {
                    var filePath = this.filePath(context);
                    importer(filePath, context);
                    var _context_importedNode = context.importedNode, importedNode = _context_importedNode === void 0 ? null : _context_importedNode, _context_importedTokens = context.importedTokens, importedTokens = _context_importedTokens === void 0 ? null : _context_importedTokens, _context_importedClassName = context.importedClassName, importedClassName = _context_importedClassName === void 0 ? null : _context_importedClassName;
                    delete context.importedNode;
                    delete context.importedTokens;
                    delete context.importedClassName;
                    if (importedNode !== null) {
                        var tokens = context.tokens, divisionMarkdownNodes = context.divisionMarkdownNodes, divisionMarkdownNode = importedNode, divisionClassName = importedClassName, ignored = divisionMarkdownNode.isIgnored();
                        divisionMarkdownNode.setDivisionClassName(divisionClassName);
                        if (!ignored) {
                            push(tokens, importedTokens);
                            divisionMarkdownNodes.push(divisionMarkdownNode);
                        }
                        divisionMarkdownNode.resolveImports(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltcG9ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuY29uc3QgeyBwdXNoLCBmb3VydGggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbXBvcnRNYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICByZXNvbHZlSW1wb3J0cyhjb250ZXh0KSB7XG4gICAgbGV0IGh0bWwgPSBudWxsO1xuXG4gICAgY29uc3QgeyBpbXBvcnRlciA9IG51bGwgfSA9IGNvbnRleHQ7XG5cbiAgICBpZiAoaW1wb3J0ZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aChjb250ZXh0KTtcblxuICAgICAgaW1wb3J0ZXIoZmlsZVBhdGgsIGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB7IGltcG9ydGVkTm9kZSA9IG51bGwsXG4gICAgICAgICAgICAgIGltcG9ydGVkVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWUgPSBudWxsIH0gPSBjb250ZXh0O1xuXG4gICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZE5vZGU7XG4gICAgICBkZWxldGUgY29udGV4dC5pbXBvcnRlZFRva2VucztcbiAgICAgIGRlbGV0ZSBjb250ZXh0LmltcG9ydGVkQ2xhc3NOYW1lO1xuXG4gICAgICBpZiAoaW1wb3J0ZWROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgdG9rZW5zLCBkaXZpc2lvbk1hcmtkb3duTm9kZXMgfSA9IGNvbnRleHQsXG4gICAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gaW1wb3J0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGRpdmlzaW9uQ2xhc3NOYW1lID0gaW1wb3J0ZWRDbGFzc05hbWUsICAvLy9cbiAgICAgICAgICAgICAgaWdub3JlZCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmlzSWdub3JlZCgpO1xuXG4gICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgICAgICBpZiAoIWlnbm9yZWQpIHtcbiAgICAgICAgICBwdXNoKHRva2VucywgaW1wb3J0ZWRUb2tlbnMpO1xuXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnB1c2goZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUltcG9ydHMoY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBmaWxlUGF0aChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZvdXJ0aENoaWxkTm9kZSA9IGZvdXJ0aChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBwYXRoVGVybWluYWxOb2RlICA9IGZvdXJ0aENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgcGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwYXRoVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IHBhdGhUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBmaWxlUGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEltcG9ydE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiSW1wb3J0TWFya2Rvd25Ob2RlIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZm91cnRoIiwicmVzb2x2ZUltcG9ydHMiLCJjb250ZXh0IiwiaHRtbCIsImltcG9ydGVyIiwiZmlsZVBhdGgiLCJpbXBvcnRlZE5vZGUiLCJpbXBvcnRlZFRva2VucyIsImltcG9ydGVkQ2xhc3NOYW1lIiwidG9rZW5zIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImlnbm9yZWQiLCJpc0lnbm9yZWQiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm91cnRoQ2hpbGROb2RlIiwicGF0aFRlcm1pbmFsTm9kZSIsInBhdGhUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJvcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVTsrREFFTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFRQyxPQUFpQkMseUJBQWMsQ0FBL0JELE1BQU1FLFNBQVdELHlCQUFjLENBQXpCQztBQUVDLElBQUEsQUFBTUgsbUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLE9BQU87Z0JBQ3BCLElBQUlDLE9BQU87Z0JBRVgsd0JBQTRCRCxRQUFwQkUsVUFBQUEsMENBQVc7Z0JBRW5CLElBQUlBLGFBQWEsTUFBTTtvQkFDckIsSUFBTUMsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0g7b0JBRS9CRSxTQUFTQyxVQUFVSDtvQkFFbkIsNEJBRXFDQSxRQUY3QkksY0FBQUEsa0RBQWUsd0RBRWNKLFFBRDdCSyxnQkFBQUEsc0RBQWlCLDZEQUNZTCxRQUE3Qk0sbUJBQUFBLDREQUFvQjtvQkFFNUIsT0FBT04sUUFBUUksWUFBWTtvQkFDM0IsT0FBT0osUUFBUUssY0FBYztvQkFDN0IsT0FBT0wsUUFBUU0saUJBQWlCO29CQUVoQyxJQUFJRixpQkFBaUIsTUFBTTt3QkFDekIsSUFBUUcsU0FBa0NQLFFBQWxDTyxRQUFRQyx3QkFBMEJSLFFBQTFCUSx1QkFDVkMsdUJBQXVCTCxjQUN2Qk0sb0JBQW9CSixtQkFDcEJLLFVBQVVGLHFCQUFxQkcsU0FBUzt3QkFFOUNILHFCQUFxQkksb0JBQW9CLENBQUNIO3dCQUUxQyxJQUFJLENBQUNDLFNBQVM7NEJBQ1pmLEtBQUtXLFFBQVFGOzRCQUViRyxzQkFBc0JaLElBQUksQ0FBQ2E7d0JBQzdCO3dCQUVBQSxxQkFBcUJWLGNBQWMsQ0FBQ0M7b0JBQ3RDO2dCQUNGO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0gsT0FBTztnQkFDZCxJQUFNYyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsa0JBQWtCbEIsT0FBT2dCLGFBQ3pCRyxtQkFBb0JELGlCQUNwQkUsMEJBQTBCRCxpQkFBaUJFLFVBQVUsSUFDckRoQixXQUFXZSx5QkFBeUIsR0FBRztnQkFFN0MsT0FBT2Y7WUFDVDs7OztZQUVPaUIsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVQLFVBQVUsRUFBRVEsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxnQ0FBZ0MsQ0FsRDFHekIsb0JBa0QrSDBCLFVBQVVQLFlBQVlRO1lBQVU7OztXQWxEL0ozQjtFQUEyQjRCLGlCQUFZIn0=
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
var _replace = require("../../utilities/replace");
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
            // resolveImports(parentNode, context) {
            //   let html = null;
            //
            //   const { importer = null } = context;
            //
            //   if (importer !== null) {
            //     const { tokens } = context,
            //           filePath = this.filePath(context);
            //
            //     importer(filePath, context);
            //
            //     const { node: importedNode = null,
            //             tokens: importedTokens = null,
            //             className: divisionClassName = null } = context;
            //
            //     Object.assign(context, {
            //       tokens
            //     });
            //
            //     delete context.node;
            //     delete context.className;
            //
            //     if (importedNode !== null) {
            //       const replacedChildNode = this, ///
            //             replacementTokens = importedTokens, ///
            //             replacementChildNode = importedNode;  ///
            //
            //       parentNode.replaceChildNode(replacedChildNode, replacementChildNode);
            //
            //       replaceTokens(replacedChildNode, replacementTokens, context);
            //
            //       parentNode = this;  ///
            //
            //       const divisionMarkdownNode = importedNode;  ///
            //
            //       divisionMarkdownNode.setDivisionClassName(divisionClassName);
            //
            //       divisionMarkdownNode.resolveImports(parentNode, context);
            //     }
            //   }
            //
            //   return html;
            // }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2ltcG9ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgcmVwbGFjZVRva2VucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcmVwbGFjZVwiO1xuXG5jb25zdCB7IGZvdXJ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltcG9ydE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIC8vIHJlc29sdmVJbXBvcnRzKHBhcmVudE5vZGUsIGNvbnRleHQpIHtcbiAgLy8gICBsZXQgaHRtbCA9IG51bGw7XG4gIC8vXG4gIC8vICAgY29uc3QgeyBpbXBvcnRlciA9IG51bGwgfSA9IGNvbnRleHQ7XG4gIC8vXG4gIC8vICAgaWYgKGltcG9ydGVyICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCB7IHRva2VucyB9ID0gY29udGV4dCxcbiAgLy8gICAgICAgICAgIGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aChjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGNvbnN0IHsgbm9kZTogaW1wb3J0ZWROb2RlID0gbnVsbCxcbiAgLy8gICAgICAgICAgICAgdG9rZW5zOiBpbXBvcnRlZFRva2VucyA9IG51bGwsXG4gIC8vICAgICAgICAgICAgIGNsYXNzTmFtZTogZGl2aXNpb25DbGFzc05hbWUgPSBudWxsIH0gPSBjb250ZXh0O1xuICAvL1xuICAvLyAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gIC8vICAgICAgIHRva2Vuc1xuICAvLyAgICAgfSk7XG4gIC8vXG4gIC8vICAgICBkZWxldGUgY29udGV4dC5ub2RlO1xuICAvLyAgICAgZGVsZXRlIGNvbnRleHQuY2xhc3NOYW1lO1xuICAvL1xuICAvLyAgICAgaWYgKGltcG9ydGVkTm9kZSAhPT0gbnVsbCkge1xuICAvLyAgICAgICBjb25zdCByZXBsYWNlZENoaWxkTm9kZSA9IHRoaXMsIC8vL1xuICAvLyAgICAgICAgICAgICByZXBsYWNlbWVudFRva2VucyA9IGltcG9ydGVkVG9rZW5zLCAvLy9cbiAgLy8gICAgICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGUgPSBpbXBvcnRlZE5vZGU7ICAvLy9cbiAgLy9cbiAgLy8gICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZSk7XG4gIC8vXG4gIC8vICAgICAgIHJlcGxhY2VUb2tlbnMocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50VG9rZW5zLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgICAgcGFyZW50Tm9kZSA9IHRoaXM7ICAvLy9cbiAgLy9cbiAgLy8gICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBpbXBvcnRlZE5vZGU7ICAvLy9cbiAgLy9cbiAgLy8gICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUuc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpO1xuICAvL1xuICAvLyAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW1wb3J0cyhwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIGh0bWw7XG4gIC8vIH1cblxuICBmaWxlUGF0aChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZvdXJ0aENoaWxkTm9kZSA9IGZvdXJ0aChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBwYXRoVGVybWluYWxOb2RlICA9IGZvdXJ0aENoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgcGF0aFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwYXRoVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IHBhdGhUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBmaWxlUGF0aDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KEltcG9ydE1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG4iXSwibmFtZXMiOlsiSW1wb3J0TWFya2Rvd25Ob2RlIiwiZm91cnRoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWxlUGF0aCIsImNvbnRleHQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvdXJ0aENoaWxkTm9kZSIsInBhdGhUZXJtaW5hbE5vZGUiLCJwYXRoVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOytEQUVOO3VCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCxtQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CLHdDQUF3QztZQUN4QyxxQkFBcUI7WUFDckIsRUFBRTtZQUNGLHlDQUF5QztZQUN6QyxFQUFFO1lBQ0YsNkJBQTZCO1lBQzdCLGtDQUFrQztZQUNsQywrQ0FBK0M7WUFDL0MsRUFBRTtZQUNGLG1DQUFtQztZQUNuQyxFQUFFO1lBQ0YseUNBQXlDO1lBQ3pDLDZDQUE2QztZQUM3QywrREFBK0Q7WUFDL0QsRUFBRTtZQUNGLCtCQUErQjtZQUMvQixlQUFlO1lBQ2YsVUFBVTtZQUNWLEVBQUU7WUFDRiwyQkFBMkI7WUFDM0IsZ0NBQWdDO1lBQ2hDLEVBQUU7WUFDRixtQ0FBbUM7WUFDbkMsNENBQTRDO1lBQzVDLHNEQUFzRDtZQUN0RCx3REFBd0Q7WUFDeEQsRUFBRTtZQUNGLDhFQUE4RTtZQUM5RSxFQUFFO1lBQ0Ysc0VBQXNFO1lBQ3RFLEVBQUU7WUFDRixnQ0FBZ0M7WUFDaEMsRUFBRTtZQUNGLHdEQUF3RDtZQUN4RCxFQUFFO1lBQ0Ysc0VBQXNFO1lBQ3RFLEVBQUU7WUFDRixrRUFBa0U7WUFDbEUsUUFBUTtZQUNSLE1BQU07WUFDTixFQUFFO1lBQ0YsaUJBQWlCO1lBQ2pCLElBQUk7WUFFSkcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQk4sT0FBT0ksYUFDekJHLG1CQUFvQkQsaUJBQ3BCRSwwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRFAsV0FBV00seUJBQXlCLEdBQUc7Z0JBRTdDLE9BQU9OO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVQLFVBQVUsRUFBRVEsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSCxnQ0FBZ0MsQ0F2RDFHWCxvQkF1RCtIWSxVQUFVUCxZQUFZUTtZQUFVOzs7V0F2RC9KYjtFQUEyQmMsaUJBQVkifQ==
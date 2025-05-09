"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexHTMLTransform;
    }
});
var _letters = /*#__PURE__*/ _interop_require_default(require("../../letters"));
var _list = /*#__PURE__*/ _interop_require_default(require("../../index/list"));
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
var _index = /*#__PURE__*/ _interop_require_default(require("../../transform/html/list/index"));
var _index1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/heading/index"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var IndexHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(IndexHTMLTransform, HTMLTransform);
    function IndexHTMLTransform(htmlNode, htmlNodes) {
        _class_call_check(this, IndexHTMLTransform);
        var _this;
        _this = _call_super(this, IndexHTMLTransform, [
            htmlNode
        ]);
        _this.htmlNodes = htmlNodes;
        return _this;
    }
    _create_class(IndexHTMLTransform, [
        {
            key: "getHTMLNodes",
            value: function getHTMLNodes() {
                return this.htmlNodes;
            }
        },
        {
            key: "replace",
            value: function replace(replacedHTMLNode) {
                var parentNode = replacedHTMLNode.getParentNode(), replacedChildNode = replacedHTMLNode, replacementChildNodes = this.htmlNodes; ///
                parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
            }
        },
        {
            key: "replaceIndexDirectiveHTMLTransform",
            value: function replaceIndexDirectiveHTMLTransform(indexDirectiveHTMLTransform) {
                var indexDirectiveHTMLNode = indexDirectiveHTMLTransform.getIndexDirectiveHTMLNode(), replacedHTMLNode = indexDirectiveHTMLNode; ///
                this.replace(replacedHTMLNode);
            }
        }
    ], [
        {
            key: "fromIndexDirectiveHTMLTransformAndDivisionHTMLNodes",
            value: function fromIndexDirectiveHTMLTransformAndDivisionHTMLNodes(indexDirectiveHTMLTransform, divisionHTMLNodes, context) {
                var indexHTMLTransform = null;
                var indexDirectiveHTMLNode = indexDirectiveHTMLTransform.getIndexDirectiveHTMLNode(), indexList = _list.default.fromIndexDirectiveHTMLNodeAndDivisionHTMLNodes(indexDirectiveHTMLNode, divisionHTMLNodes, context), indexHTMLTransforms = [];
                _letters.default.forEach(function(letter) {
                    var indexListHTMLTransform = _index.default.fromIndexListAndLetter(indexList, letter);
                    if (indexListHTMLTransform !== null) {
                        var indexHTMLTransform;
                        var indexHeadingHTMLTransform = _index1.default.fromLetter(letter);
                        indexHTMLTransform = indexHeadingHTMLTransform; ///
                        indexHTMLTransforms.push(indexHTMLTransform);
                        indexHTMLTransform = indexListHTMLTransform; ///
                        indexHTMLTransforms.push(indexHTMLTransform);
                    }
                });
                var indexListHTMLTransformsLength = indexHTMLTransforms.length;
                if (indexListHTMLTransformsLength > 0) {
                    var htmlNode = null, htmlNodes = [];
                    indexHTMLTransforms.forEach(function(indexHTMLTransform) {
                        var htmlNode = indexHTMLTransform.getHTMLNode();
                        htmlNodes.push(htmlNode);
                    });
                    indexHTMLTransform = _html.default.fromHTMLNode(IndexHTMLTransform, htmlNode, htmlNodes);
                }
                return indexHTMLTransform;
            }
        }
    ]);
    return IndexHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxldHRlcnMgZnJvbSBcIi4uLy4uL2xldHRlcnNcIjtcbmltcG9ydCBJbmRleExpc3QgZnJvbSBcIi4uLy4uL2luZGV4L2xpc3RcIjtcbmltcG9ydCBIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbFwiO1xuaW1wb3J0IEluZGV4TGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvaW5kZXhcIjtcbmltcG9ydCBJbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9oZWFkaW5nL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihodG1sTm9kZSwgaHRtbE5vZGVzKSB7XG4gICAgc3VwZXIoaHRtbE5vZGUpO1xuXG4gICAgdGhpcy5odG1sTm9kZXMgPSBodG1sTm9kZXM7XG4gIH1cblxuICBnZXRIVE1MTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbE5vZGVzO1xuICB9XG5cbiAgcmVwbGFjZShyZXBsYWNlZEhUTUxOb2RlKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHJlcGxhY2VkSFRNTE5vZGUuZ2V0UGFyZW50Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWRIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gdGhpcy5odG1sTm9kZXM7IC8vL1xuXG4gICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG5cbiAgcmVwbGFjZUluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybShpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0pIHtcbiAgICBjb25zdCBpbmRleERpcmVjdGl2ZUhUTUxOb2RlID0gaW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLmdldEluZGV4RGlyZWN0aXZlSFRNTE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlZEhUTUxOb2RlID0gaW5kZXhEaXJlY3RpdmVIVE1MTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5yZXBsYWNlKHJlcGxhY2VkSFRNTE5vZGUpXG4gIH1cblxuICBzdGF0aWMgZnJvbUluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybUFuZERpdmlzaW9uSFRNTE5vZGVzKGluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSwgZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXhIVE1MVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIGNvbnN0IGluZGV4RGlyZWN0aXZlSFRNTE5vZGUgPSBpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0uZ2V0SW5kZXhEaXJlY3RpdmVIVE1MTm9kZSgpLFxuICAgICAgICAgIGluZGV4TGlzdCA9IEluZGV4TGlzdC5mcm9tSW5kZXhEaXJlY3RpdmVIVE1MTm9kZUFuZERpdmlzaW9uSFRNTE5vZGVzKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUsIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm1zID0gW107XG5cbiAgICBsZXR0ZXJzLmZvckVhY2goKGxldHRlcikgPT4ge1xuICAgICAgY29uc3QgaW5kZXhMaXN0SFRNTFRyYW5zZm9ybSA9IEluZGV4TGlzdEhUTUxUcmFuc2Zvcm0uZnJvbUluZGV4TGlzdEFuZExldHRlcihpbmRleExpc3QsIGxldHRlcik7XG5cbiAgICAgIGlmIChpbmRleExpc3RIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBpbmRleEhUTUxUcmFuc2Zvcm07XG5cbiAgICAgICAgY29uc3QgaW5kZXhIZWFkaW5nSFRNTFRyYW5zZm9ybSA9IEluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm0uZnJvbUxldHRlcihsZXR0ZXIpO1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IGluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm07IC8vL1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybXMucHVzaChpbmRleEhUTUxUcmFuc2Zvcm0pO1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IGluZGV4TGlzdEhUTUxUcmFuc2Zvcm07ICAvLy9cblxuICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm1zLnB1c2goaW5kZXhIVE1MVHJhbnNmb3JtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGluZGV4TGlzdEhUTUxUcmFuc2Zvcm1zTGVuZ3RoID0gaW5kZXhIVE1MVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXhMaXN0SFRNTFRyYW5zZm9ybXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBodG1sTm9kZSA9IG51bGwsXG4gICAgICAgICAgICBodG1sTm9kZXMgPSBbXTtcblxuICAgICAgaW5kZXhIVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChpbmRleEhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgY29uc3QgaHRtbE5vZGUgPSBpbmRleEhUTUxUcmFuc2Zvcm0uZ2V0SFRNTE5vZGUoKTtcblxuICAgICAgICBodG1sTm9kZXMucHVzaChodG1sTm9kZSk7XG4gICAgICB9KTtcblxuICAgICAgaW5kZXhIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoSW5kZXhIVE1MVHJhbnNmb3JtLCBodG1sTm9kZSwgaHRtbE5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhIVE1MVHJhbnNmb3JtIiwiaHRtbE5vZGUiLCJodG1sTm9kZXMiLCJnZXRIVE1MTm9kZXMiLCJyZXBsYWNlIiwicmVwbGFjZWRIVE1MTm9kZSIsInBhcmVudE5vZGUiLCJnZXRQYXJlbnROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZUluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsImluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsImluZGV4RGlyZWN0aXZlSFRNTE5vZGUiLCJnZXRJbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwiZnJvbUluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybUFuZERpdmlzaW9uSFRNTE5vZGVzIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJjb250ZXh0IiwiaW5kZXhIVE1MVHJhbnNmb3JtIiwiaW5kZXhMaXN0IiwiSW5kZXhMaXN0IiwiZnJvbUluZGV4RGlyZWN0aXZlSFRNTE5vZGVBbmREaXZpc2lvbkhUTUxOb2RlcyIsImluZGV4SFRNTFRyYW5zZm9ybXMiLCJsZXR0ZXJzIiwiZm9yRWFjaCIsImxldHRlciIsImluZGV4TGlzdEhUTUxUcmFuc2Zvcm0iLCJJbmRleExpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbUluZGV4TGlzdEFuZExldHRlciIsImluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm0iLCJJbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtIiwiZnJvbUxldHRlciIsInB1c2giLCJpbmRleExpc3RIVE1MVHJhbnNmb3Jtc0xlbmd0aCIsImxlbmd0aCIsImdldEhUTUxOb2RlIiwiSFRNTFRyYW5zZm9ybSIsImZyb21IVE1MTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7OERBTkQ7MkRBQ0U7MkRBQ0k7NERBQ1M7NkRBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSxtQ0FBTjtjQUFNQTthQUFBQSxtQkFDUEMsUUFBUSxFQUFFQyxTQUFTO2dDQURaRjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7O1FBRU4sTUFBS0MsU0FBUyxHQUFHQTs7O2tCQUpBRjs7WUFPbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxnQkFBZ0I7Z0JBQ3RCLElBQU1DLGFBQWFELGlCQUFpQkUsYUFBYSxJQUMzQ0Msb0JBQW9CSCxrQkFDcEJJLHdCQUF3QixJQUFJLENBQUNQLFNBQVMsRUFBRSxHQUFHO2dCQUVqREksV0FBV0ksZ0JBQWdCLENBQUNGLG1CQUFtQkM7WUFDakQ7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsbUNBQW1DQywyQkFBMkI7Z0JBQzVELElBQU1DLHlCQUF5QkQsNEJBQTRCRSx5QkFBeUIsSUFDOUVULG1CQUFtQlEsd0JBQXlCLEdBQUc7Z0JBRXJELElBQUksQ0FBQ1QsT0FBTyxDQUFDQztZQUNmOzs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BLG9EQUFvREgsMkJBQTJCLEVBQUVJLGlCQUFpQixFQUFFQyxPQUFPO2dCQUNoSCxJQUFJQyxxQkFBcUI7Z0JBRXpCLElBQU1MLHlCQUF5QkQsNEJBQTRCRSx5QkFBeUIsSUFDOUVLLFlBQVlDLGFBQVMsQ0FBQ0MsOENBQThDLENBQUNSLHdCQUF3QkcsbUJBQW1CQyxVQUNoSEssc0JBQXNCLEVBQUU7Z0JBRTlCQyxnQkFBTyxDQUFDQyxPQUFPLENBQUMsU0FBQ0M7b0JBQ2YsSUFBTUMseUJBQXlCQyxjQUFzQixDQUFDQyxzQkFBc0IsQ0FBQ1QsV0FBV007b0JBRXhGLElBQUlDLDJCQUEyQixNQUFNO3dCQUNuQyxJQUFJUjt3QkFFSixJQUFNVyw0QkFBNEJDLGVBQXlCLENBQUNDLFVBQVUsQ0FBQ047d0JBRXZFUCxxQkFBcUJXLDJCQUEyQixHQUFHO3dCQUVuRFAsb0JBQW9CVSxJQUFJLENBQUNkO3dCQUV6QkEscUJBQXFCUSx3QkFBeUIsR0FBRzt3QkFFakRKLG9CQUFvQlUsSUFBSSxDQUFDZDtvQkFDM0I7Z0JBQ0Y7Z0JBRUEsSUFBTWUsZ0NBQWdDWCxvQkFBb0JZLE1BQU07Z0JBRWhFLElBQUlELGdDQUFnQyxHQUFHO29CQUNyQyxJQUFNaEMsV0FBVyxNQUNYQyxZQUFZLEVBQUU7b0JBRXBCb0Isb0JBQW9CRSxPQUFPLENBQUMsU0FBQ047d0JBQzNCLElBQU1qQixXQUFXaUIsbUJBQW1CaUIsV0FBVzt3QkFFL0NqQyxVQUFVOEIsSUFBSSxDQUFDL0I7b0JBQ2pCO29CQUVBaUIscUJBQXFCa0IsYUFBYSxDQUFDQyxZQUFZLENBL0RoQ3JDLG9CQStEcURDLFVBQVVDO2dCQUNoRjtnQkFFQSxPQUFPZ0I7WUFDVDs7O1dBbkVtQmxCO0VBQTJCb0MsYUFBYSJ9
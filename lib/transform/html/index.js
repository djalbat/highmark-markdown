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
            key: "fromDivisionHTMLNodes",
            value: function fromDivisionHTMLNodes(divisionHTMLNodes, context) {
                var indexHTMLTransform = null;
                var indexList = _list.default.fromDivisionHTMLNodes(divisionHTMLNodes, context), indexHTMLTransforms = [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxldHRlcnMgZnJvbSBcIi4uLy4uL2xldHRlcnNcIjtcbmltcG9ydCBJbmRleExpc3QgZnJvbSBcIi4uLy4uL2luZGV4L2xpc3RcIjtcbmltcG9ydCBIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbFwiO1xuaW1wb3J0IEluZGV4TGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvaW5kZXhcIjtcbmltcG9ydCBJbmRleEhlYWRpbmdIVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9oZWFkaW5nL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4SFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihodG1sTm9kZSwgaHRtbE5vZGVzKSB7XG4gICAgc3VwZXIoaHRtbE5vZGUpO1xuXG4gICAgdGhpcy5odG1sTm9kZXMgPSBodG1sTm9kZXM7XG4gIH1cblxuICBnZXRIVE1MTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbE5vZGVzO1xuICB9XG5cbiAgcmVwbGFjZShyZXBsYWNlZEhUTUxOb2RlKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHJlcGxhY2VkSFRNTE5vZGUuZ2V0UGFyZW50Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWRIVE1MTm9kZSwgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gdGhpcy5odG1sTm9kZXM7IC8vL1xuXG4gICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlKHJlcGxhY2VkQ2hpbGROb2RlLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG5cbiAgcmVwbGFjZUluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybShpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0pIHtcbiAgICBjb25zdCBpbmRleERpcmVjdGl2ZUhUTUxOb2RlID0gaW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLmdldEluZGV4RGlyZWN0aXZlSFRNTE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlZEhUTUxOb2RlID0gaW5kZXhEaXJlY3RpdmVIVE1MTm9kZTsgIC8vL1xuXG4gICAgdGhpcy5yZXBsYWNlKHJlcGxhY2VkSFRNTE5vZGUpXG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4SFRNTFRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRleExpc3QgPSBJbmRleExpc3QuZnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm1zID0gW107XG5cbiAgICBsZXR0ZXJzLmZvckVhY2goKGxldHRlcikgPT4ge1xuICAgICAgY29uc3QgaW5kZXhMaXN0SFRNTFRyYW5zZm9ybSA9IEluZGV4TGlzdEhUTUxUcmFuc2Zvcm0uZnJvbUluZGV4TGlzdEFuZExldHRlcihpbmRleExpc3QsIGxldHRlcik7XG5cbiAgICAgIGlmIChpbmRleExpc3RIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBpbmRleEhUTUxUcmFuc2Zvcm07XG5cbiAgICAgICAgY29uc3QgaW5kZXhIZWFkaW5nSFRNTFRyYW5zZm9ybSA9IEluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm0uZnJvbUxldHRlcihsZXR0ZXIpO1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IGluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm07IC8vL1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybXMucHVzaChpbmRleEhUTUxUcmFuc2Zvcm0pO1xuXG4gICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IGluZGV4TGlzdEhUTUxUcmFuc2Zvcm07ICAvLy9cblxuICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm1zLnB1c2goaW5kZXhIVE1MVHJhbnNmb3JtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGluZGV4TGlzdEhUTUxUcmFuc2Zvcm1zTGVuZ3RoID0gaW5kZXhIVE1MVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXhMaXN0SFRNTFRyYW5zZm9ybXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBodG1sTm9kZSA9IG51bGwsXG4gICAgICAgICAgICBodG1sTm9kZXMgPSBbXTtcblxuICAgICAgaW5kZXhIVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChpbmRleEhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgY29uc3QgaHRtbE5vZGUgPSBpbmRleEhUTUxUcmFuc2Zvcm0uZ2V0SFRNTE5vZGUoKTtcblxuICAgICAgICBodG1sTm9kZXMucHVzaChodG1sTm9kZSk7XG4gICAgICB9KTtcblxuICAgICAgaW5kZXhIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tSFRNTE5vZGUoSW5kZXhIVE1MVHJhbnNmb3JtLCBodG1sTm9kZSwgaHRtbE5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhIVE1MVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhIVE1MVHJhbnNmb3JtIiwiaHRtbE5vZGUiLCJodG1sTm9kZXMiLCJnZXRIVE1MTm9kZXMiLCJyZXBsYWNlIiwicmVwbGFjZWRIVE1MTm9kZSIsInBhcmVudE5vZGUiLCJnZXRQYXJlbnROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZUluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsImluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsImluZGV4RGlyZWN0aXZlSFRNTE5vZGUiLCJnZXRJbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwiZnJvbURpdmlzaW9uSFRNTE5vZGVzIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJjb250ZXh0IiwiaW5kZXhIVE1MVHJhbnNmb3JtIiwiaW5kZXhMaXN0IiwiSW5kZXhMaXN0IiwiaW5kZXhIVE1MVHJhbnNmb3JtcyIsImxldHRlcnMiLCJmb3JFYWNoIiwibGV0dGVyIiwiaW5kZXhMaXN0SFRNTFRyYW5zZm9ybSIsIkluZGV4TGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tSW5kZXhMaXN0QW5kTGV0dGVyIiwiaW5kZXhIZWFkaW5nSFRNTFRyYW5zZm9ybSIsIkluZGV4SGVhZGluZ0hUTUxUcmFuc2Zvcm0iLCJmcm9tTGV0dGVyIiwicHVzaCIsImluZGV4TGlzdEhUTUxUcmFuc2Zvcm1zTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0SFRNTE5vZGUiLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTUxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozs4REFORDsyREFDRTsyREFDSTs0REFDUzs2REFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLG1DQUFOO2NBQU1BO2FBQUFBLG1CQUNQQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRFpGOztnQkFFakIsa0JBRmlCQTtZQUVYQzs7UUFFTixNQUFLQyxTQUFTLEdBQUdBOzs7a0JBSkFGOztZQU9uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3ZCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLGdCQUFnQjtnQkFDdEIsSUFBTUMsYUFBYUQsaUJBQWlCRSxhQUFhLElBQzNDQyxvQkFBb0JILGtCQUNwQkksd0JBQXdCLElBQUksQ0FBQ1AsU0FBUyxFQUFFLEdBQUc7Z0JBRWpESSxXQUFXSSxnQkFBZ0IsQ0FBQ0YsbUJBQW1CQztZQUNqRDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxtQ0FBbUNDLDJCQUEyQjtnQkFDNUQsSUFBTUMseUJBQXlCRCw0QkFBNEJFLHlCQUF5QixJQUM5RVQsbUJBQW1CUSx3QkFBeUIsR0FBRztnQkFFckQsSUFBSSxDQUFDVCxPQUFPLENBQUNDO1lBQ2Y7Ozs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCQyxpQkFBaUIsRUFBRUMsT0FBTztnQkFDckQsSUFBSUMscUJBQXFCO2dCQUV6QixJQUFNQyxZQUFZQyxhQUFTLENBQUNMLHFCQUFxQixDQUFDQyxtQkFBbUJDLFVBQy9ESSxzQkFBc0IsRUFBRTtnQkFFOUJDLGdCQUFPLENBQUNDLE9BQU8sQ0FBQyxTQUFDQztvQkFDZixJQUFNQyx5QkFBeUJDLGNBQXNCLENBQUNDLHNCQUFzQixDQUFDUixXQUFXSztvQkFFeEYsSUFBSUMsMkJBQTJCLE1BQU07d0JBQ25DLElBQUlQO3dCQUVKLElBQU1VLDRCQUE0QkMsZUFBeUIsQ0FBQ0MsVUFBVSxDQUFDTjt3QkFFdkVOLHFCQUFxQlUsMkJBQTJCLEdBQUc7d0JBRW5EUCxvQkFBb0JVLElBQUksQ0FBQ2I7d0JBRXpCQSxxQkFBcUJPLHdCQUF5QixHQUFHO3dCQUVqREosb0JBQW9CVSxJQUFJLENBQUNiO29CQUMzQjtnQkFDRjtnQkFFQSxJQUFNYyxnQ0FBZ0NYLG9CQUFvQlksTUFBTTtnQkFFaEUsSUFBSUQsZ0NBQWdDLEdBQUc7b0JBQ3JDLElBQU0vQixXQUFXLE1BQ1hDLFlBQVksRUFBRTtvQkFFcEJtQixvQkFBb0JFLE9BQU8sQ0FBQyxTQUFDTDt3QkFDM0IsSUFBTWpCLFdBQVdpQixtQkFBbUJnQixXQUFXO3dCQUUvQ2hDLFVBQVU2QixJQUFJLENBQUM5QjtvQkFDakI7b0JBRUFpQixxQkFBcUJpQixhQUFhLENBQUNDLFlBQVksQ0E5RGhDcEMsb0JBOERxREMsVUFBVUM7Z0JBQ2hGO2dCQUVBLE9BQU9nQjtZQUNUOzs7V0FsRW1CbEI7RUFBMkJtQyxhQUFhIn0=
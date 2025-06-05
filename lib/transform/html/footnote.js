"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
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
var FootnoteHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(FootnoteHTMLTransform, HTMLTransform);
    function FootnoteHTMLTransform() {
        _class_call_check(this, FootnoteHTMLTransform);
        return _call_super(this, FootnoteHTMLTransform, arguments);
    }
    _create_class(FootnoteHTMLTransform, [
        {
            key: "identifier",
            value: function identifier(context) {
                var footnoteHTMLNode = this.getFootnoteHTMLNode(), identifier = footnoteHTMLNode.identifier(context);
                return identifier;
            }
        },
        {
            key: "getLineHTMLNode",
            value: function getLineHTMLNode() {
                var paragraphHTMLNode = this.getParagraphHTMLNode(), lineHTMLNode = paragraphHTMLNode.fromFirstChildNode(function(firstChildNode) {
                    var lineHTMLNode = firstChildNode; ///
                    return lineHTMLNode;
                });
                return lineHTMLNode;
            }
        },
        {
            key: "getFootnoteHTMLNode",
            value: function getFootnoteHTMLNode() {
                var htmlNode = this.getHTMLNode(), footnoteHTMLNode = htmlNode; ///
                return footnoteHTMLNode;
            }
        },
        {
            key: "getParagraphHTMLNode",
            value: function getParagraphHTMLNode() {
                var footnoteHTMLNode = this.getFootnoteHTMLNode(), paragraphHTMLNode = footnoteHTMLNode.fromSecondChildNode(function(secondChildNode) {
                    var paragraphHTMLNode = secondChildNode; ///
                    return paragraphHTMLNode;
                });
                return paragraphHTMLNode;
            }
        },
        {
            key: "matchIdentifier",
            value: function matchIdentifier(identifier, context) {
                var identifierA = identifier; ///
                identifier = this.identifier(context);
                var identifierB = identifier, identifierMatches = identifierA === identifierB;
                return identifierMatches;
            }
        },
        {
            key: "addAfterFootnoteLinkHTMLTransform",
            value: function addAfterFootnoteLinkHTMLTransform(footnoteLinkHTMLTransform) {
                var containingHTMLNode = footnoteLinkHTMLTransform.getContainingHTMLNode(), existingHTMLNode = containingHTMLNode; ///
                this.addAfter(existingHTMLNode);
            }
        }
    ], [
        {
            key: "fromFootnoteHTMLNode",
            value: function fromFootnoteHTMLNode(footnoteHTMLNde) {
                var htmlNode = footnoteHTMLNde, footnoteHTMLTransform = _html.default.fromHTMLNode(FootnoteHTMLTransform, htmlNode);
                return footnoteHTMLTransform;
            }
        }
    ]);
    return FootnoteHTMLTransform;
}(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVIVE1MVHJhbnNmb3JtIGV4dGVuZHMgSFRNTFRyYW5zZm9ybSB7XG4gIGlkZW50aWZpZXIoY29udGV4dCkge1xuICAgIGNvbnN0IGZvb3Rub3RlSFRNTE5vZGUgPSB0aGlzLmdldEZvb3Rub3RlSFRNTE5vZGUoKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVIVE1MTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRMaW5lSFRNTE5vZGUoKSB7XG4gICAgY29uc3QgcGFyYWdyYXBoSFRNTE5vZGUgPSB0aGlzLmdldFBhcmFncmFwaEhUTUxOb2RlKCksXG4gICAgICAgICAgbGluZUhUTUxOb2RlID0gcGFyYWdyYXBoSFRNTE5vZGUuZnJvbUZpcnN0Q2hpbGROb2RlKChmaXJzdENoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGluZUhUTUxOb2RlID0gZmlyc3RDaGlsZE5vZGU7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGxpbmVIVE1MTm9kZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsaW5lSFRNTE5vZGU7XG4gIH1cblxuICBnZXRGb290bm90ZUhUTUxOb2RlKCkge1xuICAgIGNvbnN0IGh0bWxOb2RlID0gdGhpcy5nZXRIVE1MTm9kZSgpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTE5vZGUgPSBodG1sTm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSFRNTE5vZGU7XG4gIH1cblxuICBnZXRQYXJhZ3JhcGhIVE1MTm9kZSgpIHtcbiAgICBjb25zdCBmb290bm90ZUhUTUxOb2RlID0gdGhpcy5nZXRGb290bm90ZUhUTUxOb2RlKCksICAvLy9cbiAgICAgICAgICBwYXJhZ3JhcGhIVE1MTm9kZSA9IGZvb3Rub3RlSFRNTE5vZGUuZnJvbVNlY29uZENoaWxkTm9kZSgoc2Vjb25kQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhZ3JhcGhIVE1MTm9kZSA9IHNlY29uZENoaWxkTm9kZTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gcGFyYWdyYXBoSFRNTE5vZGU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyYWdyYXBoSFRNTE5vZGU7XG4gIH1cblxuICBtYXRjaElkZW50aWZpZXIoaWRlbnRpZmllciwgY29udGV4dCkge1xuICAgIGNvbnN0IGlkZW50aWZpZXJBID0gaWRlbnRpZmllcjsgLy8vXG5cbiAgICBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgY29uc3QgaWRlbnRpZmllckIgPSBpZGVudGlmaWVyLCAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyTWF0Y2hlcyA9IChpZGVudGlmaWVyQSA9PT0gaWRlbnRpZmllckIpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJNYXRjaGVzO1xuICB9XG5cbiAgYWRkQWZ0ZXJGb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtKGZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjb250YWluaW5nSFRNTE5vZGUgPSBmb290bm90ZUxpbmtIVE1MVHJhbnNmb3JtLmdldENvbnRhaW5pbmdIVE1MTm9kZSgpLFxuICAgICAgICAgIGV4aXN0aW5nSFRNTE5vZGUgPSBjb250YWluaW5nSFRNTE5vZGU7ICAvLy9cblxuICAgIHRoaXMuYWRkQWZ0ZXIoZXhpc3RpbmdIVE1MTm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvb3Rub3RlSFRNTE5vZGUoZm9vdG5vdGVIVE1MTmRlKSB7XG4gICAgY29uc3QgaHRtbE5vZGUgPSBmb290bm90ZUhUTUxOZGUsIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTUxOb2RlKEZvb3Rub3RlSFRNTFRyYW5zZm9ybSwgaHRtbE5vZGUpO1xuXG4gICAgcmV0dXJuIGZvb3Rub3RlSFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsImlkZW50aWZpZXIiLCJjb250ZXh0IiwiZm9vdG5vdGVIVE1MTm9kZSIsImdldEZvb3Rub3RlSFRNTE5vZGUiLCJnZXRMaW5lSFRNTE5vZGUiLCJwYXJhZ3JhcGhIVE1MTm9kZSIsImdldFBhcmFncmFwaEhUTUxOb2RlIiwibGluZUhUTUxOb2RlIiwiZnJvbUZpcnN0Q2hpbGROb2RlIiwiZmlyc3RDaGlsZE5vZGUiLCJodG1sTm9kZSIsImdldEhUTUxOb2RlIiwiZnJvbVNlY29uZENoaWxkTm9kZSIsInNlY29uZENoaWxkTm9kZSIsIm1hdGNoSWRlbnRpZmllciIsImlkZW50aWZpZXJBIiwiaWRlbnRpZmllckIiLCJpZGVudGlmaWVyTWF0Y2hlcyIsImFkZEFmdGVyRm9vdG5vdGVMaW5rSFRNTFRyYW5zZm9ybSIsImZvb3Rub3RlTGlua0hUTUxUcmFuc2Zvcm0iLCJjb250YWluaW5nSFRNTE5vZGUiLCJnZXRDb250YWluaW5nSFRNTE5vZGUiLCJleGlzdGluZ0hUTUxOb2RlIiwiYWRkQWZ0ZXIiLCJmcm9tRm9vdG5vdGVIVE1MTm9kZSIsImZvb3Rub3RlSFRNTE5kZSIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybSIsIkhUTUxUcmFuc2Zvcm0iLCJmcm9tSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVgsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLE9BQU87Z0JBQ2hCLElBQU1DLG1CQUFtQixJQUFJLENBQUNDLG1CQUFtQixJQUMzQ0gsYUFBYUUsaUJBQWlCRixVQUFVLENBQUNDO2dCQUUvQyxPQUFPRDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG9CQUFvQixJQUFJLENBQUNDLG9CQUFvQixJQUM3Q0MsZUFBZUYsa0JBQWtCRyxrQkFBa0IsQ0FBQyxTQUFDQztvQkFDbkQsSUFBTUYsZUFBZUUsZ0JBQWlCLEdBQUc7b0JBRXpDLE9BQU9GO2dCQUNUO2dCQUVOLE9BQU9BO1lBQ1Q7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU8sV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JULG1CQUFtQlEsVUFBVyxHQUFHO2dCQUV2QyxPQUFPUjtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLG1CQUFtQixJQUFJLENBQUNDLG1CQUFtQixJQUMzQ0Usb0JBQW9CSCxpQkFBaUJVLG1CQUFtQixDQUFDLFNBQUNDO29CQUN4RCxJQUFNUixvQkFBb0JRLGlCQUFrQixHQUFHO29CQUUvQyxPQUFPUjtnQkFDVDtnQkFFTixPQUFPQTtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQmQsVUFBVSxFQUFFQyxPQUFPO2dCQUNqQyxJQUFNYyxjQUFjZixZQUFZLEdBQUc7Z0JBRW5DQSxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDQztnQkFFN0IsSUFBTWUsY0FBY2hCLFlBQ2RpQixvQkFBcUJGLGdCQUFnQkM7Z0JBRTNDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0NBQWtDQyx5QkFBeUI7Z0JBQ3pELElBQU1DLHFCQUFxQkQsMEJBQTBCRSxxQkFBcUIsSUFDcEVDLG1CQUFtQkYsb0JBQXFCLEdBQUc7Z0JBRWpELElBQUksQ0FBQ0csUUFBUSxDQUFDRDtZQUNoQjs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJDLGVBQWU7Z0JBQ3pDLElBQU1mLFdBQVdlLGlCQUNYQyx3QkFBd0JDLGFBQWEsQ0FBQ0MsWUFBWSxDQXpEdkM3Qix1QkF5RCtEVztnQkFFaEYsT0FBT2dCO1lBQ1Q7OztXQTVEbUIzQjtFQUE4QjRCLGFBQWEifQ==
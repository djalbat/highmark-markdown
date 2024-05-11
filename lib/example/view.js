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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _index = require("../index");
var _easylayout = require("easy-layout");
var _xmp = /*#__PURE__*/ _interop_require_default(require("./view/xmp"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/preview"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/textarea/css"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/textarea/markdown"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/textarea/markdownStyle"));
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "keyUpHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), css = markdownStyleElement.update(markdownStyle);
                this.setCSS(css);
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), content = markdown, lexer = markdownLexer, parser = markdownParser, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node !== null) {
                    var divisionMarkdownNode = node, divisionMarkdownNodes = [
                        divisionMarkdownNode
                    ], context = {
                        tokens: tokens,
                        importer: importer,
                        divisionMarkdownNodes: divisionMarkdownNodes
                    };
                    divisionMarkdownNode.resolveIncludes(context);
                    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
                        divisionMarkdownNode.resolveEmbeddings(context);
                        divisionMarkdownNode.createFootnotes(context);
                    });
                    divisionMarkdownNodes.some(function(divisionMarkdownNode) {
                        var contentsCreated = divisionMarkdownNode.createContents(context);
                        if (contentsCreated) {
                            return true;
                        }
                    });
                    var htmls = [], domElements = [];
                    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
                        var html = divisionMarkdownNode.asHTML(context), domElement = divisionMarkdownNode.createDOMElement(context);
                        htmls.push(html);
                        domElements.push(domElement);
                    });
                    this.updateXMP(htmls);
                    this.updatePreviewDiv(domElements);
                } else {
                    this.clearXMP();
                    this.clearPreviewDiv();
                }
            }
        },
        {
            key: "update",
            value: function update() {
                this.updateMarkdown();
                this.updateMarkdownStyle();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Markdown"), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Markdown style"), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onKeyUp: this.keyUpHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "HTML"), /*#__PURE__*/ React.createElement(_xmp.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "CSS"), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Preview"), /*#__PURE__*/ React.createElement(_preview.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdownStyle", "min-height: initial;\n");
_define_property(View, "initialMarkdown", "@contents 2\n\n# Primary heading[^heading]\n\n@embed introduction.md\n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function importer(filePath, context) {
    var content = "## Secondary heading\n\n[^heading]: A heading.\n\n@footnotes\n        ", tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens), importedNode = node, importedTokens = tokens, importedClassName = "introduction";
    Object.assign(context, {
        importedNode: importedNode,
        importedTokens: importedTokens,
        importedClassName: importedClassName
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgWE1QIGZyb20gXCIuL3ZpZXcveG1wXCI7XG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wcmV2aWV3XCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDU1NUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2Nzc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgTWFya2Rvd25UZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL21hcmtkb3duXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvbWFya2Rvd25TdHlsZVwiO1xuXG5jb25zdCBtYXJrZG93bkxleGVyID0gTWFya2Rvd25MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25QYXJzZXIgPSBNYXJrZG93blBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93blN0eWxlKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZUVsZW1lbnQgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCksXG4gICAgICAgICAgY3NzID0gbWFya2Rvd25TdHlsZUVsZW1lbnQudXBkYXRlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duKCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBtYXJrZG93bkxleGVyLFxuICAgICAgICAgIHBhcnNlciA9ICBtYXJrZG93blBhcnNlcixcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBbXG4gICAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICAgICAgICBpbXBvcnRlcixcbiAgICAgICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gICAgICAgICAgICB9O1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXMoY29udGV4dCk7XG5cbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5ncyhjb250ZXh0KTtcblxuICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5jcmVhdGVGb290bm90ZXMoY29udGV4dCk7XG4gICAgICB9KTtcblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLnNvbWUoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzQ3JlYXRlZCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZUNvbnRlbnRzKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb250ZW50c0NyZWF0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGh0bWxzID0gW10sXG4gICAgICAgICAgICBkb21FbGVtZW50cyA9IFtdO1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgaHRtbCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFzSFRNTChjb250ZXh0KSxcbiAgICAgICAgICAgICAgZG9tRWxlbWVudCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbHMucHVzaChodG1sKTtcblxuICAgICAgICBkb21FbGVtZW50cy5wdXNoKGRvbUVsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudXBkYXRlWE1QKGh0bWxzKTtcblxuICAgICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRvbUVsZW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclhNUCgpO1xuXG4gICAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duKCk7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgTWFya2Rvd25cbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPE1hcmtkb3duVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBNYXJrZG93biBzdHlsZVxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8TWFya2Rvd25TdHlsZVRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEhUTUxcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxYTVAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENTU1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENTU1RleHRhcmVhLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQcmV2aWV3XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UHJldmlld0Rpdi8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93blN0eWxlID0gYG1pbi1oZWlnaHQ6IGluaXRpYWw7XG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBgQGNvbnRlbnRzIDJcblxuIyBQcmltYXJ5IGhlYWRpbmdbXmhlYWRpbmddXG5cbkBlbWJlZCBpbnRyb2R1Y3Rpb24ubWRcbmA7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm1hcmtkb3duU3R5bGVFbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiBpbXBvcnRlcihmaWxlUGF0aCwgY29udGV4dCkge1xuICBjb25zdCBjb250ZW50ID0gYCMjIFNlY29uZGFyeSBoZWFkaW5nXG5cblteaGVhZGluZ106IEEgaGVhZGluZy5cblxuQGZvb3Rub3Rlc1xuICAgICAgICBgLFxuICAgICAgICB0b2tlbnMgPSBtYXJrZG93bkxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gbWFya2Rvd25QYXJzZXIucGFyc2UodG9rZW5zKSxcbiAgICAgICAgaW1wb3J0ZWROb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICBpbXBvcnRlZFRva2VucyA9IHRva2VucyxcbiAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWUgPSBcImludHJvZHVjdGlvblwiO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGltcG9ydGVkTm9kZSxcbiAgICBpbXBvcnRlZFRva2VucyxcbiAgICBpbXBvcnRlZENsYXNzTmFtZVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ1cGRhdGUiLCJ1cGRhdGVNYXJrZG93blN0eWxlIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwibWFya2Rvd25TdHlsZSIsImdldE1hcmtkb3duU3R5bGUiLCJjc3MiLCJzZXRDU1MiLCJ1cGRhdGVNYXJrZG93biIsIm1hcmtkb3duIiwiZ2V0TWFya2Rvd24iLCJjb250ZW50IiwibGV4ZXIiLCJwYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiY29udGV4dCIsImltcG9ydGVyIiwicmVzb2x2ZUluY2x1ZGVzIiwiZm9yRWFjaCIsInJlc29sdmVFbWJlZGRpbmdzIiwiY3JlYXRlRm9vdG5vdGVzIiwic29tZSIsImNvbnRlbnRzQ3JlYXRlZCIsImNyZWF0ZUNvbnRlbnRzIiwiaHRtbHMiLCJkb21FbGVtZW50cyIsImh0bWwiLCJhc0hUTUwiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInB1c2giLCJ1cGRhdGVYTVAiLCJ1cGRhdGVQcmV2aWV3RGl2IiwiY2xlYXJYTVAiLCJjbGVhclByZXZpZXdEaXYiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIkxlZnRTaXplYWJsZURpdiIsIlN1YkhlYWRpbmciLCJNYXJrZG93blRleHRhcmVhIiwib25LZXlVcCIsIk1hcmtkb3duU3R5bGVUZXh0YXJlYSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiWE1QIiwiQ1NTVGV4dGFyZWEiLCJQcmV2aWV3RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxNYXJrZG93biIsImluaXRpYWxNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd24iLCJzZXRNYXJrZG93blN0eWxlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZmlsZVBhdGgiLCJpbXBvcnRlZE5vZGUiLCJpbXBvcnRlZFRva2VucyIsImltcG9ydGVkQ2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUtBOzs7ZUFBQTs7O29FQW5Lc0I7b0JBRUU7cUJBQ3NCOzBCQUNzQjswREFFcEQ7OERBQ087aUVBQ0E7MERBQ0M7MkRBQ0k7K0RBQ0M7b0VBQ0s7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
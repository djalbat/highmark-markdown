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
                    divisionMarkdownNode.resolveImports(context);
                    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
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
_define_property(View, "initialMarkdown", "# Primary heading\n\n@contents 3\n\n## Secondary heading\n  \n@import example.md\n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function importer(filePath, context) {
    var content = "### Tertiary heading\n        ", tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens), importedNode = node, importedTokens = tokens, importedClassName = "introduction";
    Object.assign(context, {
        importedNode: importedNode,
        importedTokens: importedTokens,
        importedClassName: importedClassName
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgWE1QIGZyb20gXCIuL3ZpZXcveG1wXCI7XG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wcmV2aWV3XCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDU1NUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2Nzc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgTWFya2Rvd25UZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL21hcmtkb3duXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvbWFya2Rvd25TdHlsZVwiO1xuXG5jb25zdCBtYXJrZG93bkxleGVyID0gTWFya2Rvd25MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25QYXJzZXIgPSBNYXJrZG93blBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93blN0eWxlKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZUVsZW1lbnQgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCksXG4gICAgICAgICAgY3NzID0gbWFya2Rvd25TdHlsZUVsZW1lbnQudXBkYXRlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duKCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBtYXJrZG93bkxleGVyLFxuICAgICAgICAgIHBhcnNlciA9ICBtYXJrZG93blBhcnNlcixcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBbXG4gICAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICAgICAgICBpbXBvcnRlcixcbiAgICAgICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gICAgICAgICAgICB9O1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW1wb3J0cyhjb250ZXh0KTtcblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZUZvb3Rub3Rlcyhjb250ZXh0KTtcbiAgICAgIH0pO1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudHNDcmVhdGVkID0gZGl2aXNpb25NYXJrZG93bk5vZGUuY3JlYXRlQ29udGVudHMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRzQ3JlYXRlZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgaHRtbHMgPSBbXSxcbiAgICAgICAgICAgIGRvbUVsZW1lbnRzID0gW107XG5cbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBodG1sID0gZGl2aXNpb25NYXJrZG93bk5vZGUuYXNIVE1MKGNvbnRleHQpLFxuICAgICAgICAgICAgICBkb21FbGVtZW50ID0gZGl2aXNpb25NYXJrZG93bk5vZGUuY3JlYXRlRE9NRWxlbWVudChjb250ZXh0KTtcblxuICAgICAgICBodG1scy5wdXNoKGh0bWwpO1xuXG4gICAgICAgIGRvbUVsZW1lbnRzLnB1c2goZG9tRWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy51cGRhdGVYTVAoaHRtbHMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVByZXZpZXdEaXYoZG9tRWxlbWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyWE1QKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQcmV2aWV3RGl2KCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd24oKTtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGUoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBNYXJrZG93blxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8TWFya2Rvd25UZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIE1hcmtkb3duIHN0eWxlXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxNYXJrZG93blN0eWxlVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgSFRNTFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFhNUC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ1NTXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q1NTVGV4dGFyZWEvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFByZXZpZXdcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQcmV2aWV3RGl2Lz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxNYXJrZG93biwgaW5pdGlhbE1hcmtkb3duU3R5bGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IGluaXRpYWxNYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICBtYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duKG1hcmtkb3duKTtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBgbWluLWhlaWdodDogaW5pdGlhbDtcbmA7XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93biA9IGAjIFByaW1hcnkgaGVhZGluZ1xuXG5AY29udGVudHMgM1xuXG4jIyBTZWNvbmRhcnkgaGVhZGluZ1xuICBcbkBpbXBvcnQgZXhhbXBsZS5tZFxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibWFya2Rvd25TdHlsZUVsZW1lbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIGltcG9ydGVyKGZpbGVQYXRoLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBgIyMjIFRlcnRpYXJ5IGhlYWRpbmdcbiAgICAgICAgYCxcbiAgICAgICAgdG9rZW5zID0gbWFya2Rvd25MZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgbm9kZSA9IG1hcmtkb3duUGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgIGltcG9ydGVkTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgaW1wb3J0ZWRUb2tlbnMgPSB0b2tlbnMsXG4gICAgICAgIGltcG9ydGVkQ2xhc3NOYW1lID0gXCJpbnRyb2R1Y3Rpb25cIjtcblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICBpbXBvcnRlZE5vZGUsXG4gICAgaW1wb3J0ZWRUb2tlbnMsXG4gICAgaW1wb3J0ZWRDbGFzc05hbWVcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsibWFya2Rvd25MZXhlciIsIk1hcmtkb3duTGV4ZXIiLCJmcm9tTm90aGluZyIsIm1hcmtkb3duUGFyc2VyIiwiTWFya2Rvd25QYXJzZXIiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwidXBkYXRlTWFya2Rvd25TdHlsZSIsIm1hcmtkb3duU3R5bGVFbGVtZW50IiwicHJvcGVydGllcyIsIm1hcmtkb3duU3R5bGUiLCJnZXRNYXJrZG93blN0eWxlIiwiY3NzIiwic2V0Q1NTIiwidXBkYXRlTWFya2Rvd24iLCJtYXJrZG93biIsImdldE1hcmtkb3duIiwiY29udGVudCIsImxleGVyIiwicGFyc2VyIiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImNvbnRleHQiLCJpbXBvcnRlciIsInJlc29sdmVJbXBvcnRzIiwiZm9yRWFjaCIsImNyZWF0ZUZvb3Rub3RlcyIsInNvbWUiLCJjb250ZW50c0NyZWF0ZWQiLCJjcmVhdGVDb250ZW50cyIsImh0bWxzIiwiZG9tRWxlbWVudHMiLCJodG1sIiwiYXNIVE1MIiwiZG9tRWxlbWVudCIsImNyZWF0ZURPTUVsZW1lbnQiLCJwdXNoIiwidXBkYXRlWE1QIiwidXBkYXRlUHJldmlld0RpdiIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2IiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJTdWJIZWFkaW5nIiwiTWFya2Rvd25UZXh0YXJlYSIsIm9uS2V5VXAiLCJNYXJrZG93blN0eWxlVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiUm93c0RpdiIsIlhNUCIsIkNTU1RleHRhcmVhIiwiUHJldmlld0RpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsTWFya2Rvd24iLCJpbml0aWFsTWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duIiwic2V0TWFya2Rvd25TdHlsZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImZpbGVQYXRoIiwiaW1wb3J0ZWROb2RlIiwiaW1wb3J0ZWRUb2tlbnMiLCJpbXBvcnRlZENsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUtBOzs7ZUFBQTs7O29FQW5Lc0I7b0JBRUU7cUJBQ3NCOzBCQUNzQjswREFFcEQ7OERBQ087aUVBQ0E7MERBQ0M7MkRBQ0k7K0RBQ0M7b0VBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
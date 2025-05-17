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
var _easylayout = require("easy-layout");
var _index = require("../index");
var _indexOptions = /*#__PURE__*/ _interop_require_default(require("./indexOptions"));
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/pageButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _css1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/css"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/html"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _importer = require("./importer");
var _constants = require("./constants");
var _dom = require("../utilities/dom");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing(), markdownStyleLexer = _index.MarkdownStyleLexer.fromNothing(), markdownStyleParser = _index.MarkdownStyleParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "pageUpdateCustomHandler", function(event, element, index) {
            _this.updateHTML(index);
        }), _define_property(_this, "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        }), _define_property(_this, "markdownCustomHandler", function(event, element) {
            _this.markdown();
        }), _define_property(_this, "plainTextCustomHandler", function(event, element) {
            _this.plainText();
        }), _define_property(_this, "previewCustomHandler", function(event, element) {
            _this.preview();
        }), _define_property(_this, "keyUpCustomHandler", function(event, element) {
            _this.update();
        }), _define_property(_this, "htmlCustomHandler", function(event, element) {
            _this.html();
        }), _define_property(_this, "cssCustomHandler", function(event, element) {
            _this.css();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                this.updateMarkdownStyle();
                this.updateMarkdown();
                this.updateHTML();
                this.updateCSS();
            }
        },
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyle = this.getMarkdownStyle(), lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), node = parser.parse(tokens, startRule);
                if (node === null) {
                    this.resetMarkdownStyleTokens();
                    this.resetTopmostMarkdownStyleNode();
                    this.clearMarkdownStyleParseTreeTextarea();
                    return;
                }
                var parseTree = node.asParseTree(tokens), markdownStyleTokens = tokens, topmostMarkdownStyleNode = node; ///
                this.setMarkdownStyleTokens(markdownStyleTokens);
                this.setTopmostMarkdownStyleNode(topmostMarkdownStyleNode);
                this.updateMarkdownStyleParseTreeTextarea(parseTree);
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node === null) {
                    this.resetMarkdownTokens();
                    this.resetTopmostMarkdownNode();
                    this.clearMarkdownParseTreeTextarea();
                    return;
                }
                var context;
                var topmostMarkdownNode = node; ///
                context = {
                    tokens: tokens,
                    importer: _importer.importer
                };
                topmostMarkdownNode.resolve(context);
                var topmostMarkdownNodeParseTree = topmostMarkdownNode.asParseTree(tokens), markdownParseTree = topmostMarkdownNodeParseTree, markdownTokens = tokens; ///
                this.setMarkdownTokens(markdownTokens);
                this.setTopmostMarkdownNode(topmostMarkdownNode);
                this.updateMarkdownParseTreeTextarea(markdownParseTree);
            }
        },
        {
            key: "updateHTML",
            value: function updateHTML() {
                var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                this.clearXMP();
                this.clearPreviewDiv();
                this.clearPlainTextTextarea();
                this.clearHTMLParseTreeTextarea();
                this.clearPageButtonsDiv();
                var topmostMarkdownNode = this.getTopmostMarkdownNode(), topmostHTMLNode = (0, _dom.topmostHTMLNodeFromMarkdownNode)(topmostMarkdownNode);
                if (topmostHTMLNode === null) {
                    return;
                }
                var context;
                var markdownTokens = this.getMarkdownTokens(), tokens = markdownTokens; ///
                context = {
                    indexOptions: _indexOptions.default,
                    tokens: tokens
                };
                topmostHTMLNode.resolve(context);
                var divisionHTMLNOde = topmostHTMLNode.getDivisionHTMLNodeAt(index);
                if (divisionHTMLNOde === null) {
                    return;
                }
                var divisionHTMLNOdeParseTree = divisionHTMLNOde.asParseTree(), htmlParseTree = divisionHTMLNOdeParseTree, multiplicity = topmostHTMLNode.getMultiplicity(), length = multiplicity;
                context = {
                    tokens: tokens,
                    pathToURL: pathToURL
                };
                this.updateXMP(divisionHTMLNOde, context);
                this.updatePreviewDiv(divisionHTMLNOde, context);
                this.updatePlainTextTextarea(divisionHTMLNOde, context);
                this.updateHTMLParseTreeTextarea(htmlParseTree);
                this.updatePageButtonsDiv(length, index);
            }
        },
        {
            key: "updateCSS",
            value: function updateCSS() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), markdownStyleElementCSS = markdownStyleElement.update(markdownStyle);
                var topmostMarkdownStyleNode = this.getTopmostMarkdownStyleNode();
                if (topmostMarkdownStyleNode === null) {
                    return;
                }
                var context;
                var markdownStyleTokens = this.getMarkdownStyleTokens(), topmostCSSNode = (0, _dom.topmostCSSNodeFromMarkdownStyleNode)(topmostMarkdownStyleNode), tokens = markdownStyleTokens; ///
                context = {
                    tokens: tokens
                };
                topmostCSSNode.resolve(context);
                var selectorsString = _constants.PREVIEWED_DIV_SELECTORS_STRING;
                context = {
                    selectorsString: selectorsString
                };
                var topmostCSSNodeParseTree = topmostCSSNode.asParseTree(tokens), topmostCSSNodeCSS = topmostCSSNode.asCSS(context), cssParseTree = topmostCSSNodeParseTree;
                this.updateCSSParseTreeTextarea(cssParseTree);
                var css = "\n\n".concat(markdownStyleElementCSS, "    \n\n").concat(topmostCSSNodeCSS, "\n\n");
                this.setCSS(css);
            }
        },
        {
            key: "markdownStyle",
            value: function markdownStyle() {
                this.hideMarkdownContainerDiv();
                this.showMarkdownStyleContainerDiv();
            }
        },
        {
            key: "markdown",
            value: function markdown() {
                this.showMarkdownContainerDiv();
                this.hideMarkdownStyleContainerDiv();
            }
        },
        {
            key: "plainText",
            value: function plainText() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.showPlainTextContainerDiv();
                this.hideCSSParseTreeTextarea();
                this.showHTMLParseTreeTextarea();
            }
        },
        {
            key: "preview",
            value: function preview() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.showPreviewContainerDiv();
                this.hidePlainTextContainerDiv();
                this.hideCSSParseTreeTextarea();
                this.showHTMLParseTreeTextarea();
            }
        },
        {
            key: "html",
            value: function html() {
                this.hideCSSContainerDiv();
                this.showHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
                this.hideCSSParseTreeTextarea();
                this.showHTMLParseTreeTextarea();
            }
        },
        {
            key: "css",
            value: function css() {
                this.showCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
                this.showCSSParseTreeTextarea();
                this.hideHTMLParseTreeTextarea();
            }
        },
        {
            key: "resetMarkdownTokens",
            value: function resetMarkdownTokens() {
                var markdownTokens = null;
                this.setMarkdownTokens(markdownTokens);
            }
        },
        {
            key: "resetMarkdownStyleTokens",
            value: function resetMarkdownStyleTokens() {
                var markdownStyleTokens = null;
                this.setMarkdownStyleTokens(markdownStyleTokens);
            }
        },
        {
            key: "resetTopmostMarkdownNode",
            value: function resetTopmostMarkdownNode() {
                var topmostMarkdownNode = null;
                this.setTopmostMarkdownNode(topmostMarkdownNode);
            }
        },
        {
            key: "resetTopmostMarkdownStyleNode",
            value: function resetTopmostMarkdownStyleNode() {
                var topmostMarkdownStyleNode = null;
                this.setTopmostMarkdownStyleNode(topmostMarkdownStyleNode);
            }
        },
        {
            key: "getMarkdownTokens",
            value: function getMarkdownTokens() {
                var markdownTokens = this.getState().markdownTokens;
                return markdownTokens;
            }
        },
        {
            key: "getMarkdownStyleTokens",
            value: function getMarkdownStyleTokens() {
                var markdownStyleTokens = this.getState().markdownStyleTokens;
                return markdownStyleTokens;
            }
        },
        {
            key: "getTopmostMarkdownNode",
            value: function getTopmostMarkdownNode() {
                var topmostMMarkdownNode = this.getState().topmostMMarkdownNode;
                return topmostMMarkdownNode;
            }
        },
        {
            key: "getTopmostMarkdownStyleNode",
            value: function getTopmostMarkdownStyleNode() {
                var topmostMMarkdownStyleNode = this.getState().topmostMMarkdownStyleNode;
                return topmostMMarkdownStyleNode;
            }
        },
        {
            key: "setMarkdownTokens",
            value: function setMarkdownTokens(markdownTokens) {
                this.updateState({
                    markdownTokens: markdownTokens
                });
            }
        },
        {
            key: "setMarkdownStyleTokens",
            value: function setMarkdownStyleTokens(markdownStyleTokens) {
                this.updateState({
                    markdownStyleTokens: markdownStyleTokens
                });
            }
        },
        {
            key: "setTopmostMarkdownNode",
            value: function setTopmostMarkdownNode(topmostMMarkdownNode) {
                this.updateState({
                    topmostMMarkdownNode: topmostMMarkdownNode
                });
            }
        },
        {
            key: "setTopmostMarkdownStyleNode",
            value: function setTopmostMarkdownStyleNode(topmostMMarkdownStyleNode) {
                this.updateState({
                    topmostMMarkdownStyleNode: topmostMMarkdownStyleNode
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var markdownTokens = null, markdownStyleTokens = null, topmostMarkdownNode = null, topmostMarkdownStyleNode = null;
                this.setState({
                    markdownTokens: markdownTokens,
                    markdownStyleTokens: markdownStyleTokens,
                    topmostMarkdownNode: topmostMarkdownNode,
                    topmostMarkdownStyleNode: topmostMarkdownStyleNode
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.markdownStyle();
                this.css();
                this.update();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_left1.default, {
                    onCustomMarkdown: this.markdownCustomHandler,
                    onCustomMarkdownStyle: this.markdownStyleCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, {
                    onCustomCSS: this.cssCustomHandler,
                    onCustomHTML: this.htmlCustomHandler,
                    onCustomPreview: this.previewCustomHandler,
                    onCustomPlainText: this.plainTextCustomHandler
                }), /*#__PURE__*/ React.createElement(_pageButtons.default, {
                    onCustomPageUpdate: this.pageUpdateCustomHandler
                }), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html.default, null), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_plainText.default, null), /*#__PURE__*/ React.createElement(_html1.default, null), /*#__PURE__*/ React.createElement(_css1.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, _$initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = _$initialMarkdown; ///
                this.setMarkdownStyle(markdownStyle);
                this.setMarkdown(markdown);
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", _importer.initialMarkdown);
_define_property(View, "initialMarkdownStyle", "orderedItem.half-title {\n  colour: red;\n}");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function pathToURL(path) {
    var url = "https://static.djalbat.com/".concat(path);
    return url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBNYXJrZG93bkxleGVyLCBNYXJrZG93blBhcnNlciwgTWFya2Rvd25TdHlsZUxleGVyLCBNYXJrZG93blN0eWxlUGFyc2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmltcG9ydCBpbmRleE9wdGlvbnMgZnJvbSBcIi4vaW5kZXhPcHRpb25zXCI7XG5pbXBvcnQgUGFnZUJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvcGFnZUJ1dHRvbnNcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IENTU0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvY3NzXCI7XG5pbXBvcnQgSFRNTENvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvaHRtbFwiO1xuaW1wb3J0IExlZnRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0VGFiQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi90YWJCdXR0b25zL3JpZ2h0XCI7XG5pbXBvcnQgUHJldmlld0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvcHJldmlld1wiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IENTU1BhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2Nzc1wiO1xuaW1wb3J0IEhUTUxQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZS9odG1sXCI7XG5pbXBvcnQgUGxhaW5UZXh0Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wbGFpblRleHRcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blN0eWxlXCI7XG5cbmltcG9ydCB7IGltcG9ydGVyLCBpbml0aWFsTWFya2Rvd24gfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuaW1wb3J0IHsgUFJFVklFV0VEX0RJVl9TRUxFQ1RPUlNfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0b3Btb3N0SFRNTE5vZGVGcm9tTWFya2Rvd25Ob2RlLCB0b3Btb3N0Q1NTTm9kZUZyb21NYXJrZG93blN0eWxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZG9tXCI7XG5cbmNvbnN0IG1hcmtkb3duTGV4ZXIgPSBNYXJrZG93bkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blBhcnNlciA9IE1hcmtkb3duUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlTGV4ZXIgPSBNYXJrZG93blN0eWxlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVQYXJzZXIgPSBNYXJrZG93blN0eWxlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdGhpcy51cGRhdGVIVE1MKGluZGV4KTtcbiAgfVxuXG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBwbGFpblRleHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wbGFpblRleHQoKTtcbiAgfVxuXG4gIHByZXZpZXdDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wcmV2aWV3KCk7XG4gIH1cblxuICBrZXlVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgaHRtbEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmh0bWwoKTtcbiAgfVxuXG4gIGNzc0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmNzcygpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZSgpO1xuXG4gICAgdGhpcy51cGRhdGVNYXJrZG93bigpO1xuXG4gICAgdGhpcy51cGRhdGVIVE1MKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUNTUygpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd25TdHlsZSgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCksXG4gICAgICAgICAgbGV4ZXIgPSBtYXJrZG93blN0eWxlTGV4ZXIsIC8vL1xuICAgICAgICAgIHBhcnNlciA9IG1hcmtkb3duU3R5bGVQYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93blN0eWxlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRNYXJrZG93blN0eWxlVG9rZW5zKCk7XG5cbiAgICAgIHRoaXMucmVzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMgPSB0b2tlbnMsIC8vL1xuICAgICAgICAgIHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUodG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICBsZXhlciA9IG1hcmtkb3duTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25QYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRNYXJrZG93blRva2VucygpO1xuXG4gICAgICB0aGlzLnJlc2V0VG9wbW9zdE1hcmtkb3duTm9kZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgaW1wb3J0ZXJcbiAgICB9O1xuXG4gICAgdG9wbW9zdE1hcmtkb3duTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZVBhcnNlVHJlZSA9IHRvcG1vc3RNYXJrZG93bk5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBtYXJrZG93blBhcnNlVHJlZSA9IHRvcG1vc3RNYXJrZG93bk5vZGVQYXJzZVRyZWUsIC8vL1xuICAgICAgICAgIG1hcmtkb3duVG9rZW5zID0gdG9rZW5zOyAgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duVG9rZW5zKG1hcmtkb3duVG9rZW5zKTtcblxuICAgIHRoaXMuc2V0VG9wbW9zdE1hcmtkb3duTm9kZSh0b3Btb3N0TWFya2Rvd25Ob2RlKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShtYXJrZG93blBhcnNlVHJlZSk7XG4gIH1cblxuICB1cGRhdGVIVE1MKGluZGV4ID0gMCkge1xuICAgIHRoaXMuY2xlYXJYTVAoKTtcblxuICAgIHRoaXMuY2xlYXJQcmV2aWV3RGl2KCk7XG5cbiAgICB0aGlzLmNsZWFyUGxhaW5UZXh0VGV4dGFyZWEoKTtcblxuICAgIHRoaXMuY2xlYXJIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgIHRoaXMuY2xlYXJQYWdlQnV0dG9uc0RpdigpO1xuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0VG9wbW9zdE1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIHRvcG1vc3RIVE1MTm9kZSA9IHRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGUodG9wbW9zdE1hcmtkb3duTm9kZSk7XG5cbiAgICBpZiAodG9wbW9zdEhUTUxOb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb25zdCBtYXJrZG93blRva2VucyA9IHRoaXMuZ2V0TWFya2Rvd25Ub2tlbnMoKSxcbiAgICAgICAgICB0b2tlbnMgPSBtYXJrZG93blRva2VuczsgIC8vL1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIGluZGV4T3B0aW9ucyxcbiAgICAgIHRva2Vuc1xuICAgIH07XG5cbiAgICB0b3Btb3N0SFRNTE5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5PZGUgPSB0b3Btb3N0SFRNTE5vZGUuZ2V0RGl2aXNpb25IVE1MTm9kZUF0KGluZGV4KTtcblxuICAgIGlmIChkaXZpc2lvbkhUTUxOT2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSA9IGRpdmlzaW9uSFRNTE5PZGUuYXNQYXJzZVRyZWUoKSxcbiAgICAgICAgICBodG1sUGFyc2VUcmVlID0gZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSwgIC8vL1xuICAgICAgICAgIG11bHRpcGxpY2l0eSA9IHRvcG1vc3RIVE1MTm9kZS5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBsZW5ndGggPSBtdWx0aXBsaWNpdHk7XG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgcGF0aFRvVVJMXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlWE1QKGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQbGFpblRleHRUZXh0YXJlYShkaXZpc2lvbkhUTUxOT2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKGh0bWxQYXJzZVRyZWUpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcbiAgfVxuXG4gIHVwZGF0ZUNTUygpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVFbGVtZW50IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZSgpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVFbGVtZW50Q1NTID0gbWFya2Rvd25TdHlsZUVsZW1lbnQudXBkYXRlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlID0gdGhpcy5nZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUoKTtcblxuICAgIGlmICh0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVUb2tlbnMgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVUb2tlbnMoKSxcbiAgICAgICAgICB0b3Btb3N0Q1NTTm9kZSA9IHRvcG1vc3RDU1NOb2RlRnJvbU1hcmtkb3duU3R5bGVOb2RlKHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSksXG4gICAgICAgICAgdG9rZW5zID0gbWFya2Rvd25TdHlsZVRva2VuczsgIC8vL1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHRva2Vuc1xuICAgIH07XG5cbiAgICB0b3Btb3N0Q1NTTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc2VsZWN0b3JzU3RyaW5nID0gUFJFVklFV0VEX0RJVl9TRUxFQ1RPUlNfU1RSSU5HO1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHNlbGVjdG9yc1N0cmluZ1xuICAgIH07XG5cbiAgICBjb25zdCB0b3Btb3N0Q1NTTm9kZVBhcnNlVHJlZSA9IHRvcG1vc3RDU1NOb2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgdG9wbW9zdENTU05vZGVDU1MgPSB0b3Btb3N0Q1NTTm9kZS5hc0NTUyhjb250ZXh0KSxcbiAgICAgICAgICBjc3NQYXJzZVRyZWUgPSB0b3Btb3N0Q1NTTm9kZVBhcnNlVHJlZTtcblxuICAgIHRoaXMudXBkYXRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoY3NzUGFyc2VUcmVlKTtcblxuICAgIGNvbnN0IGNzcyA9IGBcblxuJHttYXJrZG93blN0eWxlRWxlbWVudENTU30gICAgXG5cbiR7dG9wbW9zdENTU05vZGVDU1N9XG5cbmA7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLmhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuc2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgcHJldmlldygpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5oaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLnNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIGh0bWwoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93SFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5zaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICBjc3MoKSB7XG4gICAgdGhpcy5zaG93Q1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuc2hvd0NTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5oaWRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICByZXNldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbDtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpO1xuICB9XG5cbiAgcmVzZXRNYXJrZG93blN0eWxlVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVUb2tlbnMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpO1xuICB9XG5cbiAgcmVzZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUpO1xuICB9XG5cbiAgcmVzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUoKSB7XG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSk7XG4gIH1cblxuICBnZXRNYXJrZG93blRva2VucygpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duVG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25Ub2tlbnM7XG4gIH1cblxuICBnZXRNYXJrZG93blN0eWxlVG9rZW5zKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZVRva2VucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVUb2tlbnM7XG4gIH1cblxuICBnZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdE1NYXJrZG93bk5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0TU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGdldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlO1xuICB9XG5cbiAgc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtkb3duVG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvcG1vc3RNYXJrZG93bk5vZGUodG9wbW9zdE1NYXJrZG93bk5vZGUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRvcG1vc3RNTWFya2Rvd25Ob2RlXG4gICAgfSk7XG4gIH1cblxuICBzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUodG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICB0b3Btb3N0TWFya2Rvd25Ob2RlID0gbnVsbCxcbiAgICAgICAgICB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXJrZG93blRva2VucyxcbiAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMsXG4gICAgICB0b3Btb3N0TWFya2Rvd25Ob2RlLFxuICAgICAgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm1hcmtkb3duU3R5bGUoKTtcblxuICAgIHRoaXMuY3NzKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxMZWZ0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbU1hcmtkb3duPXt0aGlzLm1hcmtkb3duQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21NYXJrZG93blN0eWxlPXt0aGlzLm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93bkNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFRhYkJ1dHRvbnNEaXYgb25DdXN0b21DU1M9e3RoaXMuY3NzQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21IVE1MPXt0aGlzLmh0bWxDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVByZXZpZXc9e3RoaXMucHJldmlld0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUGxhaW5UZXh0PXt0aGlzLnBsYWluVGV4dEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBhZ2VCdXR0b25zRGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17dGhpcy5wYWdlVXBkYXRlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxDU1NDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPEhUTUxDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFByZXZpZXdDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFBsYWluVGV4dENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SFRNTFBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICAgIDxDU1NQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbE1hcmtkb3duLCBpbml0aWFsTWFya2Rvd25TdHlsZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gaW5pdGlhbE1hcmtkb3duU3R5bGUsIC8vL1xuICAgICAgICAgIG1hcmtkb3duID0gaW5pdGlhbE1hcmtkb3duOyAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMuc2V0TWFya2Rvd24obWFya2Rvd24pO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjtcblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBgb3JkZXJlZEl0ZW0uaGFsZi10aXRsZSB7XG4gIGNvbG91cjogcmVkO1xufWA7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm1hcmtkb3duU3R5bGVFbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiBwYXRoVG9VUkwocGF0aCkge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9zdGF0aWMuZGphbGJhdC5jb20vJHtwYXRofWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cbiJdLCJuYW1lcyI6WyJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJNYXJrZG93blN0eWxlUGFyc2VyIiwiVmlldyIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaW5kZXgiLCJ1cGRhdGVIVE1MIiwibWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIiLCJtYXJrZG93blN0eWxlIiwibWFya2Rvd25DdXN0b21IYW5kbGVyIiwibWFya2Rvd24iLCJwbGFpblRleHRDdXN0b21IYW5kbGVyIiwicGxhaW5UZXh0IiwicHJldmlld0N1c3RvbUhhbmRsZXIiLCJwcmV2aWV3Iiwia2V5VXBDdXN0b21IYW5kbGVyIiwidXBkYXRlIiwiaHRtbEN1c3RvbUhhbmRsZXIiLCJodG1sIiwiY3NzQ3VzdG9tSGFuZGxlciIsImNzcyIsInVwZGF0ZU1hcmtkb3duU3R5bGUiLCJ1cGRhdGVNYXJrZG93biIsInVwZGF0ZUNTUyIsImdldE1hcmtkb3duU3R5bGUiLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsInN0YXJ0UnVsZSIsImdldFN0YXJ0UnVsZSIsIm5vZGUiLCJwYXJzZSIsInJlc2V0TWFya2Rvd25TdHlsZVRva2VucyIsInJlc2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlIiwiY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsIm1hcmtkb3duU3R5bGVUb2tlbnMiLCJ0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUiLCJzZXRNYXJrZG93blN0eWxlVG9rZW5zIiwic2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlIiwidXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwiZ2V0TWFya2Rvd24iLCJyZXNldE1hcmtkb3duVG9rZW5zIiwicmVzZXRUb3Btb3N0TWFya2Rvd25Ob2RlIiwiY2xlYXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY29udGV4dCIsInRvcG1vc3RNYXJrZG93bk5vZGUiLCJpbXBvcnRlciIsInJlc29sdmUiLCJ0b3Btb3N0TWFya2Rvd25Ob2RlUGFyc2VUcmVlIiwibWFya2Rvd25QYXJzZVRyZWUiLCJtYXJrZG93blRva2VucyIsInNldE1hcmtkb3duVG9rZW5zIiwic2V0VG9wbW9zdE1hcmtkb3duTm9kZSIsInVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhclhNUCIsImNsZWFyUHJldmlld0RpdiIsImNsZWFyUGxhaW5UZXh0VGV4dGFyZWEiLCJjbGVhckhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyUGFnZUJ1dHRvbnNEaXYiLCJnZXRUb3Btb3N0TWFya2Rvd25Ob2RlIiwidG9wbW9zdEhUTUxOb2RlIiwidG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZSIsImdldE1hcmtkb3duVG9rZW5zIiwiaW5kZXhPcHRpb25zIiwiZGl2aXNpb25IVE1MTk9kZSIsImdldERpdmlzaW9uSFRNTE5vZGVBdCIsImRpdmlzaW9uSFRNTE5PZGVQYXJzZVRyZWUiLCJodG1sUGFyc2VUcmVlIiwibXVsdGlwbGljaXR5IiwiZ2V0TXVsdGlwbGljaXR5IiwibGVuZ3RoIiwicGF0aFRvVVJMIiwidXBkYXRlWE1QIiwidXBkYXRlUHJldmlld0RpdiIsInVwZGF0ZVBsYWluVGV4dFRleHRhcmVhIiwidXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwidXBkYXRlUGFnZUJ1dHRvbnNEaXYiLCJtYXJrZG93blN0eWxlRWxlbWVudCIsInByb3BlcnRpZXMiLCJtYXJrZG93blN0eWxlRWxlbWVudENTUyIsImdldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSIsImdldE1hcmtkb3duU3R5bGVUb2tlbnMiLCJ0b3Btb3N0Q1NTTm9kZSIsInRvcG1vc3RDU1NOb2RlRnJvbU1hcmtkb3duU3R5bGVOb2RlIiwic2VsZWN0b3JzU3RyaW5nIiwiUFJFVklFV0VEX0RJVl9TRUxFQ1RPUlNfU1RSSU5HIiwidG9wbW9zdENTU05vZGVQYXJzZVRyZWUiLCJ0b3Btb3N0Q1NTTm9kZUNTUyIsImFzQ1NTIiwiY3NzUGFyc2VUcmVlIiwidXBkYXRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJzZXRDU1MiLCJoaWRlTWFya2Rvd25Db250YWluZXJEaXYiLCJzaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93bkNvbnRhaW5lckRpdiIsImhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiaGlkZUNTU0NvbnRhaW5lckRpdiIsImhpZGVIVE1MQ29udGFpbmVyRGl2IiwiaGlkZVByZXZpZXdDb250YWluZXJEaXYiLCJzaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2IiwiaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhIiwic2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInNob3dQcmV2aWV3Q29udGFpbmVyRGl2IiwiaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dIVE1MQ29udGFpbmVyRGl2Iiwic2hvd0NTU0NvbnRhaW5lckRpdiIsInNob3dDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImhpZGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJnZXRTdGF0ZSIsInRvcG1vc3RNTWFya2Rvd25Ob2RlIiwidG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJMZWZ0VGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tTWFya2Rvd24iLCJvbkN1c3RvbU1hcmtkb3duU3R5bGUiLCJNYXJrZG93bkNvbnRhaW5lckRpdiIsIm9uQ3VzdG9tS2V5VXAiLCJNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbUNTUyIsIm9uQ3VzdG9tSFRNTCIsIm9uQ3VzdG9tUHJldmlldyIsIm9uQ3VzdG9tUGxhaW5UZXh0IiwiUGFnZUJ1dHRvbnNEaXYiLCJvbkN1c3RvbVBhZ2VVcGRhdGUiLCJDU1NDb250YWluZXJEaXYiLCJIVE1MQ29udGFpbmVyRGl2IiwiUHJldmlld0NvbnRhaW5lckRpdiIsIlBsYWluVGV4dENvbnRhaW5lckRpdiIsIkhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsIkNTU1BhcnNlVHJlZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxNYXJrZG93biIsImluaXRpYWxNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwicGF0aCIsInVybCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeWNBOzs7ZUFBQTs7O29FQXZjc0I7b0JBRUU7MEJBQzRDO3FCQUNtQjttRUFFOUQ7a0VBQ0U7MkRBQ0M7MERBQ0E7MkRBQ0M7NERBQ0M7NERBQ0M7OERBQ0M7K0RBQ0M7MkRBQ0E7NERBQ0M7Z0VBQ0E7b0VBQ0k7d0JBRUk7eUJBQ0s7bUJBQ3NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJGLElBQU1BLGdCQUFnQkMsb0JBQWEsQ0FBQ0MsV0FBVyxJQUN6Q0MsaUJBQWlCQyxxQkFBYyxDQUFDRixXQUFXLElBQzNDRyxxQkFBcUJDLHlCQUFrQixDQUFDSixXQUFXLElBQ25ESyxzQkFBc0JDLDBCQUFtQixDQUFDTixXQUFXO0FBRTNELElBQUEsQUFBTU8scUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsa0JBQ0pDLHdCQUFBQSwyQkFBMEIsU0FBQ0MsT0FBT0MsU0FBU0M7WUFDekMsTUFBS0MsVUFBVSxDQUFDRDtRQUNsQixJQUVBRSx3QkFBQUEsOEJBQTZCLFNBQUNKLE9BQU9DO1lBQ25DLE1BQUtJLGFBQWE7UUFDcEIsSUFFQUMsd0JBQUFBLHlCQUF3QixTQUFDTixPQUFPQztZQUM5QixNQUFLTSxRQUFRO1FBQ2YsSUFFQUMsd0JBQUFBLDBCQUF5QixTQUFDUixPQUFPQztZQUMvQixNQUFLUSxTQUFTO1FBQ2hCLElBRUFDLHdCQUFBQSx3QkFBdUIsU0FBQ1YsT0FBT0M7WUFDN0IsTUFBS1UsT0FBTztRQUNkLElBRUFDLHdCQUFBQSxzQkFBcUIsU0FBQ1osT0FBT0M7WUFDM0IsTUFBS1ksTUFBTTtRQUNiLElBRUFDLHdCQUFBQSxxQkFBb0IsU0FBQ2QsT0FBT0M7WUFDMUIsTUFBS2MsSUFBSTtRQUNYLElBRUFDLHdCQUFBQSxvQkFBbUIsU0FBQ2hCLE9BQU9DO1lBQ3pCLE1BQUtnQixHQUFHO1FBQ1Y7OztrQkEvQkluQjs7WUFpQ0plLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNLLG1CQUFtQjtnQkFFeEIsSUFBSSxDQUFDQyxjQUFjO2dCQUVuQixJQUFJLENBQUNoQixVQUFVO2dCQUVmLElBQUksQ0FBQ2lCLFNBQVM7WUFDaEI7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWIsZ0JBQWdCLElBQUksQ0FBQ2dCLGdCQUFnQixJQUNyQ0MsUUFBUTVCLG9CQUNSNkIsU0FBUzNCLHFCQUNUNEIsVUFBVW5CLGVBQ1ZvQixTQUFTSCxNQUFNSSxRQUFRLENBQUNGLFVBQ3hCRyxZQUFZSixPQUFPSyxZQUFZLElBQy9CQyxPQUFPTixPQUFPTyxLQUFLLENBQUNMLFFBQVFFO2dCQUVsQyxJQUFJRSxTQUFTLE1BQU07b0JBQ2pCLElBQUksQ0FBQ0Usd0JBQXdCO29CQUU3QixJQUFJLENBQUNDLDZCQUE2QjtvQkFFbEMsSUFBSSxDQUFDQyxtQ0FBbUM7b0JBRXhDO2dCQUNGO2dCQUVBLElBQU1DLFlBQVlMLEtBQUtNLFdBQVcsQ0FBQ1YsU0FDN0JXLHNCQUFzQlgsUUFDdEJZLDJCQUEyQlIsTUFBTSxHQUFHO2dCQUUxQyxJQUFJLENBQUNTLHNCQUFzQixDQUFDRjtnQkFFNUIsSUFBSSxDQUFDRywyQkFBMkIsQ0FBQ0Y7Z0JBRWpDLElBQUksQ0FBQ0csb0NBQW9DLENBQUNOO1lBQzVDOzs7WUFFQWYsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1aLFdBQVcsSUFBSSxDQUFDa0MsV0FBVyxJQUMzQm5CLFFBQVFqQyxlQUNSa0MsU0FBVS9CLGdCQUNWZ0MsVUFBVWpCLFVBQ1ZrQixTQUFTSCxNQUFNSSxRQUFRLENBQUNGLFVBQ3hCSyxPQUFPTixPQUFPTyxLQUFLLENBQUNMO2dCQUUxQixJQUFJSSxTQUFTLE1BQU07b0JBQ2pCLElBQUksQ0FBQ2EsbUJBQW1CO29CQUV4QixJQUFJLENBQUNDLHdCQUF3QjtvQkFFN0IsSUFBSSxDQUFDQyw4QkFBOEI7b0JBRW5DO2dCQUNGO2dCQUVBLElBQUlDO2dCQUVKLElBQU1DLHNCQUFzQmpCLE1BQU0sR0FBRztnQkFFckNnQixVQUFVO29CQUNScEIsUUFBQUE7b0JBQ0FzQixVQUFBQSxrQkFBUTtnQkFDVjtnQkFFQUQsb0JBQW9CRSxPQUFPLENBQUNIO2dCQUU1QixJQUFNSSwrQkFBK0JILG9CQUFvQlgsV0FBVyxDQUFDVixTQUMvRHlCLG9CQUFvQkQsOEJBQ3BCRSxpQkFBaUIxQixRQUFTLEdBQUc7Z0JBRW5DLElBQUksQ0FBQzJCLGlCQUFpQixDQUFDRDtnQkFFdkIsSUFBSSxDQUFDRSxzQkFBc0IsQ0FBQ1A7Z0JBRTVCLElBQUksQ0FBQ1EsK0JBQStCLENBQUNKO1lBQ3ZDOzs7WUFFQS9DLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBV0QsUUFBQUEsaUVBQVE7Z0JBQ2pCLElBQUksQ0FBQ3FELFFBQVE7Z0JBRWIsSUFBSSxDQUFDQyxlQUFlO2dCQUVwQixJQUFJLENBQUNDLHNCQUFzQjtnQkFFM0IsSUFBSSxDQUFDQywwQkFBMEI7Z0JBRS9CLElBQUksQ0FBQ0MsbUJBQW1CO2dCQUV4QixJQUFNYixzQkFBc0IsSUFBSSxDQUFDYyxzQkFBc0IsSUFDakRDLGtCQUFrQkMsSUFBQUEsb0NBQStCLEVBQUNoQjtnQkFFeEQsSUFBSWUsb0JBQW9CLE1BQU07b0JBQzVCO2dCQUNGO2dCQUVBLElBQUloQjtnQkFFSixJQUFNTSxpQkFBaUIsSUFBSSxDQUFDWSxpQkFBaUIsSUFDdkN0QyxTQUFTMEIsZ0JBQWlCLEdBQUc7Z0JBRW5DTixVQUFVO29CQUNSbUIsY0FBQUEscUJBQVk7b0JBQ1p2QyxRQUFBQTtnQkFDRjtnQkFFQW9DLGdCQUFnQmIsT0FBTyxDQUFDSDtnQkFFeEIsSUFBTW9CLG1CQUFtQkosZ0JBQWdCSyxxQkFBcUIsQ0FBQ2hFO2dCQUUvRCxJQUFJK0QscUJBQXFCLE1BQU07b0JBQzdCO2dCQUNGO2dCQUVBLElBQU1FLDRCQUE0QkYsaUJBQWlCOUIsV0FBVyxJQUN4RGlDLGdCQUFnQkQsMkJBQ2hCRSxlQUFlUixnQkFBZ0JTLGVBQWUsSUFDOUNDLFNBQVNGO2dCQUVmeEIsVUFBVTtvQkFDUnBCLFFBQUFBO29CQUNBK0MsV0FBQUE7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDQyxTQUFTLENBQUNSLGtCQUFrQnBCO2dCQUVqQyxJQUFJLENBQUM2QixnQkFBZ0IsQ0FBQ1Qsa0JBQWtCcEI7Z0JBRXhDLElBQUksQ0FBQzhCLHVCQUF1QixDQUFDVixrQkFBa0JwQjtnQkFFL0MsSUFBSSxDQUFDK0IsMkJBQTJCLENBQUNSO2dCQUVqQyxJQUFJLENBQUNTLG9CQUFvQixDQUFDTixRQUFRckU7WUFDcEM7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRTBELHVCQUF5QixJQUFJLENBQUNDLFVBQVUsQ0FBeENELHNCQUNGekUsZ0JBQWdCLElBQUksQ0FBQ2dCLGdCQUFnQixJQUNyQzJELDBCQUEwQkYscUJBQXFCakUsTUFBTSxDQUFDUjtnQkFFNUQsSUFBTWdDLDJCQUEyQixJQUFJLENBQUM0QywyQkFBMkI7Z0JBRWpFLElBQUk1Qyw2QkFBNkIsTUFBTTtvQkFDckM7Z0JBQ0Y7Z0JBRUEsSUFBSVE7Z0JBRUosSUFBTVQsc0JBQXNCLElBQUksQ0FBQzhDLHNCQUFzQixJQUNqREMsaUJBQWlCQyxJQUFBQSx3Q0FBbUMsRUFBQy9DLDJCQUNyRFosU0FBU1cscUJBQXNCLEdBQUc7Z0JBRXhDUyxVQUFVO29CQUNScEIsUUFBQUE7Z0JBQ0Y7Z0JBRUEwRCxlQUFlbkMsT0FBTyxDQUFDSDtnQkFFdkIsSUFBTXdDLGtCQUFrQkMseUNBQThCO2dCQUV0RHpDLFVBQVU7b0JBQ1J3QyxpQkFBQUE7Z0JBQ0Y7Z0JBRUEsSUFBTUUsMEJBQTBCSixlQUFlaEQsV0FBVyxDQUFDVixTQUNyRCtELG9CQUFvQkwsZUFBZU0sS0FBSyxDQUFDNUMsVUFDekM2QyxlQUFlSDtnQkFFckIsSUFBSSxDQUFDSSwwQkFBMEIsQ0FBQ0Q7Z0JBRWhDLElBQU16RSxNQUFNLEFBQUMsT0FJZnVFLE9BRkFSLHlCQUF3QixZQUVOLE9BQWxCUSxtQkFBa0I7Z0JBSWhCLElBQUksQ0FBQ0ksTUFBTSxDQUFDM0U7WUFDZDs7O1lBRUFaLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUN3Rix3QkFBd0I7Z0JBQzdCLElBQUksQ0FBQ0MsNkJBQTZCO1lBQ3BDOzs7WUFFQXZGLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUN3Rix3QkFBd0I7Z0JBQzdCLElBQUksQ0FBQ0MsNkJBQTZCO1lBQ3BDOzs7WUFFQXZGLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUN3RixtQkFBbUI7Z0JBQ3hCLElBQUksQ0FBQ0Msb0JBQW9CO2dCQUN6QixJQUFJLENBQUNDLHVCQUF1QjtnQkFDNUIsSUFBSSxDQUFDQyx5QkFBeUI7Z0JBRTlCLElBQUksQ0FBQ0Msd0JBQXdCO2dCQUM3QixJQUFJLENBQUNDLHlCQUF5QjtZQUNoQzs7O1lBRUEzRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDc0YsbUJBQW1CO2dCQUN4QixJQUFJLENBQUNDLG9CQUFvQjtnQkFDekIsSUFBSSxDQUFDSyx1QkFBdUI7Z0JBQzVCLElBQUksQ0FBQ0MseUJBQXlCO2dCQUU5QixJQUFJLENBQUNILHdCQUF3QjtnQkFDN0IsSUFBSSxDQUFDQyx5QkFBeUI7WUFDaEM7OztZQUVBdkYsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ2tGLG1CQUFtQjtnQkFDeEIsSUFBSSxDQUFDUSxvQkFBb0I7Z0JBQ3pCLElBQUksQ0FBQ04sdUJBQXVCO2dCQUM1QixJQUFJLENBQUNLLHlCQUF5QjtnQkFFOUIsSUFBSSxDQUFDSCx3QkFBd0I7Z0JBQzdCLElBQUksQ0FBQ0MseUJBQXlCO1lBQ2hDOzs7WUFFQXJGLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUN5RixtQkFBbUI7Z0JBQ3hCLElBQUksQ0FBQ1Isb0JBQW9CO2dCQUN6QixJQUFJLENBQUNDLHVCQUF1QjtnQkFDNUIsSUFBSSxDQUFDSyx5QkFBeUI7Z0JBRTlCLElBQUksQ0FBQ0csd0JBQXdCO2dCQUM3QixJQUFJLENBQUNDLHlCQUF5QjtZQUNoQzs7O1lBRUFsRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVMsaUJBQWlCO2dCQUV2QixJQUFJLENBQUNDLGlCQUFpQixDQUFDRDtZQUN6Qjs7O1lBRUFwQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUssc0JBQXNCO2dCQUU1QixJQUFJLENBQUNFLHNCQUFzQixDQUFDRjtZQUM5Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRyxzQkFBc0I7Z0JBRTVCLElBQUksQ0FBQ08sc0JBQXNCLENBQUNQO1lBQzlCOzs7WUFFQWQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1LLDJCQUEyQjtnQkFFakMsSUFBSSxDQUFDRSwyQkFBMkIsQ0FBQ0Y7WUFDbkM7OztZQUVBMEIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRVosaUJBQW1CLElBQUksQ0FBQzBELFFBQVEsR0FBaEMxRDtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQStCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUU5QyxzQkFBd0IsSUFBSSxDQUFDeUUsUUFBUSxHQUFyQ3pFO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBd0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRWtELHVCQUF5QixJQUFJLENBQUNELFFBQVEsR0FBdENDO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBN0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRThCLDRCQUE4QixJQUFJLENBQUNGLFFBQVEsR0FBM0NFO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBM0QsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkQsY0FBYztnQkFDOUIsSUFBSSxDQUFDNkQsV0FBVyxDQUFDO29CQUNmN0QsZ0JBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBYixLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCRixtQkFBbUI7Z0JBQ3hDLElBQUksQ0FBQzRFLFdBQVcsQ0FBQztvQkFDZjVFLHFCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJ5RCxvQkFBb0I7Z0JBQ3pDLElBQUksQ0FBQ0UsV0FBVyxDQUFDO29CQUNmRixzQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUF2RSxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCd0UseUJBQXlCO2dCQUNuRCxJQUFJLENBQUNDLFdBQVcsQ0FBQztvQkFDZkQsMkJBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTlELGlCQUFpQixNQUNqQmYsc0JBQXNCLE1BQ3RCVSxzQkFBc0IsTUFDdEJULDJCQUEyQjtnQkFFakMsSUFBSSxDQUFDNkUsUUFBUSxDQUFDO29CQUNaL0QsZ0JBQUFBO29CQUNBZixxQkFBQUE7b0JBQ0FVLHFCQUFBQTtvQkFDQVQsMEJBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBOEUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQzlHLGFBQWE7Z0JBRWxCLElBQUksQ0FBQ1ksR0FBRztnQkFFUixJQUFJLENBQUNKLE1BQU07WUFDYjs7O1lBRUF1RyxLQUFBQTttQkFBQUEsU0FBQUE7WUFDRSxHQUFHO1lBQ0w7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHNCQUFVLHNCQUNULG9CQUFDQyxhQUFlLHNCQUNkLG9CQUFDQyxjQUFpQjtvQkFBQ0Msa0JBQWtCLElBQUksQ0FBQ25ILHFCQUFxQjtvQkFBRW9ILHVCQUF1QixJQUFJLENBQUN0SCwwQkFBMEI7a0NBQ3ZILG9CQUFDdUgsaUJBQW9CO29CQUFDQyxlQUFlLElBQUksQ0FBQ2hILGtCQUFrQjtrQ0FDNUQsb0JBQUNpSCxzQkFBeUI7b0JBQUNELGVBQWUsSUFBSSxDQUFDaEgsa0JBQWtCO21DQUVuRSxvQkFBQ2tILCtCQUFtQix1QkFDcEIsb0JBQUNDLHFCQUFTLHNCQUNSLG9CQUFDQyxtQkFBTyxzQkFDTixvQkFBQ0MsY0FBa0I7b0JBQUNDLGFBQWEsSUFBSSxDQUFDbEgsZ0JBQWdCO29CQUNsQ21ILGNBQWMsSUFBSSxDQUFDckgsaUJBQWlCO29CQUNwQ3NILGlCQUFpQixJQUFJLENBQUMxSCxvQkFBb0I7b0JBQzFDMkgsbUJBQW1CLElBQUksQ0FBQzdILHNCQUFzQjtrQ0FFbEUsb0JBQUM4SCxvQkFBYztvQkFBQ0Msb0JBQW9CLElBQUksQ0FBQ3hJLHVCQUF1QjtrQ0FDaEUsb0JBQUN5SSxZQUFlLHVCQUNoQixvQkFBQ0MsYUFBZ0IsdUJBQ2pCLG9CQUFDQyxnQkFBbUIsdUJBQ3BCLG9CQUFDQyxrQkFBcUIsdUJBQ3RCLG9CQUFDQyxjQUFxQix1QkFDdEIsb0JBQUNDLGFBQW9CO1lBTS9COzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYTtnQkFFbEIsSUFBSSxDQUFDOUIsZUFBZTtnQkFFcEIsSUFBa0Qsb0JBQUEsSUFBSSxDQUFDK0IsV0FBVyxFQUExREMsb0JBQTBDLGtCQUExQ0EsaUJBQWlCQyx1QkFBeUIsa0JBQXpCQSxzQkFDbkI3SSxnQkFBZ0I2SSxzQkFDaEIzSSxXQUFXMEksbUJBQWlCLEdBQUc7Z0JBRXJDLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUM5STtnQkFFdEIsSUFBSSxDQUFDK0ksV0FBVyxDQUFDN0k7WUFDbkI7OztXQXZaSVQ7cUJBQWF1SixhQUFPO0FBeVp4QixpQkF6Wkl2SixNQXlaR21KLG1CQUFrQkEseUJBQWU7QUFFeEMsaUJBM1pJbkosTUEyWkdvSix3QkFBd0I7QUFJL0IsaUJBL1pJcEosTUErWkd3SixXQUFVO0FBRWpCLGlCQWphSXhKLE1BaWFHeUoscUJBQW9CO0lBQ3pCO0NBQ0Q7QUFFRCxpQkFyYUl6SixNQXFhRzBKLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQzVKO0FBTXpCLFNBQVMwRSxVQUFVbUYsSUFBSTtJQUNyQixJQUFNQyxNQUFNLEFBQUMsOEJBQWtDLE9BQUxEO0lBRTFDLE9BQU9DO0FBQ1QifQ==
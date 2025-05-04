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
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/pageButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/html"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _dom = require("../utilities/dom");
var _importer = require("./importer");
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
        _this = _call_super(this, View, arguments), _define_property(_this, "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        }), _define_property(_this, "pageUpdateCustomHandler", function(event, element, index) {
            _this.updateMarkdown();
            _this.updateHTML(index);
        }), _define_property(_this, "plainTextCustomHandler", function(event, element) {
            _this.plainText();
        }), _define_property(_this, "markdownCustomHandler", function(event, element) {
            _this.markdown();
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
            }
        },
        {
            key: "updateHTML",
            value: function updateHTML() {
                var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                var topmostHTMLNode = this.getTopmostHTMLNode();
                if (topmostHTMLNode === null) {
                    this.clearXMP();
                    this.clearPreviewDiv();
                    this.clearPlainTextTextarea();
                    this.clearHTMLParseTreeTextarea();
                    this.clearPageButtonsDiv();
                    return;
                }
                var context;
                var tokens = this.getTokens(), divisionHTMLNOde = topmostHTMLNode.getDivisionHTMLNodeAt(index), divisionHTMLNOdeParseTree = divisionHTMLNOde.asParseTree(), htmlParseTree = divisionHTMLNOdeParseTree; ///
                context = {
                    tokens: tokens,
                    pathToURL: pathToURL
                };
                this.updateXMP(divisionHTMLNOde, context);
                this.updatePreviewDiv(divisionHTMLNOde, context);
                this.updatePlainTextTextarea(divisionHTMLNOde, context);
                this.updateHTMLParseTreeTextarea(htmlParseTree);
                this.updatePageButtonsDiv(index);
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node === null) {
                    this.resetTokens();
                    this.resetTopmostHTMLNode();
                    this.clearMarkdownParseTreeTextarea();
                    return;
                }
                var context;
                var topmostMarkdownNode = node; ///
                context = {
                    tokens: tokens,
                    importer: _importer.importer,
                    nodeFromTokens: nodeFromTokens,
                    tokensFromContent: tokensFromContent
                };
                topmostMarkdownNode.resolve(context);
                var topmostHTMLNode = (0, _dom.htmlNodeFromMarkdownNode)(topmostMarkdownNode), maximumPageLines = 1;
                context = {
                    tokens: tokens,
                    maximumPageLines: maximumPageLines
                };
                topmostHTMLNode.resolve(context);
                var topmostMarkdownNodeParseTree = topmostMarkdownNode.asParseTree(tokens), markdownParseTree = topmostMarkdownNodeParseTree, multiplicity = topmostHTMLNode.getMultiplicity(), length = multiplicity, index = 0;
                this.setTokens(tokens);
                this.setTopmostHTMLNode(topmostHTMLNode);
                this.updatePageButtonsDiv(length, index);
                this.updateMarkdownParseTreeTextarea(markdownParseTree);
            }
        },
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), css = markdownStyleElement.update(markdownStyle);
                this.setCSS(css);
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), node = parser.parse(tokens, startRule);
                if (node !== null) {
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownStyleParseTreeTextarea(parseTree);
                } else {
                    this.clearMarkdownStyleParseTreeTextarea();
                }
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
            key: "plainText",
            value: function plainText() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.showPlainTextContainerDiv();
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
            key: "preview",
            value: function preview() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.showPreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "html",
            value: function html() {
                this.hideCSSContainerDiv();
                this.showHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "css",
            value: function css() {
                this.showCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "resetTokens",
            value: function resetTokens() {
                var tokens = null;
                this.setTokens(tokens);
            }
        },
        {
            key: "resetTopmostHTMLNode",
            value: function resetTopmostHTMLNode() {
                var topmostHTMLNode = null;
                this.setTopmostHTMLNode(topmostHTMLNode);
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                var tokens = this.getState().tokens;
                return tokens;
            }
        },
        {
            key: "getTopmostHTMLNode",
            value: function getTopmostHTMLNode() {
                var topmostMHTMLNode = this.getState().topmostMHTMLNode;
                return topmostMHTMLNode;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.updateState({
                    tokens: tokens
                });
            }
        },
        {
            key: "setTopmostHTMLNode",
            value: function setTopmostHTMLNode(topmostMHTMLNode) {
                this.updateState({
                    topmostMHTMLNode: topmostMHTMLNode
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var tokens = null, topmostHTMLNode = null;
                this.setState({
                    tokens: tokens,
                    topmostHTMLNode: topmostHTMLNode
                });
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
                }), /*#__PURE__*/ React.createElement(_html.default, null), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_plainText.default, null), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html1.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, _$initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = _$initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
                this.css();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", _importer.initialMarkdown);
_define_property(View, "initialMarkdownStyle", "width: 100%;\nheight: 100%;\nfont-size: 2rem;\ntext-align: left;  \n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function tokensFromContent(content) {
    var tokens = markdownLexer.tokenise(content);
    return tokens;
}
function nodeFromTokens(tokens) {
    var startRuleName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var ruleMap = markdownParser.getRuleMap(), startRule = startRuleName !== null ? ruleMap[startRuleName] : markdownParser.getStartRule(), node = markdownParser.parse(tokens, startRule);
    return node;
}
function pathToURL(path) {
    var url = "https://static.djalbat.com/".concat(path);
    return url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBNYXJrZG93bkxleGVyLCBNYXJrZG93blBhcnNlciwgTWFya2Rvd25TdHlsZUxleGVyLCBNYXJrZG93blN0eWxlUGFyc2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmltcG9ydCBQYWdlQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wYWdlQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgQ1NTQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9jc3NcIjtcbmltcG9ydCBIVE1MQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9odG1sXCI7XG5pbXBvcnQgTGVmdFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvcmlnaHRcIjtcbmltcG9ydCBQcmV2aWV3Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wcmV2aWV3XCI7XG5pbXBvcnQgTWFya2Rvd25Db250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duXCI7XG5pbXBvcnQgUGxhaW5UZXh0Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wbGFpblRleHRcIjtcbmltcG9ydCBIVE1MUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvaHRtbFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgaHRtbE5vZGVGcm9tTWFya2Rvd25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kb21cIjtcbmltcG9ydCB7IGltcG9ydGVyLCBpbml0aWFsTWFya2Rvd24gfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuXG5jb25zdCBtYXJrZG93bkxleGVyID0gTWFya2Rvd25MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25QYXJzZXIgPSBNYXJrZG93blBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZUxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlUGFyc2VyID0gTWFya2Rvd25TdHlsZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUhUTUwoaW5kZXgpO1xuICB9XG5cbiAgcGxhaW5UZXh0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucGxhaW5UZXh0KCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBwcmV2aWV3Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucHJldmlldygpO1xuICB9XG5cbiAga2V5VXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGh0bWxDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5odG1sKCk7XG4gIH1cblxuICBjc3NDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5jc3MoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGUoKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd24oKTtcblxuICAgIHRoaXMudXBkYXRlSFRNTCgpO1xuICB9XG5cbiAgdXBkYXRlSFRNTChpbmRleCA9IDApIHtcbiAgICBjb25zdCB0b3Btb3N0SFRNTE5vZGUgPSB0aGlzLmdldFRvcG1vc3RIVE1MTm9kZSgpO1xuXG4gICAgaWYgKHRvcG1vc3RIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5jbGVhclhNUCgpO1xuXG4gICAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuXG4gICAgICB0aGlzLmNsZWFyUGxhaW5UZXh0VGV4dGFyZWEoKTtcblxuICAgICAgdGhpcy5jbGVhckhUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFnZUJ1dHRvbnNEaXYoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOT2RlID0gdG9wbW9zdEhUTUxOb2RlLmdldERpdmlzaW9uSFRNTE5vZGVBdChpbmRleCksXG4gICAgICAgICAgZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSA9IGRpdmlzaW9uSFRNTE5PZGUuYXNQYXJzZVRyZWUoKSxcbiAgICAgICAgICBodG1sUGFyc2VUcmVlID0gZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZTsgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgcGF0aFRvVVJMXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlWE1QKGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQbGFpblRleHRUZXh0YXJlYShkaXZpc2lvbkhUTUxOT2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKGh0bWxQYXJzZVRyZWUpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihpbmRleCk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICBsZXhlciA9IG1hcmtkb3duTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25QYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRUb2tlbnMoKTtcblxuICAgICAgdGhpcy5yZXNldFRvcG1vc3RIVE1MTm9kZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgaW1wb3J0ZXIsXG4gICAgICBub2RlRnJvbVRva2VucyxcbiAgICAgIHRva2Vuc0Zyb21Db250ZW50XG4gICAgfTtcblxuICAgIHRvcG1vc3RNYXJrZG93bk5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRvcG1vc3RIVE1MTm9kZSA9IGh0bWxOb2RlRnJvbU1hcmtkb3duTm9kZSh0b3Btb3N0TWFya2Rvd25Ob2RlKSxcbiAgICAgICAgICBtYXhpbXVtUGFnZUxpbmVzID0gMTtcblxuICAgIGNvbnRleHQgPSB7XG4gICAgICB0b2tlbnMsXG4gICAgICBtYXhpbXVtUGFnZUxpbmVzLFxuICAgIH07XG5cbiAgICB0b3Btb3N0SFRNTE5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGVQYXJzZVRyZWUgPSB0b3Btb3N0TWFya2Rvd25Ob2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgbWFya2Rvd25QYXJzZVRyZWUgPSB0b3Btb3N0TWFya2Rvd25Ob2RlUGFyc2VUcmVlLCAvLy9cbiAgICAgICAgICBtdWx0aXBsaWNpdHkgPSB0b3Btb3N0SFRNTE5vZGUuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgICAgbGVuZ3RoID0gbXVsdGlwbGljaXR5LCAgLy8vXG4gICAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcblxuICAgIHRoaXMuc2V0VG9wbW9zdEhUTUxOb2RlKHRvcG1vc3RIVE1MTm9kZSk7XG5cbiAgICB0aGlzLnVwZGF0ZVBhZ2VCdXR0b25zRGl2KGxlbmd0aCwgaW5kZXgpO1xuXG4gICAgdGhpcy51cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKG1hcmtkb3duUGFyc2VUcmVlKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duU3R5bGUoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlRWxlbWVudCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKSxcbiAgICAgICAgICBjc3MgPSBtYXJrZG93blN0eWxlRWxlbWVudC51cGRhdGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuXG4gICAgY29uc3QgbGV4ZXIgPSBtYXJrZG93blN0eWxlTGV4ZXIsIC8vL1xuICAgICAgICAgIHBhcnNlciA9IG1hcmtkb3duU3R5bGVQYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93blN0eWxlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEocGFyc2VUcmVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtkb3duU3R5bGUoKSB7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBwbGFpblRleHQoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dQbGFpblRleHRDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcHJldmlldygpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgaHRtbCgpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgY3NzKCkge1xuICAgIHRoaXMuc2hvd0NTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG4gIH1cblxuICByZXNldFRva2VucygpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcbiAgfVxuXG4gIHJlc2V0VG9wbW9zdEhUTUxOb2RlKCkge1xuICAgIGNvbnN0IHRvcG1vc3RIVE1MTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRvcG1vc3RIVE1MTm9kZSh0b3Btb3N0SFRNTE5vZGUpO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VG9wbW9zdEhUTUxOb2RlKCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdE1IVE1MTm9kZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRvcG1vc3RNSFRNTE5vZGU7XG4gIH1cblxuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB0b2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvcG1vc3RIVE1MTm9kZSh0b3Btb3N0TUhUTUxOb2RlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB0b3Btb3N0TUhUTUxOb2RlXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICB0b3Btb3N0SFRNTE5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b2tlbnMsXG4gICAgICB0b3Btb3N0SFRNTE5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPExlZnRUYWJCdXR0b25zRGl2IG9uQ3VzdG9tTWFya2Rvd249e3RoaXMubWFya2Rvd25DdXN0b21IYW5kbGVyfSBvbkN1c3RvbU1hcmtkb3duU3R5bGU9e3RoaXMubWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbUNTUz17dGhpcy5jc3NDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbUhUTUw9e3RoaXMuaHRtbEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUHJldmlldz17dGhpcy5wcmV2aWV3Q3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21QbGFpblRleHQ9e3RoaXMucGxhaW5UZXh0Q3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UGFnZUJ1dHRvbnNEaXYgb25DdXN0b21QYWdlVXBkYXRlPXt0aGlzLnBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgICAgPEhUTUxDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFByZXZpZXdDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPFBsYWluVGV4dENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8Q1NTQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxIVE1MUGFyc2VUcmVlVGV4dGFyZWEvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxNYXJrZG93biwgaW5pdGlhbE1hcmtkb3duU3R5bGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IGluaXRpYWxNYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICBtYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duKG1hcmtkb3duKTtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB0aGlzLmNzcygpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjtcblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBgd2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG5mb250LXNpemU6IDJyZW07XG50ZXh0LWFsaWduOiBsZWZ0OyAgXG5gO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJtYXJrZG93blN0eWxlRWxlbWVudFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCkge1xuICBjb25zdCB0b2tlbnMgPSBtYXJrZG93bkxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIG5vZGVGcm9tVG9rZW5zKHRva2Vucywgc3RhcnRSdWxlTmFtZSA9IG51bGwpIHtcbiAgY29uc3QgcnVsZU1hcCA9IG1hcmtkb3duUGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgc3RhcnRSdWxlID0gKHN0YXJ0UnVsZU5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBydWxlTWFwW3N0YXJ0UnVsZU5hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtkb3duUGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICBub2RlID0gbWFya2Rvd25QYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBwYXRoVG9VUkwocGF0aCkge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9zdGF0aWMuZGphbGJhdC5jb20vJHtwYXRofWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cbiJdLCJuYW1lcyI6WyJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJNYXJrZG93blN0eWxlUGFyc2VyIiwiVmlldyIsIm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibWFya2Rvd25TdHlsZSIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiaW5kZXgiLCJ1cGRhdGVNYXJrZG93biIsInVwZGF0ZUhUTUwiLCJwbGFpblRleHRDdXN0b21IYW5kbGVyIiwicGxhaW5UZXh0IiwibWFya2Rvd25DdXN0b21IYW5kbGVyIiwibWFya2Rvd24iLCJwcmV2aWV3Q3VzdG9tSGFuZGxlciIsInByZXZpZXciLCJrZXlVcEN1c3RvbUhhbmRsZXIiLCJ1cGRhdGUiLCJodG1sQ3VzdG9tSGFuZGxlciIsImh0bWwiLCJjc3NDdXN0b21IYW5kbGVyIiwiY3NzIiwidXBkYXRlTWFya2Rvd25TdHlsZSIsInRvcG1vc3RIVE1MTm9kZSIsImdldFRvcG1vc3RIVE1MTm9kZSIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2IiwiY2xlYXJQbGFpblRleHRUZXh0YXJlYSIsImNsZWFySFRNTFBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJQYWdlQnV0dG9uc0RpdiIsImNvbnRleHQiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJkaXZpc2lvbkhUTUxOT2RlIiwiZ2V0RGl2aXNpb25IVE1MTm9kZUF0IiwiZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwiaHRtbFBhcnNlVHJlZSIsInBhdGhUb1VSTCIsInVwZGF0ZVhNUCIsInVwZGF0ZVByZXZpZXdEaXYiLCJ1cGRhdGVQbGFpblRleHRUZXh0YXJlYSIsInVwZGF0ZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZVBhZ2VCdXR0b25zRGl2IiwiZ2V0TWFya2Rvd24iLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInJlc2V0VG9rZW5zIiwicmVzZXRUb3Btb3N0SFRNTE5vZGUiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJ0b3Btb3N0TWFya2Rvd25Ob2RlIiwiaW1wb3J0ZXIiLCJub2RlRnJvbVRva2VucyIsInRva2Vuc0Zyb21Db250ZW50IiwicmVzb2x2ZSIsImh0bWxOb2RlRnJvbU1hcmtkb3duTm9kZSIsIm1heGltdW1QYWdlTGluZXMiLCJ0b3Btb3N0TWFya2Rvd25Ob2RlUGFyc2VUcmVlIiwibWFya2Rvd25QYXJzZVRyZWUiLCJtdWx0aXBsaWNpdHkiLCJnZXRNdWx0aXBsaWNpdHkiLCJsZW5ndGgiLCJzZXRUb2tlbnMiLCJzZXRUb3Btb3N0SFRNTE5vZGUiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZ2V0TWFya2Rvd25TdHlsZSIsInNldENTUyIsInN0YXJ0UnVsZSIsImdldFN0YXJ0UnVsZSIsInBhcnNlVHJlZSIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwiaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJoaWRlQ1NTQ29udGFpbmVyRGl2IiwiaGlkZUhUTUxDb250YWluZXJEaXYiLCJoaWRlUHJldmlld0NvbnRhaW5lckRpdiIsInNob3dQbGFpblRleHRDb250YWluZXJEaXYiLCJzaG93TWFya2Rvd25Db250YWluZXJEaXYiLCJoaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dQcmV2aWV3Q29udGFpbmVyRGl2IiwiaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dIVE1MQ29udGFpbmVyRGl2Iiwic2hvd0NTU0NvbnRhaW5lckRpdiIsImdldFN0YXRlIiwidG9wbW9zdE1IVE1MTm9kZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIkxlZnRTaXplYWJsZURpdiIsIkxlZnRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21NYXJrZG93biIsIm9uQ3VzdG9tTWFya2Rvd25TdHlsZSIsIk1hcmtkb3duQ29udGFpbmVyRGl2Iiwib25DdXN0b21LZXlVcCIsIk1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiUm93c0RpdiIsIlJpZ2h0VGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tQ1NTIiwib25DdXN0b21IVE1MIiwib25DdXN0b21QcmV2aWV3Iiwib25DdXN0b21QbGFpblRleHQiLCJQYWdlQnV0dG9uc0RpdiIsIm9uQ3VzdG9tUGFnZVVwZGF0ZSIsIkhUTUxDb250YWluZXJEaXYiLCJQcmV2aWV3Q29udGFpbmVyRGl2IiwiUGxhaW5UZXh0Q29udGFpbmVyRGl2IiwiQ1NTQ29udGFpbmVyRGl2IiwiSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxNYXJrZG93biIsImluaXRpYWxNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd24iLCJzZXRNYXJrZG93blN0eWxlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwic3RhcnRSdWxlTmFtZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwicGF0aCIsInVybCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcVZBOzs7ZUFBQTs7O29FQW5Wc0I7b0JBRUU7MEJBQzRDO3FCQUNtQjtrRUFFNUQ7MkRBQ0M7MERBQ0E7MkRBQ0M7NERBQ0M7NERBQ0M7OERBQ0M7K0RBQ0M7Z0VBQ0M7NERBQ0E7b0VBQ0k7bUJBRUc7d0JBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTUEsZ0JBQWdCQyxvQkFBYSxDQUFDQyxXQUFXLElBQ3pDQyxpQkFBaUJDLHFCQUFjLENBQUNGLFdBQVcsSUFDM0NHLHFCQUFxQkMseUJBQWtCLENBQUNKLFdBQVcsSUFDbkRLLHNCQUFzQkMsMEJBQW1CLENBQUNOLFdBQVc7QUFFM0QsSUFBQSxBQUFNTyxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxrQkFDSkMsd0JBQUFBLDhCQUE2QixTQUFDQyxPQUFPQztZQUNuQyxNQUFLQyxhQUFhO1FBQ3BCLElBRUFDLHdCQUFBQSwyQkFBMEIsU0FBQ0gsT0FBT0MsU0FBU0c7WUFDekMsTUFBS0MsY0FBYztZQUVuQixNQUFLQyxVQUFVLENBQUNGO1FBQ2xCLElBRUFHLHdCQUFBQSwwQkFBeUIsU0FBQ1AsT0FBT0M7WUFDL0IsTUFBS08sU0FBUztRQUNoQixJQUVBQyx3QkFBQUEs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
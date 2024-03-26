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
var _xmp = /*#__PURE__*/ _interop_require_default(require("./view/xmp"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/right"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/textarea/markdown"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
var _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
var _index = require("../index");
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
var bnf = _index.MarkdownParser.bnf, entries = _index.MarkdownLexer.entries;
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
            key: "update",
            value: function update() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                var parseTree = null;
                if (node !== null) {
                    var context = {
                        tokens: tokens
                    }, html = node.asHTML(context);
                    this.xmpHTML(html);
                    parseTree = node.asParseTree(tokens);
                } else {
                    this.clearXMP();
                }
                this.setParseTree(parseTree);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null)), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_xmp.default, null)), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Markdown"), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onKeyUp: this.keyUpHandler
                }))))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var initialMarkdown = this.constructor.initialMarkdown, markdown = initialMarkdown, lexicalEntries = entries; ///
                this.setBNF(bnf);
                this.setMarkdown(markdown);
                this.setLexicalEntries(lexicalEntries);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", "# Introduction\n\nI have tried to make Occam[^occam] as useable as possible but there are limits.\nAt the end of the day it is an expert system and some of its parts, not least the verifier, need detailed explanations.\nIt is the purpose of this book is to provide these explanations.\n\nThis book also goes into consdierable detail on the subject of Occam's approach to language, which largely boils down to its use of grammars.\nOccam has what might be called a default language or vernacular, called Florence,[^florence] but it will also support controlled natural languages in the near future.\nIndeed, the verifier cannot distinguish between these languages at all.\nThis book explains how this is possible.\n\nAfter explaining Occam's approach to language this book gives a very detailed explanation of how the verifier works.\nSome may find this nauseating but I maintain that it is essential.\nThe whole idea behind Occam is to facilitate human reasoning and not to supplant it, and it is the verifier that reasons on your behalf.\nSo you must understand how it works.\nIn fact I recommend that you read the introduction together with the first four chapters of the Foundations book before going much further with this one.\nThey are neither very long nor very deep and will provide the necessary background for understanding the verifier in particular.\n\nI hope that the verifier's implenentation is both transparent and readable, and therefore understandable, especially augmented as it is with the explanation here.\nApart from anything else even a partial understanding will likely save a good deal of frustration when you begin to work seriously with Occam.\nThe other reason for understanding the verifier is that it has not been verified itself.\nSo you cannot simply press a button and have confidence in it, that is not the idea at all.\n\nIn fact, at the risk of courting controversy, I would argue that it should not be the idea with any verifier.\nAll are failible regardless of what their proponents may claim and therefore I do not believe that their results should ever be trusted without some level of human oversight.\nIndeed in my opinion verification should be an aid to clarity and rigour and never a substitute for it.\nThe idea of a proof as a black box in particular is anathema to me.\n\nMoving on, the standpoint that software should be an aid to human reasonibg and not a substitute for it must these days be tempered by a consideration of artificial intelligence as a tool for reasoning.\nWhat inspired me over the near decade of work that it took to get Occam to its first viable release was a firm belief in what I call the four elephants, expounded in the aforementtioned first four chapters of the Foundations book.\nI had not heard of large language models when I started out and they were never a motivating factor, but as I came to my first milestone after those many years, they began to loom large.\n\nThe resurgence of artificial intelligence in recent years has hardly changed my view on the relationship between software and humans apropos of reasoning, however.\nAdmittedly of late there has been some progress in the direction of coupling artificial intelligence models with formal reasoning systems.\nFor its part Occam only has a bearing on the right hand side of this coupling, so to speak.\nIt is much more flexible and extensible than systems where inference rules are hard-coded, however.\nMoreover on the left hand side, so to speak, the output of potentially any large language model or such like can serve as input for Occam.\n\nThus the panacea of using computers as tools for symbolic reasoning, be that devising algorithms or protocols; discovering new mathematics or logic; or whatever, is almost upon us.\nAnd it is worth pointing out that this panacea has been eagerly anticipated for around seventy five years now.\nThere is no doubt that artificial intelligence is on the verge of bringing of all this about, but without tools such as Occam the output of artificial intelligence models will always be clouded in doubt.\n\nI hope and expect Occam to become an indespensible tool for at least some of those working in a field of symbolic reasoning in the coming years.\nAmongst other things it will enable them to leverage artificial intelligence to aid their own enquiries but artificial intelligence will not, at least not in the foreseeable future, supplant them.\n\n[^occam]: The word Occam is used somewhat nebulously here.\nIt is most often associated with Occam's IDE but in fact it encompasses a range of software and services.\nThis book explains these divers parts and there is a companion book, called The Foundations of Symbolic Reasoning, that covers the underlying theory.\n\n[^florence]: Occam was originally called Florence but the former seemed more apt.\n");
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgWE1QIGZyb20gXCIuL3ZpZXcveG1wXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1hcmtkb3duVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9tYXJrZG93blwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmltcG9ydCB7IE1hcmtkb3duTGV4ZXIsIE1hcmtkb3duUGFyc2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBNYXJrZG93blBhcnNlcixcbiAgICAgIHsgZW50cmllcyB9ID0gTWFya2Rvd25MZXhlcjtcblxuY29uc3QgbWFya2Rvd25MZXhlciA9IE1hcmtkb3duTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duUGFyc2VyID0gTWFya2Rvd25QYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIGxleGVyID0gbWFya2Rvd25MZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9ICBtYXJrZG93blBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBodG1sID0gbm9kZS5hc0hUTUwoY29udGV4dCk7XG5cbiAgICAgIHRoaXMueG1wSFRNTChodG1sKTtcblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyWE1QKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBCTkZcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEvPlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxYTVAvPlxuICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdi8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIE1hcmtkb3duXG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxNYXJrZG93blRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxNYXJrZG93biB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBtYXJrZG93biA9IGluaXRpYWxNYXJrZG93biwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duKG1hcmtkb3duKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBgIyBJbnRyb2R1Y3Rpb25cblxuSSBoYXZlIHRyaWVkIHRvIG1ha2UgT2NjYW1bXm9jY2FtXSBhcyB1c2VhYmxlIGFzIHBvc3NpYmxlIGJ1dCB0aGVyZSBhcmUgbGltaXRzLlxuQXQgdGhlIGVuZCBvZiB0aGUgZGF5IGl0IGlzIGFuIGV4cGVydCBzeXN0ZW0gYW5kIHNvbWUgb2YgaXRzIHBhcnRzLCBub3QgbGVhc3QgdGhlIHZlcmlmaWVyLCBuZWVkIGRldGFpbGVkIGV4cGxhbmF0aW9ucy5cbkl0IGlzIHRoZSBwdXJwb3NlIG9mIHRoaXMgYm9vayBpcyB0byBwcm92aWRlIHRoZXNlIGV4cGxhbmF0aW9ucy5cblxuVGhpcyBib29rIGFsc28gZ29lcyBpbnRvIGNvbnNkaWVyYWJsZSBkZXRhaWwgb24gdGhlIHN1YmplY3Qgb2YgT2NjYW0ncyBhcHByb2FjaCB0byBsYW5ndWFnZSwgd2hpY2ggbGFyZ2VseSBib2lscyBkb3duIHRvIGl0cyB1c2Ugb2YgZ3JhbW1hcnMuXG5PY2NhbSBoYXMgd2hhdCBtaWdodCBiZSBjYWxsZWQgYSBkZWZhdWx0IGxhbmd1YWdlIG9yIHZlcm5hY3VsYXIsIGNhbGxlZCBGbG9yZW5jZSxbXmZsb3JlbmNlXSBidXQgaXQgd2lsbCBhbHNvIHN1cHBvcnQgY29udHJvbGxlZCBuYXR1cmFsIGxhbmd1YWdlcyBpbiB0aGUgbmVhciBmdXR1cmUuXG5JbmRlZWQsIHRoZSB2ZXJpZmllciBjYW5ub3QgZGlzdGluZ3Vpc2ggYmV0d2VlbiB0aGVzZSBsYW5ndWFnZXMgYXQgYWxsLlxuVGhpcyBib29rIGV4cGxhaW5zIGhvdyB0aGlzIGlzIHBvc3NpYmxlLlxuXG5BZnRlciBleHBsYWluaW5nIE9jY2FtJ3MgYXBwcm9hY2ggdG8gbGFuZ3VhZ2UgdGhpcyBib29rIGdpdmVzIGEgdmVyeSBkZXRhaWxlZCBleHBsYW5hdGlvbiBvZiBob3cgdGhlIHZlcmlmaWVyIHdvcmtzLlxuU29tZSBtYXkgZmluZCB0aGlzIG5hdXNlYXRpbmcgYnV0IEkgbWFpbnRhaW4gdGhhdCBpdCBpcyBlc3NlbnRpYWwuXG5UaGUgd2hvbGUgaWRlYSBiZWhpbmQgT2NjYW0gaXMgdG8gZmFjaWxpdGF0ZSBodW1hbiByZWFzb25pbmcgYW5kIG5vdCB0byBzdXBwbGFudCBpdCwgYW5kIGl0IGlzIHRoZSB2ZXJpZmllciB0aGF0IHJlYXNvbnMgb24geW91ciBiZWhhbGYuXG5TbyB5b3UgbXVzdCB1bmRlcnN0YW5kIGhvdyBpdCB3b3Jrcy5cbkluIGZhY3QgSSByZWNvbW1lbmQgdGhhdCB5b3UgcmVhZCB0aGUgaW50cm9kdWN0aW9uIHRvZ2V0aGVyIHdpdGggdGhlIGZpcnN0IGZvdXIgY2hhcHRlcnMgb2YgdGhlIEZvdW5kYXRpb25zIGJvb2sgYmVmb3JlIGdvaW5nIG11Y2ggZnVydGhlciB3aXRoIHRoaXMgb25lLlxuVGhleSBhcmUgbmVpdGhlciB2ZXJ5IGxvbmcgbm9yIHZlcnkgZGVlcCBhbmQgd2lsbCBwcm92aWRlIHRoZSBuZWNlc3NhcnkgYmFja2dyb3VuZCBmb3IgdW5kZXJzdGFuZGluZyB0aGUgdmVyaWZpZXIgaW4gcGFydGljdWxhci5cblxuSSBob3BlIHRoYXQgdGhlIHZlcmlmaWVyJ3MgaW1wbGVuZW50YXRpb24gaXMgYm90aCB0cmFuc3BhcmVudCBhbmQgcmVhZGFibGUsIGFuZCB0aGVyZWZvcmUgdW5kZXJzdGFuZGFibGUsIGVzcGVjaWFsbHkgYXVnbWVudGVkIGFzIGl0IGlzIHdpdGggdGhlIGV4cGxhbmF0aW9uIGhlcmUuXG5BcGFydCBmcm9tIGFueXRoaW5nIGVsc2UgZXZlbiBhIHBhcnRpYWwgdW5kZXJzdGFuZGluZyB3aWxsIGxpa2VseSBzYXZlIGEgZ29vZCBkZWFsIG9mIGZydXN0cmF0aW9uIHdoZW4geW91IGJlZ2luIHRvIHdvcmsgc2VyaW91c2x5IHdpdGggT2NjYW0uXG5UaGUgb3RoZXIgcmVhc29uIGZvciB1bmRlcnN0YW5kaW5nIHRoZSB2ZXJpZmllciBpcyB0aGF0IGl0IGhhcyBub3QgYmVlbiB2ZXJpZmllZCBpdHNlbGYuXG5TbyB5b3UgY2Fubm90IHNpbXBseSBwcmVzcyBhIGJ1dHRvbiBhbmQgaGF2ZSBjb25maWRlbmNlIGluIGl0LCB0aGF0IGlzIG5vdCB0aGUgaWRlYSBhdCBhbGwuXG5cbkluIGZhY3QsIGF0IHRoZSByaXNrIG9mIGNvdXJ0aW5nIGNvbnRyb3ZlcnN5LCBJIHdvdWxkIGFyZ3VlIHRoYXQgaXQgc2hvdWxkIG5vdCBiZSB0aGUgaWRlYSB3aXRoIGFueSB2ZXJpZmllci5cbkFsbCBhcmUgZmFpbGlibGUgcmVnYXJkbGVzcyBvZiB3aGF0IHRoZWlyIHByb3BvbmVudHMgbWF5IGNsYWltIGFuZCB0aGVyZWZvcmUgSSBkbyBub3QgYmVsaWV2ZSB0aGF0IHRoZWlyIHJlc3VsdHMgc2hvdWxkIGV2ZXIgYmUgdHJ1c3RlZCB3aXRob3V0IHNvbWUgbGV2ZWwgb2YgaHVtYW4gb3ZlcnNpZ2h0LlxuSW5kZWVkIGluIG15IG9waW5pb24gdmVyaWZpY2F0aW9uIHNob3VsZCBiZSBhbiBhaWQgdG8gY2xhcml0eSBhbmQgcmlnb3VyIGFuZCBuZXZlciBhIHN1YnN0aXR1dGUgZm9yIGl0LlxuVGhlIGlkZWEgb2YgYSBwcm9vZiBhcyBhIGJsYWNrIGJveCBpbiBwYXJ0aWN1bGFyIGlzIGFuYXRoZW1hIHRvIG1lLlxuXG5Nb3Zpbmcgb24sIHRoZSBzdGFuZHBvaW50IHRoYXQgc29mdHdhcmUgc2hvdWxkIGJlIGFuIGFpZCB0byBodW1hbiByZWFzb25pYmcgYW5kIG5vdCBhIHN1YnN0aXR1dGUgZm9yIGl0IG11c3QgdGhlc2UgZGF5cyBiZSB0ZW1wZXJlZCBieSBhIGNvbnNpZGVyYXRpb24gb2YgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgYXMgYSB0b29sIGZvciByZWFzb25pbmcuXG5XaGF0IGluc3BpcmVkIG1lIG92ZXIgdGhlIG5lYXIgZGVjYWRlIG9mIHdvcmsgdGhhdCBpdCB0b29rIHRvIGdldCBPY2NhbSB0byBpdHMgZmlyc3QgdmlhYmxlIHJlbGVhc2Ugd2FzIGEgZmlybSBiZWxpZWYgaW4gd2hhdCBJIGNhbGwgdGhlIGZvdXIgZWxlcGhhbnRzLCBleHBvdW5kZWQgaW4gdGhlIGFmb3JlbWVudHRpb25lZCBmaXJzdCBmb3VyIGNoYXB0ZXJzIG9mIHRoZSBGb3VuZGF0aW9ucyBib29rLlxuSSBoYWQgbm90IGhlYXJkIG9mIGxhcmdlIGxhbmd1YWdlIG1vZGVscyB3aGVuIEkgc3RhcnRlZCBvdXQgYW5kIHRoZXkgd2VyZSBuZXZlciBhIG1vdGl2YXRpbmcgZmFjdG9yLCBidXQgYXMgSSBjYW1lIHRvIG15IGZpcnN0IG1pbGVzdG9uZSBhZnRlciB0aG9zZSBtYW55IHllYXJzLCB0aGV5IGJlZ2FuIHRvIGxvb20gbGFyZ2UuXG5cblRoZSByZXN1cmdlbmNlIG9mIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIGluIHJlY2VudCB5ZWFycyBoYXMgaGFyZGx5IGNoYW5nZWQgbXkgdmlldyBvbiB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4gc29mdHdhcmUgYW5kIGh1bWFucyBhcHJvcG9zIG9mIHJlYXNvbmluZywgaG93ZXZlci5cbkFkbWl0dGVkbHkgb2YgbGF0ZSB0aGVyZSBoYXMgYmVlbiBzb21lIHByb2dyZXNzIGluIHRoZSBkaXJlY3Rpb24gb2YgY291cGxpbmcgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgbW9kZWxzIHdpdGggZm9ybWFsIHJlYXNvbmluZyBzeXN0ZW1zLlxuRm9yIGl0cyBwYXJ0IE9jY2FtIG9ubHkgaGFzIGEgYmVhcmluZyBvbiB0aGUgcmlnaHQgaGFuZCBzaWRlIG9mIHRoaXMgY291cGxpbmcsIHNvIHRvIHNwZWFrLlxuSXQgaXMgbXVjaCBtb3JlIGZsZXhpYmxlIGFuZCBleHRlbnNpYmxlIHRoYW4gc3lzdGVtcyB3aGVyZSBpbmZlcmVuY2UgcnVsZXMgYXJlIGhhcmQtY29kZWQsIGhvd2V2ZXIuXG5Nb3Jlb3ZlciBvbiB0aGUgbGVmdCBoYW5kIHNpZGUsIHNvIHRvIHNwZWFrLCB0aGUgb3V0cHV0IG9mIHBvdGVudGlhbGx5IGFueSBsYXJnZSBsYW5ndWFnZSBtb2RlbCBvciBzdWNoIGxpa2UgY2FuIHNlcnZlIGFzIGlucHV0IGZvciBPY2NhbS5cblxuVGh1cyB0aGUgcGFuYWNlYSBvZiB1c2luZyBjb21wdXRlcnMgYXMgdG9vbHMgZm9yIHN5bWJvbGljIHJlYXNvbmluZywgYmUgdGhhdCBkZXZpc2luZyBhbGdvcml0aG1zIG9yIHByb3RvY29sczsgZGlzY292ZXJpbmcgbmV3IG1hdGhlbWF0aWNzIG9yIGxvZ2ljOyBvciB3aGF0ZXZlciwgaXMgYWxtb3N0IHVwb24gdXMuXG5BbmQgaXQgaXMgd29ydGggcG9pbnRpbmcgb3V0IHRoYXQgdGhpcyBwYW5hY2VhIGhhcyBiZWVuIGVhZ2VybHkgYW50aWNpcGF0ZWQgZm9yIGFyb3VuZCBzZXZlbnR5IGZpdmUgeWVhcnMgbm93LlxuVGhlcmUgaXMgbm8gZG91YnQgdGhhdCBhcnRpZmljaWFsIGludGVsbGlnZW5jZSBpcyBvbiB0aGUgdmVyZ2Ugb2YgYnJpbmdpbmcgb2YgYWxsIHRoaXMgYWJvdXQsIGJ1dCB3aXRob3V0IHRvb2xzIHN1Y2ggYXMgT2NjYW0gdGhlIG91dHB1dCBvZiBhcnRpZmljaWFsIGludGVsbGlnZW5jZSBtb2RlbHMgd2lsbCBhbHdheXMgYmUgY2xvdWRlZCBpbiBkb3VidC5cblxuSSBob3BlIGFuZCBleHBlY3QgT2NjYW0gdG8gYmVjb21lIGFuIGluZGVzcGVuc2libGUgdG9vbCBmb3IgYXQgbGVhc3Qgc29tZSBvZiB0aG9zZSB3b3JraW5nIGluIGEgZmllbGQgb2Ygc3ltYm9saWMgcmVhc29uaW5nIGluIHRoZSBjb21pbmcgeWVhcnMuXG5BbW9uZ3N0IG90aGVyIHRoaW5ncyBpdCB3aWxsIGVuYWJsZSB0aGVtIHRvIGxldmVyYWdlIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIHRvIGFpZCB0aGVpciBvd24gZW5xdWlyaWVzIGJ1dCBhcnRpZmljaWFsIGludGVsbGlnZW5jZSB3aWxsIG5vdCwgYXQgbGVhc3Qgbm90IGluIHRoZSBmb3Jlc2VlYWJsZSBmdXR1cmUsIHN1cHBsYW50IHRoZW0uXG5cblteb2NjYW1dOiBUaGUgd29yZCBPY2NhbSBpcyB1c2VkIHNvbWV3aGF0IG5lYnVsb3VzbHkgaGVyZS5cbkl0IGlzIG1vc3Qgb2Z0ZW4gYXNzb2NpYXRlZCB3aXRoIE9jY2FtJ3MgSURFIGJ1dCBpbiBmYWN0IGl0IGVuY29tcGFzc2VzIGEgcmFuZ2Ugb2Ygc29mdHdhcmUgYW5kIHNlcnZpY2VzLlxuVGhpcyBib29rIGV4cGxhaW5zIHRoZXNlIGRpdmVycyBwYXJ0cyBhbmQgdGhlcmUgaXMgYSBjb21wYW5pb24gYm9vaywgY2FsbGVkIFRoZSBGb3VuZGF0aW9ucyBvZiBTeW1ib2xpYyBSZWFzb25pbmcsIHRoYXQgY292ZXJzIHRoZSB1bmRlcmx5aW5nIHRoZW9yeS5cblxuW15mbG9yZW5jZV06IE9jY2FtIHdhcyBvcmlnaW5hbGx5IGNhbGxlZCBGbG9yZW5jZSBidXQgdGhlIGZvcm1lciBzZWVtZWQgbW9yZSBhcHQuXG5gO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImJuZiIsIk1hcmtkb3duUGFyc2VyIiwiZW50cmllcyIsIk1hcmtkb3duTGV4ZXIiLCJtYXJrZG93bkxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blBhcnNlciIsIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ1cGRhdGUiLCJtYXJrZG93biIsImdldE1hcmtkb3duIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJjb250ZXh0IiwiaHRtbCIsImFzSFRNTCIsInhtcEhUTUwiLCJhc1BhcnNlVHJlZSIsImNsZWFyWE1QIiwic2V0UGFyc2VUcmVlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFNpemVhYmxlRGl2IiwiWE1QIiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiUm93RGl2IiwiTWFya2Rvd25UZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbE1hcmtkb3duIiwiY29uc3RydWN0b3IiLCJsZXhpY2FsRW50cmllcyIsInNldEJORiIsInNldE1hcmtkb3duIiwic2V0TGV4aWNhbEVudHJpZXMiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwS0E7OztlQUFBOzs7b0VBeEtzQjtvQkFFRTswQkFDMkU7MERBRW5GO2lFQUNPOzBEQUNDOzJEQUNJOzREQUNDOytEQUNBO2dFQUNDO3FFQUNLO3FCQUVXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
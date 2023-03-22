define("ace/mode/lily_pond_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module){/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2012, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */
"use strict";
var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var LilyPondHighlightRules = function () {
    this.$rules = {
        start: [{
                include: "#comments"
            }, {
                include: "#g_header"
            }, {
                include: "#groupings"
            }, {
                include: "#strings"
            }, {
                include: "#scheme"
            }, {
                include: "#functions"
            }],
        "#comments": [{
                token: "punctuation.definition.comment.lilypond",
                regex: /%{/,
                push: [{
                        token: "punctuation.definition.comment.lilypond",
                        regex: /%}/,
                        next: "pop"
                    }, {
                        defaultToken: "comment.block.lilypond"
                    }]
            }, {
                token: "punctuation.definition.comment.lilypond",
                regex: /%/,
                push: [{
                        token: "comment.line.percentage.lilypond",
                        regex: /$/,
                        next: "pop"
                    }, {
                        defaultToken: "comment.line.percentage.lilypond"
                    }]
            }],
        "#f_clef": [{
                token: [
                    "punctuation.definition.function.lilypond",
                    "support.function.element.lilypond",
                    "meta.element.clef.lilypond",
                    "punctuation.definition.string.lilypond",
                    "constant.other.modifier.clef.lilypond",
                    "constant.other.modifier.clef.lilypond",
                    "punctuation.definition.string.lilypond"
                ],
                regex: /(\\)(clef)(\s+)(?:("?)(?:(?:treble|violin|G|french|alto|C|tenor|(?:mezzo)?soprano|baritone|(?:sub)?bass|F|varbaritone|percussion|tab|(?:neo)?mensural-c[1-4]|mensural-[fg]|petrucci-(?:[fg]|c[1-5])|(?:vaticana|medicaea|hufnagel)-(?:do[1-3]|fa[12])|hufnagel-do-fa)((?:[_^](?:8|15)?)?)|\w+((?:[_^](?:8|15))?))(\3))?/,
                comment: "\n\t\t\t\tThis looks something like:   \\clef mezzosoprano_8\n\t\t\t\tOr maybe:                    \\clef neomensural-c3^15\n\t\t\t"
            }],
        "#f_generic": [{
                token: [
                    "punctuation.definition.function.lilypond",
                    "support.function.general.lilypond"
                ],
                regex: /(\\)([a-zA-Z-]+\b)/
            }],
        "#f_key-signature": [{
                todo: {
                    comment: "FIXME",
                    name: "meta.element.key-signature.lilypond"
                },
                comment: "FIXME"
            }],
        "#f_keywords": [{
                token: "punctuation.definition.function.lilypond",
                regex: /\\(?:set|new|override|revert)\b/
            }],
        "#f_time-signature": [{
                token: [
                    "punctuation.definition.function.lilypond",
                    "support.function.element.lilypond",
                    "meta.element.time-signature.lilypond",
                    "constant.numeric.time-signature.lilypond"
                ],
                regex: /(\\)(time)(\s+)((?:[1-9][0-9]*\/[1-9][0-9]*)?)/
            }],
        "#functions": [{
                include: "#f_clef"
            }, {
                include: "#f_time-signature"
            }, {
                include: "#f_key-signature"
            }, {
                include: "#f_keywords"
            }, {
                include: "#f_generic"
            }],
        "#g_header": [{
                token: [
                    "punctuation.definition.function.lilypond",
                    "support.function.section.header.lilypond",
                    "meta.header.lilypond",
                    "punctuation.section.group.begin.lilypond"
                ],
                regex: /(\\)(header)(\s*)({)/,
                push: [{
                        token: "punctuation.section.group.end.lilypond",
                        regex: /}/,
                        next: "pop"
                    }, {
                        include: "#comments"
                    }, {
                        include: "#strings"
                    }, {
                        include: "#scheme"
                    }, {
                        include: "#g_markup"
                    }, {
                        token: "punctuation.separator.key-value.lilypond",
                        regex: /=/
                    }, {
                        token: "support.constant.header.lilypond",
                        regex: /dedication|title|subtitle|subsubtitle|poet|composer|meter|opus|arranger|instrument|piece|breakbefore|copyright|tagline|enteredby/
                    }, {
                        token: "support.constant.header.mutopia.lilypond",
                        regex: /mutopiatitle|mutopiacomposer|mutopiapoet|mutopiaopus|mutopiainstrument|date|source|style|maintainer|maintainerEmail|maintainerWeb|lastupdated/
                    }, {
                        defaultToken: "meta.header.lilypond"
                    }]
            }],
        "#g_m_group": [{
                token: "punctuation.section.group.begin.lilypond",
                regex: /{/,
                push: [{
                        token: "punctuation.section.group.end.lilypond",
                        regex: /}/,
                        next: "pop"
                    }, {
                        include: "#f_generic"
                    }, {
                        include: "#strings"
                    }, {
                        include: "#comments"
                    }, {
                        include: "#scheme"
                    }, {
                        include: "#g_m_group"
                    }, {
                        defaultToken: "meta.group.lilypond"
                    }]
            }],
        "#g_markup": [{
                token: [
                    "punctuation.definition.function.markup",
                    "support.function.element.markup.lilypond",
                    "meta.element.markup.lilypond"
                ],
                regex: /(\\)(markup)(\s+)(?={)/,
                push: [{
                        token: "meta.element.markup.lilypond",
                        regex: /(?<=})/,
                        next: "pop"
                    }, {
                        include: "#g_m_group"
                    }, {
                        defaultToken: "meta.element.markup.lilypond"
                    }]
            }],
        "#g_relative": [{
                token: [
                    "punctuation.definition.function.lilypond",
                    "support.function.section.lilypond",
                    "text",
                    "storage.type.pitch.lilypond",
                    "text"
                ],
                regex: /(\\)(relative)(\s*)(?:([a-h][',]*)(\s*))?(?={)/,
                push: [{
                        token: "text",
                        regex: /(?<=})/,
                        next: "pop"
                    }, {
                        include: "#group"
                    }]
            }],
        "#g_system": [{
                todo: {
                    token: "punctuation.section.system.begin.lilypond",
                    regex: /<</,
                    push: [{
                            token: "punctuation.section.system.end.lilypond",
                            regex: />>/,
                            next: "pop"
                        }, {
                            include: "$self"
                        }, {
                            defaultToken: "meta.system.lilypond"
                        }]
                }
            }],
        "#g_times": [{
                token: [
                    "punctuation.definition.function.lilypond",
                    "support.function.section.lilypond",
                    "text",
                    "constant.numeric.fraction.lilypond",
                    "text"
                ],
                regex: /(\\)(times)(\s*)([1-9][0-9]*\/[1-9][0-9])(\s*)(?={)/,
                push: [{
                        token: "text",
                        regex: /(?<=})/,
                        next: "pop"
                    }, {
                        include: "#group"
                    }]
            }],
        "#group": [{
                token: "punctuation.section.group.begin.lilypond",
                regex: /{/,
                push: [{
                        token: "punctuation.section.group.end.lilypond",
                        regex: /}/,
                        next: "pop"
                    }, {
                        include: "#music-expr"
                    }, {
                        defaultToken: "meta.music-expression.lilypond"
                    }]
            }],
        "#groupings": [{
                include: "#g_system"
            }, {
                include: "#g_relative"
            }, {
                include: "#g_times"
            }, {
                include: "#group"
            }],
        "#music-expr": [{
                include: "#comments"
            }, {
                include: "#groupings"
            }, {
                include: "#strings"
            }, {
                include: "#functions"
            }, {
                include: "#scheme"
            }, {
                include: "#notes"
            }],
        "#n_articulations": [{
                token: "storage.modifier.articulation.accent.lilypond",
                regex: /[_^-][.>^+|_-]/
            }, {
                token: "punctuation.definition.function.lilypond",
                regex: /\\(?:accent|markato|staccatissimo|espressivo|staccato|tenuto|portato|(?:up|down)bow|flageolet|thumb|[lr](?:heel|toe)|open|stopped|(?:reverse)?turn|trill|prall(?:prall|mordent|down|up)?|(?:up|down|line)prall|(?:up|down)?mordent|signumcongruentiae|(?:(?:very)?long|short)?fermata(?:Markup)?|segno|(?:var)?coda)/
            }, {
                token: "storage.modifier.articulation.dynamics.lilypond",
                regex: /\\(?:p{1,5}|m[pf]|f{1,4}|fp|[sr]fz|sff?|spp?|<|>|!|espressivo)/
            }, {
                token: "storage.modifier.beam.lilypond",
                regex: /\[|\]/
            }, {
                token: "storage.modifier.slur.lilypond",
                regex: /\(|\)/
            }, {
                token: "storage.modifier.slur.phrasing.lilypond",
                regex: /\\\(|\\\)/
            }],
        "#notes": [{
                token: [
                    "storage.type.pitch.lilypond",
                    "storage.type.pitch.lilypond",
                    "meta.note-modifier.accidental.reminder.lilypond",
                    "meta.note-modifier.accidental.cautionary.lilypond",
                    "meta.note-modifier.octave.lilypond",
                    "punctuation.definition.function.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "keyword.operator.duration-scale.lilypond",
                    "constant.numeric.fraction.lilypond"
                ],
                regex: /\b([a-h])((?:(?:i[sh]){1,2}|(?:e[sh]|s){1,2})?)(?:(\!)|(\?))?((?:'+|,+)?)(?:(?:(\\)(breve)|(64)|(32)|(16)|(8)|(4)|(2)|(1))((?:\.+)?)(?:(\*)(\d+(?:\/\d+)?))*)?(?![a-z])/,
                push: [{
                        token: "meta.element.note.lilypond",
                        regex: /(?=[\s}~a-z]|$)/,
                        next: "pop"
                    }, {
                        include: "#n_articulations"
                    }, {
                        defaultToken: "meta.element.note.lilypond"
                    }],
                comment: "\n\t\t\t\t\t\tThis rule handles notes, including the pitch, the\n\t\t\t\t\t\tduration, and any articulations drawn along with\n\t\t\t\t\t\tthe note.\n\n\t\t\t\t\t\tThis rule gets a whole lot uglier if we want to\n\t\t\t\t\t\tsupport multilingual note names.  If so, the rule\n\t\t\t\t\t\tgoes something like:\n\n\t\t\t\t\t\t(?x)\n\t\t\t\t\t\t\t\\b( # Basic Pitches\n\t\t\t\t\t\t\t  [a-h]  # Dutch/English/etc.\n\t\t\t\t\t\t\t  (?: (iss?|s|sharp|x)(iss?|s|sharp|x|ih) | # sharp / flat\n\t\t\t\t\t\t\t\t  (ess?|s|flat|f)(ess?|s|flat|f|eh)\n\t\t\t\t\t\t\t  )? |\n\t\t\t\t\t\t\t  (?: do|re|mi|fa|sol|la|si) # Italian/Spanish\n\t\t\t\t\t\t\t  (?: ss?|dd?bb?) # sharp/flat\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t...\n\t\t\t\t\t"
            }, {
                token: [
                    "storage.type.pause.rest.lilypond",
                    "storage.type.pause.rest.multi-measure.lilypond",
                    "punctuation.definition.function.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "keyword.operator.duration-scale.lilypond",
                    "constant.numeric.fraction.lilypond"
                ],
                regex: /\b(?:(r)|(R))(?:(?:(\\)(breve)|(64)|(32)|(16)|(8)|(4)|(2)|(1))((?:\.+)?)(?:(\*)(\d+(?:\/\d+)?))*)?(?![a-z])/,
                push: [{
                        token: "meta.element.pause.rest.lilypond",
                        regex: /(?=[\s}~a-z])/,
                        next: "pop"
                    }, {
                        include: "#n_articulations"
                    }, {
                        defaultToken: "meta.element.pause.rest.lilypond"
                    }]
            }, {
                token: [
                    "storage.type.pause.skip.lilypond",
                    "punctuation.definition.function.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "keyword.operator.duration-scale.lilypond",
                    "constant.numeric.fraction.lilypond"
                ],
                regex: /\b(s)(?:(?:(\\)(breve)|(64)|(32)|(16)|(8)|(4)|(2)|(1))((?:\.+)?)(?:(\*)(\d+(?:\/\d+)?))*)?(?![a-z])/,
                push: [{
                        token: "meta.element.pause.skip.lilypond",
                        regex: /(?=[\s}~a-z]|$)/,
                        next: "pop"
                    }, {
                        include: "#n_articulations"
                    }, {
                        defaultToken: "meta.element.pause.skip.lilypond"
                    }]
            }, {
                token: [
                    "punctuation.definition.function.lilypond",
                    "storage.type.pause.skip.lilypond",
                    "meta.element.pause.skip.lilypond",
                    "storage.type.duration.lilypond"
                ],
                regex: /(\\)(skip)(\s+)(64|32|16|8|4|2|1)/
            }, {
                token: "punctuation.definition.chord.lilypond",
                regex: /</,
                push: [{
                        token: "punctuation.definition.chord.lilypond",
                        regex: />/,
                        next: "pop"
                    }, {
                        token: [
                            "storage.type.pitch.lilypond",
                            "storage.type.pitch.lilypond",
                            "meta.note-modifier.accidental.reminder.lilypond",
                            "meta.note-modifier.accidental.cautionary.lilypond",
                            "meta.note-modifier.octave.lilypond"
                        ],
                        regex: /\b([a-h])((?:(?:i[sh]){1,2}|(?:e[sh]|s){1,2})?)(?:(\!)|(\?))?((?:'+|,+)?)/
                    }, {
                        defaultToken: "meta.element.chord.lilypond"
                    }],
                comment: "\n\t\t\t\t\t\tLilypond chords look like:    < a b c >\n\t\t\t\t\t"
            }, {
                token: [
                    "punctuation.definition.function.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond",
                    "storage.type.duration.lilypond"
                ],
                regex: /(?<!-)(?<=>)(?:(?:(\\breve)|(64)|(32)|(16)|(8)|(4)|(2)|(1))((?:\.+)?)|(?![\s}~a-z]|$))/,
                push: [{
                        token: "meta.element.chord.lilypond",
                        regex: /(?=[\s}~a-z]|$)(?<![^-]>)/,
                        next: "pop"
                    }, {
                        include: "#n_articulations"
                    }, {
                        defaultToken: "meta.element.chord.lilypond"
                    }],
                comment: "\n\t\t\t\t\t\tThis rule attaches stuff to the end of a chord\n\n\t\t\t\t\t\tTherefore it begins after the > which ends a chord,\n\t\t\t\t\t\tand does not end after a > which ends a chord.\n\t\t\t\t\t\t(to avoid infinite loops)\n\t\t\t\t\t"
            }, {
                token: "storage.type.tie.lilypond",
                regex: /~/
            }, {
                token: [
                    "punctuation.definition.function.lilypond",
                    "storage.type.breath-mark.lilypond"
                ],
                regex: /(\\)(breathe)/
            }],
        "#scheme": [{
                token: "meta.embedded.line.scheme",
                regex: /#/,
                push: [{
                        token: "meta.embedded.line.scheme",
                        regex: /(?=[\s%])|(?<=$)/,
                        next: "pop"
                    }, {
                        include: "source.scheme"
                    }, {
                        defaultToken: "meta.embedded.line.scheme"
                    }]
            }],
        "#strings": [{
                token: "punctuation.definition.string.lilypond",
                regex: /"/,
                push: [{
                        token: "punctuation.definition.string.lilypond",
                        regex: /"/,
                        next: "pop"
                    }, {
                        token: "constant.character.escape.lilypond",
                        regex: /\\./
                    }, {
                        defaultToken: "string.quoted.double.lilypond"
                    }]
            }]
    };
    this.normalizeRules();
};
LilyPondHighlightRules.metaData = {
    comment: "\n\t\tThis bundle is, as can easily be seen, far from complete,\n\t\tbut it should still be as useful as the Lilypond.app pyobjc\n\t\tapplication, which has no syntax coloring, no way to do\n\t\tsnippets, and pretty much no interesting functionality at\n\t\tall, other than a \"Run\" menu option. :)\n\t",
    fileTypes: ["ly", "lily", "ily"],
    keyEquivalent: "^~L",
    name: "LilyPond",
    scopeName: "source.lilypond"
};
oop.inherits(LilyPondHighlightRules, TextHighlightRules);
exports.LilyPondHighlightRules = LilyPondHighlightRules;

});

define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(require, exports, module){"use strict";
var oop = require("../../lib/oop");
var Range = require("../../range").Range;
var BaseFoldMode = require("./fold_mode").FoldMode;
var FoldMode = exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
        this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
    }
};
oop.inherits(FoldMode, BaseFoldMode);
(function () {
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
        var line = session.getLine(row);
        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
        return fw;
    };
    this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;
            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                }
                else if (foldStyle != "all")
                    range = null;
            }
            return range;
        }
        if (foldStyle === "markbegin")
            return;
        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;
            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);
            return session.getCommentFoldRange(row, i, -1);
        }
    };
    this.getSectionRange = function (session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                }
                else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                }
                else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function (session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m)
                continue;
            if (m[1])
                depth--;
            else
                depth++;
            if (!depth)
                break;
        }
        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };
}).call(FoldMode.prototype);

});

define("ace/mode/lily_pond",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/lily_pond_highlight_rules","ace/mode/folding/cstyle"], function(require, exports, module){/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2012, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */
"use strict";
var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var LilyPondHighlightRules = require("./lily_pond_highlight_rules").LilyPondHighlightRules;
var FoldMode = require("./folding/cstyle").FoldMode;
var Mode = function () {
    this.HighlightRules = LilyPondHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);
(function () {
    this.$id = "ace/mode/lily_pond";
}).call(Mode.prototype);
exports.Mode = Mode;

});                (function() {
                    window.require(["ace/mode/lily_pond"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            
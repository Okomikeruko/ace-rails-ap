define("ace/mode/lilypond_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module){/* ***** BEGIN LICENSE BLOCK *****
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
var lilypondHighlightRules = function () {
    var keywords = "AccidentalSuggestion add-grace-property add-stem-support " +
        "add-toc-item! additionalPitchPrefix afterGraceFraction " +
        "alignAboveContext alignBelowContext ambitusAfter AmbitusLine " +
        "annotate-spacing arpeggio-direction articulation-event associatedVoice " +
        "aug auto-first-page-number autoBeaming automaticBars Balloon_engraver " +
        "banjo-c-tuning banjo-modal-tuning banjo-open-d-tuning " +
        "banjo-open-dm-tuning barCheckSynchronize BarNumber barNumberVisibility " +
        "bartype base-shortest-duration baseMoment beatStructure binding-offset " +
        "blank-after-score-page-penalty blank-last-page-penalty " +
        "blank-page-penalty bookTitleMarkup bottom-margin bracket " +
        "break-align-symbols break-visibility breakable breakbefore " +
        "BreathingSign check-consistency choral choral-cautionary " +
        "chordChanges chordNameExceptions chordNameLowercaseMinor ChordNames " +
        "chordNameSeparator chordNoteNamer chordPrefixSpacer chordRootNamer " +
        "clip-regions color common-shortest-duration Completion_heads_engraver " +
        "Completion_rest_engraver context-spec-music controlpitch " +
        "countPercentRepeats crescendo-event crescendoSpanner crescendoText " +
        "cross CueVoice currentBarNumber decrescendoSpanner decrescendoText " +
        "default default-staff-staff-spacing defaultBarType dim dodecaphonic " +
        "dodecaphonic-first dodecaphonic-no-repeat drumPitchNames " +
        "drumPitchTable DrumStaff drumStyleTable dynamic-event " +
        "DynamicLineSpanner DynamicText explicitClefVisibility " +
        "explicitKeySignatureVisibility extra-offset Ez_numbers_engraver " +
        "figuredBassAlterationDirection figuredBassPlusDirection " +
        "fingeringOrientations first-page-number followVoice font-encoding " +
        "font-interface font-size fontSize footnote-separator-markup " +
        "Forbid_line_break_engraver forget four-string-banjo " +
        "fret-diagram-interface FretBoards GregorianTranscriptionStaff " +
        "gridInterval Grid_line_span_engraver Grid_point_engraver " +
        "grob-interface grow-direction horizontal-shift HorizontalBracketText " +
        "Horizontal_bracket_engraver indent inner-margin keepAliveInterfaces " +
        "KievanStaff KievanVoice last-bottom-spacing layout-set-staff-size " +
        "left-margin line-width ly:minimal-breaking " +
        "ly:one-line-auto-height-breaking ly:one-line-breaking " +
        "ly:one-page-breaking ly:optimal-breaking ly:page-turn-breaking m " +
        "magnification->font-size magstep maj majorSevenSymbol " +
        "make-dynamic-script make-pango-font-tree markup-markup-spacing " +
        "markup-system-spacing Mark_engraver max-systems-per-page " +
        "measureLength measurePosition Measure_grouping_engraver MensuralStaff " +
        "MensuralVoice middleCPosition midiBalance midiChannelMapping " +
        "midiChorusLevel midiDrumPitches midiExpression midiPanPosition " +
        "midiReverbLevel min-systems-per-page minimum-Y-extent minimumFret " +
        "minimumPageTurnLength minimumRepeatLengthForPageTurn " +
        "minorChordModifier mixed mode modern modern-cautionary modern-voice " +
        "modern-voice-cautionary MultiMeasureRestScript MultiMeasureRestText " +
        "musicQuotes neo-modern neo-modern-cautionary neo-modern-voice " +
        "neo-modern-voice-cautionary no-reset nonstaff-nonstaff-spacing " +
        "nonstaff-relatedstaff-spacing nonstaff-unrelatedstaff-spacing " +
        "note-event noteNameFunction NoteNames noteNameSeparator " +
        "Note_heads_engraver Note_name_engraver NullVoice ottavation " +
        "ottavation-numbers ottavation-ordinals ottavation-simple-ordinals " +
        "ottavationMarkups outer-margin output-count output-def output-suffix " +
        "outside-staff-horizontal-padding outside-staff-padding " +
        "outside-staff-priority page-breaking " +
        "page-breaking-system-system-spacing page-count page-number-type " +
        "page-spacing-weight paper-height paper-width partCombineListener " +
        "pedalSustainStyle percent piano piano-cautionary PianoStaff " +
        "pitchnames Pitch_squash_engraver predefinedDiagramTable " +
        "print-all-headers print-first-page-number print-page-number " +
        "printAccidentalNames printNotesLanguage printOctaveNames " +
        "quotedCueEventTypes quotedEventTypes ragged-bottom ragged-last " +
        "ragged-last-bottom ragged-right remove-empty remove-first " +
        "remove-grace-property remove-layer repeatCommands " +
        "repeatCountVisibility rest-event restNumberThreshold " +
        "restrainOpenStrings rgb-color RhythmicStaff right-margin " +
        "score-markup-spacing score-system-spacing scoreTitleMarkup " +
        "self-alignment-X set-global-fonts set-global-staff-size short-indent " +
        "show-available-fonts showFirstLength showLastLength skipBars " +
        "skipTypesetting slashChordSeparator slur-event spacing " +
        "Span_stem_engraver staff-affinity staff-padding staff-staff-spacing " +
        "Staff.midiInstrument staffgroup-staff-spacing Staff_collecting_engraver " +
        "Staff_symbol_engraver start-repeat startAcciaccaturaMusic " +
        "startAppoggiaturaMusic startGraceMusic stem-spacing-correction " +
        "stemLeftBeamCount stemRightBeamCount stopAcciaccaturaMusic " +
        "stopAppoggiaturaMusic stopGraceMusic strictBeatBeaming " +
        "stringNumberOrientations stringTunings strokeFingerOrientations " +
        "subdivideBeams suggestAccidentals sus system-count " +
        "system-separator-markup system-system-spacing systems-per-page " +
        "TabStaff TabVoice teaching text TieColumn tieWaitForNote " +
        "timeSignatureFraction tocFormatMarkup tocIndentMarkup tocItemMarkup " +
        "tocTitleMarkup top-margin top-markup-spacing top-system-spacing " +
        "toplevel-bookparts toplevel-scores tremolo tuplet-slur TupletNumber " +
        "tupletSpannerDuration two-sided unfold VaticanaStaff VaticanaVoice " +
        "VerticalAxisGroup voice Voice Volta_engraver whichBar X-offset " +
        "x11-color midiMinimumVolume midiMaximumVolume title subtitle " +
        "poet meter composer arranger copyright tagline instrument instrumentName " +
        "shortInstrumentName Staff StaffGroup Lyrics ChoirStaff Dynamics";
    var controllers = "abs-fontsize absolute accent accentus accepts " +
        "acciaccatura accidentalStyle addChordShape addInstrumentDefinition " +
        "addlyrics addQuote aeolian afterGrace aikenHeads aikenHeadsMinor " +
        "aikenThinHeads aikenThinHeadsMinor alias allowPageTurn allowVoltaHook" +
        "alterBroken alternative ambitusAfter appendToTag applyContext " +
        "applyMusic applyOutput applySwing applySwingWithOffset appoggiatura " +
        "arabicStringNumbers arpeggio arpeggioArrowDown arpeggioArrowUp " +
        "arpeggioBracket arpeggioNormal arpeggioParenthesis " +
        "arpeggioParenthesisDashed arrow-head articulate ascendens " +
        "assertBeamQuant assertBeamSlope auctum augmentum auto-footnote " +
        "autoBeamOff autoBeamOn autoBreaksOff autoBreaksOn autoChange " +
        "autoLineBreaksOff autoLineBreaksOn autoPageBreaksOff autoPageBreaksOn " +
        "backslashed-digit balloonGrobText balloonLengthOff balloonLengthOn " +
        "balloonText bar barNumberCheck bassFigureExtendersOff " +
        "bassFigureExtendersOn bassFigureStaffAlignmentDown " +
        "bassFigureStaffAlignmentNeutral bassFigureStaffAlignmentUp beam " +
        "beamExceptions bendAfter blackTriangleMarkup bold book bookOutputName " +
        "bookOutputSuffix bookpart box bracket break breathe breve cadenzaOff " +
        "cadenzaOn caesura caps cavum center-align center-column change char " +
        "chordmode chordRepeats chords circle circulus clef cm coda column " +
        "column-lines combine compound-meter compoundMeter compressEmptyMeasures " +
        "compressMMRests concat consists context cr cresc crescHairpin " +
        "crescTextCresc crossStaff cueClef cueClefUnset cueDuring " +
        "cueDuringWithClef customTabClef dashBang dashDash dashDot dashHat " +
        "dashLarger dashPlus dashUnderscore deadNote deadNotesOff deadNotesOn " +
        "decr decresc default defaultchild defaultTimeSignature defineBarLine " +
        "deminutum denies descendens dim dimHairpin dimTextDecr dimTextDecresc " +
        "dimTextDim dir-column discant displayLilyMusic displayMusic " +
        "displayScheme divisioMaior divisioMaxima divisioMinima dorian " +
        "dotsDown dotsNeutral dotsUp doubleflat doublesharp downbow " +
        "downmordent downprall draw-circle draw-dashed-line draw-dotted-line " +
        "draw-hline draw-line draw-squiggle-line dropNote drummode drums dwn " +
        "dynamic dynamicDown dynamicNeutral dynamicUp easyHeadsOff easyHeadsOn " +
        "ellipse endcr enddecr endSpanners episemFinis episemInitium epsfile " +
        "espressivo etc eventChords expandEmptyMeasures eyeglasses f " +
        "featherDurations fermata ff fff ffff fffff figuremode figures " +
        "fill-line fill-with-pattern filled-box finalis finger first-visible " +
        "fixed flageolet flat flexa fontCaps fontsize footnote fp fraction " +
        "freeBass frenchChords fret-diagram fret-diagram-terse " +
        "fret-diagram-verbose fromproperty funkHeads funkHeadsMinor " +
        "general-align germanChords glissando glissandoMap grace " +
        "grobdescriptions halfopen halign harmonic harmonicByFret " +
        "harmonicByRatio harmonicNote harmonicsOff harmonicsOn harp-pedal " +
        "haydnturn hbracket hcenter-in header henzelongfermata " +
        "henzeshortfermata hide hideKeySignature hideNotes " +
        "hideSplitTiedTabNotes hideStaffSwitch hspace huge ictus iij IIJ ij IJ " +
        "improvisationOff improvisationOn in incipit inclinatum include " +
        "inherit-acceptability inStaffSegno instrumentSwitch inversion " +
        "invertChords ionian italianChords italic justified-lines justify " +
        "justify-field justify-line justify-string keepWithTag key kievanOff " +
        "kievanOn killCues label laissezVibrer language languageRestore " +
        "languageSaveAndChange large larger layout left-align left-brace " +
        "left-column lheel line linea lineprall locrian longa longfermata " +
        "lookup lower ltoe lydian lyricmode lyrics lyricsto magnify magnifyMusic " +
        "magnifyStaff major makeClusters makeDefaultStringTuning " +
        "map-markup-commands marcato mark markalphabet markLengthOff " +
        "markLengthOn markletter markup markuplist markupMap maxima medium " +
        "melisma melismaEnd mergeDifferentlyDottedOff mergeDifferentlyDottedOn " +
        "mergeDifferentlyHeadedOff mergeDifferentlyHeadedOn mf midi minor " +
        "mixolydian mm modalInversion modalTranspose mordent mp musicglyph " +
        "musicMap n name natural new newSpacingSection noBeam noBreak " +
        "noPageBreak noPageTurn normal-size-sub normal-size-super normal-text " +
        "normalsize note note-by-number notemode null number " +
        "numericTimeSignature octaveCheck offset omit on-the-fly once oneVoice " +
        "open oriscus ottava oval overlay override override-lines " +
        "overrideProperty overrideTimeSignatureSettings overtie p pad-around " +
        "pad-markup pad-to-box pad-x page-link page-ref pageBreak pageTurn " +
        "palmMute palmMuteOn paper parallelMusic parenthesize partCombine " +
        "partCombineApart partCombineAutomatic partCombineChords " +
        "partCombineDown partCombineForce partCombineSoloI partCombineSoloII " +
        "partCombineUnisono partCombineUp partial path pattern pes " +
        "phrasingSlurDashed phrasingSlurDashPattern phrasingSlurDotted " +
        "phrasingSlurDown phrasingSlurHalfDashed phrasingSlurHalfSolid " +
        "phrasingSlurNeutral phrasingSlurSolid phrasingSlurUp phrygian " +
        "pitchedTrill pointAndClickOff pointAndClickOn pointAndClickTypes " +
        "portato postscript pp ppp pppp ppppp prall pralldown prallmordent " +
        "prallprall prallup predefinedFretboardsOff predefinedFretboardsOn " +
        "property-recursive propertyOverride propertyRevert propertySet " +
        "propertyTweak propertyUnset pt pushToTag put-adjacent quilisma " +
        "quoteDuring raise raiseNote reduceChords relative remove " +
        "RemoveAllEmptyStaves RemoveEmptyStaves removeWithTag repeat percent " +
        "tremolo repeatTie replace resetRelativeOctave responsum rest " +
        "rest-by-number retrograde reverseturn revert " +
        "revertTimeSignatureSettings rfz rheel right-align right-brace " +
        "right-column rightHandFinger roman romanStringNumbers rotate " +
        "rounded-box rtoe sacredHarpHeads sacredHarpHeadsMinor sans scale " +
        "scaleDurations score score-lines segno semicirculus semiflat " +
        "semiGermanChords semisharp sesquiflat sesquisharp set settingsFrom " +
        "sf sff sfz shape sharp shiftDurations shiftOff shiftOn shiftOnn " +
        "shiftOnnn shortfermata showKeySignature showStaffSwitch " +
        "signumcongruentiae simple single skip slashed-digit slashedGrace " +
        "slashSeparator slashturn slurDashed slurDashPattern slurDotted " +
        "slurDown slurHalfDashed slurHalfSolid slurNeutral slurSolid slurUp " +
        "small smallCaps smaller snappizzicato sostenutoOff sostenutoOn " +
        "sourcefileline sourcefilename southernHarmonyHeads " +
        "southernHarmonyHeadsMinor sp spacingTweaks spp staccatissimo staccato " +
        "staff-space startGroup startStaff startTrillSpan stdBass stdBassIV " +
        "stdBassV stdBassVI stemDown stemNeutral stemUp stencil stopGroup " +
        "stopped stopStaff stopTrillSpan storePredefinedDiagram stringTuning " +
        "stropha strut styledNoteHeads sub super sustainOff sustainOn " +
        "tabChordRepeats tabChordRepetition tabFullNotation table " +
        "table-of-contents tag tagGroup taor teeny tempo temporary tenuto text " +
        "textLengthOff textLengthOn textSpannerDown textSpannerNeutral " +
        "textSpannerUp thumb tie tied-lyric tieDashed tieDashPattern tieDotted " +
        "tieDown tieHalfDashed tieHalfSolid tieNeutral tieSolid tieUp time " +
        "times tiny tocItem tocItemWithDotsMarkup translate translate-scaled " +
        "transparent transpose transposedCueDuring transposition treCorde " +
        "triangle trill tripletFeel tuplet tupletDown tupletNeutral tupletSpan " +
        "tupletUp turn tweak type typewriter unaCorda underline undertie undo " +
        "unfoldRepeats unHideNotes unset upbow upmordent upprall upright varcoda " +
        "vcenter verbatim-file version versus verylongfermata veryshortfermata " +
        "virga virgula voiceFour voiceFourStyle voiceNeutralStyle voiceOne " +
        "voiceOneStyle voices voiceThree voiceThreeStyle voiceTwo voiceTwoStyle " +
        "void vspace walkerHeads walkerHeadsMinor whiteout whiteTriangleMarkup " +
        "with with-color with-dimensions with-dimensions-from with-link " +
        "with-outline with-url withMusicProperty woodwind-diagram wordwrap " +
        "wordwrap-field wordwrap-internal wordwrap-lines wordwrap-string " +
        "wordwrap-string-internal xNote xNotesOff xNotesOn";
    this.$rules = {
        "start": [
            {
                token: "comment.block.start",
                regex: "%\\{",
                next: "comment"
            }, {
                token: "comment.line",
                regex: "%.*$"
            }, {
                token: "lyricmode.start",
                regex: "\\\\lyricmode {",
                next: "lyricmode"
            }, {
                token: "block.start",
                regex: "(?:{|<<)",
                next: "block"
            }, {
                token: "block.end",
                regex: "(?:}|>>)",
                next: "pop"
            }, {
                token: "constant.character",
                regex: "(?:<(?:\\s*[a-grsR](?:[ei]s)*[',]*)+>\\d*\\.*|\\b[a-grsR](?:[ei]s)*[',]*\\d*\\.*\b)"
            }, {
                token: "constant.language.boolean",
                regex: "#+[tf]"
            }, {
                token: "constant.numeric",
                regex: "[-#']*\\d*\\.?\\d+(?:\\\\[a-zA-Z]+)?"
            }, {
                token: "entity.name.function",
                regex: "\\#\\'?\\([a-zA-Z-_.\\d\\s]*\\)"
            }, {
                token: "support.class",
                regex: "\\b(?:" + keywords.match(/\b[A-Z][a-zA-Z]*\b/gm).join("\\b|\\b") + ")\\b"
            }, {
                token: "support.function",
                regex: "\\b(?:" + keywords.match(/\b[a-z][a-zA-Z-]*\b/gm).join("\\b|\\b") + ")\\b"
            }, {
                token: "keyword.control",
                regex: "\\\\(?:" + controllers.split(" ").join("|") + ")\\b"
            }, {
                token: "keyword.operator",
                regex: "[+*=/_^-]"
            }, {
                token: "string.start",
                regex: "#?\\\"",
                next: "string"
            }, {
                include: "variable"
            }, {
                defaultToken: "text"
            }
        ],
        "block": [
            {
                include: "start"
            }
        ],
        "comment": [
            {
                token: "comment.block.end",
                regex: "%\\}",
                next: "start"
            }, {
                defaultToken: "comment.block",
                caseInsensitive: true
            }
        ],
        "lyricmode": [
            {
                token: "lyricmode.end",
                regex: "}",
                next: "start"
            }, {
                include: "variable"
            }, {
                token: "constant.character.escape",
                regex: "\\\\."
            }, {
                token: "keyword.operator",
                regex: "(?:--|__)"
            }, {
                defaultToken: "string",
                caseInsensitive: true
            }
        ],
        "string": [
            {
                token: "constant.character.escape",
                regex: "\\\\."
            }, {
                token: "string.end",
                regex: "\"",
                next: "start"
            }, {
                defaultToken: "string",
                caseInsensitive: true
            }
        ],
        "variable": [
            {
                token: "variable",
                regex: "\\\\(?:[a-zA-Z-_]+)"
            }
        ]
    };
    this.normalizeRules();
};
// lilypondHighlightRules.metaData =
    oop.inherits(lilypondHighlightRules, TextHighlightRules);
exports.lilypondHighlightRules = lilypondHighlightRules;

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
    this.foldingStartMarker = /([\{\[\(\<])[^\}\]\)]*$|^\s*(\/\*)|<</; // Add `<<` as folding start marker
    this.foldingStopMarker = /^[^\[\{\(\<]*([\}\]\)\>])|^[\s\*]*(\*\/)|>>/; // Add `>>` as folding stop marker
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

define("ace/mode/lilypond",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/lilypond_highlight_rules","ace/mode/folding/cstyle"], function(require, exports, module){/* ***** BEGIN LICENSE BLOCK *****
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
var HighlightRules = require("./lilypond_highlight_rules").lilypondHighlightRules;
var FoldMode = require("./folding/cstyle").FoldMode;
var Mode = function () {
    this.HighlightRules = HighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);
(function () {
    this.$id = "ace/mode/lilypond";
}).call(Mode.prototype);
exports.Mode = Mode;

});                (function() {
                    window.require(["ace/mode/lilypond"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();

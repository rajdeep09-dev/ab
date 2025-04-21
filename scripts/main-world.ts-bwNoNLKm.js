import './isolated-world-CT8_stXv.js';
import { aa as from, a9 as popScheduler, aA as createOperatorSubscriber, aB as operate, $ as map, bE as mergeMap, ay as innerFrom, bF as identity, bG as noop, M as MAGIC, Q as RecordResumeDocument, bH as RecordStartDocument, V as RecordPauseDocument, W as RecordStopDocument, X as RecordCancelDocument, bI as RecordDisableDocument, K as RecorderStateDocument, N as RecordingStatus, T as TaskType, aD as Subscription, bJ as EmitFrameDocument, bx as tap, p as fromEvent, a4 as filter, A as AppIdDocument, bK as OAuthCodeDocument, i as isSafeInteger, bL as TaskUploadStatusDocument, bM as TaskUploadStatusChangeDocument, F as FULL_VERSION, bN as getHomepageUrl, G as Region, E as EnvDocument, bO as OpenUploadLandingPageDocument, bP as RetryUploadDocument, bQ as CancelTaskDocument, U as UserProfileDocument, D as getAppUrl, bR as ActiveTabDocument, Y as getToFigmaDocsUrl, q as EnvType, bS as TipLoreDocument, bT as FigmaPluginOpenedDocument, h as Subject, R as REGION, a2 as PopupToContentScriptEvent, m as BackgroundToContentScriptEvent, aq as DEFAULT_LOCALE, bU as vt, B as BehaviorSubject, bV as fromZenObservable, bW as INTERMEDIARY_PATH } from './event-DtpTA55b.js';
import { bM as mergeAll, bN as EMPTY, s as inject, bO as RecorderClientContext, d as defineComponent, r as ref, bP as waitForIframeReady, g as unref, o as openBlock, f as createElementBlock, h as createCommentVNode, b as useMutation, a as useSubscription$1, c as computed, bQ as debugOperation, bR as listenEnterEvent, bS as FileStock, bT as RecordProcessor, bU as Defer, bV as record, bW as EventType, u as useI18n, m as createBaseVNode, F as Fragment, l as createTextVNode, t as toDisplayString, af as renderSlot, aF as normalizeClass, k as createVNode, j as withCtx, i as createBlock, e as useLazyQuery, aH as useQuery, w as watch, aG as createStaticVNode, bX as useTransition, bY as useEventListener, bZ as Icon, au as normalizeStyle, B as provide, bd as Transition, b_ as mergeModels, b$ as useModel, aB as withKeys, p as createApp, ae as h, bJ as DefaultApolloClient, bK as createI18n, bL as messages, c0 as _sfc_main$h } from './index-CdBdBjGV.js';
import { t as timer, a as asyncScheduler, i as interval, c as combineLatest } from './interval-BQmAbWxp.js';
import { b as useSubscription, S as StopIcon, P as PlayIcon, a as PauseIcon, R as RemoveIcon, _ as _export_sfc, u as useObservable } from './_plugin-vue_export-helper-BgqXiwJL.js';
import { s as switchMap } from './switchMap-BKt4U837.js';
import { i as injectRequired } from './context-Jkc9b9NO.js';
import { w as withQuery } from './index-DPbJqVrs.js';

function concatAll() {
    return mergeAll(1);
}

function concat() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return concatAll()(from(args, popScheduler(args)));
}

function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
    return function (source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            var i = index++;
            state = hasState
                ?
                    accumulator(state, value, i)
                :
                    ((hasState = true), value);
            subscriber.next(state);
        }, emitBeforeComplete ));
    };
}

function take(count) {
    return count <= 0
        ?
            function () { return EMPTY; }
        : operate(function (source, subscriber) {
            var seen = 0;
            source.subscribe(createOperatorSubscriber(subscriber, function (value) {
                if (++seen <= count) {
                    subscriber.next(value);
                    if (count <= seen) {
                        subscriber.complete();
                    }
                }
            }));
        });
}

function mapTo(value) {
    return map(function () { return value; });
}

function delayWhen(delayDurationSelector, subscriptionDelay) {
    return mergeMap(function (value, index) { return innerFrom(delayDurationSelector(value, index)).pipe(take(1), mapTo(value)); });
}

function delay(due, scheduler) {
    if (scheduler === void 0) { scheduler = asyncScheduler; }
    var duration = timer(due, scheduler);
    return delayWhen(function () { return duration; });
}

function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === void 0) { keySelector = identity; }
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return operate(function (source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            var currentKey = keySelector(value);
            if (first || !comparator(previousKey, currentKey)) {
                first = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
function defaultCompare(a, b) {
    return a === b;
}

function pairwise() {
    return operate(function (source, subscriber) {
        var prev;
        var hasPrev = false;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            var p = prev;
            prev = value;
            hasPrev && subscriber.next([p, value]);
            hasPrev = true;
        }));
    });
}

function scan(accumulator, seed) {
    return operate(scanInternals(accumulator, seed, arguments.length >= 2, true));
}

function startWith() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var scheduler = popScheduler(values);
    return operate(function (source, subscriber) {
        (scheduler ? concat(values, source, scheduler) : concat(values, source)).subscribe(subscriber);
    });
}

function takeUntil(notifier) {
    return operate(function (source, subscriber) {
        innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, function () { return subscriber.complete(); }, noop));
        !subscriber.closed && source.subscribe(subscriber);
    });
}

function isAppUrl(input) {
    try {
        const url = new URL(input);
        return /app\.demoway\.(com|cn)$/.test(url.hostname);
    } catch (e) {
        console.error(e);
        return false;
    }
}

function useRecorderClientContext() {
    const ctx = inject(RecorderClientContext.injectionKey);
    if (!ctx) {
        throw new Error();
    }
    return ctx;
}

const _hoisted_1$i = [
    "src"
];
const _sfc_main$g = /*@__PURE__*/ defineComponent({
    __name: 'intermediary',
    setup (__props) {
        const ctx = useRecorderClientContext();
        const iframeRef = ref();
        const url = new URL(ctx.intermediaryUrl);
        url.searchParams.set('task_list_border', 'true');
        const src = url.href;
        const readyPromise = waitForIframeReady(ctx.intermediaryUrl.origin).then(()=>{
            return ctx.connect(iframeRef.value);
        });
        useSubscription(ctx.toIntermediary$.subscribe(([message, port])=>{
            readyPromise.then(()=>{
                iframeRef.value?.contentWindow?.postMessage({
                    ...message,
                    magic: MAGIC
                }, '*', port ? [
                    port
                ] : []);
            });
        }));
        return (_ctx, _cache)=>{
            return unref(src) ? (openBlock(), createElementBlock("iframe", {
                key: 0,
                ref_key: "iframeRef",
                ref: iframeRef,
                class: "intermediary",
                title: "intermediary",
                allowtransparency: "true",
                src: unref(src)
            }, null, 8, _hoisted_1$i)) : createCommentVNode("", true);
        };
    }
});

function useRecorderOperations() {
    const resumeMutation = useMutation(RecordResumeDocument);
    const startMutation = useMutation(RecordStartDocument);
    const pauseMutation = useMutation(RecordPauseDocument);
    const stopMutation = useMutation(RecordStopDocument);
    const cancelMutation = useMutation(RecordCancelDocument);
    const closeMutation = useMutation(RecordDisableDocument);
    const recorderStateSubscription = useSubscription$1(RecorderStateDocument);
    const recorderState = computed(()=>recorderStateSubscription.result.value?.recorderState);
    const recorderStatus = computed(()=>recorderState.value?.status ?? RecordingStatus.Stopped);
    const ctx = useRecorderClientContext();
    async function onResume() {
        await resumeMutation.mutate();
    }
    async function onPlay() {
        try {
            const status = recorderStatus.value;
            switch(status){
                case RecordingStatus.Paused:
                    await onResume();
                    break;
                case RecordingStatus.Stopped:
                    await startMutation.mutate({
                        name: document.title,
                        url: location.href
                    });
                    break;
            }
        } catch (e) {
            ctx.logErrorObject('start record fail', e);
        }
    }
    function onPause() {
        return pauseMutation.mutate();
    }
    async function onComplete() {
        const taskId = recorderState.value?.taskId;
        if (!taskId) {
            return;
        }
        ctx.startUpload$.next({
            taskId
        });
        await stopMutation.mutate({
            taskId,
            keepRecorder: ctx.keepRecorder ?? false
        });
    }
    async function onCancel() {
        const taskId = recorderState.value?.taskId;
        if (!taskId) {
            return;
        }
        await cancelMutation.mutate({
            taskId,
            keepRecorder: ctx.keepRecorder
        });
    }
    function onClose() {
        return closeMutation.mutate();
    }
    return {
        recorderState,
        recorderStatus,
        onPlay,
        onPause,
        onComplete,
        onCancel,
        onClose
    };
}

function makeRecorder(ctx) {
    let subscription;
    async function startRecord(taskId, isSnapshot = false) {
        debugOperation('startRecord', subscription);
        if (subscription) {
            return;
        }
        subscription = new Subscription();
        subscription.add(listenEnterEvent(ctx, window));
        const fileStock = new FileStock(ctx, taskId);
        const recordProcessor = new RecordProcessor(ctx, taskId, fileStock, isSnapshot);
        const defer = new Defer();
        const stopCurrentRecord = record({
            recordCanvas: false,
            slimDOMOptions: true,
            blockSelector: '[data-demoway-ignore="true"], xt-control-center, #fatkun-drop-panel, #transmart-crx-shadow-root, [data-size="invisible"], #g-recaptcha',
            inlineStylesheet: false,
            maskInputOptions: {
                password: true
            },
            userTriggeredOnInput: true,
            emit (frame) {
                ctx.apolloClient.mutate({
                    mutation: EmitFrameDocument,
                    variables: {
                        frame,
                        taskId
                    }
                });
                if (isSnapshot && frame.type === EventType.FullSnapshot) {
                    defer.resolve();
                }
            },
            plugins: [
                recordProcessor.getEventPreprocessor()
            ],
            recordCrossOriginIframes: ctx.recordCrossOriginIframes
        });
        subscription.add(stopCurrentRecord);
        subscription.add(async ()=>{
            await recordProcessor.dispose();
        });
        if (!isSnapshot) {
            defer.resolve();
        }
        await defer.await();
    }
    async function stopRecord() {
        debugOperation('stopRecord');
        subscription?.unsubscribe();
        subscription = undefined;
    }
    return {
        startRecord,
        stopRecord
    };
}
function shouldStartRecord(recorderState, tabId, activeTabId) {
    if (!recorderState || !tabId) {
        return false;
    }
    const { status, taskType, snapshotTabId } = recorderState;
    if (status !== RecordingStatus.Running) {
        return;
    }
    if (taskType === TaskType.Snapshot) {
        return snapshotTabId === tabId;
    }
    return tabId === activeTabId;
}

const _hoisted_1$h = {
    key: 0,
    class: "countdown-overlay"
};
const _hoisted_2$a = {
    class: "countdown-message"
};
const _hoisted_3$5 = {
    class: "countdown"
};
const _sfc_main$f = /*@__PURE__*/ defineComponent({
    __name: 'count-down',
    emits: [
        "start",
        "end"
    ],
    setup (__props, { emit: __emit }) {
        const ctx = useRecorderClientContext();
        const { t } = useI18n();
        const countdownRef = ref(0);
        const taskTypeRef = ref();
        const startRecordMutation = useMutation(RecordStartDocument);
        const emit = __emit;
        function startRecord(taskId, taskType) {
            taskTypeRef.value = taskType;
            return startRecordMutation.mutate({
                name: document.title || location.origin,
                url: location.href,
                taskType,
                taskId
            });
        }
        useSubscription(ctx.startCountDown$.pipe(tap(({ taskType, taskId })=>{
            {
                if (taskType !== TaskType.Snapshot) {
                    return;
                }
                debugOperation('start record for snapshot');
                startRecord(taskId, taskType);
            }
        }), switchMap(({ taskType, taskId })=>interval(1000).pipe(scan((value)=>value - 1, 3), take(3), startWith(3), map((countdown)=>({
                    countdown,
                    taskType,
                    taskId
                }))))).subscribe(({ countdown, taskType, taskId })=>{
            countdownRef.value = countdown;
            if (countdown > 0) {
                emit('start', taskId);
            } else {
                emit('end', taskId);
            }
            if (countdown === 0 && taskType !== TaskType.Snapshot) {
                startRecord(taskId);
            }
        }));
        return (_ctx, _cache)=>{
            return countdownRef.value ? (openBlock(), createElementBlock("div", _hoisted_1$h, [
                createBaseVNode("div", _hoisted_2$a, [
                    taskTypeRef.value === unref(TaskType).Snapshot ? (openBlock(), createElementBlock(Fragment, {
                        key: 0
                    }, [
                        createTextVNode(toDisplayString(unref(t)('camera.Countdown.CaptureOnePageTipText')), 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, {
                        key: 1
                    }, [
                        createTextVNode(toDisplayString(unref(t)('camera.Countdown.TipText')), 1)
                    ], 64))
                ]),
                createBaseVNode("div", _hoisted_3$5, toDisplayString(countdownRef.value), 1)
            ])) : createCommentVNode("", true);
        };
    }
});

const _hoisted_1$g = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$9 = /*#__PURE__*/createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  d: "M15 5h2V3h-2zM7 5h2V3H7zm8 8h2v-2h-2zm-8 0h2v-2H7zm8 8h2v-2h-2zm-8 0h2v-2H7z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$9
];

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$g, [..._hoisted_3$4]))
}

const Drag = { name: 'grommet-icons-drag', render: render$1 };
/* vite-plugin-components disabled */

const _hoisted_1$f = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /*#__PURE__*/createBaseVNode("path", {
  fill: "currentColor",
  d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m72-88a72 72 0 1 1-72-72a72.08 72.08 0 0 1 72 72"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$8
];

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$f, [..._hoisted_3$3]))
}

const RecordFill = { name: 'ph-record-fill', render };
/* vite-plugin-components disabled */

const _hoisted_1$e = [
    "disabled"
];
const _hoisted_2$7 = {
    class: "operation-icon"
};
const _sfc_main$e = /*@__PURE__*/ defineComponent({
    __name: 'operation-button',
    props: {
        disabled: {
            type: Boolean
        },
        class: {}
    },
    emits: [
        "click"
    ],
    setup (__props, { emit: __emit }) {
        const props = __props;
        const emit = __emit;
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("button", {
                class: normalizeClass([
                    'operation-button',
                    props.class
                ]),
                disabled: props.disabled,
                onClick: _cache[0] || (_cache[0] = ($event)=>emit('click', $event))
            }, [
                createBaseVNode("span", _hoisted_2$7, [
                    renderSlot(_ctx.$slots, "default")
                ])
            ], 10, _hoisted_1$e);
        };
    }
});

const _hoisted_1$d = {
    class: "indicator"
};
const _sfc_main$d = /*@__PURE__*/ defineComponent({
    __name: 'indicator',
    props: {
        status: {}
    },
    emits: [
        "resume",
        "pause",
        "complete",
        "cancel",
        "toggle",
        "close",
        "move"
    ],
    setup (__props, { emit: __emit }) {
        const props = __props;
        const emit = __emit;
        const onPointerDown = (start)=>{
            if (!(start.currentTarget instanceof HTMLElement) || start.target !== start.currentTarget || start.button !== 0) {
                return;
            }
            const target = start.currentTarget;
            target.setPointerCapture(start.pointerId);
            const move$ = fromEvent(target, 'pointermove');
            const up$ = fromEvent(target, 'pointerup');
            move$.pipe(takeUntil(up$), filter((e)=>{
                if (!window.visualViewport) {
                    return false;
                }
                return e.clientX >= 0 && e.clientX <= window.visualViewport.width && e.clientY >= 0 && e.clientY <= window.visualViewport.height;
            }), pairwise(), map(([first, second])=>{
                const dx = second.clientX - first.clientX;
                const dy = second.clientY - first.clientY;
                return [
                    dx,
                    dy
                ];
            })).subscribe(([dx, dy])=>{
                emit('move', dx, dy);
            });
        };
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", _hoisted_1$d, [
                createBaseVNode("div", {
                    class: "indicator-content",
                    onPointerdown: onPointerDown
                }, [
                    createVNode(unref(Drag), {
                        style: {
                            "color": "#333333",
                            "pointer-events": "none",
                            "font-size": "18px"
                        }
                    }),
                    createVNode(_sfc_main$e, {
                        class: "stop",
                        disabled: props.status === unref(RecordingStatus).Stopped,
                        onClick: _cache[0] || (_cache[0] = ($event)=>emit('complete'))
                    }, {
                        default: withCtx(()=>[
                                createVNode(unref(StopIcon), {
                                    style: {
                                        "opacity": "0.7",
                                        "width": "18px",
                                        "height": "18px"
                                    }
                                })
                            ]),
                        _: 1
                    }, 8, [
                        "disabled"
                    ]),
                    props.status === unref(RecordingStatus).Stopped ? (openBlock(), createBlock(_sfc_main$e, {
                        key: 0,
                        class: "play",
                        onClick: _cache[1] || (_cache[1] = ($event)=>emit('resume'))
                    }, {
                        default: withCtx(()=>[
                                createVNode(unref(RecordFill))
                            ]),
                        _: 1
                    })) : props.status === unref(RecordingStatus).Paused ? (openBlock(), createBlock(_sfc_main$e, {
                        key: 1,
                        class: "play",
                        onClick: _cache[2] || (_cache[2] = ($event)=>emit('resume'))
                    }, {
                        default: withCtx(()=>[
                                createVNode(unref(PlayIcon))
                            ]),
                        _: 1
                    })) : (openBlock(), createBlock(_sfc_main$e, {
                        key: 2,
                        class: "pause",
                        onClick: _cache[3] || (_cache[3] = ($event)=>emit('pause'))
                    }, {
                        default: withCtx(()=>[
                                createVNode(unref(PauseIcon))
                            ]),
                        _: 1
                    })),
                    createVNode(_sfc_main$e, {
                        class: "cancel",
                        disabled: props.status === unref(RecordingStatus).Stopped,
                        onClick: _cache[4] || (_cache[4] = ($event)=>emit('cancel'))
                    }, {
                        default: withCtx(()=>[
                                createVNode(unref(RemoveIcon))
                            ]),
                        _: 1
                    }, 8, [
                        "disabled"
                    ]),
                    renderSlot(_ctx.$slots, "default")
                ], 32)
            ]);
        };
    }
});

function useOpenLinkQuery() {
    const appIdSubscription = useSubscription$1(AppIdDocument);
    const oauthCodeQuery = useLazyQuery(OAuthCodeDocument);
    return async (url)=>{
        if (!isAppUrl(url)) {
            return url;
        }
        const query = {};
        await (oauthCodeQuery.load() || oauthCodeQuery.refetch());
        const code = oauthCodeQuery.result.value?.oauthCode;
        if (code) {
            query['oauthCode'] = code;
        }
        const appId = appIdSubscription.result.value?.appId;
        if (appId) {
            query['appId'] = appId;
        }
        return withQuery(url, query);
    };
}

function useTaskUploadStatus(taskId, disabled = ref(false)) {
    const variables = computed(()=>({
            id: taskId.value ?? 0
        }));
    const query = useQuery(TaskUploadStatusDocument, variables, {
        enabled: computed(()=>isSafeInteger(taskId.value) && !disabled.value)
    });
    query.subscribeToMore(()=>({
            document: TaskUploadStatusChangeDocument,
            variables: variables.value,
            updateQuery (_, { subscriptionData }) {
                return {
                    taskUploadStatus: subscriptionData.data.taskUploadStatusChange
                };
            }
        }));
    const taskUploadStatus = computed(()=>query.result.value?.taskUploadStatus);
    const errorMessage = computed(()=>taskUploadStatus.value?.errorMessage);
    watch(taskId, ()=>{
        query.result.value = undefined;
    });
    return {
        taskUploadStatus,
        errorMessage
    };
}

const UploadTaskIdContext = Symbol('upload-task-id');

const data = {
	"width": 24,
	"height": 24,
	"body": "<path fill=\"currentColor\" d=\"M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m2.59 6L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8Z\"/>"
};
var _default = data;

/* unplugin-vue-components disabled */const _sfc_main$c = {};

const _hoisted_1$c = { class: "upload-motion__retry" };
const _hoisted_2$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "140px",
  style: {"top":"45px"},
  height: "50px",
  viewBox: "0 0 24 24"
};

function _sfc_render$4(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", _hoisted_1$c, [
    (openBlock(), createElementBlock("svg", _hoisted_2$6, _cache[0] || (_cache[0] = [
      createStaticVNode("<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke-dasharray=\"64\" stroke-dashoffset=\"64\" stroke-width=\"2\" d=\"M13 3L19 9V21H5V3H13\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"64;0\"></animate></path><path stroke-dasharray=\"14\" stroke-dashoffset=\"14\" d=\"M12.5 3V8.5H19\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.7s\" dur=\"0.2s\" values=\"14;0\"></animate></path><g stroke-dasharray=\"8\" stroke-dashoffset=\"8\" stroke-width=\"2\"><path d=\"M9 14H15\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1s\" dur=\"0.2s\" values=\"8;0\"></animate></path><path d=\"M12 11V17\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1.2s\" dur=\"0.2s\" values=\"8;0\"></animate></path></g></g>", 1)
    ]))),
    _cache[1] || (_cache[1] = createBaseVNode("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "140px",
      height: "140px",
      viewBox: "0 0 24 24"
    }, [
      createBaseVNode("g", {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-width": "2"
      }, [
        createBaseVNode("path", {
          "stroke-dasharray": "60",
          "stroke-dashoffset": "60",
          "stroke-opacity": "0.3",
          d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
        }, [
          createBaseVNode("animate", {
            fill: "freeze",
            attributeName: "stroke-dashoffset",
            dur: "1s",
            values: "60;0"
          })
        ])
      ])
    ], -1))
  ]))
}
const AnimateRetry = /*#__PURE__*/_export_sfc(_sfc_main$c, [['render',_sfc_render$4]]);

/* unplugin-vue-components disabled */const _sfc_main$b = {};

const _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "140px",
  height: "140px",
  viewBox: "0 0 48 48"
};

function _sfc_render$3(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$b, _cache[0] || (_cache[0] = [
    createBaseVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "4"
    }, [
      createBaseVNode("path", { d: "m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012z" }),
      createBaseVNode("path", { d: "m17 24l5 5l10-10" })
    ], -1)
  ])))
}
const AnimateSuccess = /*#__PURE__*/_export_sfc(_sfc_main$b, [['render',_sfc_render$3]]);

/* unplugin-vue-components disabled */const _sfc_main$a = {};

const _hoisted_1$a = { class: "upload-motion__uploading" };
const _hoisted_2$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  style: {"top":"37px","left":"40px"},
  width: "60px",
  height: "60px",
  viewBox: "0 0 24 24"
};

function _sfc_render$2(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", _hoisted_1$a, [
    (openBlock(), createElementBlock("svg", _hoisted_2$5, _cache[0] || (_cache[0] = [
      createStaticVNode("<g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path fill=\"none\" stroke-dasharray=\"14\" stroke-dashoffset=\"14\" d=\"M6 19h12\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.4s\" values=\"14;0\"></animate></path><path fill=\"currentColor\" d=\"M12 15 h2 v-6 h2.5 L12 4.5M12 15 h-2 v-6 h-2.5 L12 4.5\"><animate attributeName=\"d\" calcMode=\"linear\" dur=\"1.5s\" keyTimes=\"0;0.7;1\" repeatCount=\"indefinite\" values=\"M12 15 h2 v-6 h2.5 L12 4.5M12 15 h-2 v-6 h-2.5 L12 4.5;M12 15 h2 v-3 h2.5 L12 7.5M12 15 h-2 v-3 h-2.5 L12 7.5;M12 15 h2 v-6 h2.5 L12 4.5M12 15 h-2 v-6 h-2.5 L12 4.5\"></animate></path></g>", 1)
    ]))),
    _cache[1] || (_cache[1] = createStaticVNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140px\" height=\"140px\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"60\" stroke-dashoffset=\"60\" stroke-opacity=\"0.3\" d=\"M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"1s\" values=\"60;0\"></animate></path><path stroke-dasharray=\"15\" stroke-dashoffset=\"15\" d=\"M12 3C16.9706 3 21 7.02944 21 12\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.9s\" values=\"15;0\"></animate><animateTransform attributeName=\"transform\" dur=\"3.5s\" repeatCount=\"indefinite\" type=\"rotate\" values=\"0 12 12;360 12 12\"></animateTransform></path></g></svg>", 1))
  ]))
}
const AnimateUploading = /*#__PURE__*/_export_sfc(_sfc_main$a, [['render',_sfc_render$2]]);

/* unplugin-vue-components disabled */const _sfc_main$9 = {};

const _hoisted_1$9 = { class: "upload-motion__failed" };
const _hoisted_2$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "130px",
  style: {"top":"28px"},
  height: "67px",
  viewBox: "0 0 24 24"
};

function _sfc_render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", _hoisted_1$9, [
    _cache[1] || (_cache[1] = createBaseVNode("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "130px",
      height: "130px",
      viewBox: "0 0 24 24"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
        opacity: "0.25"
      }),
      createBaseVNode("circle", {
        cx: "12",
        cy: "2.5",
        r: "1.5",
        fill: "currentColor"
      }, [
        createBaseVNode("animateTransform", {
          attributeName: "transform",
          dur: "3.75s",
          repeatCount: "indefinite",
          type: "rotate",
          values: "0 12 12;360 12 12"
        })
      ])
    ], -1)),
    (openBlock(), createElementBlock("svg", _hoisted_2$4, _cache[0] || (_cache[0] = [
      createStaticVNode("<mask id=\"lineMdUploadOffLoop0\"><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path fill=\"currentColor\" fill-opacity=\"0\" stroke-dasharray=\"20\" stroke-dashoffset=\"20\" d=\"M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5\"><animate attributeName=\"d\" begin=\"0.75s\" dur=\"2.25s\" repeatCount=\"indefinite\" values=\"M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5\"></animate><animate fill=\"freeze\" attributeName=\"fill-opacity\" begin=\"1.05s\" dur=\"0.75s\" values=\"0;1\"></animate><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.6s\" values=\"20;0\"></animate></path><path stroke-dasharray=\"14\" stroke-dashoffset=\"14\" d=\"M6 19h12\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"0.75s\" dur=\"0.3s\" values=\"14;0\"></animate></path><path stroke=\"#000\" stroke-dasharray=\"28\" stroke-dashoffset=\"28\" d=\"M0 11h24\" transform=\"rotate(45 13 12)\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1.8s\" dur=\"0.6s\" values=\"28;0\"></animate></path><path stroke-dasharray=\"28\" stroke-dashoffset=\"28\" d=\"M0 13h22\" transform=\"rotate(45 13 12)\"><animate attributeName=\"d\" dur=\"9s\" repeatCount=\"indefinite\" values=\"M0 13h22;M2 13h22;M0 13h22\"></animate><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" begin=\"1.8s\" dur=\"0.6s\" values=\"28;0\"></animate></path></g></mask><rect width=\"24\" height=\"24\" fill=\"currentColor\" mask=\"url(#lineMdUploadOffLoop0)\"></rect>", 2)
    ])))
  ]))
}
const AnimateFailed = /*#__PURE__*/_export_sfc(_sfc_main$9, [['render',_sfc_render$1]]);

const _hoisted_1$8 = {
    class: "upload-motion"
};
const _sfc_main$8 = /*@__PURE__*/ defineComponent({
    __name: 'uploading-motion',
    props: {
        status: {}
    },
    setup (__props) {
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", _hoisted_1$8, [
                createBaseVNode("div", {
                    class: normalizeClass([
                        'upload-motion__button',
                        {
                            finish: _ctx.status === unref(RecordingStatus).Completed || _ctx.status === unref(RecordingStatus).CompletedWithWarning
                        }
                    ])
                }, [
                    _ctx.status === unref(RecordingStatus).Uploading || _ctx.status === unref(RecordingStatus).UploadingExtra ? (openBlock(), createBlock(AnimateUploading, {
                        key: 0
                    })) : _ctx.status === unref(RecordingStatus).Cancelled ? (openBlock(), createBlock(AnimateRetry, {
                        key: 1
                    })) : _ctx.status === unref(RecordingStatus).Failed ? (openBlock(), createBlock(AnimateFailed, {
                        key: 2
                    })) : (openBlock(), createBlock(AnimateSuccess, {
                        key: 3
                    }))
                ], 2)
            ]);
        };
    }
});

const _hoisted_1$7 = {
    class: "upload-dialog"
};
const _hoisted_2$3 = {
    class: "upload-banner"
};
const _hoisted_3$2 = {
    class: "upload-title"
};
const _hoisted_4$2 = {
    key: 0,
    class: "upload-dialog-destructive"
};
const _hoisted_5$1 = {
    key: 0
};
const _hoisted_6 = [
    "href"
];
const _sfc_main$7 = /*@__PURE__*/ defineComponent({
    __name: 'upload-dialog',
    props: {
        disableTips: {
            type: Boolean
        }
    },
    setup (__props) {
        const taskIdRef = injectRequired(UploadTaskIdContext);
        const ctx = useRecorderClientContext();
        const { t } = useI18n();
        const userCancel = ref(false);
        watch(taskIdRef, ()=>{
            userCancel.value = false;
        });
        const { taskUploadStatus, errorMessage } = useTaskUploadStatus(taskIdRef);
        const { result: profile } = useQuery(UserProfileDocument);
        const { result: env } = useSubscription$1(EnvDocument);
        const percentTransition = useTransition(computed(()=>taskUploadStatus.value?.percent || 0), {
            duration: 300
        });
        const taskStatus = computed(()=>{
            if (userCancel.value) {
                return RecordingStatus.Cancelled;
            }
            return taskUploadStatus.value?.taskStatus ?? RecordingStatus.Uploading;
        });
        useMutation(OpenUploadLandingPageDocument);
        const percent = computed(()=>{
            switch(taskStatus.value){
                case RecordingStatus.Completed:
                case RecordingStatus.CompletedWithWarning:
                case RecordingStatus.Failed:
                    return '100%';
                default:
                    return `${percentTransition.value}%`;
            }
        });
        const isCompleted = computed(()=>{
            switch(taskStatus.value){
                case RecordingStatus.Completed:
                case RecordingStatus.CompletedWithWarning:
                    return true;
                default:
                    return false;
            }
        });
        const isFailed = computed(()=>{
            return taskStatus.value === RecordingStatus.Failed;
        });
        const isCanceled = computed(()=>{
            return taskStatus.value === RecordingStatus.Cancelled;
        });
        const isUploading = computed(()=>{
            switch(taskStatus.value){
                case RecordingStatus.Uploading:
                case RecordingStatus.UploadingExtra:
                    return true;
                default:
                    return false;
            }
        });
        const feedbackUrl = withQuery(getHomepageUrl(ctx.region === Region.CHINA ? '/html-to-design/feedback' : '/html-to-figma/feedback', env.value?.env, ctx.region), {
            from: 'chrome-extension',
            version: FULL_VERSION,
            email: profile.value?.profile?.email,
            phone: ''
        });
        const retryMutation = useMutation(RetryUploadDocument);
        const cancelMutation = useMutation(CancelTaskDocument);
        const withOpenLinkQuery = useOpenLinkQuery();
        async function retry() {
            const taskId = taskIdRef.value;
            if (!taskId) {
                return;
            }
            userCancel.value = false;
            await retryMutation.mutate({
                taskId
            });
        }
        async function cancel() {
            if (!taskIdRef.value) {
                return;
            }
            await cancelMutation.mutate({
                taskId: taskIdRef.value
            });
            userCancel.value = true;
        }
        async function onFinish() {
            const env = await ctx.getEnv();
            const demoId = taskUploadStatus.value?.serverId;
            if (demoId) {
                const path = ctx.uploadAction === 'edit' ? `/dashboard/studio/${demoId}` : `/upload/${demoId}`;
                let url = getAppUrl(path, env, ctx.region);
                if (ctx.uploadAction === 'view') {
                    url = withQuery(url, {
                        mockup: 'triage',
                        from: 'immersive'
                    });
                } else {
                    url = await withOpenLinkQuery(url);
                }
                window.open(url, '_blank');
            }
        }
        function onClick() {
            switch(taskStatus.value){
                case RecordingStatus.Cancelled:
                case RecordingStatus.Failed:
                    retry();
                    break;
                case RecordingStatus.UploadingExtra:
                case RecordingStatus.Completed:
                case RecordingStatus.CompletedWithWarning:
                    onFinish();
                    break;
            }
        }
        // close
        function onKeydown(e) {
            if (e.key === 'Enter') {
                onClose();
            }
        }
        useEventListener(window, 'keydown', onKeydown);
        function onClose() {
            taskIdRef.value = undefined;
        }
        const isView = ctx.uploadAction === 'view';
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", _hoisted_1$7, [
                createBaseVNode("div", {
                    class: "close",
                    role: "button",
                    onClick: onClose
                }, [
                    createVNode(unref(Icon), {
                        icon: unref(_default)
                    }, null, 8, [
                        "icon"
                    ])
                ]),
                createBaseVNode("div", _hoisted_2$3, [
                    renderSlot(_ctx.$slots, "default", {
                        isCompleted: isCompleted.value
                    }, ()=>[
                            createVNode(_sfc_main$8, {
                                status: taskStatus.value
                            }, null, 8, [
                                "status"
                            ]),
                            createBaseVNode("h3", _hoisted_3$2, [
                                isFailed.value ? (openBlock(), createElementBlock(Fragment, {
                                    key: 0
                                }, [
                                    createTextVNode(toDisplayString(unref(t)('camera.UploadingTips.UploadFail')), 1)
                                ], 64)) : isCompleted.value ? (openBlock(), createElementBlock(Fragment, {
                                    key: 1
                                }, [
                                    createTextVNode(toDisplayString(unref(t)('camera.UploadingTips.UploadFinish')), 1)
                                ], 64)) : isCanceled.value ? (openBlock(), createElementBlock(Fragment, {
                                    key: 2
                                }, [
                                    createTextVNode(toDisplayString(unref(t)('camera.UploadingTips.UploadCancel')), 1)
                                ], 64)) : (openBlock(), createElementBlock(Fragment, {
                                    key: 3
                                }, [
                                    createTextVNode(toDisplayString(unref(t)('camera.UploadingTips.Uploading')), 1)
                                ], 64))
                            ])
                        ])
                ]),
                isFailed.value && unref(errorMessage) ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
                    createBaseVNode("h3", null, toDisplayString(unref(t)('common.error')), 1),
                    createBaseVNode("p", null, toDisplayString(unref(errorMessage)), 1)
                ])) : createCommentVNode("", true),
                createBaseVNode("div", {
                    class: normalizeClass([
                        "upload-status",
                        {
                            uploading: isUploading.value
                        }
                    ])
                }, [
                    taskStatus.value === unref(RecordingStatus).UploadingExtra ? (openBlock(), createElementBlock("p", _hoisted_5$1, [
                        createTextVNode(toDisplayString(unref(t)('camera.UploadingTips.Almost')) + " ", 1),
                        renderSlot(_ctx.$slots, "almost-done", {}, ()=>[
                                isView ? (openBlock(), createElementBlock("a", {
                                    key: 0,
                                    onClick: onClick
                                }, toDisplayString(unref(t)('camera.UploadingTips.CanView')), 1)) : createCommentVNode("", true)
                            ])
                    ])) : taskStatus.value === unref(RecordingStatus).Uploading ? (openBlock(), createElementBlock(Fragment, {
                        key: 1
                    }, [
                        createTextVNode(toDisplayString(unref(t)('camera.Recorder.Uploading')), 1)
                    ], 64)) : renderSlot(_ctx.$slots, "button", {
                        key: 2,
                        isCompleted: isCompleted.value
                    }, ()=>[
                            isFailed.value || isCanceled.value ? (openBlock(), createElementBlock("button", {
                                key: 0,
                                class: "upload-complete-success-tips",
                                onClick: onClick
                            }, toDisplayString(unref(t)('camera.UploadingTips.Btn.Retry')), 1)) : isView ? (openBlock(), createElementBlock("button", {
                                key: 1,
                                class: "upload-complete-success-tips",
                                onClick: onClick
                            }, toDisplayString(unref(t)('camera.UploadingTips.Btn.View')), 1)) : createCommentVNode("", true)
                        ]),
                    isFailed.value || isCanceled.value ? (openBlock(), createElementBlock("a", {
                        key: 3,
                        href: unref(feedbackUrl),
                        target: "_blank"
                    }, toDisplayString(unref(t)('common.feedback')), 9, _hoisted_6)) : createCommentVNode("", true),
                    isUploading.value ? (openBlock(), createElementBlock(Fragment, {
                        key: 4
                    }, [
                        createBaseVNode("div", {
                            class: "upload-progress",
                            style: normalizeStyle({
                                '--percent': percent.value
                            })
                        }, null, 4),
                        createBaseVNode("button", {
                            class: "upload-dialog-cancel",
                            onClick: cancel
                        }, toDisplayString(unref(t)('common.buttons.cancel')), 1)
                    ], 64)) : createCommentVNode("", true)
                ], 2),
                !isFailed.value || !unref(errorMessage) ? renderSlot(_ctx.$slots, "tips", {
                    key: 1
                }) : createCommentVNode("", true)
            ]);
        };
    }
});

const _hoisted_1$6 = {
    key: 0,
    class: "upload-dialog-overlay"
};
const _sfc_main$6 = /*@__PURE__*/ defineComponent({
    __name: 'recorder',
    setup (__props) {
        const uploadTaskId = ref();
        const hideUpload = ref(false);
        provide(UploadTaskIdContext, uploadTaskId);
        function onCountdownStart() {
            hideUpload.value = true;
        }
        function onCountdownEnd(taskId) {
            if (!uploadTaskId.value || uploadTaskId.value === taskId) {
                hideUpload.value = false;
            }
        }
        function open(taskId) {
            uploadTaskId.value = taskId;
        }
        const ctx = useRecorderClientContext();
        useSubscription(ctx.startUpload$.subscribe((value)=>{
            open(value.taskId);
        }));
        const { startRecord, stopRecord } = makeRecorder(ctx);
        const { recorderStatus, recorderState, onPlay, onPause, onComplete, onCancel, onClose } = useRecorderOperations();
        const activeTabSubscription = useSubscription$1(ActiveTabDocument);
        const activeTab = computed(()=>activeTabSubscription.result.value?.activeTab);
        const isCurrentTabActive = computed(()=>!!ctx.tabId && activeTab.value === ctx.tabId);
        const recording = computed(()=>{
            return shouldStartRecord(recorderState.value, ctx.tabId, activeTab.value);
        });
        watch(recording, (value)=>{
            if (value && recorderState.value) {
                const isSnapshot = recorderState.value?.taskType === TaskType.Snapshot;
                startRecord(recorderState.value.taskId, isSnapshot).then(()=>{
                    if (isSnapshot) {
                        setTimeout(()=>{
                            onComplete();
                        }, 1000);
                    }
                }).catch(()=>{
                    stopRecord();
                });
            } else {
                stopRecord();
            }
        });
        const showIndicator = computed(()=>recorderState.value?.enabled && isCurrentTabActive.value && recorderState.value?.taskType !== TaskType.Snapshot);
        function move(dx, dy) {
            const prev = ctx.position$.getValue();
            ctx.position$.next({
                left: prev.left + dx,
                bottom: prev.bottom - dy
            });
        }
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock(Fragment, null, [
                showIndicator.value ? (openBlock(), createBlock(_sfc_main$d, {
                    key: 0,
                    status: unref(recorderStatus),
                    onResume: unref(onPlay),
                    onPause: unref(onPause),
                    onComplete: unref(onComplete),
                    onCancel: unref(onCancel),
                    onClose: unref(onClose),
                    onMove: move
                }, {
                    default: withCtx(()=>[
                            renderSlot(_ctx.$slots, "default")
                        ]),
                    _: 3
                }, 8, [
                    "status",
                    "onResume",
                    "onPause",
                    "onComplete",
                    "onCancel",
                    "onClose"
                ])) : createCommentVNode("", true),
                createVNode(_sfc_main$f, {
                    onStart: onCountdownStart,
                    onEnd: onCountdownEnd
                }),
                createVNode(Transition, {
                    name: "upload-blur",
                    duration: {
                        enter: 300,
                        leave: 500
                    }
                }, {
                    default: withCtx(()=>[
                            uploadTaskId.value && !hideUpload.value ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
                                renderSlot(_ctx.$slots, "upload", {}, ()=>[
                                        createVNode(_sfc_main$7)
                                    ])
                            ])) : createCommentVNode("", true)
                        ]),
                    _: 3
                })
            ], 64);
        };
    }
});

const _hoisted_1$5 = {
    key: 0,
    class: "demo-video-tips blur-in-expand"
};
const _hoisted_2$2 = [
    "src"
];
const _sfc_main$5 = /*@__PURE__*/ defineComponent({
    __name: 'demo-video-tips',
    props: /*@__PURE__*/ mergeModels({
        videoSrc: {}
    }, {
        "modelValue": {
            type: Boolean
        },
        "modelModifiers": {}
    }),
    emits: [
        "update:modelValue"
    ],
    setup (__props) {
        const props = __props;
        const showTips = useModel(__props, "modelValue");
        const videoEl = ref();
        const ctx = useRecorderClientContext();
        const { t } = useI18n();
        useSubscription(ctx.showDemoVideo$.subscribe(()=>{
            showTips.value = true;
        }));
        function close() {
            showTips.value = false;
        }
        function replay() {
            setTimeout(()=>{
                if (!videoEl.value) {
                    return;
                }
                videoEl.value.currentTime = 0;
                videoEl.value.play();
            }, 3000);
        }
        return (_ctx, _cache)=>{
            return showTips.value ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
                createBaseVNode("h1", {
                    class: "demo-video-tips__title",
                    onClick: close
                }, toDisplayString(unref(t)('camera.RecordingTutorial.Start')), 1),
                createBaseVNode("video", {
                    ref_key: "videoEl",
                    ref: videoEl,
                    class: "demo-video-tips__content",
                    height: "242",
                    autoplay: "",
                    muted: "",
                    onEnded: replay
                }, [
                    createBaseVNode("source", {
                        src: props.videoSrc,
                        type: "video/mp4"
                    }, null, 8, _hoisted_2$2),
                    createTextVNode(" " + toDisplayString(unref(t)('camera.RecordingTutorial.UnSupport')), 1)
                ], 544),
                createBaseVNode("button", {
                    class: "demo-video-tips__confirm",
                    onClick: close
                }, toDisplayString(unref(t)('camera.RecordingTutorial.Confirm')), 1)
            ])) : createCommentVNode("", true);
        };
    }
});

const _hoisted_1$4 = {
    key: 0,
    class: "tour-tutorial-video"
};
const _hoisted_2$1 = {
    class: "upload-dialog",
    style: {
        "width": "550px"
    }
};
const _hoisted_3$1 = [
    "src"
];
const _hoisted_4$1 = {
    class: "desc"
};
const _hoisted_5 = [
    "href"
];
const _sfc_main$4 = /*@__PURE__*/ defineComponent({
    __name: 'tour-tutorial-video',
    props: /*@__PURE__*/ mergeModels({
        videoSrc: {}
    }, {
        "modelValue": {
            type: Boolean
        },
        "modelModifiers": {}
    }),
    emits: [
        "update:modelValue"
    ],
    setup (__props) {
        const props = __props;
        const { t } = useI18n();
        const ctx = useRecorderClientContext();
        const show = useModel(__props, "modelValue");
        useSubscription(ctx.showTourTutorialVideo$.subscribe(()=>{
            show.value = true;
        }));
        const productTourDocUrl = getToFigmaDocsUrl('/features/product-tour', EnvType.Production);
        const videoTip = computed(()=>{
            return t('camera.RecordingTutorial.VideoTip', {
                part1: t('camera.popup.capture'),
                part2: t('camera.popup.product-tour')
            });
        });
        return (_ctx, _cache)=>{
            return show.value ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
                createBaseVNode("div", _hoisted_2$1, [
                    createBaseVNode("div", {
                        class: "close",
                        role: "button",
                        tabindex: "0",
                        onClick: _cache[0] || (_cache[0] = ($event)=>show.value = false),
                        onKeydown: _cache[1] || (_cache[1] = withKeys(($event)=>show.value = false, [
                            "enter"
                        ]))
                    }, [
                        createVNode(unref(Icon), {
                            icon: unref(_default)
                        }, null, 8, [
                            "icon"
                        ])
                    ], 32),
                    createBaseVNode("video", {
                        autoplay: "",
                        muted: "",
                        loop: "",
                        class: "full-width-video",
                        src: props.videoSrc,
                        controls: false
                    }, null, 8, _hoisted_3$1),
                    createBaseVNode("p", _hoisted_4$1, toDisplayString(videoTip.value), 1),
                    createBaseVNode("a", {
                        class: "upload-complete-success-tips",
                        style: {
                            "cursor": "pointer"
                        },
                        onClick: _cache[2] || (_cache[2] = ($event)=>show.value = false)
                    }, toDisplayString(unref(t)('common.got-it')), 1),
                    createBaseVNode("a", {
                        class: "footer-desc",
                        href: unref(productTourDocUrl),
                        target: "_blank"
                    }, toDisplayString(unref(t)('camera.recording.get_more')), 9, _hoisted_5)
                ])
            ])) : createCommentVNode("", true);
        };
    }
});

/* unplugin-vue-components disabled */const _sfc_main$3 = {};

const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};

function _sfc_render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2m-2-1h8v-2H5zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5m-2 0C14.5 6.47 12.03 4 9 4S3.5 6.47 3.5 9.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5m6.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94z"
    }, null, -1)
  ])))
}
const IconTipsAndUpdates = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render',_sfc_render]]);

const _hoisted_1$2 = {
    key: 0,
    class: "tipsLore"
};
const _sfc_main$2 = /*@__PURE__*/ defineComponent({
    __name: 'index',
    setup (__props) {
        const tipLoreSubscription = useSubscription$1(TipLoreDocument);
        const withOpenLinkQuery = useOpenLinkQuery();
        const lore = computed(()=>{
            return tipLoreSubscription.result.value?.tipLore;
        });
        const openLearnMore = async (url)=>{
            url = await withOpenLinkQuery(url);
            window.open(url, '_blank');
        };
        return (_ctx, _cache)=>{
            return lore.value?.title ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
                createVNode(IconTipsAndUpdates),
                createTextVNode(" " + toDisplayString(lore.value.title) + " ", 1),
                _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
                lore.value.url ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    onClick: _cache[0] || (_cache[0] = ($event)=>openLearnMore(lore.value.url))
                }, toDisplayString(lore.value.urlText || 'Learn more'), 1)) : createCommentVNode("", true)
            ])) : createCommentVNode("", true);
        };
    }
});

const _hoisted_1$1 = [
    "src"
];
const _hoisted_2 = [
    "src"
];
const _hoisted_3 = [
    "href"
];
const _hoisted_4 = [
    "href"
];
const _sfc_main$1 = /*@__PURE__*/ defineComponent({
    __name: 'design-upload-dialog',
    props: {
        uploadSuccessVideo: {},
        pluginOpenedVideo: {},
        href: {},
        disableTips: {
            type: Boolean
        }
    },
    setup (__props) {
        const props = __props;
        const { t } = useI18n();
        const figmaPluginOpenedSubscription = useSubscription$1(FigmaPluginOpenedDocument);
        const figmaPluginOpened = computed(()=>{
            return figmaPluginOpenedSubscription.result.value?.figmaPluginOpened;
        });
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(_sfc_main$7, null, {
                default: withCtx(({ isCompleted })=>[
                        isCompleted ? (openBlock(), createElementBlock(Fragment, {
                            key: 0
                        }, [
                            figmaPluginOpened.value && props.pluginOpenedVideo ? (openBlock(), createElementBlock("video", {
                                key: 0,
                                autoplay: "",
                                muted: "",
                                loop: "",
                                class: "full-width-video",
                                src: props.pluginOpenedVideo,
                                controls: false
                            }, null, 8, _hoisted_1$1)) : props.uploadSuccessVideo ? (openBlock(), createElementBlock("video", {
                                key: 1,
                                autoplay: "",
                                muted: "",
                                loop: "",
                                class: "full-width-video",
                                src: props.uploadSuccessVideo,
                                controls: false
                            }, null, 8, _hoisted_2)) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true)
                    ]),
                button: withCtx(({ isCompleted })=>[
                        isCompleted ? (openBlock(), createElementBlock("a", {
                            key: 0,
                            target: "_blank",
                            href: props.href,
                            class: "upload-complete-success-tips",
                            style: {
                                "margin-top": "10px"
                            }
                        }, [
                            figmaPluginOpened.value ? renderSlot(_ctx.$slots, "open", {
                                key: 0
                            }) : renderSlot(_ctx.$slots, "import", {
                                key: 1
                            })
                        ], 8, _hoisted_3)) : createCommentVNode("", true)
                    ]),
                "almost-done": withCtx(()=>[
                        createBaseVNode("a", {
                            href: props.href,
                            target: "_blank"
                        }, toDisplayString(unref(t)('camera.UploadingTips.CanImport')), 9, _hoisted_4)
                    ]),
                tips: withCtx(()=>[
                        !props.disableTips ? (openBlock(), createBlock(_sfc_main$2, {
                            key: 0
                        })) : createCommentVNode("", true)
                    ]),
                _: 3
            });
        };
    }
});

function setupContainer() {
    const container = document.createElement('div');
    container.dataset['demowayIgnore'] = 'true';
    const shadowRoot = container.attachShadow({
        mode: 'closed'
    });
    const killAd = document.getElementById('killAd');
    if (killAd?.parentElement === document.body) {
        document.body.insertBefore(container, killAd);
    } else {
        document.body.appendChild(container);
    }
    return {
        container,
        shadowRoot
    };
}

const styleUrl = "/assets/style-CKSY5OTM.css";

class BrowserExtensionRecorderClientContext extends RecorderClientContext {
    recordCrossOriginIframes = true;
    pickElement$ = new Subject();
}

async function setupRootFrame(intermediaryUrl, Host, styles = []) {
    const customElementName = 'v-' + intermediaryUrl.host;
    if (customElements.get(customElementName)) {
        return;
    }
    const ctx = new BrowserExtensionRecorderClientContext({
        intermediaryUrl,
        attributes: {},
        contextName: 'content-script:main:root',
        region: REGION
    });
    fromEvent(window, PopupToContentScriptEvent.RecordingCompleted).subscribe((event)=>{
        const data = JSON.parse(event.detail);
        ctx.startUpload$.next(data);
    });
    fromEvent(window, PopupToContentScriptEvent.ShowTourTutorialVideo).subscribe(()=>{
        ctx.showTourTutorialVideo$.next();
    });
    fromEvent(window, BackgroundToContentScriptEvent.StartCountdown).subscribe((event)=>{
        const data = JSON.parse(event.detail);
        ctx.startCountDown$.next(data);
    });
    fromEvent(window, BackgroundToContentScriptEvent.ShowDemoVideo).subscribe(()=>{
        ctx.showDemoVideo$.next();
    });
    const { container, shadowRoot } = setupContainer();
    const app = createApp(()=>[
            ...styles.map((style)=>h('link', {
                    rel: 'stylesheet',
                    href: new URL(style, intermediaryUrl.origin)
                })),
            h('link', {
                rel: 'stylesheet',
                href: new URL(styleUrl, intermediaryUrl.origin)
            }),
            h(Host)
        ]);
    app.provide(BrowserExtensionRecorderClientContext.injectionKey, ctx);
    app.provide(DefaultApolloClient, ctx.apolloClient);
    app.use(createI18n({
        locale: DEFAULT_LOCALE,
        fallbackLocale: DEFAULT_LOCALE,
        messages
    }));
    app.config.errorHandler = (error, vm, info)=>{
        ctx.logErrorObject(info, error);
    };
    app.mount(shadowRoot);
    ctx.position$.subscribe(({ bottom, left })=>{
        container.style.bottom = vt(bottom);
        container.style.left = vt(left);
    });
    await ctx.waitForReady();
}

async function setupSubFrame(intermediaryUrl, styles = []) {
    const ctx = new BrowserExtensionRecorderClientContext({
        intermediaryUrl,
        attributes: {},
        contextName: 'content-script:sub:root',
        region: REGION
    });
    const { container, shadowRoot } = setupContainer();
    container.style.display = 'none';
    for (const style of styles){
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = new URL(style, intermediaryUrl.origin).href;
        shadowRoot.appendChild(link);
    }
    const iframe = document.createElement('iframe');
    const endpointUrl = new URL(intermediaryUrl);
    endpointUrl.searchParams.set('connect_type', 'sub_frame');
    iframe.src = endpointUrl.href;
    setupRecorder();
    shadowRoot.appendChild(iframe);
    async function setupRecorder() {
        await waitForIframeReady(endpointUrl.origin);
        if (!iframe?.contentWindow) {
            throw new Error();
        }
        const { tabId } = await ctx.connect(iframe);
        const activeTab$ = useSubscription(ActiveTabDocument);
        const recorderState$ = useSubscription(RecorderStateDocument);
        const { startRecord, stopRecord } = makeRecorder(ctx);
        combineLatest([
            recorderState$.pipe(map((value)=>value?.recorderState)),
            activeTab$.pipe(map((value)=>value?.activeTab))
        ]).pipe(map(([recorderState, activeTab])=>{
            return shouldStartRecord(recorderState, tabId, activeTab);
        }), distinctUntilChanged(), delay(50)).subscribe((recording)=>{
            const taskId = recorderState$.getValue()?.recorderState?.taskId;
            if (recording && taskId) {
                startRecord(taskId);
            } else {
                stopRecord();
            }
        });
    }
    function useSubscription(query, initialValue = null) {
        const state$ = new BehaviorSubject(initialValue);
        const subscription = ctx.apolloClient.subscribe({
            query
        });
        fromZenObservable(subscription).pipe(map((value)=>value.data)).subscribe(state$);
        return state$;
    }
}

function isInCrossOriginIframe() {
    try {
        if (window.parent === window) {
            return false;
        }
        return !window.parent.document;
    } catch (error) {
        return true;
    }
}
function isRootFrame() {
    return !window.parent || window.parent === window;
}

async function setupMainWorld(Host, styles = []) {
    const url = new URL(import.meta.url);
    const intermediaryUrl = new URL(INTERMEDIARY_PATH, url.origin);
    if (isInCrossOriginIframe()) {
        await setupSubFrame(intermediaryUrl, styles);
    } else if (isRootFrame()) {
        await setupRootFrame(intermediaryUrl, Host, styles);
    }
}

const TutorialFigmaVideo = "/assets/import-into-figma-DSTpBHWR.webm";

const searchVideo = "/assets/search-X9pHSPVn.webm";

const startRecordVideo = "/assets/pin_capture-the-page-DE2Xb3DU.webm";

const TourTutorial = "/assets/product-tour-one-click-one-page-BKumZSRE.webm";

const _hoisted_1 = {
    style: {
        "display": "none"
    }
};
const _sfc_main = /*@__PURE__*/ defineComponent({
    __name: 'host',
    setup (__props) {
        const origin = new URL(import.meta.url).origin;
        const uploadSuccessVideoSrc = new URL(TutorialFigmaVideo, origin).href;
        const videoSrc = new URL(startRecordVideo, origin).href;
        const tourVideoSrc = new URL(TourTutorial, origin).href;
        const pluginOpenedVideoSrc = new URL(searchVideo, origin).href;
        const ctx = useRecorderClientContext();
        const isReady = useObservable(ctx.isReady$, {
            initialValue: ctx.isReady$.getValue()
        });
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock(Fragment, null, [
                unref(isReady) ? (openBlock(), createBlock(unref(_sfc_main$6), {
                    key: 0
                }, {
                    upload: withCtx(()=>[
                            createVNode(unref(_sfc_main$1), {
                                href: "https://www.figma.com/community/plugin/1385944139259302061/",
                                "upload-success-video": unref(uploadSuccessVideoSrc),
                                "plugin-opened-video": unref(pluginOpenedVideoSrc)
                            }, {
                                import: withCtx(()=>_cache[0] || (_cache[0] = [
                                        createTextVNode("Import into Figma")
                                    ])),
                                open: withCtx(()=>_cache[1] || (_cache[1] = [
                                        createTextVNode("Open HTML to Figma plugin")
                                    ])),
                                _: 1
                            }, 8, [
                                "upload-success-video",
                                "plugin-opened-video"
                            ])
                        ]),
                    _: 1
                })) : createCommentVNode("", true),
                createVNode(unref(_sfc_main$5), {
                    "video-src": unref(videoSrc)
                }, null, 8, [
                    "video-src"
                ]),
                createVNode(unref(_sfc_main$4), {
                    "video-src": unref(tourVideoSrc)
                }, null, 8, [
                    "video-src"
                ]),
                createBaseVNode("div", _hoisted_1, [
                    createVNode(unref(_sfc_main$g))
                ]),
                createVNode(unref(_sfc_main$h))
            ], 64);
        };
    }
});

setupMainWorld(_sfc_main, []);

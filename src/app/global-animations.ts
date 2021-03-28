import {
    animation,
    transition,
    trigger,
    animate,
    style,
    state,
    keyframes,
    useAnimation,
    query,
    stagger
} from '@angular/animations';

/* reusable functions can be used in trigger using "useAnimation" */
export let bounceOutLeftAnimation = animation(
    animate('.5s ease-in', keyframes([
        style({
            offset: .2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        })
    ])),
);

export let fadeInParamsAnimation = animation([
    style({ opacity: 0 }),
    animate('{{ duration }} {{ easing }}', style({ opacity: 1 })),
], {
    params: {
        duration: '.5s',
        easing: 'ease-out'
    }
}
);

export let fadeOutParamsAnimation = animation([
    animate('{{ duration }} {{ easing }}'),
], {
    params: {
        duration: '.5s',
        easing: 'ease-in'
    }
}
);
/* reusable functions can be used in trigger */

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition('void <=> *', [
        //  animate(50),
        useAnimation(fadeInParamsAnimation, {
            params: {
                duration: '2s'
            }
        })

    ])
]);

export let keyframe = trigger('keyframe', [
    transition(':leave',
        useAnimation(bounceOutLeftAnimation)
    )
]);

export let listStagger = trigger('listStagger', [
    transition('* => *', [
        query(
            ':enter',
            [
                style({ opacity: 0, transform: 'translateY(-100px)' }),
                stagger(
                    '50ms',
                    animate(
                        '500ms ease-out',
                        style({ opacity: 1, transform: 'translateY(0px)' })
                    )
                )
            ],
            { optional: true }
        ),

    ])
]);

export let fastListStagger = trigger('fastListStagger', [
    transition('* => *', [
        query(
            ':enter',
            [
                style({ opacity: 0, transform: 'translateY(-5px)' }),
                stagger(
                    '20ms',
                    animate(
                        '30ms ease-out',
                        style({ opacity: 1, transform: 'translateY(0px)' })
                    )
                )
            ],
            { optional: true }
        ),

    ])
]);

export let slideInOut = trigger('slideInOut', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
        animate('500ms ease-in', style({ transform: 'translateX(-100%)' }))
    ])
]);

export let slideStagger = trigger('slideStagger', [
    transition(':enter', [
        query(
            ':enter',
            [
                style({ opacity: 0, transform: 'translateX(-100%)' }),
                stagger(
                    '200ms',
                    animate(
                        '500ms ease-in',
                        style({ opacity: 1, transform: 'translateX(0%)' })
                    )
                )
            ],
            { optional: true }
        ),
        query(':leave',
            useAnimation(bounceOutLeftAnimation), {
            optional: true
        })

    ]),

]);

export let fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        useAnimation(fadeInParamsAnimation, {
            params: {
                duration: '1s'
            }
        })
    ]),
    transition(':leave', [
        useAnimation(fadeOutParamsAnimation, {
            params: {
                duration: '.05s',
                easing: 'ease-in-out'
            }
        }),
        useAnimation(bounceOutLeftAnimation)
    ]),
]);
export let fadeInOutUsingCustomStates = trigger('WrongMessage', [
    state('hidden', style({
        opacity: 0,
        display: 'none'
    })),
    state('shown', style({
        opacity: 1
    })),
    transition('hidden => shown', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
            '500ms ease-out',
            style({ opacity: 1, transform: 'translateY(0px)' })
        )
    ]),

]);

export let fadeInRight = trigger('fadeInRight', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-40px)' }),
        animate(
            '500ms ease-out',
            style({ opacity: 1, transform: 'translateX(0px)' })
        )
    ])
]);

export let fadeInLeft = trigger('fadeInLeft', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(40px)' }),
        animate('500ms ease-out')
    ])
]);

export let fadeInTop = trigger('fadeInTop', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-40px)' }),
        animate(
            '500ms ease-out',
            style({ opacity: 1, transform: 'translateY(0px)' })
        )
    ])
]);

export let fadeOutTop = trigger('fadeOutTop', [
    transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0px)' }),
        animate(
            '250ms ease-out',
            style({ opacity: 0, transform: 'translateY(-40px)' })
        )
    ])
]);

export function fadeIn(selector = ':enter', duration = '400ms ease-out') {
    return [
        transition('* => *', [
            query(selector, [
                style({ opacity: 0, transform: 'translateY(-10px)' }),
                stagger('50ms', [
                    animate(duration, style({
                        opacity: 1,
                        transform: 'translateY(0px)'
                    }))
                ])
            ], { optional: true })
        ])
    ];
}

export function fadeOut(selector = ':leave', duration = 300) {
    return [
        transition('* => *', [
            query(selector, [
                style({ opacity: 1 }),
                stagger('30ms', [
                    animate(duration, style({
                        opacity: 0
                    }))
                ])
            ], { optional: true })
        ])
    ];
}

export let squash = trigger('squash', [
    transition('void => *', [
        style({
            transform: 'scale(.8)',
            opacity: 0,
        }),

        animate('200ms', style({
            transform: 'scale(1)',
            opacity: 1
        }))
    ]),
    transition('* => void', [
        style({
            transform: 'scale(1)',
            opacity: 1,
        }),

        animate('200ms', style({
            transform: 'scale(0)',
            opacity: 0
        }))
    ]),
]);

export let squashStagger = trigger('squashStagger', [
    transition('* <=> *', [
        query(':enter', [

            style({
                transform: 'scale(.8)',
                opacity: 0,
            }),
            stagger('0ms', [

                animate('300ms', style({
                    transform: 'scale(1)',
                    opacity: 1,
                }))
            ])
        ], { optional: true })

    ]),
]);

export let slideInOut2 = trigger('slideInOut2', [
    transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('.5s', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('.5s', style({ transform: 'translateX(100%)' }))
    ])
]);

export let widthIncreser = trigger('widthIncreser', [
    transition(':enter', [
        style({ minWidth: 0, width: 0 }),
        animate('.25s', style({ minWidth: '*', width: '*' }))
    ])
]);

export let heightIncreaser = trigger('heightIncreaser', [
    state('true', style({ display: 'block' })),
    state('false', style({ display: 'none' })),
    transition('false => true', [
        style({ height: 0, opacity: 0 }),
        animate('0.25s 0.2s ease-in')
    ]),
    transition('true => false', [
        animate('0.25s 0.2s ease-in', style({ height: 0, opacity: 0 }))
    ])

    // transition(':enter, false => true', [
    //     style({ minHeight: 0, height: 0 }),
    //     animate('200ms', style({ minHeight: '*', height: '*' }))
    // ]),
    // transition(':leave, true => false', [
    //     style({ minHeight: '*', height: '*' }),
    //     animate('500ms', style({ minHeight: 0, height: 0 }))
    // ])
]);

export let slide = trigger("slide", [
    transition("* => *", [
        // First hide the rows
        query(':enter', style({ opacity: 0, transform: "translateY(-40px)" })),
        // Then slide in one by one using stagger. Here first timing parameter i.e. 100ms is the delay you seek
        query(':enter', stagger('100ms',
            animate('500ms', keyframes([
                style({ opacity: 0, transform: 'translateY(-40px)', offset: 0 }),
                style({ opacity: 0.25, transform: 'translateY(-25px)', offset: 0.25 }),
                style({ opacity: 0.5, transform: 'translateY(-5px)', offset: 0.5 }),
                style({ opacity: 0.75, transform: 'translateY(5px)', offset: 0.75 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
            ]))
        ))
    ])
]);

export let pulseAnimationWithOutStagger = trigger('pulse', [
    transition('void => *', [
        animate('.25s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ]))
    ])
]);

export let pulseAnimation = trigger('pulseAnimation', [
    // Transition from any state to any state
    transition('* => *', [
        // Initially the all cards are not visible
        query(':enter', style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(':enter', stagger('300ms', [
            animate('.5s ease-in', keyframes([
                style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
                style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
            ]))]), { optional: true }),

        // Cards will disappear sequentially with the delay of 300ms
        // query(':leave', stagger('300ms', [
        //     animate('500ms ease-out', keyframes([
        //         style({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
        //         style({ opacity: .5, transform: 'scale(.5)', offset: 0.3 }),
        //         style({ opacity: 0, transform: 'scale(0)', offset: 1 }),
        //     ]))]), { optional: true })
    ]),
]);

export function routerTransition() {
    return slideToTop();
}

export function slideToTop() {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}

export let listAnimation = trigger('listAnimation', [
    transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
            animate('1s ease-in', keyframes([
                style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
            ]))]), { optional: true })
    ])
])

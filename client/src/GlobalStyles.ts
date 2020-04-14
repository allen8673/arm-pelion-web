import { css, createGlobalStyle } from 'styled-components';
import theme from './theme';

const spaces = [0, 1, 2, 3, 4, 5, 8, 10, 12, 15, 16, 18, 20, 24, 30, 32, 40, 42, 50, 72];

const base = css`
    ${Object.keys(theme).map(
        (key: string) => css`
            .text--${key} {
                color: ${theme[key]};
            }

            .bg--${key} {
                background: ${theme[key]};
            }

            .bt-1--${key} {
                border-top: 1px solid ${theme[key]};
            }

            .bt-2--${key} {
                border-top: 2px solid ${theme[key]};
            }
        `,
    )}

    .text--gray {
        color: #aeada8;
    }

    .text--red {
        color: red;
    }

    .text--ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .text--dark {
        color: #535353;
    }

    .text--white {
        color: white;
    }

    .text--500 {
        font-weight: 500;
    }

    .text--left {
        text-align: left;
    }

    .text--right {
        text-align: right;
    }

    .text--center {
        text-align: center;
    }

    .text--xs {
        font-size: 10px;
    }

    .text--sm {
        font-size: 12px;
    }

    .text--lg {
        font-size: 16px;
    }

    .text--xl {
        font-size: 24px !important;
    }

    .text--xxl {
        font-size: 32px;
    }

    .shape--circle {
        border-radius: 32px;
    }
`;

const layout = css`
    ${spaces.map(
        x => css`
            .text-${x} {
                font-size: ${x}px !important;
            }
            .mt-${x} {
                margin-top: ${x}px !important;
            }

            .mb-${x} {
                margin-bottom: ${x}px !important;
            }

            .ml-${x} {
                margin-left: ${x}px !important;
            }

            .mr-${x} {
                margin-right: ${x}px !important;
            }

            .pt-${x} {
                padding-top: ${x}px !important;
            }

            .pb-${x} {
                padding-bottom: ${x}px !important;
            }

            .pl-${x} {
                padding-left: ${x}px !important;
            }

            .pr-${x} {
                padding-right: ${x}px !important;
            }

            .padding-${x} {
                padding: ${x}px;
            }
        `,
    )};

    .width--full {
        width: 100%;
    }

    .d-inline-block {
        display: inline-block;
    }

    .flex-1 {
        flex: 1;
    }

    .pull--right {
        float: right;
    }

    .d-block {
        display: block;
    }

    .d-flex {
        display: flex;

        &.is--column {
            flex-direction: column;
        }
        &.is--row {
            flex-direction: row;
        }

        &.is--space-between {
            justify-content: space-between;
        }

        &.v--center {
            align-items: center;
        }

        &.v--bottom {
            align-items: flex-end;
        }

        &.h--center {
            justify-content: center;
        }

        &.is--center {
            align-items: center;
            justify-content: center;
        }

        &.align-items--start {
            align-items: flex-start;
        }
    }

    .cursor--pointer {
        cursor: pointer;
    }
`;

const component = css`
    .modal__info {
        animation-duration: 0s !important;
        transition: none !important;

        .ant-modal-content {
            border-radius: 12px;
        }

        .ant-modal-body {
            padding-top: 20px;
            padding-bottom: 0;
        }

        .anticon {
            font-size: 90px;
        }

        &.is--success {
            .anticon {
                color: ${p => p.theme['cyan-1']};
            }
        }

        &.is--warning {
            .anticon {
                color: ${p => p.theme.warning};
            }
        }

        &.is--error {
        }
    }

    .calendar-event__popover {
        width: 400px;

        .ant-popover-inner,
        .ant-popover-inner-content {
            border-radius: 12px;
            /* box-shadow: 0px 3px 6px #0000004d; */
        }

        .ant-popover-inner-content {
            padding: 6px 32px 16px;
        }

        .ant-popover-arrow {
            display: none;
        }
    }

    .ant-picker__popup {
        .ant-picker-now {
            display: none;
        }
    }

    .ant-modal__footer--border-none {
        .ant-modal-footer {
            border-top: none;
        }
    }

    .ant-table__thead--grey {
        thead > tr > th {
            background: #f2f2f2;
        }
    }
`;

const antdOverdies = css`
    .ant-spin-dot-item {
        background: ${p => p.theme.primary} !important;
    }
`;

export default createGlobalStyle`
    ${antdOverdies};
    ${base};
    ${layout};
    ${component};
`;

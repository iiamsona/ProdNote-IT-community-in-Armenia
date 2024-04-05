import styled, { css } from 'styled-components';
import { Table as table } from 'antd';
import { colors } from '../../../constants/colors';

const Table = styled(table)`
  .ant-table table {
    font-size: 18px;
    line-height: 21px;
  }
  .ant-table-cell-fix-left,
  .ant-table-cell-fix-right {
    background: white !important;
  }
  .ant-table.ant-table-bordered > .ant-table-container {
    border-left: none;
  }
  td {
    border-bottom: 4px solid #e9ecef !important;
    border-left: none !important;
    color: #232d42;
  }

  .ant-table-thead > tr > th {
    border-bottom: 4px solid #e9ecef !important;
    text-transform: uppercase;
    white-space: pre;
    border-left: none !important;
    color: #adb5bd;
    background: #fff !important;
  }
  .ant-table-thead > tr > th:first-child {
    border-top-left-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
  }
  .ant-table-thead > tr > th:last-child {
    border-top-right-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
  }
  .rowClassName1 {
    background-color: #fff;
  }
  .rowClassName1 td:first-child {
    border-top-left-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
  }

  .rowClassName1 td:last-child {
    border-top-right-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
  }

  tr.ant-table-row:hover > td,
  .ant-table-tbody > tr > td.ant-table-cell-row-hover {
    background: unset;
  }
  .ant-table-content {
    background-color: #e9ecef;
  }

  .ant-table-column-sorter {
    display: flex;
  }

  .ant-table-row-expand-icon {
    border: none !important;
    width: 20px;
    height: 20px;
    &:before {
      right: 5px;
      left: 0px;
    }
    &:after {
      top: 1px;
      bottom: 5px;
    }
    &.ant-table-row-expand-icon-collapsed {
      &:before,
      &:after {
        background: ${colors.cadet_blue};
      }
    }
    &.ant-table-row-expand-icon-expanded {
      &:before,
      &:after {
        background: ${colors.main_color};
      }
    }
  }

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.colswidth &&
    css`
      th {
        width: ${props.colswidth};
      }
    `}
  ${props =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}
  ${props =>
    props.row &&
    css`
      .ant-table-cell {
        width: ${props.row};
      }
    `}
  ${props =>
    props.headcolor &&
    css`
      .ant-table-thead > tr > th {
        color: ${props.headcolor};
      }
    `}
  ${props =>
    props.headerbackcolor &&
    css`
      .ant-table-thead > tr > th {
        background-color: ${props.headerbackcolor};
      }
    `}
  ${props =>
    props.footerbackcolor &&
    css`
      .ant-table-footer {
        background-color: ${props.footerbackcolor};
      }
    `}
  ${props =>
    props.expand_back &&
    css`
      .ant-table-expanded-row .ant-table-cell {
        background-color: ${props.expand_back};
      }
    `}
  ${props =>
    props.footertopborder &&
    css`
      .ant-table-footer {
        border-top: ${props.footertopborder} !important;
      }
    `}
  ${props =>
    props.footerpadding &&
    css`
      .ant-table-footer {
        padding: ${props.footerpadding} !important;
      }
    `}
  ${props =>
    props.cell_padding &&
    css`
      .ant-table-cell {
        padding: ${props.cell_padding} !important;
      }
    `}
  ${props =>
    props.bodycolor &&
    css`
      .ant-table-tbody > tr td {
        color: ${props.bodycolor};
      }
    `}
  ${props =>
    props.bodyweight &&
    css`
      .ant-table-tbody > tr td {
        font-weight: ${props.bodyweight};
      }
    `}
    ${props =>
    props.type === 'main-table' &&
    css`
      & .ant-table-cell {
        padding: 10px 5px !important;
      }
      & tr .ant-table-cell {
        background: white !important;
      }
      & .ant-table-row .ant-table-cell + .ant-table-cell {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 1px;
          height: 40px;
          background: #e9ecef;
        }
      }
      & .ant-table-thead > tr > th {
        font-weight: 400 !important;
        text-transform: uppercase;
      }
      & thead .ant-table table {
        font-size: 14px !important;
        line-height: 0px !important;
      }
    `}
    ${props =>
    props.type === 'ghost' &&
    css`
      & .ant-table-cell,
      & .ant-table-container table > thead > tr:first-child th:first-child,
      & .ant-table-thead > tr > th:last-child,
      & .ant-table-thead > tr > th,
      & .rowClassName1 td:first-child,
      & .rowClassName1 td:last-child {
        border-bottom: 1px solid #e9ecef !important;
        border-bottom-left-radius: 0px !important;
        border-top-left-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
        border-top-right-radius: 0px !important;
      }
    `}
  ${props =>
    props.hide === 'body' &&
    css`
      .ant-table-tbody {
        display: none;
      }

      .ant-table,
      .ant-table-container {
        border-bottom: none;
      }

      .ant-table-thead > tr > th {
        border-bottom: none;
      }
    `}
  ${props =>
    props.extra === 'pagination' &&
    css`
      .ant-pagination-total-text {
        margin-right: auto;
      }
      .ant-pagination-item-ellipsis,
      .ant-pagination-item,
      .ant-pagination-jump-next-custom-icon {
        background-color: white !important;
        border-radius: 50%;
        border: none !important;
        a,
        .svg {
          color: #ff9900;
        }

        &:hover,
        &.ant-pagination-item-active {
          background-color: #ff9900 !important;

          a,
          svg {
            color: #fff !important;
          }
        }
      }

      .ant-pagination-item-ellipsis,
      .ant-pagination-item-link-icon {
        color: #ff9900 !important;
      }

      .ant-pagination-prev,
      .ant-pagination-next {
        background-color: white;
        border-radius: 50%;

        &.ant-pagination-disabled,
        &.ant-pagination-disabled:hover {
          & svg {
            color: rgba(0, 0, 0, 0.25);
          }
          border-color: #d9d9d9;
          background-color: transparent;
        }

        &:hover {
          background-color: #ff9900;
          border: none !important;
          & svg {
            color: #fff;
          }
        }
      }
    `}
    ${props =>
    props.secType === 'credit-card' &&
    css`
      & .ant-table-container table > thead > tr:first-child th:first-child {
        border-bottom: none !important;
        &::before {
          display: none;
        }
      }
      & .ant-table-container table > tbody > tr td:first-child {
        border-bottom: none !important;
      }
      & .ant-table-container table > tbody > tr:last-child td:first-child {
        border-bottom: 1px solid #e9ecef !important;
      }
      & .ant-table-container table > thead > tr th::before {
        width: 2px !important;
      }
      & .ant-table-measure-row {
        display: none;
      }

      tr .ant-table-cell {
        font-weight: 400 !important;
        font-size: 14px !important;
        white-space: pre;
      }
      .ant-table-cell {
        padding: 10px !important;
      }
    `}
  ${props =>
    props.pagination_margin &&
    css`
      .ant-pagination {
        margin: ${props.pagination_margin};
      }
    `}
  ${props =>
    props.pagination_padding &&
    css`
      .ant-pagination {
        padding: ${props.pagination_padding};
      }
    `}
  ${props =>
    props.rowHeight &&
    css`
      .ant-table-thead > tr {
        height: ${props.rowHeight}px;
      }
    `}
  ${props =>
    props.flex === 'contents' &&
    css`
      .ant-table-thead > tr {
        display: contents;
      }
    `}
  ${props =>
    props.odd_row_color &&
    css`
      .ant-table-tbody .ant-table-row {
        &:nth-child(odd) {
          background-color: ${props.odd_row_color};
        }
      }
    `}

  ${props =>
    props.double_exp_row_color &&
    css`
      .ant-table-tbody {
        .ant-table-row {
          &:nth-child(4n),
          &:nth-child(4n-1) {
            background: #fff;
          }

          &:nth-child(4n-2),
          &:nth-child(4n-3) {
            background: ${props.double_exp_row_color};
          }
        }
        .ant-table-expanded-row {
          &:nth-child(4n),
          &:nth-child(4n-1) {
            td {
              background: ${props.double_exp_row_color};
            }
          }

          &:nth-child(4n-2),
          &:nth-child(4n-3) {
            td {
              background: #fff;
            }
          }
        }
      }
    `}
  ${props =>
    props.flex === 'contents-none' &&
    css`
      .ant-table-thead > tr > .ant-table-cell {
        padding: 11px 16px;
      }
    `}
  ${props =>
    props.expand_pos &&
    css`
      .ant-table-row-expand-icon {
        float: ${props.expand_pos};
      }
    `}
  ${props =>
    props.append_cell_back &&
    css`
      .ant-table-row-level-0 > .ant-table-cell-with-append {
        background-color: ${props.append_cell_back};
      }
    `}
  ${props =>
    props.expanded_row_extras_display &&
    css`
      .ant-table-row-level-1 > .ant-table-cell-with-append {
        .ant-table-row-expand-icon,
        .ant-table-row-indent {
          display: ${props.expanded_row_extras_display};
        }
      }
    `}
  ${props =>
    props.head_fw &&
    css`
      .ant-table-thead > tr > th {
        font-weight: ${props.head_fw};
      }
    `}
  ${props =>
    props.x_overflow &&
    css`
      .ant-table-body {
        overflow-x: ${props.x_overflow};
      }
    `}
  ${props =>
    props.y_overflow &&
    css`
      .ant-table-body {
        overflow-y: ${props.y_overflow}!important;
      }
    `}
  ${props =>
    props.height &&
    css`
      .ant-table-body {
        height: ${props.height}px;
      }
    `}
`;

export default Table;

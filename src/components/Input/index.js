import styled, { css } from 'styled-components';
import { Input as input } from 'antd';
import { colors } from '../../../constants/colors';

const Input = styled(input)`
  border: 1px solid #9ea09f;
  height: 40px;

  & .ant-input-affix-wrapper {
    border: none;
    height: 100%;
  }
  &,
  & .ant-input-wrapper,
  & .ant-input-affix-wrapper,
  & .ant-input {
    border-radius: 8px !important;
  }
  & .ant-input-wrapper > input,
  & .ant-input-wrapper > .ant-input-affix-wrapper {
    outline: none !important;
    border: none;
    box-shadow: none !important;

    &:focus {
      outline: none !important;
      border: none;
      box-shadow: none !important;
    }
  }
  & .ant-input-group-addon {
    background: transparent;
    padding: 0 0 0 10px !important;
    border: none !important;
  }

  &.ant-input {
    background: #fff;
    box-sizing: border-box;
    border: 1px solid #9ea09f;
    padding: 0 15px;
    font-weight: 300;
    font-size: 14px;
    color: #5f6982;
    width: 100%;
  }

  &:hover {
    border-color: ${colors.main_color}!important;
  }
  &:focus,
  &.ant-input-focused {
    border-color: ${colors.main_color}!important;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px ${colors.main_color}2e;
  }

  &[disabled] {
    color: #00000096;
    background-color: #fff;
    border: 1px solid #eeeeee;
  }
  ${props =>
    props.type === 'blue' &&
    css`
      border: 1px solid #000080;
    `}
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
    ${props =>
    props.placeholder_color &&
    css`
      .ant-input::placeholder {
        color: ${props.placeholder_color};
      }
    `}
    ${props =>
    props.color &&
    css`
      .ant-input {
        color: ${props.color};
      }
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    props.input_padding &&
    css`
      input {
        padding: ${props.input_padding};
      }
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
      &.ant-input-group-wrapper > .ant-input-wrapper {
        height: ${props.height};
        & input {
          height: ${props.height} !important;
        }
      }
    `}
    ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.fz &&
    css`
      input {
        font-size: ${props.fz};
      }
    `}
  ${props =>
    props.fw &&
    css`
      input {
        font-weight: ${props.fw};
      }
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
`;

export default Input;

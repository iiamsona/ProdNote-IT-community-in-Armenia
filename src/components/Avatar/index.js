import styled, { css } from 'styled-components';
import { Avatar as avatar } from 'antd';

const Avatar = styled(avatar)`
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
    ${props =>
    props.border &&
    css`
      border: ${props.border};
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${props =>
    props.align &&
    css`
      display: flex;
      align-items: ${props.align};
    `}
  ${props =>
    props.justify &&
    css`
      display: flex;
      justify-content: ${props.justify};
    `}
  ${props =>
    props.min_width &&
    css`
      min-width: ${props.min_width};
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    props.back_color &&
    css`
      background-color: ${props.back_color};
    `}
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.fit &&
    css`
      img {
        object-fit: ${props.fit};
      }
    `}
  ${props =>
    props.icon_width &&
    css`
      svg {
        width: ${props.icon_width};
      }
    `}
`;

export default Avatar;

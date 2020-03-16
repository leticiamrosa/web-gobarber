import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { colors } from '~/styles/styles';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  position: relative;

  ${({ hasUnread }) =>
    hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: ${colors.secondary.variant};
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  right: -28px;
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  overflow: auto;
  max-height: 260px;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    right: 20px;
    top: -18px;
    width: 0;
    height: 0;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 18px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Notification = styled.div`
  color: ${colors.white};

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, colors.primary.main)};
  }

  ${({ unread }) =>
    unread &&
    css`
      &::after {
        display: inline-block;
        width: 7px;
        height: 7px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
        margin-left: 8px;
      }
    `}
`;

export const Scroll = styled.div`
  max-height: 260px;
  padding: 5px 15px;
`;

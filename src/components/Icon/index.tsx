import PencilSimpleLine from 'phosphor-react-native/src/icons/PencilSimpleLine';
import Trash from 'phosphor-react-native/src/icons/Trash';
import Plus from 'phosphor-react-native/src/icons/Plus';
import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft';
import ArrowUpRight from 'phosphor-react-native/src/icons/ArrowUpRight';
import UserCircle from 'phosphor-react-native/src/icons/UserCircle';
import React from 'react';
import { DefaultTheme } from 'styled-components/native';
import theme from './../../theme';

const icons = {
  PencilSimpleLine: PencilSimpleLine,
  Trash: Trash,
  Plus: Plus,
  ArrowLeft: ArrowLeft,
  ArrowUpRight: ArrowUpRight,
  UserCircle: UserCircle,
};

export type IconsNames =
  | 'PencilSimpleLine'
  | 'Trash'
  | 'Plus'
  | 'ArrowLeft'
  | 'ArrowUpRight'
  | 'UserCircle';

type IconProps = {
  name: IconsNames;
  size: number;
  color: keyof DefaultTheme['COLORS'];
};

export function Icon({ name, size, color }: IconProps) {
  const Icon = icons[name];

  return <Icon size={size} color={theme.COLORS[color]} />;
}

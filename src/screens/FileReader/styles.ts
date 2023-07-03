import { RFValue } from 'react-native-responsive-fontsize';
import styled, { DefaultTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}: DefaultTheme) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}: DefaultTheme) => theme.colors.primary};
  padding: 0 15px;
`;

export const Title = styled.Text`
  font-family: ${({theme}: DefaultTheme) => theme.fonts.regular};
  color: ${({theme}: DefaultTheme) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;

export const Icon = styled(Feather)`
  color: ${({theme}: DefaultTheme) => theme.colors.shape};
  font-size: ${RFValue(25)}px;
`;
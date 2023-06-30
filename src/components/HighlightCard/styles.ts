import styled, { DefaultTheme } from 'styled-components/native'
import {Ionicons} from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({theme}:DefaultTheme) => theme.colors.shape };
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;

`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({theme}: DefaultTheme) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}: DefaultTheme) => theme.colors.text_dark};
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(40)}px;
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
  font-family: ${({theme}: DefaultTheme) => theme.fonts.medium };
  font-size: ${RFValue(22)}px;
  color: ${({theme}: DefaultTheme) => theme.colors.text_dark};
  margin-top: 38px;
`;

export const LastRegister = styled.Text`
  font-family: ${({theme}: DefaultTheme) => theme.fonts.medium };
  font-size: ${RFValue(12)}px;
  color: ${({theme}: DefaultTheme) => theme.colors.text};
`;
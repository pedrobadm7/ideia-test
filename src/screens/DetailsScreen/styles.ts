import { RFValue } from 'react-native-responsive-fontsize';
import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}: DefaultTheme) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  background-color: ${({theme}: DefaultTheme) => theme.colors.primary};
  
  align-items: center;
  justify-content: center;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({theme}: DefaultTheme) => theme.fonts.regular};
  color: ${({theme}: DefaultTheme) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;
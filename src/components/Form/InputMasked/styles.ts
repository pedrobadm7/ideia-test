import { RFValue } from 'react-native-responsive-fontsize';
import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 16px 18px;
  border-radius: 5px;
  margin-bottom: 8px;

  font-size: ${RFValue(14)}px;
  font-family: ${({theme}: DefaultTheme) => theme.fonts.regular};
  color: ${({theme}: DefaultTheme) => theme.colors.text_dark};
  background-color: ${({theme}: DefaultTheme) => theme.colors.shape};
`;

export const Error = styled.Text`
  color: ${({theme}: DefaultTheme) => theme.colors.attention};
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}: DefaultTheme) => theme.fonts.regular};
  
  margin: 7px 0;
`;
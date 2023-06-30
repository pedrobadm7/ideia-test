import { RFValue } from 'react-native-responsive-fontsize';
import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  color: ${({theme}: DefaultTheme) => theme.colors.attention};
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}: DefaultTheme) => theme.fonts.regular};
  
  margin: 7px 0;
`;
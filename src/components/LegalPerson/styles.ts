import { RFValue } from 'react-native-responsive-fontsize';
import styled, { DefaultTheme } from 'styled-components/native';

export const ButtonContainer = styled.View`
  margin: 25px 0;
  padding-bottom: 15px;
`;

export const FileChoosen = styled.View`
  margin-top: ${RFValue(20)}px;
`;

export const FileText = styled.Text`
   color: ${({theme}: DefaultTheme) => theme.colors.text};
   font-family: ${({theme}: DefaultTheme) => theme.fonts.regular};
   font-size: ${RFValue(16)}px;
`;
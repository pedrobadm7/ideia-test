import styled, { DefaultTheme } from 'styled-components/native';
import {Ionicons} from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({theme}: DefaultTheme) => theme.colors.shape };
  border-radius: 5px;
  padding: 17px 24px;
`;

export const Title = styled.Text`
  font-family: ${({theme}: DefaultTheme) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-top: 2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(20)}px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}: DefaultTheme) => theme.colors.text};
  margin-left: 17px;
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}: DefaultTheme) => theme.colors.text};
`;
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

  background-color: ${({theme}: DefaultTheme) => theme.colors.primary};
  
  flex-direction: row ;
  align-items: center;

  justify-content: space-between;
  
  padding-right: ${RFValue(15)}px;
  padding-left: ${RFValue(15)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}: DefaultTheme) => theme.fonts.regular};
  color: ${({theme}: DefaultTheme) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;

export const Text = styled.Text`
  font-family: ${({theme}: DefaultTheme) => theme.fonts.regular};
  color: ${({theme}: DefaultTheme) => theme.colors.text};
  font-size: ${RFValue(16)}px;
`;

export const CardContainer = styled.ScrollView`
  padding: 0 ${RFValue(10)}px;
`

export const Card = styled.View`
  width: 100%;
  padding: ${RFValue(15)}px;

  margin: 10px 0;

  align-items: flex-start;

  background-color: ${({theme}: DefaultTheme) => theme.colors.shape};
`;

export const CardTitle = styled.Text`
  font-family: ${({theme}: DefaultTheme) => theme.fonts.bold};
  color: ${({theme}: DefaultTheme) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;
`

export const Icon = styled(Feather)`
  color: ${({theme}: DefaultTheme) => theme.colors.shape};
  font-size: ${RFValue(25)}px;
`;
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}: DefaultTheme) => theme.colors.background };
`;

export const Header = styled.View`
  padding-bottom: 19px;
  width: 100%;
  height: ${RFValue(113)}px;

  background-color: ${({theme}: DefaultTheme) => theme.colors.primary };
  
  align-items: center;
  justify-content: flex-end;
 
`;

export const Title = styled.Text`
  font-family: ${({theme}: DefaultTheme) => theme.fonts.regular };
  font-size: ${RFValue(18)}px;
  color: ${({theme}: DefaultTheme) => theme.colors.shape };
`;

export const Form = styled.ScrollView`
  flex: 1;
  width: 100%;
  margin: ${RFValue(15)}px 0;
  padding: 24px;
`;

export const Fields = styled.View`
`;

export const ButtonContainer = styled.View`
  margin: 25px 0;
  padding-bottom: 15px;
`;

export const PersonTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  
  margin-bottom: ${RFValue(15)}px;
`;
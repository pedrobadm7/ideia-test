import styled, { DefaultTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
  
})`
  background-color: ${({theme}: DefaultTheme) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0  0 10px 0;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-family: ${({theme}: DefaultTheme) => theme.fonts.regular};
  color: ${({theme}: DefaultTheme) => theme.colors.text};
  
  font-size: ${RFValue(14)}px;
  padding: 18px 16px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}: DefaultTheme) => theme.colors.text};
  padding: 18px 16px;
`;
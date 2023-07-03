import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { DefaultTheme } from 'styled-components/native';


export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({theme, disabled}: DefaultTheme) => theme.colors.secondary};

  padding: 18px;
  align-items: center ;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-family: ${({theme}: DefaultTheme) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${({theme}: DefaultTheme) => theme.colors.shape};

`;
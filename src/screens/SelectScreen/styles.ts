import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';
import {AntDesign} from '@expo/vector-icons'

interface IListProps {
  isActive: boolean;
}

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

export const List = styled.TouchableOpacity<IListProps>`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${({isActive, theme}: {isActive: IListProps, theme: DefaultTheme}) => isActive ? theme.colors.secondary_light: theme.colors.background}
`;

export const Icon = styled(AntDesign)`
   font-size: ${RFValue(20)}px;
   margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({theme}: DefaultTheme) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}: DefaultTheme) => theme.colors.text}
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;

export const ButtonText = styled.Text``;
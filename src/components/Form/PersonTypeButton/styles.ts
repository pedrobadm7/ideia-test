import { TouchableOpacity } from 'react-native';
import styled, { DefaultTheme, css } from 'styled-components/native';
import {Ionicons} from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import { TYPES } from '../../../utils/enums';

interface IContainerProps {
  isActive: boolean;
  type: TYPES.PHYSICAL_PERSON | TYPES.LEGAL_PERSON;
}

export const Container = styled(TouchableOpacity)<IContainerProps>`
  width: 48%;
 
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: ${({isActive, type}: IContainerProps) => isActive ? 0 : 1.5}px; 
  border-style: solid; 
  border-color: ${({theme}: DefaultTheme) => theme.colors.text};
  border-radius: 5px;

  padding: 16px;

  ${({isActive, type}: IContainerProps) => isActive && type === TYPES.PHYSICAL_PERSON && css`
    background-color: ${({theme}) => theme.colors.success_light} ;
  `}

  ${({isActive, type}: IContainerProps) => isActive && type === TYPES.LEGAL_PERSON && css`
    background-color: ${({theme}) => theme.colors.attention_light} ;
  `}
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-family: ${({theme}: DefaultTheme) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;


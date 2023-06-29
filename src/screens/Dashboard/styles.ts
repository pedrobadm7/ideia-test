import styled, { DefaultTheme } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }: DefaultTheme) => theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${({theme }: DefaultTheme) => theme.fonts.bold};
  font-size: 24px;
  color: ${({theme}: DefaultTheme) => theme.colors.title };
`;
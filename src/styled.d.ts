import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line no-shadow
  export interface DefaultTheme {
    breakpoints: {
      [name in 'xs' | 'sm' | 'md' | 'lg' | 'xl']: number;
    };
  }
}

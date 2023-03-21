import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
const PRIMARY = {
  lighter: '#D6F6E2',
  light: '#c4d7d2',
  main: '#802528',
  dark: '#0F3D3C',
  darker: '#052329',
};
const SECONDARY = {
  lighter: '#FCD6CA',
  light: '#EF6860',
  main: '#005F71',
  dark: '#92002E',
  darker: '#610030',
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
};
const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
};
const WARNING = {
  lighter: '#FEF9CC',
  light: '#FDE766',
  main: '#ffbe20',
  dark: '#B38C00',
  darker: '#775900',
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#c22846',
  dark: '#B72136',
  darker: '#7A0C2E',
};

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

export default palette;

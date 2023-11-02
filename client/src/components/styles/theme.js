const colors = {
  base: '#072236',
  highlight: '#AAB6CD',
  shadow: '#616F9C',
  secondary: '#F37273',
  tertiary: '#7C3A71',
  approve: '#06D6A0',
  warn: '#FFD166',
  danger: '#EF476F',
  gray0: '#F8F9FA',
  gray1: '#E9ECEF',
  gray2: '#DEE2E6',
  gray3: '#CED4DA',
  gray4: '#ADB5BD',
  gray5: '#6C757D',
  gray6: '#495057',
  gray7: '#343A40',
  gray8: '#212529',
offWhite: '#f5f5f5', 
};

const theme = {
  global: {
    colors: colors,
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    tabs: {
      border: {
        side: 'bottom',
        size: 'small',
        color: {
          dark: colors.highlight,
          light: colors.base,
        },
      },
      pad: 'small',
      margin: 'none',
      hover: {
        background: colors.tertiary,
      },
      active: {
        background: colors.secondary,
      },
      color: {
        dark: colors.highlight,
        light: colors.base,
      },
      extend: ({ theme }) => ({
        borderRadius: '4px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
      }),
    },
  },
};

export default theme;

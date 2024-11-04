export const scrollToFooter = () => {
  const footerContainer = document.querySelector('#footerContainer');
  if (footerContainer) {
    footerContainer.scrollIntoView({ behavior: 'smooth' });
  }
};

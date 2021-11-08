export default ({ app }, inject) => {
  const hideOnScrolldown = (hide, show) => {
    let p_yOffset = window.pageYOffset;
    window.onscroll = () => {
      let yOffset = window.pageYOffset;
      yOffset > p_yOffset ? hide() : show();
      p_yOffset = yOffset;
    };
  };
  inject("hideOnScrolldown", hideOnScrolldown);
};

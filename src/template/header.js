const Header = () => {
  const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        SPA
                    </a>
                </h1>
            </div>
        </div>

        <div class="Header-nav">
            <a href="#/about/">
            About
            </a>
        </div>
    `;
  return view;
};

export default Header;

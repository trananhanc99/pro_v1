import MainLayout from "../styles/mainLayout.module.sass";

function MyApp({ Component, pageProps }) {
  return (
    <div className={MainLayout.rootLayout}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

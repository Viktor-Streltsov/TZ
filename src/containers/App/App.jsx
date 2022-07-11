import { Routes, Route } from 'react-router-dom';
import routersConfig from '../../routes/routesConfig';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import style from './App.module.css'

function App() {
  return (
    <div className={style.main_conteiner}>
        <div className={style.heder_site}>
            <Header />
        </div>
            <div className={style.body_site}>
                <Routes>
                    {routersConfig.map((route, index) => (
                        <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            element={<route.element/>}
                        />
                    ))}
                </Routes>
            </div>
        <div className={style.footer_site}>
            <Footer />
        </div>
    </div>
  );
}

export default App;

import { Layout } from 'antd';
import './App.css';
import Sidemenu from './components/Sidemenu';
import HeaderTop from './components/HeaderTop';
import Main from './components/Main';
import { Postactiv } from './components/Postactiv';
import { Usersactive } from './components/Usersactive';
import { Previously } from './components/Previously';
import { ConfigProvider } from 'antd';
import RU from 'antd/es/locale/ru_RU';


function App() {
  return (
    <ConfigProvider locale={RU}>
          <Layout>
            <Sidemenu />
            <Layout>
              <HeaderTop />
              <Previously />
              <Main />
              <Usersactive />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
              <Postactiv />
            </Layout>
          </Layout>
    </ConfigProvider>
  );
}

export default App;

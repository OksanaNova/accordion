import { Fragment, useEffect, useState } from 'react';
import { Accordion } from './Accordion/Accordion';
import './App.css'
import Tabs from './Tabs/Tabs';
import TabInfoOne from './Tabs/TabInfoOne';
import TabInfoTwo from './Tabs/TabInfoTwo';
import TabInfoThree from './Tabs/TabInfoThree';
import Modal from './Modal/Modal';
import Content from './Modal/Content';
import LoaderPage from './Loader/LoaderPage';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

function App() {

  const [activeTab, setActiveTab] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [stateLoader, setStateLoder] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStateLoder(false), 3000);
    return () => clearTimeout(timer)
  }, [])

  const handleAlert = () => {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
    });
  }

  const { i18n, t } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Fragment>

{/* ACCORDION */}

      <Accordion />
      <br/>

{/* TABS */}

      <Tabs setActiveTab={setActiveTab} />
      { activeTab === 0 && <TabInfoOne /> }
      { activeTab === 1 && <TabInfoTwo /> }
      { activeTab === 2 && <TabInfoThree /> }
      <br/>

{/* MODAL WINDOW */}

      <button onClick={() => setIsModalOpen(true)}>OPEN MODAL WINDOW</button>

      { isModalOpen && 
      <Modal setIsModalOpen={setIsModalOpen}>
        <Content setIsModalOpen={setIsModalOpen}/>
      </Modal>}
      <br/>

{/* LOADER */}

      { stateLoader && <LoaderPage />}
      <br/>

{/* SWEET ALERT */}

      <button onClick={handleAlert}>ALERT</button>

{/* TRANSLATION */}

        <h1>{t('Welcome to React')}</h1>

        <p>{t('How is your day')}</p>

        <button onClick={toggleLang}>
          {i18n.language === 'en' ? 'EN' : 'RU'}
        </button>





    </Fragment>
  )
}

export default App

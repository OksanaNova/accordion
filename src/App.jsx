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

function App() {

  const [activeTab, setActiveTab] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [stateLoader, setStateLoder] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStateLoder(false), 3000);
    return () => clearTimeout(timer)
  }, [])


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




      




    </Fragment>
  )
}

export default App

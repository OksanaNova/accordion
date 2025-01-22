import { Fragment, useState } from 'react';
import { Accordion } from './Accordion/Accordion';
import './App.css'
import Tabs from './Tabs/Tabs';
import TabInfoOne from './Tabs/TabInfoOne';
import TabInfoTwo from './Tabs/TabInfoTwo';
import TabInfoThree from './Tabs/TabInfoThree';
import Modal from './Modal/Modal';
import Content from './Modal/Content';

function App() {

  const [activeTab, setActiveTab] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <Fragment>
      <Accordion />
      <br/>

      <Tabs setActiveTab={setActiveTab} />
      {activeTab === 0 && <TabInfoOne />}
      {activeTab === 1 && <TabInfoTwo />}
      {activeTab === 2 && <TabInfoThree />}
      <br/>

      <button onClick={() => setIsModalOpen(true)}>OPEN MODAL WINDOW</button>

      {isModalOpen && 
      <Modal setIsModalOpen={setIsModalOpen}>
        <Content setIsModalOpen={setIsModalOpen}/>
      </Modal>}

    </Fragment>
  )
}

export default App

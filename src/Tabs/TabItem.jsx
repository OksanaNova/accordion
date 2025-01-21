const TabItem = ( {tab, index, setActiveTab} ) => {
    return <button className="btn_tabs"
    value={ index }
    onClick={() => setActiveTab(index)}>
        { tab }
    </button>
}

export default TabItem;
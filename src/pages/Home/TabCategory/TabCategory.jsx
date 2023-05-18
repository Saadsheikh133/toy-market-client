import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabCategory = () => {
    return (
        <Tabs className='text-center'>
            <TabList>
                <Tab>Tabs 1</Tab>
                <Tab>Tabs 2</Tab>
                <Tab>Tabs 3</Tab>
            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
        </Tabs>
    );
};

export default TabCategory;
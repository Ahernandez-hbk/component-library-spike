import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import SegmentTreeView from './SegmentTreeView';
import RsDataGrid from './RsDataGrid';

function BasicTabs() {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Box className='mui_tabs'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currentTab} onChange={handleChange}>
          <Tab label="Tree View" />
          <Tab label="Grid" />
          <Tab label="Menus" />
        </Tabs>
      </Box>
      {/* Segment TreeView */}
      <TabPanel value={currentTab} index={0}>
        <SegmentTreeView />
      </TabPanel>
      {/* Data grid */}
      <TabPanel value={currentTab} index={1}>
        <RsDataGrid />
      </TabPanel>

    </Box>
  );
}

export default BasicTabs
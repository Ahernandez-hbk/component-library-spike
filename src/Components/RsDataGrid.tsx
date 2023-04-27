import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { setAutoFreeze } from 'immer'; 

setAutoFreeze(false);
interface rowObj { id: number, name: string, type: string, lastUpdatedBy: string, lastUpdated: string, division: string, platform: string, sub: string }

function RsDataGrid() {
  const [addRowPopupVisible, setAddRowPopupVisible] = useState(false);
  const [ name, setName] = useState('');
  const [ type, setType] = useState('');
  const [ division, setDivision] = useState('');
  const [platform, setPlatform] = useState('');
  const [sub, setSub] = useState('');

  var rowId = 0;

  const getRowId = () => {
    rowId ++;
    return (rowId)
  }

  const columns: GridColDef[] = [
    { 
      field: 'id', 
      headerName: 'ID', 
      headerClassName: 'Grid_theme_header',
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Name',
      headerClassName: 'Grid_theme_header',
      flex: 1,
    },
    {
      field: 'type',
      headerName: 'Type',
      headerClassName: 'Grid_theme_header',
      flex: 1,
    },
    {
      field: 'lastUpdatedBy',
      headerName: 'Last Updated by',
      headerClassName: 'Grid_theme_header',
      flex: 1,
    },
    {
      field: 'lastUpdated',
      headerName: 'Last Updated',
      headerClassName: 'Grid_theme_header',
      flex: 1,
    },
    {
      field: 'division',
      headerName: 'Division',
      headerClassName: 'Grid_theme_header',
      flex: 1,
    },
    {
      field: 'platform',
      headerName: 'Platform',
      headerClassName: 'Grid_theme_header',
      flex: 1,
    },
    {
      field: 'sub',
      headerName: 'Sub',
      headerClassName: 'Grid_theme_header',
      flex: 1,
    },
  ];

  const [rows, setRows] = useState([
    { id: getRowId(), name: 'fmea-1', type: 'Hardware', lastUpdatedBy: 'Angel Hernandez',  lastUpdated: '12-Apr-2023', division: 'Cars', platform: 'Sedan', sub: '...' }, 
    { id: getRowId(), name: 'fmea-2', type: 'Software', lastUpdatedBy: 'Angel Hernandez',  lastUpdated: '11-Apr-2023', division: 'Cars', platform: 'Sedan', sub: '...' }, 
    { id: getRowId(), name: 'fmea-3', type: 'Hardware', lastUpdatedBy: 'Angel Hernandez',  lastUpdated: '13-Apr-2023', division: 'Trucks', platform: 'Pickup', sub: '...' },
    { id: getRowId(), name: 'fmea-4', type: 'Hardware', lastUpdatedBy: 'Angel Hernandez',  lastUpdated: '12-Apr-2023', division: 'Cars', platform: 'Sedan', sub: '...' }, 
    { id: getRowId(), name: 'fmea-5', type: 'Software', lastUpdatedBy: 'Angel Hernandez',  lastUpdated: '11-Apr-2023', division: 'Cars', platform: 'Sedan', sub: '...' }, 
    { id: getRowId(), name: 'fmea-6', type: 'Hardware', lastUpdatedBy: 'Angel Hernandez',  lastUpdated: '09-Apr-2023', division: 'Trucks', platform: 'Pickup', sub: '...' },
    { id: getRowId(), name: 'fmea-7', type: 'Hardware', lastUpdatedBy: 'Angel Hernandez',  lastUpdated: '12-Apr-2023', division: 'Cars', platform: 'Sedan', sub: '...' }, 
    { id: getRowId(), name: 'fmea-8', type: 'Software', lastUpdatedBy: 'Angel Hernandez',  lastUpdated: '20-Apr-2023', division: 'Cars', platform: 'Sedan', sub: '...' }, 
    { id: getRowId(), name: 'fmea-9', type: 'Hardware', lastUpdatedBy: 'Angel Hernandez',  lastUpdated: '04-Apr-2023', division: 'Trucks', platform: 'Pickup', sub: '...' },    
  ]);

  const handleAddNewRow = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newtestRow = {
      id: getRowId(),
      name: name,
      type: type,
      lastUpdatedBy: 'Angel Hernandez',
      lastUpdated: '24-Apr-2023',
      division: division,
      platform: platform,
      sub: sub,
    }
  
    rows.push(newtestRow)
    setRows(rows)
  
    // console.log('rows :', rows)
  }

  return (
    <>
    <div className='icon_container'>
      <img className='plusIcon'
      onClick={() => setAddRowPopupVisible(!addRowPopupVisible)}
      src='https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png'
      alt='' 
      />
      <img className='plusIcon'
      src='https://static-00.iconduck.com/assets.00/ps-play-station-button-x-icon-256x256-4v7p8xra.png'
      alt='' 
      />
      <img className='plusIcon'
      src='https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png'
      alt='' 
      />
    </div>

    <form className={addRowPopupVisible ? 'newFmeaPopup' : 'newFmeaPopupHidden'} onSubmit={handleAddNewRow}>
      <label> Name
      <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
      <label> Type
      <input type='text' value={type} onChange={(e) => setType(e.target.value)}/>
      </label>
      <label> Division
      <input type='text' value={division} onChange={(e) => setDivision(e.target.value)}/>
      </label>
      <label> Platform
      <input type='text' value={platform} onChange={(e) => setPlatform(e.target.value)}/>
      </label>
      <label> Sub
        <input type='text' value={sub} onChange={(e) => setSub(e.target.value)}/>
      </label>

      <input className='form_save_button'type='submit' />
    </form>

    <Box sx={{ 
      height: '75vh', 
      width: '100%', 
      '& .Grid_theme_header': {
        backgroundColor: 'rgba(255, 7, 0, 0.55)',
      },
    }}>
      <DataGrid
        rows={rows.map(r => r)}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
      />
    </Box>
  </>
  );
}

export default RsDataGrid
import React, { useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

interface SegmentObj {
  id: string
  name: string
  topLevel?: boolean

  child?: {
    id: string
    name: string
  }
}
function SegmentTreeView() {
  const [ showAddNewPrompt, setShowAddNewPrompt] = useState<boolean>(false)
  const [ segments, setSegments ] = useState<SegmentObj[]>([])
  const [newLevel, setNewLevel] = useState<string>('');

  const toggleAddNewPompt = () => {
    setShowAddNewPrompt(!showAddNewPrompt)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (newLevel.length) {
      const newLevelObject = {
        id: Math.random().toString(),
        name: newLevel,
        topLevel: isTopLevel()
      }
  
      segments.push(newLevelObject)
      setSegments(segments)
    } else {
      return(
        alert('fill in the form')
      )
    }
    resetNewLevelInput()
    setShowAddNewPrompt(!showAddNewPrompt)
    // console.log('Segments: ', segments)
  }

  const isTopLevel = () => {
    if (segments.length > 0) return false
  }

  const addNewChild = () => {
      const newLevelObject = {
        id: Math.random().toString(),
        name: newLevel,
        topLevel: false
      }
  
      segments.push(newLevelObject)
      setSegments(segments)

    setShowAddNewPrompt(!showAddNewPrompt)
    // console.log('Segments: ', segments)
  }

  const clearSegments = () => {
    setSegments([])
  }

  const resetNewLevelInput =() => {
    setNewLevel('')
  }

  return (
    <div className='segment_tree_view_wrapper'>
      <div className='segment_overview'>
        <button className='clear_button' onClick={clearSegments}>Clear all</button>
        {segments.length ? (
          <button onClick={addNewChild}>Add +</button>
          ) : (
            <button className='add_button' onClick={toggleAddNewPompt}>Add level</button>
        )}

        <form className={showAddNewPrompt === true ? 'add_segment_form' : 'add_segment_form_hidden'} onSubmit={handleSubmit}>
          <h2>Add level</h2>
          <input type='text' value={newLevel} onChange={(e) => setNewLevel(e.target.value)} placeholder='Level name'/>
          <span className='form_button_group'>
            <input type='submit' value='submit' />
          </span>
        </form>
      </div>

      <TreeView
        aria-label="multi-select"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
        className='tree_view'
      >
        {segments.map((segment) => (
          <TreeItem nodeId={segment.id} key={segment.id} label={segment.name}>
            {segments.map((segment) => (
              <TreeItem nodeId={segment.id} key={segment.id} label={segment.name} />
            )).filter(isTopLevel)}
          </TreeItem>
        ))}
      </TreeView>
    </div>
  );
}

export default SegmentTreeView
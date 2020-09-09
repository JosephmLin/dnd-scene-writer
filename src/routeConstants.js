import React from 'react';
import UpdateOrCreateNPC from './components/UpdateOrCreateNPCForm/UpdateOrCreateNPC';
import NPCTextarea from './components/NPCTextarea/NPCTextarea';
import DndProvider from './drag-and-drop-beautiful/DndProvider';
import SceneHomePage from './components/SceneWriter/SceneHomePage';

const routes = {
  '/': {
    component: (props) => <SceneHomePage {...props} />,
    title: 'Scene Home Page',
  },
  '/create-npc': {
    component: (props) => <UpdateOrCreateNPC {...props} />,
    title: 'Create NPC',
  },
  '/sandbox': {
    component: (props) => <NPCTextarea {...props} />,
    title: 'Sandbox',
  },
  '/dnd': {
    component: (props) => <DndProvider {...props} />,
    title: 'Drag and Drop',
  },
};

export default routes;

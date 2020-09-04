import React from 'react';
import UpdateOrCreateNPC from './components/UpdateOrCreateNPCForm/UpdateOrCreateNPC';
import NPCTextarea from './components/NpcTextarea/NPCTextarea';
import SceneHomePage from './SceneWriter/SceneHomePage';

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
};

export default routes;

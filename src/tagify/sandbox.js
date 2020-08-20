import Tags from '@yaireo/tagify/dist/react.tagify';
import '@yaireo/tagify/dist/tagify.css';
import React, { useCallback } from 'react';

/**
 * Events I need to trigger:
 *  1. When new tag is created ( to add to an existing list of tags for this text area ), which is returned in a callback
 *  2. When an existing tag is clicked, retrieve the value object and return in a callback
 * 	3. Consider adjusting the template for each tag to display a small icon, using this example: https://yaireo.github.io/tagify/#section-extra-properties
 *
 *
 */

/**
	* Tagift white list Object: 
	{
		value: npc name,
		title: npc.description
		id: npc.id

	}
	*/

// Tagify settings object
const settings = {
  mode: 'mix',
  pattern: /@/,
  dropdown: {
    enabled: 1,
    position: 'text',
  },
  enforceWhitelist: true,
  editTags: false,
  whitelist: [
    { id: 100, value: 'kenny', title: 'Kenny McCormick' },
    { id: 101, value: 'cartman', title: 'Eric Cartman' },
    { id: 102, value: 'kyle', title: 'Kyle Broflovski' },
    { id: 103, value: 'token', title: 'Token Black' },
    { id: 104, value: 'jimmy', title: 'Jimmy Valmer' },
    { id: 105, value: 'butters', title: 'Butters Stotch' },
    { id: 106, value: 'stan', title: 'Stan Marsh' },
    { id: 107, value: 'randy', title: 'Randy Marsh' },
    { id: 108, value: 'Mr. Garrison', title: 'POTUS' },
    { id: 109, value: 'Mr. Mackey', title: "M'Kay" },
  ],
  callbacks: {
    add: (e) => {
      console.log('ADD: ', e.detail.data);
    },
    click: (e) => {
      console.log('CLICKED: ', e.detail.data);
    },
  },
};

const MixedModeTagify = () => {
  const onChange = useCallback((e) => {
    e.persist();
    console.log(e);
    console.log('CHANGED:', e.target.value);
  }, []);
  const onEdit = useCallback((e) => {
    e.persist();
    console.log(e);
    console.log('EDIT:', e.target.value);
  }, []);
  const onClick = useCallback((e) => {
    e.persist();
    console.log(e);
    console.log('Click:', e.target.value);
  }, []);

  return (
    <Tags
      InputMode="textarea"
      settings={settings}
      className="myTags"
      onChange={onChange}
      onEdit={onEdit}
      onClick={onClick}
      value={`
        This is a textarea which mixes text with [[{"value":"tags"}]].
        <br>
        To add a [[{"value":"tag"}]], type "@" and a (Latin) character
        <br><br>
        <small>(Only tags from the <em>whitelist</em> are allowed. <em>Whitelist</em> contains names of Southpark characters.)</small
        <br>
        <small>(Open this demo in a full-window to be able to type new-line returns)</small>
      `}
    />
  );
};

export default MixedModeTagify;

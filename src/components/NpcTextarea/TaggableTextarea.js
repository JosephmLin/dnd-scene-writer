import Tags from '@yaireo/tagify/dist/react.tagify';
import '@yaireo/tagify/dist/tagify.css';
import React, { useState, useCallback } from 'react';

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
const baseTagifySettings = {
  mode: 'mix',
  pattern: /@/,
  dropdown: {
    enabled: 1,
    position: 'text',
  },
  enforceWhitelist: true,
  editTags: false,
};

const TaggableTextarea = ({ whitelist, onAddTag, onRemoveTag, onOpenTag }) => {
  const [, setValue] = useState('');
  const tagifySettings = {
    ...baseTagifySettings,
    callbacks: {
      add: (e) => {
        console.log(e.detail);
        onAddTag ? onAddTag(e.detail.data) : console.log('onAddTag');
      },
      click: (e) => {
        onOpenTag ? onOpenTag(e.detail.data) : console.log('onOpenTag');
      },
      remove: (e) => {
        onRemoveTag ? onRemoveTag(e.detail.data) : console.log('onRemoveTag');
      },
    },
  };

  // This is called on two occasions: when a new tag is added or when the textbox loses focus
  const onChange = useCallback((e) => {
    e.persist();
    setValue(e.target.value);
  }, []);
  return (
    <Tags
      InputMode="textarea"
      settings={tagifySettings}
      whitelist={whitelist}
      onChange={onChange}
      value={''}
    />
  );
};

export default TaggableTextarea;

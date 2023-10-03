import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

function TodoItem({ task, edit, remove }) {
    return (
        <li>
            {task}
            <div className="button-container">
                <button className="edit-button" onClick={edit}>
                    <FontAwesomeIcon icon={faEdit} /> {/* Edit icon */}
                </button>
                <button className="remove-button" onClick={remove}>
                    <FontAwesomeIcon icon={faTrash} /> {/* Remove icon */}
                </button>
            </div>
        </li>
    );
}

export default TodoItem;

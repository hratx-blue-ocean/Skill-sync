import React from 'react';

function NewPost(props) {
  return (
    <div className='component-container'>
      <h1 className='header'>New Post</h1>
      <div>
        <div>
          <p>What do you want to teach?</p>
          <div id='select'>
            <select name='' id=''>
              <option value=''>Choose from your skills</option>
              <option value=''>English</option>
              <option value=''>Cooking</option>
            </select>
          </div>
        </div>
        <div>
          <p>Enter brief description</p>
          <textarea placeholder='how long you have practiced this skill, etc'></textarea>
        </div>
      </div>
      <button>POST</button>
    </div>
  );
}

export default NewPost;

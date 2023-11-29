import React from 'react';

function AddItem({}) {
  return (
      <div className='bg-slate-500'>
        <label for='underline_select' class='sr-only'>
          Underline select
        </label>
        <select
          id='underline_select'
          class='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
        >
          <option selected>List Type</option>
          <option value='BD'>Birthday</option>
          <option value='HL'>Holiday</option>
          <option value='RG'>Registry</option>
          <option value='GL'>Group List</option>
        </select>

        <div className='mb-6'>
          <label
            htmlFor='large-input'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Title
          </label>
          <input
            type='text'
            id='large-input'
            className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='default-input'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Description
          </label>
          <input
            type='text'
            id='default-input'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div>
          <label
            htmlFor='small-input'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Link
          </label>
          <input
            type='text'
            id='small-input'
            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>

        <label className='relative inline-flex items-center cursor-pointer'>
          <input
            type='checkbox'
            value=''
            className='sr-only peer'
            defaultChecked
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Public
          </span>
        </label>

        <button
          className='bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-black transition ease-in duration-200'
          type='submit'
        >
          Add Item
        </button>
        {/* This creates the arrow pointing to the button */}
        <div className='content-none absolute top-full left-1/2 -ml-3 border-[0.75rem] border-solid border-t-slate-500 border-x-transparent border-b-transparent'></div>
      </div>
  );
}

export default AddItem;
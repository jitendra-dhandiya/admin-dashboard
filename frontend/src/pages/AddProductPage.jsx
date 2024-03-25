import React,{Fragment} from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import AddProductForm from '../components/AddProductForm';
import '../index.css'
const AddProductPage = () => {
  return (
    <Fragment>
       <div className='flex h-screen overflow-hidden'>
            <Sidebar/>
            <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
              <Header/>
              <main>
                <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                    <AddProductForm/>
                </div>
              </main>

            </div>
       </div>
    </Fragment>
  )
}

export default AddProductPage;
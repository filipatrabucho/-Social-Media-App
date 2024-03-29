import {Routes, Route} from 'react-router-dom';
import SigninForms from './_auth/forms/SigninForms';
import { Home } from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import Authlayout from './_auth/Authlayout';
import RootLayout from './_root/RootLayout';
import './globals.css';


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/*Public Routes*/}
        <Route element={<Authlayout/>} >
          <Route path="/sign-in" element={<SigninForms/>} />
          <Route path="/sign-up" element={<SignupForm/>} />
        </Route>
        {/*Public Routes*/}
        <Route element={<RootLayout/>} >
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </main>
  )
}

export default App;
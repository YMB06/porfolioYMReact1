import { Index } from '../pages/Index';
import { Form } from '../pages/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/porfolio/form" element={<Form />} />
    </Routes>
</BrowserRouter>  )
}


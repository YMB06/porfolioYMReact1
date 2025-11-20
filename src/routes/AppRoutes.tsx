import { Index } from '../pages/Index';
import { Form } from '../pages/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const AppRoutes = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/form" element={<Form />} />
    </Routes>
</BrowserRouter>  )
}


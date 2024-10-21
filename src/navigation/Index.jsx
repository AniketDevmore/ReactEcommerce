import { BrowserRouter, Route, Routes } from "react-router-dom"

const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" />
                <Route path="/login" />
            </Routes>
        </BrowserRouter>
    )
}

export default Index;
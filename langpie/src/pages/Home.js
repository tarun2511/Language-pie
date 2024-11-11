import Card from '@mui/material/Card';
import {Link} from "react-router-dom";

export default function Home(){
    return(
        <>
        <div className="home-container">
        <div className='row1-container'>
        <h3>Words by category</h3>
        <div className="words-b-category-container">
        <Link to="/wordlist">
        <Card variant="outlined" sx={{minWidth: "150px", marginRight: "20px", height: "150px"}}>
            <h4>Nature</h4>
            <p>Level: B1</p>
        </Card>
        </Link>

        <Card variant="outlined" sx={{minWidth: "150px", marginRight: "20px", height: "150px"}}>
            <h4>Body parts</h4>
            <p>Level: B1</p>
        </Card>

        <Card variant="outlined" sx={{minWidth: "150px", marginRight: "20px", height: "150px"}}>
            <h4>Science</h4>
            <p>Level: B2</p>
        </Card>

        <Card variant="outlined" sx={{minWidth: "150px", marginRight: "20px", height: "150px"}}>
            <h4>Greetings</h4>
            <p>Level: A2</p>
        </Card>
        <Card variant="outlined" sx={{minWidth: "150px", marginRight: "20px", height: "150px"}}>
            <h4>Fruits& Vegetables</h4>
            <p>Level: A2</p>
        </Card>
        <Card variant="outlined" sx={{minWidth: "150px", marginRight: "20px", height: "150px"}}>
            <h4>Vehicles</h4>
            <p>Level: B1</p>
         
        </Card>
        <Card variant="outlined" sx={{minWidth: "150px", marginRight: "20px", height: "150px"}}>
            <h4>General</h4>
            <p>Level: B2</p>
        </Card>
        </div>
        </div>
        </div>
        </>
    )
}
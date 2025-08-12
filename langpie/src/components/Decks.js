import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Deck(){

    const [decks, setDecks] = useState(["MyList", "Important", "Books", "Newspaper"]);
    return(
        <>
        <div className="deck-container">
            <table>
                <tr>
                    <th>Deck</th>
                    <th style={{paddingLeft: "100px"}}>New</th>
                    <th style={{paddingLeft: "30px"}}>Due</th>
                </tr>
                {
                    decks.map(el => {
                        return <tr><Link style={{textDecoration:"none", color: "black"}} to="/deckDetails" target="_blank"><td>{el}</td></Link>
                        <td style={{paddingLeft: "100px"}}>10</td>
                        <td style={{paddingLeft: "30px"}}>4</td></tr>

                    })
                }
            </table>
        </div>
        </>
    )
}
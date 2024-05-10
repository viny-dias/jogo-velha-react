import { useState } from "react"

export default function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [ isEditing, setIsEditing ] =  useState(false)

    const handleChange = (event) => {
      setPlayerName(event.target.value)
    }

    return (
        <li>
            <span className="player">
              { isEditing 
                ? <input type="text" name="" id="" required value={playerName} onChange={handleChange} />
                : <span className="player-name">{ playerName }</span> 
                }
              <span className="player-symbol">{ symbol }</span>
            </span>
            <button onClick={ () => setIsEditing((editing) => !editing) }>{ isEditing ? 'Save' : 'Edit' }</button>
        </li>
    )
}
import './index.css'

import {AiOutlineDelete} from 'react-icons/ai'

const EachSong = props => {
  const {item, deleteItem} = props
  const {id, imageUrl, name, duration, genre} = item
  const deleteClicked = () => {
    deleteItem(id)
  }
  return (
    <li className="listItem">
      <div className="EachSongTopContainer">
        <img src={imageUrl} className="image" alt="track" />
        <div className="titleContainer">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="EachSongBottomContainer">
        <p className="duration">{duration}</p>
        <button
          className="deleteButton"
          type="button"
          data-testid="delete"
          onClick={deleteClicked}
        >
          .<AiOutlineDelete className="deleteIcon" />
        </button>
      </div>
    </li>
  )
}

export default EachSong

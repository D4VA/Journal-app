import { NoteAppBar } from "./NoteAppBar"

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NoteAppBar />

      <div className="notes__content">
        
        <input 
          type="text"
          placeholder="Some awesome title"
          className="notes__tittle-input"
          autoComplete="off"
        />
        
        <textarea
          placeholder="What happened today"
          className="notes__textarea"
        >
        
        </textarea>

        <div className="notes__image">
          <img 
            src="https://iphoneros.com/wp-content/uploads/2020/01/moradoiro.jpeg"
            alt="imagen"
          />
        </div>

      </div>
    </div>
  )
}

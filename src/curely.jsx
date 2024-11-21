export default function Avatar() {
    const avatar = 'src/images/nature.jpeg';
    const description = 'nature image';
    let name = 'Beauty Of Nature'
    let button = 'Click here'
     return (
        <> 
        <h1 style={{
            color:   'purple',
            fontWeight: 'bolder'
        }}>{name}</h1>     
        <img
        className="avatar"
        src={avatar}
        alt={description}
      />
      <button className="button">{button}</button>
       </>

    );
  }
  
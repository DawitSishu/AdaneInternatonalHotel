
import './style.css'
const index = () => {
   
  return (
    <>
    <div class="images">
        <div class="main-title">
          <h1>Adane</h1>
          <br />
          <h1>International</h1>
          <br />
          <h1>Hotel</h1>
          <br />
        </div>
      <div className="container">
        <input type="radio" name="slider" id="item-1" defaultChecked />
        <input type="radio" name="slider" id="item-2" />
        <input type="radio" name="slider" id="item-3" />
        <div className="cards">
          <label className="card" htmlFor="item-1" id="song-1">
            <img
              src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
              alt="song"
              className="about-img"
            />
          </label>
          <label className="card" htmlFor="item-2" id="song-2">
            <img
              src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
              alt="song"
              className="about-img"
            />
          </label>
          <label className="card" htmlFor="item-3" id="song-3">
            <img
              src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="song"
              className="about-img"
            />
          </label>
      </div>
    </div>
      </div>
      <div class="about-content">
        <div class="logo-card">
          <div>
            <img
              src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="logp"
              class="logo-img"
            />
          </div>
        </div>
        <div class="logo-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit odio
          sint veniam recusandae commodi quasi voluptate? Repudiandae quo ipsam
          non perferendis. Eligendi at modi eaque error temporibus dolorem
          eveniet ipsa. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Fugit odio sint veniam recusandae commodi quasi voluptate?
          Repudiandae quo ipsam non perferendis. Eligendi at modi eaque error
          temporibus dolorem eveniet ipsa. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Fugit odio sint veniam recusandae
          commodi quasi voluptate? Repudiandae quo ipsam non perferendis.
          Eligendi at modi eaque error temporibus dolorem eveniet ipsa.Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Fugit odio sint
          veniam recusandae commodi quasi voluptate? Repudiandae quo ipsam non
          perferendis. Eligendi at modi eaque error temporibus dolorem eveniet
          ipsa.
        </div>
      </div>
      </>
  )
}

export default index
import BikeImg from "../../../assets/scooter-img.png"
import Circle from "../../../assets/Circle.png"
const HeroSection = () => {
  return (
    <>
   <div className="mx-3">
    <div className="d-flex justify-content-center align-items-center gap-4">
      <div>
        <img className="w-25" src={Circle} alt="" />
        <h3>Fair price ride</h3>
        <h1>Rent our <span className="text-warning">Scooter</span></h1>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the <br /> 1500s, when an unknown printer took a galley of type and scrambled it to <br /> make a type specimen book. </p>
      </div>
      <div className="d-flex justify-content-end mt-2 bg-none">
        <img className="w-75 pt-1 bg-none" src={BikeImg} alt="bike-img" />
      </div>
    </div>
   </div>
    </>
  )
}

export default HeroSection;
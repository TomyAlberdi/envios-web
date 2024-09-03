// eslint-disable-next-line react/prop-types
const WelcomeScreen = ({loading}) => {
  if (loading) {
    return (
      <div className="WelcomeScreen">
        <img src="/delivery-white.svg" alt="logo" />
        <h1>Lorem Ipsum</h1>
      </div>
    )
  }
}
export default WelcomeScreen
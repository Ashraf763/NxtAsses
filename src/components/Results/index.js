import './index.css'

const Results = props => {
  const {history} = props
  const {location} = history
  const {score, timeTaken} = location.state || {timeTaken: 0, score: 0}

  const hours = String(Math.floor(timeTaken / 3600))
  const minutes = String(Math.floor(timeTaken / 60))
  const seconds = String(timeTaken % 60)

  const checkLength = val => (val.length > 1 ? val : 0 + val)

  const onClickReattempt = () => {
    history.replace('/assessment')
  }

  return (
    <div className="results-container">
      <div className="res-container">
        <img
          src={
            timeTaken === 600
              ? 'https://res.cloudinary.com/ddzpowg4l/image/upload/v1733825733/calender_1_1_pnyrck.png'
              : 'https://res.cloudinary.com/ddzpowg4l/image/upload/v1733138174/Asset_2_1_ttyccs.png'
          }
          alt={timeTaken === 600 ? 'time up' : 'submit'}
          className="res-image"
        />
        <h2 className="res-heading">
          {timeTaken === 600
            ? 'Time is up!'
            : 'Congrats! You completed the assessment.'}
        </h2>
        {timeTaken === 600 && (
          <p className="mes">
            You did not complete the assessment within the time.
          </p>
        )}

        <div className="score-cont">
          <p className="time">Time Taken:</p>
          <p className="score-highlight">
            {`${checkLength(hours)}:${checkLength(minutes)}:${checkLength(
              seconds,
            )}`}
          </p>
        </div>

        <div className="score-cont">
          <p className="score">Your Score:</p>
          <p className="score-highlight-2">{score}</p>
        </div>

        <button
          type="button"
          className="submit-btn2"
          onClick={onClickReattempt}
        >
          Reattempt
        </button>
      </div>
    </div>
  )
}

export default Results

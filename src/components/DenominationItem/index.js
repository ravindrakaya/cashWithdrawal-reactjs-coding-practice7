// Write your code here
import './index.css'

const DenominationItem = props => {
  const {amountDetails, onDecreaseAmount} = props
  const {value} = amountDetails

  const onBtnClick = () => {
    onDecreaseAmount(value)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onBtnClick}>
        {value}
      </button>

      <br />
    </li>
  )
}
export default DenominationItem

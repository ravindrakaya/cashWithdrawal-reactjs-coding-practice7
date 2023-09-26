// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

const initialListItems = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDecreaseAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="logo-container">
            <button type="button" className="logo">
              S
            </button>
            <p className="logo-title">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-title">Your Balance</p>
            <p className="balance-amount">
              {amount} <br />
              <span className="span-tag">In Rupees</span>
            </p>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-title">Withdraw</p>
            <p className="withdraw-para">CHOOSE SUM (IN RUPEES)</p>
            <ul className="list-container">
              {initialListItems.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  amountDetails={eachItem}
                  onDecreaseAmount={this.onDecreaseAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal

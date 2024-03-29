import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateFormat';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
// import moment from 'moment'

function Tsx() {
    const { transactionHistory } = useGlobalContext()

    const [...history] = transactionHistory()
    return (
        <InnerLayout>

        <HistoryStyled>
            <h2 style={{fontSize:"3rem"}}>All Transactions</h2>
            {history.map((item) => {
                const { _id, title, amount, type } = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)', fontSize:"1.6rem"
                        }}>
                            {title}
                        </p>
                        

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)', fontSize:"1.6rem"
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    </InnerLayout>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        hover:
    }
`;

export default Tsx